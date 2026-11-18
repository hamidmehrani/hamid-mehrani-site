const NODES_META = [
  { label: 'Exvorta', x: 0.78, y: 0.18, primary: true },
  { label: 'Firoza', x: 0.89, y: 0.36, primary: true },
  { label: 'Hamesu', x: 0.71, y: 0.42, primary: true },
  { label: 'LeadGen', x: 0.83, y: 0.56, primary: true },
  { label: 'Spicevo', x: 0.92, y: 0.22, primary: false },
  { label: 'Nutave', x: 0.67, y: 0.14, primary: false },
  { label: 'Audit Engine', x: 0.66, y: 0.58, primary: false },
  { label: 'Daftaryar', x: 0.91, y: 0.50, primary: false },
  { label: 'Cvly', x: 0.74, y: 0.64, primary: false },
  { label: 'Stonvi', x: 0.58, y: 0.65, primary: false },
  { label: 'Aurum', x: 0.90, y: 0.63, primary: false },
  { label: 'Meridian', x: 0.34, y: 0.16, primary: false },
];

const EDGES = [
  [0, 1], [0, 2], [0, 4], [0, 5],
  [1, 3], [1, 4], [1, 7],
  [2, 5], [2, 6], [2, 8],
  [3, 6], [3, 7], [3, 8], [3, 10],
  [6, 9], [8, 9], [7, 10], [5, 11],
];

export function initConstellation(canvas) {
  if (!canvas || typeof window === 'undefined') return () => {};
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let rafId = null;
  let isVisible = true;
  let pointer = { x: -9999, y: -9999, active: false };
  let startTime = performance.now();
  let safeRects = [];

  const nodes = NODES_META.map((item, idx) => ({
    ...item,
    phase: idx * 0.85,
  }));

  const updateBounds = () => {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    safeRects = [];
    for (const sel of ['.hero-content', '.hero-telemetry-strip']) {
      const el = document.querySelector(sel);
      if (el) {
        const cRect = el.getBoundingClientRect();
        safeRects.push({
          left: cRect.left - rect.left - 24,
          right: cRect.right - rect.left + 28,
          top: cRect.top - rect.top - 18,
          bottom: cRect.bottom - rect.top + 22,
        });
      }
    }
  };

  const isInsideSafeZone = (px, py) =>
    safeRects.some((r) => px >= r.left && px <= r.right && py >= r.top && py <= r.bottom);

  const renderFrame = (now) => {
    const elapsed = (now - startTime) * 0.001;
    const isRtl = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'fa';
    ctx.clearRect(0, 0, width, height);

    const mobileCompact = width < 900;
    const pts = nodes.map((n) => {
      const driftX = reducedMotion ? 0 : Math.sin(elapsed * 0.55 + n.phase) * 11;
      const driftY = reducedMotion ? 0 : Math.cos(elapsed * 0.48 + n.phase) * 10;
      const baseX = isRtl ? 1 - n.x : n.x;
      let px = baseX * width + driftX;
      let py = n.y * height + driftY;

      if (pointer.active && !reducedMotion) {
        const dx = px - pointer.x;
        const dy = py - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180 && dist > 1) {
          const push = (1 - dist / 180) * 16;
          px += (dx / dist) * push;
          py += (dy / dist) * push;
        }
      }
      return { x: px, y: py, primary: n.primary, label: n.label };
    });

    // Signal Filaments
    for (let i = 0; i < EDGES.length; i++) {
      const [aIdx, bIdx] = EDGES[i];
      const a = pts[aIdx];
      const b = pts[bIdx];
      const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
      grad.addColorStop(0, 'rgba(18, 184, 150, 0.22)');
      grad.addColorStop(0.5, 'rgba(201, 162, 39, 0.14)');
      grad.addColorStop(1, 'rgba(148, 163, 184, 0.09)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();

      if (!reducedMotion && i % 2 === 0) {
        const t = (elapsed * 0.28 + i * 0.19) % 1;
        const tx = a.x + (b.x - a.x) * t;
        const ty = a.y + (b.y - a.y) * t;
        ctx.fillStyle = i % 4 === 0 ? 'rgba(201, 162, 39, 0.82)' : 'rgba(18, 184, 150, 0.82)';
        ctx.beginPath();
        ctx.arc(tx, ty, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Nodes & Protected Labels (never intersect hero text/CTA)
    ctx.font = '500 11px "JetBrains Mono", monospace';
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (mobileCompact && !p.primary && i % 2 === 1) continue;
      const occluded = isInsideSafeZone(p.x, p.y);
      const alphaScale = occluded ? 0.28 : 1;

      if (p.primary && !occluded) {
        ctx.fillStyle = 'rgba(18, 184, 150, 0.18)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 10, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = p.primary
        ? `rgba(18, 184, 150, ${alphaScale})`
        : `rgba(203, 213, 225, ${0.85 * alphaScale})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.primary ? 3.5 : 2.3, 0, Math.PI * 2);
      ctx.fill();

      if (!mobileCompact && !occluded) {
        const labelX = isRtl ? p.x - 10 : p.x + 10;
        if (!isInsideSafeZone(labelX, p.y) && !isInsideSafeZone(labelX + (isRtl ? -70 : 70), p.y)) {
          ctx.textAlign = isRtl ? 'right' : 'left';
          ctx.fillStyle = p.primary ? 'rgba(243, 246, 250, 0.80)' : 'rgba(148, 163, 184, 0.62)';
          ctx.fillText(p.label, labelX, p.y + 4);
        }
      }
    }

    if (!reducedMotion && isVisible) {
      rafId = window.requestAnimationFrame(renderFrame);
    }
  };

  const onPointerMove = (ev) => {
    const rect = canvas.getBoundingClientRect();
    pointer = { x: ev.clientX - rect.left, y: ev.clientY - rect.top, active: true };
  };
  const onPointerLeave = () => {
    pointer.active = false;
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        isVisible = entry.isIntersecting;
        if (isVisible && !reducedMotion && !rafId) {
          rafId = window.requestAnimationFrame(renderFrame);
        } else if (!isVisible && rafId) {
          window.cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    },
    { threshold: 0.05 },
  );

  updateBounds();
  io.observe(canvas);
  const langObserver = new MutationObserver(updateBounds);
  langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['dir', 'lang'] });
  window.addEventListener('resize', updateBounds, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerleave', onPointerLeave, { passive: true });

  if (reducedMotion) {
    renderFrame(startTime);
  } else {
    rafId = window.requestAnimationFrame(renderFrame);
  }

  return () => {
    if (rafId) window.cancelAnimationFrame(rafId);
    io.disconnect();
    langObserver.disconnect();
    window.removeEventListener('resize', updateBounds);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerleave', onPointerLeave);
  };
}
