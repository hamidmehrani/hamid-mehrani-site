import { initConstellation } from './canvas/constellation.mjs';
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
} from './data/portfolio.mjs';
import { getTradeBrandSvg, getVentureSchematicSvg } from './graphics/diagrams.mjs';

const state = {
  lang: 'en',
  filter: 'all',
  view: 'exhibition',
  pipelineIdx: 0,
  autoCycle: false,
  resumeTrack: 'all',
  previewMode: 'desktop',
  cmdQuery: '',
};

let cycleTimer = null;

function getPathValue(obj, path) {
  return path.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('is-visible');
  window.clearTimeout(el._hideTimer);
  el._hideTimer = window.setTimeout(() => el.classList.remove('is-visible'), 2600);
}

function updateLiveClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;
  const now = new Date();
  const utc = now.toISOString().slice(11, 16);
  let tehran = utc;
  try {
    tehran = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Tehran',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(now);
  } catch {
    tehran = utc;
  }
  const raw = state.lang === 'fa' ? `تهران ${tehran}` : `UTC ${utc}`;
  clockEl.textContent = formatValue(raw, state.lang);
}

function applyTranslations() {
  const copy = UI_COPY[state.lang];
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'fa' ? 'rtl' : 'ltr';
  document.title = copy.pageTitle;

  const brandName = document.getElementById('header-brand-name');
  if (brandName) {
    brandName.textContent = state.lang === 'fa' ? 'حمید مهرآنی' : 'Hamid Mehrani';
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = getPathValue(copy, key);
    if (typeof val === 'string') {
      el.textContent = val;
    }
  });

  const cmdInput = document.getElementById('cmd-input');
  if (cmdInput) cmdInput.placeholder = copy.cmdPlaceholder;

  document.getElementById('lang-en')?.classList.toggle('is-active', state.lang === 'en');
  document.getElementById('lang-fa')?.classList.toggle('is-active', state.lang === 'fa');

  const cycleBtn = document.getElementById('pipeline-cycle-btn');
  if (cycleBtn) {
    cycleBtn.textContent = state.autoCycle ? copy.autoCyclePause : copy.autoCyclePlay;
  }
}

function renderHeroStats() {
  const container = document.getElementById('hero-stats-strip');
  if (!container) return;
  const copy = UI_COPY[state.lang];
  const crosshairs = `
    <span class="crosshair crosshair--tl" aria-hidden="true"></span>
    <span class="crosshair crosshair--tr" aria-hidden="true"></span>
    <span class="crosshair crosshair--bl" aria-hidden="true"></span>
    <span class="crosshair crosshair--br" aria-hidden="true"></span>
  `;
  container.innerHTML =
    crosshairs +
    copy.stats
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
}

