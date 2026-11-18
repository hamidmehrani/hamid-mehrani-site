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
    default:
      return `<svg viewBox="0 0 64 64" width="24" height="24" aria-hidden="true">
        <path d="M12 16 L32 50 L52 16" fill="none" stroke="#1E293B" stroke-width="6" stroke-linecap="square"/>
        <path d="M22 16 L32 34 L42 16" fill="none" stroke="#9F1239" stroke-width="4"/>
      </svg>`;
  }
}

export function getVentureSchematicSvg(type) {
  if (type === 'leadgen') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="lg-glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#C9A227" stop-opacity="0.16"/>
          <stop offset="100%" stop-color="#070A0F" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="640" height="400" fill="#080C13"/>
      <rect width="640" height="400" fill="url(#lg-glow)"/>
      <circle cx="320" cy="200" r="142" fill="none" stroke="rgba(201,162,39,0.18)" stroke-dasharray="4 6"/>
      <circle cx="320" cy="200" r="92" fill="none" stroke="rgba(18,184,150,0.28)"/>
      <g stroke="rgba(18,184,150,0.42)" stroke-width="1.5" fill="none">
        <line x1="138" y1="120" x2="320" y2="200"/>
        <line x1="138" y1="280" x2="320" y2="200"/>
        <line x1="502" y1="120" x2="320" y2="200"/>
        <line x1="502" y1="280" x2="320" y2="200"/>
      </g>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <circle cx="320" cy="200" r="56" fill="#0E141E" stroke="#12B896" stroke-width="2"/>
        <text x="320" y="196" text-anchor="middle" fill="#12B896" font-size="18" font-weight="700">48,000+</text>
        <text x="320" y="216" text-anchor="middle" fill="#CBD5E1" font-size="10">B2B LEADS</text>

        <rect x="44" y="92" width="152" height="54" rx="8" fill="#121A27" stroke="#C9A227"/>
        <text x="60" y="116" fill="#C9A227">85 MATRICES</text>
        <text x="60" y="134" fill="#94A3B8">21 Countries</text>

        <rect x="44" y="254" width="152" height="54" rx="8" fill="#121A27" stroke="rgba(226,234,244,0.25)"/>
        <text x="60" y="278" fill="#F3F6FA">30+ MODULES</text>
        <text x="60" y="296" fill="#94A3B8">MX &amp; Phone Verify</text>

        <rect x="444" y="92" width="152" height="54" rx="8" fill="#121A27" stroke="#12B896"/>
        <text x="460" y="116" fill="#12B896">AI REPLY LOOP</text>
        <text x="460" y="134" fill="#CBD5E1">Self-Learning</text>

        <rect x="444" y="254" width="152" height="54" rx="8" fill="#121A27" stroke="#C9A227" stroke-opacity="0.7"/>
        <text x="460" y="278" fill="#C9A227">ANTI-BAN RAMP</text>
        <text x="460" y="296" fill="#94A3B8">State: Frozen</text>
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
        <rect x="44" y="58" width="246" height="284" rx="10" fill="#121A27" stroke="rgba(226,234,244,0.22)"/>
        <text x="68" y="92" fill="#12B896">7-STAGE PROBE</text>
        <text x="68" y="128" fill="#CBD5E1">01 · Puppeteer DOM Metrics</text>
        <text x="68" y="156" fill="#CBD5E1">02 · Lighthouse CWV</text>
        <text x="68" y="184" fill="#CBD5E1">03 · axe-core WCAG A11y</text>
        <text x="68" y="212" fill="#CBD5E1">04 · TLS &amp; Headers Security</text>
        <text x="68" y="240" fill="#CBD5E1">05 · Technical SEO Audit</text>
        <text x="68" y="268" fill="#CBD5E1">06 · AI Vision Critique</text>
        <text x="68" y="296" fill="#C9A227">07 · pdfscript Compiler</text>

        <path d="M 304 200 H 352" stroke="#12B896" stroke-width="2" stroke-dasharray="4 4"/>

        <rect x="364" y="72" width="232" height="256" rx="8" fill="#F8FAFC" stroke="#12B896" stroke-width="2"/>
        <rect x="386" y="96" width="96" height="10" rx="2" fill="#0B1320"/>
        <rect x="386" y="116" width="188" height="4" rx="2" fill="#94A3B8"/>
        <rect x="386" y="142" width="88" height="60" rx="6" fill="#EDF1F5" stroke="#12B896"/>
        <text x="415" y="178" fill="#087A63" font-weight="700" font-size="18">98</text>
        <rect x="486" y="142" width="88" height="60" rx="6" fill="#EDF1F5" stroke="#C9A227"/>
        <text x="510" y="178" fill="#927012" font-weight="700" font-size="16">14p</text>
        <text x="386" y="238" fill="#0B1320" font-size="11" font-weight="700">CLIENT PROPOSAL PDF</text>
        <text x="386" y="262" fill="#475569" font-size="10">Measured Proof &amp; Visuals</text>
      </g>
    </svg>`;
  }

  if (type === 'hamesu') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="400" fill="#070B12"/>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <rect x="36" y="70" width="176" height="84" rx="8" fill="#121A27" stroke="#12B896"/>
        <text x="54" y="104" fill="#12B896">STOREFRONT :3210</text>
        <text x="54" y="128" fill="#CBD5E1">Next.js RTL</text>

        <rect x="232" y="70" width="176" height="84" rx="8" fill="#121A27" stroke="#C9A227"/>
        <text x="250" y="104" fill="#C9A227">CONSOLE :7102</text>
        <text x="250" y="128" fill="#CBD5E1">Merchant Admin</text>

        <rect x="428" y="70" width="176" height="84" rx="8" fill="#121A27" stroke="rgba(226,234,244,0.28)"/>
        <text x="446" y="104" fill="#F3F6FA">MEDUSA :9000</text>
        <text x="446" y="128" fill="#94A3B8">Commerce Core</text>

        <path d="M 124 154 V 208 H 516 V 154 M 320 154 V 248" stroke="rgba(18,184,150,0.45)" stroke-width="1.5" fill="none"/>

        <rect x="88" y="248" width="464" height="84" rx="8" fill="#0E141E" stroke="#12B896" stroke-opacity="0.55"/>
        <text x="114" y="282" fill="#12B896">DOCKER DATA PLANE</text>
        <text x="114" y="308" fill="#94A3B8">Postgres :55432  ·  Redis Cache :6379  ·  Queue :6380</text>
      </g>
    </svg>`;
  }

  if (type === 'cvly') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="400" fill="#091018"/>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <rect x="52" y="56" width="536" height="288" rx="12" fill="#0E1622" stroke="rgba(226,234,244,0.2)"/>
        <rect x="76" y="84" width="224" height="36" rx="6" fill="#070A0F" stroke="#12B896"/>
        <text x="94" y="106" fill="#12B896">SEARCH-FIRST FEED</text>
        <rect x="318" y="84" width="246" height="36" rx="6" fill="#070A0F" stroke="#C9A227"/>
        <text x="336" y="106" fill="#C9A227">FIT SCORE · TAILOR CV</text>

        <rect x="76" y="142" width="488" height="74" rx="8" fill="#121A27" stroke="rgba(226,234,244,0.14)"/>
        <text x="98" y="174" fill="#F3F6FA">FastAPI + Jinja2 RTL + Jalali Pipeline</text>
        <text x="98" y="198" fill="#94A3B8">331 Seekers · Telegram Bot Sync · SQLite</text>

        <rect x="76" y="236" width="152" height="76" rx="8" fill="rgba(18,184,150,0.12)" stroke="#12B896"/>
        <text x="98" y="272" fill="#6EE7CE" font-size="14" font-weight="700">94% MATCH</text>
        <text x="98" y="292" fill="#94A3B8" font-size="10">Per-Job Fit</text>

        <rect x="244" y="236" width="152" height="76" rx="8" fill="rgba(201,162,39,0.12)" stroke="#C9A227"/>
        <text x="266" y="272" fill="#FDE68A" font-size="14" font-weight="700">BOT SYNC</text>
        <text x="266" y="292" fill="#94A3B8" font-size="10">Telegram Alerts</text>

        <rect x="412" y="236" width="152" height="76" rx="8" fill="#070A0F" stroke="rgba(226,234,244,0.22)"/>
        <text x="434" y="272" fill="#CBD5E1" font-size="14" font-weight="700">PDF EXPORT</text>
        <text x="434" y="292" fill="#94A3B8" font-size="10">Tailored A4</text>
      </g>
    </svg>`;
  }

  if (type === 'daftaryar') {
    return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="640" height="400" fill="#07100E"/>
      <g font-family="JetBrains Mono, monospace" font-size="11">
        <rect x="52" y="68" width="248" height="264" rx="10" fill="#0E1916" stroke="#12B896" stroke-opacity="0.65"/>
        <text x="76" y="106" fill="#12B896">DAFTARYAR v1.8.0</text>
        <text x="76" y="142" fill="#F3F6FA">WooCommerce Ledger</text>
        <text x="76" y="172" fill="#CBD5E1">Tax Invoice Engine</text>
        <text x="76" y="202" fill="#CBD5E1">Sepidar ERP Adapter</text>
        <text x="76" y="232" fill="#CBD5E1">Multi-Currency &amp; Payroll</text>
        <text x="76" y="292" fill="#C9A227">28-Plugin WP Monorepo</text>

        <path d="M 300 200 H 352" stroke="#12B896" stroke-width="2"/>

        <rect x="352" y="92" width="236" height="216" rx="12" fill="#0B1418" stroke="#12B896" stroke-width="2"/>
        <text x="380" y="132" fill="#94A3B8">AUTOMATED LDD GATE</text>
        <text x="380" y="182" fill="#12B896" font-size="30" font-weight="700">397 / 397</text>
        <text x="380" y="218" fill="#F3F6FA">Assertions Passed</text>
        <text x="380" y="252" fill="#C9A227">12/12 Release Steps · 0 FAIL</text>
      </g>
    </svg>`;
  }

  return `<svg dir="ltr" viewBox="0 0 640 400" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="640" height="400" fill="#090D14"/>
    <g font-family="JetBrains Mono, monospace" font-size="11">
      <rect x="44" y="84" width="168" height="232" rx="8" fill="#121A27" stroke="rgba(226,234,244,0.22)"/>
      <text x="64" y="120" fill="#C9A227">10 JOB BOARDS</text>
      <text x="64" y="156" fill="#CBD5E1">Greenhouse ATS</text>
      <text x="64" y="184" fill="#CBD5E1">Ashby Playwright</text>
      <text x="64" y="212" fill="#CBD5E1">Lever Forms</text>
      <text x="64" y="240" fill="#CBD5E1">CF Worker Relay</text>

      <path d="M 212 200 H 244 M 424 200 H 456" stroke="#12B896" stroke-width="1.5"/>

      <rect x="244" y="102" width="180" height="196" rx="8" fill="#121A27" stroke="#12B896"/>
      <text x="266" y="140" fill="#12B896">FACT VALIDATOR</text>
      <text x="266" y="176" fill="#F3F6FA">Zero Hallucination</text>
      <text x="266" y="206" fill="#94A3B8">master_resume.md</text>
      <text x="266" y="236" fill="#CBD5E1">Chromium A4 PDF</text>

      <rect x="456" y="102" width="144" height="196" rx="8" fill="#121A27" stroke="#C9A227"/>
      <text x="476" y="140" fill="#C9A227">LIVE RIG</text>
      <text x="476" y="176" fill="#F3F6FA">FA ⇄ EN Audio</text>
      <text x="476" y="206" fill="#94A3B8">Virtual Mic</text>
      <text x="476" y="236" fill="#CBD5E1">Gemini Stream</text>
    </g>
  </svg>`;
}
