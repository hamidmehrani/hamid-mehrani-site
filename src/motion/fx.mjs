export class SoundEngine {
  constructor() {
    this.enabled = false;
    this.ctx = null;
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.ensureCtx();
      this.tick(660, 0.045, 'triangle');
    }
    return this.enabled;
  }

  ensureCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) this.ctx = new AC();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  tick(freq = 540, dur = 0.035, type = 'sine') {
    if (!this.enabled) return;
    this.ensureCtx();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.18, now + dur);
      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + dur);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.01);
    } catch {
      // Ignore audio errors
    }
  }

  warp() {
    this.tick(440, 0.055, 'triangle');
    if (this.enabled && typeof window !== 'undefined') {
      window.setTimeout(() => this.tick(660, 0.05, 'sine'), 45);
    }
  }
}

export function initMagneticCursor() {
  if (typeof window === 'undefined') return () => {};
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const el = document.getElementById('cursor-reticle');
  const labelEl = document.getElementById('cursor-reticle-label');
  if (!finePointer || reduced || !el || !labelEl) return () => {};

  let tx = window.innerWidth * 0.5;
  let ty = window.innerHeight * 0.5;
  let cx = tx;
  let cy = ty;
  let active = false;
  let raf = null;

  const tick = () => {
    cx += (tx - cx) * 0.22;
    cy += (ty - cy) * 0.22;
    const safeX = Math.min(window.innerWidth - 64, Math.max(64, cx));
    const safeY = Math.min(window.innerHeight - 28, Math.max(28, cy));
    el.style.transform = `translate3d(${safeX}px, ${safeY}px, 0) translate(-50%, -50%)`;
    if (active) {
      raf = window.requestAnimationFrame(tick);
    } else {
      raf = null;
    }
  };

  const onMove = (e) => {
    tx = e.clientX;
    ty = e.clientY;
    if (!active) {
      active = true;
      cx = tx;
      cy = ty;
      el.classList.add('is-visible');
    }
    const hoverTarget = e.target.closest('[data-cursor]');
    if (hoverTarget) {
      const text = hoverTarget.getAttribute('data-cursor') || '';
      labelEl.textContent = text;
      el.classList.add('is-expanded');
    } else {
      labelEl.textContent = '';
      el.classList.remove('is-expanded');
    }
    if (!raf) raf = window.requestAnimationFrame(tick);
  };

  const onLeave = () => {
    active = false;
    el.classList.remove('is-visible', 'is-expanded');
  };

  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('mouseleave', onLeave);

  return () => {
    if (raf) window.cancelAnimationFrame(raf);
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('mouseleave', onLeave);
  };
}