function renderVenturesSection() {
  const copy = UI_COPY[state.lang];
  const filtersEl = document.getElementById('venture-filters');
  const container = document.getElementById('ventures-container');
  if (!filtersEl || !container) return;

  filtersEl.innerHTML = copy.filters
    .map((f) => {
      const count = f.id === 'all' ? VENTURES.length : VENTURES.filter((v) => v.category === f.id).length;
      const activeClass = state.filter === f.id ? 'is-active' : '';
      return `
        <button type="button" class="pill-btn ${activeClass}" data-filter="${f.id}">
          <span>${f.label}</span>
          <span class="pill-count">${formatValue(count, state.lang)}</span>
        </button>
      `;
    })
    .join('');

  document.getElementById('view-exhibition')?.classList.toggle('is-active', state.view === 'exhibition');
  document.getElementById('view-ledger')?.classList.toggle('is-active', state.view === 'ledger');

  const items = state.filter === 'all' ? VENTURES : VENTURES.filter((v) => v.category === state.filter);

  if (state.view === 'exhibition') {
    container.innerHTML = `<div class="ventures-grid">${items
      .map((item) => {
        const sizeCls =
          state.filter === 'all' && item.featured
            ? 'is-featured'
            : state.filter === 'all' && item.secondaryWide
              ? 'is-secondary-wide'
              : '';
        const visualHtml = item.previewImg
          ? `<img src="${item.previewImg}" alt="${item.name[state.lang]}" loading="lazy" width="1440" height="900">`
          : getVentureSchematicSvg(item.schematicType);
        const statusCls = item.statusType === 'frozen' ? 'is-frozen' : 'is-live';
        const stackItems = state.lang === 'fa' && item.stackFa ? item.stackFa : item.stack;
        const stackHtml = stackItems.map((t) => `<span class="chip">${t}</span>`).join('');
        const liveBtn = item.liveUrl
          ? `<a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-ext-link">${copy.liveVisit} ↗</a>`
          : '';

        return `
          <article class="venture-card ${sizeCls}">
            <div class="venture-visual">
              ${visualHtml}
              <span class="venture-badge-float ${statusCls}">${item.status[state.lang]}</span>
            </div>
            <div class="venture-body">
              <div class="venture-meta-row">
                <span>${formatVentureYear(item.year, state.lang)}</span>
                <span>${item.role[state.lang]}</span>
              </div>
              <div class="venture-title-row">
                <h3 class="venture-title">${item.name[state.lang]}</h3>
              </div>
              <p class="venture-summary">${item.summary[state.lang]}</p>
              <div class="venture-proof">${item.proof[state.lang]}</div>
              <div class="chip-row">${stackHtml}</div>
              <div class="card-actions">
                <button type="button" class="card-action-btn" data-open-venture="${item.id}">${copy.inspectBtn}</button>
                ${liveBtn}
              </div>
            </div>
          </article>
        `;
      })
      .join('')}</div>`;
  } else {
    container.innerHTML = `
      <div class="ledger-wrap">
        <table class="ledger-table">
          <thead>
            <tr>${copy.ledgerHeaders.map((h) => `<th>${h}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${items
              .map(
                (item) => `
              <tr class="ledger-row" data-open-venture="${item.id}">
                <td style="font-family:var(--font-mono);color:var(--ink-muted);">${formatVentureYear(item.year, state.lang)}</td>
                <td><strong>${item.name[state.lang]}</strong></td>
                <td style="color:var(--ink-secondary);">${item.role[state.lang]}</td>
                <td>${(state.lang === 'fa' && item.stackFa ? item.stackFa : item.stack).slice(0, 3).map((s) => `<span class="chip">${s}</span>`).join(' ')}</td>
                <td style="font-size:0.82rem;color:#7EEAD4;">${item.proof[state.lang]}</td>
                <td><button type="button" class="card-action-btn" data-open-venture="${item.id}">${copy.inspectBtn}</button></td>
              </tr>
            `,
              )
              .join('')}
          </tbody>
        </table>
      </div>
    `;
  }
}

function renderTradeHouses() {
  const grid = document.getElementById('trade-houses-grid');
  if (!grid) return;
  const copy = UI_COPY[state.lang];

  grid.innerHTML = EXVORTA_WEB_SITES.map(
    (site) => {
      const wrapModifier =
        site.logoType === 'aurum'
          ? 'trade-logo-wrap--dark'
          : site.logoType === 'stonvi'
            ? 'trade-logo-wrap--slate'
            : '';
      const specsTxt = typeof site.specs === 'string' ? site.specs : site.specs[state.lang];
      return `
    <article class="trade-card">
      <div class="trade-preview-box">
        <img src="${site.previewImg}" alt="${site.name} live preview" loading="lazy" width="1440" height="900">
      </div>
      <div class="trade-card-body">
        <div class="trade-card-head">
          <div class="trade-brand-lockup">
            <span class="trade-logo-wrap ${wrapModifier}">${getTradeBrandSvg(site.logoType)}</span>
            <div>
              <h3 class="trade-name">${site.name}</h3>
              <div class="trade-sector">${site.sector[state.lang]}</div>
            </div>
          </div>
          <span class="swatch-pair" title="Brand Palette">
            <span class="swatch-dot" style="background:${site.colors[0]}"></span>
            <span class="swatch-dot" style="background:${site.colors[1]}"></span>
          </span>
        </div>
        <p class="trade-desc">${site.desc[state.lang]}</p>
        <div class="trade-specs">${formatValue(specsTxt, state.lang)}</div>
        <div class="card-actions">
          <button type="button" class="card-action-btn" data-open-preview="${site.id}">${copy.livePreviewBtn}</button>
          <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="card-ext-link">${site.url.replace('https://', '')} ↗</a>
        </div>
      </div>
    </article>
  `;
    },
  ).join('');
}

