import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { launchPlaywrightBrowser } from './browser-helper.mjs';

const ROOT = '/home/hamid/github/hamid-mehrani-site';
const OUT_DIR = path.join(ROOT, 'src/public/previews');
const TMP_DIR = '/tmp/hamid-portfolio-capture';

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(TMP_DIR, { recursive: true });

const TARGETS = [
  { name: 'exvorta', url: 'https://exvorta.com', fallback: null },
  { name: 'cvly', url: 'https://cvly.ir', fallback: null },
  { name: 'firoza', url: 'https://www.firoza.ir/en/', fallback: null },
  { name: 'hamesu', url: 'https://hamesu.ir', fallback: null },
  { name: 'spicevo', url: 'https://spicevo.exvorta.com', fallback: null },
  { name: 'nutave', url: 'https://nutave.exvorta.com', fallback: '/home/hamid/github/nutave-site/nutave-final-verified.png' },
  { name: 'stonvi', url: 'https://stonvi.exvorta.com', fallback: '/home/hamid/github/stonvi-site/en-home.png' },
  { name: 'aurum', url: 'https://aurum.exvorta.com', fallback: null },
  { name: 'meridian', url: 'https://meridian.exvorta.com', fallback: null },
  { name: 'vestra', url: 'https://vestra.exvorta.com', fallback: null },
];

const MOBILE_TARGETS = [
  { name: 'exvorta-mobile', url: 'https://exvorta.com' },
  { name: 'cvly-mobile', url: 'https://cvly.ir' },
  { name: 'firoza-mobile', url: 'https://www.firoza.ir/en/' },
  { name: 'hamesu-mobile', url: 'https://hamesu.ir' },
  { name: 'spicevo-mobile', url: 'https://spicevo.exvorta.com' },
  { name: 'nutave-mobile', url: 'https://nutave.exvorta.com' },
  { name: 'stonvi-mobile', url: 'https://stonvi.exvorta.com' },
  { name: 'aurum-mobile', url: 'https://aurum.exvorta.com' },
  { name: 'meridian-mobile', url: 'https://meridian.exvorta.com' },
  { name: 'vestra-mobile', url: 'https://vestra.exvorta.com' },
];

function encodeWebp(inputPng, outputWebp, cropHeight = false, targetWidth = 1440) {
  let quality = 84;
  for (let attempt = 0; attempt < 3; attempt++) {
    const args = ['-q', String(quality), '-m', '6'];
    if (cropHeight) {
      args.push('-crop', '0', '0', '1440', '900');
    }
    args.push('-resize', String(targetWidth), '0', inputPng, '-o', outputWebp);
    execFileSync('/usr/bin/cwebp', args, { stdio: 'pipe' });
    const size = fs.statSync(outputWebp).size;
    if (size <= 140 * 1024 || quality <= 68) {
      return size;
    }
    quality -= 8;
  }
  return fs.statSync(outputWebp).size;
}

async function main() {
  const browser = await launchPlaywrightBrowser({ useProxy: true });
  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
      ignoreHTTPSErrors: true,
    });

    for (const target of TARGETS) {
      const pngPath = path.join(TMP_DIR, `${target.name}.png`);
      const webpPath = path.join(OUT_DIR, `${target.name}.webp`);
      // SKIP-if-exists is deliberate: re-capture with --force after a redesign.
      if (fs.existsSync(webpPath) && fs.statSync(webpPath).size > 5000 && !process.argv.includes('--force')) {
        console.log(`  SKIP existing ${target.name}.webp`);
        continue;
      }
      const page = await context.newPage();
      let captured = false;

      try {
        console.log(`Capturing ${target.url} ...`);
        const resp = await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 22000 });
        const status = resp ? resp.status() : 0;
        await page.waitForTimeout(2200);
        await page.evaluate(() => document.fonts?.ready).catch(() => {});
        await page.screenshot({ path: pngPath, fullPage: false });
        const bytes = encodeWebp(pngPath, webpPath, false, 1440);
        console.log(`  OK ${target.name}.webp (${status}) -> ${(bytes / 1024).toFixed(1)} KB`);
        captured = true;
      } catch (err) {
        console.warn(`  WARN live capture failed for ${target.name}: ${err.message}`);
      } finally {
        await page.close();
      }

      if (!captured && target.fallback && fs.existsSync(target.fallback)) {
        const bytes = encodeWebp(target.fallback, webpPath, true, 1440);
        console.log(`  FALLBACK ${target.name}.webp from ${target.fallback} -> ${(bytes / 1024).toFixed(1)} KB`);
      } else if (!captured) {
        throw new Error(`Failed to capture ${target.name} and no fallback exists`);
      }
    }
    await context.close();

    const mobileCtx = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 1,
      ignoreHTTPSErrors: true,
    });
    for (const target of MOBILE_TARGETS) {
      const pngPath = path.join(TMP_DIR, `${target.name}.png`);
      const webpPath = path.join(OUT_DIR, `${target.name}.webp`);
      if (fs.existsSync(webpPath) && fs.statSync(webpPath).size > 5000 && !process.argv.includes('--force')) {
        console.log(`  SKIP existing ${target.name}.webp`);
        continue;
      }
      const page = await mobileCtx.newPage();
      try {
        console.log(`Capturing mobile ${target.url} ...`);
        const resp = await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 22000 });
        const status = resp ? resp.status() : 0;
        await page.waitForTimeout(2000);
        await page.evaluate(() => document.fonts?.ready).catch(() => {});
        await page.screenshot({ path: pngPath, fullPage: false });
        const bytes = encodeWebp(pngPath, webpPath, false, 390);
        console.log(`  OK ${target.name}.webp (${status}) -> ${(bytes / 1024).toFixed(1)} KB`);
      } catch (err) {
        console.warn(`  WARN mobile capture failed for ${target.name}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
    await mobileCtx.close();
  } finally {
    await browser.close();
    fs.rmSync(TMP_DIR, { recursive: true, force: true });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
