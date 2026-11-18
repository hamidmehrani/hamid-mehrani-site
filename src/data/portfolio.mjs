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

export const UI_COPY = {
  en: {
    pageTitle: 'Hamid Mehrani — AI Systems Architect & Founder @ Exvorta',
    skip: 'Skip to main content',
    brandSub: 'AI Systems Architect · Founder @ Exvorta',
    telemetryStatus: 'Remote · Async',
    nav: {
      ventures: 'Ventures',
      exvortaWeb: 'Exvorta Web',
      pipeline: 'Agent Pipeline',
      resume: 'Career & CV',
      contact: 'Contact',
    },
    cmdBtn: 'Command',
    heroKicker: 'SYSTEMS OBSERVATORY · PORTFOLIO ARCHIVE 2018 — 2026',
    heroTitleBefore: 'Shipping ',
    heroTitleSerif: 'production systems',
    heroTitleAfter: ' & global brand worlds by directing AI agent teams.',
    heroThesis:
      '8 years of full-stack web engineering evolved into a disciplined multi-agent production pipeline: architectural blueprints, parallel agent execution, independent Playwright visual gates, and one-command edge deploys.',
    heroCtaPrimary: 'Explore Shipped Systems',
    heroCtaSecondary: 'Exvorta Web (6 Live Sites)',
    heroCtaResume: 'Download Resume PDF',
    stats: [
      { value: '8 Years', label: 'Web & Product Craft', sub: '2018 – 2026 · End-to-End' },
      { value: '14', label: 'Shipped Systems & Sites', sub: 'SaaS, Engines & Trade Houses' },
      { value: '48,000+', label: 'B2B Leads Processed', sub: 'Across 21 Countries · 30+ Modules' },
      { value: '397/397', label: 'Automated Gate Standard', sub: 'Independent QA & Visual Proof' },
    ],
    ch1Index: 'CHAPTER 01 — FLAGSHIP SYSTEMS',
    ch1TitleA: 'Ventures & ',
    ch1TitleSerif: 'Production Engines',
    ch1Lead:
      'Every product built to run real operations: trade-file compliance SaaS, multi-tenant commerce, automated lead intelligence, and zero-defect verification harnesses.',
    filters: [
      { id: 'all', label: 'All Systems' },
      { id: 'saas', label: 'SaaS & Platforms' },
      { id: 'ai', label: 'AI & Automation Engines' },
      { id: 'commerce', label: 'Commerce & Plugins' },
    ],
    viewExhibition: 'Exhibition Cards',
    viewLedger: 'Index Ledger',
    inspectBtn: 'Inspect Architecture',
    liveVisit: 'Open Live Site',
    repoVisit: 'GitHub Repo',
    ledgerHeaders: ['Year', 'System', 'Role', 'Core Stack', 'Verified Proof', 'Inspect'],
    ch2Index: 'CHAPTER 02 — EXVORTA WEB STUDIO',
    ch2TitleA: 'Six Global ',
    ch2TitleSerif: 'B2B Trade Houses',
    ch2Lead:
      'Powered by a unified Next.js + Payload multilingual exporter architecture and edge-deployed to Cloudflare Pages — bespoke brand systems engineered for global commodities.',
    engineBannerTitle: 'Reusable Multilingual Export Engine · Cloudflare Pages Edge',
    engineBannerDesc:
      'Every trade house merges bespoke typography, cultural RTL/LTR precision (up to 5 languages), interactive product configurators, and structured RFQ document workflows.',
    livePreviewBtn: 'Interactive Preview',
    desktopLabel: 'Desktop 1440px',
    mobileLabel: 'Mobile 390px',
    ch3Index: 'CHAPTER 03 — PLAYABLE METHODOLOGY',
    ch3TitleA: 'The Autonomous ',
    ch3TitleSerif: 'Agent Pipeline',
    ch3Lead:
      'I do not hand-type boilerplate. I orchestrate specialized architect, builder, visual QA, and audit agents behind deterministic quality gates.',
    autoCyclePlay: 'Auto-Cycle Pipeline',
    autoCyclePause: 'Pause Cycle',
    ch4Index: 'CHAPTER 04 — DAYLIGHT ARCHITECTURAL FOLIO',
    ch4TitleA: '8-Year Career Ledger & ',
    ch4TitleSerif: 'Multi-Track CV',
    ch4Lead:
      'Switch perspective lenses across AI orchestration, full-stack web engineering, and growth systems — or download the tailored 1-page A4 resumes directly.',
    downloadTitle: 'Export Verified 1-Page Resumes',
    downloadTrackA: 'Track A · AI Automation Engineer (PDF)',
    downloadTrackB: 'Track B · Web Developer Next.js / WP (PDF)',
    printBtn: 'Print Clean Folio (A4)',
    factBankStamp: '2018 — 2026 · VERIFIED FACT BANK',
    skillsTitle: 'Verified Technical Architecture',
    footerIndex: 'OBSERVATORY CLOSE · ASYNC COLLABORATION',
    footerHeading: 'Available for remote senior builds, AI agent pipelines & bespoke web architecture.',
    footerNote:
      'Remote-first and async-native across time zones. All project metrics and career records on this site map directly to live deployed endpoints and verified technical artifacts.',
    copyEmailBtn: 'Copy hamid@exvorta.com',
    copiedToast: 'Copied hamid@exvorta.com to clipboard',
    footerColWork: 'LIVE SYSTEMS',
    footerColConnect: 'NETWORK & PROFILES',
    footerRepoLink: 'Exvorta Public Repo ↗',
    footerPdfA: 'Resume · AI Engineer (PDF) ↓',
    footerPdfB: 'Resume · Web Dev (PDF) ↓',
    footerCopyLeft: '© 2026 Hamid Mehrani · Tehran / Remote Any Time Zone',
    footerCopyRight: 'Built with Pure ES2024 + Canvas + Cloudflare Pages Edge',
    cmdLangTitle: 'Switch Language → فارسی (RTL)',
    cmdLangMeta: 'Language / Direction',
    cmdPdfMeta: 'PDF A4',
    cmdPlaceholder: 'Jump to any system, Exvorta Web site, resume track, or action...',
    cmdEmpty: 'No matching systems or commands found.',
    dossierLabels: {
      overview: 'System Overview',
      architecture: 'Architecture & Delivery',
      verified: 'Verified Production Metrics',
      stack: 'Stack & Infrastructure',
    },
  },
  fa: {
    pageTitle: 'حمید مهرآنی — معمار سیستم‌های AI و بنیان‌گذار Exvorta',
    skip: 'پرش به محتوای اصلی',
    brandSub: 'معمار سیستم‌های AI · بنیان‌گذار Exvorta',
    telemetryStatus: 'ریموت · Async',
    nav: {
      ventures: 'سیستم‌ها و محصولات',
      exvortaWeb: 'آژانس Exvorta Web',
      pipeline: 'خط تولید ایجنت‌ها',
      resume: 'رزومه و سوابق',
      contact: 'تماس',
    },
    cmdBtn: 'جستجو',
    heroKicker: 'رصدخانه سیستم‌ها · آرشیو پورتفولیو ۲۰۱۸ تا ۲۰۲۶',
    heroTitleBefore: 'ساخت ',
    heroTitleSerif: 'پلتفرم‌های پروداکشن',
    heroTitleAfter: ' و وب‌سایت‌های تراز جهانی با رهبری تیم‌های ایجنت هوشمند.',
    heroThesis:
      '۸ سال مهندسی تمام‌عیار وب که به یک خط تولید چند-ایجنتی تبدیل شده است: از نقشه معماری و اجرای موازی ایجنت‌ها تا گیت‌های مستقل Playwright و دیپلوی یک‌فرمانی روی لبه کلودفلر.',
    heroCtaPrimary: 'مشاهده سیستم‌های ساخته‌شده',
    heroCtaSecondary: 'گالری Exvorta Web (۶ سایت زنده)',
    heroCtaResume: 'دانلود رزومه PDF',
    stats: [
      { value: '۸ سال', label: 'مهندسی وب و محصول', sub: '۲۰۱۸ تا ۲۰۲۶ · مالکیت سرتاسری' },
      { value: '۱۴', label: 'سیستم و وب‌سایت زنده', sub: 'SaaS، موتورهای AI و خانه‌های تجارت' },
      { value: '+۴۸,۰۰۰', label: 'لید B2B پردازش‌شده', sub: 'در ۲۱ کشور · +۳۰ ماژول پایتون' },
      { value: '۳۹۷/۳۹۷', label: 'استاندارد گیت خودکار', sub: 'تست مستقل و بررسی چشمی واقعی' },
    ],
    ch1Index: 'فصل ۰۱ — سیستم‌ها و موتورهای پروداکشن',
    ch1TitleA: 'محصولات اصلی و ',
    ch1TitleSerif: 'موتورهای هوشمند',
    ch1Lead:
      'هر سیستم برای عملیات واقعی ساخته شده است: پلتفرم اسناد تجارت بین‌الملل، فروشگاه‌ساز چندمستاجره، موتور لیدجن در ۲۱ کشور و گیت‌های وریفای بدون خطا.',
    filters: [
      { id: 'all', label: 'همه سیستم‌ها' },
      { id: 'saas', label: 'SaaS و پلتفرم‌ها' },
      { id: 'ai', label: 'هوش مصنوعی و اتوماسیون' },
      { id: 'commerce', label: 'تجارت الکترونیک و افزونه' },
    ],
    viewExhibition: 'کارت‌های نمایشگاهی',
    viewLedger: 'جدول شاخص سیستم‌ها',
    inspectBtn: 'بررسی معماری',
    liveVisit: 'مشاهده سایت زنده',
    repoVisit: 'مخزن گیت‌هاب',
    ledgerHeaders: ['سال', 'سیستم', 'نقش', 'استک فنی', 'شاخص ورفای‌شده', 'عملیات'],
    ch2Index: 'فصل ۰۲ — استودیو وب Exvorta',
    ch2TitleA: 'شش وب‌سایت تجاری ',
    ch2TitleSerif: 'صادراتی جهانی',
    ch2Lead:
      'ساخته‌شده روی موتور چندزبانه Next.js و Payload CMS و مستقر روی Cloudflare Pages؛ هر برند با هویت بصری اختصاصی، اینتراکشن‌های دقیق و فرم‌های استعلام B2B.',
    engineBannerTitle: 'موتور چندزبانه صادراتی · مستقر روی لبه Cloudflare Pages',
    engineBannerDesc:
      'ترکیب تایپوگرافی اختصاصی، پشتیبانی دقیق راست‌به‌چپ فارسی و عربی تا ۵ زبان، پیکربندی تعاملی محصول و جریان استاندارد درخواست پیش‌فاکتور.',
    livePreviewBtn: 'پیش‌نمایش زنده',
    desktopLabel: 'دسکتاپ ۱۴۴۰px',
    mobileLabel: 'موبایل ۳۹۰px',
    ch3Index: 'فصل ۰۳ — متدولوژی تعاملی اجرا',
    ch3TitleA: 'خط تولید خودکار ',
    ch3TitleSerif: 'تیم‌های ایجنت',
    ch3Lead:
      'کد تکراری نمی‌نویسم؛ ایجنت‌های متخصص معمار، سازنده، QA بصری و بازبین را پشت گیت‌های سخت‌گیرانه کیفیت هدایت می‌کنم.',
    autoCyclePlay: 'چرخش خودکار مراحل',
    autoCyclePause: 'توقف چرخش',
    ch4Index: 'فصل ۰۴ — دفتر فنی روز روشن',
    ch4TitleA: 'کارنامه ۸ ساله و ',
    ch4TitleSerif: 'رزومه چندمسیره',
    ch4Lead:
      'لنز تخصصی رزومه را بین اتوماسیون AI، توسعه وب یا رشد مبتنی بر داده جابه‌جا کنید و نسخه PDF یک‌صفحه‌ای و استاندارد هر مسیر را مستقیم دریافت کنید.',
    downloadTitle: 'دریافت رزومه‌های رسمی یک‌صفحه‌ای',
    downloadTrackA: 'مسیر A · مهندس اتوماسیون AI (PDF)',
    downloadTrackB: 'مسیر B · توسعه‌دهنده وب Next.js و WP (PDF)',
    printBtn: 'چاپ نسخه تمیز A4',
    factBankStamp: '۲۰۱۸ تا ۲۰۲۶ · بانک اطلاعات ورفای‌شده',
    skillsTitle: 'معماری فنی و ابزارها',
    footerIndex: 'پایان رصدخانه · همکاری ریموت و Async',
    footerHeading: 'آماده همکاری ریموت در پروژه‌های معماری وب، پلتفرم‌های SaaS و پایپ‌لاین‌های ایجنت هوشمند.',
    footerNote:
      'فعال در تمامی مناطق زمانی با ارتباط متنی، مستندات دقیق و تحویل مرحله‌به‌مرحله. تمام اعداد و لینک‌های این صفحه منطبق با سرویس‌های زنده و اسناد فنی واقعی هستند.',
    copyEmailBtn: 'کپی ایمیل hamid@exvorta.com',
    copiedToast: 'ایمیل hamid@exvorta.com کپی شد',
    footerColWork: 'پروژه‌های زنده',
    footerColConnect: 'شبکه و پروفایل‌ها',
    footerRepoLink: 'مخزن عمومی Exvorta ↗',
    footerPdfA: 'رزومه · مهندس AI (PDF) ↓',
    footerPdfB: 'رزومه · توسعه‌دهنده وب (PDF) ↓',
    footerCopyLeft: '© ۲۰۲۶ حمید مهرآنی · ریموت در تمامی مناطق زمانی',
    footerCopyRight: 'ساخته‌شده با ES2024 خالص + Canvas + شبکه لبه Cloudflare Pages',
    cmdLangTitle: 'تغییر زبان به English (LTR)',
    cmdLangMeta: 'زبان و چیدمان',
    cmdPdfMeta: 'فایل PDF',
    cmdPlaceholder: 'جستجو در بین پروژه‌ها، سایت‌های Exvorta Web، مسیرهای رزومه یا دستورات...',
    cmdEmpty: 'موردی با این عبارت پیدا نشد.',
    dossierLabels: {
      overview: 'نمای کلی سیستم',
      architecture: 'معماری و نحوه اجرا',
      verified: 'شاخص‌های ورفای‌شده پروداکشن',
      stack: 'استک و زیرساخت',
    },
  },
};

