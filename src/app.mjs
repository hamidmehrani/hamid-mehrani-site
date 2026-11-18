import { initConstellation } from './canvas/constellation.mjs';
import {
  ROUTES_MANIFEST,
  UI_COPY,
  VENTURES,
  EXVORTA_WEB_SITES,
  PIPELINE_STAGES,
  formatValue,
} from './data/portfolio.mjs';
import { MONOGRAPHS } from './data/monographs.mjs';
import {
  SoundEngine,
  initMagneticCursor,
  initKineticTicker,
  refreshScrollChoreography,
  initSplitComparators,
  initDevHud,
} from './motion/fx.mjs';
import {
  renderRouteContent,
  renderVenturesListWidget,
  renderTradeCinemaWidget,
  renderPipelineSimulatorWidget,
  renderRoleFitEngineWidget,
  renderCaseStudyStageMedia,
  renderCaseTopologyInspector,
  renderResumeFolioInner,
  renderHireBriefGenerator,
  buildExecutiveBriefText,
} from './views/render-pages.mjs';

const sound = new SoundEngine();

const state = {
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
  cmdQuery: '',
};

let cleanupConstellation = () => {};
let cleanupTicker = () => {};
let cleanupScroll = () => {};
let simTimer = null;
let devHud = { toggle: () => {}, refresh: () => {} };

function normalizeRoute(rawPath) {
  if (!rawPath || rawPath === '/' || rawPath === '/index.html') return '/';
  const cleaned = rawPath.replace(/\/index\.html$/, '').replace(/\/+$/, '');
  const found = ROUTES_MANIFEST.find((r) => r.path === cleaned);
  return found ? found.path : '/404';
}

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
  const raw = state.lang === 'fa' ? `تهران ${tehran} · غیرهمزمان` : `UTC ${utc} · THR ${tehran}`;
  clockEl.textContent = formatValue(raw, state.lang);
}

function syncDocumentMeta() {
  const copy = UI_COPY[state.lang];
  const routeEntry = ROUTES_MANIFEST.find((r) => r.path === state.route) || ROUTES_MANIFEST[0];

  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'fa' ? 'rtl' : 'ltr';
  document.title =
    state.route === '/404'
      ? state.lang === 'fa'
        ? 'برگه پیدا نشد · حمید مهرآنی'
        : 'Page Not Found · Hamid Mehrani'
      : routeEntry.title[state.lang];

  const brandName = document.getElementById('header-brand-name');
  if (brandName) {
    brandName.textContent = state.lang === 'fa' ? 'حمید مهرآنی' : 'Hamid Mehrani';
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = getPathValue(copy, key);
    if (typeof val === 'string') el.textContent = val;
  });

  const soundLabel = document.getElementById('sound-btn-label');
  if (soundLabel) {
    soundLabel.textContent = sound.enabled ? copy.soundOn : copy.soundOff;
  }

  const cmdInput = document.getElementById('cmd-input');
  if (cmdInput) cmdInput.placeholder = copy.cmdPlaceholder;

  document.getElementById('lang-en')?.classList.toggle('is-active', state.lang === 'en');
  document.getElementById('lang-fa')?.classList.toggle('is-active', state.lang === 'fa');

  // Highlight active header nav & floating quick-dock items
  document.querySelectorAll('[data-nav-match]').forEach((el) => {
    const pat = el.getAttribute('data-nav-match');
    const active = pat === '/' ? state.route === '/' : state.route.startsWith(pat);
    if (active) el.setAttribute('aria-current', 'page');
    else el.removeAttribute('aria-current');
  });

  document.querySelectorAll('[data-dock-match]').forEach((el) => {
    const pat = el.getAttribute('data-dock-match');
    const active = pat === '/' ? state.route === '/' : state.route.startsWith(pat);
    el.classList.toggle('is-active', active);
  });
}

function teardownRouteVisuals() {
  cleanupConstellation();
  cleanupConstellation = () => {};
  cleanupTicker();
  cleanupTicker = () => {};
  cleanupScroll();
  cleanupScroll = () => {};
}

