import {
  UI_COPY,
  VENTURES,
  EXVORTA_WEB_SITES,
  PIPELINE_STAGES,
  RESUME_TRACKS,
  EXPERIENCE,
  SKILLS_MATRIX,
  formatValue,
  formatVentureYear,
} from '../data/portfolio.mjs';
import {
  CASE_ORDER,
  MONOGRAPHS,
  LIVE_SIMULATIONS,
  HIRING_ROLES,
  ENGAGEMENT_MODELS,
} from '../data/monographs.mjs';
import {
  getTradeBrandSvg,
  getVentureSchematicSvg,
  renderInteractiveTopologySvg,
} from '../graphics/diagrams.mjs';

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function crosshairsHtml() {
  return `
    <span class="crosshair crosshair--tl" aria-hidden="true"></span>
    <span class="crosshair crosshair--tr" aria-hidden="true"></span>
    <span class="crosshair crosshair--bl" aria-hidden="true"></span>
    <span class="crosshair crosshair--br" aria-hidden="true"></span>
  `;
}

export function statusBadgeClass(statusType) {
  if (statusType === 'frozen') return 'is-frozen';
  if (statusType === 'internal') return 'is-internal';
  return 'is-live';
}

export function renderNextPortal({ kicker, code, title, sub, route, accent = '#0EC49A', lang = 'en' }) {
  const cursorTxt = lang === 'fa' ? 'ورود به برگه' : 'ENTER PAGE ↗';
  return `
    <section class="next-portal-section">
      <div class="container">
        <a href="${route}" data-route="${route}" data-cursor="${cursorTxt}" class="next-portal-card has-crosshairs" style="--portal-accent:${accent}">
          ${crosshairsHtml()}
          <div class="next-portal-meta">
            <span class="portal-kicker">${kicker}</span>
            <span class="portal-code" dir="ltr">${code}</span>
          </div>
          <div class="next-portal-main">
            <div>
              <h2 class="next-portal-title">${title}</h2>
              <p class="next-portal-sub">${sub}</p>
            </div>
            <span class="next-portal-arrow" aria-hidden="true">${lang === 'fa' ? '←' : '→'}</span>
          </div>
        </a>
      </div>
    </section>
  `;
}

// Localised value: {en,fa} objects render in the active language;
// plain strings pass through (terminal transcripts are language-neutral).
const pickLang = (value, lang) => (value && typeof value === 'object' ? value[lang] ?? value.en : value);

export function renderPipelineSimulatorWidget(state, showDeepLink = true) {
  const lang = state.lang;
  const copy = UI_COPY[lang];
  const sim = LIVE_SIMULATIONS.find((s) => s.id === state.simId) || LIVE_SIMULATIONS[0];
  const activeStage = PIPELINE_STAGES[state.pipelineIdx] || PIPELINE_STAGES[0];
  const simStep = sim.steps[state.pipelineIdx] || sim.steps[0];

  const missionTabs = LIVE_SIMULATIONS.map((m) => {
    const isAct = m.id === sim.id ? 'is-active' : '';
    return `
      <button type="button" class="sim-mission-pill ${isAct}" data-sim-id="${m.id}">
        <span>${m.label[lang]}</span>
      </button>
    `;
  }).join('');

  const stagesList = PIPELINE_STAGES.map((st, idx) => {
    const isAct = idx === state.pipelineIdx ? 'is-active' : '';
    const isDone = idx < state.pipelineIdx ? 'is-done' : '';
    return `
      <button type="button" class="pipeline-step-btn ${isAct} ${isDone}" role="tab" aria-selected="${idx === state.pipelineIdx}" data-stage-idx="${idx}">
        <span class="step-num">${formatValue(st.num, lang)}</span>
        <span class="step-title">${st.title[lang]}</span>
        <span class="step-role">${lang === 'fa' ? st.roleFa : st.role}</span>
      </button>
    `;
  }).join('');

  const logLines = sim.steps
    .slice(0, state.pipelineIdx + 1)
    .map(
      (s, idx) =>
        `<div class="sim-log-line ${idx === state.pipelineIdx ? 'is-latest' : ''}"><span class="sim-log-tag">[0${idx + 1} · ${s.agent}]</span> <span>${escapeHtml(pickLang(s.msg, lang))}</span> <strong class="sim-log-metric">${escapeHtml(pickLang(s.metric, lang))}</strong></div>`,
    )
    .join('');

  return `
    <div class="sim-mission-bar">${missionTabs}</div>
    <div class="pipeline-shell has-crosshairs">
      ${crosshairsHtml()}
      <div class="pipeline-left-col">
        <div class="pipeline-steps" role="tablist">${stagesList}</div>
        <div class="pipeline-controls-row">
          <button type="button" class="btn btn-primary btn-sm" id="run-sim-btn">
            ${state.simRunning ? copy.runningSimBtn : copy.runSimBtn}
          </button>
          ${
            showDeepLink
              ? `<a href="/pipeline" data-route="/pipeline" class="card-ext-link">${copy.openFullLabBtn}</a>`
              : ''
          }
        </div>
      </div>

      <div class="pipeline-inspector" role="tabpanel">
        <div class="inspector-topbar">
          <div class="stage-meter" aria-hidden="true">
            ${PIPELINE_STAGES.map((_, i) => `<span class="stage-meter-pip ${i === state.pipelineIdx ? 'is-current' : i < state.pipelineIdx ? 'is-done' : ''}"></span>`).join('')}
          </div>
          <span class="inspector-meta" dir="${lang === 'fa' ? 'rtl' : 'ltr'}">${escapeHtml(pickLang(sim.duration, lang))} · ${escapeHtml(pickLang(simStep.metric, lang))}</span>
        </div>
        <div class="inspector-body">
          <div>
            <h3 class="inspector-stage-title">${activeStage.title[lang]}</h3>
            <p class="inspector-stage-desc">${activeStage.desc[lang]}</p>
          </div>
          <div class="sim-live-stream" dir="${lang === 'fa' ? 'rtl' : 'ltr'}">${logLines}</div>
          <pre class="inspector-code" dir="ltr"><code>${escapeHtml(activeStage.terminal)}</code></pre>
        </div>
      </div>
    </div>
  `;
}

export function renderRoleFitEngineWidget(state, compact = false) {
  const lang = state.lang;
  const copy = UI_COPY[lang];
  const role = HIRING_ROLES.find((r) => r.id === state.hireRole) || HIRING_ROLES[0];
  const matchedVentures = role.proofIds
    .map((id) => VENTURES.find((v) => v.id === id))
    .filter(Boolean);

  const tabsHtml = HIRING_ROLES.map((r) => {
    const active = r.id === role.id ? 'is-active' : '';
    return `
      <button type="button" class="role-selector-btn ${active}" data-hire-role="${r.id}">
        <span class="role-badge-mini">${r.badge[lang]}</span>
        <strong>${r.title[lang]}</strong>
      </button>
    `;
  }).join('');

  const proofLinksHtml = matchedVentures
    .map(
      (v) => `
      <a href="${v.route}" data-route="${v.route}" class="matched-proof-pill">
        <span class="proof-idx" dir="ltr">${formatValue(v.index, lang)}</span>
        <span>${v.name[lang]}</span>
        <span class="proof-metric">${v.headlineMetric[lang]}</span>
      </a>
    `,
    )
    .join('');

  return `
    <div class="role-fit-shell has-crosshairs">
      ${crosshairsHtml()}
      <div class="role-selector-grid">${tabsHtml}</div>

      <div class="role-fit-body">
        <div class="role-fit-main">
          <div class="role-kicker-line">${role.replaces[lang]}</div>
          <h3 class="role-main-title">${role.title[lang]}</h3>
          <p class="role-main-pitch">${role.pitch[lang]}</p>
          <ul class="role-deliverables">
            ${role.deliverables[lang].map((d) => `<li>${d}</li>`).join('')}
          </ul>
          <div class="role-actions-bar">
            <a href="/hire" data-route="/hire" class="btn btn-primary">${lang === 'fa' ? 'شروع تسک آزمایشی ۴۸ ساعته ←' : 'Configure 48h Paid Trial →'}</a>
            <a href="${role.pdfHref}" download class="btn btn-secondary">${role.pdfLabel[lang]} ↓</a>
            ${compact ? `<a href="/resume" data-route="/resume" class="btn btn-ghost">${lang === 'fa' ? 'کارنامه کامل ۸ ساله' : 'Full 8-Year CV'}</a>` : ''}
          </div>
        </div>

        <div class="role-fit-side">
          <div class="leverage-compare-box">
            <div class="leverage-row is-old">
              <span>${lang === 'fa' ? 'تیم سنتی ۴ نفره (تحویل کند و جلسات مداوم)' : 'Traditional 4-Role Handoff Squad'}</span>
              <strong>${lang === 'fa' ? '۳ تا ۶ هفته' : '3 – 6 Weeks'}</strong>
            </div>
            <div class="leverage-row is-hamid">
              <span>${lang === 'fa' ? 'حمید مهرآنی + خط تولید ایجنت و گیت Playwright' : 'Hamid + Autonomous Agent Pipeline'}</span>
              <strong>${lang === 'fa' ? '۴۸ تا ۹۶ ساعت' : '48 – 96 Hours'}</strong>
            </div>
          </div>

          <div class="matched-proof-group">
            <div class="matched-proof-label">${lang === 'fa' ? 'پرونده‌های اثبات‌شده مرتبط (کلیک برای مطالعه کامل):' : 'VERIFIED PROOF MONOGRAPHS (CLICK TO INSPECT):'}</div>
            <div class="matched-proof-list">${proofLinksHtml}</div>
          </div>
          ${compact ? `<div style="margin-top:14px;"><a href="/hire" data-route="/hire" class="card-ext-link">${copy.openHireConciergeBtn}</a></div>` : ''}
        </div>
      </div>
    </div>
  `;
}

