export function toPersianDigits(input) {
  const map = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(input).replace(/\d/g, (d) => map[Number(d)]);
}

export function formatValue(str, lang) {
  return lang === 'fa' ? toPersianDigits(str) : String(str);
}

export function formatVentureYear(yearStr, lang) {
  if (lang !== 'fa') return String(yearStr);
  return toPersianDigits(String(yearStr).replace(' — Present', ' تا اکنون'));
}

export const ROUTES_MANIFEST = [
  {
    path: '/',
    code: '00 // OBSERVATORY',
    title: {
      en: 'Hamid Mehrani — Sovereign Systems Monograph & AI Engineering Studio',
      fa: 'حمید مهرآنی — مونوگراف سیستم‌های پروداکشن و استودیو مهندسی AI',
    },
    desc: {
      en: '8 years shipping production SaaS platforms, autonomous multi-agent pipelines, and 6 live Exvorta Web B2B trade houses.',
      fa: '۸ سال مهندسی پلتفرم‌های SaaS، خط تولید چند-ایجنتی و ۶ وب‌سایت زنده تجارت بین‌الملل Exvorta Web.',
    },
  },
  {
    path: '/work/exvorta',
    code: 'CASE 01 // EXVORTA',
    title: {
      en: 'Exvorta · Trade Business OS — Case Study | Hamid Mehrani',
      fa: 'پرونده مهندسی Exvorta · سیستم‌عامل تجارت بین‌الملل | حمید مهرآنی',
    },
    desc: {
      en: 'Deep architectural case study of Exvorta (exvorta.com): Next.js 15 + Payload CMS Trade Business OS, PINT-AE compliance, 1,152 Vitest tests, and crypto settlement.',
      fa: 'کالبدشکافی معماری Exvorta: سیستم‌عامل اسناد تجاری، کامپلاینس PINT-AE امارات، ۱٬۱۵۲ تست خودکار و پرداخت کریپتو.',
    },
  },
  {
    path: '/work/firoza',
    code: 'CASE 02 // FIROZA',
    title: {
      en: 'Firoza · Nishapur Turquoise Atelier — Case Study | Hamid Mehrani',
      fa: 'پرونده مهندسی Firoza · صادرات فیروزه نیشابور | حمید مهرآنی',
    },
    desc: {
      en: '239 static routes across 10 languages on Cloudflare Pages featuring 2.5x optical inspection, 46 sRGB captures, and SHA-256 parcel provenance.',
      fa: 'معماری استاتیک ۲۳۹ صفحه‌ای در ۱۰ زبان زنده روی لبه کلودفلر با ذره‌بین اپتیکال ۲٫۵ برابر و اصالت‌سنجی سنگ طبیعی.',
    },
  },
  {
    path: '/work/hamesu',
    code: 'CASE 03 // HAMESU',
    title: {
      en: 'Hamesu · Multi-Tenant Commerce OS — Case Study | Hamid Mehrani',
      fa: 'پرونده مهندسی همه‌سو (Hamesu) · سیستم‌عامل فروشگاه‌ساز | حمید مهرآنی',
    },
    desc: {
      en: 'Medusa 2.22 + Next.js 16 + PostgreSQL RLS multi-tenant commerce platform powering 30 storefront and 43 merchant console routes.',
      fa: 'پلتفرم فروشگاه‌ساز چندمستاجره با هسته Medusa، دیتابیس PostgreSQL RLS و ۷۳ مسیر کامپایل‌شده ویترین و کنسول.',
    },
  },
  {
    path: '/work/cvly',
    code: 'CASE 04 // CVLY',
    title: {
      en: 'Cvly · AI Career & Salary Intelligence — Case Study | Hamid Mehrani',
      fa: 'پرونده مهندسی سی‌ولی (Cvly) · کاریابی هوشمند و کاوشگر حقوق | حمید مهرآنی',
    },
    desc: {
      en: 'FastAPI + SQLite WAL AI career workspace indexing 6,577 live Iranian job listings across 7 boards and 832 verified salary signals.',
      fa: 'پلتفرم کاریابی هوشمند با ۶٬۵۷۷ آگهی زنده از ۷ مرجع، ۸۳۲ سیگنال واقعی حقوق و شخصی‌سازی ضدجعل رزومه.',
    },
  },
  {
    path: '/work/leadvium',
    code: 'CASE 05 // LEADVIUM',
    title: {
      en: 'Leadvium & Outreach Studio — Case Study | Hamid Mehrani',
      fa: 'پرونده مهندسی Leadvium و Outreach Studio | حمید مهرآنی',
    },
    desc: {
      en: '30+ Python modules processing 48,000+ B2B leads across 21 countries, paired with Pishro AI and Exvorta Outreach Studio behind hard sender-freeze safety.',
      fa: 'موتور ۳۰+ ماژوله پردازش ۴۸٬۰۰۰ لید در ۲۱ کشور به همراه استودیو اوتریچ داخلی و قفل سخت‌گیرانه حفاظت از دامنه.',
    },
  },
  {
    path: '/work/audit',
    code: 'CASE 06 // AUDIT ENGINE',
    title: {
      en: '7-Stage Website Audit Engine — Case Study | Hamid Mehrani',
      fa: 'پرونده مهندسی موتور ممیزی ۷ مرحله‌ای سایت | حمید مهرآنی',
    },
    desc: {
      en: 'Automated Puppeteer, Lighthouse, axe-core, and AI-vision inspection suite generating 14-page branded client proposal PDFs.',
      fa: 'پایپ‌لاین خودکار ارزیابی سرعت، دسترس‌پذیری، امنیت و دیزاین با خروجی پروپوزال PDF چهارده صفحه‌ای.',
    },
  },
  {
    path: '/work/daftaryar',
    code: 'CASE 07 // DAFTARYAR',
    title: {
      en: 'Daftaryar · WooCommerce Finance OS — Case Study | Hamid Mehrani',
      fa: 'پرونده مهندسی دفتریار · سیستم مالی ووکامرس | حمید مهرآنی',
    },
    desc: {
      en: 'Turnkey Persian WooCommerce accounting & Sepidar ERP plugin verified across 2,645 PHPUnit tests (15,501 assertions) and 397/397 LDD gate checks.',
      fa: 'افزونه حسابداری و فاکتور رسمی ووکامرس با پل سپیدار و پشتوانه ۱۵٬۵۰۱ تست واحد خودکار بدون خطا.',
    },
  },
  {
    path: '/work/jobhunt',
    code: 'CASE 08 // JOBHUNT RIG',
    title: {
      en: 'Autonomous JobHunt & Live AI Interpreter — Case Study | Hamid Mehrani',
      fa: 'پرونده مهندسی پایپ‌لاین شکار شغل و مترجم بلادرنگ | حمید مهرآنی',
    },
    desc: {
      en: '10-board ATS discovery pipeline, anti-fabrication truth-bank resume compiler, and virtual-mic FA⇄EN real-time speech bridge.',
      fa: 'خزنده ۱۰ برد استخدامی بین‌المللی، کامپایلر رزومه ضدتوهم یک‌صفحه‌ای و رگ صوتی بلادرنگ فارسی به انگلیسی.',
    },
  },
  {
    path: '/exvorta-web',
    code: 'STUDIO // EXVORTA WEB',
    title: {
      en: 'Exvorta Web Studio — 6 Global B2B Trade Houses | Hamid Mehrani',
      fa: 'استودیو Exvorta Web — ۶ وب‌سایت صادراتی تراز جهانی | حمید مهرآنی',
    },
    desc: {
      en: 'Deep exhibition of 6 live multilingual B2B exporter flagships on Cloudflare Pages: Spicevo, Nutave, Stonvi, Aurum, Meridian, and Vestra.',
      fa: 'نمایشگاه عمیق ۶ وب‌سایت تجاری چندزبانه زنده روی کلودفلر پیجز: Spicevo، Nutave، Stonvi، Aurum، Meridian و Vestra.',
    },
  },
  {
    path: '/pipeline',
    code: 'LAB // AGENT PIPELINE',
    title: {
      en: 'Autonomous Multi-Agent Engineering Pipeline | Hamid Mehrani',
      fa: 'آزمایشگاه خط تولید خودکار تیم‌های ایجنت | حمید مهرآنی',
    },
    desc: {
      en: 'Interactive simulator and architectural breakdown of Hamid Mehrani’s multi-agent engineering pipeline: Mobbin refs, contracts, worktrees, Playwright gates, and edge deploy.',
      fa: 'شبیه‌ساز زنده و کالبدشکافی خط تولید چند-ایجنتی: از تحقیق مرجع Mobbin و اجرای موازی تا گیت مستقل Playwright.',
    },
  },
  {
    path: '/resume',
    code: 'FOLIO // 8-YEAR LEDGER',
    title: {
      en: '8-Year Career Folio & Multi-Track Resume (2018–2026) | Hamid Mehrani',
      fa: 'کارنامه ۸ ساله و رزومه چندمسیره (۲۰۱۸ تا ۲۰۲۶) | حمید مهرآنی',
    },
    desc: {
      en: 'Complete verified 8-year engineering history, 4-lens interactive CV switcher, capabilities matrix, and 1-page A4 PDF downloads.',
      fa: 'سوابق کامل ۸ ساله وب و هوش مصنوعی، سوییچر ۴ مسیره رزومه و دانلود مستقیم نسخه‌های یک‌صفحه‌ای PDF.',
    },
  },
  {
    path: '/hire',
    code: 'CONCIERGE // HIRE & TRIAL',
    title: {
      en: 'Hire Hamid Mehrani — Executive Role-Fit & 48h Paid Async Trial',
      fa: 'همکاری با حمید مهرآنی — سنجش تناسب نقش و تسک آزمایشی ۴۸ ساعته',
    },
    desc: {
      en: 'Interactive hiring configurator for CTOs and founders: evaluate role fit across AI Automation, Full-Stack Web, or Growth Systems and start with a 48h async trial.',
      fa: 'میز هوشمند ویژه مدیران فنی و کارفرمایان: انتخاب نقش، مشاهده اهرم مهندسی و شروع سریع با تسک آزمایشی ۴۸ ساعته.',
    },
  },
];