function renderPipeline() {
  const stepsEl = document.getElementById('pipeline-steps');
  const inspectorEl = document.getElementById('pipeline-inspector');
  if (!stepsEl || !inspectorEl) return;

  stepsEl.innerHTML = PIPELINE_STAGES.map((st, idx) => {
    const active = idx === state.pipelineIdx ? 'is-active' : '';
    return `
      <button type="button" class="pipeline-step-btn ${active}" role="tab" aria-selected="${idx === state.pipelineIdx}" data-stage-idx="${idx}">
        <span class="step-num">${formatValue(st.num, state.lang)}</span>
        <span class="step-title">${st.title[state.lang]}</span>
        <span class="step-role">${state.lang === 'fa' ? st.roleFa || st.role : st.role}</span>
      </button>
    `;
  }).join('');

  const activeStage = PIPELINE_STAGES[state.pipelineIdx];
  const stageBadge =
    state.lang === 'fa'
      ? `مرحله ${formatValue(activeStage.num, 'fa')} · ${activeStage.roleFa || activeStage.role}`
      : `STAGE ${activeStage.num} · ${activeStage.role}`;
  const meterPips = PIPELINE_STAGES.map((_, i) => {
    const cls = i === state.pipelineIdx ? 'is-current' : i < state.pipelineIdx ? 'is-done' : '';
    return `<span class="stage-meter-pip ${cls}"></span>`;
  }).join('');
  inspectorEl.innerHTML = `
    <div class="inspector-topbar">
      <div class="stage-meter" aria-hidden="true">${meterPips}</div>
      <span style="font-family:var(--font-mono);font-size:0.78rem;color:var(--ink-muted);">${stageBadge}</span>
    </div>
    <div class="inspector-body">
      <div>
        <h3 style="margin:0 0 8px;font-family:var(--font-display);font-size:1.35rem;">${activeStage.title[state.lang]}</h3>
        <p style="margin:0;color:var(--ink-secondary);font-size:0.96rem;">${activeStage.desc[state.lang]}</p>
      </div>
      <pre class="inspector-code"><code>${activeStage.terminal}</code></pre>
    </div>
  `;
}

function renderResumeFolio() {
  const tabsEl = document.getElementById('resume-lens-tabs');
  const summaryEl = document.getElementById('resume-summary-box');
  const timelineEl = document.getElementById('timeline-list');
  const skillsEl = document.getElementById('skills-matrix-list');
  if (!tabsEl || !summaryEl || !timelineEl || !skillsEl) return;

  const track = RESUME_TRACKS[state.resumeTrack] || RESUME_TRACKS.all;

  tabsEl.innerHTML = Object.values(RESUME_TRACKS)
    .map((t) => {
      const active = t.id === state.resumeTrack ? 'is-active' : '';
      return `<button type="button" class="lens-tab ${active}" role="tab" aria-selected="${t.id === state.resumeTrack}" data-track="${t.id}">${t.label[state.lang]}</button>`;
    })
    .join('');

  summaryEl.innerHTML = `
    <div class="resume-track-headline">${track.headline[state.lang]}</div>
    <p style="margin:0;color:#1e293b;font-size:0.98rem;line-height:1.68;">${track.summary[state.lang]}</p>
  `;

  timelineEl.innerHTML = EXPERIENCE.map((role) => {
    const highlighted = track.highlightRoles.includes(role.id) ? 'is-highlighted' : '';
    const companyName = typeof role.company === 'string' ? role.company : role.company[state.lang];
    return `
      <article class="timeline-item ${highlighted}">
        <div class="timeline-head">
          <div class="timeline-role">${role.role[state.lang]} — <span class="company">${companyName}</span></div>
          <div class="timeline-period">${role.period[state.lang]}</div>
        </div>
        <ul class="timeline-bullets">
          ${role.bullets[state.lang].map((b) => `<li>${b}</li>`).join('')}
        </ul>
      </article>
    `;
  }).join('');

  skillsEl.innerHTML = SKILLS_MATRIX.map(
    (grp) => `
    <div>
      <div style="font-size:0.78rem;font-weight:800;color:var(--signal-turquoise-ink);margin-bottom:7px;">${grp.title[state.lang]}</div>
      <div class="skill-tags">${grp.items.map((item) => `<span class="skill-tag">${item}</span>`).join('')}</div>
    </div>
  `,
  ).join('');
}

