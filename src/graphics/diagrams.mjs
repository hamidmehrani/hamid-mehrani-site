export function getTradeBrandSvg(type) {
  switch (type) {
    case 'spicevo':
      return `<svg viewBox="0 0 1000 1000" width="24" height="24" aria-hidden="true">
        <path d="M 490 130 C 590 230, 748 370, 748 560 C 748 730, 625 870, 490 870 C 355 870, 252 730, 252 575 C 252 440, 330 350, 410 310 C 460 285, 482 195, 490 130 Z" fill="#356a35"/>
        <path d="M 552 292 C 566 350, 545 470, 478 570 C 438 630, 442 760, 490 870 C 450 810, 420 720, 420 630 C 420 535, 485 410, 552 292 Z" fill="#ffffff"/>
        <circle cx="602" cy="705" r="57" fill="#ffffff"/>
        <circle cx="602" cy="705" r="38" fill="#8f391a"/>
      </svg>`;
    case 'nutave':
      return `<svg viewBox="0 0 500 500" width="24" height="24" aria-hidden="true">
        <path d="M 250 82 C 260 82, 280 115, 308 175 C 338 238, 355 285, 355 324 C 355 382, 310 418, 250 418 C 190 418, 145 382, 145 324 C 145 285, 162 238, 192 175 C 220 115, 240 82, 250 82 Z" fill="#392318"/>
        <circle cx="250" cy="366" r="28" fill="#FFFFFF"/>
        <circle cx="250" cy="366" r="19.5" fill="#CA8627"/>
      </svg>`;
    case 'stonvi':
      return `<svg viewBox="0 0 512 512" width="24" height="24" aria-hidden="true">
        <rect width="512" height="512" rx="112" fill="#2B4258"/>
        <circle cx="386" cy="386" r="52" fill="#5A6D7C" stroke="#FFFFFF" stroke-width="18"/>
      </svg>`;
    case 'aurum':
      return `<svg viewBox="0 0 64 64" width="24" height="24" aria-hidden="true">
        <polygon points="32,10 54,50 10,50" fill="none" stroke="#D4AF37" stroke-width="4.5"/>
        <line x1="21" y1="37" x2="43" y2="37" stroke="#D4AF37" stroke-width="4"/>
      </svg>`;
    case 'meridian':
      return `<svg viewBox="0 0 64 64" width="24" height="24" aria-hidden="true">
        <circle cx="32" cy="32" r="22" fill="none" stroke="#0F172A" stroke-width="4"/>
        <ellipse cx="32" cy="32" rx="10" ry="22" fill="none" stroke="#B48A3E" stroke-width="3.5"/>
        <line x1="10" y1="32" x2="54" y2="32" stroke="#0F172A" stroke-width="3.5"/>
      </svg>`;
    case 'vestra':
      return `<svg viewBox="0 0 64 64" width="24" height="24" aria-hidden="true">
        <path d="M12 16 L32 50 L52 16" fill="none" stroke="#1E293B" stroke-width="6" stroke-linecap="square"/>
        <path d="M22 16 L32 34 L42 16" fill="none" stroke="#9F1239" stroke-width="4"/>
      </svg>`;
    default:
      // Loud fallback: an unknown brand must never silently render Vestra's mark.
      console.warn(`[diagrams] getTradeBrandSvg: unknown brand type "${type}" — falling back to vestra mark`);
      return `<svg viewBox="0 0 64 64" width="24" height="24" aria-hidden="true">
        <path d="M12 16 L32 50 L52 16" fill="none" stroke="#1E293B" stroke-width="6" stroke-linecap="square"/>
        <path d="M22 16 L32 34 L42 16" fill="none" stroke="#9F1239" stroke-width="4"/>
      </svg>`;
  }
}