export const UI_COPY = {
  en: {
    skip: 'Skip to main content',
    coords: '35.6892° N, 51.3890° E · ASYNC GLOBAL',
    nav: {
      home: 'Exhibition',
      work: '8 Case Studies',
      exvortaWeb: '6 Trade Sites',
      pipeline: 'Agent Lab',
      resume: '8-Yr CV',
      hire: 'Hire / 48h Trial',
    },
    cmdBtn: 'Command',
    devBtn: 'HUD',
    soundOff: 'Audio Off',
    soundOn: 'Audio On',
    heroEdition: 'MONOGRAPH EDITION V2 · 2018 — 2026 · 14 LIVE SYSTEMS',
    heroTitleLine1: 'One AI-Native Architect.',
    heroTitleLine2: 'Output of an entire product studio.',
    heroThesis:
      'I build production SaaS platforms, 21-country automation engines, and multilingual global brand worlds by directing specialized AI agent teams behind uncompromising automated quality gates.',
    heroPrimaryCta: 'Explore 8 Deep Case Studies',
    heroSecondaryCta: 'Why Managers Hire Me (48h Trial)',
    heroTertiaryCta: '6 Live Exvorta Web Sites',
    orbitalHint: 'INTERACTIVE 3D TOPOLOGY · HOVER TO LOCK TELEMETRY · CLICK ANY NODE TO OPEN MONOGRAPH',
    marqueeItems: [
      'EXVORTA TRADE OS · 1,152 VITEST PASS',
      'FIROZA ATELIER · 239 STATIC ROUTES · 10 LOCALES',
      'LEADVIUM ENGINE · 48,000+ B2B LEADS · 21 COUNTRIES',
      'DAFTARYAR · 15,501 PHPUNIT ASSERTIONS · 397/397 GATE',
      'HAMESU COMMERCE · 73 COMPILED ROUTES · POSTGRES RLS',
      'CVLY CAREER AI · 6,577 LIVE LISTINGS · 832 SALARY SIGNALS',
      'EXVORTA WEB · 6 GLOBAL TRADE HOUSES ON CLOUDFLARE EDGE',
    ],
    stats: [
      { value: '8 Years', label: 'End-to-End Web & Systems Craft', sub: '5y Freelance · 2y In-House · Founder' },
      { value: '14', label: 'Production Systems & Brand Worlds', sub: '8 Core Engines + 6 B2B Trade Sites' },
      { value: '48,000+', label: 'B2B Leads Processed Across 21 Countries', sub: '30+ Python Modules · 85 Query Matrices' },
      { value: '16,800+', label: 'Automated Test Assertions Passing', sub: '1,152 Vitest · 15,501 PHPUnit · 193 Python tests' },
    ],
    thesisKicker: '01 // THE EXECUTIVE LEVERAGE THESIS',
    thesisHeadline: 'Most engineers ship tickets. I engineer the factory that ships whole products.',
    thesisBody1:
      'Over eight years — five years delivering revenue e-commerce builds freelance, two years owning in-house catalog & SEO infrastructure, and now founding Exvorta — I replaced manual line-by-line bottlenecks with a deterministic multi-agent pipeline.',
    thesisBody2:
      'Every slice moves from real Mobbin product references to typed data contracts, isolated git-worktree builders, and an independent headless Chromium critic verifying Desktop 1440px and Mobile 390px before a single byte hits Cloudflare Edge.',
    worksKicker: '02 // SELECTED MONOGRAPHS',
    worksTitle: 'Eight Production Systems',
    worksCountSup: '08',
    worksLead:
      'Every project below opens a full long-form engineering monograph — complete with interactive node topology, architectural trade-offs, CLI proof, and live inspection. Zero shallow popups, zero dead ends.',
    filters: [
      { id: 'all', label: 'All Monographs' },
      { id: 'saas', label: 'SaaS & Platforms' },
      { id: 'ai', label: 'AI & Automation Engines' },
      { id: 'commerce', label: 'Commerce & Plugins' },
    ],
    viewEditorial: 'Editorial Spreads',
    viewIndex: 'Interactive Ledger',
    openMonographBtn: 'Read Full Case Study',
    liveVisit: 'Launch Live Site',
    repoVisit: 'Public GitHub',
    studioKicker: '03 // EXVORTA WEB B2B STUDIO',
    studioTitle: 'Six Global Trade Houses',
    studioLead:
      'Select any commodity house below to morph the live stage — inspecting synchronized Desktop 1440px and Mobile 390px builds powered by one reusable multilingual Next.js + Payload exporter engine.',
    openFullStudioBtn: 'Open Full 6-Brand Studio Exhibition →',
    labKicker: 'LIVE ORCHESTRATION SANDBOX',
    labTitle: 'Run the Autonomous Agent Pipeline',
    labLead:
      'Pick one of 4 real shipped missions and execute the 5-stage DAG right in your browser — watching how Curator, Architect, Parallel Builders, and Independent Playwright QA ship production code.',
    runSimBtn: '▶ Run Live Mission',
    runningSimBtn: '● Executing Pipeline...',
    openFullLabBtn: 'Explore Deep Pipeline Architecture →',
    hireKicker: '04 // EXECUTIVE DECISION ENGINE',
    hireTitle: 'Configure Your Role & See Why Hiring Me Is Unfair Leverage',
    hireLead:
      'Select the exact seat you are hiring for. Inspect matched proof systems, compare output velocity against a traditional 4-person chain, or launch a zero-risk 48-hour paid async trial.',
    openHireConciergeBtn: 'Open Full Hiring & Trial Concierge →',
    trajectoryKicker: '05 // 2018 ———— 2026 TRAJECTORY',
    trajectoryTitle: 'Eight Years of Compounding Ownership',
    openFullResumeBtn: 'Open Full 8-Year Folio & Download A4 PDFs →',
    nextPortalLabel: 'CONTINUE THE EXHIBITION',
    relatedLabel: 'EXPLORE CONNECTED MONOGRAPHS',
    backToHome: '← Back to Observatory',
    prevCase: '← Previous',
    nextCase: 'Next Case →',
    caseSections: {
      startingPoint: '01 — The Operational Problem & Stakes',
      solution: '02 — System Architecture & Execution',
      topology: '03 — Interactive Subsystem Topology (Click Any Node)',
      decisions: '04 — Key Engineering Decisions & Trade-Offs',
      artifact: '05 — Verified Build, Test & Runtime Proof',
      gates: '06 — Deterministic Quality Gate Ledger',
    },
    viewportModes: {
      desktop: 'Desktop 1440px',
      mobile: 'Mobile 390px',
      split: 'Split Compare',
      blueprint: 'System Schematic',
    },
    footerKicker: 'ASYNC-NATIVE · REMOTE WORLDWIDE · READY FOR 48H PAID TRIAL',
    footerHeading: 'Ready to ship what usually takes an entire engineering squad.',
    footerNote:
      'All communication runs cleanly in writing (Slack, Linear, GitHub, Email) with daily live preview deployments and verified Playwright reports — zero wasted calendar hours.',
    copyEmailBtn: 'Copy hamid@exvorta.com',
    pdfTrackA: 'Download Resume · Track A (AI Automation PDF)',
    pdfTrackB: 'Download Resume · Track B (Web Developer PDF)',
    pdfTrackC: 'Download Resume · Track C (Growth & SEO PDF)',
    copiedToast: 'Copied hamid@exvorta.com to clipboard',
    briefCopiedToast: 'Copied tailored hiring brief to clipboard',
    footerColCases: '8 SYSTEM MONOGRAPHS',
    footerColTrade: '6 EXVORTA WEB HOUSES',
    footerColDirect: 'PAGES & PROFILES',
    footerCopyLeft: '© 2026 Hamid Mehrani · Tehran / Remote Any Time Zone',
    footerCopyRight: 'Zero-Dependency Runtime · Isomorphic ES2024 · 13 Pre-Rendered Edge Routes',
    notFoundTitle: 'This page drifted off the map.',
    notFoundBody: 'The route you asked for does not exist in the monograph. Every real page is one click away — start back at the observatory or jump straight to a case study.',
    notFoundHomeBtn: 'Return to the Observatory',
    notFoundCasesBtn: 'Browse the 8 Case Studies',
    cmdPlaceholder: 'Jump to any of the 13 pages, 8 case studies, 6 trade houses, PDFs, or actions...',
    cmdEmpty: 'No matching routes or commands found.',
    dock: {
      home: 'Home',
      cases: 'Cases',
      studio: '6 Sites',
      lab: 'Pipeline',
      cv: 'CV / PDF',
      hire: 'Hire Me',
    },
  },

  fa: {
    skip: 'پرش به محتوای اصلی',
    coords: '۳۵.۶۸۹۲ شمالی، ۵۱.۳۸۹۰ شرقی · همکاری ریموت جهانی',
    nav: {
      home: 'نمایشگاه اصلی',
      work: '۸ پرونده عمیق',
      exvortaWeb: '۶ سایت صادراتی',
      pipeline: 'آزمایشگاه ایجنت',
      resume: 'رزومه ۸ ساله',
      hire: 'استخدام / تست ۴۸ساعته',
    },
    cmdBtn: 'فرمان',
    devBtn: 'تله‌متری',
    soundOff: 'صدا خاموش',
    soundOn: 'صدا روشن',
    heroEdition: 'نسخه مونوگراف V2 · ۲۰۱۸ تا ۲۰۲۶ · ۱۴ سیستم و وب‌سایت زنده',
    heroTitleLine1: 'معمار سیستم‌های هوشمند',
    heroTitleLine2: 'با خروجی کامل یک استودیو مهندسی محصول.',
    heroThesis:
      'پلتفرم‌های SaaS، موتورهای اتوماسیون در ۲۱ کشور و وب‌سایت‌های تجاری چندزبانه را با هدایت تیم‌های ایجنت متخصص و گیت‌های خودکار کنترل کیفیت، از صفر تا پروداکشن می‌سازم.',
    heroPrimaryCta: 'مطالعه ۸ پرونده عمیق مهندسی',
    heroSecondaryCta: 'چرا مدیران من را انتخاب می‌کنند؟',
    heroTertiaryCta: '۶ وب‌سایت زنده Exvorta Web',
    orbitalHint: 'مدار سه‌بعدی تعاملی · نشانگر را روی هر سیاره ببرید و برای ورود به پرونده کامل کلیک کنید',
    marqueeItems: [
      'سیستم‌عامل EXVORTA · ۱٬۱۵۲ تست خودکار VITEST',
      'آتلیه FIROZA · ۲۳۹ مسیر استاتیک در ۱۰ زبان زنده',
      'موتور LEADVIUM · پردازش +۴۸٬۰۰۰ لید در ۲۱ کشور',
      'افزونه دفتریار · ۱۵٬۵۰۱ گزاره تست واحد · گیت ۳۹۷/۳۹۷',
      'پلتفرم همه‌سو · ۷۳ مسیر ویترین و کنسول · POSTGRES RLS',
      'کاریابی سی‌ولی · ۶٬۵۷۷ آگهی زنده · ۸۳۲ سیگنال حقوق',
      'استودیو EXVORTA WEB · ۶ برند صادراتی روی لبه کلودفلر',
    ],
    stats: [
      { value: '۸ سال', label: 'مهندسی سرتاسری وب و محصول', sub: '۵ سال فریلنس · ۲ سال شرکتی · اکنون بنیان‌گذار' },
      { value: '۱۴', label: 'سیستم پروداکشن و وب‌سایت زنده', sub: '۸ موتور نرم‌افزاری + ۶ خانه تجارت جهانی' },
      { value: '+۴۸٬۰۰۰', label: 'لید B2B پردازش‌شده در ۲۱ کشور', sub: '+۳۰ ماژول پایتون · ۸۵ ماتریس جستجو' },
      { value: '+۱۶٬۸۰۰', label: 'گزاره تست خودکار پاس‌شده', sub: '۱٬۱۵۲ Vitest · ۱۵٬۵۰۱ PHPUnit · ۱۹۳ تست پایتون' },
    ],
    thesisKicker: '۰۱ // تز اهرم مدیریتی',
    thesisHeadline: 'بیشتر برنامه‌نویس‌ها تیکت می‌بندند؛ من کارخانه‌ای را مهندسی می‌کنم که محصول کامل تحویل می‌دهد.',
    thesisBody1:
      'در طول هشت سال — پنج سال تحویل فروشگاه و پروژه‌های تجاری، دو سال مالکیت فنی سئو و کاتالوگ درون‌سازمانی و اکنون بنیان‌گذاری Exvorta — کدنویسی خط‌به‌خط سنتی را به یک خط تولید منظم چند-ایجنتی ارتقا دادم.',
    thesisBody2:
      'هر بخش ابتدا از مراجع واقعی Mobbin تغذیه می‌شود، سپس قراردادهای داده تایپ‌شده می‌گیرد، در شاخه‌های موازی ساخته می‌شود و پیش از استقرار روی لبه کلودفلر، توسط یک بازبین مستقل در دسکتاپ ۱۴۴۰px و موبایل ۳۹۰px تایید می‌گردد.',
    worksKicker: '۰۲ // مونوگراف سیستم‌های ساخته‌شده',
    worksTitle: 'هشت سیستم و پلتفرم پروداکشن',
    worksCountSup: '۰۸',
    worksLead:
      'هر پروژه دارای یک برگه تخصصی و طولانی شامل دیاگرام تعاملی معماری، تصمیمات مهندسی، خروجی واقعی تست‌ها و پیش‌نمایش زنده است — بدون پاپ‌آپ‌های سطحی و بدون هیچ بن‌بستی.',
    filters: [
      { id: 'all', label: 'همه مونوگراف‌ها' },
      { id: 'saas', label: 'پلتفرم‌های SaaS' },
      { id: 'ai', label: 'موتورهای AI و اتوماسیون' },
      { id: 'commerce', label: 'تجارت الکترونیک و افزونه' },
    ],
    viewEditorial: 'نمای ادیتوریال عریض',
    viewIndex: 'دفتر فهرست تعاملی',
    openMonographBtn: 'ورود به برگه کامل پرونده',
    liveVisit: 'مشاهده سایت زنده',
    repoVisit: 'گیت‌هاب عمومی',
    studioKicker: '۰۳ // استودیو برندینگ و وب EXVORTA WEB',
    studioTitle: 'شش خانه تجارت صادراتی جهانی',
    studioLead:
      'روی هر برند کلیک کنید تا صحنه زنده تغییر رنگ دهد و پیش‌نمایش هم‌زمان دسکتاپ ۱۴۴۰px و موبایل ۳۹۰px را روی موتور چندزبانه Next.js + Payload مشاهده کنید.',
    openFullStudioBtn: 'ورود به برگه کامل استودیو ۶ برند صادراتی ←',
    labKicker: 'شبیه‌ساز زنده خط تولید ایجنت‌ها',
    labTitle: 'خط تولید چند-ایجنتی را زنده اجرا کنید',
    labLead:
      'یکی از ۴ ماموریت واقعی انجام‌شده را انتخاب و اجرا کنید تا ببینید ایجنت‌های محقق، معمار، سازندگان موازی و بازبین Playwright چگونه محصول را بدون خطا تحویل می‌دهند.',
    runSimBtn: '▶ اجرای زنده ماموریت',
    runningSimBtn: '● در حال اجرای پایپ‌لاین...',
    openFullLabBtn: 'مطالعه کامل معماری خط تولید ایجنت‌ها ←',
    hireKicker: '۰۴ // موتور تصمیم‌گیری مدیران و استخدام',
    hireTitle: 'نقش موردنیازتان را انتخاب کنید و اهرم واقعی همکاری را بسنجید',
    hireLead:
      'جایگاه شغلی مدنظرتان را انتخاب کنید تا پروژه‌های مرتبط، مقایسه بهره‌وری با تیم ۴ نفره سنتی و نحوه شروع بدون ریسک با تسک آزمایشی ۴۸ ساعته را ببینید.',
    openHireConciergeBtn: 'ورود به میز کامل همکاری و تسک آزمایشی ←',
    trajectoryKicker: '۰۵ // مسیر رشد ۲۰۱۸ ———— ۲۰۲۶',
    trajectoryTitle: 'هشت سال انباشت تجربه واقعی در وب و هوش مصنوعی',
    openFullResumeBtn: 'مشاهده کارنامه کامل ۸ ساله و دانلود PDF یک‌صفحه‌ای ←',
    nextPortalLabel: 'ادامه مسیر در برگه بعدی',
    relatedLabel: 'پرونده‌های مرتبط برای بررسی عمیق‌تر',
    backToHome: '→ بازگشت به رصدخانه اصلی',
    prevCase: '→ پرونده قبلی',
    nextCase: '← پرونده بعدی',
    caseSections: {
      startingPoint: '۰۱ — مساله عملیاتی و چالش واقعی کسب‌وکار',
      solution: '۰۲ — معماری راه‌حل و مهندسی اجرا',
      topology: '۰۳ — توپولوژی تعاملی زیرسیستم‌ها (روی هر گره کلیک کنید)',
      decisions: '۰۴ — تصمیمات کلیدی معماری و موازنه‌های فنی',
      artifact: '۰۵ — خروجی واقعی بیلد، تست و سرور زنده',
      gates: '۰۶ — جدول گیت‌های کنترل کیفیت و تایید نهایی',
    },
    viewportModes: {
      desktop: 'دسکتاپ ۱۴۴۰px',
      mobile: 'موبایل ۳۹۰px',
      split: 'مقایسه کشویی',
      blueprint: 'بلوپرینت معماری',
    },
    footerKicker: 'همکاری ریموت جهانی · ارتباط دقیق مکتوب · آماده تسک آزمایشی ۴۸ ساعته',
    footerHeading: 'آماده ساخت سیستم‌هایی که معمولاً یک تیم کامل مهندسی می‌خواهند.',
    footerNote:
      'تمام هماهنگی‌ها به‌صورت مکتوب، مستند و شفاف (چت، گیت‌هاب، ایمیل) همراه با لینک پیش‌نمایش روزانه و گزارش تست خودکار انجام می‌شود — بدون جلسات فرسایشی.',
    copyEmailBtn: 'کپی ایمیل hamid@exvorta.com',
    pdfTrackA: 'دانلود رزومه · مسیر A (مهندس اتوماسیون AI)',
    pdfTrackB: 'دانلود رزومه · مسیر B (توسعه‌دهنده وب)',
    pdfTrackC: 'دانلود رزومه · مسیر C (رشد و سئو)',
    copiedToast: 'آدرس hamid@exvorta.com کپی شد',
    briefCopiedToast: 'متن اختصاصی پیشنهاد همکاری کپی شد',
    footerColCases: '۸ مونوگراف سیستم‌ها',
    footerColTrade: '۶ برند EXVORTA WEB',
    footerColDirect: 'برگه‌ها و شبکه‌ها',
    footerCopyLeft: '© ۲۰۲۶ حمید مهرآنی · تهران / همکاری ریموت در تمام مناطق زمانی',
    footerCopyRight: 'معماری ایزومورفیک ES2024 · ۱۳ مسیر پیش‌رندرشده روی لبه کلودفلر',
    notFoundTitle: 'این برگه از نقشه خارج شد.',
    notFoundBody: 'مسیری که خواستید در مونوگراف وجود ندارد. همه برگه‌های واقعی یک کلیک با شما فاصله دارند — از رصدخانه شروع کنید یا مستقیم به پرونده‌ها بروید.',
    notFoundHomeBtn: 'بازگشت به رصدخانه اصلی',
    notFoundCasesBtn: 'مرور ۸ پرونده مهندسی',
    cmdPlaceholder: 'جستجوی سریع در میان ۱۳ برگه، ۸ پرونده، ۶ سایت تجاری، رزومه PDF یا دستورات...',
    cmdEmpty: 'نتیجه‌ای با این عبارت یافت نشد.',
    dock: {
      home: 'خانه',
      cases: '۸ پروژه',
      studio: '۶ برند',
      lab: 'ایجنت‌ها',
      cv: 'رزومه',
      hire: 'همکاری',
    },
  },
};

