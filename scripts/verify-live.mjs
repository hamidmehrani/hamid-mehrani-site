import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { launchPlaywrightBrowser } from './browser-helper.mjs';

const RAW_TARGET = process.argv[2] || 'local';
const ROOT_DIR = '/home/hamid/github/hamid-mehrani-site';
const QA_DIR = path.join(ROOT_DIR, 'qa', new Date().toISOString().replace(/[:.]/g, '-'));
const DIST_DIR = '/home/hamid/github/hamid-mehrani-site/dist';

fs.mkdirSync(QA_DIR, { recursive: true });

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

function startLocalServer(rootDir) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlObj = new URL(req.url, 'http://127.0.0.1');
      let rel = decodeURIComponent(urlObj.pathname);
      if (rel.endsWith('/')) rel += 'index.html';
      let diskPath = path.join(rootDir, rel);
      if (!fs.existsSync(diskPath) || fs.statSync(diskPath).isDirectory()) {
        const idxTry = path.join(rootDir, rel, 'index.html');
        if (fs.existsSync(idxTry)) diskPath = idxTry;
      }
      if (!fs.existsSync(diskPath) || fs.statSync(diskPath).isDirectory()) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const ext = path.extname(diskPath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(diskPath).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, baseUrl: `http://127.0.0.1:${port}` });
    });
  });
}

const HEADER_SWEEP_VIEWPORTS = [
  { width: 1440, height: 900 },
  { width: 1366, height: 768 },
  { width: 1280, height: 800 },
  { width: 840, height: 900 },
  { width: 390, height: 844 },
  { width: 375, height: 812 },
];

async function forceLoadImages(page) {
  await page.evaluate(async () => {
    for (const img of document.querySelectorAll('img[loading="lazy"]')) {
      img.setAttribute('loading', 'eager');
    }
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) => {
              img.addEventListener('load', res, { once: true });
              img.addEventListener('error', res, { once: true });
            }),
      ),
    );
  });
}

async function gotoSettled(page, url) {
  // First try: full network idle (strictest). On timeout (slow proxy / fonts),
  // retry once with domcontentloaded + a settled wait instead of failing the run.
  try {
    return await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  } catch (err) {
    const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(1800);
    await page.evaluate(() => document.fonts?.ready).catch(() => {});
    return resp;
  }
}

async function measurePageHealth(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const brokenImgs = Array.from(document.images)
      .filter((img) => !img.complete || img.naturalWidth === 0)
      .map((img) => img.getAttribute('src'));

    const offenders = [];
    for (const el of document.querySelectorAll('*')) {
      const st = getComputedStyle(el);
      if (st.display === 'none' || st.visibility === 'hidden') continue;
      // Ignore clipped elements inside overflow:hidden/auto/clip ancestors if document doesn't overflow
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > window.innerWidth + 1.5 || r.left < -1.5)) {
        let clippedByAncestor = false;
        let p = el.parentElement;
        while (p && p !== doc) {
          const pst = getComputedStyle(p);
          if (['hidden', 'clip', 'auto', 'scroll'].includes(pst.overflowX)) {
            const pr = p.getBoundingClientRect();
            if (pr.left >= -1.5 && pr.right <= window.innerWidth + 1.5) {
              clippedByAncestor = true;
              break;
            }
          }
          p = p.parentElement;
        }
        if (!clippedByAncestor) {
          offenders.push({
            tag: el.tagName,
            cls: (el.className && String(el.className).slice(0, 40)) || null,
            left: Math.round(r.left),
            right: Math.round(r.right),
          });
          if (offenders.length >= 10) break;
        }
      }
    }

    let minFaFontPx = 999;
    const sub12Fa = [];
    if (doc.lang === 'fa') {
      for (const el of document.querySelectorAll('body *:not(script):not(style):not(svg *)')) {
        const st = getComputedStyle(el);
        if (st.display === 'none' || st.visibility === 'hidden') continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        const hasDirectText = Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim().length > 0);
        if (!hasDirectText) continue;
        const px = parseFloat(st.fontSize);
        if (px < minFaFontPx) minFaFontPx = px;
        if (px < 11.9 && sub12Fa.length < 10) {
          sub12Fa.push({ tag: el.tagName, cls: String(el.className).slice(0, 35), px, text: el.textContent.trim().slice(0, 28) });
        }
      }
    }

    const hasNextPortal = Boolean(document.querySelector('.next-portal-card'));
    const quickDockItems = document.querySelectorAll('.quick-dock .dock-item').length;

    return {
      title: document.title,
      lang: doc.lang,
      dir: doc.dir,
      innerWidth: window.innerWidth,
      scrollWidth: doc.scrollWidth,
      scrollHeight: doc.scrollHeight,
      overflowPx: Math.max(0, doc.scrollWidth - window.innerWidth),
      totalImages: document.images.length,
      brokenImgs,
      offenders,
      minFaFontPx: doc.lang === 'fa' ? minFaFontPx : null,
      sub12Fa,
      hasNextPortal,
      quickDockItems,
    };
  });
}

