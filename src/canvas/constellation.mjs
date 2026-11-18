const ORBIT_NODES = [
  // Ring 0: Sovereign SaaS & Commerce Core
  { id: 'exvorta', label: 'Exvorta OS', ring: 0, angle: 0.2, route: '/work/exvorta', color: '#0EC49A', primary: true, tag: '1,152 PASS' },
  { id: 'firoza', label: 'Firoza Atelier', ring: 0, angle: 1.85, route: '/work/firoza', color: '#0EC49A', primary: true, tag: '10 LOCALES' },
  { id: 'hamesu', label: 'Hamesu OS', ring: 0, angle: 3.45, route: '/work/hamesu', color: '#D2A738', primary: true, tag: '73 ROUTES' },
  { id: 'cvly', label: 'Cvly AI', ring: 0, angle: 5.0, route: '/work/cvly', color: '#38BDF8', primary: true, tag: '6,577 JOBS' },

  // Ring 1: Autonomous AI & Finance Engines
  { id: 'leadgen', label: 'LeadGen 48k', ring: 1, angle: 0.8, route: '/work/leadgen', color: '#D2A738', primary: true, tag: '21 COUNTRIES' },
  { id: 'audit', label: 'Audit 14p PDF', ring: 1, angle: 2.35, route: '/work/audit', color: '#0EC49A', primary: false, tag: '7 STAGES' },
  { id: 'daftaryar', label: 'Daftaryar ERP', ring: 1, angle: 3.95, route: '/work/daftaryar', color: '#10B981', primary: true, tag: '397/397 GATE' },
  { id: 'jobhunt', label: 'JobHunt Rig', ring: 1, angle: 5.5, route: '/work/jobhunt', color: '#A78BFA', primary: false, tag: '10 BOARDS' },

  // Ring 2: Exvorta Web 6 Global Trade Houses
  { id: 'spicevo', label: 'Spicevo', ring: 2, angle: 0.4, route: '/exvorta-web', color: '#D2A738', primary: false, tag: 'TRADE HOUSE' },
  { id: 'nutave', label: 'Nutave', ring: 2, angle: 1.45, route: '/exvorta-web', color: '#CA8627', primary: false, tag: 'TRADE HOUSE' },
  { id: 'stonvi', label: 'Stonvi', ring: 2, angle: 2.5, route: '/exvorta-web', color: '#94A3B8', primary: false, tag: 'TRADE HOUSE' },
  { id: 'aurum', label: 'Aurum', ring: 2, angle: 3.55, route: '/exvorta-web', color: '#D4AF37', primary: false, tag: 'DUBAI BULLION' },
  { id: 'meridian', label: 'Meridian', ring: 2, angle: 4.6, route: '/exvorta-web', color: '#B48A3E', primary: false, tag: 'CORRIDORS' },
  { id: 'vestra', label: 'Vestra', ring: 2, angle: 5.65, route: '/exvorta-web', color: '#FB7185', primary: false, tag: 'TEXTILES' },
];

const FILAMENTS = [
  [0, 1], [0, 2], [0, 4], [0, 5], [0, 8], [0, 11],
  [1, 4], [1, 9], [2, 3], [2, 6], [3, 7],
  [4, 5], [5, 7], [6, 10], [8, 9], [11, 12], [12, 13],
];

const RING_RADII = [0.15, 0.25, 0.35];
const RING_SPEEDS = [0.16, -0.11, 0.075];

