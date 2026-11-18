import fs from 'node:fs';
import path from 'node:path';
import { launchPlaywrightBrowser } from './browser-helper.mjs';

const TARGET_URL = process.argv[2] || 'https://hamidmehrani.pages.dev';
const QA_DIR = '/home/hamid/.gemini/antigravity/brain/0ddc6eac-bbd6-4e4f-9527-0e7e4fa8a172/scratch/qa';
fs.mkdirSync(QA_DIR, { recursive: true });

const CONFIGS = [
  { id: 'desktop-en', url: `${TARGET_URL}/`, width: 1440, height: 900, expectedDir: 'ltr', expectedLang: 'en' },
  { id: 'mobile-en', url: `${TARGET_URL}/`, width: 390, height: 844, expectedDir: 'ltr', expectedLang: 'en' },
  { id: 'desktop-fa', url: `${TARGET_URL}/?lang=fa`, width: 1440, height: 900, expectedDir: 'rtl', expectedLang: 'fa' },
  { id: 'mobile-fa', url: `${TARGET_URL}/?lang=fa`, width: 390, height: 844, expectedDir: 'rtl', expectedLang: 'fa' },
];

const HEADER_SWEEP_VIEWPORTS = [
  { width: 1440, height: 900 },
  { width: 1366, height: 768 },
  { width: 1280, height: 800 },
  { width: 840, height: 900 },
  { width: 390, height: 844 },
  { width: 375, height: 812 },
];

async function captureSections(page, prefix) {
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.waitForTimeout(250);
  await page.screenshot({ path: path.join(QA_DIR, `${prefix}-01-hero.png`), fullPage: false });

  for (const [slug, sel] of [
    ['02-ventures', '#ventures'],
    ['03-exvorta-web', '#exvorta-web'],
    ['04-pipeline', '#pipeline'],
    ['05-resume', '#resume'],
    ['06-footer', '#contact'],
  ]) {
    await page.evaluate((selector) => {
      const el = document.querySelector(selector);
      if (el) window.scrollTo({ top: Math.max(0, el.offsetTop - 68), behavior: 'instant' });
    }, sel);
    await page.waitForTimeout(250);
    await page.screenshot({ path: path.join(QA_DIR, `${prefix}-${slug}.png`), fullPage: false });
  }

  // Capture page bottom so monumental wordmark is always checked on mobile & desktop
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
  await page.waitForTimeout(250);
  await page.screenshot({ path: path.join(QA_DIR, `${prefix}-07-wordmark.png`), fullPage: false });
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
      if (gap < 4) {
        overlaps.push({ a: els[i].cls, b: els[i + 1].cls, gapPx: gap });
      }
    }
    return { items: els, minGapPx: minGap === 9999 ? null : minGap, overlaps };
  });
}