export function renderVenturesListWidget(state) {
  const lang = state.lang;
  const copy = UI_COPY[lang];
  const items = state.filter === 'all' ? VENTURES : VENTURES.filter((v) => v.category === state.filter);
  const openCue = lang === 'fa' ? 'مطالعه پرونده' : 'READ CASE ↗';

  if (state.view === 'index') {
    return `
      <div class="interactive-ledger has-crosshairs">
        ${crosshairsHtml()}
        ${items
          .map((item) => {
            const stackList = lang === 'fa' && item.stackFa ? item.stackFa : item.stack;
            return `
              <a href="${item.route}" data-route="${item.route}" data-cursor="${openCue}" class="ledger-index-row">
                <span class="ledger-idx" dir="ltr">${formatValue(item.index, lang)}</span>
                <div class="ledger-main-col">
                  <strong class="ledger-name">${item.name[lang]}</strong>
                  <span class="ledger-role">${item.role[lang]} · ${formatVentureYear(item.year, lang)}</span>
                </div>
                <div class="ledger-chips-col">
                  ${stackList.slice(0, 3).map((s) => `<span class="chip">${s}</span>`).join('')}
                </div>
                <div class="ledger-proof-col">${item.headlineMetric[lang]}</div>
                <span class="ledger-go-arrow" aria-hidden="true">${lang === 'fa' ? '←' : '→'}</span>
              </a>
            `;
          })
          .join('')}
      </div>
    `;
  }

  return `
    <div class="editorial-spreads-grid">
      ${items
        .map((item) => {
          const spanCls =
            state.filter === 'all' && item.featured
              ? 'is-featured-spread'
              : state.filter === 'all' && item.secondaryWide
                ? 'is-secondary-spread'
                : '';
          const visualHtml = item.previewImg
            ? `<img src="${item.previewImg}" alt="${escapeHtml(item.name[lang])}" loading="lazy" width="1440" height="900">`
            : getVentureSchematicSvg(item.schematicType);
          const statusCls = statusBadgeClass(item.statusType);
          const stackList = lang === 'fa' && item.stackFa ? item.stackFa : item.stack;

          return `
            <article class="venture-spread-card ${spanCls}" data-reveal>
              <a href="${item.route}" data-route="${item.route}" data-cursor="${openCue}" class="venture-visual-link" aria-label="${escapeHtml(item.name[lang])}">
                <div class="venture-visual">
                  ${visualHtml}
                  <span class="venture-badge-float ${statusCls}">${item.status[lang]}</span>
                  <span class="venture-index-stamp" dir="ltr">${item.index} / 09</span>
                </div>
              </a>
              <div class="venture-body">
                <div class="venture-meta-row">
                  <span>${formatVentureYear(item.year, lang)} · ${item.role[lang]}</span>
                  <strong class="venture-metric-highlight">${item.headlineMetric[lang]}</strong>
                </div>
                <h3 class="venture-title">
                  <a href="${item.route}" data-route="${item.route}">${item.name[lang]}</a>
                </h3>
                <p class="venture-summary">${item.summary[lang]}</p>
                <div class="venture-proof">${item.proof[lang]}</div>
                <div class="chip-row">${stackList.map((s) => `<span class="chip">${s}</span>`).join('')}</div>
                <div class="card-actions">
                  <a href="${item.route}" data-route="${item.route}" class="card-action-btn is-primary-card-btn">
                    <span>${copy.openMonographBtn}</span>
                    <span aria-hidden="true">${lang === 'fa' ? '←' : '→'}</span>
                  </a>
                  ${
                    item.liveUrl
                      ? `<a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-ext-link">${copy.liveVisit} ↗</a>`
                      : ''
                  }
                </div>
              </div>
            </article>
          `;
        })
        .join('')}
    </div>
  `;
}