async function measureHeaderOverlaps(page) {
  return page.evaluate(() => {
    const els = [
      document.querySelector('.brand-anchor'),
      document.querySelector('.telemetry-pill'),
      document.querySelector('.primary-nav'),
      document.querySelector('.header-controls'),
    ]
      .filter((el) => {
        if (!el) return false;
        const st = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return st.display !== 'none' && st.visibility !== 'hidden' && r.width > 0 && r.height > 0;
      })
      .map((el) => {
        const r = el.getBoundingClientRect();
        return {
          cls: el.className.split(' ')[0],
          left: Math.round(r.left),
          right: Math.round(r.right),
        };
      })
      .sort((a, b) => a.left - b.left);

    const overlaps = [];
    let minGap = 9999;
    for (let i = 0; i < els.length - 1; i++) {
      const gap = els[i + 1].left - els[i].right;
      if (gap < minGap) minGap = gap;
      if (gap < 4) overlaps.push({ a: els[i].cls, b: els[i + 1].cls, gapPx: gap });
    }
    return { items: els, minGapPx: minGap === 9999 ? null : minGap, overlaps };
  });
}

async function main() {
  let localSrv = null;
  let targetUrl = RAW_TARGET;
  const isLocal = RAW_TARGET === 'local';

  if (isLocal) {
    localSrv = await startLocalServer(DIST_DIR);
    targetUrl = localSrv.baseUrl;
  }

  const browser = await launchPlaywrightBrowser({ useProxy: !isLocal });
  const report = {
    targetUrl,
    routesChecked: {},
    headerSweep: {},
    interactions: {},
  };

  const ROUTE_MATRIX = [
    { slug: 'home', path: '/' },
    { slug: 'case-exvorta', path: '/work/exvorta' },
    { slug: 'case-firoza', path: '/work/firoza' },
    { slug: 'case-hamesu', path: '/work/hamesu' },
    { slug: 'case-cvly', path: '/work/cvly' },
    { slug: 'case-leadvium', path: '/work/leadvium' },
    { slug: 'case-audit', path: '/work/audit' },
    { slug: 'case-daftaryar', path: '/work/daftaryar' },
    { slug: 'case-jobhunt', path: '/work/jobhunt' },
    { slug: 'studio-exvorta-web', path: '/exvorta-web' },
    { slug: 'lab-pipeline', path: '/pipeline' },
    { slug: 'folio-resume', path: '/resume' },
    { slug: 'concierge-hire', path: '/hire' },
  ];

  const VIEWPORTS = [
    { label: 'desktop-en', width: 1440, height: 900, query: '', expectedDir: 'ltr', expectedLang: 'en' },
    { label: 'mobile-en', width: 390, height: 844, query: '', expectedDir: 'ltr', expectedLang: 'en' },
    { label: 'desktop-fa', width: 1440, height: 900, query: '?lang=fa', expectedDir: 'rtl', expectedLang: 'fa' },
    { label: 'mobile-fa', width: 390, height: 844, query: '?lang=fa', expectedDir: 'rtl', expectedLang: 'fa' },
  ];

  try {
    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 1,
      });
      const page = await context.newPage();
      const consoleErrors = [];
      const pageErrors = [];
      page.on('console', (m) => {
        if (m.type() === 'error') consoleErrors.push(m.text());
      });
      page.on('pageerror', (err) => pageErrors.push(err.message));

      for (const rt of ROUTE_MATRIX) {
        consoleErrors.length = 0;
        pageErrors.length = 0;

        const fullUrl = `${targetUrl}${rt.path}${vp.query}`;
        const resp = await gotoSettled(page, fullUrl);
        await page.evaluate(() => document.fonts?.ready).catch(() => {});
        await page.waitForTimeout(350);
        await forceLoadImages(page);

        // Reveal all sections so scrollHeight & screenshots capture complete visual state
        await page.evaluate(() => {
          document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
        });

        const health = await measurePageHealth(page);
        const key = `${rt.slug}__${vp.label}`;
        report.routesChecked[key] = {
          url: fullUrl,
          httpStatus: resp ? resp.status() : 0,
          consoleErrors: [...consoleErrors],
          pageErrors: [...pageErrors],
          ...health,
          zeroOverflow: health.overflowPx === 0 && health.offenders.length === 0,
          dirMatch: health.dir === vp.expectedDir,
          langMatch: health.lang === vp.expectedLang,
        };

        // Capture screenshots of key pages across all 4 viewport/lang combos
        if (['home', 'case-exvorta', 'studio-exvorta-web', 'lab-pipeline', 'folio-resume', 'concierge-hire'].includes(rt.slug)) {
          await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
          await page.waitForTimeout(180);
          await page.screenshot({ path: path.join(QA_DIR, `${vp.label}-${rt.slug}-top.png`), fullPage: false });

          if (rt.slug === 'home') {
            for (const [secName, sel] of [
              ['ventures', '#ventures'],
              ['cinema', '#exvorta-web'],
              ['hire', '#hire-engine'],
              ['footer', '#contact'],
            ]) {
              await page.evaluate((s) => {
                const el = document.querySelector(s);
                if (el) window.scrollTo({ top: Math.max(0, el.offsetTop - 70), behavior: 'instant' });
              }, sel);
              await page.waitForTimeout(180);
              await page.screenshot({ path: path.join(QA_DIR, `${vp.label}-home-${secName}.png`), fullPage: false });
            }
          } else if (rt.slug === 'case-exvorta') {
            await page.evaluate(() => {
              const el = document.querySelector('#case-topology-mount');
              if (el) window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 110), behavior: 'instant' });
            });
            await page.waitForTimeout(180);
            await page.screenshot({ path: path.join(QA_DIR, `${vp.label}-case-exvorta-topology.png`), fullPage: false });
          }
        }
      }

      // Interactive E2E verification on desktop-en
      if (vp.label === 'desktop-en') {
        await gotoSettled(page, `${targetUrl}/`);
        await page.waitForTimeout(300);

        // 1. Switch Trade Cinema to Aurum
        await page.locator('[data-trade-select="aurum"]').click();
        const cinemaTitle = await page.locator('.cinema-title').textContent();

        // 2. Toggle Interactive Ledger
        await page.locator('[data-view="index"]').click();
        const ledgerCount = await page.locator('.ledger-index-row').count();

        // 3. Click SPA route link to /work/exvorta (no full reload)
        await page.locator('.ledger-index-row[href="/work/exvorta"]').click();
        await page.waitForTimeout(450);
        const spaPathAfterClick = await page.evaluate(() => window.location.pathname);

        // 4. Test Split Comparator & Topology Node click on /work/exvorta
        await page.locator('[data-case-media="split"]').click();
        const hasSplitSlider = (await page.locator('[data-split-range]').count()) === 1;
        await page.locator('.topo-pill-btn[data-topo-idx="2"]').click();
        const topoDetailHeading = await page.locator('.topo-detail-card h4').textContent();

        // 5. Test Dev HUD (Ctrl+i) & Command Palette (Ctrl+k)
        await page.keyboard.press('Control+i');
        await page.waitForTimeout(180);
        const devHudVisible = await page.locator('#dev-hud-panel').isVisible();
        await page.screenshot({ path: path.join(QA_DIR, 'desktop-en-dev-hud.png'), fullPage: false });
        await page.keyboard.press('Control+i');

        await page.keyboard.press('Control+k');
        await page.waitForTimeout(180);
        const cmdVisible = await page.locator('#cmd-modal').isVisible();
        const cmdCount = await page.locator('.cmd-item').count();
        await page.keyboard.press('Escape');

        report.interactions = {
          cinemaSwitchedToAurum: cinemaTitle?.trim() === 'Aurum',
          ledgerRowCount: ledgerCount,
          spaNavigatedPath: spaPathAfterClick,
          hasSplitSlider,
          topoNode3Heading: topoDetailHeading?.trim(),
          devHudVisible,
          cmdVisible,
          cmdCount,
        };
      }

      if (vp.label === 'desktop-en' || vp.label === 'desktop-fa') {
        await gotoSettled(page, `${targetUrl}/${vp.query}`);
        const sweep = [];
        for (const hvp of HEADER_SWEEP_VIEWPORTS) {
          await page.setViewportSize(hvp);
          await page.waitForTimeout(100);
          const res = await measureHeaderOverlaps(page);
          sweep.push({ ...hvp, ...res });
        }
        report.headerSweep[vp.expectedLang] = sweep;
      }

      await context.close();
    }
  } finally {
    await browser.close();
    if (localSrv) localSrv.server.close();
  }

  // Summarize overall pass/fail (runs even after a mid-run throw: the
  // report is the evidence, and a missing report hid the last 36/36 run).
  const routeEntries = Object.entries(report.routesChecked);
  const failures = routeEntries
    .filter(
      ([, v]) =>
        v.httpStatus !== 200 ||
        v.consoleErrors.length > 0 ||
        v.pageErrors.length > 0 ||
        !v.zeroOverflow ||
        v.brokenImgs.length > 0 ||
        v.sub12Fa.length > 0 ||
        !v.dirMatch ||
        !v.langMatch ||
        !v.hasNextPortal,
    )
    .map(([k, v]) => ({ key: k, status: v.httpStatus, overflowPx: v.overflowPx, offenders: v.offenders, brokenImgs: v.brokenImgs, sub12Fa: v.sub12Fa, dirMatch: v.dirMatch, langMatch: v.langMatch, consoleErrors: v.consoleErrors, pageErrors: v.pageErrors }));

  const headerOverlaps = [
    ...(report.headerSweep.en || []).filter((x) => x.overlaps.length > 0),
    ...(report.headerSweep.fa || []).filter((x) => x.overlaps.length > 0),
  ];

  report.summary = {
    totalChecks: routeEntries.length,
    failureCount: failures.length,
    failures,
    headerOverlapCount: headerOverlaps.length,
    headerOverlaps,
  };

  fs.writeFileSync(path.join(QA_DIR, 'qa-report.json'), JSON.stringify(report, null, 2), 'utf8');
  console.log(JSON.stringify(report.summary, null, 2));
  console.log('Interactions:', JSON.stringify(report.interactions, null, 2));

  if (failures.length > 0 || headerOverlaps.length > 0) {
    process.exitCode = 1;
  }
}

const __origMain = main;
main = async () => {
  try {
    await __origMain();
  } catch (err) {
    console.error(err);
    try {
      fs.mkdirSync(QA_DIR, { recursive: true });
      fs.writeFileSync(
        path.join(QA_DIR, 'qa-report.json'),
        JSON.stringify(
          {
            targetUrl: RAW_TARGET,
            runError: String(err && err.message ? err.message : err),
            summary: { totalChecks: 0, failureCount: 1, failures: [{ key: 'run', runError: String(err && err.message ? err.message : err) }], headerOverlapCount: 0, headerOverlaps: [] },
          },
          null,
          2,
        ),
        'utf8',
      );
      console.log(`Wrote partial report to ${path.join(QA_DIR, 'qa-report.json')}`);
    } catch {}
    process.exit(1);
  }
};
main();