export const VENTURES = [
  {
    id: 'exvorta',
    category: 'saas',
    featured: true,
    year: '2026 — Present',
    statusType: 'live',
    status: { en: 'LIVE PRODUCTION', fa: 'پروداکشن زنده' },
    name: { en: 'Exvorta · Trade Business OS', fa: 'اگزورتا (Exvorta) · سیستم‌عامل تجارت' },
    role: { en: 'Founder & Lead Architect', fa: 'بنیان‌گذار و معمار ارشد' },
    previewImg: '/previews/exvorta.webp',
    liveUrl: 'https://exvorta.com',
    repoUrl: 'https://github.com/hamidmehrani/exvorta-main',
    stack: ['Next.js 15', 'Payload CMS', 'PostgreSQL', 'NOWPayments', 'Cloudflare Pages'],
    proof: {
      en: '515+ commits · AUTH-1 live · Crypto-only USDT/TRON billing · UAE GCC wedge',
      fa: '+۵۱۵ کامیت · احراز هویت زنده · پرداخت کریپتو USDT/TRON · تمرکز کریدور خلیج فارس',
    },
    summary: {
      en: 'End-to-end compliance & trade-file operating system for SME importers and exporters: commercial invoices, packing lists, CoO/BoL generation, corridor checks, and crypto billing.',
      fa: 'سیستم‌عامل تجارت بین‌الملل برای صادرکنندگان و واردکنندگان: مدیریت متمرکز پرونده معامله، صدور اسناد تجاری، چک‌های کریدور و درگاه پرداخت کریپتو.',
    },
    architecture: {
      en: 'Modular Payload CMS monolith paired with a dedicated Next.js 15 edge marketing shell on Cloudflare Pages and production SaaS runtime on Kamatera. Built via multi-agent pipeline with strict automated diff and build gates.',
      fa: 'معماری ماژولار Payload CMS در کنار پوسته بازاریابی Next.js 15 روی کلودفلر پیجز و سرویس SaaS روی سرور پروداکشن؛ توسعه‌یافته با خط تولید چند-ایجنتی و گیت‌های خودکار.',
    },
  },
  {
    id: 'firoza',
    category: 'commerce',
    secondaryWide: true,
    year: '2024 — Present',
    statusType: 'live',
    status: { en: 'LIVE ON EDGE', fa: 'مستقر روی لبه' },
    name: { en: 'Firoza · Nishapur Turquoise', fa: 'فیروزه (Firoza) · صادرات فیروزه نیشابور' },
    role: { en: 'End-to-End Owner & Builder', fa: 'سازنده و مالک فنی سرتاسری' },
    previewImg: '/previews/firoza.webp',
    liveUrl: 'https://www.firoza.ir',
    repoUrl: 'https://github.com/hamidmehrani/Firoza',
    stack: ['Next.js Static', 'Cloudflare Pages', 'Multilingual (10x)', 'Technical SEO', 'WhatsApp RFQ'],
    stackFa: ['Next.js Static', 'Cloudflare Pages', '۱۰ زبان زنده', 'Technical SEO', 'WhatsApp RFQ'],
    proof: {
      en: '10 locales (EN/FA/AR/...) · Zero AI/synthetic stone imagery · Static + Edge Workers',
      fa: '۱۰ زبان زنده · عکاسی صددرصد واقعی سنگ (بدون تصویر مصنوعی) · معماری استاتیک + Worker',
    },
    summary: {
      en: 'Global wholesale showcase for authentic Nishapur turquoise lots built around transparent grading, real unretouched parcel photography, and direct cross-border B2B inquiry flows.',
      fa: 'پلتفرم صادراتی فیروزه اصل نیشابور برای خریداران عمده بین‌المللی با تمرکز بر اصالت بصری، رتبه‌بندی شفاف و ارتباط مستقیم تجاری در ۱۰ زبان.',
    },
    architecture: {
      en: 'Refactored from CMS overhead into an ultra-fast static build on Cloudflare Pages (`fix10` approved) with Cloudflare Worker inquiry handlers and strict factual lot verification.',
      fa: 'بازطراحی‌شده به بیلد استاتیک فوق‌سریع روی Cloudflare Pages با فرم‌هندلرهای Worker و سیاست عدم ساخت وزن یا قیمت جعلی برای سنگ‌ها.',
    },
  },
  {
    id: 'leadgen',
    category: 'ai',
    year: '2026',
    statusType: 'frozen',
    status: { en: 'ENGINEERED · FROZEN', fa: 'مهندسی‌شده · فریز عملیاتی' },
    name: { en: 'LeadGen Machine · 21-Country Engine', fa: 'موتور لیدجن و فروش خودکار' },
    role: { en: 'System Creator & AI Architect', fa: 'طراح و معمار سیستم AI' },
    schematicType: 'leadgen',
    liveUrl: null,
    repoUrl: null,
    stack: ['Python (30+ Modules)', 'SQLite', 'Claude / OpenAI API', 'Anti-Ban Ramp', 'Brevo'],
    proof: {
      en: '48,000+ B2B leads processed · 85 query matrices · 21 countries · ~15k/mo capacity',
      fa: '+۴۸,۰۰۰ لید B2B پردازش‌شده · ۸۵ ماتریس جستجو · ۲۱ کشور · ظرفیت ~۱۵هزار در ماه',
    },
    summary: {
      en: 'Multi-tenant Python B2B discovery and qualification engine featuring per-lead scoring, AI reply classification, self-learning copy loops, and cultural quiet-hour rate limiting.',
      fa: 'موتور تمام‌پایتون کشف و اعتبارسنجی مشتریان B2B در ۲۱ کشور با امتیازدهی هوشمند هر سرنخ، تحلیل پاسخ‌ها توسط AI و معماری ضداسپم و حفظ اعتبار دامین.',
    },
    architecture: {
      en: '30+ isolated Python modules backed by SQLite (`master.db` holding 62,000+ verified records), automated MX/phone verification, and deterministic LLM safety validators. Currently in owner-ordered outbound freeze since Nov 6, 2026.',
      fa: 'متشکل از بیش از ۳۰ ماژول پایتون متصل به دیتابیس SQLite، وریفای خودکار تلفن و ایمیل و اعتبارسنجی خروجی LLM. ارسال خروجی این سیستم طبق دستور مالک از ۶ نوامبر در فریز کامل است.',
    },
  },
  {
    id: 'audit',
    category: 'ai',
    year: '2026 — Present',
    statusType: 'live',
    status: { en: 'ACTIVE PIPELINE', fa: 'پایپ‌لاین فعال' },
    name: { en: 'Website Audit Engine & pdfscript', fa: 'موتور ممیزی سایت و pdfscript' },
    role: { en: 'Creator', fa: 'طراح و سازنده' },
    schematicType: 'audit',
    liveUrl: null,
    repoUrl: null,
    stack: ['Node.js', 'Puppeteer', 'Lighthouse', 'axe-core', 'AI Vision Critique'],
    proof: {
      en: '7-stage automated inspection → 14-page branded client proposal PDF in minutes',
      fa: 'ممیزی ۷ مرحله‌ای خودکار ← خروجی PDF اختصاصی ۱۴ صفحه‌ای در چند دقیقه',
    },
    summary: {
      en: 'Automated technical audit suite evaluating Core Web Vitals, WCAG accessibility, HTTP security headers, SEO, and visual design via AI vision to compile executive PDF proposals.',
      fa: 'پایپ‌لاین ۷ مرحله‌ای ارزیابی سرعت، دسترس‌پذیری، امنیت، سئو و کیفیت بصری که گزارش‌های ۱۴ صفحه‌ای برندشده را به‌طور خودکار برای مشتریان آماده می‌کند.',
    },
    architecture: {
      en: 'Headless Chromium capture feeds real DOM bounding-box metrics, Lighthouse scores, and axe-core audits into an HTML-to-PDF layout renderer using brand tokens.',
      fa: 'استخراج متریک‌های واقعی DOM، امتیازهای Lighthouse و خطاهای دسترس‌پذیری در مرورگر هدلس و تبدیل مستقیم آن‌ها به فایل PDF با استاندارد چاپی.',
    },
  },
  {
    id: 'hamesu',
    category: 'commerce',
    year: '2026 — Present',
    statusType: 'live',
    status: { en: 'LIVE SERVICES', fa: 'سرویس‌های فعال' },
    name: { en: 'Hamesu · Commerce OS', fa: 'همه‌سو (Hamesu) · پلتفرم فروشگاه‌ساز' },
    role: { en: 'Platform Architect', fa: 'معمار پلتفرم' },
    schematicType: 'hamesu',
    liveUrl: 'https://hamesu.ir',
    repoUrl: 'https://github.com/hamidmehrani/Hamesu',
    stack: ['Medusa.js', 'Next.js', 'PostgreSQL', 'Redis', 'Docker', 'Yekan Bakh VF'],
    proof: {
      en: '3 active systemd services (backend:9000, storefront:3210, console:7102) · Postgres + Redis',
      fa: '۳ سرویس فعال systemd (بک‌اند، ویترین و کنسول مدیریت) به همراه PostgreSQL و Redis',
    },
    summary: {
      en: 'Multi-tenant Iranian commerce platform enabling physical shops and social sellers to launch storefronts, manage inventory, accept Toman/COD payments, and scale on ready-made templates.',
      fa: 'پلتفرم فروشگاه‌ساز چندمستاجره ویژه کسب‌وکارها و فروشندگان اینستاگرامی ایران؛ مجهز به کنسول مدیریت، تمپلیت‌های آماده فارسی و پرداخت ریالی.',
    },
    architecture: {
      en: 'Headless Medusa commerce engine backed by containerized Postgres 55432 + dual Redis cache/queue containers, serving both a multi-storefront Next.js tier and merchant admin console.',
      fa: 'موتور تجارت الکترونیک Medusa در کنار دیتابیس PostgreSQL و صف‌های Redis داکری‌شده با ویترین و پنل اختصاصی و تایپوگرافی استاندارد یکان‌بخشی.',
    },
  },
  {
    id: 'cvly',
    category: 'saas',
    year: '2026 — Present',
    statusType: 'live',
    status: { en: 'LIVE · REDESIGNING', fa: 'زنده · در حال ارتقا' },
    name: { en: 'Cvly · AI Career & Fit Engine', fa: 'سی‌ولی (Cvly) · پلتفرم کاریابی هوشمند' },
    role: { en: 'Product & Stack Owner', fa: 'مالک محصول و معماری' },
    schematicType: 'cvly',
    liveUrl: 'https://cvly.ir',
    repoUrl: 'https://github.com/hamidmehrani/cvly-backup',
    stack: ['FastAPI', 'Jinja2', 'Tailwind RTL', 'SQLite', 'Telegram Bot', 'Jalali'],
    proof: {
      en: '331 registered job seekers · Telegram bot integration · Persian fit-score tailoring',
      fa: '۳۳۱ کاربر ثبت‌نام‌شده · متصل به بات تلگرام · امتیازدهی تطابق رزومه به فارسی',
    },
    summary: {
      en: 'Search-first Persian career workspace offering automated resume tailoring per job listing, Persian fit scoring, Jalali tracking, and companion Telegram workflows.',
      fa: 'میزکار کاریابی هوشمند به زبان فارسی با قابلیت تطبیق خودکار رزومه با هر آگهی، محاسبه درصد تناسب شغلی، تاریخ جلالی و دستیار تلگرامی.',
    },
    architecture: {
      en: 'Lightweight FastAPI web service paired with server-rendered RTL Jinja2 templates, SQLite persistence, and a systemd Telegram bot worker.',
      fa: 'سرویس سریع FastAPI با قالب‌های RTL رندرشده سمت سرور، دیتابیس سبک SQLite و سرویس موازی ربات تلگرام.',
    },
  },
  {
    id: 'daftaryar',
    category: 'commerce',
    year: '2026',
    statusType: 'live',
    status: { en: 'RELEASE READY v1.8', fa: 'آماده انتشار نسخه ۱.۸' },
    name: { en: 'Daftaryar · WooCommerce Finance OS', fa: 'دفتریار · سیستم مالی ووکامرس' },
    role: { en: 'Plugin Architect', fa: 'معمار افزونه وردپرس' },
    schematicType: 'daftaryar',
    liveUrl: 'https://daftaryar-demo.radinai.ir',
    repoUrl: 'https://github.com/hamidmehrani/plugins',
    stack: ['WordPress / PHP', 'WooCommerce', 'Sepidar Adapter', 'PHPUnit', 'LDD Gate'],
    proof: {
      en: 'v1.8.0 · Passed 12/12 release steps & 397/397 LDD gate assertions · 0 FAIL',
      fa: 'نسخه ۱.۸.۰ · قبولی در ۱۲ از ۱۲ گیت و ۳۹۷ از ۳۹۷ تست خودکار LDD با صفر خطا',
    },
    summary: {
      en: 'Turnkey WordPress/WooCommerce accounting, tax invoicing, and Sepidar ERP bridge built to strict Persian RTL usability and zero-conflict plugin quality standards.',
      fa: 'افزونه جامع حسابداری، صدور فاکتور و اتصال به سپیدار برای فروشگاه‌های ووکامرسی ایران؛ مهندسی‌شده برای استانداردهای ژاکت و راست‌چین.',
    },
    architecture: {
      en: 'Built inside a 28-plugin monorepo discipline featuring mocked ERP adapters, deterministic PHPUnit coverage, and automated visual/layout verification across admin screens.',
      fa: 'ساخته‌شده با انضباط تست PHPUnit، آداپتور مستقل شبیه‌ساز سپیدار و بازرسی کامل ۳۹۷ موردی برای محیط‌های واقعی فروشگاه‌داران.',
    },
  },
  {
    id: 'jobhunt',
    category: 'ai',
    year: '2026',
    statusType: 'live',
    status: { en: 'PRODUCTION KIT', fa: 'کیت عملیاتی' },
    name: { en: 'JobHunt Pipeline & Live AI Interpreter', fa: 'پایپ‌لاین شکار شغل و مترجم زنده جلسات' },
    role: { en: 'Creator', fa: 'طراح و سازنده' },
    schematicType: 'jobhunt',
    liveUrl: null,
    repoUrl: null,
    stack: ['Python', 'Playwright ATS', 'Cloudflare Worker Relay', 'Gemini Audio', 'Chromium PDF'],
    proof: {
      en: '10 job boards · Anti-fabrication resume validator · Real-time FA⇄EN virtual mic rig',
      fa: 'پایش ۱۰ مرجع شغلی · اعتبارسنج ضد-توهم رزومه · مترجم صوتی بلادرنگ فارسی به انگلیسی',
    },
    summary: {
      en: 'Autonomous career discovery, per-job Chromium resume tailoring validated against source facts, plus a virtual-mic real-time Persian-to-English speech interpreter rig.',
      fa: 'سیستم پایش خودکار فرصت‌های شغلی بین‌المللی، شخصی‌سازی رزومه بدون دستکاری فکت‌ها و رگ اختصاصی ترجمه صوتی زنده جلسات از فارسی به انگلیسی.',
    },
    architecture: {
      en: 'Combines public ATS board crawlers (Greenhouse/Ashby/Lever), Cloudflare Worker IP relay, strict fact-checking regex validators, and low-latency audio translation.',
      fa: 'ترکیب خزنده‌های استاندارد ATS، رله ترافیک کلودفلر، اعتبارسنج ضدجعل داده و پردازش صوتی کم‌تاخیر روی میکروفون مجازی.',
    },
  },
];