function openDossierModal(ventureId) {
  const item = VENTURES.find((v) => v.id === ventureId);
  if (!item) return;
  const copy = UI_COPY[state.lang];
  const modal = document.getElementById('dossier-modal');
  const titleEl = document.getElementById('dossier-modal-title');
  const kickerEl = document.getElementById('dossier-modal-kicker');
  const bodyEl = document.getElementById('dossier-modal-body');

  kickerEl.textContent = `${formatVentureYear(item.year, state.lang)} · ${item.status[state.lang]}`;
  titleEl.textContent = item.name[state.lang];

  const visual = item.previewImg
    ? `<div style="border-radius:10px;overflow:hidden;border:1px solid var(--line-dark);margin-bottom:20px;"><img src="${item.previewImg}" alt="${item.name[state.lang]}" style="width:100%;max-height:360px;object-fit:cover;object-position:top;"></div>`
    : `<div style="border-radius:10px;overflow:hidden;border:1px solid var(--line-dark);margin-bottom:20px;aspect-ratio:16/10;">${getVentureSchematicSvg(item.schematicType)}</div>`;

  const actions = [
    item.liveUrl ? `<a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${copy.liveVisit} ↗</a>` : '',
    item.repoUrl ? `<a href="${item.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">${copy.repoVisit} ↗</a>` : '',
  ]
    .filter(Boolean)
    .join('');

  const stackItems = state.lang === 'fa' && item.stackFa ? item.stackFa : item.stack;
  bodyEl.innerHTML = `
    ${visual}
    <div style="display:grid;gap:16px;">
      <div>
        <h4 style="margin:0 0 6px;color:var(--signal-turquoise);font-size:0.84rem;">${copy.dossierLabels.overview}</h4>
        <p style="margin:0;color:var(--ink-secondary);">${item.summary[state.lang]}</p>
      </div>
      <div>
        <h4 style="margin:0 0 6px;color:var(--signal-turquoise);font-size:0.84rem;">${copy.dossierLabels.architecture}</h4>
        <p style="margin:0;color:var(--ink-secondary);">${item.architecture[state.lang]}</p>
      </div>
      <div>
        <h4 style="margin:0 0 6px;color:var(--accent-brass);font-size:0.84rem;">${copy.dossierLabels.verified}</h4>
        <div class="venture-proof" style="margin:0;">${item.proof[state.lang]}</div>
      </div>
      <div>
        <h4 style="margin:0 0 8px;color:var(--ink-muted);font-size:0.84rem;">${copy.dossierLabels.stack}</h4>
        <div class="chip-row" style="margin:0;">${stackItems.map((s) => `<span class="chip">${s}</span>`).join('')}</div>
      </div>
      ${actions ? `<div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:6px;">${actions}</div>` : ''}
    </div>
  `;
  modal.hidden = false;
  document.getElementById('dossier-modal-close')?.focus();
}

function openTradePreviewModal(siteId) {
  const site = EXVORTA_WEB_SITES.find((s) => s.id === siteId);
  if (!site) return;
  const copy = UI_COPY[state.lang];
  const modal = document.getElementById('dossier-modal');
  const titleEl = document.getElementById('dossier-modal-title');
  const kickerEl = document.getElementById('dossier-modal-kicker');
  const bodyEl = document.getElementById('dossier-modal-body');

  const localesTxt = state.lang === 'fa' ? site.localesFa || site.locales : site.locales;
  kickerEl.textContent = `${site.sector[state.lang]} · ${localesTxt}`;
  titleEl.textContent = `${site.name} — ${site.url.replace('https://', '')}`;

  // Preload mobile preview immediately so switching tabs never flashes 2x2px
  if (site.mobilePreviewImg) {
    const pre = new Image();
    pre.src = site.mobilePreviewImg;
  }

  const renderBody = () => {
    const isMob = state.previewMode === 'mobile';
    const imgSrc = isMob && site.mobilePreviewImg ? site.mobilePreviewImg : site.previewImg;
    const imgW = isMob ? 390 : 1440;
    const imgH = isMob ? 844 : 900;
    bodyEl.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;">
        <div class="view-switcher">
          <button type="button" class="view-btn ${!isMob ? 'is-active' : ''}" data-preview-mode="desktop">${copy.desktopLabel}</button>
          <button type="button" class="view-btn ${isMob ? 'is-active' : ''}" data-preview-mode="mobile">${copy.mobileLabel}</button>
        </div>
        <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="height:38px;">${copy.liveVisit} ↗</a>
      </div>
      <div class="preview-device-frame ${isMob ? 'is-mobile' : ''}">
        <img src="${imgSrc}" width="${imgW}" height="${imgH}" decoding="sync" alt="${site.name} screenshot">
      </div>
      <p style="margin:14px 0 0;color:var(--ink-secondary);font-size:0.92rem;">${site.desc[state.lang]}</p>
    `;
    bodyEl.querySelectorAll('[data-preview-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.previewMode = btn.getAttribute('data-preview-mode');
        renderBody();
      });
    });
  };

  renderBody();
  modal.hidden = false;
  document.getElementById('dossier-modal-close')?.focus();
}