export function initKineticTicker(canvas, getItemsFn) {
  if (!canvas || typeof window === 'undefined') return () => {};
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 46;
  let dpr = 1;
  let offset = 0;
  let boost = 0;
  let lastScrollY = window.scrollY;
  let paused = false;
  let visible = true;
  let raf = null;
  let lastNow = performance.now();

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, rect.width);
    height = Math.max(36, rect.height || 46);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const onScroll = () => {
    const dy = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;
    boost = Math.min(180, boost + dy * 0.45);
  };

  const draw = (now) => {
    const dt = Math.min(0.05, (now - lastNow) * 0.001);
    lastNow = now;
    const items = getItemsFn() || [];
    const isFa = document.documentElement.lang === 'fa';

    ctx.clearRect(0, 0, width, height);
    ctx.font = isFa
      ? '700 13px "YekanBakh", "IRANYekanX", Tahoma, sans-serif'
      : '600 12px "JetBrains Mono", monospace';
    ctx.textBaseline = 'middle';

    const sep = '   ✦   ';
    const joined = items.join(sep) + sep;
    const unitW = Math.max(320, ctx.measureText(joined).width);

    if (!reduced && !paused) {
      const speed = 44 + boost;
      offset = (offset + speed * dt) % unitW;
      boost *= 0.91;
    }

    let x = -offset;
    const midY = height / 2;
    while (x < width + unitW) {
      let cursor = x;
      for (let i = 0; i < items.length; i++) {
        ctx.fillStyle = '#CBD5E1';
        ctx.fillText(items[i], cursor, midY);
        cursor += ctx.measureText(items[i]).width;
        ctx.fillStyle = i % 2 === 0 ? '#0EC49A' : '#D2A738';
        ctx.fillText(sep, cursor, midY);
        cursor += ctx.measureText(sep).width;
      }
      x += unitW;
    }

    if (!reduced && visible) {
      raf = window.requestAnimationFrame(draw);
    }
  };

  const onEnter = () => {
    paused = true;
  };
  const onLeave = () => {
    paused = false;
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        visible = e.isIntersecting;
        if (visible && !reduced && !raf) {
          lastNow = performance.now();
          raf = window.requestAnimationFrame(draw);
        } else if (!visible && raf) {
          window.cancelAnimationFrame(raf);
          raf = null;
        }
      }
    },
    { threshold: 0.02 },
  );

  resize();
  io.observe(canvas);
  canvas.addEventListener('pointerenter', onEnter);
  canvas.addEventListener('pointerleave', onLeave);
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });

  draw(lastNow);

  return () => {
    if (raf) window.cancelAnimationFrame(raf);
    io.disconnect();
    canvas.removeEventListener('pointerenter', onEnter);
    canvas.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('resize', resize);
    window.removeEventListener('scroll', onScroll);
  };
}

export function refreshScrollChoreography() {
  if (typeof window === 'undefined') return () => {};
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = Array.from(document.querySelectorAll('[data-reveal]'));

  if (reduced) {
    targets.forEach((el) => el.classList.add('is-revealed'));
  }

  const revealInView = () => {
    const vh = window.innerHeight || 900;
    for (const el of targets) {
      if (el.classList.contains('is-revealed')) continue;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.94) {
        el.classList.add('is-revealed');
      }
    }

    // Update top scroll progress bar
    const doc = document.documentElement;
    const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
    const pct = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    const bar = document.getElementById('scroll-progress-fill');
    if (bar) {
      bar.style.transform = `scaleX(${pct})`;
    }

    // Show floating quick-dock only after scrolling past hero fold, hide near bottom footer wordmark
    const dock = document.querySelector('.quick-dock');
    if (dock) {
      const nearBottom = window.scrollY + vh > doc.scrollHeight - 240;
      dock.classList.toggle('is-visible', window.scrollY > 340 && !nearBottom);
    }

    // Update Büro-style SVG trajectory path if present
    const trajPath = document.getElementById('trajectory-svg-path');
    if (trajPath) {
      const box = trajPath.closest('.trajectory-stage');
      if (box) {
        const br = box.getBoundingClientRect();
        const localPct = Math.min(1, Math.max(0.15, (vh - br.top) / Math.max(1, vh + br.height * 0.5)));
        const totalLen = 1200;
        trajPath.style.strokeDasharray = `${totalLen}`;
        trajPath.style.strokeDashoffset = `${Math.round(totalLen * (1 - localPct))}`;
      }
    }
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-revealed');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.06, rootMargin: '0px 0px -4% 0px' },
  );

  targets.forEach((el) => io.observe(el));
  revealInView();
  window.addEventListener('scroll', revealInView, { passive: true });
  window.addEventListener('resize', revealInView, { passive: true });

  return () => {
    io.disconnect();
    window.removeEventListener('scroll', revealInView);
    window.removeEventListener('resize', revealInView);
  };
}