async function main() {
  const browser = await launchPlaywrightBrowser({ useProxy: true });
  const report = { targetUrl: TARGET_URL, views: {}, headerSweep: {}, interactions: {} };

  try {
    for (const cfg of CONFIGS) {
      const context = await browser.newContext({
        viewport: { width: cfg.width, height: cfg.height },
        deviceScaleFactor: 1,
      });
      const page = await context.newPage();
      const consoleErrors = [];
      const pageErrors = [];
      page.on('console', (m) => {
        if (m.type() === 'error') consoleErrors.push(m.text());
      });
      page.on('pageerror', (err) => pageErrors.push(err.message));

      const resp = await page.goto(cfg.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.evaluate(() => document.fonts?.ready).catch(() => {});
      await page.waitForTimeout(900);

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

      const metrics = await page.evaluate(() => {
        const doc = document.documentElement;
        const brokenImgs = Array.from(document.images)
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => img.getAttribute('src'));

        const offenders = [];
        for (const el of document.querySelectorAll('*')) {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && (r.right > window.innerWidth + 1 || r.left < -1)) {
            offenders.push({
              tag: el.tagName,
              id: el.id || null,
              left: Math.round(r.left),
              right: Math.round(r.right),
            });
            if (offenders.length >= 10) break;
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
              sub12Fa.push({ tag: el.tagName, cls: el.className, px, text: el.textContent.trim().slice(0, 30) });
            }
          }
        }

        const headerRect = document.querySelector('.site-header')?.getBoundingClientRect();
        return {
          title: document.title,
          lang: doc.lang,
          dir: doc.dir,
          innerWidth: window.innerWidth,
          scrollWidth: doc.scrollWidth,
          overflowPx: doc.scrollWidth - window.innerWidth,
          totalImages: document.images.length,
          brokenImgs,
          offenders,
          minFaFontPx: doc.lang === 'fa' ? minFaFontPx : null,
          sub12Fa,
          headerHeight: headerRect ? Math.round(headerRect.height) : 0,
        };
      });

      await captureSections(page, cfg.id);

      if (cfg.id === 'desktop-en') {
        await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
        const initialCards = await page.locator('.venture-card').count();
        await page.locator('[data-filter="ai"]').click();
        const aiCards = await page.locator('.venture-card').count();
        await page.locator('[data-filter="all"]').click();
        await page.locator('#view-ledger').click();
        const ledgerRows = await page.locator('.ledger-row').count();
        await page.locator('#view-exhibition').click();

        await page.locator('[data-open-venture="exvorta"]').first().click();
        await page.waitForTimeout(250);
        const dossierVisible = await page.locator('#dossier-modal').isVisible();
        await page.screenshot({ path: path.join(QA_DIR, 'modal-dossier.png'), fullPage: false });
        await page.locator('#dossier-modal-close').click();

        await page.locator('[data-open-preview="spicevo"]').first().click();
        await page.waitForFunction(() => {
          const img = document.querySelector('#dossier-modal .preview-device-frame img');
          return img && img.complete && img.naturalWidth > 0;
        });
        await page.locator('[data-preview-mode="mobile"]').click();
        await page.waitForFunction(() => {
          const img = document.querySelector('#dossier-modal .preview-device-frame.is-mobile img');
          return img && img.complete && img.naturalWidth > 0 && img.getBoundingClientRect().height > 200;
        });
        const mobPreviewRect = await page.locator('.preview-device-frame.is-mobile img').boundingBox();
        await page.screenshot({ path: path.join(QA_DIR, 'modal-preview.png'), fullPage: false });
        await page.locator('#dossier-modal-close').click();

        await page.locator('[data-stage-idx="3"]').click();
        const pipelineCode = await page.locator('#pipeline-inspector code').textContent();
        await page.locator('[data-track="ai"]').click();
        const resumeHeadline = await page.locator('.resume-track-headline').textContent();

        await page.keyboard.press('Control+k');
        await page.waitForTimeout(200);
        const cmdVisible = await page.locator('#cmd-modal').isVisible();
        await page.screenshot({ path: path.join(QA_DIR, 'modal-cmd.png'), fullPage: false });
        await page.keyboard.press('Escape');

        report.interactions = {
          initialCards,
          aiFilteredCards: aiCards,
          ledgerRows,
          dossierVisible,
          mobPreviewRect,
          pipelineStep4Verified: pipelineCode.includes('verify-live.mjs'),
          resumeTrackAHeadlineMatch: resumeHeadline.includes('AI AUTOMATION ENGINEER'),
          cmdPaletteVisible: cmdVisible,
        };
      }

      if (cfg.id === 'desktop-en' || cfg.id === 'desktop-fa') {
        const sweepResults = [];
        for (const vp of HEADER_SWEEP_VIEWPORTS) {
          await page.setViewportSize(vp);
          await page.waitForTimeout(120);
          const check = await measureHeaderOverlaps(page);
          sweepResults.push({ ...vp, ...check });
        }
        report.headerSweep[cfg.expectedLang] = sweepResults;
      }

      report.views[cfg.id] = {
        httpStatus: resp ? resp.status() : 0,
        consoleErrors,
        pageErrors,
        ...metrics,
        dirMatch: metrics.dir === cfg.expectedDir,
        langMatch: metrics.lang === cfg.expectedLang,
        zeroOverflow: metrics.scrollWidth <= metrics.innerWidth,
      };

      await context.close();
    }
  } finally {
    await browser.close();
  }

  fs.writeFileSync(path.join(QA_DIR, 'qa-report.json'), JSON.stringify(report, null, 2), 'utf8');
  console.log(JSON.stringify(report, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
