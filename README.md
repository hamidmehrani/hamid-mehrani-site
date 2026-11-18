# Hamid Mehrani — Systems Observatory & Portfolio

Personal portfolio, multi-track career folio, and systems showcase for **Hamid Mehrani** (AI Systems Architect & Founder @ Exvorta), built with zero-bloat modular **ES2024**, hardware-accelerated **HTML5 Canvas**, bilingual **EN / فارسی (RTL)** support, and deployed to **Cloudflare Pages**.

- **Live Production:** https://hamidmehrani.pages.dev
- **Mobbin Design Collection:** `hamid-mehrani-observatory-v1` (12 verified section/screen references documented in [`docs/DESIGN_SYSTEM_AND_MOBBIN_REFS.md`](./docs/DESIGN_SYSTEM_AND_MOBBIN_REFS.md))

## Architecture
- `src/index.html` — Semantic HTML5 observatory shell, JSON-LD `Person` schema, OpenGraph metadata, and noscript fallback
- `src/styles/` — Modular design tokens (`tokens.css`), layout grid & crosshairs (`layout.css`), interactive components & daylight resume folio (`components.css`), clean A4 `@media print` (`print.css`)
- `src/canvas/constellation.mjs` — Interactive pointer-reactive node constellation (`IntersectionObserver` + `prefers-reduced-motion` aware)
- `src/data/portfolio.mjs` — Verified bilingual single source of truth for 8 flagship systems, 6 Exvorta Web trade houses, 5 pipeline stages, and 4 resume perspective lenses
- `src/graphics/diagrams.mjs` — Bespoke SVG brand marks and architectural schematic diagrams
- `scripts/capture-assets.mjs` — Playwright + `cwebp` real-pixel screenshot pipeline (`1440×900` `.webp` previews)
- `scripts/render-resumes.mjs` — Deterministic 1-page A4 PDF generator (Track A: AI Automation Engineer, Track B: Web Developer)
- `scripts/build.mjs` — Deterministic static builder generating hashed assets, `_headers`, `robots.txt`, and `sitemap.xml` in `dist/`
- `scripts/verify-live.mjs` — Automated Playwright QA harness across `1440×900` & `390×844` (`EN` LTR & `FA` RTL)

## Build & Verify
```bash
node scripts/build.mjs --portfolio-url https://hamidmehrani.pages.dev
node scripts/verify-live.mjs https://hamidmehrani.pages.dev
```
