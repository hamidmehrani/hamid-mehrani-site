# Hamid Mehrani — Sovereign Systems Monograph & AI Engineering Studio (V2)

Multi-page creative portfolio, 3D orbital systems observatory, interactive multi-agent pipeline lab, and 8-year career folio for **Hamid Mehrani** (AI Systems Architect & Founder @ Exvorta), engineered with a zero-dependency runtime in isomorphic **ES2024**, hardware-accelerated **HTML5 Canvas**, **View Transitions**, self-hosted Persian variable fonts (**Yekan Bakh VF** + **IRANYekanX VF**), and deployed across **14 pre-rendered routes** on **Cloudflare Pages**.

- **Live Production:** https://hamidmehrani.pages.dev
- **Mobbin Design Collection:** `hamid-mehrani-observatory-v1` (20 verified section/screen references documented in [`docs/DESIGN_SYSTEM_AND_MOBBIN_REFS.md`](./docs/DESIGN_SYSTEM_AND_MOBBIN_REFS.md))

## 14 Pre-Rendered Routes
1. `/` — **3D Orbital Observatory & 7-Act Exhibition**
2. `/work/exvorta` — **Case 01: Exvorta · Trade Business OS** (`exvorta.com`)
3. `/work/firoza` — **Case 02: Firoza · Nishapur Turquoise Atelier** (`firoza.ir`)
4. `/work/hamesu` — **Case 03: Hamesu · Multi-Tenant Commerce OS** (`hamesu.ir`)
5. `/work/cvly` — **Case 04: Cvly · AI Career & Salary Intelligence** (`cvly.ir`)
6. `/work/leadvium` — **Case 05: Leadvium & Outreach Studio**
7. `/work/audit` — **Case 06: 7-Stage Website Audit Engine**
8. `/work/daftaryar` — **Case 07: Daftaryar · WooCommerce Finance & Sepidar Adapter**
9. `/work/jobhunt` — **Case 08: Autonomous JobHunt Pipeline & Live Audio Interpreter (R&D prototype, unverified)**
10. `/work/radinai` — **Case 09: Radinai · Software Studio & WordPress Flagship** (`radinai.ir`)
11. `/exvorta-web` — **Exvorta Web Studio Monograph** (6 live B2B trade houses)
12. `/pipeline` — **Autonomous Multi-Agent Engineering Lab & Live Simulator**
13. `/resume` — **Daylight Architectural Career Folio (`2018 — 2026`) & A4 PDFs**
14. `/hire` — **Executive Role-Fit & 48h Paid Async Trial Concierge**

## Build & Verify
```bash
node scripts/build.mjs --portfolio-url https://hamidmehrani.pages.dev
node scripts/verify-live.mjs local
node scripts/verify-live.mjs https://hamidmehrani.pages.dev
node scripts/render-og.mjs   # regenerate og-card.png from V2 tokens/copy
node scripts/render-resumes.mjs --portfolio-url https://hamidmehrani.pages.dev  # regenerate the 3 A4 resume PDFs
```

## Language & Rendering Notes
- **SSR is English-only (accepted decision):** `build.mjs` pre-renders all 14 routes in English. Persian (`?lang=fa`, persisted in `localStorage` as `hm_lang`) is applied client-side after load, so crawlers and social previews see the English version. Full Persian pre-rendering would need a second route tree + `hreflang` — recorded as remaining work.
- **Language-neutral engineering output:** terminal transcripts (`codeArtifact`, `PIPELINE_STAGES[].terminal`) and simulation agent codes are shown as-is in both languages; gates and simulation narratives are fully localised (`{en,fa}`).
- **Deliberate English design codes:** route codes (`00 // OBSERVATORY`), chrome tags, Dev HUD telemetry labels, and the `Async` clock suffix stay in English by design in both languages.
- **QA reports:** `node scripts/verify-live.mjs local` writes a timestamped report under `qa/` (never wiped, never under an agent brain directory).
- **Typography:** all fonts are self-hosted woff2 under `src/public/fonts/` (YekanBakh VF + IRANYekanX VF + Instrument Serif + Plus Jakarta Sans variable + JetBrains Mono variable); no external font requests at runtime.