export function initSplitComparators(root = document) {
  root.querySelectorAll('[data-split-stage]').forEach((stage) => {
    const range = stage.querySelector('[data-split-range]');
    const overlay = stage.querySelector('[data-split-overlay]');
    const divider = stage.querySelector('[data-split-divider]');
    if (!range || !overlay || !divider) return;

    const apply = (val) => {
      const pct = Math.min(92, Math.max(8, Number(val)));
      overlay.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      divider.style.left = `${pct}%`;
    };
    apply(range.value || 52);
    range.addEventListener('input', (e) => apply(e.target.value));
  });
}

export function initDevHud(getRouteFn) {
  if (typeof window === 'undefined') return { toggle: () => {} };
  const panel = document.getElementById('dev-hud-panel');
  const gridOverlay = document.getElementById('architectural-grid-overlay');
  if (!panel) return { toggle: () => {} };

  let open = false;
  let showGrid = false;
  let frames = 0;
  let fps = 60;
  let lastFpsTime = performance.now();
  let raf = null;

  const updateMetrics = (now) => {
    frames += 1;
    if (now - lastFpsTime >= 600) {
      fps = Math.min(120, Math.round((frames * 1000) / (now - lastFpsTime)));
      frames = 0;
      lastFpsTime = now;
      renderHud();
    }
    if (open) raf = window.requestAnimationFrame(updateMetrics);
  };

  const renderHud = () => {
    if (!open) return;
    const doc = document.documentElement;
    const iw = window.innerWidth;
    const ih = window.innerHeight;
    const sw = doc.scrollWidth;
    const overflow = Math.max(0, sw - iw);
    const domNodes = document.getElementsByTagName('*').length;
    const isFa = doc.lang === 'fa';
    const route = typeof getRouteFn === 'function' ? getRouteFn() : window.location.pathname;

    panel.innerHTML = `
      <div class="dev-hud-head">
        <span>● SOVEREIGN DEV TELEMETRY</span>
        <button type="button" class="dev-hud-close" data-close-hud aria-label="Close HUD">✕</button>
      </div>
      <div class="dev-hud-rows" dir="ltr">
        <div><span>ROUTE</span><strong>${route}</strong></div>
        <div><span>FRAME RATE</span><strong style="color:#0EC49A">${fps} FPS</strong></div>
        <div><span>VIEWPORT</span><strong>${iw}×${ih}px (${doc.dir.toUpperCase()})</strong></div>
        <div><span>OVERFLOW GATE</span><strong style="color:${overflow === 0 ? '#0EC49A' : '#F87171'}">${overflow}px [${overflow === 0 ? 'PASS' : 'WARN'}]</strong></div>
        <div><span>DOM NODES</span><strong>${domNodes}</strong></div>
        <div><span>TYPOGRAPHY</span><strong>${isFa ? 'YekanBakh VF + IRANYekanX VF' : 'Instrument Serif + Jakarta'}</strong></div>
      </div>
      <button type="button" class="dev-hud-grid-btn" data-toggle-grid dir="ltr">
        ${showGrid ? '▣ Hide 12-Col Blueprint Grid' : '▢ Show 12-Col Blueprint Grid'}
      </button>
    `;

    panel.querySelector('[data-close-hud]')?.addEventListener('click', () => toggle(false));
    panel.querySelector('[data-toggle-grid]')?.addEventListener('click', () => {
      showGrid = !showGrid;
      if (gridOverlay) gridOverlay.hidden = !showGrid;
      renderHud();
    });
  };

  const toggle = (force) => {
    open = typeof force === 'boolean' ? force : !open;
    panel.hidden = !open;
    document.getElementById('toggle-dev-btn')?.classList.toggle('is-active', open);
    if (open) {
      lastFpsTime = performance.now();
      frames = 0;
      renderHud();
      if (!raf) raf = window.requestAnimationFrame(updateMetrics);
    } else if (raf) {
      window.cancelAnimationFrame(raf);
      raf = null;
      showGrid = false;
      if (gridOverlay) gridOverlay.hidden = true;
    }
    return open;
  };

  return { toggle, refresh: renderHud };
}