function getCommandItems() {
  const copy = UI_COPY[state.lang];
  const items = [
    ...VENTURES.map((v) => ({
      id: `v:${v.id}`,
      title: v.name[state.lang],
      meta: v.role[state.lang],
      run: () => openDossierModal(v.id),
    })),
    ...EXVORTA_WEB_SITES.map((s) => ({
      id: `s:${s.id}`,
      title: `${s.name} · ${s.url.replace('https://', '')}`,
      meta: s.sector[state.lang],
      run: () => openTradePreviewModal(s.id),
    })),
    {
      id: 'act:lang',
      title: copy.cmdLangTitle,
      meta: copy.cmdLangMeta,
      run: () => setLanguage(state.lang === 'en' ? 'fa' : 'en'),
    },
    {
      id: 'act:email',
      title: copy.copyEmailBtn,
      meta: 'hamid@exvorta.com',
      run: () => copyEmail(),
    },
    {
      id: 'act:pdfA',
      title: copy.downloadTrackA,
      meta: copy.cmdPdfMeta,
      run: () => window.open('/resumes/Hamid_Mehrani_AI_Automation_Engineer.pdf', '_blank'),
    },
    {
      id: 'act:pdfB',
      title: copy.downloadTrackB,
      meta: copy.cmdPdfMeta,
      run: () => window.open('/resumes/Hamid_Mehrani_Web_Developer.pdf', '_blank'),
    },
  ];
  const q = state.cmdQuery.trim().toLowerCase();
  if (!q) return items;
  return items.filter((i) => i.title.toLowerCase().includes(q) || i.meta.toLowerCase().includes(q));
}

function renderCommandResults() {
  const resultsEl = document.getElementById('cmd-results');
  if (!resultsEl) return;
  const copy = UI_COPY[state.lang];
  const matches = getCommandItems();
  if (!matches.length) {
    resultsEl.innerHTML = `<div style="padding:18px;text-align:center;color:var(--ink-muted);">${copy.cmdEmpty}</div>`;
    return;
  }
  resultsEl.innerHTML = matches
    .map(
      (m, i) => `
    <button type="button" class="cmd-item ${i === 0 ? 'is-selected' : ''}" data-cmd-idx="${i}">
      <span><strong>${m.title}</strong></span>
      <span style="font-family:var(--font-mono);font-size:0.74rem;color:var(--ink-muted);">${m.meta}</span>
    </button>
  `,
    )
    .join('');

  resultsEl.querySelectorAll('[data-cmd-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-cmd-idx'));
      closeModals();
      matches[idx]?.run();
    });
  });
}

function closeModals() {
  const dossier = document.getElementById('dossier-modal');
  const cmd = document.getElementById('cmd-modal');
  if (dossier) dossier.hidden = true;
  if (cmd) cmd.hidden = true;
}