export function getVentureSchematicSvg(type) {
  if (type === 'exvorta') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="400" fill="#070B11"/>
      <g stroke="rgba(226,234,244,0.06)" stroke-width="1">
        <line x1="0" y1="80" x2="640" y2="80"/><line x1="0" y1="160" x2="640" y2="160"/>
        <line x1="0" y1="240" x2="640" y2="240"/><line x1="0" y1="320" x2="640" y2="320"/>
      </g>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <rect x="38" y="138" width="170" height="124" rx="10" fill="#111926" stroke="#0EC49A" stroke-width="1.8"/>
        <text x="56" y="168" fill="#0EC49A" font-weight="700">TRADE FILE CORE</text>
        <text x="56" y="194" fill="#F3F6FA">5,600+ WCO HS Codes</text>
        <text x="56" y="216" fill="#94A3B8">7 Incoterms P&amp;L</text>
        <text x="56" y="238" fill="#D2A738">Copilot Score 0–100</text>

        <path class="svg-flow-line" d="M 208 200 H 264 M 264 104 H 302 M 264 168 H 302 M 264 232 H 302 M 264 296 H 302 M 264 104 V 296" stroke="#0EC49A" stroke-width="1.6" fill="none"/>

        <rect x="302" y="80" width="154" height="46" rx="7" fill="#0D141F" stroke="rgba(226,234,244,0.22)"/>
        <text x="318" y="108" fill="#F3F6FA">01 · Proforma PI</text>
        <rect x="302" y="144" width="154" height="46" rx="7" fill="#0D141F" stroke="#D2A738"/>
        <text x="318" y="172" fill="#D2A738">02 · PINT-AE XML CI</text>
        <rect x="302" y="208" width="154" height="46" rx="7" fill="#0D141F" stroke="rgba(226,234,244,0.22)"/>
        <text x="318" y="236" fill="#F3F6FA">03 · Packing List</text>
        <rect x="302" y="272" width="154" height="46" rx="7" fill="#0D141F" stroke="rgba(226,234,244,0.22)"/>
        <text x="318" y="300" fill="#F3F6FA">04 · Origin CoO</text>

        <path class="svg-flow-line" d="M 456 200 H 492" stroke="#D2A738" stroke-width="1.6" fill="none"/>
        <rect x="492" y="124" width="116" height="152" rx="10" fill="#111926" stroke="#D2A738"/>
        <text x="508" y="158" fill="#D2A738" font-weight="700">USDT RAIL</text>
        <text x="508" y="186" fill="#CBD5E1">NOWPayments</text>
        <text x="508" y="208" fill="#CBD5E1">SHA-256 Seal</text>
        <text x="508" y="242" fill="#0EC49A" font-weight="700">1,152 PASS</text>
      </g>
    </svg>`;
  }

  if (type === 'firoza') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="400" fill="#080E0D"/>
      <circle cx="205" cy="200" r="112" fill="rgba(14,196,154,0.09)" stroke="#0EC49A" stroke-dasharray="4 5"/>
      <circle cx="205" cy="200" r="68" fill="#0D1917" stroke="#0EC49A" stroke-width="2"/>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <text x="205" y="194" text-anchor="middle" fill="#0EC49A" font-size="17" font-weight="700">2.5x LOUPE</text>
        <text x="205" y="216" text-anchor="middle" fill="#CBD5E1">46 sRGB Photos</text>

        <rect x="364" y="68" width="232" height="264" rx="10" fill="#10181B" stroke="rgba(226,234,244,0.22)"/>
        <text x="386" y="102" fill="#0EC49A" font-weight="700">STATIC EDGE ATELIER</text>
        <text x="386" y="136" fill="#F3F6FA">239 Static Routes</text>
        <text x="386" y="164" fill="#CBD5E1">10 Languages (EN..TH)</text>
        <text x="386" y="192" fill="#CBD5E1">8 Parcel SHA-256 Files</text>
        <text x="386" y="220" fill="#CBD5E1">7 Air-Freight DAP Hubs</text>
        <text x="386" y="262" fill="#D2A738">0 Synthetic Stone Assets</text>
        <text x="386" y="294" fill="#0EC49A">POST /api/inquiry · 200</text>
      </g>
    </svg>`;
  }

  if (type === 'leadgen') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="lg-glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#D2A738" stop-opacity="0.16"/>
          <stop offset="100%" stop-color="#06080C" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="640" height="400" fill="#080C13"/>
      <rect width="640" height="400" fill="url(#lg-glow)"/>
      <circle cx="320" cy="200" r="142" fill="none" stroke="rgba(210,167,56,0.2)" stroke-dasharray="4 6"/>
      <circle cx="320" cy="200" r="92" fill="none" stroke="rgba(14,196,154,0.3)"/>
      <g class="svg-flow-line" stroke="rgba(14,196,154,0.48)" stroke-width="1.5" fill="none">
        <line x1="196" y1="120" x2="266" y2="176"/>
        <line x1="196" y1="280" x2="266" y2="224"/>
        <line x1="444" y1="120" x2="374" y2="176"/>
        <line x1="444" y1="280" x2="374" y2="224"/>
      </g>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <circle cx="320" cy="200" r="58" fill="#0D1219" stroke="#0EC49A" stroke-width="2"/>
        <text x="320" y="196" text-anchor="middle" fill="#0EC49A" font-size="18" font-weight="700">48,000+</text>
        <text x="320" y="216" text-anchor="middle" fill="#CBD5E1" font-size="10">21 COUNTRIES</text>

        <rect x="40" y="92" width="156" height="56" rx="8" fill="#121A27" stroke="#D2A738"/>
        <text x="56" y="116" fill="#D2A738">85 MATRICES</text>
        <text x="56" y="135" fill="#94A3B8">9-Signal Scanner</text>

        <rect x="40" y="252" width="156" height="56" rx="8" fill="#121A27" stroke="rgba(226,234,244,0.25)"/>
        <text x="56" y="276" fill="#F3F6FA">30+ MODULES</text>
        <text x="56" y="295" fill="#94A3B8">Pishro + Studio</text>

        <rect x="444" y="92" width="156" height="56" rx="8" fill="#121A27" stroke="#0EC49A"/>
        <text x="460" y="116" fill="#0EC49A">UNIBOX + CRM</text>
        <text x="460" y="135" fill="#CBD5E1">110/110 Tests PASS</text>

        <rect x="444" y="252" width="156" height="56" rx="8" fill="#121A27" stroke="#D2A738" stroke-opacity="0.8"/>
        <text x="460" y="276" fill="#D2A738">FREEZE SHIELD</text>
        <text x="460" y="295" fill="#94A3B8">0 Live Dispatches</text>
      </g>
    </svg>`;
  }

  if (type === 'audit') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="400" fill="#0B111A"/>
      <g stroke="rgba(226,234,244,0.06)" stroke-width="1">
        <line x1="0" y1="80" x2="640" y2="80"/><line x1="0" y1="160" x2="640" y2="160"/>
        <line x1="0" y1="240" x2="640" y2="240"/><line x1="0" y1="320" x2="640" y2="320"/>
      </g>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <rect x="42" y="54" width="252" height="292" rx="10" fill="#121A27" stroke="rgba(226,234,244,0.22)"/>
        <text x="64" y="88" fill="#0EC49A" font-weight="700">7-STAGE HEADLESS PROBE</text>
        <text x="64" y="122" fill="#CBD5E1">01 · Puppeteer DOM Rects</text>
        <text x="64" y="150" fill="#CBD5E1">02 · Lighthouse CWV</text>
        <text x="64" y="178" fill="#CBD5E1">03 · axe-core WCAG A11y</text>
        <text x="64" y="206" fill="#CBD5E1">04 · TLS &amp; Headers Security</text>
        <text x="64" y="234" fill="#CBD5E1">05 · Technical SEO &amp; Schema</text>
        <text x="64" y="262" fill="#CBD5E1">06 · AI Vision UI Critique</text>
        <text x="64" y="294" fill="#D2A738" font-weight="700">07 · pdfscript A4 Compiler</text>
        <text x="64" y="324" fill="#94A3B8">83/83 Regression Tests PASS</text>

        <path class="svg-flow-line" d="M 294 200 H 362" stroke="#0EC49A" stroke-width="2" stroke-dasharray="5 5"/>

        <rect x="362" y="68" width="236" height="264" rx="8" fill="#F8FAFC" stroke="#0EC49A" stroke-width="2"/>
        <rect x="386" y="94" width="104" height="10" rx="2" fill="#0B1320"/>
        <rect x="386" y="114" width="188" height="4" rx="2" fill="#94A3B8"/>
        <rect x="386" y="140" width="88" height="62" rx="6" fill="#EDF1F5" stroke="#0EC49A"/>
        <text x="415" y="178" fill="#087A63" font-weight="700" font-size="18">100</text>
        <rect x="486" y="140" width="88" height="62" rx="6" fill="#EDF1F5" stroke="#D2A738"/>
        <text x="508" y="178" fill="#927012" font-weight="700" font-size="16">14p</text>
        <text x="386" y="238" fill="#0B1320" font-size="11" font-weight="700">EXECUTIVE PROPOSAL PDF</text>
        <text x="386" y="262" fill="#475569" font-size="10">Measured Metrics + Visual Proof</text>
        <text x="386" y="290" fill="#087A63" font-size="10" font-weight="700">READY IN MINUTES</text>
      </g>
    </svg>`;
  }

  if (type === 'hamesu') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="400" fill="#070B12"/>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <rect x="36" y="66" width="176" height="88" rx="8" fill="#121A27" stroke="#0EC49A"/>
        <text x="54" y="100" fill="#0EC49A" font-weight="700">STOREFRONT :3210</text>
        <text x="54" y="126" fill="#CBD5E1">30 Next.js Routes</text>

        <rect x="232" y="66" width="176" height="88" rx="8" fill="#121A27" stroke="#D2A738"/>
        <text x="250" y="100" fill="#D2A738" font-weight="700">CONSOLE :7102</text>
        <text x="250" y="126" fill="#CBD5E1">43 ProMall Routes</text>

        <rect x="428" y="66" width="176" height="88" rx="8" fill="#121A27" stroke="rgba(226,234,244,0.28)"/>
        <text x="446" y="100" fill="#F3F6FA" font-weight="700">MEDUSA :9000</text>
        <text x="446" y="126" fill="#94A3B8">Torob + Gold Math</text>

        <path class="svg-flow-line" d="M 124 154 V 208 H 516 V 154 M 320 154 V 246" stroke="rgba(14,196,154,0.5)" stroke-width="1.6" fill="none"/>

        <rect x="76" y="246" width="488" height="90" rx="8" fill="#0E141E" stroke="#0EC49A" stroke-opacity="0.6"/>
        <text x="104" y="280" fill="#0EC49A" font-weight="700">ISOLATED MULTI-TENANT DATA PLANE</text>
        <text x="104" y="308" fill="#CBD5E1">PostgreSQL RLS :55432  ·  Redis Cache :6379  ·  Queue :6380</text>
      </g>
    </svg>`;
  }

  if (type === 'cvly') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="400" fill="#080F18"/>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <rect x="48" y="52" width="544" height="296" rx="12" fill="#0D1622" stroke="rgba(226,234,244,0.2)"/>
        <rect x="72" y="80" width="236" height="38" rx="6" fill="#06090F" stroke="#0EC49A"/>
        <text x="90" y="103" fill="#0EC49A" font-weight="700">6,577 LIVE JOBS · 7 BOARDS</text>
        <rect x="324" y="80" width="244" height="38" rx="6" fill="#06090F" stroke="#D2A738"/>
        <text x="342" y="103" fill="#D2A738" font-weight="700">832 SALARY SIGNALS</text>

        <rect x="72" y="138" width="496" height="78" rx="8" fill="#121B29" stroke="rgba(226,234,244,0.14)"/>
        <text x="94" y="170" fill="#F3F6FA" font-weight="700">FastAPI + SQLite WAL + Anti-Fabrication Validator</text>
        <text x="94" y="196" fill="#94A3B8">0.99s Warm Loopback · Zero-Signup Instant Fit Check · VibeFarsi RTL</text>

        <rect x="72" y="236" width="154" height="82" rx="8" fill="rgba(14,196,154,0.12)" stroke="#0EC49A"/>
        <text x="92" y="272" fill="#6EE7CE" font-size="14" font-weight="700">FIT SCORE</text>
        <text x="92" y="296" fill="#94A3B8" font-size="10">Persian Reasoning</text>

        <rect x="243" y="236" width="154" height="82" rx="8" fill="rgba(210,167,56,0.12)" stroke="#D2A738"/>
        <text x="263" y="272" fill="#FDE68A" font-size="14" font-weight="700">/SALARIES</text>
        <text x="263" y="296" fill="#94A3B8" font-size="10">Real Percentiles</text>

        <rect x="414" y="236" width="154" height="82" rx="8" fill="#06090F" stroke="rgba(226,234,244,0.22)"/>
        <text x="434" y="272" fill="#CBD5E1" font-size="14" font-weight="700">CHROMIUM PDF</text>
        <text x="434" y="296" fill="#94A3B8" font-size="10">0 Mock Rows</text>
      </g>
    </svg>`;
  }

  if (type === 'daftaryar') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="400" fill="#07100E"/>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <rect x="46" y="60" width="254" height="280" rx="10" fill="#0E1916" stroke="#0EC49A" stroke-opacity="0.65"/>
        <text x="68" y="96" fill="#0EC49A" font-weight="700">DAFTARYAR · 10 MODULES</text>
        <text x="68" y="130" fill="#F3F6FA">WooCommerce Blocks + Classic</text>
        <text x="68" y="158" fill="#CBD5E1">HMAC-SHA256 Guest Invoices</text>
        <text x="68" y="186" fill="#CBD5E1">Sepidar ERP Sync Bridge</text>
        <text x="68" y="214" fill="#CBD5E1">Post &amp; Tipax Tracking</text>
        <text x="68" y="242" fill="#CBD5E1">4 Elementor RTL Widgets</text>
        <text x="68" y="298" fill="#D2A738">wp-content/debug.log: 0 lines</text>

        <path class="svg-flow-line" d="M 300 200 H 350" stroke="#0EC49A" stroke-width="2"/>

        <rect x="350" y="78" width="244" height="244" rx="12" fill="#0B1418" stroke="#0EC49A" stroke-width="2"/>
        <text x="376" y="116" fill="#94A3B8">BANKING-GRADE TEST SUITE</text>
        <text x="376" y="164" fill="#0EC49A" font-size="28" font-weight="700">15,501</text>
        <text x="376" y="192" fill="#F3F6FA">PHPUnit Assertions (2,645 Tests)</text>
        <text x="376" y="238" fill="#D2A738" font-size="20" font-weight="700">397 / 397</text>
        <text x="376" y="264" fill="#CBD5E1">LDD Release Gate · 0 FAIL</text>
      </g>
    </svg>`;
  }

  // Loud fallback: 'jobhunt' is the designed default schematic (10 ATS boards);
  // any other unknown type must never silently render it.
  if (type !== 'jobhunt') {
    console.warn(`[diagrams] getVentureSchematicSvg: unknown schematic type "${type}" — falling back to jobhunt schematic`);
  }
  return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="640" height="400" fill="#090D14"/>
    <g font-family="JetBrains Mono, monospace" font-size="11">
      <rect x="42" y="80" width="170" height="240" rx="8" fill="#121A27" stroke="rgba(226,234,244,0.22)"/>
      <text x="62" y="116" fill="#D2A738" font-weight="700">10 ATS BOARDS</text>
      <text x="62" y="152" fill="#CBD5E1">Greenhouse JSON</text>
      <text x="62" y="180" fill="#CBD5E1">Ashby Playwright</text>
      <text x="62" y="208" fill="#CBD5E1">Lever Crawlers</text>
      <text x="62" y="236" fill="#CBD5E1">CF Worker Relay</text>

      <path class="svg-flow-line" d="M 212 200 H 244 M 424 200 H 456" stroke="#0EC49A" stroke-width="1.8"/>

      <rect x="244" y="96" width="180" height="208" rx="8" fill="#121A27" stroke="#0EC49A"/>
      <text x="264" y="134" fill="#0EC49A" font-weight="700">TRUTH VALIDATOR</text>
      <text x="264" y="170" fill="#F3F6FA">0 Fact Drift</text>
      <text x="264" y="200" fill="#94A3B8">80-owner-resume.md</text>
      <text x="264" y="230" fill="#CBD5E1">1-Page A4 PDF Gate</text>

      <rect x="456" y="96" width="144" height="208" rx="8" fill="#121A27" stroke="#A78BFA"/>
      <text x="476" y="134" fill="#A78BFA" font-weight="700">AUDIO BRIDGE</text>
      <text x="476" y="170" fill="#F3F6FA">FA ⇄ EN Stream</text>
      <text x="476" y="200" fill="#94A3B8">PipeWire Sink</text>
      <text x="476" y="230" fill="#CBD5E1">Gemini Live</text>
    </g>
  </svg>`;
}

