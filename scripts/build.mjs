import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/home/hamid/github/hamid-mehrani-site';
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');

const argUrlIdx = process.argv.indexOf('--portfolio-url');
const CANONICAL_URL = (
  argUrlIdx !== -1 && process.argv[argUrlIdx + 1]
    ? process.argv[argUrlIdx + 1]
    : 'https://hamidmehrani.pages.dev'
).replace(/\/$/, '');

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
      if (entry.name === 'previews' || entry.name === 'resumes') continue;
      total += measureCodeSize(full);
    } else if (/\.(html|css|mjs|js|svg)$/.test(entry.name)) {
      total += fs.statSync(full).size;
    }
  }
  return total;
}

function main() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // Copy code modules & styles
  for (const sub of ['styles', 'canvas', 'data', 'graphics']) {
    copyRecursive(path.join(SRC, sub), path.join(DIST, sub));
  }
  fs.copyFileSync(path.join(SRC, 'app.mjs'), path.join(DIST, 'app.mjs'));

  // Flatten src/public/* into dist/ root
  copyRecursive(path.join(SRC, 'public'), DIST);

  // Rewrite index.html with canonical URL + cache-busted asset hashes
  let html = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
  html = html.replaceAll('https://hamidmehrani.pages.dev', CANONICAL_URL);

  for (const rel of [
    '/styles/tokens.css',
    '/styles/layout.css',
    '/styles/components.css',
    '/styles/print.css',
    '/app.mjs',
  ]) {
    const diskPath = path.join(DIST, rel.slice(1));
    const h = hashFile(diskPath);
    html = html.replaceAll(`"${rel}"`, `"${rel}?v=${h}"`);
  }
  fs.writeFileSync(path.join(DIST, 'index.html'), html, 'utf8');

  // Security + Cache headers for Cloudflare Pages
  const headers = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/previews/*
  Cache-Control: public, max-age=2592000, immutable

/resumes/*
  Cache-Control: public, max-age=86400
`;
  fs.writeFileSync(path.join(DIST, '_headers'), headers, 'utf8');

  fs.writeFileSync(
    path.join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\nSitemap: ${CANONICAL_URL}/sitemap.xml\n`,
    'utf8',
  );

  fs.writeFileSync(
    path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${CANONICAL_URL}/</loc>
    <lastmod>2026-11-17</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
`,
    'utf8',
  );

  // Verify core artifacts exist and check uncompressed code budget
  for (const required of [
    'index.html',
    'app.mjs',
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
  console.log(`Build complete -> dist/ (${(codeBytes / 1024).toFixed(1)} KB uncompressed HTML/CSS/JS/SVG)`);
  if (codeBytes > 160 * 1024) {
    throw new Error(`Code bundle exceeded budget: ${codeBytes} bytes`);
  }
}

main();
