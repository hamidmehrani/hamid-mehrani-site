import fs from 'node:fs';
import path from 'node:path';
import { launchPlaywrightBrowser } from './browser-helper.mjs';

const ROOT = '/home/hamid/github/hamid-mehrani-site';
const OUT_PATH = path.join(ROOT, 'src/public/og-card.png');

const argUrlIdx = process.argv.indexOf('--portfolio-url');
const portfolioUrl = argUrlIdx !== -1 && process.argv[argUrlIdx + 1]
  ? process.argv[argUrlIdx + 1].replace(/^https?:\/\//, '').replace(/\/$/, '')
  : 'hamidmehrani.pages.dev';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background: #06080C;
    color: #F3F6FA;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 56px 68px;
    background-image:
      radial-gradient(ellipse 65% 60% at 85% 20%, rgba(14, 196, 154, 0.22), transparent 70%),
      radial-gradient(ellipse 50% 45% at 15% 85%, rgba(210, 167, 56, 0.14), transparent 70%),
      linear-gradient(to right, rgba(226, 234, 244, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226, 234, 244, 0.04) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 60px 60px, 60px 60px;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    border-radius: 999px;
    border: 1px solid rgba(14, 196, 154, 0.45);
    background: rgba(14, 196, 154, 0.12);
    color: #6EE7CE;
    font-family: monospace;
    font-size: 15px;
    font-weight: 700;
  }
  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #0EC49A;
  }
  .mid h1 {
    font-size: 74px;
    font-weight: 800;
    letter-spacing: -2px;
    line-height: 1.02;
    margin-bottom: 18px;
  }
  .mid h1 span {
    color: #0EC49A;
    font-style: italic;
    font-family: Georgia, serif;
    font-weight: 400;
  }
  .mid p {
    font-size: 25px;
    color: #CBD5E1;
    max-width: 920px;
    line-height: 1.4;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 22px;
    border-top: 1px solid rgba(226, 234, 244, 0.16);
    font-family: monospace;
    font-size: 17px;
    color: #94A3B8;
  }
  .bottom strong {
    color: #D2A738;
  }
</style>
</head>
<body>
  <div class="top">
    <svg viewBox="0 0 1000 1000" width="46" height="46">
      <path fill="#F3F6FA" fill-rule="evenodd" d="M 0 0 H 225 L 500 275 L 775 0 H 1000 V 225 L 725 500 L 1000 775 V 1000 H 775 L 500 725 L 225 1000 H 0 V 775 L 275 500 L 0 225 Z M 500 330 L 670 500 L 500 670 L 330 500 Z"/>
      <circle cx="780" cy="780" r="105" fill="#06080C"/>
      <circle cx="780" cy="780" r="78" fill="#0EC49A"/>
    </svg>
    <div class="pill"><span class="dot"></span> SOVEREIGN SYSTEMS MONOGRAPH · 2018 – 2026</div>
  </div>
  <div class="mid">
    <h1>Hamid Mehrani — <span>Sovereign Systems Monograph</span></h1>
    <p>Shipping production SaaS platforms, multi-agent automation engines &amp; 6 Exvorta Web global trade houses.</p>
  </div>
  <div class="bottom">
    <span>EXVORTA · FIROZA · HAMESU · CVLY · LEADGEN (48K+ LEADS)</span>
    <strong>${portfolioUrl}</strong>
  </div>
</body>
</html>`;

async function main() {
  const browser = await launchPlaywrightBrowser({ useProxy: false });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
    await page.setContent(html, { waitUntil: 'load' });
    await page.screenshot({ path: OUT_PATH, fullPage: false });
    console.log(`Generated og-card.png -> ${(fs.statSync(OUT_PATH).size / 1024).toFixed(1)} KB`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