export const VENTURES = [
  {
    id: 'exvorta',
    index: '01',
    route: '/work/exvorta',
    category: 'saas',
    featured: true,
    year: '2026 — Present',
    statusType: 'live',
    status: { en: 'LIVE PRODUCTION', fa: 'پروداکشن زنده' },
    name: { en: 'Exvorta · Trade Business OS', fa: 'اگزورتا (Exvorta) · سیستم‌عامل تجارت' },
    role: { en: 'Founder & Lead Architect', fa: 'بنیان‌گذار و معمار ارشد' },
    previewImg: '/previews/exvorta.webp',
    mobilePreviewImg: '/previews/exvorta-mobile.webp',
    schematicType: 'exvorta',
    liveUrl: 'https://exvorta.com',
    repoUrl: 'https://github.com/hamidmehrani/exvorta-main',
    repoPrivate: true,
    stack: ['Next.js 15', 'Payload CMS', 'PostgreSQL', 'Gotenberg PDF', 'NOWPayments USDT', 'Cloudflare Pages'],
    stackFa: ['Next.js 15', 'Payload CMS', 'PostgreSQL', 'موتور Gotenberg', 'پرداخت USDT', 'Cloudflare Pages'],
    headlineMetric: { en: '1,152 Tests · 141 Edge Routes', fa: '۱٬۱۵۲ تست · ۱۴۱ مسیر لبه' },
    proof: {
      en: 'Source: github.com/hamidmehrani/exvorta-main (Nov 2026 snapshot) · 1,152 Vitest assertions passing · UAE PINT-AE XML + 4 trade docs · LH 100/100',
      fa: 'منبع: github.com/hamidmehrani/exvorta-main (اسنپ‌شات نوامبر ۲۰۲۶) · ۱٬۱۵۲ تست واحد پاس‌شده · تولید ۴ سند تجاری و PINT-AE امارات · امتیاز سرعت ۱۰۰',
    },
    summary: {
      en: 'Sovereign trade-file compliance & operating system deriving Proforma, PINT-AE Commercial Invoice, Packing List, CoO, seller P&L math, and crypto settlement from one entry.',
      fa: 'سیستم‌عامل یکپارچه تجارت بین‌الملل که از یک پرونده واحد، هر ۴ سند صادراتی، چک گمرکی کریدور، سود خالص واقعی و تسویه کریپتویی را استخراج می‌کند.',
    },
  },
  {
    id: 'firoza',
    index: '02',
    route: '/work/firoza',
    category: 'commerce',
    secondaryWide: true,
    year: '2024 — Present',
    statusType: 'live',
    status: { en: 'LIVE · 10 LOCALES', fa: 'زنده در ۱۰ زبان' },
    name: { en: 'Firoza · Nishapur Turquoise Atelier', fa: 'فیروزه (Firoza) · آتلیه صادراتی نیشابور' },
    role: { en: 'End-to-End Owner & Builder', fa: 'سازنده و مالک فنی سرتاسری' },
    previewImg: '/previews/firoza.webp',
    mobilePreviewImg: '/previews/firoza-mobile.webp',
    schematicType: 'firoza',
    liveUrl: 'https://www.firoza.ir',
    repoUrl: 'https://github.com/hamidmehrani/Firoza',
    repoPrivate: true,
    stack: ['Next.js Static', 'Cloudflare Pages', '10 Locales', '2.5x Optical Loupe', 'Pages Functions'],
    stackFa: ['Next.js استاتیک', 'Cloudflare Pages', '۱۰ زبان زنده', 'ذره‌بین اپتیکال ۲٫۵x', 'Pages Functions'],
    headlineMetric: { en: '239 Static Pages · 10 Languages', fa: '۲۳۹ صفحه استاتیک · ۱۰ زبان' },
    proof: {
      en: '239 static routes across 10 languages · 46 unretouched sRGB photos · 8 SHA-256 parcel dossiers',
      fa: '۲۳۹ صفحه فوق‌سریع در ۱۰ زبان · ۴۶ عکس واقعی بدون روتوش · ۸ پرونده سنگ با امضای SHA-256',
    },
    summary: {
      en: 'Direct mine-to-bench wholesale showcase built around a darkroom 2.5x optical stone loupe, strict zero-synthetic-imagery verification, and 7-hub air-freight terms.',
      fa: 'پلتفرم عمده‌فروشی مستقیم فیروزه اصل نیشابور با میز نور تاریک‌خانه، ذره‌بین ۲٫۵ برابر، قانون منع مطلق تصویر مصنوعی و جدول حمل هوایی جهانی.',
    },
  },
  {
    id: 'hamesu',
    index: '03',
    route: '/work/hamesu',
    category: 'commerce',
    year: '2026 — Present',
    statusType: 'live',
    status: { en: 'LIVE SERVICES', fa: 'سرویس‌های فعال' },
    name: { en: 'Hamesu · Multi-Tenant Commerce OS', fa: 'همه‌سو (Hamesu) · پلتفرم فروشگاه‌ساز' },
    role: { en: 'Platform Architect', fa: 'معمار پلتفرم' },
    previewImg: '/previews/hamesu.webp',
    mobilePreviewImg: '/previews/hamesu-mobile.webp',
    schematicType: 'hamesu',
    liveUrl: 'https://hamesu.ir',
    repoUrl: 'https://github.com/hamidmehrani/Hamesu',
    repoPrivate: true,
    stack: ['Medusa 2.22', 'Next.js 16', 'PostgreSQL RLS', 'Dual Redis', 'Yekan Bakh VF'],
    stackFa: ['Medusa 2.22', 'Next.js 16', 'PostgreSQL RLS', 'دو کانتینر Redis', 'فونت متغیر یکان‌بخ'],
    headlineMetric: { en: '73 Compiled Routes · 108 Test Files', fa: '۷۳ مسیر کامپایل‌شده · ۱۰۸ فایل تست' },
    proof: {
      en: '30 storefront + 43 merchant console routes · Torob signed feeds · Instagram DM instant checkout',
      fa: '۳۰ مسیر ویترین + ۴۳ مسیر کنسول فروشنده · فید رسمی ترب · خرید فوری ویژه دایرکت اینستاگرام',
    },
    summary: {
      en: 'Multi-tenant commerce OS turning Iranian social sellers and physical shops into full storefronts with dynamic gold pricing, Rial ledger, and multi-branch stock.',
      fa: 'سیستم‌عامل تجارت چندمستاجره برای فروشندگان ایرانی با پارسر کپشن اینستاگرام، قیمت‌گذاری پویا طلا، انبار چندشعبه و دفترکل ریالی.',
    },
  },
  {
    id: 'cvly',
    index: '04',
    route: '/work/cvly',
    category: 'saas',
    year: '2026 — Present',
    statusType: 'live',
    status: { en: 'LIVE R23.2 · 6,577 JOBS', fa: 'زنده نسخه R23.2' },
    name: { en: 'Cvly · AI Career & Salary Intelligence', fa: 'سی‌ولی (Cvly) · کاریابی هوشمند و حقوق' },
    role: { en: 'Product & Stack Owner', fa: 'مالک محصول و معماری' },
    previewImg: '/previews/cvly.webp',
    mobilePreviewImg: '/previews/cvly-mobile.webp',
    schematicType: 'cvly',
    liveUrl: 'https://cvly.ir',
    repoUrl: 'https://github.com/hamidmehrani/cvly-backup',
    repoPrivate: true,
    stack: ['FastAPI', 'SQLite WAL', 'Tailwind RTL', 'HTMX', 'Chromium PDF'],
    stackFa: ['FastAPI', 'SQLite WAL', 'Tailwind راست‌به‌چپ', 'HTMX', 'موتور PDF کرومیوم'],
    headlineMetric: { en: '6,577 Live Jobs · 832 Salary Signals', fa: '۶٬۵۷۷ آگهی زنده · ۸۳۲ داده حقوق' },
    proof: {
      en: '6,577 active listings across 7 boards (0 mock rows) · <1.0s warm loopback · Anti-fabrication tailoring',
      fa: '۶٬۵۷۷ آگهی واقعی از ۷ سایت کاریابی · پاسخ‌دهی زیر ۱ ثانیه · شخصی‌سازی رزومه بدون جعل سابقه',
    },
    summary: {
      en: 'Persian AI career workspace indexing 7 job boards every 2 hours, featuring zero-signup instant fit scoring, market salary percentiles, and tailored PDF resumes.',
      fa: 'میز کار هوشمند کاریابی ایران با پایش ۲ساعته ۷ سایت استخدامی، سنجش فوری تناسب رزومه بدون ثبت‌نام و کاوشگر حقوق واقعی بازار.',
    },
  },
  {
    id: 'leadvium',
    index: '05',
    route: '/work/leadvium',
    category: 'ai',
    year: '2026',
    statusType: 'frozen',
    status: { en: 'ENGINEERED · FROZEN', fa: 'مهندسی‌شده · فریز ارسال' },
    name: { en: 'Leadvium & Outreach Studio', fa: 'لیدویوم، پیشرو و Outreach Studio' },
    role: { en: 'System Creator & AI Architect', fa: 'طراح و معمار سیستم AI' },
    previewImg: null,
    mobilePreviewImg: null,
    schematicType: 'leadvium',
    liveUrl: null,
    repoUrl: null,
    stack: ['Python (30+ Modules)', 'SQLite', '9-Signal Web Scanner', 'Unibox CRM', 'Domain Shield'],
    stackFa: ['پایتون (+۳۰ ماژول)', 'SQLite', 'اسکنر ۹گانه وب‌سایت', 'صندوق Unibox', 'سپر محافظ دامنه'],
    headlineMetric: { en: '48,000+ Leads · 21 Countries', fa: '+۴۸٬۰۰۰ لید · ۲۱ کشور' },
    proof: {
      en: '48,000+ B2B leads processed · 85 query matrices · 110+ Studio/Cockpit/Pishro tests · Frozen Nov 6',
      fa: '+۴۸٬۰۰۰ لید پردازش‌شده · ۸۵ ماتریس کاوش · ۱۱۰ تست پاس‌شده در استودیو، کاکپیت و پیشرو · فریز از ۶ نوامبر',
    },
    summary: {
      en: '21-country B2B discovery engine paired with Iran B2B Pishro AI and an internal Instantly-class Outreach Studio locked behind hard root-domain and freeze guards.',
      fa: 'موتور کشف و ارزیابی مشتریان B2B در ۲۱ کشور به همراه زیرسیستم بازار ایران و پلتفرم داخلی مدیریت کمپین با قفل سخت‌افزاری عدم ارسال خودسرانه.',
    },
  },
  {
    id: 'audit',
    index: '06',
    route: '/work/audit',
    category: 'ai',
    year: '2026 — Present',
    statusType: 'internal',
    status: { en: 'ACTIVE PIPELINE', fa: 'پایپ‌لاین فعال' },
    name: { en: '7-Stage Website Audit Engine', fa: 'موتور ممیزی ۷ مرحله‌ای سایت' },
    role: { en: 'Creator', fa: 'طراح و سازنده' },
    previewImg: null,
    mobilePreviewImg: null,
    schematicType: 'audit',
    liveUrl: null,
    repoUrl: null,
    stack: ['Node.js / Python', 'Puppeteer', 'Lighthouse', 'axe-core', 'AI Vision PDF'],
    stackFa: ['Node.js و پایتون', 'Puppeteer', 'Lighthouse', 'axe-core', 'پروپوزال PDF هوشمند'],
    headlineMetric: { en: '7 Stages → 14-Page Client PDF', fa: '۷ مرحله ← گزارش ۱۴ صفحه‌ای' },
    proof: {
      en: '83/83 PDF pipeline tests passing · Real Core Web Vitals, WCAG, security & AI vision critique',
      fa: '۸۳ از ۸۳ تست خط تولید پاس‌شده · سنجش واقعی سرعت، دسترس‌پذیری، امنیت و نقد بصری با AI',
    },
    summary: {
      en: 'Autonomous headless inspection suite turning any target URL into a 14-page executive diagnostic and remediation proposal PDF in minutes.',
      fa: 'سیستم بازرسی خودکار مرورگر هدلس که هر وب‌سایتی را کالبدشکافی کرده و در چند دقیقه یک پروپوزال تشخیصی ۱۴ صفحه‌ای برندشده تولید می‌کند.',
    },
  },
  {
    id: 'daftaryar',
    index: '07',
    route: '/work/daftaryar',
    category: 'commerce',
    year: '2026',
    statusType: 'internal',
    status: { en: 'RELEASE READY · 397/397', fa: 'آماده انتشار · گیت ۳۹۷/۳۹۷' },
    name: { en: 'Daftaryar · WooCommerce Finance OS', fa: 'دفتریار · سیستم جامع مالی ووکامرس' },
    role: { en: 'Plugin Architect', fa: 'معمار افزونه وردپرس' },
    previewImg: null,
    mobilePreviewImg: null,
    schematicType: 'daftaryar',
    liveUrl: null,
    repoUrl: null,
    stack: ['WordPress / PHP', 'WooCommerce Blocks', 'Sepidar ERP', 'HMAC-SHA256', 'PHPUnit'],
    stackFa: ['وردپرس و PHP', 'چک‌اوت بلوکی ووکامرس', 'پل سپیدار', 'امضای HMAC-SHA256', 'PHPUnit'],
    headlineMetric: { en: '15,501 Assertions · 0 Debug Errors', fa: '۱۵٬۵۰۱ گزاره تست · صفر خطا' },
    proof: {
      en: '2,645 PHPUnit tests (15,501 assertions) · 397/397 LDD gate checks · 0 lines in wp debug.log',
      fa: '۲٬۶۴۵ تست واحد (۱۵٬۵۰۱ گزاره) · قبولی ۳۹۷ از ۳۹۷ گیت انتشار · صفر خطا در لاگ وردپرس',
    },
    summary: {
      en: 'Turnkey 10-module Persian WooCommerce tax invoicing, Post/Tipax tracking, and Sepidar ERP bridge engineered with banking-grade automated test discipline.',
      fa: 'افزونه ۱۰ ماژوله صدور فاکتور رسمی، رهگیری مرسوله و اتصال به سپیدار برای ووکامرس با استاندارد تست نرم‌افزارهای بانکی.',
    },
  },
  {
    id: 'jobhunt',
    index: '08',
    route: '/work/jobhunt',
    category: 'ai',
    year: '2026',
    statusType: 'internal',
    status: { en: 'PRODUCTION KIT', fa: 'کیت مهندسی فعال' },
    name: { en: 'JobHunt Pipeline & Live AI Interpreter', fa: 'پایپ‌لاین شکار شغل و مترجم زنده صوتی' },
    role: { en: 'Creator', fa: 'طراح و سازنده' },
    previewImg: null,
    mobilePreviewImg: null,
    schematicType: 'jobhunt',
    liveUrl: null,
    repoUrl: null,
    stack: ['Python', '10 ATS Crawlers', 'CF Worker Relay', 'Truth Validator', 'Gemini Audio'],
    stackFa: ['پایتون', 'خزنده ۱۰ برد ATS', 'رله کلودفلر', 'ولیدیتور ضدتوهم', 'مترجم صوتی بلادرنگ'],
    headlineMetric: { en: '10 ATS Boards · 0 Fact Drift', fa: '۱۰ مرجع شغلی · صفر انحراف داده' },
    proof: {
      en: 'Greenhouse/Ashby/Lever crawlers · Anti-fabrication validator · 1-page A4 Chromium PDFs + audio rig',
      fa: 'پایش خودکار بردهای جهانی · قفل تطابق با بانک حقیقت · خروجی دقیق یک‌صفحه‌ای A4 و رگ صوتی',
    },
    summary: {
      en: 'Autonomous remote role discovery, zero-hallucination Chromium PDF resume tailoring, and an experimental PipeWire FA⇄EN real-time speech bridge.',
      fa: 'کشف خودکار موقعیت‌های ارشد ریموت، کامپایلر رزومه دقیق یک‌صفحه‌ای بدون دستکاری فکت‌ها و پل صوتی ترجمه هم‌زمان روی میکروفون مجازی.',
    },
  },
];