export function renderInteractiveTopologySvg(nodes, activeIdx = 0, accent = '#0EC49A', lang = 'en') {
  const coords = [
    { x: 40, y: 124 },
    { x: 256, y: 46 },
    { x: 256, y: 202 },
    { x: 472, y: 46 },
    { x: 472, y: 202 },
  ];
  const w = 188;
  const h = 92;

  const edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [1, 4],
  ];

  const pathsHtml = edges
    .map(([a, b], idx) => {
      const ca = coords[a];
      const cb = coords[b];
      const x1 = ca.x + w;
      const y1 = ca.y + h / 2;
      const x2 = cb.x;
      const y2 = cb.y + h / 2;
      const mx = (x1 + x2) / 2;
      const d = `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`;
      const highlighted = a === activeIdx || b === activeIdx;
      const stroke = highlighted ? accent : 'rgba(203, 213, 225, 0.22)';
      return `
        <path d="${d}" fill="none" stroke="${stroke}" stroke-width="${highlighted ? '2.2' : '1.2'}" stroke-dasharray="5 5"/>
        ${
          highlighted
            ? `<circle r="3.4" fill="${accent}" class="topo-pulse">
                 <animateMotion dur="${2.2 + idx * 0.35}s" repeatCount="indefinite" path="${d}"/>
               </circle>`
            : ''
        }
      `;
    })
    .join('');

  const nodesHtml = nodes
    .slice(0, 5)
    .map((n, idx) => {
      const c = coords[idx];
      const isAct = idx === activeIdx;
      const border = isAct ? accent : 'rgba(226, 234, 244, 0.18)';
      const bg = isAct ? '#131E2E' : '#0B1018';
      const title = n.title[lang] || n.title.en;
      const shortTitle = title.length > 26 ? `${title.slice(0, 25)}…` : title;
      return `
        <g class="${isAct ? 'is-active' : ''}" data-topo-idx="${idx}" tabindex="0" role="button" aria-label="${title}" style="cursor:pointer;">
          <rect x="${c.x}" y="${c.y}" width="${w}" height="${h}" rx="10" fill="${bg}" stroke="${border}" stroke-width="${isAct ? '2.2' : '1.2'}"/>
          <rect x="${c.x - 3}" y="${c.y - 3}" width="6" height="6" fill="${isAct ? accent : '#334155'}"/>
          <rect x="${c.x + w - 3}" y="${c.y + h - 3}" width="6" height="6" fill="${isAct ? accent : '#334155'}"/>
          <text x="${c.x + 12}" y="${c.y + 26}" fill="${isAct ? accent : '#94A3B8'}" font-family="JetBrains Mono, monospace" font-size="10" font-weight="700">${n.code}</text>
          <text x="${c.x + 12}" y="${c.y + 52}" fill="#F3F6FA" font-family="Plus Jakarta Sans, YekanBakh, sans-serif" font-size="11.5" font-weight="700">${shortTitle}</text>
          <text x="${c.x + 12}" y="${c.y + 74}" fill="#94A3B8" font-family="JetBrains Mono, monospace" font-size="9.5">${n.tech.slice(0, 28)}</text>
        </g>
      `;
    })
    .join('');

  return `
    <svg dir="ltr" viewBox="0 0 700 340" width="700" class="interactive-topology-svg" role="group" aria-label="Interactive System Topology">
      <style>@media (prefers-reduced-motion: reduce){.topo-pulse{display:none}}</style>
      <defs>
        <pattern id="topo-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(226,234,244,0.045)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="700" height="340" rx="12" fill="#070B11"/>
      <rect width="700" height="340" rx="12" fill="url(#topo-grid)"/>
      ${pathsHtml}
      ${nodesHtml}
    </svg>
  `;
}
