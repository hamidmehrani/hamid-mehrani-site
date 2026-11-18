import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { ROUTES_MANIFEST } from '../src/data/portfolio.mjs';
import { renderRouteContent } from '../src/views/render-pages.mjs';

const ROOT = '/home/hamid/github/hamid-mehrani-site';
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');

const argUrlIdx = process.argv.indexOf('--portfolio-url');
const CANONICAL_URL = (
  argUrlIdx !== -1 && process.argv[argUrlIdx + 1]
    ? process.argv[argUrlIdx + 1]
    : 'https://hamidmehrani.pages.dev'
).replace(/\/$/, '');

function escapeAttr(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function copyRecursive(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function hashFile(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex').slice(0, 8);
}

function measureCodeSize(dir) {
  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['previews', 'resumes', 'fonts', 'work', 'exvorta-web', 'pipeline', 'resume', 'hire'].includes(entry.name)) {
        continue;
      }
      total += measureCodeSize(full);
    } else if (/\.(css|mjs|js)$/.test(entry.name)) {
      total += fs.statSync(full).size;
    }
  }
  return total;
}

function main() {
  const t0 = performance.now();
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // Copy modular ES2024 source & styles
  for (const sub of ['styles', 'canvas', 'data', 'graphics', 'motion', 'views']) {
    copyRecursive(path.join(SRC, sub), path.join(DIST, sub));
  }
  fs.copyFileSync(path.join(SRC, 'app.mjs'), path.join(DIST, 'app.mjs'));

  // Flatten src/public/* into dist/ root (previews/, fonts/, resumes/, favicon.svg, og-card.png)
  copyRecursive(path.join(SRC, 'public'), DIST);

  // Compute cache-busted asset query strings
  let shellTemplate = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
  shellTemplate = shellTemplate.replaceAll('https://hamidmehrani.pages.dev', CANONICAL_URL);

  for (const rel of [
    '/styles/tokens.css',
    '/styles/layout.css',
    '/styles/components.css',
    '/styles/pages.css',
    '/styles/print.css',
    '/app.mjs',
  ]) {
    const diskPath = path.join(DIST, rel.slice(1));
    const h = hashFile(diskPath);
    shellTemplate = shellTemplate.replaceAll(`"${rel}"`, `"${rel}?v=${h}"`);
  }

  // Pre-render all 13 routes into static HTML files
  const defaultSsrState = {
    route: '/',
    lang: 'en',
    filter: 'all',
    view: 'editorial',
    activeTradeId: 'spicevo',
    simId: 'sim-exvorta',
    pipelineIdx: 0,
    simRunning: false,
    hireRole: 'ai-architect',
    hireEngagement: 'trial',
    hireCustomNote: '',
    caseMediaMode: 'desktop',
    topoIdx: 0,
    resumeTrack: 'all',
  };

  for (const routeEntry of ROUTES_MANIFEST) {
    const ssrMain = renderRouteContent(routeEntry.path, { ...defaultSsrState, route: routeEntry.path });
    const canonicalHref =
      routeEntry.path === '/' ? `${CANONICAL_URL}/` : `${CANONICAL_URL}${routeEntry.path}`;

    const pageHtml = shellTemplate
      .replaceAll('{{PAGE_TITLE}}', escapeAttr(routeEntry.title.en))
      .replaceAll('{{PAGE_DESC}}', escapeAttr(routeEntry.desc.en))
      .replaceAll('{{CANONICAL_HREF}}', escapeAttr(canonicalHref))
      .replace('{{SSR_MAIN}}', ssrMain);

    const outPath =
      routeEntry.path === '/'
        ? path.join(DIST, 'index.html')
        : path.join(DIST, routeEntry.path.slice(1), 'index.html');

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, pageHtml, 'utf8');
  }

  // Security + Immutable Cache headers for Cloudflare Pages
  const headers = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/previews/*
  Cache-Control: public, max-age=2592000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/resumes/*
  Cache-Control: public, max-age=86400
`;
  fs.writeFileSync(path.join(DIST, '_headers'), headers, 'utf8');

  fs.writeFileSync(
    path.join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\nSitemap: ${CANONICAL_URL}/sitemap.xml\n`,
    'utf8',
  );

  const sitemapUrls = ROUTES_MANIFEST.map((r) => {
    const loc = r.path === '/' ? `${CANONICAL_URL}/` : `${CANONICAL_URL}${r.path}`;
    const prio = r.path === '/' ? '1.0' : r.path.startsWith('/work/') ? '0.9' : '0.85';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-11-18</lastmod>\n    <priority>${prio}</priority>\n  </url>`;
  }).join('\n');

  fs.writeFileSync(
    path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
    'utf8',
  );

  // Verify core artifacts exist
  for (const required of [
    'index.html',
    'work/exvorta/index.html',
    'work/firoza/index.html',
    'work/hamesu/index.html',
    'work/cvly/index.html',
    'work/leadgen/index.html',
    'work/audit/index.html',
    'work/daftaryar/index.html',
    'work/jobhunt/index.html',
    'exvorta-web/index.html',
    'pipeline/index.html',
    'resume/index.html',
    'hire/index.html',
    'app.mjs',
    'fonts/YekanBakh-VF.woff2',
    'fonts/IRANYekanXVF.woff2',
    'favicon.svg',
    'og-card.png',
    'resumes/Hamid_Mehrani_AI_Automation_Engineer.pdf',
    'resumes/Hamid_Mehrani_Web_Developer.pdf',
  ]) {
    if (!fs.existsSync(path.join(DIST, required))) {
      throw new Error(`Missing required build output: dist/${required}`);
    }
  }

  const codeBytes = measureCodeSize(DIST);
  const ms = Math.round(performance.now() - t0);
  console.log(
    `Build V2 complete in ${ms}ms -> ${ROUTES_MANIFEST.length} pre-rendered routes (${(codeBytes / 1024).toFixed(1)} KB core JS/CSS)`,
  );
}

main();