export const EXVORTA_WEB_SITES = [
  {
    id: 'spicevo',
    index: '01',
    name: 'Spicevo',
    url: 'https://spicevo.exvorta.com',
    previewImg: '/previews/spicevo.webp',
    mobilePreviewImg: '/previews/spicevo-mobile.webp',
    colors: ['#356A35', '#8F391A'],
    aura: 'rgba(143, 57, 26, 0.24)',
    locales: '5 Locales (EN / AR / FA / TR / ES)',
    localesFa: '۵ زبان زنده (EN / AR / FA / TR / ES)',
    typography: 'Cormorant Garamond + Plus Jakarta Sans + RTL Vazirmatn',
    corridor: { en: 'Khorasan & MENA → Europe / GCC', fa: 'خراسان و خاورمیانه ← اروپا و خلیج فارس' },
    sector: { en: 'Spices, Saffron & Botanicals Export', fa: 'صادرات زعفران، ادویه و گیاهان دارویی' },
    signature: {
      en: 'Interactive Spice Blender Ratio Instrument + Harvest Provenance Atlas + Bulk MOQ Quote Calculator',
      fa: 'ابزار تعاملی ترکیب نسبت ادویه‌ها + اطلس مبدأ برداشت + ماشین‌حساب استعلام تناژ عمده',
    },
    desc: {
      en: '8 verified routes live on Cloudflare Pages translating warm botanical craft into structured wholesale export specifications: ASTA color values, saffron crocin grades, mill mesh sizes, and instant container quotation builders.',
      fa: '۸ مسیر تاییدشده روی کلودفلر پیجز که اصالت زعفران و ادویه را به مشخصات دقیق صادراتی (عیار کروسین، سایز مش آسیاب و پیش‌فاکتور کانتینری) ترجمه می‌کند.',
    },
    specs: {
      en: '8/8 Routes HTTP 200 · Interactive Spice Blender · 5 Locales',
      fa: '۸ مسیر زنده ۲۰۰ · ترکیب‌گر تعاملی ادویه · ۵ زبان',
    },
    logoType: 'spicevo',
  },
  {
    id: 'nutave',
    index: '02',
    name: 'Nutave',
    url: 'https://nutave.exvorta.com',
    previewImg: '/previews/nutave.webp',
    mobilePreviewImg: '/previews/nutave-mobile.webp',
    colors: ['#392318', '#CA8627'],
    aura: 'rgba(202, 134, 39, 0.22)',
    locales: 'Multilingual B2B (EN / AR / FA)',
    localesFa: 'چندزبانه تجاری (EN / AR / FA)',
    typography: 'Editorial Display Serif + Precision Spec Tables',
    corridor: { en: 'Kerman & Damghan → Global Wholesale', fa: 'کرمان و دامغان ← بازارهای عمده جهانی' },
    sector: { en: 'Pistachios, Dried Fruits & Nuts House', fa: 'خانه صادرات پسته، خشکبار و مغزها' },
    signature: {
      en: 'Caliber Count Grading Matrix (18/20 to 28/30) + EU Aflatoxin Compliance Certs + Private-Label Pack Configurator',
      fa: 'ماتریس سایزبندی و انس پسته + گواهی‌های استاندارد آفلاتوکسین اروپا + پیکربندی بسته‌بندی لیبل اختصاصی',
    },
    desc: {
      en: 'Warm editorial commodities flagship built around tactile harvest photography, transparent kernel count grading, moisture/aflatoxin lab thresholds, and bulk vacuum-carton vs. jute-sack RFQ workflows.',
      fa: 'پرچم‌دار صادراتی خشکبار با تمرکز بر جداول دقیق انس‌بندی، استانداردهای آزمایشگاهی رطوبت و سفارش‌گیری عمده کارتن وکیوم یا کیسه.',
    },
    specs: {
      en: 'Build 12 Live · Harvest Grade Ledger · Private-Label RFQ',
      fa: 'بیلد ۱۲ زنده · جدول گریدبندی محصول · سفارش لیبل اختصاصی',
    },
    logoType: 'nutave',
  },
  {
    id: 'stonvi',
    index: '03',
    name: 'Stonvi',
    url: 'https://stonvi.exvorta.com',
    previewImg: '/previews/stonvi.webp',
    mobilePreviewImg: '/previews/stonvi-mobile.webp',
    colors: ['#2B4258', '#5C6E7A'],
    aura: 'rgba(43, 66, 88, 0.28)',
    locales: '5 Locales (RTL + LTR)',
    localesFa: '۵ زبان کامل (راست‌به‌چپ و چپ‌به‌راست)',
    typography: 'Playfair Display + Space Grotesk Architectural Grid',
    corridor: { en: 'Industrial Kilns → GCC & CIS Projects', fa: 'کارخانجات سنگ و سرامیک ← پروژه‌های خلیج فارس و CIS' },
    sector: { en: 'Architectural Ceramics & Natural Stone', fa: 'سرامیک‌های معماری و سنگ‌های ساختمانی' },
    signature: {
      en: 'Interactive "Lay the First Tile" Grid Stage + ISO 13006 Water-Absorption / R-Slip Spec Dossiers',
      fa: 'صحنه تعاملی چیدمان کاشی در صفحه اول + برگه‌های مهندسی جذب آب و مقاومت لغزش استاندارد ISO 13006',
    },
    desc: {
      en: 'Brutalist architectural showroom structured like a physical material binder for project specifiers and contractors: slab dimensions, pallet weight calculators, rectification tolerances, and sample box ordering.',
      fa: 'شوروم دیجیتال مصالح ساختمانی با نظم کاتالوگ‌های مهندسی معماری: ابعاد اسلب، محاسبه‌گر وزن پالت و کانتینر و ثبت سفارش جعبه نمونه.',
    },
    specs: {
      en: 'Interactive Tile Grid · ISO Spec Dossiers · 5 Locales',
      fa: 'گرید تعاملی کاشی · شناسنامه فنی ایزو · ۵ زبان',
    },
    logoType: 'stonvi',
  },
  {
    id: 'aurum',
    index: '04',
    name: 'Aurum',
    url: 'https://aurum.exvorta.com',
    previewImg: '/previews/aurum.webp',
    mobilePreviewImg: '/previews/aurum-mobile.webp',
    colors: ['#141820', '#D4AF37'],
    aura: 'rgba(212, 175, 55, 0.22)',
    locales: 'Multilingual Dubai Bullion',
    localesFa: 'چندزبانه · بازار شمش و فلزات دبی',
    typography: 'High-Contrast Sovereign Serif + Tabular Assay Mono',
    corridor: { en: 'Dubai DMCC / Gold Souk Institutional Desk', fa: 'میز معاملات نهادی شمش و فلزات گران‌بها در دبی' },
    sector: { en: 'Gold Bullion & Precious Metals (Dubai)', fa: 'تجارت شمش طلا و فلزات گران‌بها (دبی)' },
    signature: {
      en: '999.9 Fineness Assay Ledger + Institutional KYC Onboarding Flow + Brinks/Malca-Amit Vaulted Delivery Specs',
      fa: 'جدول عیارسنجی شمش ۹۹۹٫۹ + فرآیند پذیرش حقوقی KYC + مشخصات تحویل امن خزانه‌ای',
    },
    desc: {
      en: 'Sovereign dark-obsidian bullion house translating institutional precious-metals compliance, kilobar/tola bar specifications, refinery hallmarks, and armored logistics settlement.',
      fa: 'وب‌سایت سازمانی تجارت فلزات گران‌بها با طراحی مشکی و طلایی دقیق، جداول مشخصات شمش کیلویی و پروتکل‌های احراز هویت بانکی.',
    },
    specs: {
      en: 'Dubai Bullion Desk · 999.9 Assay Matrix · KYC Flow',
      fa: 'میز شمش دبی · جدول عیار ۹۹۹٫۹ · جریان پذیرش حقوقی',
    },
    logoType: 'aurum',
  },
  {
    id: 'meridian',
    index: '05',
    name: 'Meridian',
    url: 'https://meridian.exvorta.com',
    previewImg: '/previews/meridian.webp',
    mobilePreviewImg: '/previews/meridian-mobile.webp',
    colors: ['#0F172A', '#B48A3E'],
    aura: 'rgba(180, 138, 62, 0.22)',
    locales: '5 Locales Global Trade',
    localesFa: '۵ زبان · تجارت عمومی چندکریدوری',
    typography: 'Editorial Sans + Maritime Corridor Telemetry',
    corridor: { en: 'Jebel Ali Hub → East Africa, Levant & Central Asia', fa: 'هاب جبل‌علی دبی ← شرق آفریقا، شامات و آسیای میانه' },
    sector: { en: 'Dubai Multi-Division General Trading', fa: 'هلدینگ تجارت عمومی و صادرات مجدد دبی' },
    signature: {
      en: 'Multi-Division Commodity Index + Sea/Air Transit Corridor Matrix + Consolidated Container RFQ Desk',
      fa: 'ایندکس چنددپارتمانی کالاها + ماتریس خطوط حمل دریایی و هوایی + میز تجمیع بار کانتینری',
    },
    desc: {
      en: 'Flagship portal for multi-vertical Dubai general trading houses handling consolidated container loads across FMCG, construction materials, and industrial inputs.',
      fa: 'پرتال جامع شرکت‌های جنرال‌تریدینگ دبی برای مدیریت هم‌زمان چند دپارتمان کالایی و ارسال بارهای ترکیبی کانتینری.',
    },
    specs: {
      en: 'Multi-Corridor Router · Division Ledger · 5 Locales',
      fa: 'مسیریاب کریدورها · ساختار چنددپارتمانی · ۵ زبان',
    },
    logoType: 'meridian',
  },
  {
    id: 'vestra',
    index: '06',
    name: 'Vestra',
    url: 'https://vestra.exvorta.com',
    previewImg: '/previews/vestra.webp',
    mobilePreviewImg: '/previews/vestra-mobile.webp',
    colors: ['#1E293B', '#9F1239'],
    aura: 'rgba(159, 18, 57, 0.24)',
    locales: 'Multilingual Apparel & Textile',
    localesFa: 'چندزبانه · منسوجات، پارچه و پوشاک عمده',
    typography: 'Runway Editorial Serif + Technical GSM Spec Grid',
    corridor: { en: 'Regional Mills → Retail Chains & Uniform Buyers', fa: 'کارخانجات نساجی ← زنجیره‌های خرده‌فروشی و سفارشات سازمانی' },
    sector: { en: 'Wholesale Textiles & Woven Apparel House', fa: 'خانه عمده‌فروشی منسوجات و تولید پوشاک' },
    signature: {
      en: 'Fabric GSM & Weave Density Inspector + Roll/Bale MOQ Tier Matrix + OEM Cut-and-Sew Brief Builder',
      fa: 'بررسی‌کننده تراکم بافت و گرماژ پارچه (GSM) + جدول پله‌ای تیراژ طاقه + فرم سفارش تولید OEM',
    },
    desc: {
      en: 'Editorial textile trading showcase uniting fashion-house art direction with hard mill engineering data: yarn counts, shrinkage tolerances, OEKO-TEX compliance, and OEM lead-time schedules.',
      fa: 'ترکیب کارگردانی هنری دنیای مد با داده‌های سخت مهندسی نساجی: نمره نخ، گرماژ، تلرانس آبرفت و زمان‌بندی تولید سفارشی.',
    },
    specs: {
      en: 'GSM Weave Specs · OEM Production Tiers · Edge Fast',
      fa: 'مشخصات فنی GSM · پلن‌های تولید OEM · مستقر روی لبه',
    },
    logoType: 'vestra',
  },
];