export function initConstellation(canvas, onNavigate) {
  if (!canvas || typeof window === 'undefined') return () => {};
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let rafId = null;
  let isVisible = true;
  let lastNow = performance.now();
  let spinPhase = 0;
  let tiltX = 0;
  let tiltY = 0;
  let targetTiltX = 0;
  let targetTiltY = 0;
  let pointer = { x: -9999, y: -9999, inside: false };
  let hoveredNode = null;
  let projectedCache = [];
  let safeRects = [];

  const updateBounds = () => {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    safeRects = [];
    for (const sel of ['.hero-copy-col', '.hero-telemetry-strip']) {
      const el = document.querySelector(sel);
      if (el) {
        const cRect = el.getBoundingClientRect();
        safeRects.push({
          left: cRect.left - rect.left - 18,
          right: cRect.right - rect.left + 18,
          top: cRect.top - rect.top - 14,
          bottom: cRect.bottom - rect.top + 14,
        });
      }
    }
  };

  const isOccluded = (px, py) =>
    safeRects.some((r) => px >= r.left && px <= r.right && py >= r.top && py <= r.bottom);

  const project3D = (x3, y3, z3, cx, cy, pitch, roll) => {
    // Rotate around X (pitch) and Z (roll)
    const cosP = Math.cos(pitch);
    const sinP = Math.sin(pitch);
    const y1 = y3 * cosP - z3 * sinP;
    const z1 = y3 * sinP + z3 * cosP;

    const cosR = Math.cos(roll);
    const sinR = Math.sin(roll);
    const x2 = x3 * cosR - y1 * sinR;
    const y2 = x3 * sinR + y1 * cosR;

    const fov = 680;
    const scale = fov / Math.max(220, fov + z1);
    return {
      x: cx + x2 * scale,
      y: cy + y2 * scale,
      z: z1,
      scale,
    };
  };

  const renderFrame = (now) => {
    const dt = Math.min(0.05, (now - lastNow) * 0.001);
    lastNow = now;
    if (!reducedMotion) {
      spinPhase += dt * (hoveredNode ? 0.18 : 1.0);
    }

    tiltX += (targetTiltX - tiltX) * 0.07;
    tiltY += (targetTiltY - tiltY) * 0.07;

    const isRtl = document.documentElement.dir === 'rtl' || document.documentElement.lang === 'fa';
    const compact = width < 980;
    const cx = compact ? width * 0.5 : isRtl ? width * 0.27 : width * 0.73;
    const cy = compact ? height * 0.34 : height * 0.42;
    const baseSpan = Math.min(width, height * 1.18);

    const pitch = 0.92 + tiltY * 0.22;
    const roll = (isRtl ? 0.22 : -0.22) + tiltX * 0.24;

    ctx.clearRect(0, 0, width, height);

    // Core Sovereign Nucleus Glow
    const coreGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, baseSpan * 0.38);
    coreGrad.addColorStop(0, 'rgba(14, 196, 154, 0.20)');
    coreGrad.addColorStop(0.45, 'rgba(210, 167, 56, 0.06)');
    coreGrad.addColorStop(1, 'rgba(6, 8, 12, 0)');
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, baseSpan * 0.38, 0, Math.PI * 2);
    ctx.fill();

    // Draw 3D Projected Orbital Rings
    for (let rIdx = 0; rIdx < RING_RADII.length; rIdx++) {
      const radius = RING_RADII[rIdx] * baseSpan;
      ctx.beginPath();
      const segs = 72;
      for (let s = 0; s <= segs; s++) {
        const theta = (s / segs) * Math.PI * 2;
        const pt = project3D(
          Math.cos(theta) * radius,
          Math.sin(theta) * radius,
          (rIdx - 1) * 18,
          cx,
          cy,
          pitch,
          roll,
        );
        if (s === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.strokeStyle =
        rIdx === 0
          ? 'rgba(14, 196, 154, 0.24)'
          : rIdx === 1
            ? 'rgba(210, 167, 56, 0.17)'
            : 'rgba(148, 163, 184, 0.12)';
      ctx.lineWidth = rIdx === 0 ? 1.2 : 1;
      ctx.stroke();
    }

    // Center Singularity Diamond
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(spinPhase * 0.25);
    ctx.strokeStyle = 'rgba(14, 196, 154, 0.65)';
    ctx.fillStyle = 'rgba(13, 18, 25, 0.9)';
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.lineTo(10, 0);
    ctx.lineTo(0, 10);
    ctx.lineTo(-10, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Compute 3D Node Positions
    const pts = ORBIT_NODES.map((n, idx) => {
      const r = RING_RADII[n.ring] * baseSpan;
      const theta = n.angle + spinPhase * RING_SPEEDS[n.ring];
      const zWave = Math.sin(theta * 2 + idx) * 16 + (n.ring - 1) * 18;
      const proj = project3D(Math.cos(theta) * r, Math.sin(theta) * r, zWave, cx, cy, pitch, roll);
      return { ...n, idx, ...proj };
    });

    // Hit-test pointer against nodes (only outside occluded text zones)
    hoveredNode = null;
    if (pointer.inside && !compact) {
      let bestDist = 30;
      for (const p of pts) {
        if (isOccluded(p.x, p.y)) continue;
        const d = Math.hypot(pointer.x - p.x, pointer.y - p.y);
        if (d < bestDist) {
          bestDist = d;
          hoveredNode = p;
        }
      }
    }
    projectedCache = pts;

    // Cross-Ring Signal Filaments + Live Data Packets
    for (let i = 0; i < FILAMENTS.length; i++) {
      const [aIdx, bIdx] = FILAMENTS[i];
      const a = pts[aIdx];
      const b = pts[bIdx];
      const isHot = hoveredNode && (hoveredNode.idx === aIdx || hoveredNode.idx === bIdx);
      const alpha = compact ? 0.12 : isHot ? 0.62 : 0.16;

      ctx.strokeStyle = isHot ? 'rgba(14, 196, 154, 0.68)' : `rgba(148, 163, 184, ${alpha})`;
      ctx.lineWidth = isHot ? 1.5 : 0.9;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();

      if (!reducedMotion && (isHot || i % 3 === 0)) {
        const t = (spinPhase * 0.55 + i * 0.21) % 1;
        const px = a.x + (b.x - a.x) * t;
        const py = a.y + (b.y - a.y) * t;
        if (!isOccluded(px, py)) {
          ctx.fillStyle = i % 2 === 0 ? 'rgba(14, 196, 154, 0.88)' : 'rgba(210, 167, 56, 0.88)';
          ctx.beginPath();
          ctx.arc(px, py, isHot ? 2.4 : 1.7, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Depth-sort nodes back-to-front
    const sorted = [...pts].sort((a, b) => b.z - a.z);
    ctx.font = '600 10.5px "JetBrains Mono", monospace';

    for (const p of sorted) {
      if (compact && !p.primary && p.idx % 2 === 1) continue;
      const occluded = isOccluded(p.x, p.y);
      const depthAlpha = Math.max(0.32, Math.min(1, 1.15 - (p.z + 120) / 360));
      const alpha = occluded ? 0.16 : depthAlpha;
      const isHot = hoveredNode && hoveredNode.id === p.id;
      const r = (p.primary ? 4.4 : 3.0) * p.scale * (isHot ? 1.45 : 1);

      if ((p.primary || isHot) && !occluded) {
        ctx.fillStyle = isHot ? 'rgba(14, 196, 154, 0.26)' : 'rgba(14, 196, 154, 0.13)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 3.1, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      if (!compact && !occluded) {
        const labelOffset = 10 + r;
        const lx = isRtl ? p.x - labelOffset : p.x + labelOffset;
        const endCheckX = lx + (isRtl ? -88 : 88);
        if (!isOccluded(lx, p.y) && !isOccluded(endCheckX, p.y)) {
          ctx.textAlign = isRtl ? 'right' : 'left';
          ctx.fillStyle = isHot
            ? '#FFFFFF'
            : p.primary
              ? `rgba(243, 246, 250, ${0.86 * depthAlpha})`
              : `rgba(148, 163, 184, ${0.68 * depthAlpha})`;
          ctx.fillText(p.label, lx, p.y + 3.5);
        }
      }

      // Draw Target Lock Reticle when hovered
      if (isHot && !occluded) {
        ctx.strokeStyle = '#0EC49A';
        ctx.lineWidth = 1.4;
        const s = 14;
        ctx.strokeRect(p.x - s, p.y - s, s * 2, s * 2);

        const badgeW = 166;
        const badgeH = 26;
        const bx = Math.min(width - badgeW - 12, Math.max(12, p.x - badgeW / 2));
        const by = Math.max(12, p.y - 42);
        ctx.fillStyle = 'rgba(6, 8, 12, 0.94)';
        ctx.strokeStyle = 'rgba(14, 196, 154, 0.75)';
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(bx, by, badgeW, badgeH, 5);
        } else {
          ctx.rect(bx, by, badgeW, badgeH);
        }
        ctx.fill();
        ctx.stroke();
        ctx.textAlign = 'center';
        ctx.fillStyle = '#6EE7CE';
        ctx.fillText(`${p.tag} · OPEN ↗`, bx + badgeW / 2, by + 16.5);
      }
    }

    const stageEl = canvas.closest('.hero-stage');
    if (stageEl) {
      stageEl.style.cursor = hoveredNode ? 'pointer' : '';
    }

    if (!reducedMotion && isVisible) {
      rafId = window.requestAnimationFrame(renderFrame);
    }
  };

  const onPointerMove = (ev) => {
    const rect = canvas.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const inside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
    pointer = { x, y, inside };
    if (inside) {
      targetTiltX = (x / Math.max(1, rect.width) - 0.5) * 2;
      targetTiltY = (y / Math.max(1, rect.height) - 0.5) * 2;
    } else {
      targetTiltX = 0;
      targetTiltY = 0;
    }
  };

  const onStageClick = (ev) => {
    if (typeof onNavigate !== 'function') return;
    if (ev.target.closest('a, button, input, .hero-telemetry-strip')) return;
    // Compact (<980px): no hover state exists, so hit-test the tap point directly.
    let node = hoveredNode;
    if (!node) {
      const rect = canvas.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      let bestDist = 30;
      for (const p of projectedCache) {
        if (isOccluded(p.x, p.y)) continue;
        const d = Math.hypot(x - p.x, y - p.y);
        if (d < bestDist) {
          bestDist = d;
          node = p;
        }
      }
    }
    if (!node) return;
    const match = projectedCache.find((n) => n.id === node.id);
    if (match) {
      onNavigate(match.route);
    }
  };

  const stageEl = canvas.closest('.hero-stage');
  stageEl?.addEventListener('click', onStageClick);

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        isVisible = entry.isIntersecting;
        if (isVisible && !reducedMotion && !rafId) {
          lastNow = performance.now();
          rafId = window.requestAnimationFrame(renderFrame);
        } else if (!isVisible && rafId) {
          window.cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    },
    { threshold: 0.04 },
  );

  updateBounds();
  io.observe(canvas);
  const langObserver = new MutationObserver(updateBounds);
  langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['dir', 'lang'] });
  window.addEventListener('resize', updateBounds, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });

  if (reducedMotion) {
    renderFrame(lastNow);
  } else {
    rafId = window.requestAnimationFrame(renderFrame);
  }

  return () => {
    if (rafId) window.cancelAnimationFrame(rafId);
    io.disconnect();
    langObserver.disconnect();
    stageEl?.removeEventListener('click', onStageClick);
    window.removeEventListener('resize', updateBounds);
    window.removeEventListener('pointermove', onPointerMove);
  };
}