function openCmdModal() {
  const cmd = document.getElementById('cmd-modal');
  const input = document.getElementById('cmd-input');
  if (!cmd || !input) return;
  state.cmdQuery = '';
  input.value = '';
  renderCommandResults();
  cmd.hidden = false;
  input.focus();
}

async function copyEmail() {
  const copy = UI_COPY[state.lang];
  try {
    await navigator.clipboard.writeText('hamid@exvorta.com');
  } catch {
    // Fallback if clipboard blocked
  }
  showToast(copy.copiedToast);
}

function setLanguage(lang) {
  state.lang = lang === 'fa' ? 'fa' : 'en';
  try {
    localStorage.setItem('hm_lang', state.lang);
  } catch {
    // Ignore storage error
  }
  renderAll();
}

function renderAll() {
  applyTranslations();
  updateLiveClock();
  renderHeroStats();
  renderVenturesSection();
  renderTradeHouses();
  renderPipeline();
  renderResumeFolio();
}

function initEvents() {
  document.getElementById('lang-en')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('lang-fa')?.addEventListener('click', () => setLanguage('fa'));

  document.getElementById('venture-filters')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    state.filter = btn.getAttribute('data-filter');
    renderVenturesSection();
  });

  document.getElementById('view-exhibition')?.addEventListener('click', () => {
    state.view = 'exhibition';
    renderVenturesSection();
  });
  document.getElementById('view-ledger')?.addEventListener('click', () => {
    state.view = 'ledger';
    renderVenturesSection();
  });

  document.getElementById('ventures-container')?.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-venture]');
    if (!trigger || e.target.closest('a')) return;
    openDossierModal(trigger.getAttribute('data-open-venture'));
  });

  document.getElementById('trade-houses-grid')?.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-preview]');
    if (!trigger) return;
    openTradePreviewModal(trigger.getAttribute('data-open-preview'));
  });

  document.getElementById('pipeline-steps')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-stage-idx]');
    if (!btn) return;
    state.pipelineIdx = Number(btn.getAttribute('data-stage-idx'));
    renderPipeline();
  });

  document.getElementById('pipeline-cycle-btn')?.addEventListener('click', () => {
    state.autoCycle = !state.autoCycle;
    window.clearInterval(cycleTimer);
    if (state.autoCycle) {
      cycleTimer = window.setInterval(() => {
        state.pipelineIdx = (state.pipelineIdx + 1) % PIPELINE_STAGES.length;
        renderPipeline();
      }, 2800);
    }
    applyTranslations();
  });

  document.getElementById('resume-lens-tabs')?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-track]');
    if (!btn) return;
    state.resumeTrack = btn.getAttribute('data-track');
    renderResumeFolio();
  });

  document.getElementById('print-folio-btn')?.addEventListener('click', () => window.print());
  document.getElementById('copy-email-btn')?.addEventListener('click', () => copyEmail());
  document.getElementById('open-cmd-btn')?.addEventListener('click', () => openCmdModal());

  document.getElementById('dossier-modal-close')?.addEventListener('click', closeModals);
  document.getElementById('cmd-close')?.addEventListener('click', closeModals);

  document.getElementById('dossier-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'dossier-modal') closeModals();
  });
  document.getElementById('cmd-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'cmd-modal') closeModals();
  });

  document.getElementById('cmd-input')?.addEventListener('input', (e) => {
    state.cmdQuery = e.target.value;
    renderCommandResults();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openCmdModal();
    } else if (e.key === 'Escape') {
      closeModals();
    }
  });

  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  menuBtn?.addEventListener('click', () => {
    const open = drawer.hidden;
    drawer.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  drawer?.querySelectorAll('[data-mobile-link]').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.hidden = true;
      menuBtn?.setAttribute('aria-expanded', 'false');
    });
  });
}

function boot() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang === 'fa' || urlLang === 'en') {
    state.lang = urlLang;
  } else {
    try {
      const saved = localStorage.getItem('hm_lang');
      if (saved === 'fa' || saved === 'en') state.lang = saved;
    } catch {
      // Ignore storage error
    }
  }

  initConstellation(document.getElementById('constellation-canvas'));
  initEvents();
  renderAll();
  window.setInterval(updateLiveClock, 15000);
}

boot();