export const PIPELINE_STAGES = [
  {
    id: 'refs',
    num: '01',
    role: 'CURATOR',
    roleFa: 'تحقیق مرجع',
    title: { en: 'Mobbin Research & Scoped Blueprint', fa: 'تحقیق مرجع Mobbin و بلوپرینت دقیق' },
    desc: {
      en: 'Zero designing from memory or generic AI templates. Every product starts by locking 10–20 real shipped references into a Mobbin collection and writing `docs/blueprint.md` with explicit non-negotiables.',
      fa: 'هیچ طرحی از حافظه یا قالب‌های کلیشه‌ای زده نمی‌شود؛ هر پروژه با ثبت ۱۰ تا ۲۰ رفرنس واقعی در Mobbin و نگارش سند بلوپرینت با مرزهای غیرقابل‌مذاکره آغاز می‌گردد.',
    },
    terminal: `$ mobbin search_sections "developer platform architecture diagram" -> 20 keepers locked
$ cat docs/AWWWARDS_V2_BLUEPRINT.md
> NON-NEGOTIABLES: 13 pre-rendered routes | 0 dead ends | YekanBakh + IRANYekanX VF | 0px overflow`,
  },
  {
    id: 'architect',
    num: '02',
    role: 'ARCHITECT',
    roleFa: 'معماری داده',
    title: { en: 'Typed Data Contracts & Truth-Bank Lock', fa: 'قراردادهای داده و قفل بانک حقیقت' },
    desc: {
      en: 'Define bilingual data schemas, route manifests, and named CSS design tokens upfront — cross-checked against `80-owner-resume.md` and project truth files so downstream builders never drift.',
      fa: 'تعریف ساختار داده‌های دوزبانه، مانیفست مسیرها و توکن‌های طراحی پیش از کدنویسی و تطبیق کامل با بانک حقیقت مالک برای حذف هرگونه تناقض.',
    },
    terminal: `$ node scripts/check-truth-contracts.mjs
> Routes verified: 13 isomorphic pages (/, /work/*, /exvorta-web, /pipeline, /resume, /hire)
> Truth-bank audit (80-owner-resume.md): 48,000+ leads · 21 countries · async-first [0 DRIFT]`,
  },
  {
    id: 'builders',
    num: '03',
    role: 'BUILDERS',
    roleFa: 'اجرای موازی',
    title: { en: 'Parallel Worktree Builders & Low-RAM SSG', fa: 'ساخت موازی در Worktree و بیلد فوق‌سبک' },
    desc: {
      en: 'Specialized builder agents implement isolated slices (`git worktree` + Hermes/Antigravity pools) compiling 13 static HTML routes + ES2024 modules in under 500ms using <45 MB RAM.',
      fa: 'ایجنت‌های سازنده در ورک‌تری‌های مجزای گیت ماژول‌ها را پیاده می‌کنند و موتور بیلد ایزومورفیک، هر ۱۳ مسیر را در کمتر از نیم ثانیه با مصرف رم زیر ۴۵ مگابایت می‌سازد.',
    },
    terminal: `$ node scripts/build.mjs --portfolio-url https://hamidmehrani.pages.dev
> Pre-rendered 13 static routes + sitemap.xml + _headers
> Memory peak: 41 MB RSS | Zero runtime npm bloat | View Transitions wired`,
  },
  {
    id: 'qa',
    num: '04',
    role: 'VISUAL CRITIC',
    roleFa: 'ممیز مستقل',
    title: { en: 'Playwright Rect Gates & Independent Critic', fa: 'گیت Playwright و ممیزی ایجنت مستقل' },
    desc: {
      en: 'The builder never certifies its own UI. Headless Chromium measures every route at 1440×900 and 390×844 (`EN` & `FA RTL`) for 0px overflow and 0 console errors, followed by a separate critic subagent.',
      fa: 'سازنده هرگز کار خودش را تایید نمی‌کند؛ اسکریپت کرومیوم تمام برگه‌ها را در ۱۴۴۰px و ۳۹۰px (انگلیسی و فارسی) اندازه می‌گیرد و سپس یک ساب‌ایجنت مستقل اسکرین‌شات‌ها را ممیزی می‌کند.',
    },
    terminal: `$ node scripts/verify-live.mjs https://hamidmehrani.pages.dev
> Swept routes (/, /work/exvorta, /exvorta-web, /pipeline, /resume, /hire) x [1440px, 390px] x [EN, FA]
> scrollWidth === innerWidth (overflowPx = 0) | consoleErrors = 0 | Critic Verdict -> GO`,
  },
  {
    id: 'land',
    num: '05',
    role: 'EDGE LAND',
    roleFa: 'استقرار لبه',
    title: { en: 'Atomic Cloudflare Edge Deploy & Vault Sync', fa: 'دیپلوی اتمیک کلودفلر و ثبت در والت' },
    desc: {
      en: 'Bundles deploy atomically to Cloudflare Pages global edge with immutable asset caching, live `curl -I` HTTP/2 200 checks on deep routes, GitHub push, and Obsidian Vault synchronization.',
      fa: 'انتشار اتمیک روی شبکه جهانی Cloudflare Pages، تست زنده کد ۲۰۰ روی مسیرهای داخلی، پوش به گیت‌هاب و ثبت مستندات در والت.',
    },
    terminal: `$ wrangler pages deploy dist --project-name hamidmehrani
> ✨ Uploaded 13 pre-rendered routes + 18 WebP previews + 2 VF fonts to Cloudflare Edge
> curl -I https://hamidmehrani.pages.dev/work/exvorta -> HTTP/2 200 OK`,
  },
];

