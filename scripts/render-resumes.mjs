import fs from 'node:fs';
import path from 'node:path';
import { launchPlaywrightBrowser } from './browser-helper.mjs';

const ROOT = '/home/hamid/github/hamid-mehrani-site';
const OUT_DIR = path.join(ROOT, 'src/public/resumes');
fs.mkdirSync(OUT_DIR, { recursive: true });

const argUrlIdx = process.argv.indexOf('--portfolio-url');
const portfolioUrl = argUrlIdx !== -1 && process.argv[argUrlIdx + 1]
  ? process.argv[argUrlIdx + 1].replace(/^https?:\/\//, '').replace(/\/$/, '')
  : 'hamidmehrani.pages.dev';

function buildResumeHtml({ title, headline, summary }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>
@page { size: A4; margin: 10mm 13mm; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 9pt;
  line-height: 1.29;
  color: #0f172a;
  background: #ffffff;
}
header { margin-bottom: 5pt; }
h1 {
  font-size: 19pt;
  font-weight: 800;
  letter-spacing: 1.1px;
  color: #070a0f;
}
.headline {
  font-size: 8.7pt;
  font-weight: 700;
  color: #0d7a63;
  letter-spacing: 0.45px;
  margin-top: 2pt;
  text-transform: uppercase;
}
.contact {
  font-size: 8.2pt;
  color: #475569;
  margin-top: 2.5pt;
}
h2 {
  font-size: 9.4pt;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #0d7a63;
  border-bottom: 1.1pt solid #0d7a63;
  padding-bottom: 1.5pt;
  margin: 6pt 0 3.5pt;
}
.job { margin-bottom: 4pt; }
.jt-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8pt;
}
.jt { font-weight: 700; font-size: 9.4pt; color: #0b1320; }
.co { color: #0d7a63; font-weight: 700; }
.meta {
  font-size: 8pt;
  color: #64748b;
  font-family: "SF Mono", Menlo, Consolas, monospace;
}
ul { margin: 1.5pt 0 0 12pt; }
li { margin-bottom: 1pt; }
.sum { text-align: left; color: #1e293b; }
.skill { margin-bottom: 1.8pt; }
.skill b { color: #0b1320; }
.langs { color: #1e293b; }
</style>
</head>
<body>

<header>
  <h1>HAMID MEHRANI</h1>
  <div class="headline">${headline}</div>
  <div class="contact">Remote-first · Async-native (Written / Chat) · hamid@exvorta.com · ${portfolioUrl} · github.com/hamidmehrani · linkedin.com/in/hamidmehrani</div>
</header>

<h2>Summary</h2>
<p class="sum">${summary}</p>

<h2>Experience</h2>

<div class="job">
  <div class="jt-row">
    <div class="jt">Founder — <span class="co">Exvorta</span></div>
    <div class="meta">Jul 2026 – Present · Remote</div>
  </div>
  <ul>
    <li>Launched <b>exvorta.com</b> — B2B trade-file compliance SaaS (Next.js 15, Payload CMS, PostgreSQL, Cloudflare Pages) with crypto-only billing architecture (NOWPayments + BTCPay, USDT/TRON).</li>
    <li>Building Exvorta Suite for global traders: AI trade documents (commercial invoices, packing lists, CoO, BoL), corridor compliance checks, shipment tracking, and trade CRM.</li>
    <li>Directs a multi-agent engineering pipeline with automated quality gates and maintains a reusable multilingual Next.js + Payload exporter engine powering 6 live trade showcases (Spicevo, Nutave, Stonvi, Aurum, Meridian, Vestra).</li>
  </ul>
</div>

<div class="job">
  <div class="jt-row">
    <div class="jt">Creator — <span class="co">Website Audit Tool &amp; pdfscript</span></div>
    <div class="meta">Aug 2026 – Present · Remote</div>
  </div>
  <ul>
    <li>Engineered a 7-stage automated audit pipeline (Puppeteer, Lighthouse, axe-core, AI vision critique) outputting measured 14-page branded client proposal PDFs in minutes.</li>
  </ul>
</div>

<div class="job">
  <div class="jt-row">
    <div class="jt">Creator — <span class="co">LeadGen Machine</span></div>
    <div class="meta">Jun 2026 – Present · Remote</div>
  </div>
  <ul>
    <li>Built a Python cold-outreach engine (30+ modules): discovery across 85 query matrices and phone/email verification across 21 countries.</li>
    <li>48,000+ B2B leads processed (~15k/month capacity) with per-lead scoring profiles, AI reply classification, self-learning message loop, and anti-ban sender architecture.</li>
  </ul>
</div>

<div class="job">
  <div class="jt-row">
    <div class="jt">Independent Product Builder</div>
    <div class="meta">Nov 2025 – Jun 2026 · Remote</div>
  </div>
  <ul>
    <li>Prototyped the automation pipelines that became LeadGen Machine and the Website Audit Tool; architected Exvorta's technical foundation and multi-agent runner infrastructure.</li>
  </ul>
</div>

<div class="job">
  <div class="jt-row">
    <div class="jt">Web Developer — <span class="co">Firoozehland (firoza.ir)</span></div>
    <div class="meta">Apr 2024 – Oct 2025 · Full-time</div>
  </div>
  <ul>
    <li>Owned the company's web presence end-to-end, including <b>firoza.ir</b> (Nishapur turquoise export): engineering, content-production direction, publishing, and operations.</li>
    <li>Technical SEO architecture, Core Web Vitals optimization, and multilingual conversion flows.</li>
  </ul>
</div>

<div class="job">
  <div class="jt-row">
    <div class="jt">Developer — <span class="co">SamianSoft</span></div>
    <div class="meta">Mar 2023 – Mar 2024 · Full-time</div>
  </div>
  <ul>
    <li>Built a production plugin synchronizing catalogs of thousands of SKUs with the company platform via deterministic SKU-based matching.</li>
    <li>Owned technical SEO, Core Web Vitals across company properties, and technical/marketing documentation.</li>
  </ul>
</div>

<div class="job">
  <div class="jt-row">
    <div class="jt">Freelance Web Developer</div>
    <div class="meta">Jan 2018 – Feb 2023 · Remote</div>
  </div>
  <ul>
    <li>Five years delivering custom e-commerce storefronts, WordPress builds, technical SEO, and end-to-end client operations.</li>
  </ul>
</div>

<h2>Skills</h2>
<p class="skill"><b>AI &amp; Automation:</b> Multi-Agent Orchestration · Claude API · OpenAI API · Python (30+ modular pipelines) · Playwright / Puppeteer · Prompt Engineering</p>
<p class="skill"><b>Web &amp; Edge:</b> Next.js 15 · Payload CMS · WordPress · Tailwind CSS · PostgreSQL / SQLite · Cloudflare Pages / Workers · Docker · Technical SEO · Core Web Vitals</p>
<p class="skill"><b>Product &amp; Growth:</b> SaaS Architecture · B2B Trade Workflows · Go-to-Market · UX Systems · Technical Async Writing</p>

<h2>Languages</h2>
<p class="langs">English (Professional Written Proficiency · Async-First via Chat / Email / Docs) · Persian (Native)</p>

</body>
</html>`;
}

const TRACKS = [
  {
    filename: 'Hamid_Mehrani_AI_Automation_Engineer.pdf',
    title: 'Hamid Mehrani — AI Automation Engineer Resume',
    headline: 'AI AUTOMATION ENGINEER · I SHIP PRODUCTION SYSTEMS BY DIRECTING AI AGENT TEAMS',
    summary: '8 years in web — 5 freelance, 2 in-house, now founder. I run an agent-driven engineering pipeline (architect → builder → QA → reviewer, automated quality gates, one-command production deploys) instead of typing every line. It has shipped a live SaaS platform (exvorta.com), a 48,000+ B2B lead engine across 21 countries, and a 7-stage automated website audit tool. Remote-first, strong async writer — all collaboration in written chat, docs, and async reviews.',
  },
  {
    filename: 'Hamid_Mehrani_Web_Developer.pdf',
    title: 'Hamid Mehrani — Web Developer Resume',
    headline: 'WEB DEVELOPER — WORDPRESS & NEXT.JS · SEO-DRIVEN, AI-ASSISTED DELIVERY',
    summary: '8 years in web — 5 years freelance (e-commerce, WordPress, SEO), 2 years in-house, now founder. I build and own websites end-to-end: development, technical SEO, Core Web Vitals, content pipelines, and production operations. Live work includes exvorta.com (Next.js 15 + Payload CMS + Cloudflare Pages), firoza.ir, and 6 multilingual trade showcase sites. Remote-first, strong async writer across time zones.',
  },
];

async function main() {
  const browser = await launchPlaywrightBrowser({ useProxy: false });
  try {
    const page = await browser.newPage();
    for (const track of TRACKS) {
      const html = buildResumeHtml(track);
      await page.setContent(html, { waitUntil: 'load' });
      const outPath = path.join(OUT_DIR, track.filename);
      await page.pdf({
        path: outPath,
        format: 'A4',
        printBackground: true,
      });
      const scrollH = await page.evaluate(() => document.body.scrollHeight);
      if (scrollH > 1040) {
        throw new Error(`${track.filename} overflowed 1 A4 page (scrollHeight=${scrollH})`);
      }
      console.log(`Generated ${track.filename} -> ${(fs.statSync(outPath).size / 1024).toFixed(1)} KB (scrollHeight=${scrollH}px, 1 page PASS)`);
    }
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