function mountRouteVisuals() {
  teardownRouteVisuals();

  const orbCanvas = document.getElementById('constellation-canvas');
  if (orbCanvas) {
    cleanupConstellation = initConstellation(orbCanvas, (targetRoute) => {
      navigateTo(targetRoute);
    });
  }

  const tickerCanvas = document.getElementById('kinetic-ticker-canvas');
  if (tickerCanvas) {
    cleanupTicker = initKineticTicker(tickerCanvas, () => UI_COPY[state.lang].marqueeItems);
  }

  initSplitComparators(document);
  cleanupScroll = refreshScrollChoreography();
  devHud.refresh();
}

function renderMainStage() {
  const main = document.getElementById('main-content');
  if (!main) return;
  main.innerHTML = renderRouteContent(state.route, state);
  syncDocumentMeta();
  updateLiveClock();
  mountRouteVisuals();
}

function buildUrlForRoute(routePath) {
  return state.lang === 'fa' ? `${routePath}?lang=fa` : routePath;
}

export function navigateTo(targetPath, { push = true } = {}) {
  const nextRoute = normalizeRoute(targetPath);
  const routeEntry =
    ROUTES_MANIFEST.find((r) => r.path === nextRoute) || (nextRoute === '/404' ? { code: '404 // NOT FOUND' } : ROUTES_MANIFEST[0]);

  window.clearInterval(simTimer);
  state.simRunning = false;
  state.caseMediaMode = 'desktop';
  state.topoIdx = 0;
  state.route = nextRoute;

  if (push) {
    window.history.pushState({ route: nextRoute }, '', buildUrlForRoute(nextRoute));
  }

  sound.warp();

  const shutter = document.getElementById('route-shutter');
  const shutterCode = document.getElementById('route-shutter-code');
  if (shutterCode) shutterCode.textContent = routeEntry.code;

  const commitDom = () => {
    renderMainStage();
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && typeof document.startViewTransition === 'function') {
    if (shutter) {
      shutter.classList.add('is-flashing');
      window.setTimeout(() => shutter.classList.remove('is-flashing'), 360);
    }
    document.startViewTransition(() => {
      commitDom();
    });
  } else {
    if (!reduced && shutter) {
      shutter.classList.add('is-flashing');
      window.setTimeout(() => shutter.classList.remove('is-flashing'), 340);
    }
    commitDom();
  }
}

function setLanguage(lang) {
  state.lang = lang === 'fa' ? 'fa' : 'en';
  try {
    localStorage.setItem('hm_lang', state.lang);
  } catch {
    // Ignore storage restriction
  }
  window.history.replaceState({ route: state.route }, '', buildUrlForRoute(state.route));
  sound.tick(580, 0.035, 'triangle');
  renderMainStage();
}

function startLiveSimulation() {
  window.clearInterval(simTimer);
  if (state.simRunning) {
    state.simRunning = false;
    const mount = document.getElementById('pipeline-sim-mount');
    if (mount) mount.innerHTML = renderPipelineSimulatorWidget(state, state.route === '/');
    return;
  }

  state.simRunning = true;
  state.pipelineIdx = 0;
  sound.tick(520, 0.04, 'triangle');

  const refreshSimDom = () => {
    const mount = document.getElementById('pipeline-sim-mount');
    if (mount) mount.innerHTML = renderPipelineSimulatorWidget(state, state.route === '/');
  };
  refreshSimDom();

  simTimer = window.setInterval(() => {
    if (state.pipelineIdx < PIPELINE_STAGES.length - 1) {
      state.pipelineIdx += 1;
      sound.tick(540 + state.pipelineIdx * 75, 0.04, 'sine');
      refreshSimDom();
    } else {
      window.clearInterval(simTimer);
      state.simRunning = false;
      sound.tick(880, 0.06, 'triangle');
      refreshSimDom();
    }
  }, 1150);
}

async function copyText(text, toastMsg) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // Ignore fallback
  }
  sound.tick(740, 0.04, 'sine');
  showToast(toastMsg);
}