export const RESUME_TRACKS = {
  all: {
    id: 'all',
    label: { en: 'Founder & Full Archive', fa: 'نمای کامل بنیان‌گذار' },
    headline: {
      en: 'AI SYSTEMS ARCHITECT · FOUNDER @ EXVORTA · FULL-STACK & AUTOMATION BUILDER',
      fa: 'معمار سیستم‌های AI · بنیان‌گذار Exvorta · سازنده سرتاسری وب و اتوماسیون',
    },
    summary: {
      en: '8 years in web — 5 years freelance (e-commerce, WordPress, SEO), 2 years in-house, now Founder at Exvorta. I ship production platforms, B2B automation engines, and high-craft multilingual web properties by directing specialized AI agent teams behind deterministic quality gates. Remote-first and async-native across time zones (all communication in clear written chat/email & documented work samples).',
      fa: '۸ سال سابقه مستمر در وب — ۵ سال فریلنسری (فروشگاه اینترنتی، وردپرس، سئو)، ۲ سال درون‌سازمانی و اکنون بنیان‌گذار Exvorta. پلتفرم‌های SaaS، موتورهای اتوماسیون B2B و وب‌سایت‌های چندزبانه تراز جهانی را با هدایت تیم‌های ایجنت هوشمند و گیت‌های کنترل کیفیت تولید می‌کنم. همکاری ریموت و Async با مستندسازی مکتوب دقیق و تحویل نمونه کار عملی.',
    },
    highlightRoles: ['exvorta', 'audit', 'leadvium', 'firoozehland', 'samiansoft'],
  },
  ai: {
    id: 'ai',
    label: { en: 'Track A · AI Automation', fa: 'مسیر A · اتوماسیون AI' },
    headline: {
      en: 'AI AUTOMATION ENGINEER · I SHIP PRODUCTION SYSTEMS BY DIRECTING AI AGENT TEAMS',
      fa: 'مهندس اتوماسیون هوش مصنوعی · تحویل سیستم‌های پروداکشن با هدایت تیم‌های ایجنت',
    },
    summary: {
      en: 'I run an agent-driven engineering pipeline (architect → builder → QA → reviewer, automated quality gates, one-command production deploys) instead of typing every line. It has shipped a live SaaS platform (exvorta.com), a 48,000+ B2B lead engine across 21 countries, and a 7-stage automated website audit tool. Remote-first, strong async writer (chat/email/specs).',
      fa: 'به‌جای کدنویسی خط‌به‌خط دستی، خط تولید چند-ایجنتی (معمار ← سازنده ← QA ← بازبین) را با گیت‌های تست خودکار راهبری می‌کنم. خروجی این معماری: پلتفرم زنده SaaS، موتور پردازش +۴۸٬۰۰۰ لید در ۲۱ کشور و ابزار ۷ مرحله‌ای ممیزی خودکار وب‌سایت است.',
    },
    highlightRoles: ['exvorta', 'audit', 'leadvium', 'builder'],
  },
  web: {
    id: 'web',
    label: { en: 'Track B · Web & Next.js', fa: 'مسیر B · وب و Next.js' },
    headline: {
      en: 'WEB DEVELOPER — WORDPRESS & NEXT.JS · SEO-DRIVEN, AI-ASSISTED DELIVERY',
      fa: 'توسعه‌دهنده ارشد وب Next.js و WordPress · سئومحور و مستقر روی لبه',
    },
    summary: {
      en: '8 years building and owning production websites end-to-end: WordPress, WooCommerce, Next.js 15, Payload CMS, technical SEO, Core Web Vitals, content pipelines, and Cloudflare edge operations. Live samples include exvorta.com, firoza.ir (239 static pages in 10 locales), hamesu.ir, and 6 multilingual trade houses.',
      fa: '۸ سال طراحی، پیاده‌سازی و مالکیت فنی کامل وب‌سایت‌ها: وردپرس و ووکامرس، Next.js 15، Payload CMS، سئو تکنیکال، بهینه‌سازی Core Web Vitals و استقرار روی کلودفلر. نمونه‌های زنده شامل exvorta.com، firoza.ir (در ۱۰ زبان)، hamesu.ir و ۶ وب‌سایت صادراتی است.',
    },
    highlightRoles: ['exvorta', 'firoozehland', 'samiansoft', 'freelance'],
  },
  growth: {
    id: 'growth',
    label: { en: 'Track C · Growth & SEO', fa: 'مسیر C · رشد و سئو' },
    headline: {
      en: 'TECHNICAL SEO & AI-DRIVEN B2B GROWTH SYSTEMS ENGINEER',
      fa: 'معمار سیستم‌های رشد B2B و متخصص سئو تکنیکال چندزبانه',
    },
    summary: {
      en: 'Combining technical SEO, multilingual search architecture, and conversion diagnostics with custom engineering: I build the growth machines directly — processing 48,000+ B2B leads across 21 countries and compiling automated 14-page Lighthouse/UX proposal PDFs.',
      fa: 'ترکیب عمیق سئو تکنیکال چندزبانه با توان ساخت ابزارهای اختصاصی رشد: از طراحی موتور پردازش +۴۸٬۰۰۰ لید B2B در ۲۱ کشور تا ساخت کامپایلر خودکار پروپوزال‌های ۱۴ صفحه‌ای ممیزی سایت.',
    },
    highlightRoles: ['leadvium', 'audit', 'firoozehland', 'samiansoft'],
  },
};