export const EXVORTA_WEB_SITES = [
  {
    id: 'spicevo',
    name: 'Spicevo',
    url: 'https://spicevo.exvorta.com',
    previewImg: '/previews/spicevo.webp',
    mobilePreviewImg: '/previews/spicevo-mobile.webp',
    colors: ['#356A35', '#8F391A'],
    locales: '5 Locales (EN/AR/FA/TR/ES)',
    localesFa: '۵ زبان (EN/AR/FA/TR/ES)',
    sector: { en: 'Spices, Herbs & Botanicals Export', fa: 'صادرات ادویه، زعفران و گیاهان دارویی' },
    desc: {
      en: '8 verified routes live on Cloudflare Pages featuring an interactive spice blender instrument, origin provenance maps, and B2B bulk quote calculator.',
      fa: '۸ مسیر ورفای‌شده روی کلودفلر پیجز مجهز به ابزار تعاملی ترکیب ادویه، نقشه مبدأ و ماشین‌حساب استعلام قیمت عمده.',
    },
    specs: {
      en: '8/8 Routes 200 · Spice Blender · Origin Map',
      fa: '۸ مسیر زنده ۲۰۰ · ابزار ترکیب ادویه · نقشه مبدأ',
    },
    logoType: 'spicevo',
  },
  {
    id: 'nutave',
    name: 'Nutave',
    url: 'https://nutave.exvorta.com',
    previewImg: '/previews/nutave.webp',
    mobilePreviewImg: '/previews/nutave-mobile.webp',
    colors: ['#392318', '#CA8627'],
    locales: 'Multilingual B2B (EN/AR/FA)',
    localesFa: 'چندزبانه B2B (EN/AR/FA)',
    sector: { en: 'Dried Fruits, Pistachios & Nuts', fa: 'صادرات خشکبار، پسته و مغزها' },
    desc: {
      en: 'Warm editorial commodities house showcasing harvest grading tables, aflatoxin/ISO spec sheets, and private-label packaging configurations.',
      fa: 'وب‌سایت صادراتی خشکبار و پسته با جداول گریدبندی محصول، مشخصات آزمایشگاهی و قابلیت سفارش بسته‌بندی لیبل اختصاصی.',
    },
    specs: {
      en: 'Build 12 Live · Harvest Specs · Payload Ready',
      fa: 'بیلد ۱۲ زنده · جداول گریدبندی · Payload',
    },
    logoType: 'nutave',
  },
  {
    id: 'stonvi',
    name: 'Stonvi',
    url: 'https://stonvi.exvorta.com',
    previewImg: '/previews/stonvi.webp',
    mobilePreviewImg: '/previews/stonvi-mobile.webp',
    colors: ['#2B4258', '#5C6E7A'],
    locales: '5 Locales (RTL + LTR)',
    localesFa: '۵ زبان (RTL + LTR)',
    sector: { en: 'Architectural Ceramics & Natural Stone', fa: 'سرامیک معماری و سنگ‌های ساختمانی' },
    desc: {
      en: 'Brutalist material-spec showroom designed like a printed architectural engineering dossier with Playfair Display + Space Grotesk precision.',
      fa: 'شوروم دیجیتال مصالح و سرامیک‌های معماری با زبان طراحی برگه مشخصات فنی و استانداردهای صادراتی ایزو.',
    },
    specs: {
      en: 'Spec-Sheet DNA · Architectural RFQ · 5 Locales',
      fa: 'هویت فنی سرامیک · استعلام معماری · ۵ زبان',
    },
    logoType: 'stonvi',
  },
  {
    id: 'aurum',
    name: 'Aurum',
    url: 'https://aurum.exvorta.com',
    previewImg: '/previews/aurum.webp',
    mobilePreviewImg: '/previews/aurum-mobile.webp',
    colors: ['#141820', '#D4AF37'],
    locales: 'Multilingual Dubai Bullion',
    localesFa: 'چندزبانه · بازار شمش دبی',
    sector: { en: 'Gold & Precious Metals Trading (Dubai)', fa: 'تجارت طلا و فلزات گران‌بها (دبی)' },
    desc: {
      en: 'Dubai precious metals house translating assay hallmarks, bullion purity tables, and high-trust institutional settlement workflows.',
      fa: 'خانه تجارت فلزات گران‌بها در دبی با تمرکز بصری بر عیارسنجی شمش، جدول استانداردها و اعتبارسنجی سازمانی.',
    },
    specs: {
      en: 'Dubai Market · Editorial Hairline · Bullion Ledger',
      fa: 'بازار دبی · طراحی خطی · جدول شمش طلا',
    },
    logoType: 'aurum',
  },
  {
    id: 'meridian',
    name: 'Meridian',
    url: 'https://meridian.exvorta.com',
    previewImg: '/previews/meridian.webp',
    mobilePreviewImg: '/previews/meridian-mobile.webp',
    colors: ['#0F172A', '#B48A3E'],
    locales: '5 Locales Global Trade',
    localesFa: '۵ زبان · تجارت بین‌الملل',
    sector: { en: 'Dubai General Trading & Re-Export', fa: 'تجارت عمومی و ری‌اکسپورت دبی' },
    desc: {
      en: 'Cross-corridor general trading flagship indexing multiple commodity divisions, sea/air logistics routes, and multi-currency RFQ forms.',
      fa: 'پلتفرم چنددپارتمانی تجارت عمومی در دبی شامل خطوط لجستیک دریایی و هوایی و میز استعلام قیمت بین‌المللی.',
    },
    specs: {
      en: 'Multi-Corridor · Division Index · 5 Locales',
      fa: 'مسیرهای چندکریدوری · دپارتمان‌ها · ۵ زبان',
    },
    logoType: 'meridian',
  },
  {
    id: 'vestra',
    name: 'Vestra',
    url: 'https://vestra.exvorta.com',
    previewImg: '/previews/vestra.webp',
    mobilePreviewImg: '/previews/vestra-mobile.webp',
    colors: ['#1E293B', '#9F1239'],
    locales: 'Multilingual Apparel & Textile',
    localesFa: 'چندزبانه · منسوجات و پوشاک',
    sector: { en: 'Wholesale Textiles & Apparel House', fa: 'عمده‌فروشی منسوجات و پوشاک' },
    desc: {
      en: 'Editorial textile trading platform built around tactile weave imagery, fabric GSM specifications, and wholesale MOQ quotation flows.',
      fa: 'پلتفرم عمده‌فروشی نساجی و پارچه با ارائه مشخصات فنی تراکم بافت، حداقل سفارش و کاتالوگ ادیتوریال.',
    },
    specs: {
      en: 'Editorial Runway · Fabric GSM Specs · Wholesale',
      fa: 'ادیتوریال نساجی · مشخصات GSM · عمده‌فروشی',
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
    title: { en: 'Mobbin Research & Spec Blueprint', fa: 'تحقیق مرجع Mobbin و بلوپرینت' },
    desc: {
      en: 'Every UI or product begins with real production references saved to a dedicated Mobbin collection, paired with a scoped `docs/blueprint.md` defining hard non-negotiables and acceptance gates.',
      fa: 'هر پروژه قبل از نوشتن خط اول کد، با جمع‌آوری رفرنس‌های واقعی در Mobbin و نگارش بلوپرینت دقیق حدود و اهداف شروع می‌شود.',
    },
    terminal: `$ mobbin search_sections "agency case studies" -> 12 keepers saved
$ cat docs/blueprint.md
> HARD GATES: zero fabricated metrics | zero English RTL leaks | 0px mobile overflow`,
  },
  {
    id: 'architect',
    num: '02',
    role: 'ARCHITECT',
    roleFa: 'معماری',
    title: { en: 'Data Contracts & Token System', fa: 'معماری قراردادهای داده و توکن‌ها' },
    desc: {
      en: 'Define schema types, bilingual JSON/ESM data contracts, and named CSS design tokens upfront so downstream builder agents share one source of truth without drift.',
      fa: 'تعریف ساختار داده‌ها، قراردادهای دوزبانه و سیستم توکن‌های طراحی پیش از اجرای ایجنت‌های کدنویس برای جلوگیری از دوباره‌کاری و ناهماهنگی.',
    },
    terminal: `$ check-contracts --source src/data/portfolio.mjs
> Schema verified: 8 flagship systems · 6 Exvorta Web sites · 7 verified roles
> Truth bank cross-check: 80-owner-resume.md [PASS — 0 drift]`,
  },
  {
    id: 'builders',
    num: '03',
    role: 'BUILDERS',
    roleFa: 'ساخت موازی',
    title: { en: 'Parallel Agent Execution', fa: 'اجرای موازی ایجنت‌های سازنده' },
    desc: {
      en: 'Orchestrate multiple specialized builder agents across isolated branches/worktrees (`git worktree` + Hermes/Antigravity pools) committing clean, small-diff slices.',
      fa: 'هدایت هم‌زمان ایجنت‌های سازنده در ورک‌تری‌های ایزوله گیت برای پیاده‌سازی بخش‌های مستقل با تغییرات تمیز و قابل بررسی.',
    },
    terminal: `$ git status --branch
## main...origin/main
> Active slices: [canvas-constellation] [exvorta-web-gallery] [folio-resume-lens]
> Memory footprint: < 65 MB · Build engine: pure Node.js ESM`,
  },
  {
    id: 'qa',
    num: '04',
    role: 'INDEPENDENT QA',
    roleFa: 'گیت مستقل',
    title: { en: 'Playwright Rect Gates & Visual Critic', fa: 'گیت‌های Playwright و ممیزی مستقل' },
    desc: {
      en: 'Builder never signs off on its own work. An independent visual critic and headless Chromium suite inspect Desktop 1440px & Mobile 390px for 0px overflow, 0 console errors, and live pixel fidelity.',
      fa: 'سازنده هرگز کار خودش را تایید نمی‌کند؛ اسکریپت Playwright و یک بازبین مستقل خروجی واقعی را در دسکتاپ ۱۴۴۰px و موبایل ۳۹۰px از نظر عدم سرریز و سلامت تصویر می‌سنجند.',
    },
    terminal: `$ node scripts/verify-live.mjs --viewports 1440x900,390x844 --langs en,fa
> [1440px EN] scrollW=1440 <= innerW=1440 | consoleErrors=0 | brokenImgs=0 -> PASS
> [390px FA RTL] dir=rtl | scrollW=390 <= innerW=390 | consoleErrors=0 -> PASS`,
  },
  {
    id: 'land',
    num: '05',
    role: 'EDGE LAND',
    roleFa: 'استقرار لبه',
    title: { en: 'One-Command Deploy & Vault Sync', fa: 'استقرار یک‌فرمانی و ثبت در والت' },
    desc: {
      en: 'Production builds land atomically onto Cloudflare Pages global edge with immutable cache headers, followed by live HTTP verification and Obsidian vault synchronization.',
      fa: 'دیپلوی نهایی روی شبکه لبه Cloudflare Pages با هدرهای بهینه کش، تایید زنده با curl و ثبت وضعیت در آرشیو مستندات.',
    },
    terminal: `$ wrangler pages deploy dist --project-name hamidmehrani
> ✨ Success! Uploaded static bundle to Cloudflare global edge
> curl -I https://hamidmehrani.pages.dev -> HTTP/2 200 OK`,
  },
];

export const RESUME_TRACKS = {
  all: {
    id: 'all',
    label: { en: 'Founder & Full Archive', fa: 'نمای کامل بنیان‌گذار' },
    headline: {
      en: 'AI SYSTEMS ARCHITECT · FOUNDER @ EXVORTA · FULL-STACK & AUTOMATION BUILDER',
      fa: 'معمار سیستم‌های AI · بنیان‌گذار Exvorta · سازنده تمام‌عیار وب و اتوماسیون',
    },
    summary: {
      en: '8 years in web — 5 years freelance (e-commerce, WordPress, SEO), 2 years in-house, now Founder at Exvorta. I ship production platforms, B2B automation engines, and high-craft multilingual web properties by directing specialized AI agent teams behind deterministic quality gates. Remote-first and async-native across time zones (strong written/chat communicator).',
      fa: '۸ سال سابقه حرفه‌ای در وب — ۵ سال فریلنسری (فروشگاه اینترنتی، وردپرس، سئو)، ۲ سال تجربه درون‌سازمانی و اکنون بنیان‌گذار Exvorta. پلتفرم‌های SaaS، موتورهای اتوماسیون B2B و وب‌سایت‌های چندزبانه تراز جهانی را با هدایت تیم‌های ایجنت هوشمند و گیت‌های کنترل کیفیت تولید می‌کنم. مسلط به همکاری ریموت و ارتباط متنی دقیق.',
    },
    highlightRoles: ['exvorta', 'audit', 'leadgen', 'firoozehland', 'samiansoft'],
  },
  ai: {
    id: 'ai',
    label: { en: 'Track A · AI Automation', fa: 'مسیر A · اتوماسیون AI' },
    headline: {
      en: 'AI AUTOMATION ENGINEER · I SHIP PRODUCTION SYSTEMS BY DIRECTING AI AGENT TEAMS',
      fa: 'مهندس اتوماسیون هوش مصنوعی · تحویل سیستم‌های پروداکشن با هدایت تیم‌های ایجنت',
    },
    summary: {
      en: 'I run an agent-driven engineering pipeline (architect → builder → QA → reviewer, automated quality gates, one-command production deploys) instead of typing every line. It has shipped a live SaaS platform (exvorta.com), a 48,000+ B2B lead engine across 21 countries, and a 7-stage automated website audit tool. Remote-first, strong async writer.',
      fa: 'به‌جای کدنویسی خط‌به‌خط دستی، خط تولید چند-ایجنتی (معمار ← سازنده ← QA ← بازبین) را با گیت‌های تست خودکار اداره می‌کنم. نتیجه این رویکرد: یک SaaS زنده، موتور پردازش +۴۸,۰۰۰ لید در ۲۱ کشور و سیستم ۷ مرحله‌ای ممیزی خودکار وب‌سایت است.',
    },
    highlightRoles: ['exvorta', 'audit', 'leadgen', 'builder'],
  },
  web: {
    id: 'web',
    label: { en: 'Track B · Web & Next.js', fa: 'مسیر B · وب و Next.js' },
    headline: {
      en: 'WEB DEVELOPER — WORDPRESS & NEXT.JS · SEO-DRIVEN, AI-ASSISTED DELIVERY',
      fa: 'توسعه‌دهنده وب Next.js و WordPress · سئومحور و پرسرعت',
    },
    summary: {
      en: '8 years building and owning production websites end-to-end: WordPress, WooCommerce, Next.js 15, Payload CMS, technical SEO, Core Web Vitals, content pipelines, and Cloudflare edge operations. Live samples include exvorta.com, firoza.ir, and 6 multilingual trade houses.',
      fa: '۸ سال طراحی، پیاده‌سازی و مالکیت کامل وب‌سایت‌ها: وردپرس و ووکامرس، Next.js 15، Payload CMS، سئو تکنیکال، بهینه‌سازی Core Web Vitals و استقرار روی Cloudflare. نمونه‌های زنده شامل exvorta.com، firoza.ir و ۶ وب‌سایت تجاری چندزبانه است.',
    },
    highlightRoles: ['exvorta', 'firoozehland', 'samiansoft', 'freelance'],
  },
  growth: {
    id: 'growth',
    label: { en: 'Track C · Growth & SEO', fa: 'مسیر C · رشد و سئو' },
    headline: {
      en: 'TECHNICAL SEO & AI-DRIVEN B2B GROWTH SYSTEMS ENGINEER',
      fa: 'متخصص سئو تکنیکال و مهندسی سیستم‌های رشد B2B',
    },
    summary: {
      en: 'Combining the marketer toolkit (technical SEO, search-visible export content, conversion audits) with engineering execution: I build the growth tools directly — processing 48,000+ B2B leads across 21 countries and generating automated 14-page Lighthouse/UX proposal audits.',
      fa: 'ترکیب دانش بازاریابی و سئو تکنیکال با توان ساخت ابزارهای اختصاصی رشد: از طراحی موتور کشف +۴۸,۰۰۰ لید B2B در ۲۱ کشور تا ساخت ابزار تولید خودکار گزارش‌های ۱۴ صفحه‌ای ممیزی سایت برای جذب مشتری.',
    },
    highlightRoles: ['leadgen', 'audit', 'firoozehland', 'samiansoft'],
  },
};

export const EXPERIENCE = [
  {
    id: 'exvorta',
    role: { en: 'Founder', fa: 'بنیان‌گذار' },
    company: { en: 'Exvorta', fa: 'Exvorta' },
    period: { en: 'Jul 2026 – Present · Remote', fa: 'جولای ۲۰۲۶ تا اکنون · ریموت' },
    bullets: {
      en: [
        'Launched exvorta.com — trade-file compliance SaaS (Next.js 15, Payload CMS, PostgreSQL, Cloudflare Pages) with crypto-only billing (NOWPayments + BTCPay, USDT on TRON).',
        'Building Exvorta Suite for global traders: AI trade documents (invoices, packing lists, CoO, BoL), corridor checks, shipment tracking, and trade CRM.',
        'Operates a multi-agent engineering pipeline and reusable multilingual Next.js + Payload boilerplate powering 6 live export showcase sites.',
      ],
      fa: [
        'راه‌اندازی exvorta.com به‌عنوان سیستم‌عامل و SaaS کامپلاینس اسناد تجارت <bdi dir="ltr">(Next.js 15, Payload CMS, PostgreSQL, Cloudflare Pages)</bdi> با پرداخت کریپتو.',
        'توسعه Exvorta Suite برای تاجران بین‌المللی: تولید هوشمند اسناد تجاری، چک‌های گمرکی کریدور و CRM معامله.',
        'مدیریت خط تولید چند-ایجنتی و موتور چندزبانه زیربنای ۶ سایت نمایشگاهی صادراتی <bdi dir="ltr">(Spicevo, Nutave, Stonvi, Aurum, Meridian, Vestra)</bdi>.',
      ],
    },
  },
  {
    id: 'audit',
    role: { en: 'Creator', fa: 'طراح و سازنده' },
    company: { en: 'Website Audit Tool & pdfscript', fa: 'Website Audit Tool & pdfscript' },
    period: { en: 'Aug 2026 – Present · Remote', fa: 'آگوست ۲۰۲۶ تا اکنون · ریموت' },
    bullets: {
      en: [
        'Engineered a 7-stage automated audit pipeline (Puppeteer, Lighthouse, axe-core): performance, accessibility, security, SEO, and AI vision critique → 14-page branded client proposal PDF in minutes.',
      ],
      fa: [
        'طراحی پایپ‌لاین ۷ مرحله‌ای ممیزی وب‌سایت <bdi dir="ltr">(Puppeteer, Lighthouse, axe-core)</bdi> و تبدیل آنالیز عملکرد و سئو به پروپوزال PDF چهارده صفحه‌ای برندشده.',
      ],
    },
  },
  {
    id: 'leadgen',
    role: { en: 'Creator', fa: 'طراح و سازنده' },
    company: { en: 'LeadGen Machine', fa: 'LeadGen Machine' },
    period: { en: 'Jun 2026 – Present · Remote', fa: 'ژوئن ۲۰۲۶ تا اکنون · ریموت' },
    bullets: {
      en: [
        'Architected a cold-outreach engine in Python (30+ modules): discovery across 85 query matrices and phone/email verification across 21 countries.',
        'Processed 48,000+ B2B leads (~15k/month capacity) with per-lead scoring, AI reply classification/negotiation, self-learning message loop, and anti-ban sender ramp.',
      ],
      fa: [
        'طراحی موتور پایتونی کشف و اعتبارسنجی لید با بیش از ۳۰ ماژول در ۸۵ ماتریس جستجو و ۲۱ کشور.',
        'پردازش بیش از ۴۸,۰۰۰ لید B2B با ظرفیت ۱۵ هزار در ماه همراه با امتیازدهی هوشمند، تحلیل پاسخ و معماری ضدبن فرستنده.',
      ],
    },
  },
  {
    id: 'builder',
    role: { en: 'Independent Product Builder', fa: 'سازنده مستقل محصول' },
    company: { en: 'Independent', fa: 'مستقل' },
    period: { en: 'Nov 2025 – Jun 2026 · Remote', fa: 'نوامبر ۲۰۲۵ تا ژوئن ۲۰۲۶ · ریموت' },
    bullets: {
      en: [
        'Prototyped the automation tools that evolved into LeadGen Machine and the Website Audit Tool; built Exvorta’s multi-agent engineering foundation.',
      ],
      fa: [
        'نمونه‌سازی اولیه ابزارهای اتوماسیون که به LeadGen Machine و Audit Tool تبدیل شدند و پی‌ریزی زیرساخت فنی Exvorta.',
      ],
    },
  },
  {
    id: 'firoozehland',
    role: { en: 'Web Developer', fa: 'توسعه‌دهنده وب و مدیر فنی' },
    company: { en: 'Firoozehland (firoza.ir)', fa: 'فیروزه‌لند (firoza.ir)' },
    period: { en: 'Apr 2024 – Oct 2025 · Full-time', fa: 'آوریل ۲۰۲۴ تا اکتبر ۲۰۲۵ · تمام‌وقت' },
    bullets: {
      en: [
        'Owned the company’s web presence end-to-end, including firoza.ir (Nishapur turquoise export): engineering, content-production direction, publishing, and operations.',
        'Led technical SEO architecture, multilingual search visibility, and Core Web Vitals performance.',
      ],
      fa: [
        'مالکیت فنی سرتاسری وب‌پرزنس شرکت و سایت صادراتی <bdi dir="ltr">firoza.ir</bdi>: توسعه، هدایت تولید محتوا، انتشار و عملیات وب.',
        'سئو تکنیکال، بهینه‌سازی سرعت <bdi dir="ltr">Core Web Vitals</bdi> و جریان‌های جذب مشتری صادراتی.',
      ],
    },
  },
  {
    id: 'samiansoft',
    role: { en: 'Developer', fa: 'توسعه‌دهنده نرم‌افزار وب' },
    company: { en: 'SamianSoft', fa: 'سامیان‌سافت (SamianSoft)' },
    period: { en: 'Mar 2023 – Mar 2024 · Full-time', fa: 'مارس ۲۰۲۳ تا مارس ۲۰۲۴ · تمام‌وقت' },
    bullets: {
      en: [
        'Built a production plugin syncing a catalog of thousands of SKUs with the company platform using deterministic SKU-based matching.',
        'Owned technical SEO, Core Web Vitals across company properties, and technical/marketing documentation.',
      ],
      fa: [
        'طراحی و پیاده‌سازی افزونه همگام‌سازی خودکار کاتالوگ هزاران SKU با پلتفرم شرکت.',
        'بهینه‌سازی سئو تکنیکال، شاخص‌های <bdi dir="ltr">Core Web Vitals</bdi> و تولید مستندات فنی.',
      ],
    },
  },
  {
    id: 'freelance',
    role: { en: 'Freelance Web Developer', fa: 'توسعه‌دهنده فریلنس وب' },
    company: { en: 'Independent Client Delivery', fa: 'پروژه‌های مستقل مشتریان' },
    period: { en: 'Jan 2018 – Feb 2023 · Remote', fa: 'ژانویه ۲۰۱۸ تا فوریه ۲۰۲۳ · ریموت' },
    bullets: {
      en: [
        'Five years delivering custom e-commerce storefronts, WordPress builds, technical SEO, and end-to-end client operations.',
      ],
      fa: [
        'پنج سال پیاده‌سازی فروشگاه‌های اینترنتی، پروژه‌های اختصاصی وردپرس، سئو و تحویل کامل به مشتری.',
      ],
    },
  },
];

export const SKILLS_MATRIX = [
  {
    title: { en: 'AI & Multi-Agent Orchestration', fa: 'هوش مصنوعی و هدایت ایجنت‌ها' },
    items: ['Multi-Agent Pipelines', 'Claude API', 'OpenAI API', 'Python (30+ Modules)', 'Prompt Engineering', 'Deterministic Validators'],
  },
  {
    title: { en: 'Frontend & CMS Engineering', fa: 'توسعه فرانت‌اند و CMS' },
    items: ['Next.js 15', 'Payload CMS', 'WordPress / WooCommerce', 'Tailwind CSS', 'RTL / Bilingual Systems', 'ES2024 & Canvas'],
  },
  {
    title: { en: 'Automation & Edge Infra', fa: 'اتوماسیون و زیرساخت لبه' },
    items: ['Playwright / Puppeteer', 'Lighthouse & axe-core', 'PostgreSQL / SQLite', 'Cloudflare Pages & Workers', 'Docker & systemd', 'Cloudflared / Caddy'],
  },
  {
    title: { en: 'SEO, Product & Communication', fa: 'سئو، محصول و ارتباطات' },
    items: ['Technical SEO', 'Core Web Vitals', 'SaaS Architecture', 'B2B Trade Workflows', 'Go-to-Market', 'Async Technical Writing'],
  },
];