function getCommandItems() {
  const copy = UI_COPY[state.lang];
  const routeCmds = ROUTES_MANIFEST.map((r) => ({
    id: `route:${r.path}`,
    title: r.title[state.lang].split(/ \| | — | · /)[0],
    meta: r.code,
    run: () => navigateTo(r.path),
  }));

  const tradeCmds = EXVORTA_WEB_SITES.map((s) => ({
    id: `ext:${s.id}`,
    title: `${s.name} — ${s.url.replace('https://', '')} ↗`,
    meta: s.sector[state.lang],
    run: () => window.open(s.url, '_blank', 'noopener'),
  }));

  const utilCmds = [
    {
      id: 'act:lang',
      title: state.lang === 'en' ? 'Switch Language → فارسی (RTL)' : 'تغییر زبان به English (LTR)',
      meta: 'LOCALE / RTL',
      run: () => setLanguage(state.lang === 'en' ? 'fa' : 'en'),
    },
    {
      id: 'act:hud',
      title: state.lang === 'en' ? 'Toggle Engineering Telemetry HUD (⌘I)' : 'نمایش/مخفی‌سازی پنل تله‌متری فنی (⌘I)',
      meta: 'DEV HUD',
      run: () => devHud.toggle(),
    },
    {
      id: 'act:email',
      title: copy.copyEmailBtn,
      meta: 'hamid@exvorta.com',
      run: () => copyText('hamid@exvorta.com', copy.copiedToast),
    },
    {
      id: 'act:pdfA',
      title: copy.pdfTrackA,
      meta: 'PDF A4',
      run: () => window.open('/resumes/Hamid_Mehrani_AI_Automation_Engineer.pdf', '_blank'),
    },
    {
      id: 'act:pdfB',
      title: copy.pdfTrackB,
      meta: 'PDF A4',
      run: () => window.open('/resumes/Hamid_Mehrani_Web_Developer.pdf', '_blank'),
    },
    {
      id: 'act:pdfC',
      title: copy.pdfTrackC,
      meta: 'PDF A4',
      run: () => window.open('/resumes/Hamid_Mehrani_Growth_SEO.pdf', '_blank'),
    },
  ];

  const all = [...routeCmds, ...tradeCmds, ...utilCmds];
  const q = state.cmdQuery.trim().toLowerCase();
  if (!q) return all;
  return all.filter((i) => i.title.toLowerCase().includes(q) || i.meta.toLowerCase().includes(q));
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
        <span class="cmd-item-meta" dir="ltr">${m.meta}</span>
      </button>
    `,
    )
    .join('');

  resultsEl.querySelectorAll('[data-cmd-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-cmd-idx'));
      closeCmdModal();
      matches[idx]?.run();
    });
  });
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

function closeCmdModal() {
  const cmd = document.getElementById('cmd-modal');
  if (cmd) cmd.hidden = true;
}

function initDelegatedInteractions() {
  // Global SPA route link interception
  document.addEventListener('click', (e) => {
    const routeLink = e.target.closest('a[data-route]');
    if (
      routeLink &&
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      !routeLink.hasAttribute('download') &&
      routeLink.getAttribute('target') !== '_blank'
    ) {
      e.preventDefault();
      const drawer = document.getElementById('mobile-drawer');
      if (drawer && !drawer.hidden) {
        drawer.hidden = true;
        document.getElementById('mobile-menu-btn')?.setAttribute('aria-expanded', 'false');
      }
      const dest = routeLink.getAttribute('data-route');
      if (dest === state.route) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigateTo(dest);
      }
      return;
    }

    // Venture category filter
    const filterBtn = e.target.closest('[data-filter]');
    if (filterBtn) {
      state.filter = filterBtn.getAttribute('data-filter');
      sound.tick(520, 0.03);
      document.querySelectorAll('[data-filter]').forEach((b) => {
        b.classList.toggle('is-active', b.getAttribute('data-filter') === state.filter);
      });
      const mount = document.getElementById('ventures-list-mount');
      if (mount) {
        mount.innerHTML = renderVenturesListWidget(state);
        cleanupScroll();
        cleanupScroll = refreshScrollChoreography();
      }
      return;
    }

    // Editorial Spreads vs Interactive Ledger
    const viewBtn = e.target.closest('[data-view]');
    if (viewBtn) {
      state.view = viewBtn.getAttribute('data-view');
      sound.tick(560, 0.03);
      document.querySelectorAll('[data-view]').forEach((b) => {
        b.classList.toggle('is-active', b.getAttribute('data-view') === state.view);
      });
      const mount = document.getElementById('ventures-list-mount');
      if (mount) {
        mount.innerHTML = renderVenturesListWidget(state);
        cleanupScroll();
        cleanupScroll = refreshScrollChoreography();
      }
      return;
    }

    // Exvorta Web 6-Brand Cinema selector
    const tradeBtn = e.target.closest('[data-trade-select]');
    if (tradeBtn) {
      state.activeTradeId = tradeBtn.getAttribute('data-trade-select');
      sound.tick(620, 0.035, 'triangle');
      const mount = document.getElementById('trade-cinema-mount');
      if (mount) mount.innerHTML = renderTradeCinemaWidget(state);
      return;
    }

    // Pipeline simulation mission switcher
    const simBtn = e.target.closest('[data-sim-id]');
    if (simBtn) {
      window.clearInterval(simTimer);
      state.simRunning = false;
      state.simId = simBtn.getAttribute('data-sim-id');
      state.pipelineIdx = 0;
      sound.tick(600, 0.035);
      const mount = document.getElementById('pipeline-sim-mount');
      if (mount) mount.innerHTML = renderPipelineSimulatorWidget(state, state.route === '/');
      return;
    }

    // Pipeline manual stage step
    const stageBtn = e.target.closest('[data-stage-idx]');
    if (stageBtn) {
      window.clearInterval(simTimer);
      state.simRunning = false;
      state.pipelineIdx = Number(stageBtn.getAttribute('data-stage-idx'));
      sound.tick(540 + state.pipelineIdx * 55, 0.03);
      const mount = document.getElementById('pipeline-sim-mount');
      if (mount) mount.innerHTML = renderPipelineSimulatorWidget(state, state.route === '/');
      return;
    }

    // Run Live Mission button
    if (e.target.closest('#run-sim-btn')) {
      startLiveSimulation();
      return;
    }

    // Executive Hiring Role selector
    const roleBtn = e.target.closest('[data-hire-role]');
    if (roleBtn) {
      state.hireRole = roleBtn.getAttribute('data-hire-role');
      sound.tick(640, 0.035, 'triangle');
      const mount = document.getElementById('role-fit-mount');
      if (mount) mount.innerHTML = renderRoleFitEngineWidget(state, state.route === '/');
      const briefMount = document.getElementById('hire-brief-mount');
      if (briefMount) briefMount.innerHTML = renderHireBriefGenerator(state);
      return;
    }

    // Case Study viewport media switcher
    const mediaBtn = e.target.closest('[data-case-media]');
    if (mediaBtn) {
      state.caseMediaMode = mediaBtn.getAttribute('data-case-media');
      sound.tick(590, 0.03);
      document.querySelectorAll('[data-case-media]').forEach((b) => {
        b.classList.toggle('is-active', b.getAttribute('data-case-media') === state.caseMediaMode);
      });
      const slug = state.route.replace('/work/', '').replace(/\/$/, '');
      const venture = VENTURES.find((v) => v.id === slug) || VENTURES[0];
      const mount = document.getElementById('case-media-mount');
      if (mount) {
        mount.innerHTML = renderCaseStudyStageMedia(venture, state);
        initSplitComparators(mount);
      }
      return;
    }

    // Interactive Topology Node click
    const topoTrigger = e.target.closest('[data-topo-idx]');
    if (topoTrigger) {
      state.topoIdx = Number(topoTrigger.getAttribute('data-topo-idx'));
      sound.tick(680, 0.035, 'triangle');
      const mount = document.getElementById('case-topology-mount');
      if (mount) {
        const cid = mount.getAttribute('data-case-id') || 'exvorta';
        mount.innerHTML = renderCaseTopologyInspector(MONOGRAPHS[cid] || MONOGRAPHS.exvorta, state);
      }
      return;
    }

    // Resume Lens switcher
    const trackBtn = e.target.closest('[data-track]');
    if (trackBtn) {
      state.resumeTrack = trackBtn.getAttribute('data-track');
      sound.tick(600, 0.03);
      const mount = document.getElementById('resume-folio-mount');
      if (mount) mount.innerHTML = renderResumeFolioInner(state);
      return;
    }

    // Print Folio button
    if (e.target.closest('#print-folio-btn')) {
      window.print();
      return;
    }

    // Engagement model selector on /hire
    const engBtn = e.target.closest('[data-engagement]');
    if (engBtn) {
      state.hireEngagement = engBtn.getAttribute('data-engagement');
      sound.tick(620, 0.03);
      const briefMount = document.getElementById('hire-brief-mount');
      if (briefMount) briefMount.innerHTML = renderHireBriefGenerator(state);
      return;
    }

    if (e.target.closest('#copy-brief-btn')) {
      copyText(buildExecutiveBriefText(state), UI_COPY[state.lang].briefCopiedToast);
      return;
    }

    if (e.target.closest('#copy-raw-email-btn') || e.target.closest('#copy-email-btn')) {
      copyText('hamid@exvorta.com', UI_COPY[state.lang].copiedToast);
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target && e.target.id === 'hire-note-input') {
      state.hireCustomNote = e.target.value;
      const pre = document.getElementById('generated-brief-box');
      const mailLink = document.getElementById('mailto-brief-link');
      const brief = buildExecutiveBriefText(state);
      if (pre) pre.textContent = brief;
      if (mailLink) {
        const subj = encodeURIComponent('Engineering Collaboration — Hamid Mehrani');
        mailLink.setAttribute('href', `mailto:hamid@exvorta.com?subject=${subj}&body=${encodeURIComponent(brief)}`);
      }
    }
  });

  // Header controls
  document.getElementById('lang-en')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('lang-fa')?.addEventListener('click', () => setLanguage('fa'));

  document.getElementById('toggle-sound-btn')?.addEventListener('click', (e) => {
    const on = sound.toggle();
    e.currentTarget.setAttribute('aria-pressed', String(on));
    e.currentTarget.classList.toggle('is-active', on);
    syncDocumentMeta();
  });

  document.getElementById('toggle-dev-btn')?.addEventListener('click', () => {
    sound.tick(720, 0.035);
    devHud.toggle();
  });

  document.getElementById('open-cmd-btn')?.addEventListener('click', openCmdModal);
  document.getElementById('cmd-close')?.addEventListener('click', closeCmdModal);
  document.getElementById('cmd-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'cmd-modal') closeCmdModal();
  });
  document.getElementById('cmd-input')?.addEventListener('input', (e) => {
    state.cmdQuery = e.target.value;
    renderCommandResults();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openCmdModal();
    } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'i') {
      e.preventDefault();
      devHud.toggle();
    } else if (e.key === 'Escape') {
      closeCmdModal();
    } else if (e.key === 'Enter' && !document.getElementById('cmd-modal')?.hidden) {
      const matches = getCommandItems();
      if (matches[0]) {
        closeCmdModal();
        matches[0].run();
      }
    }
  });

  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  menuBtn?.addEventListener('click', () => {
    const open = drawer.hidden;
    drawer.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  window.addEventListener('popstate', () => {
    state.route = normalizeRoute(window.location.pathname);
    const langParam = new URLSearchParams(window.location.search).get('lang');
    if ((langParam === 'en' || langParam === 'fa') && langParam !== state.lang) {
      setLanguage(langParam);
      return;
    }
    renderMainStage();
  });
}

function boot() {
  state.route = normalizeRoute(window.location.pathname);

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

  // Preload mobile trade previews in idle time so cinema switching is instant
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      EXVORTA_WEB_SITES.forEach((s) => {
        if (s.mobilePreviewImg) {
          const img = new Image();
          img.src = s.mobilePreviewImg;
        }
      });
    });
  }

  devHud = initDevHud(() => state.route);
  initMagneticCursor();
  initDelegatedInteractions();
  renderMainStage();
  window.setInterval(updateLiveClock, 15000);
}

boot();