export const EXPERIENCE = [
  {
    id: 'exvorta',
    yearShort: '2026',
    linkedVenture: 'exvorta',
    role: { en: 'Founder & Systems Architect', fa: 'بنیان‌گذار و معمار سیستم‌ها' },
    company: { en: 'Exvorta (exvorta.com)', fa: 'Exvorta (exvorta.com)' },
    period: { en: 'Jul 2026 – Present · Remote', fa: 'جولای ۲۰۲۶ تا اکنون · ریموت' },
    bullets: {
      en: [
        'Launched exvorta.com — trade-file compliance SaaS (Next.js 15, Payload CMS, PostgreSQL, Cloudflare Pages) with crypto-only settlement (NOWPayments + BTCPay, USDT on TRON) and 1,152 passing Vitest assertions.',
        'Engineered Exvorta BOS-V2: Executive Trade Copilot, 5,600+-subheading WCO HS 2022 lookup, 7-Incoterm reverse-margin quote solver, Gotenberg 4-doc compiler, and SHA-256 Bank Deal Dossiers.',
        'Built and deployed 6 multilingual B2B commodity flagships under Exvorta Web (Spicevo, Nutave, Stonvi, Aurum, Meridian, Vestra) on Cloudflare Pages.',
      ],
      fa: [
        'راه‌اندازی <bdi dir="ltr">exvorta.com</bdi> به‌عنوان سیستم‌عامل کامپلاینس اسناد تجارت <bdi dir="ltr">(Next.js 15, Payload CMS, PostgreSQL, Cloudflare Pages)</bdi> با تسویه کریپتو و ۱٬۱۵۲ تست خودکار سبز.',
        'مهندسی کامل هسته پرونده تجاری: دستیار هوشمند مدیرعامل، جستجوی ۵٬۶۰۰+ کد تعرفه گمرکی، حل‌کننده معکوس حاشیه سود روی ۷ اینکوترمز و صدور هم‌زمان ۴ سند صادراتی.',
        'طراحی و استقرار ۶ وب‌سایت پرچم‌دار صادراتی چندزبانه در زیرمجموعه <bdi dir="ltr">Exvorta Web</bdi> روی شبکه لبه کلودفلر.',
      ],
    },
  },
  {
    id: 'audit',
    yearShort: '2026',
    linkedVenture: 'audit',
    role: { en: 'Creator', fa: 'طراح و سازنده' },
    company: { en: 'Website Audit Engine', fa: 'Website Audit Engine' },
    period: { en: 'Aug 2026 – Present · Remote', fa: 'آگوست ۲۰۲۶ تا اکنون · ریموت' },
    bullets: {
      en: [
        'Engineered a 7-stage automated inspection pipeline (Puppeteer, Lighthouse, axe-core, security headers, SEO, AI vision critique) generating 14-page branded client proposal PDFs in minutes (83/83 pipeline tests passing).',
      ],
      fa: [
        'طراحی پایپ‌لاین ۷ مرحله‌ای ممیزی خودکار وب‌سایت <bdi dir="ltr">(Puppeteer, Lighthouse, axe-core)</bdi> و تولید پروپوزال PDF چهارده صفحه‌ای برندشده در چند دقیقه با ۸۳ تست رگرسیون سبز.',
      ],
    },
  },
  {
    id: 'leadvium',
    yearShort: '2026',
    linkedVenture: 'leadvium',
    role: { en: 'Creator & AI Architect', fa: 'طراح و معمار سیستم AI' },
    company: { en: 'Leadvium & Outreach Studio', fa: 'Leadvium & Outreach Studio' },
    period: { en: 'Jun 2026 – Present · Remote', fa: 'ژوئن ۲۰۲۶ تا اکنون · ریموت' },
    bullets: {
      en: [
        'Architected a 30+ module Python B2B discovery & qualification engine across 85 query matrices and 21 countries, processing 48,000+ leads (~15k/month capacity) with AI reply triage and sender-reputation guards.',
        'Shipped Iran B2B Pishro AI (12-page read-only analytics cockpit at 12.64ms p95) and Exvorta Outreach Studio (9-signal redesign scanner, Unibox CRM, hard root-domain & outbound freeze locks).',
      ],
      fa: [
        'معماری موتور پایتونی کشف و امتیازدهی لید با بیش از ۳۰ ماژول در ۸۵ ماتریس جستجو و ۲۱ کشور و پردازش بیش از ۴۸٬۰۰۰ لید B2B.',
        'توسعه زیرسیستم پیشرو ویژه بازار ایران و پلتفرم داخلی <bdi dir="ltr">Outreach Studio</bdi> مجهز به اسکنر ۹گانه بازطراحی وب‌سایت و قفل سخت‌گیرانه حفاظت از دامنه (در فریز عملیاتی از ۶ نوامبر).',
      ],
    },
  },
  {
    id: 'builder',
    yearShort: '2025–26',
    linkedVenture: 'hamesu',
    role: { en: 'Independent Product & Systems Builder', fa: 'سازنده مستقل محصول و پلتفرم' },
    company: { en: 'Independent R&D (Hamesu / Cvly / Daftaryar)', fa: 'توسعه مستقل پلتفرم‌ها' },
    period: { en: 'Nov 2025 – Jun 2026 · Remote', fa: 'نوامبر ۲۰۲۵ تا ژوئن ۲۰۲۶ · ریموت' },
    bullets: {
      en: [
        'Prototyped the automation engines behind Leadvium, Website Audit Tool, and Exvorta’s multi-agent orchestration workflow; initiated core architectures for Hamesu, Cvly, and the Yaar WordPress plugin suite.',
      ],
      fa: [
        'نمونه‌سازی هسته اولیه ابزارهای اتوماسیون، پی‌ریزی خط تولید چند-ایجنتی Exvorta و آغاز معماری پلتفرم‌های همه‌سو، سی‌ولی و خانواده افزونه‌های وردپرس.',
      ],
    },
  },
  {
    id: 'firoozehland',
    yearShort: '2024–25',
    linkedVenture: 'firoza',
    role: { en: 'Web Developer & Technical Owner', fa: 'توسعه‌دهنده وب و مالک فنی' },
    company: { en: 'Firoozehland (firoza.ir)', fa: 'فیروزه‌لند (firoza.ir)' },
    period: { en: 'Apr 2024 – Oct 2025 · Full-Time', fa: 'آوریل ۲۰۲۴ تا اکتبر ۲۰۲۵ · تمام‌وقت' },
    bullets: {
      en: [
        'Owned the company’s web presence end-to-end including firoza.ir (Nishapur turquoise export): engineering, content pipeline direction, publishing, and cross-border B2B inquiry operations.',
        'Led technical SEO architecture, 10-locale static performance migration, and Core Web Vitals optimization.',
      ],
      fa: [
        'مالکیت فنی سرتاسری وب‌پرزنس شرکت از جمله سایت صادراتی <bdi dir="ltr">firoza.ir</bdi>: مهندسی، هدایت خط تولید محتوا، انتشار و عملیات وب.',
        'رهبری سئو تکنیکال، بهینه‌سازی سرعت <bdi dir="ltr">Core Web Vitals</bdi> و زیرساخت جذب مشتریان عمده خارجی.',
      ],
    },
  },
  {
    id: 'samiansoft',
    yearShort: '2023–24',
    linkedVenture: 'daftaryar',
    role: { en: 'Software & Web Developer', fa: 'توسعه‌دهنده نرم‌افزار وب' },
    company: { en: 'SamianSoft', fa: 'سامیان‌سافت (SamianSoft)' },
    period: { en: 'Mar 2023 – Mar 2024 · Full-Time', fa: 'مارس ۲۰۲۳ تا مارس ۲۰۲۴ · تمام‌وقت' },
    bullets: {
      en: [
        'Engineered a production catalog synchronization plugin matching and syncing thousands of SKUs deterministically with the company platform.',
        'Owned technical SEO, Core Web Vitals across company web properties, and technical/marketing documentation.',
      ],
      fa: [
        'طراحی و ساخت افزونه عملیاتی همگام‌سازی خودکار کاتالوگ هزاران قلم کالا بر پایه تطبیق دقیق کد <bdi dir="ltr">SKU</bdi> با پلتفرم شرکت.',
        'مالکیت سئو تکنیکال، ارتقای شاخص‌های <bdi dir="ltr">Core Web Vitals</bdi> و نگارش مستندات فنی و محصولی.',
      ],
    },
  },
  {
    id: 'freelance',
    yearShort: '2018–23',
    linkedVenture: null,
    role: { en: 'Freelance Full-Stack Web Developer', fa: 'توسعه‌دهنده مستقل وب و فروشگاه اینترنتی' },
    company: { en: '5 Years End-to-End Client Delivery', fa: '۵ سال اجرای پروژه‌های تجاری مشتریان' },
    period: { en: 'Jan 2018 – Feb 2023 · Remote', fa: 'ژانویه ۲۰۱۸ تا فوریه ۲۰۲۳ · ریموت' },
    bullets: {
      en: [
        'Five years designing, building, optimizing, and operating custom e-commerce storefronts, WordPress/WooCommerce systems, and technical SEO campaigns from brief to handoff.',
      ],
      fa: [
        'پنج سال طراحی، پیاده‌سازی، سئو تکنیکال و تحویل کامل ده‌ها وب‌سایت فروشگاهی و سیستم‌های وردپرس و ووکامرس برای مشتریان.',
      ],
    },
  },
];