export function renderTradeCinemaWidget(state) {
  const lang = state.lang;
  const copy = UI_COPY[lang];
  const activeSite = EXVORTA_WEB_SITES.find((s) => s.id === state.activeTradeId) || EXVORTA_WEB_SITES[0];
  const localesTxt = lang === 'fa' ? activeSite.localesFa : activeSite.locales;
  const specsTxt = activeSite.specs[lang];

  const selectorTabs = EXVORTA_WEB_SITES.map((s) => {
    const isAct = s.id === activeSite.id ? 'is-active' : '';
    const logoWrapCls =
      s.logoType === 'aurum'
        ? 'trade-logo-wrap--dark'
        : s.logoType === 'stonvi'
          ? 'trade-logo-wrap--slate'
          : '';
    return `
      <button type="button" class="cinema-brand-tab ${isAct}" data-trade-select="${s.id}">
        <span class="trade-logo-wrap ${logoWrapCls}">${getTradeBrandSvg(s.logoType)}</span>
        <span class="cinema-brand-meta">
          <strong>${s.name}</strong>
          <small>${s.sector[lang]}</small>
        </span>
      </button>
    `;
  }).join('');

  return `
    <div class="trade-cinema-stage has-crosshairs" style="--brand-aura:${activeSite.aura};">
      ${crosshairsHtml()}
      <div class="cinema-tabs-rail" role="tablist">${selectorTabs}</div>

      <div class="cinema-showcase-grid">
        <div class="cinema-devices-stage">
          <div class="cinema-desktop-frame">
            <div class="browser-chrome" dir="ltr">
              <span class="chrome-dots"><i></i><i></i><i></i></span>
              <span class="chrome-url">${activeSite.url.replace('https://', '')}</span>
              <span class="chrome-tag">1440×900 EDGE</span>
            </div>
            <img src="${activeSite.previewImg}" alt="${activeSite.name} Desktop" width="1440" height="900">
          </div>
          <div class="cinema-mobile-float">
            <div class="mobile-notch" aria-hidden="true"></div>
            <img src="${activeSite.mobilePreviewImg}" alt="${activeSite.name} Mobile 390px" width="390" height="844">
          </div>
        </div>

        <div class="cinema-specs-panel">
          <div class="cinema-index-row">
            <span class="cinema-idx" dir="ltr">HOUSE ${activeSite.index} / 06</span>
            <span class="swatch-pair">
              <span class="swatch-dot" style="background:${activeSite.colors[0]}"></span>
              <span class="swatch-dot" style="background:${activeSite.colors[1]}"></span>
            </span>
          </div>
          <h3 class="cinema-title">${activeSite.name}</h3>
          <div class="cinema-corridor">${activeSite.corridor[lang]} · ${localesTxt}</div>
          <p class="cinema-desc">${activeSite.desc[lang]}</p>

          <div class="cinema-signature-box">
            <div class="sig-label">${lang === 'fa' ? 'ابزار تعاملی و امضای مهندسی:' : 'SIGNATURE INTERACTIVE INSTRUMENT:'}</div>
            <div class="sig-val">${activeSite.signature[lang]}</div>
          </div>

          <div class="trade-specs">${formatValue(specsTxt, lang)}</div>

          <div class="cinema-actions">
            <a href="${activeSite.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${copy.liveVisit} ↗</a>
            <a href="/exvorta-web" data-route="/exvorta-web" class="btn btn-secondary">${copy.openFullStudioBtn}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function renderHomeView(state) {
  const lang = state.lang;
  const copy = UI_COPY[lang];

  const filterButtons = copy.filters
    .map((f) => {
      const count = f.id === 'all' ? VENTURES.length : VENTURES.filter((v) => v.category === f.id).length;
      const active = state.filter === f.id ? 'is-active' : '';
      return `
        <button type="button" class="pill-btn ${active}" data-filter="${f.id}">
          <span>${f.label}</span>
          <span class="pill-count">${formatValue(count, lang)}</span>
        </button>
      `;
    })
    .join('');

  const statsHtml = copy.stats
    .map(
      (s) => `
      <div class="telemetry-cell">
        <div class="telemetry-val"><span class="accent">${s.value}</span></div>
        <div class="telemetry-label">${s.label}</div>
        <div class="telemetry-sub">${s.sub}</div>
      </div>
    `,
    )
    .join('');

  const trajectoryNodes = EXPERIENCE.slice()
    .reverse()
    .map(
      (role, i) => `
      <div class="traj-milestone" data-reveal>
        <div class="traj-dot-row">
          <span class="traj-step-num" dir="ltr">0${i + 1}</span>
          <span class="traj-year">${formatValue(role.yearShort, lang)}</span>
        </div>
        <h3 class="traj-role">${role.role[lang]}</h3>
        <div class="traj-company">${role.company[lang]}</div>
        ${
          role.linkedVenture
            ? `<a href="/work/${role.linkedVenture}" data-route="/work/${role.linkedVenture}" class="traj-link">${lang === 'fa' ? 'مشاهده پرونده ←' : 'Inspect Case →'}</a>`
            : ''
        }
      </div>
    `,
    )
    .join('');

  return `
    <!-- ACT 01: 3D ORBITAL HERO OBSERVATORY -->
    <section id="top" class="hero-stage">
      <div class="hero-backdrop-grid" aria-hidden="true"></div>
      <canvas id="constellation-canvas" class="constellation-canvas" aria-hidden="true"></canvas>

      <div class="container hero-grid-frame">
        <div class="hero-copy-col">
          <div class="viewfinder-meta-line">
            <span class="pulse-dot" aria-hidden="true"></span>
            <span>${copy.heroEdition}</span>
          </div>

          <h1 class="hero-monumental-title">
            <span class="hero-display-sans">${copy.heroTitleLine1}</span>
            <span class="hero-display-serif">${copy.heroTitleLine2}</span>
          </h1>

          <p class="hero-thesis">${copy.heroThesis}</p>

          <div class="hero-actions">
            <a href="#ventures" class="btn btn-primary">${copy.heroPrimaryCta}</a>
            <a href="/hire" data-route="/hire" class="btn btn-secondary">${copy.heroSecondaryCta}</a>
            <a href="/exvorta-web" data-route="/exvorta-web" class="btn btn-ghost">${copy.heroTertiaryCta}</a>
          </div>

          <div class="orbital-hint-line">${copy.orbitalHint}</div>
        </div>
      </div>

      <div class="container">
        <div class="hero-telemetry-strip has-crosshairs">
          ${crosshairsHtml()}
          ${statsHtml}
        </div>
      </div>
    </section>

    <!-- ACT 02: VELOCITY TICKER & EXECUTIVE THESIS -->
    <div class="kinetic-ticker-bar" aria-label="Verified Production Metrics">
      <canvas id="kinetic-ticker-canvas" class="kinetic-ticker-canvas" height="46"></canvas>
    </div>

    <section class="section thesis-section">
      <div class="container">
        <div class="thesis-grid" data-reveal>
          <div>
            <div class="chapter-index">${copy.thesisKicker}</div>
            <h2 class="thesis-headline">${copy.thesisHeadline}</h2>
          </div>
          <div class="thesis-copy-stack">
            <p>${copy.thesisBody1}</p>
            <p>${copy.thesisBody2}</p>
            <div class="thesis-quick-links">
              <a href="/pipeline" data-route="/pipeline" class="card-ext-link">${copy.openFullLabBtn}</a>
              <a href="/resume" data-route="/resume" class="card-ext-link">${copy.openFullResumeBtn}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACT 03: 9 SYSTEM MONOGRAPHS -->
    <section id="ventures" class="section">
      <div class="container">
        <div class="section-header" data-reveal>
          <div>
            <div class="chapter-index">${copy.worksKicker}</div>
            <h2 class="section-title">
              ${copy.worksTitle} <sup class="count-sup">${copy.worksCountSup}</sup>
            </h2>
          </div>
          <p class="section-lead">${copy.worksLead}</p>
        </div>

        <div class="ventures-toolbar">
          <div class="filter-pills" id="venture-filters" role="group">${filterButtons}</div>
          <div class="view-switcher" role="group">
            <button type="button" class="view-btn ${state.view === 'editorial' ? 'is-active' : ''}" data-view="editorial">${copy.viewEditorial}</button>
            <button type="button" class="view-btn ${state.view === 'index' ? 'is-active' : ''}" data-view="index">${copy.viewIndex}</button>
          </div>
        </div>

        <div id="ventures-list-mount">${renderVenturesListWidget(state)}</div>
      </div>
    </section>

    <!-- ACT 04: EXVORTA WEB 6 GLOBAL TRADE HOUSES CINEMA -->
    <section id="exvorta-web" class="section exvorta-web-section">
      <div class="container">
        <div class="section-header" data-reveal>
          <div>
            <div class="chapter-index">${copy.studioKicker}</div>
            <h2 class="section-title">${copy.studioTitle} <sup class="count-sup">${formatValue('06', lang)}</sup></h2>
          </div>
          <p class="section-lead">${copy.studioLead}</p>
        </div>

        <div id="trade-cinema-mount">${renderTradeCinemaWidget(state)}</div>
      </div>
    </section>


    <!-- ACT 05: EXECUTIVE HIRING & ROLE-FIT DECISION ENGINE -->
    <section id="hire-engine" class="section hire-engine-section">
      <div class="container">
        <div class="section-header" data-reveal>
          <div>
            <div class="chapter-index">${copy.hireKicker}</div>
            <h2 class="section-title">${copy.hireTitle}</h2>
          </div>
          <p class="section-lead">${copy.hireLead}</p>
        </div>

        <div id="role-fit-mount">${renderRoleFitEngineWidget(state, true)}</div>
      </div>
    </section>

    <!-- ACT 06: 2018 — 2026 CAREER TRAJECTORY -->
    <section class="section">
      <div class="container">
        <div class="trajectory-header-bar" data-reveal>
          <div>
            <div class="chapter-index">${copy.trajectoryKicker}</div>
            <h2 class="section-title">${copy.trajectoryTitle}</h2>
          </div>
          <a href="/resume" data-route="/resume" class="btn btn-secondary">${copy.openFullResumeBtn}</a>
        </div>

        <div class="trajectory-stage">
          <svg class="trajectory-curve-svg" viewBox="0 0 1200 110" width="100%" height="110" preserveAspectRatio="none" aria-hidden="true" dir="ltr">
            <path d="M 0 92 C 260 88, 420 64, 640 46 C 860 28, 1020 14, 1200 8" fill="none" stroke="rgba(226,234,244,0.12)" stroke-width="2"/>
            <path id="trajectory-svg-path" d="M 0 92 C 260 88, 420 64, 640 46 C 860 28, 1020 14, 1200 8" fill="none" stroke="#0EC49A" stroke-width="2.6"/>
          </svg>
          <div class="trajectory-grid">${trajectoryNodes}</div>
        </div>
      </div>
    </section>

    <!-- ACT 07: ZERO-DEAD-END PORTAL INTO CASE 01 -->
    ${renderNextPortal({
      kicker: copy.nextPortalLabel,
      code: 'CASE 01 / 09 · DEEP MONOGRAPH',
      title: VENTURES[0].name[lang],
      sub: MONOGRAPHS.exvorta.tagline[lang],
      route: '/work/exvorta',
      accent: '#0EC49A',
      lang,
    })}
  `;
}

export function renderCaseStudyStageMedia(venture, state) {
  const lang = state.lang;
  const mode = state.caseMediaMode;
  const hasDesktop = Boolean(venture.previewImg);
  const hasMobile = Boolean(venture.mobilePreviewImg);

  if (!hasDesktop || mode === 'blueprint') {
    return `<div class="case-blueprint-frame">${getVentureSchematicSvg(venture.schematicType)}</div>`;
  }

  if (mode === 'mobile' && hasMobile) {
    return `
      <div class="case-mobile-stage">
        <div class="case-phone-shell">
          <div class="mobile-notch" aria-hidden="true"></div>
          <img src="${venture.mobilePreviewImg}" alt="${escapeHtml(venture.name[lang])} Mobile 390px" width="390" height="844">
        </div>
      </div>
    `;
  }

  if (mode === 'split') {
    return `
      <div class="split-comparator" data-split-stage dir="ltr">
        <div class="split-base-layer">
          ${getVentureSchematicSvg(venture.schematicType)}
        </div>
        <div class="split-overlay-layer" data-split-overlay>
          <img src="${venture.previewImg}" alt="${escapeHtml(venture.name[lang])} Live UI" width="1440" height="900">
        </div>
        <div class="split-divider-line" data-split-divider style="left:54%">
          <span class="split-handle" aria-hidden="true">⇄</span>
        </div>
        <input type="range" min="10" max="90" value="54" class="split-range-input" data-split-range aria-label="Compare Live UI and System Architecture">
      </div>
    `;
  }

  return `
    <div class="case-desktop-frame">
      <div class="browser-chrome" dir="ltr">
        <span class="chrome-dots"><i></i><i></i><i></i></span>
        <span class="chrome-url">${venture.liveUrl ? venture.liveUrl.replace('https://', '') : venture.id}</span>
        <span class="chrome-tag">1440×900 VERIFIED</span>
      </div>
      <img src="${venture.previewImg}" alt="${escapeHtml(venture.name[lang])}" width="1440" height="900">
    </div>
  `;
}

export function renderCaseTopologyInspector(mono, state) {
  const lang = state.lang;
  const idx = Math.min(mono.topologyNodes.length - 1, Math.max(0, state.topoIdx || 0));
  const activeNode = mono.topologyNodes[idx];

  const pills = mono.topologyNodes
    .map(
      (n, i) => `
      <button type="button" class="topo-pill-btn ${i === idx ? 'is-active' : ''}" data-topo-idx="${i}">
        <span dir="ltr">0${i + 1}</span>
        <span>${n.title[lang]}</span>
      </button>
    `,
    )
    .join('');

  return `
    <div class="topology-interactive-box has-crosshairs">
      ${crosshairsHtml()}
      <div class="topo-pills-bar">${pills}</div>
      <div class="topo-canvas-wrap">
        ${renderInteractiveTopologySvg(mono.topologyNodes, idx, mono.accent, lang)}
      </div>
      <div class="topo-detail-card">
        <div class="topo-detail-meta" dir="ltr">
          <span style="color:${mono.accent}">${escapeHtml(activeNode.code)}</span>
          <span>${escapeHtml(activeNode.tech)}</span>
        </div>
        <h4>${activeNode.title[lang]}</h4>
        <p>${activeNode.detail[lang]}</p>
      </div>
    </div>
  `;
}

export function renderCaseStudyView(ventureId, state) {
  const lang = state.lang;
  const copy = UI_COPY[lang];
  const venture = VENTURES.find((v) => v.id === ventureId) || VENTURES[0];
  const mono = MONOGRAPHS[venture.id] || MONOGRAPHS.exvorta;

  const orderIdx = CASE_ORDER.indexOf(venture.id);
  const prevId = CASE_ORDER[(orderIdx - 1 + CASE_ORDER.length) % CASE_ORDER.length];
  const nextId = CASE_ORDER[(orderIdx + 1) % CASE_ORDER.length];
  const prevVenture = VENTURES.find((v) => v.id === prevId);
  const nextVenture = VENTURES.find((v) => v.id === nextId);

  const stackList = lang === 'fa' && venture.stackFa ? venture.stackFa : venture.stack;
  const hasDesktop = Boolean(venture.previewImg);
  const hasMobile = Boolean(venture.mobilePreviewImg);

  const mediaModes = hasDesktop
    ? [
        { id: 'desktop', label: copy.viewportModes.desktop },
        ...(hasMobile ? [{ id: 'mobile', label: copy.viewportModes.mobile }] : []),
        { id: 'split', label: copy.viewportModes.split },
        { id: 'blueprint', label: copy.viewportModes.blueprint },
      ]
    : [{ id: 'blueprint', label: copy.viewportModes.blueprint }];

  const relatedCards = mono.relatedIds
    .map((rid) => VENTURES.find((v) => v.id === rid))
    .filter(Boolean)
    .map(
      (rv) => `
      <a href="${rv.route}" data-route="${rv.route}" class="related-case-card">
        <span class="related-idx">${lang === 'fa' ? `پرونده ${formatValue(rv.index, 'fa')}` : `CASE ${rv.index}`}</span>
        <strong>${rv.name[lang]}</strong>
        <span class="related-metric">${rv.headlineMetric[lang]}</span>
      </a>
    `,
    )
    .join('');

  return `
    <article class="monograph-page" style="--case-accent:${mono.accent};">
      <div class="case-subnav-bar">
        <div class="container case-subnav-inner">
          <a href="/" data-route="/" class="subnav-back">${copy.backToHome}</a>
          <span class="subnav-counter">${lang === 'fa' ? `پرونده ${formatValue(mono.index, 'fa')} از ۰۹` : `CASE ${mono.index} // 09`}</span>
          <div class="subnav-prev-next">
            <a href="${prevVenture.route}" data-route="${prevVenture.route}" class="subnav-step-link">${copy.prevCase}</a>
            <a href="${nextVenture.route}" data-route="${nextVenture.route}" class="subnav-step-link">${copy.nextCase}</a>
          </div>
        </div>
      </div>

      <!-- CASE HERO -->
      <header class="case-hero-section">
        <div class="container">
          <div class="case-kicker-row">
            <span class="venture-badge-inline ${statusBadgeClass(venture.statusType)}">${venture.status[lang]}</span>
            <span>${formatVentureYear(venture.year, lang)} · ${venture.role[lang]}</span>
          </div>

          <h1 class="case-monumental-title">${venture.name[lang]}</h1>
          <p class="case-tagline">${mono.tagline[lang]}</p>

          <!-- metic.-inspired 3 Oversized Verified Proof Counters -->
          <div class="case-hero-metrics has-crosshairs">
            ${crosshairsHtml()}
            ${mono.heroMetrics
              .map(
                (m) => `
              <div class="case-big-metric">
                <div class="case-big-num">${m.val[lang]}</div>
                <div class="case-big-label">${m.label[lang]}</div>
              </div>
            `,
              )
              .join('')}
          </div>

          <!-- Interactive Multi-Mode Visual Stage -->
          <div class="case-stage-wrapper">
            <div class="case-stage-toolbar">
              <div class="view-switcher">
                ${mediaModes
                  .map(
                    (m) => `
                  <button type="button" class="view-btn ${state.caseMediaMode === m.id || (!hasDesktop && m.id === 'blueprint') ? 'is-active' : ''}" data-case-media="${m.id}">
                    ${m.label}
                  </button>
                `,
                  )
                  .join('')}
              </div>
              <div class="case-ext-actions">
                ${
                  venture.liveUrl
                    ? `<a href="${venture.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">${copy.liveVisit} ↗</a>`
                    : ''
                }
                ${
                  venture.repoUrl && !venture.repoPrivate
                    ? `<a href="${venture.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">${copy.repoVisit} ↗</a>`
                    : ''
                }
              </div>
            </div>
            <div id="case-media-mount">${renderCaseStudyStageMedia(venture, state)}</div>
          </div>
        </div>
      </header>

      <!-- STICKY METADATA RAIL + LONG-FORM ENGINEERING MONOGRAPH -->
      <section class="section">
        <div class="container case-body-grid">
          <aside class="case-meta-rail">
            <div class="meta-rail-card has-crosshairs">
              ${crosshairsHtml()}
              <div class="meta-block">
                <span class="meta-label">${lang === 'fa' ? 'نقش و مالکیت' : 'ROLE & OWNERSHIP'}</span>
                <strong>${venture.role[lang]}</strong>
              </div>
              <div class="meta-block">
                <span class="meta-label">${lang === 'fa' ? 'بازه زمانی' : 'TIMELINE'}</span>
                <strong>${formatVentureYear(venture.year, lang)}</strong>
              </div>
              <div class="meta-block">
                <span class="meta-label">${lang === 'fa' ? 'شاخص کلیدی' : 'HEADLINE PROOF'}</span>
                <strong style="color:${mono.accent}">${venture.headlineMetric[lang]}</strong>
              </div>
              <div class="meta-block">
                <span class="meta-label">${lang === 'fa' ? 'تکنولوژی‌ها' : 'ARCHITECTURE STACK'}</span>
                <div class="chip-row" style="margin:6px 0 0;">
                  ${stackList.map((s) => `<span class="chip">${s}</span>`).join('')}
                </div>
              </div>
              <div class="meta-rail-cta">
                <a href="/hire" data-route="/hire" class="btn btn-primary" style="width:100%;">
                  ${lang === 'fa' ? 'سفارش یا استخدام در این حوزه' : 'Hire Me For Similar Systems'}
                </a>
              </div>
            </div>
          </aside>

          <div class="case-narrative-col">
            <div class="narrative-chapter" data-reveal>
              <h2 class="narrative-heading">${copy.caseSections.startingPoint}</h2>
              ${mono.startingPoint[lang].map((p) => `<p class="narrative-p">${p}</p>`).join('')}
            </div>

            <div class="narrative-chapter" data-reveal>
              <h2 class="narrative-heading">${copy.caseSections.solution}</h2>
              ${mono.solutionNarrative[lang].map((p) => `<p class="narrative-p">${p}</p>`).join('')}
            </div>

            <div class="narrative-chapter" data-reveal>
              <h2 class="narrative-heading">${copy.caseSections.topology}</h2>
              <div id="case-topology-mount" data-case-id="${venture.id}">
                ${renderCaseTopologyInspector(mono, state)}
              </div>
            </div>

            <div class="narrative-chapter" data-reveal>
              <h2 class="narrative-heading">${copy.caseSections.decisions}</h2>
              <div class="decisions-grid">
                ${mono.decisions
                  .map(
                    (d, idx) => `
                  <div class="decision-card">
                    <span class="decision-num" dir="ltr">0${idx + 1}</span>
                    <h3>${d.title[lang]}</h3>
                    <p>${d.body[lang]}</p>
                  </div>
                `,
                  )
                  .join('')}
              </div>
            </div>

            <div class="narrative-chapter" data-reveal>
              <h2 class="narrative-heading">${copy.caseSections.artifact}</h2>
              <pre class="inspector-code" dir="ltr"><code>${escapeHtml(mono.codeArtifact)}</code></pre>
            </div>

            <div class="narrative-chapter" data-reveal>
              <h2 class="narrative-heading">${copy.caseSections.gates}</h2>
              <div class="gates-ledger">
                ${mono.gates
                  .map(
                    (g) => `
                  <div class="gate-row">
                    <span class="gate-metric">${escapeHtml(pickLang(g.metric, lang))}</span>
                    <span class="gate-status" dir="auto">✓ ${escapeHtml(pickLang(g.status, lang))}</span>
                  </div>
                `,
                  )
                  .join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- RELATED MONOGRAPHS -->
      <section class="section related-cases-section">
        <div class="container">
          <div class="chapter-index">${copy.relatedLabel}</div>
          <div class="related-cases-grid">${relatedCards}</div>
        </div>
      </section>

      <!-- ZERO-DEAD-END NEXT CASE PORTAL -->
      ${
        orderIdx === CASE_ORDER.length - 1
          ? renderNextPortal({
              kicker: copy.nextPortalLabel,
              code: 'STUDIO // 06 GLOBAL TRADE HOUSES',
              title: copy.studioTitle,
              sub: copy.studioLead,
              route: '/exvorta-web',
              accent: '#D2A738',
              lang,
            })
          : renderNextPortal({
              kicker: copy.nextPortalLabel,
              code: `CASE ${MONOGRAPHS[nextId].index} / 09 · NEXT MONOGRAPH`,
              title: nextVenture.name[lang],
              sub: MONOGRAPHS[nextId].tagline[lang],
              route: nextVenture.route,
              accent: MONOGRAPHS[nextId].accent,
              lang,
            })
      }
    </article>
  `;
}

export function renderExvortaWebView(state) {
  const lang = state.lang;
  const copy = UI_COPY[lang];

  const spreads = EXVORTA_WEB_SITES.map((site, i) => {
    const logoWrapCls =
      site.logoType === 'aurum'
        ? 'trade-logo-wrap--dark'
        : site.logoType === 'stonvi'
          ? 'trade-logo-wrap--slate'
          : '';
    const localesTxt = lang === 'fa' ? site.localesFa : site.locales;

    return `
      <section class="studio-brand-chapter ${i % 2 === 1 ? 'is-reversed' : ''}" id="house-${site.id}" style="--brand-aura:${site.aura};" data-reveal>
        <div class="studio-brand-info">
          <div class="studio-brand-top">
            <span class="trade-logo-wrap ${logoWrapCls}">${getTradeBrandSvg(site.logoType)}</span>
            <div>
              <span class="studio-house-idx">${lang === 'fa' ? `برند ۰${formatValue(i + 1, 'fa')} از ۰۶` : `HOUSE 0${i + 1} // 06`}</span>
              <h2 class="studio-house-title">${site.name}</h2>
            </div>
            <span class="swatch-pair" title="Palette">
              <span class="swatch-dot" style="background:${site.colors[0]}"></span>
              <span class="swatch-dot" style="background:${site.colors[1]}"></span>
            </span>
          </div>

          <div class="studio-corridor-tag">${site.sector[lang]} · ${site.corridor[lang]}</div>
          <p class="studio-house-desc">${site.desc[lang]}</p>

          <div class="studio-dna-grid">
            <div class="dna-cell">
              <span>${lang === 'fa' ? 'زبان‌ها و چیدمان' : 'LOCALES & DIRECTION'}</span>
              <strong>${localesTxt}</strong>
            </div>
            <div class="dna-cell">
              <span>${lang === 'fa' ? 'سیستم تایپوگرافی' : 'TYPOGRAPHY DNA'}</span>
              <strong dir="ltr">${escapeHtml(site.typography)}</strong>
            </div>
            <div class="dna-cell is-full">
              <span>${lang === 'fa' ? 'فیچر اختصاصی محصول' : 'SIGNATURE B2B INSTRUMENT'}</span>
              <strong>${site.signature[lang]}</strong>
            </div>
          </div>

          <div class="studio-house-actions">
            <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${site.url.replace('https://', '')} ↗</a>
            <a href="/work/exvorta" data-route="/work/exvorta" class="btn btn-secondary">${lang === 'fa' ? 'معماری هسته Exvorta' : 'Inspect Exvorta Core OS'}</a>
          </div>
        </div>

        <div class="studio-brand-visuals">
          <div class="studio-desktop-shot">
            <img src="${site.previewImg}" alt="${site.name} 1440px Desktop" loading="lazy" width="1440" height="900">
          </div>
          <div class="studio-mobile-shot">
            <img src="${site.mobilePreviewImg}" alt="${site.name} 390px Mobile" loading="lazy" width="390" height="844">
          </div>
        </div>
      </section>
    `;
  }).join('');

  return `
    <div class="studio-page">
      <div class="case-subnav-bar">
        <div class="container case-subnav-inner">
          <a href="/" data-route="/" class="subnav-back">${copy.backToHome}</a>
          <span class="subnav-counter">${lang === 'fa' ? 'استودیو Exvorta Web · ۰۶ برند زنده' : 'EXVORTA WEB STUDIO · 06 LIVE HOUSES'}</span>
          <a href="/pipeline" data-route="/pipeline" class="subnav-step-link">${lang === 'fa' ? '← خط تولید ایجنت‌ها' : 'Agent Pipeline →'}</a>
        </div>
      </div>

      <header class="case-hero-section">
        <div class="container">
          <div class="chapter-index">${copy.studioKicker}</div>
          <h1 class="case-monumental-title">${copy.studioTitle}</h1>
          <p class="case-tagline">
            ${
              lang === 'fa'
                ? 'شش دنیای برند کاملاً متمایز برای کالاهای استراتژیک صادراتی — ساخته‌شده روی یک موتور چندزبانه مشترک Next.js + Payload و مستقر روی شبکه جهانی Cloudflare Pages.'
                : 'Six distinct commodity brand worlds engineered atop one reusable Next.js + Payload multilingual exporter architecture and edge-deployed to Cloudflare Pages.'
            }
          </p>
        </div>
      </header>

      <div class="container studio-chapters-stack">
        ${spreads}
      </div>

      ${renderNextPortal({
        kicker: copy.nextPortalLabel,
        code: 'LAB // AUTONOMOUS AGENT PIPELINE',
        title: copy.labTitle,
        sub: copy.labLead,
        route: '/pipeline',
        accent: '#0EC49A',
        lang,
      })}
    </div>
  `;
}

export function renderPipelineView(state) {
  const lang = state.lang;
  const copy = UI_COPY[lang];

  const rules = [
    {
      code: 'GATE 01',
      title: { en: 'Builder Never Self-Certifies', fa: 'سازنده هرگز کار خودش را تایید نمی‌کند' },
      body: {
        en: 'Every UI or backend slice built by a worker agent is inspected by a separate read-only critic agent + Playwright bounding-box rect assertions.',
        fa: 'هر بخش ساخته‌شده توسط ایجنت کدنویس، اجباراً توسط یک ایجنت بازبین مستقل و اسکریپت اندازه‌گیری پیکسل Playwright بررسی می‌شود.',
      },
    },
    {
      code: 'GATE 02',
      title: { en: 'Real Mobbin References First', fa: 'الزام رفرنس واقعی از Mobbin پیش از کدنویسی' },
      body: {
        en: 'Zero generic AI layouts from memory. Every screen anchors to documented shipped product patterns saved in Mobbin collections.',
        fa: 'طراحی ذهنی و کلیشه‌ای ممنوع است؛ قبل از نوشتن CSS، الگوهای واقعی محصولات برتر در Mobbin جمع‌آوری و تحلیل می‌شوند.',
      },
    },
    {
      code: 'GATE 03',
      title: { en: 'Desktop 1440px + Mobile 390px Zero Overflow', fa: 'صفر سرریز افقی در ۱۴۴۰px و ۳۹۰px' },
      body: {
        en: 'Automated headless Chromium sweeps enforce `scrollWidth <= innerWidth`, zero console errors, and genuine variable Persian fonts in RTL.',
        fa: 'اسکریپت خودکار کرومیوم عدم وجود حتی ۱ پیکسل اسکرول افقی، صفر خطای کنسول و صحت فونت‌های متغیر فارسی را تضمین می‌کند.',
      },
    },
    {
      code: 'GATE 04',
      title: { en: 'Zero Secrets & Zero Fabricated Claims', fa: 'امنیت مطلق کلیدها و صداقت صددرصدی اعداد' },
      body: {
        en: 'Machine-enforced validators (`FACTS.md`, `80-owner-resume.md`, `0600` out-of-repo credentials) guarantee factual & security hygiene.',
        fa: 'ولیدیتورهای ماشینی مانع ورود هرگونه کلید امنیتی به ریپو یا درج اعداد تاییدنشده در صفحات محصول می‌شوند.',
      },
    },
  ];

  return `
    <div class="pipeline-page">
      <div class="case-subnav-bar">
        <div class="container case-subnav-inner">
          <a href="/" data-route="/" class="subnav-back">${copy.backToHome}</a>
          <span class="subnav-counter">${lang === 'fa' ? 'آزمایشگاه مهندسی · خط تولید ایجنت‌ها' : 'ENGINEERING LAB · MULTI-AGENT DAG'}</span>
          <a href="/resume" data-route="/resume" class="subnav-step-link">${lang === 'fa' ? '← رزومه ۸ ساله' : '8-Year Folio →'}</a>
        </div>
      </div>

      <header class="case-hero-section">
        <div class="container">
          <div class="chapter-index">${copy.labKicker}</div>
          <h1 class="case-monumental-title">${copy.labTitle}</h1>
          <p class="case-tagline">${copy.labLead}</p>
          <div style="margin-top:32px;" id="pipeline-sim-mount">
            ${renderPipelineSimulatorWidget(state, false)}
          </div>
        </div>
      </header>

      <section class="section">
        <div class="container">
          <div class="chapter-index">${lang === 'fa' ? 'قوانین سخت‌گیرانه کیفیت' : 'DETERMINISTIC QUALITY GATES'}</div>
          <h2 class="section-title" style="margin-bottom:36px;">
            ${lang === 'fa' ? 'چرا خروجی ایجنت‌های من پروداکشن واقعی است، نه دموی شکننده' : 'Why My Agent Pipeline Ships Production Software, Not Fragile Demos'}
          </h2>
          <div class="decisions-grid">
            ${rules
              .map(
                (r) => `
              <div class="decision-card" data-reveal>
                <span class="decision-num" dir="ltr">${r.code}</span>
                <h3>${r.title[lang]}</h3>
                <p>${r.body[lang]}</p>
              </div>
            `,
              )
              .join('')}
          </div>
        </div>
      </section>

      ${renderNextPortal({
        kicker: copy.nextPortalLabel,
        code: 'FOLIO // 2018 — 2026 CAREER LEDGER',
        title: lang === 'fa' ? 'کارنامه کامل ۸ ساله و دانلود رزومه PDF' : '8-Year Career Folio & Verified 1-Page Resumes',
        sub: lang === 'fa' ? 'مشاهده جزئیات تمام موقعیت‌های شغلی، استک فنی و دریافت رزومه استاندارد A4.' : 'Inspect every role from 2018 to 2026 across 4 specialized tracks and download tailored A4 PDFs.',
        route: '/resume',
        accent: '#D2A738',
        lang,
      })}
    </div>
  `;
}

export function renderResumeFolioInner(state) {
  const lang = state.lang;
  const track = RESUME_TRACKS[state.resumeTrack] || RESUME_TRACKS.all;

  const tabsHtml = Object.values(RESUME_TRACKS)
    .map((t) => {
      const active = t.id === track.id ? 'is-active' : '';
      return `<button type="button" class="lens-tab ${active}" role="tab" aria-selected="${t.id === track.id}" data-track="${t.id}">${t.label[lang]}</button>`;
    })
    .join('');

  const timelineHtml = EXPERIENCE.map((role) => {
    const highlighted = track.highlightRoles.includes(role.id) ? 'is-highlighted' : '';
    return `
      <article class="timeline-item ${highlighted}">
        <div class="timeline-head">
          <div class="timeline-role">${role.role[lang]} — <span class="company">${role.company[lang]}</span></div>
          <div class="timeline-period">${role.period[lang]}</div>
        </div>
        <ul class="timeline-bullets">
          ${role.bullets[lang].map((b) => `<li>${b}</li>`).join('')}
        </ul>
        ${
          role.linkedVenture
            ? `<div style="margin-top:10px;"><a href="/work/${role.linkedVenture}" data-route="/work/${role.linkedVenture}" class="folio-inline-case-link">${lang === 'fa' ? 'مطالعه مونوگراف فنی این سیستم ←' : 'Inspect Full Engineering Monograph →'}</a></div>`
            : ''
        }
      </article>
    `;
  }).join('');

  const skillsHtml = SKILLS_MATRIX.map((grp) => {
    const tags = lang === 'fa' && grp.itemsFa ? grp.itemsFa : grp.items;
    return `
      <div>
        <div class="folio-skill-cat">${grp.title[lang]}</div>
        <div class="skill-tags">${tags.map((item) => `<span class="skill-tag">${item}</span>`).join('')}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="lens-bar has-crosshairs">
      ${crosshairsHtml()}
      <div class="lens-tabs" role="tablist">${tabsHtml}</div>
      <span class="folio-stamp">${lang === 'fa' ? '۲۰۱۸ تا ۲۰۲۶ · بانک حقیقت ورفای‌شده' : '2018 — 2026 · VERIFIED FACT BANK'}</span>
    </div>

    <div class="folio-grid">
      <div class="folio-panel has-crosshairs">
        ${crosshairsHtml()}
        <div class="resume-summary-box">
          <div class="resume-track-headline">${track.headline[lang]}</div>
          <p class="resume-summary-p">${track.summary[lang]}</p>
        </div>
        <div class="timeline-list">${timelineHtml}</div>
      </div>

      <aside class="skills-sidebar">
        <div class="skill-group">
          <h3>${lang === 'fa' ? 'دریافت رزومه‌های رسمی یک‌صفحه‌ای (A4 PDF)' : 'Export Verified 1-Page Resumes (A4 PDF)'}</h3>
          <div class="download-stack">
            <a href="/resumes/Hamid_Mehrani_AI_Automation_Engineer.pdf" download class="folio-btn">
              <span>${lang === 'fa' ? 'مسیر A · مهندس اتوماسیون AI (PDF)' : 'Track A · AI Automation Engineer (PDF)'}</span>
              <span>↓</span>
            </a>
            <a href="/resumes/Hamid_Mehrani_Web_Developer.pdf" download class="folio-btn is-outline">
              <span>${lang === 'fa' ? 'مسیر B · توسعه‌دهنده ارشد وب (PDF)' : 'Track B · Web Developer Next.js / WP (PDF)'}</span>
              <span>↓</span>
            </a>
            <button type="button" id="print-folio-btn" class="folio-btn is-outline">
              <span>${lang === 'fa' ? 'چاپ نسخه کاغذی تمیز (A4)' : 'Print Clean Folio (A4)'}</span>
              <span>⎙</span>
            </button>
          </div>
        </div>

        <div class="skill-group">
          <h3>${lang === 'fa' ? 'سبک همکاری: Async-Native' : 'Operating Mode: Async-Native'}</h3>
          <p class="folio-async-note">
            ${
              lang === 'fa'
                ? 'تمامی مکاتبات و تحویل‌ها به‌صورت مکتوب، مستند و شفاف در چت، ایمیل و گیت‌هاب انجام می‌شود. برای شروع سریع و بدون ریسک، آماده اجرای تسک آزمایشی پولی ۴۸ ساعته روی بک‌لاگ واقعی شما هستم.'
                : 'Strong written communicator operating async-first via Slack, Linear, GitHub PRs, and email (no live calls). Happy to kick off any engagement with a scoped 48h paid work-sample trial.'
            }
          </p>
          <a href="/hire" data-route="/hire" class="folio-btn" style="margin-top:10px;">
            <span>${lang === 'fa' ? 'شروع تسک آزمایشی ۴۸ ساعته' : 'Configure 48h Paid Trial'}</span>
            <span>${lang === 'fa' ? '←' : '→'}</span>
          </a>
        </div>

        <div class="skill-group">
          <h3>${lang === 'fa' ? 'معماری فنی و ابزارهای اثبات‌شده' : 'Verified Technical Architecture'}</h3>
          <div class="folio-skills-stack">${skillsHtml}</div>
        </div>
      </aside>
    </div>
  `;
}

export function renderResumeView(state) {
  const lang = state.lang;
  const copy = UI_COPY[lang];

  return `
    <div class="resume-page">
      <div class="case-subnav-bar">
        <div class="container case-subnav-inner">
          <a href="/" data-route="/" class="subnav-back">${copy.backToHome}</a>
          <span class="subnav-counter">${lang === 'fa' ? 'دفتر کارنامه فنی · ۲۰۱۸ تا ۲۰۲۶' : 'ARCHITECTURAL FOLIO · 2018 — 2026'}</span>
          <a href="/hire" data-route="/hire" class="subnav-step-link">${lang === 'fa' ? '← میز همکاری و استخدام' : 'Hire / 48h Trial →'}</a>
        </div>
      </div>

      <section class="section folio-section">
        <div class="container">
          <div class="section-header">
            <div>
              <div class="chapter-index">${lang === 'fa' ? 'دفتر فنی روز روشن · سوابق واقعی' : 'DAYLIGHT ARCHITECTURAL FOLIO · VERIFIED CV'}</div>
              <h1 class="section-title">${lang === 'fa' ? 'کارنامه ۸ ساله و رزومه چندمسیره' : '8-Year Career Ledger & Multi-Track CV'}</h1>
            </div>
            <p class="section-lead">
              ${
                lang === 'fa'
                  ? 'لنز تخصصی را بین اتوماسیون AI، توسعه فول‌استک وب یا سیستم‌های رشد جابه‌جا کنید و روی هر نقش کلیک کنید تا مونوگراف فنی پروژه ساخته‌شده را ببینید.'
                  : 'Switch perspective lenses across AI orchestration, full-stack web engineering, and growth systems — every role links directly to live shipped proof.'
              }
            </p>
          </div>

          <div id="resume-folio-mount">${renderResumeFolioInner(state)}</div>
        </div>
      </section>

      ${renderNextPortal({
        kicker: copy.nextPortalLabel,
        code: 'CONCIERGE // HIRE OR START 48H TRIAL',
        title: lang === 'fa' ? 'میز هوشمند همکاری و شروع تسک آزمایشی ۴۸ ساعته' : 'Configure Your Role & Launch a 48h Paid Async Trial',
        sub: lang === 'fa' ? 'در ۳۰ ثانیه خلاصه نیاز فنی خود را بسازید و همکاری را بدون ریسک شروع کنید.' : 'Generate a tailored async engagement brief in 30 seconds and see real shipped code on your stack within 48 hours.',
        route: '/hire',
        accent: '#0EC49A',
        lang,
      })}
    </div>
  `;
}

export function buildExecutiveBriefText(state) {
  const role = HIRING_ROLES.find((r) => r.id === state.hireRole) || HIRING_ROLES[0];
  const eng = ENGAGEMENT_MODELS.find((e) => e.id === state.hireEngagement) || ENGAGEMENT_MODELS[0];
  const note = (state.hireCustomNote || '').trim();

  if (state.lang === 'fa') {
    return [
      `سلام حمید،`,
      `پورتفولیوی مهندسی شما (hamidmehrani.pages.dev) را بررسی کردم.`,
      ``,
      `• نقش موردنیاز: ${role.title.fa}`,
      `• مدل همکاری: ${eng.label.fa}`,
      note ? `• توضیح پروژه / دامنه کار: ${note}` : `• پیشنهاد شروع: ارسال یک تسک مشخص از بک‌لاگ برای ارزیابی عملی`,
      ``,
      `لطفاً زمان در دسترس بودن و مراحل شروع همکاری مکتوب (Async) را اطلاع دهید.`,
    ].join('\n');
  }

  return [
    `Hi Hamid,`,
    `I reviewed your engineering monographs at hamidmehrani.pages.dev and would like to discuss working together.`,
    ``,
    `• Target Role: ${role.title.en}`,
    `• Engagement Model: ${eng.label.en}`,
    note ? `• Stack / Scope Context: ${note}` : `• Next Step: Sharing a scoped backlog item / spec in writing`,
    ``,
    `Let me know your current async availability this week.`,
  ].join('\n');
}

export function renderHireBriefGenerator(state) {
  const lang = state.lang;
  const brief = buildExecutiveBriefText(state);
  const subject = encodeURIComponent(
    lang === 'fa'
      ? `پیشنهاد همکاری مهندسی — ${(HIRING_ROLES.find((r) => r.id === state.hireRole) || HIRING_ROLES[0]).title.fa}`
      : `Engineering Collaboration — ${(HIRING_ROLES.find((r) => r.id === state.hireRole) || HIRING_ROLES[0]).title.en}`,
  );
  const mailto = `mailto:hamid@exvorta.com?subject=${subject}&body=${encodeURIComponent(brief)}`;

  const engCards = ENGAGEMENT_MODELS.map((m) => {
    const isAct = m.id === state.hireEngagement ? 'is-active' : '';
    return `
      <button type="button" class="engagement-card-btn ${isAct}" data-engagement="${m.id}">
        <strong>${m.label[lang]}</strong>
        <span>${m.desc[lang]}</span>
      </button>
    `;
  }).join('');

  return `
    <div class="concierge-builder-grid">
      <div class="concierge-steps-col">
        <div class="concierge-label">${lang === 'fa' ? 'گام ۱ · مدل شروع همکاری را انتخاب کنید:' : 'STEP 1 · SELECT ENGAGEMENT FORMAT:'}</div>
        <div class="engagement-stack">${engCards}</div>

        <label class="concierge-label" for="hire-note-input" style="margin-top:18px;display:block;">
          ${lang === 'fa' ? 'گام ۲ · استک فنی یا توضیح کوتاه پروژه (اختیاری):' : 'STEP 2 · OPTIONAL TEAM / STACK CONTEXT:'}
        </label>
        <input
          type="text"
          id="hire-note-input"
          class="concierge-text-input"
          value="${escapeHtml(state.hireCustomNote || '')}"
          placeholder="${lang === 'fa' ? 'مثلاً: Next.js + Python اتوماسیون داخلی برای تیم محصول...' : 'e.g. Next.js 15 + Python multi-agent workflow for our B2B product...'}"
        >
      </div>

      <div class="concierge-output-col">
        <div class="concierge-label">${lang === 'fa' ? 'پیش‌نویس آماده ارسال (مکتوب و سریع):' : 'GENERATED ASYNC BRIEF (READY TO SEND):'}</div>
        <pre class="concierge-brief-pre" id="generated-brief-box">${escapeHtml(brief)}</pre>
        <div class="concierge-cta-row">
          <a href="${mailto}" class="btn btn-primary" id="mailto-brief-link">${lang === 'fa' ? 'ارسال مستقیم با ایمیل ↗' : 'Open in Email Client ↗'}</a>
          <button type="button" class="btn btn-secondary" id="copy-brief-btn">${lang === 'fa' ? 'کپی متن پیشنهاد' : 'Copy Brief Text'}</button>
          <button type="button" class="btn btn-ghost" id="copy-raw-email-btn">hamid@exvorta.com</button>
        </div>
      </div>
    </div>
  `;
}

export function renderHireView(state) {
  const lang = state.lang;
  const copy = UI_COPY[lang];

  const asyncAdvantages = [
    {
      num: '01',
      title: { en: 'Written Specs Eliminate Ambiguity', fa: 'مستندات مکتوب ابهام را صفر می‌کنند' },
      body: {
        en: 'Every task starts with a crisp written contract and acceptance gate — leaving a permanent searchable trail your whole engineering org can read.',
        fa: 'هر فیچر با تعریف دقیق مکتوب و معیار قبولی روشن شروع می‌شود؛ بدون سوءتفاهم‌های شفاهی و با مستندات ماندگار برای کل تیم.',
      },
    },
    {
      num: '02',
      title: { en: 'Zero Calendar Overhead, 100% Deep Work', fa: 'صفر ساعت جلسه اضافی، ۱۰۰٪ تمرکز روی ساخت' },
      body: {
        en: 'Instead of status calls, you wake up to live Cloudflare/staging preview URLs, clean Git PRs, and measured Playwright verification reports.',
        fa: 'به‌جای جلسات طولانی گزارش وضعیت، هر روز لینک پیش‌نمایش زنده، کامیت‌های تمیز و گزارش تست خودکار دریافت می‌کنید.',
      },
    },
    {
      num: '03',
      title: { en: 'De-Risked 48h Paid Work-Sample Trial', fa: 'شروع بدون ریسک با تسک آزمایشی ۴۸ ساعته' },
      body: {
        en: 'Evaluate real production code on a real ticket from your backlog before making any long-term commitment.',
        fa: 'پیش از هر قرارداد بلندمدت، کیفیت کدنویسی و سرعت تحویل را روی یک تیکت واقعی از پروژه خودتان بسنجید.',
      },
    },
  ];

  return `
    <div class="hire-page">
      <div class="case-subnav-bar">
        <div class="container case-subnav-inner">
          <a href="/" data-route="/" class="subnav-back">${copy.backToHome}</a>
          <span class="subnav-counter">${lang === 'fa' ? 'میز همکاری و تسک آزمایشی ۴۸ ساعته' : 'EXECUTIVE HIRING & 48H TRIAL CONCIERGE'}</span>
          <a href="/work/exvorta" data-route="/work/exvorta" class="subnav-step-link">${lang === 'fa' ? '← پرونده Exvorta' : 'Case 01: Exvorta →'}</a>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="chapter-index">${copy.hireKicker}</div>
          <h1 class="case-monumental-title" style="margin-bottom:14px;">${copy.hireTitle}</h1>
          <p class="case-tagline" style="margin-bottom:36px;">${copy.hireLead}</p>

          <div id="role-fit-mount">${renderRoleFitEngineWidget(state, false)}</div>

          <div class="concierge-card has-crosshairs" style="margin-top:32px;" id="hire-brief-mount">
            ${crosshairsHtml()}
            ${renderHireBriefGenerator(state)}
          </div>
        </div>
      </section>

      <section class="section" style="padding-top:0;">
        <div class="container">
          <div class="chapter-index">${lang === 'fa' ? 'مزیت همکاری مکتوب و ASYNC' : 'WHY ASYNC-FIRST WRITTEN ENGINEERING WINS'}</div>
          <div class="decisions-grid is-three-col">
            ${asyncAdvantages
              .map(
                (a) => `
              <div class="decision-card" data-reveal>
                <span class="decision-num" dir="ltr">${a.num}</span>
                <h3>${a.title[lang]}</h3>
                <p>${a.body[lang]}</p>
              </div>
            `,
              )
              .join('')}
          </div>
        </div>
      </section>

      ${renderNextPortal({
        kicker: copy.nextPortalLabel,
        code: '00 // RETURN TO ORBITAL OBSERVATORY',
        title: lang === 'fa' ? 'بازگشت به رصدخانه اصلی یا مرور دوباره پرونده‌ها' : 'Return to the 3D Orbital Observatory & Full Archive',
        sub: copy.heroThesis,
        route: '/',
        accent: '#0EC49A',
        lang,
      })}
    </div>
  `;
}

export function renderNotFoundView(state) {
  const lang = state.lang;
  const copy = UI_COPY[lang];
  const caseLinks = VENTURES.map(
    (v) =>
      `<li><a href="${v.route}" data-route="${v.route}">${v.index} · ${escapeHtml(v.name[lang])}</a></li>`,
  ).join('');
  return `
    <section class="section notfound-section">
      <div class="container notfound-inner has-crosshairs">
        ${crosshairsHtml()}
        <div class="chapter-index" dir="ltr">404 // ROUTE NOT FOUND</div>
        <h1 class="notfound-title">${copy.notFoundTitle}</h1>
        <p class="notfound-body">${copy.notFoundBody}</p>
        <div class="notfound-actions">
          <a href="/" data-route="/" class="btn btn-primary">${copy.notFoundHomeBtn}</a>
          <a href="/work/exvorta" data-route="/work/exvorta" class="btn btn-secondary">${copy.notFoundCasesBtn}</a>
        </div>
        <ul class="notfound-routes">${caseLinks}</ul>
      </div>
    </section>
  `;
}

export function renderRouteContent(route, state) {
  if (route === '/404') return renderNotFoundView(state);
  if (route === '/' || !route) return renderHomeView(state);
  if (route.startsWith('/work/')) {
    const slug = route.replace('/work/', '').replace(/\/$/, '');
    return renderCaseStudyView(slug, state);
  }
  if (route === '/exvorta-web') return renderExvortaWebView(state);
  if (route === '/pipeline') return renderPipelineView(state);
  if (route === '/resume') return renderResumeView(state);
  if (route === '/hire') return renderHireView(state);
  return renderHomeView(state);
}
