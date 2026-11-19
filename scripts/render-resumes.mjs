import fs from 'node:fs';
import path from 'node:path';
import { EXPERIENCE, RESUME_TRACKS, SKILLS_MATRIX } from '../src/data/portfolio.mjs';
import { launchPlaywrightBrowser } from './browser-helper.mjs';

// Round 2d (M8): PDF bodies are generated from the single source of truth
// (src/data/portfolio.mjs) instead of a duplicated hardcoded template, so the
// PDFs can never drift from the /resume page again — same EXPERIENCE bullets,
// same RESUME_TRACKS headline/summary, same SKILLS_MATRIX groups. Per-track
// tailoring is the skill-group order (AI first for Track A, Web first for
// Track B, Growth first for Track C).

const ROOT = '/home/hamid/github/hamid-mehrani-site';
const OUT_DIR = path.join(ROOT, 'src/public/resumes');
fs.mkdirSync(OUT_DIR, { recursive: true });

const argUrlIdx = process.argv.indexOf('--portfolio-url');
const portfolioUrl = argUrlIdx !== -1 && process.argv[argUrlIdx + 1]
  ? process.argv[argUrlIdx + 1].replace(/^https?:\/\//, '').replace(/\/$/, '')
  : 'hamidmehrani.pages.dev';

function esc(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function buildResumeHtml({ title, headline, summary, skillOrder }) {
  const jobsHtml = EXPERIENCE.map((role) => `
<div class="job">
  <div class="jt-row">
    <div class="jt">${esc(role.role.en)} — <span class="co">${esc(role.company.en)}</span></div>
    <div class="meta">${esc(role.period.en)}</div>
  </div>
  <ul>
    ${role.bullets.en.map((b) => `<li>${esc(b)}</li>`).join('\n    ')}
  </ul>
</div>`).join('\n');

  const skillsHtml = skillOrder
    .map((gi) => SKILLS_MATRIX[gi])
    .map((grp) => `<p class="skill"><b>${esc(grp.title.en)}:</b> ${esc(grp.items.slice(0, 5).join(' · '))}</p>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(title)}</title>
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
  <div class="headline">${esc(headline)}</div>
  <div class="contact">Remote-first · Async-native (Written / Chat) · hamid@exvorta.com · ${esc(portfolioUrl)} · github.com/hamidmehrani · linkedin.com/in/hamidmehrani</div>
</header>

<h2>Summary</h2>
<p class="sum">${esc(summary)}</p>

<h2>Experience</h2>
${jobsHtml}

<h2>Skills</h2>
${skillsHtml}

<h2>Languages</h2>
<p class="langs">English (Professional Written Proficiency · Async-First via Chat / Email / Docs) · Persian (Native)</p>

</body>
</html>`;
}

// SKILLS_MATRIX order: 0 AI & Multi-Agent, 1 Frontend/CMS, 2 Verification/Data, 3 Product/B2B/SEO
const TRACKS = [
  {
    key: 'ai',
    filename: 'Hamid_Mehrani_AI_Automation_Engineer.pdf',
    title: 'Hamid Mehrani — AI Automation Engineer Resume',
    skillOrder: [0, 2, 1, 3],
  },
  {
    key: 'web',
    filename: 'Hamid_Mehrani_Web_Developer.pdf',
    title: 'Hamid Mehrani — Web Developer Resume',
    skillOrder: [1, 2, 0, 3],
  },
  {
    key: 'growth',
    filename: 'Hamid_Mehrani_Growth_SEO.pdf',
    title: 'Hamid Mehrani — Growth & SEO Resume',
    skillOrder: [3, 0, 1, 2],
  },
];

async function main() {
  const browser = await launchPlaywrightBrowser({ useProxy: false });
  try {
    const page = await browser.newPage();
    for (const track of TRACKS) {
      const def = RESUME_TRACKS[track.key];
      const html = buildResumeHtml({
        title: track.title,
        headline: def.headline.en,
        summary: def.summary.en,
        skillOrder: track.skillOrder,
      });
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