export const SKILLS_MATRIX = [
  {
    title: { en: 'AI & Multi-Agent Orchestration', fa: 'هوش مصنوعی و هدایت ایجنت‌ها' },
    items: ['Multi-Agent Pipelines', 'Claude API / OpenAI API', 'Python (30+ Modules)', 'Prompt & Context Architecture', 'Deterministic Fact Validators', 'Autonomous Scraping & Triage'],
    itemsFa: ['خط تولید چند-ایجنتی', 'Claude API / OpenAI API', 'پایتون (+۳۰ ماژول)', 'مهندسی پرامپت و کانتکست', 'ولیدیتورهای قطعی ضدتوهم', 'خزنده‌ها و تریاژ هوشمند'],
  },
  {
    title: { en: 'Frontend, Design Systems & CMS', fa: 'فرانت‌اند، سیستم طراحی و CMS' },
    items: ['Next.js 15 / 16', 'Payload CMS', 'Medusa.js Commerce', 'WordPress & WooCommerce Blocks', 'ES2024, Canvas & View Transitions', 'Multilingual RTL / LTR Typography'],
    itemsFa: ['Next.js 15 / 16', 'Payload CMS', 'موتور تجارت Medusa.js', 'وردپرس و چک‌اوت بلوکی ووکامرس', 'ES2024، Canvas و انیمیشن وب', 'تایپوگرافی چندزبانه RTL و LTR'],
  },
  {
    title: { en: 'Verification, Data & Edge Infra', fa: 'تست خودکار، داده و زیرساخت لبه' },
    items: ['Playwright & Puppeteer Gates', 'Lighthouse & axe-core', 'PostgreSQL (RLS) & SQLite WAL', 'Cloudflare Pages & Workers', 'Docker, Linux systemd & Caddy', 'Vitest, PHPUnit & Pytest'],
    itemsFa: ['گیت‌های بصری Playwright', 'Lighthouse و axe-core', 'PostgreSQL RLS و SQLite WAL', 'Cloudflare Pages و Workers', 'Docker، لینوکس systemd و Caddy', 'Vitest، PHPUnit و Pytest'],
  },
  {
    title: { en: 'Product, B2B Trade & SEO', fa: 'محصول، تجارت B2B و سئو' },
    items: ['Technical SEO & Schema', 'Core Web Vitals (100/100)', 'B2B Trade Compliance (PINT-AE / HS)', 'Automated PDF Proposal Engines', 'Zero-Dead-End Conversion UX', 'Async Technical Specs & PRs'],
    itemsFa: ['سئو تکنیکال و JSON-LD', 'امتیاز کامل Core Web Vitals', 'کامپلاینس اسناد تجاری بین‌الملل', 'موتورهای تولید خودکار PDF', 'تجربه کاربری بدون بن‌بست', 'مستندنویسی دقیق و همکاری Async'],
  },
];
