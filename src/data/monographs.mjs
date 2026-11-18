export const CASE_ORDER = [
  'exvorta',
  'firoza',
  'hamesu',
  'cvly',
  'leadgen',
  'audit',
  'daftaryar',
  'jobhunt',
];

export const MONOGRAPHS = {
  exvorta: {
    id: 'exvorta',
    index: '01',
    route: '/work/exvorta',
    accent: '#0EC49A',
    accentSecondary: '#D2A738',
    heroMetrics: [
      {
        val: { en: '1,152', fa: '۱٬۱۵۲' },
        label: { en: 'Automated Vitest Assertions Passing', fa: 'تست واحد خودکار Vitest پاس‌شده' },
      },
      {
        val: { en: '4 Docs', fa: '۴ سند' },
        label: { en: 'Derived From 1 Structured Trade File', fa: 'استخراج هم‌زمان از یک پرونده واحد معامله' },
      },
      {
        val: { en: '100/100', fa: '۱۰۰/۱۰۰' },
        label: { en: 'Desktop Lighthouse Across 141 Edge Routes', fa: 'امتیاز کامل دسکتاپ روی ۱۴۱ مسیر لبه' },
      },
    ],
    tagline: {
      en: 'Enter the deal once. Derive compliant cross-border documents, corridor checks, P&L margin math, and crypto settlement rails.',
      fa: 'معامله را یک‌بار وارد کنید؛ اسناد تجاری استاندارد، چک‌های گمرکی کریدور، سود و زیان واقعی و ریل تسویه کریپتو را یکجا تحویل بگیرید.',
    },
    startingPoint: {
      en: [
        'Global SME importers and re-exporters across Dubai, Sharjah, and MENA corridors still run multi-hundred-thousand-dollar shipments over disconnected spreadsheets and WhatsApp threads. Industry data shows a typical cross-border trade touches 36 documents and 240 copies, while 60–70% of first Letter-of-Credit presentations suffer discrepancies.',
        'At the same time, the UAE Federal Tax Authority PINT-AE electronic invoicing mandate requires businesses to appoint an Accredited Service Provider ahead of strict 2027 enforcement penalties. Existing generic ERP tools either ignore GCC corridor compliance (UAE PINT-AE, Saudi SABER, Egypt ACID) or force traders out of their natural WhatsApp-first negotiation rhythm.',
      ],
      fa: [
        'شرکت‌های واردات و صادرات مجدد در دبی، شارجه و کریدورهای خاورمیانه هنوز محموله‌های چندصد هزار دلاری را با فایل‌های پراکنده اکسل و چت‌های واتس‌اپ مدیریت می‌کنند؛ در حالی که یک تراکنش استاندارد بین‌المللی نیازمند ۳۶ سند مختلف و ۲۴۰ نسخه است و ۶۰ تا ۷۰٪ اسناد بار اول به خطای مغایرت برمی‌خورند.',
        'هم‌زمان، الزام قانونی فاکتور الکترونیکی امارات <bdi dir="ltr">(UAE PINT-AE)</bdi> کسب‌وکارها را ملزم به استانداردسازی اسناد تا پیش از ضرب‌الاجل ۲۰۲۷ می‌کند. نرم‌افزارهای حسابداری عمومی نه چک‌های گمرکی منطقه <bdi dir="ltr">(PINT-AE, SABER, Egypt ACID)</bdi> را می‌شناسند و نه با ریتم کاری واقعی تاجران همخوانی دارند.',
      ],
    },
    solutionNarrative: {
      en: [
        'Exvorta was architected as a modular Payload CMS + Next.js 15 Trade Business OS centered on a single canonical record: the Trade File. Entering line items, HS 2022 commodity codes (5,600+ indexed subheadings), and Incoterms 2020 responsibilities once automatically derives Proforma Invoices, PINT-AE XML-ready Commercial Invoices, Packing Lists, and Certificate of Origin payloads rendered via Gotenberg.',
        'Around the core Trade File sit an Executive Trade Copilot (scoring operational health 0–100, surfacing unbilled shipments and margin erosion below 8%), a Smart Quote Desk with reverse-margin pricing across all 7 Incoterms (EXW to DDP), a SHA-256 Bank Deal Dossier exporter, and crypto-native billing (NOWPayments + BTCPay, USDT on TRON).',
      ],
      fa: [
        'پلتفرم <bdi dir="ltr">Exvorta</bdi> بر پایه معماری ماژولار <bdi dir="ltr">Next.js 15 + Payload CMS + PostgreSQL</bdi> حول یک هسته واحد طراحی شد: «پرونده معامله» <bdi dir="ltr">(Trade File)</bdi>. با یک‌بار ثبت اقلام، کد تعرفه از میان ۵٬۶۰۰+ زیرفصل <bdi dir="ltr">WCO HS 2022</bdi> و اینکوترمز، هر چهار سند اصلی (پیش‌فاکتور، فاکتور تجاری منطبق با <bdi dir="ltr">PINT-AE</bdi>، پکینگ‌لیست و گواهی مبدأ) توسط سرویس <bdi dir="ltr">Gotenberg</bdi> تولید می‌شوند.',
        'در کنار هسته اسناد، دستیار هوشمند مدیرعامل <bdi dir="ltr">(Trade Copilot)</bdi> برای پایش نشت درآمدی و حاشیه سود زیر ۸٪، میز قیمت‌گذاری معکوس روی هر ۷ اینکوترمز <bdi dir="ltr">(EXW → DDP)</bdi>، خروجی پرونده بانکی با امضای <bdi dir="ltr">SHA-256</bdi> و درگاه پرداخت کریپتویی <bdi dir="ltr">(USDT / TRON)</bdi> پیاده‌سازی شده‌اند.',
      ],
    },
    topologyNodes: [
      {
        id: 'edge',
        code: 'INGRESS · EDGE',
        title: { en: 'Cloudflare Edge Shell (v8)', fa: 'پوسته لبه Cloudflare (نسخه v8)' },
        tech: 'Cloudflare Pages · GSAP 3 · 141 Static Routes',
        detail: {
          en: 'Trilingual (EN/FA/AR) marketing & interactive clearance preview deployed globally with 100/100 desktop Lighthouse scores.',
          fa: 'وب‌سایت سه‌زبانه <bdi dir="ltr">(EN/FA/AR)</bdi> با پیش‌نمایش زنده میز ترخیص روی شبکه لبه کلودفلر و امتیاز کامل سرعت دسکتاپ.',
        },
      },
      {
        id: 'core',
        code: 'CORE · MONOLITH',
        title: { en: 'Trade File & Copilot Engine', fa: 'هسته پرونده معامله و دستیار هوشمند' },
        tech: 'Next.js 15 · Payload CMS · TypeScript',
        detail: {
          en: 'Tenant-scoped Trade File state machine, True Seller P&L calculator, CBM container planner, and 5,600+-code WCO HS lookup.',
          fa: 'ماشین وضعیت چندمستاجره پرونده تجاری، محاسبه‌گر دقیق سود خالص، برنامه‌ریز حجم کانتینر <bdi dir="ltr">(CBM)</bdi> و جستجوی آنی کدهای گمرکی.',
        },
      },
      {
        id: 'docs',
        code: 'COMPLIANCE · PDF/XML',
        title: { en: 'Document & PINT-AE Compiler', fa: 'موتور تولید اسناد و استاندارد PINT-AE' },
        tech: 'Gotenberg :3002 · UBL PINT-AE XML · SHA-256',
        detail: {
          en: 'Compiles deterministic bilingual PDFs and UAE Peppol PINT-AE XML envelopes with cryptographic deal dossier hashes.',
          fa: 'تبدیل داده‌های معامله به اسناد PDF دوزبانه بدون به‌هم‌ریختگی و ساختار <bdi dir="ltr">PINT-AE XML</bdi> همراه با امضای دیجیتال <bdi dir="ltr">SHA-256</bdi>.',
        },
      },
      {
        id: 'rail',
        code: 'SETTLEMENT · CRYPTO',
        title: { en: 'Sovereign Billing & Ledger', fa: 'ریل پرداخت کریپتو و خزانه‌داری' },
        tech: 'NOWPayments · BTCPay · USDT (TRC-20)',
        detail: {
          en: 'Crypto-native subscription & per-file credit ledger ($0 Starter, $99 Core, $249 Compliance, $399 Unlimited) plus AR/AP tracking.',
          fa: 'سیستم اعتبار پرونده و اشتراک مبتنی بر <bdi dir="ltr">USDT</bdi> روی شبکه ترون (استارتر ۰ دلار، کور ۹۹ دلار، کامپلاینس ۲۴۹ دلار، نامحدود ۳۹۹ دلار) به همراه مدیریت حساب‌های دریافتنی و پرداختنی <bdi dir="ltr">(AR/AP)</bdi>.',
        },
      },
      {
        id: 'db',
        code: 'PERSISTENCE · QA',
        title: { en: 'PostgreSQL + 1,152 Test Gate', fa: 'دیتابیس PostgreSQL و گیت ۱٬۱۵۲ تستی' },
        tech: 'PostgreSQL · 22 Migrations · Vitest + Playwright',
        detail: {
          en: '22 versioned schema migrations verified by 110 Vitest suites (1,152 tests) and Playwright 1440px/390px visual gates.',
          fa: '۲۲ مایگریشن نسخه‌بندی‌شده دیتابیس، تاییدشده با ۱۱۰ فایل تست واحد و بررسی چشمی خودکار دسکتاپ و موبایل.',
        },
      },
    ],
    decisions: [
      {
        title: { en: 'Modular Monolith Over Microservice Sprawl', fa: 'مونولیت ماژولار به‌جای پراکندگی میکروسرویس‌ها' },
        body: {
          en: 'Keeping Trade Files, Counterparty CRM, HS Catalog, and Compliance Rules inside one strongly-typed Payload + Next.js 15 repository eliminated cross-service schema drift and enabled 1,152 fast deterministic tests.',
          fa: 'نگه‌داشتن پرونده تجاری، CRM طرف‌حساب‌ها و موتور قوانین گمرکی در یک مخزن تایپ‌شده یکپارچه، خطای ناهماهنگی اسکیما را صفر کرد و اجرای سریع ۱٬۱۵۲ تست را ممکن ساخت.',
        },
      },
      {
        title: { en: 'WhatsApp-Compatible Workflows, Not Anti-WhatsApp', fa: 'هم‌افزایی با واتس‌اپ به‌جای جنگیدن با عادت تاجر' },
        body: {
          en: 'Traders close deals in WhatsApp. The Smart Quote Desk generates bilingual EN/AR WhatsApp-ready commercial offers that convert into a full Trade File in one click.',
          fa: 'تاجران در واتس‌اپ مذاکره می‌کنند؛ میز پیش‌فاکتور هوشمند متن پیشنهاد تجاری دوزبانه آماده ارسال در واتس‌اپ تولید می‌کند و با یک کلیک آن را به پرونده رسمی تبدیل می‌کند.',
        },
      },
      {
        title: { en: 'Split Edge Marketing vs. Sovereign App Runtime', fa: 'جداسازی وب‌سایت لبه از سرور پردازش اسناد' },
        body: {
          en: 'Deploying the 141-route marketing & interactive preview shell to Cloudflare Pages guarantees instant global TTFB while isolating heavy Gotenberg PDF rendering on dedicated Linux containers.',
          fa: 'میزبانی وب‌سایت ۱۴۱ صفحه‌ای روی لبه کلودفلر سرعت بارگذاری جهانی را تضمین می‌کند و بار رندر سنگین PDF را روی کانتینرهای اختصاصی ایزوله نگه می‌دارد.',
        },
      },
      {
        title: { en: 'Crypto-Native Cross-Border Settlement', fa: 'معماری تسویه بین‌المللی مبتنی بر استیبل‌کوین' },
        body: {
          en: 'Built NOWPayments + BTCPay USDT/TRON billing with signed webhook verification so cross-border traders can onboard without traditional card-acquiring friction.',
          fa: 'پیاده‌سازی پرداخت <bdi dir="ltr">USDT (TRC-20)</bdi> با وب‌هوک‌های امضاشده برای حذف موانع بانکی پیش روی شرکت‌های تجاری بین‌المللی.',
        },
      },
    ],
    codeArtifact: `$ pnpm tsc --noEmit && pnpm vitest run
 ✓ 110 test files passed (1,152 assertions · 0 failures)
 ✓ Migrations #01..#22 verified (bos_v2_trader_os: products, trade_files, counterparties)
 ✓ WCO HS 2022 index loaded: 5,600+ subheadings | Incoterms 2020 P&L solver: PASS
$ curl -sI https://exvorta.com -> HTTP/2 200 (Cloudflare Pages Edge · LH 100/100/100/100)`,
    gates: [
      { metric: { en: 'Live Marketing Shell', fa: 'پوسته بازاریابی زنده' }, status: { en: 'HTTP/2 200 · 141 Routes (EN/FA/AR)', fa: 'HTTP/2 200 · ۱۴۱ مسیر (EN/FA/AR)' }, pass: true },
      { metric: { en: 'Unit & Integration Suite', fa: 'سوئیت تست واحد و یکپارچه' }, status: { en: '110 Files · 1,152 Vitest Assertions PASS', fa: '۱۱۰ فایل · ۱٬۱۵۲ گزاره Vitest پاس‌شده' }, pass: true },
      { metric: { en: 'Playwright Visual Gate', fa: 'گیت بصری Playwright' }, status: { en: '1440×900 & 390×844 · 0px Overflow', fa: '۱۴۴۰×۹۰۰ و ۳۹۰×۸۴۴ · بدون سرریز' }, pass: true },
      { metric: { en: 'Public Source Proof', fa: 'اثبات منبع عمومی' }, status: { en: 'github.com/hamidmehrani/exvorta-main (Nov 2026 snapshot)', fa: 'github.com/hamidmehrani/exvorta-main (اسنپ‌شات نوامبر ۲۰۲۶)' }, pass: true },
    ],
    relatedIds: ['firoza', 'leadgen', 'audit'],
  },

  firoza: {
    id: 'firoza',
    index: '02',
    route: '/work/firoza',
    accent: '#0EC49A',
    accentSecondary: '#38BDF8',
    heroMetrics: [
      {
        val: { en: '239', fa: '۲۳۹' },
        label: { en: 'Static Edge Pages Across 10 Languages', fa: 'صفحه استاتیک فوق‌سریع در ۱۰ زبان زنده' },
      },
      {
        val: { en: '46 sRGB', fa: '۴۶ فریم' },
        label: { en: 'Unretouched Natural-Light Stone Captures', fa: 'تصویر واقعی و بدون روتوش از سنگ طبیعی' },
      },
      {
        val: { en: '0 AI Img', fa: '۰ تصویر AI' },
        label: { en: 'Strict Anti-Fabrication Provenance Policy', fa: 'قانون سخت‌گیرانه منع تصویر و داده ساختگی' },
      },
    ],
    tagline: {
      en: 'Direct Nishapur turquoise wholesale atelier engineered around unretouched optical inspection, 10-locale static speed, and SHA-256 lot provenance.',
      fa: 'آتلیه عمده‌فروشی مستقیم فیروزه نیشابور با ذره‌بین اپتیکال ۲٫۵ برابر، معماری استاتیک ۱۰ زبانه و اصالت‌سنجی دقیق محموله‌ها.',
    },
    startingPoint: {
      en: [
        'Authentic Nishapur turquoise is prized globally by jewelers and stone houses from Bangkok to Istanbul, yet wholesale buyers face severe trust barriers online: over-saturated studio retouching, synthetic/stabilized stones passed off as natural, and slow CMS catalogs that fail across Asian and Middle Eastern scripts.',
        'Working directly alongside veteran Nishapur mine partners (30 years of direct mine extraction), the technical mandate was uncompromising: build a zero-overhead global export platform that never fabricates lot weights or prices and never uses AI-generated stone imagery.',
      ],
      fa: [
        'فیروزه اصل نیشابور در بازارهای جهانی جواهر از بانکوک تا استانبول تقاضای بالایی دارد، اما خریداران عمده در فضای آنلاین با دو مشکل جدی روبه‌رو هستند: عکس‌های ادیت‌شده و غیرواقعی، و سایت‌های سنگین که در زبان‌های شرقی و راست‌به‌چپ به‌هم می‌ریزند.',
        'در شراکت مستقیم با معدن‌داران باسابقه نیشابور، قانون فنی پروژه مطلق بود: ساخت یک پلتفرم صادراتی بدون سرور اضافه که هرگز وزن یا قیمت فرضی نسازد و مطلقاً از هیچ تصویر مصنوعی یا رندرشده‌ای استفاده نکند.',
      ],
    },
    solutionNarrative: {
      en: [
        'Firoza v5 Atelier replaces heavy database/CMS hosting with a pure Next.js static export (`output: "export"`) compiling 239 localized routes across 10 languages (`en`, `fa`, `ar`, `zh`, `ja`, `ko`, `ru`, `tr`, `es`, `th`) deployed straight to Cloudflare Pages with Cloudflare Functions handling rate-limited B2B inquiries.',
        'The visual system pairs a Darkroom Obsidian Light Table (`#0B0F0E`) for evaluating turquoise color and spiderweb matrix under an interactive 2.5x optical loupe with a Daylight Sorting Sheet (`#F6F5F1`) presenting 8 numbered parcel dossiers (`NIS-2026-001..008`), 5 unedited 720p workshop films, 7 DAP/CPT/CIP air-freight hub tables, and a persistent WhatsApp quotation brief.',
      ],
      fa: [
        'نسخه <bdi dir="ltr">v5 Atelier</bdi> فیروزه با حذف کامل سربار دیتابیس و CMS، به‌صورت خروجی کاملاً استاتیک در **۲۳۹ مسیر و ۱۰ زبان زنده دنیا** روی لبه <bdi dir="ltr">Cloudflare Pages</bdi> مستقر شد و پردازش فرم‌های استعلام عمده را به <bdi dir="ltr">Pages Functions</bdi> سپرد.',
        'رابط کاربری از دو محیط متضاد تشکیل شده است: «میز نور تاریک‌خانه» <bdi dir="ltr">(#0B0F0E)</bdi> مجهز به ذره‌بین اپتیکال ۲٫۵ برابر برای بررسی رگه‌های عنکبوتی سنگ، و «برگه تفکیک روز روشن» <bdi dir="ltr">(#F6F5F1)</bdi> شامل ۸ پرونده محموله <bdi dir="ltr">(NIS-2026-001..008)</bdi> با هش <bdi dir="ltr">SHA-256</bdi>، ۵ فیلم واقعی کارگاه و جدول ارسال هوایی به ۷ هاب جهانی.',
      ],
    },
    topologyNodes: [
      {
        id: 'locales',
        code: 'STATIC · 10 LOCALES',
        title: { en: '239-Route Multilingual Matrix', fa: 'ماتریس ۲۳۹ صفحه‌ای در ۱۰ زبان' },
        tech: 'Next.js Static Export · EN/FA/AR/ZH/JA/KO/RU/TR/ES/TH',
        detail: {
          en: 'Zero Node.js origin overhead; every locale route pre-rendered with native script typography and RTL/LTR layout fidelity.',
          fa: 'بدون نیاز به سرور بک‌اند؛ تمامی ۲۳۹ صفحه از پیش رندر شده و با تایپوگرافی استاندارد هر زبان چیدمان شده‌اند.',
        },
      },
      {
        id: 'optics',
        code: 'UI · LIGHT TABLE',
        title: { en: '2.5x Optical Loupe & Matrix Slider', fa: 'ذره‌بین ۲٫۵x و مقایسه‌گر بافت سنگ' },
        tech: '46 sRGB Captures · 5× 720p Clips · Zero Canvas',
        detail: {
          en: 'Buyers inspect natural cabochon polish and spiderweb matrix across 46 unretouched photographs and 5 workshop videos.',
          fa: 'بررسی دقیق جلا و بافت طبیعی فیروزه روی ۴۶ عکس استاندارد <bdi dir="ltr">sRGB</bdi> و ۵ ویدیوی بدون ادیت کارگاه.',
        },
      },
      {
        id: 'claims',
        code: 'TRUTH · VALIDATOR',
        title: { en: 'Automated Claims & Asset Gate', fa: 'گیت خودکار صداقت داده و تصاویر' },
        tech: 'verification/claims.json · SHA-256 Dossiers',
        detail: {
          en: 'Build-time scanner audits 230+ HTML outputs to enforce zero fabricated weights/prices and block any non-verified stone asset.',
          fa: 'اسکنر زمان بیلد تمام فایل‌های خروجی را بررسی می‌کند تا هیچ عدد تاییدنشده یا تصویر غیرواقعی وارد سایت نشود.',
        },
      },
      {
        id: 'worker',
        code: 'EDGE · INQUIRY API',
        title: { en: 'Cloudflare Pages Function RFQ', fa: 'هندلر استعلام روی لبه کلودفلر' },
        tech: 'functions/api/inquiry.js · Turnstile · WhatsApp Brief',
        detail: {
          en: 'Serverless POST handler (`200` verified, `405` on GET) paired with a persistent lot-selection brief that exports cleanly to WhatsApp.',
          fa: 'تابع سرورلس پردازش فرم در کنار سبد انتخاب محموله‌ها که لیست دقیق درخواستی خریدار را آماده ارسال در واتس‌اپ می‌کند.',
        },
      },
      {
        id: 'rtl',
        code: 'TYPOGRAPHY · RTL',
        title: { en: 'Variable Persian Font Pipeline', fa: 'تایپوگرافی فارسی با فونت متغیر' },
        tech: 'YekanBakhFaNum · IRANYekanXVFaNumVF',
        detail: {
          en: 'Eliminated Arabic/Persian glyph disconnection by enforcing zero letter-spacing and genuine variable weights.',
          fa: 'رفع کامل گسستگی حروف فارسی و عربی با اعمال <bdi dir="ltr">letter-spacing: 0</bdi> و استفاده از فونت‌های متغیر اصلی.',
        },
      },
    ],
    decisions: [
      {
        title: { en: 'Deleting the CMS to Achieve Zero-Maintenance Speed', fa: 'حذف کامل CMS برای سرعت مطلق و نگهداری صفر' },
        body: {
          en: 'Because wholesale stone parcels change only upon verified physical sorting, migrating from Payload/Neon to static JSON + Cloudflare Pages removed database cold starts and hosting bills entirely.',
          fa: 'از آنجا که محموله‌های عمده سنگ فقط پس از تفکیک فیزیکی تغییر می‌کنند، مهاجرت به معماری استاتیک هزینه سرور و تاخیر دیتابیس را به صفر رساند.',
        },
      },
      {
        title: { en: 'Build-Enforced Honesty Contract', fa: 'قرارداد صداقت تجاری در سطح کد' },
        body: {
          en: 'Rather than relying on manual copy review, `verification/claims.json` fails the build if synthetic stone filenames or unverified capacity claims appear anywhere in the bundle.',
          fa: 'به‌جای بازبینی چشمی متن‌ها، اسکریپت اعتبارسنج در صورت مشاهده هرگونه ادعای حجمی تاییدنشده بیلد را متوقف می‌کند.',
        },
      },
      {
        title: { en: 'Dual-Surface Gemological Contrast', fa: 'تضاد دوگانه میز نور جواهرشناسی و برگه تفکیک' },
        body: {
          en: 'Turquoise chroma reads accurately only on neutral dark obsidian, while logistics incoterms (DAP/CPT/CIP) read cleanest on daylight paper — so the page transitions intentionally between both.',
          fa: 'رنگ واقعی فیروزه روی زمینه تیره خنثی دیده می‌شود اما جداول حمل‌ونقل هوایی روی کاغذ روشن خواناترند؛ طراحی سایت هوشمندانه بین این دو فضا حرکت می‌کند.',
        },
      },
      {
        title: { en: '10-Language Buyer Reach Without Translation Drift', fa: 'پوشش ۱۰ زبان تجاری بازار سنگ بدون افت چیدمان' },
        body: {
          en: 'Structured locale dictionaries serve buyers across East Asia, MENA, Europe, and Turkey while preserving identical parcel codes (`NIS-2026-001..008`).',
          fa: 'دیکشنری‌های ساخت‌یافته، خریداران شرق آسیا، خاورمیانه و اروپا را با حفظ کد یکسان محموله‌ها پوشش می‌دهند.',
        },
      },
    ],
    codeArtifact: `$ next build (output: 'export') -> 239 static pages generated across 10 locales
 ✓ Claims audit (verification/claims.json): 0 violations across audited HTML files (Nov 2026)
 ✓ Edge Function test: POST /api/inquiry -> 200 OK | GET /api/inquiry -> 405
 ✓ Playwright Live QA (https://www.firoza.ir): 1440×900 & 390×844 -> 0 broken images, 0 console errors`,
    gates: [
      { metric: { en: 'Global Edge Production', fa: 'پروداکشن زنده روی لبه' }, status: { en: 'https://www.firoza.ir · HTTP 200 Verified', fa: 'https://www.firoza.ir · تایید HTTP 200' }, pass: true },
      { metric: { en: 'Multilingual Footprint', fa: 'پوشش چندزبانه' }, status: { en: '239 Static Routes · 10 Languages', fa: '۲۳۹ مسیر استاتیک · ۱۰ زبان' }, pass: true },
      { metric: { en: 'Provenance Integrity', fa: 'یکپارچگی اصالت' }, status: { en: '46 Real sRGB Photos · 0 Synthetic Assets', fa: '۴۶ عکس واقعی sRGB · بدون دارایی مصنوعی' }, pass: true },
      { metric: { en: 'Viewport & Console Gate', fa: 'گیت ویوپورت و کنسول' }, status: { en: 'Desktop 1440px & Mobile 390px · 0 Errors', fa: 'دسکتاپ ۱۴۴۰px و موبایل ۳۹۰px · بدون خطا' }, pass: true },
    ],
    relatedIds: ['exvorta', 'hamesu', 'daftaryar'],
  },

  hamesu: {
    id: 'hamesu',
    index: '03',
    route: '/work/hamesu',
    accent: '#D2A738',
    accentSecondary: '#0EC49A',
    heroMetrics: [
      {
        val: { en: '73 Routes', fa: '۷۳ مسیر' },
        label: { en: 'Compiled Across Storefront (30) & Console (43)', fa: 'کامپایل‌شده در ویترین فروشگاه (۳۰) و کنسول (۴۳)' },
      },
      {
        val: { en: '3 Services', fa: '۳ سرویس' },
        label: { en: 'Live Medusa Backend, Storefront & Merchant Console', fa: 'سرویس فعال بک‌اند، فروشگاه و پنل فروشنده' },
      },
      {
        val: { en: '0px', fa: '۰ پیکسل' },
        label: { en: 'Horizontal Overflow Across 26 RTL QA Slices', fa: 'سرریز افقی در ۲۶ اسکرین‌شات تست چشمی RTL' },
      },
    ],
    tagline: {
      en: 'Multi-tenant commerce operating system turning Iranian Instagram sellers and physical shops into full-stack storefronts with marketplace feeds and Rial accounting.',
      fa: 'سیستم‌عامل فروشگاه‌ساز چندمستاجره برای تبدیل پیج‌های اینستاگرامی و مغازه‌های فیزیکی به فروشگاه مستقل با فید ترب، درگاه ریالی و حسابداری.',
    },
    startingPoint: {
      en: [
        'An estimated 130,000+ Iranian social sellers (market estimate, Nov 2026) take orders manually inside Instagram DMs via card-to-card screenshots, losing buyers at checkout and failing the technical requirements needed to list on high-intent price-comparison engines like Torob and Emalls.',
        'Meanwhile, jewelry and gold merchants require dynamic real-time gram pricing tied to market rates and Article 26 VAT formulas — capabilities missing from generic store builders.',
      ],
      fa: [
        'برآورد می‌شود بیش از ۱۳۰ هزار فروشنده اینستاگرامی در ایران سفارش‌ها را دستی در دایرکت و با عکس فیش کارت‌به‌کارت ثبت می‌کنند؛ روشی که هم باعث ریزش خریدار می‌شود و هم امکان اتصال به موتورهای مقایسه قیمت پرمخاطب مثل ترب و ایمالز را از آن‌ها می‌گیرد.',
        'از سوی دیگر، اصناف تخصصی مثل طلا و جواهر نیازمند محاسبه لحظه‌ای قیمت بر اساس نرخ روز گرم طلا و فرمول مالیات بر ارزش افزوده ماده ۲۶ هستند که در فروشگاه‌سازهای معمولی وجود ندارد.',
      ],
    },
    solutionNarrative: {
      en: [
        'Hamesu pairs a Medusa 2.22 headless commerce core and PostgreSQL Row-Level Security (RLS) multi-tenancy with a Next.js 16 storefront (30 routes, instant `/buy/[handle]` DM checkout, 4-step BNPL split) and a 43-route merchant operations console.',
        'Recent engineering slices (`PROMALL-OS-01` & `WEBSITE-V6-AWWWARDS`) eliminated every stub screen in the merchant console — shipping an Instagram caption-to-SKU parser, multi-branch inventory, 7-day RMA returns, a Rial general ledger, signed Torob feeds, 5-role staff RBAC, and a zero-CPU local-to-VPS bundle deployer.',
      ],
      fa: [
        'پلتفرم **همه‌سو (Hamesu)** موتور تجارت الکترونیک <bdi dir="ltr">Medusa 2.22</bdi> و دیتابیس چندمستاجره <bdi dir="ltr">PostgreSQL (RLS)</bdi> را با ویترین <bdi dir="ltr">Next.js 16</bdi> (شامل لینک خرید فوری دایرکت <bdi dir="ltr">/buy/[handle]</bdi> و خرید اقساطی) و کنسول مدیریتی ۴۳ صفحه‌ای ترکیب می‌کند.',
        'در اسلایس‌های مهندسی اخیر، تمام صفحات نمونه حذف و قابلیت‌های واقعی عملیاتی جایگزین شدند: تبدیل خودکار کپشن اینستاگرام به کالا، انبار چندشعبه‌ای، سیستم مرجوعی ۷ روزه، دفترکل ریالی، فید امضاشده ترب، سطح دسترسی ۵ نقشی کارکنان و تایپوگرافی بومی با فونت‌های متغیر <bdi dir="ltr">Yekan Bakh</bdi> و <bdi dir="ltr">IRANYekanX</bdi>.',
      ],
    },
    topologyNodes: [
      {
        id: 'storefront',
        code: 'STOREFRONT · :3210',
        title: { en: 'Next.js Multi-Tenant Storefront', fa: 'ویترین چندمستاجره Next.js' },
        tech: 'Next.js 16 · 30 Routes · Instant DM Checkout',
        detail: {
          en: 'Serves custom merchant themes, jewelry/gold dynamic pricing views, `/buy/[handle]` social checkout, and signed Torob/Emalls XML/JSON feeds.',
          fa: 'ارائه قالب‌های فروشگاهی، قیمت‌گذاری پویا طلا، صفحه خرید سریع ویژه دایرکت و فیدهای استاندارد ترب و ایمالز.',
        },
      },
      {
        id: 'console',
        code: 'CONSOLE · :7102',
        title: { en: '43-Route Merchant ProMall OS', fa: 'کنسول ۴۳ صفحه‌ای مدیریت فروشنده' },
        tech: 'Next.js · 5-Role RBAC · BI & Excel Export',
        detail: {
          en: 'Full RTL merchant cockpit: Instagram caption parser, multi-branch stock, Rial ledger, returns hub, and channel sync health.',
          fa: 'پیشخوان کامل فروشنده: پارسر کپشن اینستاگرام، انبار چندشعبه، دفترکل ریالی، مدیریت مرجوعی و گزارش‌های تحلیلی اکسل.',
        },
      },
      {
        id: 'medusa',
        code: 'COMMERCE · :9000',
        title: { en: 'Medusa 2.22 Core & Payment Rails', fa: 'هسته Medusa و درگاه‌های پرداخت' },
        tech: 'Medusa 2.22.1 · Zarinpal · Card-to-Card · COD',
        detail: {
          en: 'Handles large-catalog imports (20k-SKU resumable-import contract), Zarinpal gateway, structured Card-to-Card receipt verification, and COD reconciliation.',
          fa: 'پشتیبانی از ایمپورت کاتالوگ‌های بزرگ (قرارداد ایمپورت ۲۰ هزار کالا)، درگاه زرین‌پال، تایید هوشمند رسید کارت‌به‌کارت و تسویه پرداخت در محل.',
        },
      },
      {
        id: 'data',
        code: 'ISOLATION · DATA',
        title: { en: 'PostgreSQL RLS + Dual Redis', fa: 'دیتابیس PostgreSQL RLS و دو کانتینر Redis' },
        tech: 'Postgres :55432 · Redis Cache :6379 · Queue :6380',
        detail: {
          en: 'Strict Row-Level Security tenant isolation paired with dedicated Redis cache and BullMQ background sync workers.',
          fa: 'ایزولاسیون کامل داده‌های هر فروشگاه در سطح ردیف دیتابیس همراه با دو سرویس مجزای کش و صف پردازش پس‌زمینه.',
        },
      },
      {
        id: 'deploy',
        code: 'OPS · ZERO-CPU SHIP',
        title: { en: 'Prebuilt Bundle Ship Pipeline', fa: 'پایپ‌لاین دیپلوی بدون سربار CPU سرور' },
        tech: 'ship-prebuilt-from-local.sh · Deploy Guard',
        detail: {
          en: 'Compiles `.medusa/server`, storefront, and console locally and ships atomic artifacts behind load-average safety gates.',
          fa: 'کامپایل کامل باندل‌ها روی ماشین لوکال و انتقال اتمیک به سرور پشت گارد محافظ لود برای جلوگیری از فشار روی پروداکشن.',
        },
      },
    ],
    decisions: [
      {
        title: { en: 'Self-Hosted Variable Fonts Eliminating Synthetic Bold', fa: 'فونت‌های متغیر سلف‌هاست و حذف بولد مصنوعی' },
        body: {
          en: 'A dedicated typography audit (`FONT-AUDIT-v4`) caught browsers synthesizing fake bold weights on Persian headings; switching to self-hosted `Yekan Bakh VF` + `IRANYekanX VF` with `font-synthesis: none` fixed RTL rendering permanently.',
          fa: 'ممیزی تایپوگرافی نشان داد مرورگرها وزن بولد فارسی را مصنوعی شبیه‌سازی می‌کنند؛ مهاجرت به دو فونت متغیر اصلی با <bdi dir="ltr">font-synthesis: none</bdi> کیفیت حروف را تضمین کرد.',
        },
      },
      {
        title: { en: 'Zero-CPU Production Shipping Discipline', fa: 'انضباط استقرار بدون بیلد روی سرور پروداکشن' },
        body: {
          en: 'Running Next.js/Medusa builds on a shared 4-vCPU box spikes load and starves live traffic; `OPS-DEPLOY-ZERO-CPU-01` builds locally and syncs prebuilt artifacts only when 5-min load is safe.',
          fa: 'بیلد گرفتن روی سرور زنده باعث افت سرعت کاربران می‌شود؛ اسکریپت انتقال باندل پیش‌ساخته، فشار پردازشی دیپلوی را روی سرور به صفر رساند.',
        },
      },
      {
        title: { en: 'Solving the Real Wedge: Torob + DM Checkout', fa: 'تمرکز بر نیاز واقعی: خرید سریع دایرکت + اتصال به ترب' },
        body: {
          en: 'Instead of promising 100 imaginary channels, Hamesu nails the exact loop Iranian merchants pay for today: instant DM checkout links, Zarinpal/C2C, and signed Torob price feeds.',
          fa: 'به‌جای وعده کانال‌های خیالی، دقیقاً چرخه پول‌ساز فروشنده ایرانی پیاده شد: لینک پرداخت دایرکت، کارت‌به‌کارت ساخت‌یافته و فید رسمی ترب.',
        },
      },
      {
        title: { en: '108+ Test Suites Across Tenancy & Reconciliation', fa: 'پوشش تست گسترده روی چندمستاجری و مغایرت‌گیری مالی' },
        body: {
          en: '67.4k+ lines of TypeScript backed by 108 test files covering tenant boundaries, marketplace sync, and Rial fee caps.',
          fa: 'بیش از ۶۷ هزار خط کد تایپ‌اسکریپت با ۱۰۸ فایل تست روی مرزهای امنیتی تننت‌ها و محاسبات کارمزد ریالی.',
        },
      },
    ],
    codeArtifact: `$ bash scripts/agent/gate.sh (Hamesu main @ 05fa3e17, verified 2026-11-18)
 ✓ .medusa/server compiled | storefront: 30 routes | console: 43 routes (0 stub pages)
 ✓ Visual QA Playwright: 26 slices @ 1440px & 390px -> overflowPx: 0, consoleErrors: 0
 ✓ Live systemd check: hamesu-backend (active) · hamesu-storefront (active) · https://hamesu.ir -> 200`,
    gates: [
      { metric: { en: 'Live Storefront Endpoint', fa: 'اندپوینت زنده فروشگاه' }, status: { en: 'https://hamesu.ir · HTTP 200 Active', fa: 'https://hamesu.ir · فعال HTTP 200' }, pass: true },
      { metric: { en: 'Compiled Application Surface', fa: 'سطح اپلیکیشن کامپایل‌شده' }, status: { en: '30 Storefront + 43 Console Routes', fa: '۳۰ مسیر ویترین + ۴۳ مسیر کنسول' }, pass: true },
      { metric: { en: 'RTL Typography & Visual QA', fa: 'تایپوگرافی RTL و QA بصری' }, status: { en: '26 Slices · 0px Overflow · 0 External Fonts', fa: '۲۶ اسلایس · بدون سرریز · بدون فونت خارجی' }, pass: true },
      { metric: { en: 'Multi-Tenant Infra', fa: 'زیرساخت چندمستاجره' }, status: { en: 'Postgres RLS + 2× Redis Containers Active', fa: 'Postgres RLS + ۲ کانتینر Redis فعال' }, pass: true },
    ],
    relatedIds: ['daftaryar', 'exvorta', 'cvly'],
  },

  cvly: {
    id: 'cvly',
    index: '04',
    route: '/work/cvly',
    accent: '#38BDF8',
    accentSecondary: '#0EC49A',
    heroMetrics: [
      {
        val: { en: '6,577', fa: '۶٬۵۷۷' },
        label: { en: 'Live Indexed Iranian Job Listings (0 Mock Rows)', fa: 'آگهی شغلی واقعی ایندکس‌شده (بدون داده آزمایشی)' },
      },
      {
        val: { en: '832', fa: '۸۳۲' },
        label: { en: 'Verified Market Salary Signals in /salaries', fa: 'سیگنال واقعی حقوق بازار کار در کاوشگر حقوق' },
      },
      {
        val: { en: '7 Boards', fa: '۷ مرجع' },
        label: { en: 'Automated Crawlers With Health Telemetry', fa: 'خزنده خودکار منابع کاریابی ایران با پایش سلامت' },
      },
    ],
    tagline: {
      en: 'AI career intelligence and anti-fabrication resume tailoring platform indexing 6,577 live jobs across 7 Iranian boards.',
      fa: 'پلتفرم کاریابی هوشمند، کاوشگر حقوق واقعی بازار ایران و شخصی‌سازی ضدجعل رزومه روی ۶٬۵۷۷ آگهی زنده از ۷ مرجع کاریابی.',
    },
    startingPoint: {
      en: [
        'Job seekers in Iran jump across fragmented boards (Jobeelo, JobVision, IranTalent, EEstekhdam, Quera, Karboom, Estekhdam24) sending identical generic resumes — yielding an estimated ~2.6% interview rate versus ~9.3% for tailored applications (industry estimates, Nov 2026).',
        'At the same time, naive LLM resume rewriters hallucinate employers, dates, or skills the candidate never had, destroying credibility in technical interviews.',
      ],
      fa: [
        'کارجویان بازار ایران بین چندین سایت پراکنده (جوبیلو، جاب‌ویژن، ایران‌تلنت، ای‌استخدام، کوئرا، کاربوم و استخدام۲۴) سرگردان‌اند و یک رزومه ثابت را برای همه می‌فرستند؛ در حالی که نرخ مصاحبه اپلای هدفمند بیش از ۳ برابر ارسال انبوه است.',
        'از طرفی ابزارهای هوش مصنوعی معمولی هنگام بازنویسی رزومه، سابقه یا مهارت خیالی می‌سازند که اعتبار کارجو را در جلسه مصاحبه از بین می‌برد.',
      ],
    },
    solutionNarrative: {
      en: [
        'Cvly (live on R23.2 @ `98a9ea0`, verified 2026-11-18) indexes 6,577 live listings (Nov 2026 snapshot) across 7 sources into a tuned SQLite WAL engine (`busy_timeout=30000`, shared inter-worker `PrivateTmp` caches, sub-second loopback response) behind FastAPI, RTL Jinja2, and HTMX/Alpine.',
        'Users can run a zero-signup Instant Fit Check (`POST /api/instant-check`), explore 832 real salary benchmarks on `/salaries`, generate per-job tailored resumes guarded by a deterministic anti-fabrication validator ported from JobHunt, and export crisp Persian PDFs.',
      ],
      fa: [
        'پلتفرم **سی‌ولی (Cvly)** در نسخه <bdi dir="ltr">R23.2</bdi> بیش از ۶٬۵۷۷ آگهی واقعی (اسنپ‌شات نوامبر ۲۰۲۶) را از ۷ منبع کاریابی در دیتابیس بهینه‌شده <bdi dir="ltr">SQLite WAL</bdi> با کش بین‌ورکری ایندکس می‌کند تا صفحات اصلی زیر ۱ ثانیه روی لوپ‌بک پاسخ دهند.',
        'کارجو بدون نیاز به ثبت‌نام اولیه می‌تواند در صفحه خانه امتیاز تطابق رزومه خود را بسنجد، در بخش <bdi dir="ltr">/salaries</bdi> حقوق واقعی بازار را بر پایه ۸۳۲ سیگنال ببیند و رزومه شخصی‌سازی‌شده بدون هیچ‌گونه جعل فکت را در قالب PDF فارسی تحویل بگیرد.',
      ],
    },
    topologyNodes: [
      {
        id: 'crawlers',
        code: 'INGEST · 7 SOURCES',
        title: { en: '2-Hour Scheduled Board Crawlers', fa: 'خزنده‌های زمان‌بندی‌شده ۷ سایت کاریابی' },
        tech: 'cvly-fetch.timer · Jobvision · Quera · Karboom +4',
        detail: {
          en: 'Systemd timer ingests, deduplicates, and normalizes 6,577 live listings with zero `mock_*` placeholder records.',
          fa: 'تایمر خودکار هر ۲ ساعت آگهی‌های جدید را از ۷ مرجع جمع‌آوری، یکتاسازی و بدون هیچ رکورد فیکی ذخیره می‌کند.',
        },
      },
      {
        id: 'api',
        code: 'WEB · FASTAPI :8000',
        title: { en: 'FastAPI + Shared Cache Engine', fa: 'بک‌اند FastAPI با کش اشتراکی پرسرعت' },
        tech: 'FastAPI · SQLite WAL · GZip · scrypt Auth',
        detail: {
          en: 'Removed boot-time backfill bottlenecks, added SQLite composite indexes, and implemented SMTP-free `scrypt` authentication.',
          fa: 'حذف گلوگاه‌های بوت دیتابیس، افزودن ایندکس‌های ترکیبی و احراز هویت امن <bdi dir="ltr">scrypt</bdi> با پاسخ‌دهی زیر ثانیه.',
        },
      },
      {
        id: 'fit',
        code: 'AI · SEMAPHORE',
        title: { en: 'Non-Blocking Fit & Anti-Hallucination', fa: 'موتور تطابق شغلی و اعتبارسنج ضدجعل' },
        tech: 'Global LLM Semaphore · Token Budget · Fact Validator',
        detail: {
          en: 'Scores Persian job fit with explicit reasoning while enforcing strict source-resume fact preservation.',
          fa: 'محاسبه درصد تناسب شغلی با توضیح دقیق فارسی، تحت نظارت ولیدیتور سخت‌گیرانه‌ای که مانع اضافه‌شدن سابقه غیرواقعی می‌شود.',
        },
      },
      {
        id: 'salaries',
        code: 'DATA · SALARIES',
        title: { en: 'Iran Tech Salary Explorer', fa: 'کاوشگر حقوق واقعی بازار کار ایران' },
        tech: '/salaries · 832 Real Market Signals',
        detail: {
          en: 'Aggregates disclosed compensation bands so candidates negotiate from verified market percentiles, never guesswork.',
          fa: 'تحلیل ۸۳۲ داده واقعی حقوق پیشنهادی شرکت‌ها برای کمک به مذاکره دقیق و مستند کارجویان.',
        },
      },
      {
        id: 'ui',
        code: 'UI · VIBEFARSI RTL',
        title: { en: 'VibeFarsi × Mizan RTL Workspace', fa: 'رابط کاربری فارسی VibeFarsi × Mizan' },
        tech: 'Tailwind RTL · HTMX · Chromium PDF Renderer',
        detail: {
          en: 'Persian-first bento workspace with side-by-side resume diff preview, Jalali dates, and headless Chromium PDF export.',
          fa: 'میز کار تمام‌فارسی با پیش‌نمایش مقایسه‌ای تغییرات رزومه، تاریخ شمسی و خروجی استاندارد PDF.',
        },
      },
    ],
    decisions: [
      {
        title: { en: 'Pivoting From Blind Mass-Apply to Targeted Fit Packages', fa: 'چرخش از ارسال انبوه کورکورانه به بسته اپلای هدفمند' },
        body: {
          en: 'Live PM review proved captcha-heavy boards block blind cloud form-filling and mass-apply hurts candidate conversion; focusing on instant fit scoring + verified resume tailoring solved the real bottleneck.',
          fa: 'بررسی داده‌های واقعی نشان داد اپلای انبوه نرخ پاسخ بسیار پایینی دارد؛ تمرکز روی امتیاز تطابق و شخصی‌سازی دقیق رزومه برای هر آگهی بیشترین ارزش واقعی را خلق کرد.',
        },
      },
      {
        title: { en: 'Fixing SQLite High-Load Lock Contention', fa: 'رفع قفل‌شدگی SQLite در ترافیک هم‌زمان' },
        body: {
          en: 'Removing synchronous `backfill_job_roles` from worker startup and adding WAL + `busy_timeout=30000` + shared cache brought `/` down to `0.99s` loopback.',
          fa: 'حذف پردازش‌های سنگین زمان راه‌اندازی و فعال‌سازی <bdi dir="ltr">WAL</bdi> و کش اشتراکی، زمان پاسخ صفحه اصلی را به زیر ۱ ثانیه رساند.',
        },
      },
      {
        title: { en: 'Zero-Signup Value First (`/api/instant-check`)', fa: 'ارائه ارزش فوری پیش از دیوار ثبت‌نام' },
        body: {
          en: 'Visitors test a real job fit analysis right on `/` and `/score` before creating an account, seamlessly carrying state into onboarding.',
          fa: 'کاربر پیش از ثبت‌نام می‌تواند رزومه خود را در برابر آگهی واقعی محک بزند و نتیجه را مستقیم وارد پروفایل کند.',
        },
      },
      {
        title: { en: 'Global LLM Semaphore & Daily Token Guard', fa: 'سمافور سراسری LLM و مدیریت بودجه توکن' },
        body: {
          en: 'Prevents upstream LLM latency spikes from exhausting FastAPI workers or exceeding daily cost ceilings.',
          fa: 'جلوگیری از قفل‌شدن ورکرهای وب هنگام کندی سرویس‌های هوش مصنوعی و کنترل خودکار سقف مصرف روزانه.',
        },
      },
    ],
    codeArtifact: `$ curl -w "%{http_code} %{time_total}s\\n" -o /dev/null https://cvly.ir/
 200 1.18s (loopback: 0.99s | /score: 0.98s | /login: 0.97s)
 ✓ Live SQLite index: 6,577 active job listings across 7 boards (0 mock_* rows) — Nov 2026 snapshot
 ✓ Salary intelligence: 832 verified signals active on /salaries | registered users: 331+ (Nov 2026 snapshot)`,
    gates: [
      { metric: { en: 'Live Job Index', fa: 'ایندکس زنده آگهی‌ها' }, status: { en: '6,577 Real Listings · 7 Sources · 0 Mock', fa: '۶٬۵۷۷ آگهی واقعی · ۷ منبع · بدون داده ساختگی' }, pass: true },
      { metric: { en: 'Salary Explorer', fa: 'کاوشگر حقوق' }, status: { en: '832 Disclosed Compensation Signals', fa: '۸۳۲ سیگنال حقوق اعلام‌شده' }, pass: true },
      { metric: { en: 'Anti-Fabrication Engine', fa: 'موتور ضدجعل' }, status: { en: 'Strict Source-Fact Resume Validator', fa: 'ولیدیتور سخت‌گیرانه منع جعل رزومه' }, pass: true },
      { metric: { en: 'Edge & Service Health', fa: 'سلامت سرویس و لبه' }, status: { en: 'cvly-web.service Active · <1.2s Warm TTFB', fa: 'cvly-web.service فعال · TTFB گرم زیر ۱٫۲ ثانیه' }, pass: true },
    ],
    relatedIds: ['jobhunt', 'hamesu', 'leadgen'],
  },

  leadgen: {
    id: 'leadgen',
    index: '05',
    route: '/work/leadgen',
    accent: '#D2A738',
    accentSecondary: '#0EC49A',
    heroMetrics: [
      {
        val: { en: '48,000+', fa: '+۴۸٬۰۰۰' },
        label: { en: 'B2B Leads Processed Across 21 Countries', fa: 'لید B2B پردازش‌شده در ۲۱ کشور جهان' },
      },
      {
        val: { en: '30+ Mods', fa: '+۳۰ ماژول' },
        label: { en: 'Isolated Python Discovery, Scoring & Safety Suite', fa: 'ماژول تخصصی پایتون برای کشف، امتیازدهی و ایمنی' },
      },
      {
        val: { en: '110/110', fa: '۱۱۰/۱۱۰' },
        label: { en: 'Outreach Studio + Cockpit + Pishro Automated Tests Passing', fa: 'تست خودکار پاس‌شده در استودیو اوتریچ، کاکپیت و پیشرو' },
      },
    ],
    tagline: {
      en: 'Multi-tenant Python B2B discovery engine, Iran B2B Pishro suite, and internal Instantly-class Outreach Studio — engineered with hard sender-freeze safety.',
      fa: 'موتور پایتونی کشف و ارزیابی لید در ۲۱ کشور به همراه استودیو داخلی مدیریت کمپین و سپر سخت حفاظت از دامنه (در وضعیت فریز عملیاتی مالک).',
    },
    startingPoint: {
      en: [
        'Scaling B2B customer acquisition across international export corridors and domestic industrial manufacturers requires two things off-the-shelf SaaS tools rarely combine: deep domain-specific lead enrichment (checking whether an exporter actually needs a website upgrade or corridor compliance) and ruthless sender-reputation protection.',
        'Following early automated runs that processed 48,000+ leads across 21 countries (62,062 total records in `master.db`), internal review of early runs showed raw high-volume cold outreach yielded low reply rates (~0.08% observed vs. a ~3.43% industry benchmark estimate) — prompting an immediate owner-ordered outbound freeze on Nov 6, 2026 (`0` sends) and a ground-up architectural evolution toward precision quality.',
      ],
      fa: [
        'جذب مشتری B2B در کریدورهای صادراتی و کارخانه‌های صنعتی نیازمند ترکیب دو قابلیت است که ابزارهای آماده به‌ندرت کنار هم دارند: ارزیابی فنی واقعی هر سرنخ (مثلاً اسکن ۹گانه وب‌سایت شرکت هدف) و حفاظت بی‌رحمانه از اعتبار دامنه‌های اصلی برند.',
        'پس از پردازش بیش از ۴۸٬۰۰۰ لید در ۲۱ کشور (۶۲٬۰۶۲ رکورد کل در master.db)، بازبینی داده‌ها نشان داد ارسال انبوه نرخ پاسخ پایینی دارد (حدود ۰٫۰۸٪ در برابر بنچمارک تخمینی ۳٫۴۳٪)؛ به همین دلیل از تاریخ ۶ نوامبر ۲۰۲۶ با دستور مستقیم مالک **فریز کامل ارسال (صفر ارسال)** اعمال شد و معماری سیستم به سمت دقت بالا و پلتفرم کنترل‌شده داخلی ارتقا یافت.',
      ],
    },
    solutionNarrative: {
      en: [
        'The LeadGen repository (`hamidmehrani/leadgen-machine`, 492-module test discipline) now encompasses three verified engineering pillars while keeping live production sending strictly locked at `0`: (1) the 30+ module discovery & 85-query-matrix qualification core, (2) **Pishro AI (`LG-PISHRO-IRAN-V1`)** featuring Iranian 11-digit national ID checksum validation, 31 provincial area codes, 12 industrial sector scorers, and a 12-page read-only insights cockpit (`p95 = 12.64ms`), and (3) **Exvorta Outreach Studio (`LG-OUTREACH-STUDIO-V1`)**.',
        'Exvorta Outreach Studio is a pure-white internal Instantly.ai replacement featuring a 9-signal Website Redesign Scanner (`Redesign Need 0–100`), sister-domain DNS doctor (`SPF/DKIM/DMARC`), stepped warmup engine, `NEVER-CLAIM` fact validator reading each tenant’s `FACTS.md`, 3-pane Unibox, and a hard `SenderFreezeError` lock ensuring zero accidental live dispatches.',
      ],
      fa: [
        'مخزن <bdi dir="ltr">leadgen-machine</bdi> با ۴۹۲ ماژول و حفظ قفل کامل ارسال روی سرور پروداکشن، اکنون سه ستون مهندسی تست‌شده دارد: (۱) هسته کشف ۳۰+ ماژوله با ۸۵ ماتریس جستجو در ۲۱ کشور، (۲) زیرسیستم **پیشرو (Pishro AI)** ویژه بازار B2B ایران شامل کنترل رقم کنترلی شناسه ملی ۱۱ رقمی، ۳۱ پیش‌شماره استانی، ۱۲ امتیازدهنده بخشی صنعتی و کاکپیت ۱۲ صفحه‌ای با زمان پاسخ <bdi dir="ltr">12.64ms</bdi>، و (۳) پلتفرم **Exvorta Outreach Studio**.',
        'استودیو اوتریچ یک جایگزین بومی برای <bdi dir="ltr">Instantly.ai</bdi> است که شامل اسکنر ۹گانه تشخیص نیاز به بازطراحی وب‌سایت، پزشک رکوردهای <bdi dir="ltr">SPF/DKIM/DMARC</bdi> روی دامنه‌های خواهر، بررسی خودکار قوانین <bdi dir="ltr">NEVER-CLAIM</bdi>، صندوق پیام ۳ ستونه <bdi dir="ltr">Unibox</bdi> و قفل سخت‌افزاری <bdi dir="ltr">SenderFreezeError</bdi> در حالت پیش‌فرض است.',
      ],
    },
    topologyNodes: [
      {
        id: 'discovery',
        code: 'DISCOVERY · 21 COUNTRIES',
        title: { en: '85-Query Matrix & 9-Signal Scanner', fa: '۸۵ ماتریس کاوش و اسکنر ۹گانه وب‌سایت' },
        tech: 'Python · 30+ Modules · SSRF Guard · MX/Phone Check',
        detail: {
          en: 'Discovers B2B exporters (auto-excluding sanctioned/US jurisdictions where applicable) and scores website redesign need 0–100.',
          fa: 'کشف شرکت‌های هدف، اعتبارسنجی تلفن و ایمیل و امتیازدهی ۰ تا ۱۰۰ به وضعیت فنی و موبایل وب‌سایت آن‌ها.',
        },
      },
      {
        id: 'shield',
        code: 'SAFETY · DOMAIN SHIELD',
        title: { en: 'Primary Brand Shield & Freeze Lock', fa: 'سپر حفاظت از دامنه اصلی و قفل فریز' },
        tech: 'studio_safety.py · SenderFreezeError · 0600 Vault',
        detail: {
          en: 'Hard-blocks root product domains (`*.exvorta.com`, `*.firoza.ir`, `*.hamesu.ir`, `*.cvly.ir`) from cold sending and enforces default freeze.',
          fa: 'مسدودسازی قطعی دامنه‌های اصلی محصولات برای ارسال سرد، جداسازی کامل ارز تننت‌ها و قفل پیش‌فرض ارسال.',
        },
      },
      {
        id: 'campaigns',
        code: 'SEQUENCES · FACTS GATE',
        title: { en: 'A/B Sequence & NEVER-CLAIM Validator', fa: 'سکانس A/B و ولیدیتور قوانین NEVER-CLAIM' },
        tech: 'studio_campaigns.py · FACTS.md Enforcer',
        detail: {
          en: 'Validates every draft against tenant `FACTS.md` so no sequence ever promises unverified capacities, fake pricing, or forbidden claims.',
          fa: 'بررسی خودکار تمام متن‌ها در برابر فایل حقیقت هر برند تا هیچ وعده تاییدنشده‌ای در پیام‌ها قرار نگیرد.',
        },
      },
      {
        id: 'unibox',
        code: 'TRIAGE · UNIBOX CRM',
        title: { en: '3-Pane Unibox & 6-Stage Deal Kanban', fa: 'صندوق پیام ۳ ستونه و کانبان ۶ مرحله‌ای' },
        tech: 'AI Intent Classifier · Atomic Unsubscribe',
        detail: {
          en: 'Classifies reply intent, drafts fact-grounded responses, and enforces atomic unsubscribe suppression that never reopens on "ok".',
          fa: 'تشخیص هوشمند نیت پاسخ مشتری، پیش‌نویس منطبق بر فکت و لغو اشتراک اتمیک بدون بازگشایی تصادفی ترد.',
        },
      },
      {
        id: 'cockpit',
        code: 'ANALYTICS · COCKPIT',
        title: { en: '12-Page Read-Only Telemetry Cockpit', fa: 'کاکپیت تحلیلی ۱۲ صفحه‌ای فقط‌خواندنی' },
        tech: '14 Read-Only Handlers · p95 12.64ms · SQLite',
        detail: {
          en: 'Bilingual EN/FA observability suite with sample-size statistical guards (`n < 30` warnings) and Jalali date support.',
          fa: 'داشبورد دوزبانه پایش داده‌ها با گارد آماری حداقل نمونه و پشتیبانی کامل از تقویم جلالی.',
        },
      },
    ],
    decisions: [
      {
        title: { en: 'Honest Engineering: Freezing Volume When Data Says Stop', fa: 'مهندسی صادقانه: توقف فوری ارسال وقتی داده هشدار می‌دهد' },
        body: {
          en: 'When telemetry showed bulk sequences underperforming industry reply benchmarks, live daemons were frozen immediately (`0` sends since Nov 6, 2026) and monitor scripts were rewired to alert-only so daemons never self-restart.',
          fa: 'به محض اینکه داده‌ها افت نرخ پاسخ ارسال انبوه را نشان دادند، تمام سرویس‌های ارسال متوقف شدند و اسکریپت‌های مانیتورینگ از ری‌استارت خودکار منع گردیدند.',
        },
      },
      {
        title: { en: 'Out-of-Repo Credential & Database Isolation', fa: 'ایزولاسیون دیتابیس و کلیدها در خارج از مخزن گیت' },
        body: {
          en: '`studio_db.py` stores workspace SQLite files under `~/.local/share/leadgen-outreach/` and credentials in `0600` files outside SQLite and Git, plus CSV formula-injection sanitization.',
          fa: 'ذخیره دیتابیس‌های کاری در خارج از ریپو و نگهداری کلیدها در فایل‌های سطح دسترسی <bdi dir="ltr">0600</bdi> به همراه گارد ضدتزریق فرمول اکسل.',
        },
      },
      {
        title: { en: 'Deterministic `FACTS.md` Guardrails Over Raw Prompting', fa: 'گارد مبتنی بر FACTS.md به‌جای اعتماد صرف به پرامپت' },
        body: {
          en: 'Every tenant (`exvorta_web`, `firoza`, `iran_b2b`) carries machine-checked `NEVER-CLAIM` rules and currency locks (e.g., mandatory `0.0` price floor on unpriced Firoza lots).',
          fa: 'هر برند قوانین ماشینی <bdi dir="ltr">NEVER-CLAIM</bdi> و قفل واحد پولی اختصاصی دارد تا خطای انسانی یا هوش مصنوعی به صفر برسد.',
        },
      },
      {
        title: { en: 'Sub-13ms p95 Read-Only Analytics', fa: 'پاسخ‌دهی زیر ۱۳ میلی‌ثانیه در داشبورد تحلیلی' },
        body: {
          en: '14 read-only insight handlers tested at `p95 = 12.64 ms` with `< 250 KB` gzipped frontend assets.',
          fa: 'طراحی ۱۴ هندلر فقط‌خواندنی با زمان پاسخ <bdi dir="ltr">12.64ms</bdi> و حجم کل فرانت‌اند زیر ۲۵۰ کیلوبایت.',
        },
      },
    ],
    codeArtifact: `$ CARD_RISK=R1 bash scripts/agent/gate.sh (leadgen-machine @ 53ed7920, verified 2026-11-18)
 ✓ Outreach Studio unit suite: 19/19 PASS | Cockpit suite: 62/62 PASS (p95 = 12.64 ms)
 ✓ Iran B2B Pishro suite: 29/29 PASS | SenderBridge default: SenderFreezeError [LOCKED]
 ✓ Live server check (hamesu-new): leadgen-exvorta=inactive · leadgen-firoza=inactive · 0 sends`,
    gates: [
      { metric: { en: 'Historical Scale Processed', fa: 'مقیاس تاریخی پردازش‌شده' }, status: { en: '48,000+ B2B Leads · 21 Countries', fa: '+۴۸٬۰۰۰ لید B2B · ۲۱ کشور' }, pass: true },
      { metric: { en: 'Live Outbound Freeze Gate', fa: 'گیت فریز ارسال زنده' }, status: { en: 'Inactive Since 2026-11-06 · 0 Live Sends', fa: 'غیرفعال از ۲۰۲۶-۱۱-۰۶ · صفر ارسال زنده' }, pass: true },
      { metric: { en: 'Outreach + Cockpit Tests', fa: 'تست‌های اوتریچ و کاکپیت' }, status: { en: '19/19 + 62/62 + 29/29 Automated PASS', fa: '۱۹/۱۹ + ۶۲/۶۲ + ۲۹/۲۹ خودکار پاس‌شده' }, pass: true },
      { metric: { en: 'Playwright UI Audit', fa: 'ممیزی UI با Playwright' }, status: { en: '15 Screens @ 1440px & 390px · 0px Overflow', fa: '۱۵ صفحه در ۱۴۴۰px و ۳۹۰px · بدون سرریز' }, pass: true },
    ],
    relatedIds: ['audit', 'exvorta', 'cvly'],
  },

  audit: {
    id: 'audit',
    index: '06',
    route: '/work/audit',
    accent: '#0EC49A',
    accentSecondary: '#A78BFA',
    heroMetrics: [
      {
        val: { en: '7 Stages', fa: '۷ مرحله' },
        label: { en: 'End-to-End Automated Technical & Visual Inspection', fa: 'ممیزی خودکار عملکرد، دسترس‌پذیری، امنیت و دیزاین' },
      },
      {
        val: { en: '14 Pages', fa: '۱۴ صفحه' },
        label: { en: 'Branded Executive Client Proposal PDF Output', fa: 'گزارش و پروپوزال PDF برندشده آماده ارائه به مدیران' },
      },
      {
        val: { en: '83/83', fa: '۸۳/۸۳' },
        label: { en: 'PDF Pipeline & Regression Tests Verified', fa: 'تست واحد و رگرسیون پاس‌شده در خط تولید PDF' },
      },
    ],
    tagline: {
      en: '7-stage Puppeteer, Lighthouse, axe-core, and AI-vision inspection pipeline compiling any live URL into a 14-page executive proposal PDF in minutes.',
      fa: 'پایپ‌لاین ۷ مرحله‌ای ممیزی فنی و بصری وب‌سایت که هر آدرس زنده‌ای را در چند دقیقه به یک پروپوزال ۱۴ صفحه‌ای دقیق و برندشده تبدیل می‌کند.',
    },
    startingPoint: {
      en: [
        'Agency sales teams and technical consultants spend hours manually running Lighthouse, checking mobile responsiveness, hunting broken security headers, taking screenshots, and formatting slide decks before pitching a prospect — or worse, they send generic text pitches with zero proof.',
        'Hamid needed an autonomous engineering instrument that inspects a target company’s live website with real browser measurements and outputs an undeniable, boardroom-ready diagnostic document.',
      ],
      fa: [
        'تیم‌های فروش فنی و آژانس‌های طراحی وب معمولاً ساعت‌ها وقت صرف تست دستی سرعت، بررسی موبایل، گرفتن اسکرین‌شات و صفحه‌آرایی پروپوزال می‌کنند؛ یا پیام‌های کلی بدون سند فنی می‌فرستند که مدیران حتی باز نمی‌کنند.',
        'هدف ساخت یک ابزار کاملاً خودکار بود که وب‌سایت واقعی هر شرکت را در مرورگر هدلس کالبدشکافی کند و خروجی را به‌شکل یک سند تشخیصی ۱۴ صفحه‌ای غیرقابل‌انکار تحویل دهد.',
      ],
    },
    solutionNarrative: {
      en: [
        'The Website Audit Engine & `pdfscript` orchestrates a 7-stage headless Chromium pipeline: (1) DOM & network reachability capture, (2) Lighthouse Core Web Vitals (`LCP`, `CLS`, `INP`, `TTFB`), (3) `axe-core` WCAG accessibility tree audit, (4) HTTP security header & TLS posture inspection, (5) Technical SEO, canonical, schema, and locale tag analysis, (6) multi-viewport screenshot capture + AI vision UI critique, and (7) deterministic HTML/CSS print compilation into a 14-page branded PDF.',
        'Hardened error handling ensures missing upstream network telemetry never crashes deep PDF page generation (verified across 83/83 pipeline tests and visual PDF page audits).',
      ],
      fa: [
        'موتور ممیزی سایت و <bdi dir="ltr">pdfscript</bdi> یک زنجیره ۷ مرحله‌ای روی مرورگر هدلس اجرا می‌کند: (۱) واکشی شبکه و DOM واقعی، (۲) اندازه‌گیری شاخص‌های <bdi dir="ltr">Core Web Vitals</bdi> با Lighthouse، (۳) ممیزی دسترس‌پذیری با <bdi dir="ltr">axe-core</bdi>، (۴) بررسی هدرهای امنیتی و گواهی SSL، (۵) تحلیل تگ‌های سئو تکنیکال و چندزبانگی، (۶) ثبت اسکرین‌شات دسکتاپ/موبایل و نقد بصری با هوش مصنوعی بینایی، و (۷) رندر چاپی دقیق در قالب یک فایل PDF چهارده صفحه‌ای.',
        'پایداری خط تولید در برابر سایت‌های کند یا داده‌های ناقص شبکه در ۸۳ تست خودکار تایید شده است تا هیچ صفحه‌ای هنگام تولید PDF دچار خطا نشود.',
      ],
    },
    topologyNodes: [
      {
        id: 'capture',
        code: 'STAGE 01–02 · VITALS',
        title: { en: 'Headless Chromium & Lighthouse', fa: 'مرورگر هدلس و سنجش Core Web Vitals' },
        tech: 'Puppeteer · Lighthouse · Real Bounding Rects',
        detail: {
          en: 'Captures desktop and mobile viewports, measuring real LCP/CLS/TBT metrics and horizontal overflow offenders.',
          fa: 'ثبت رندر واقعی دسکتاپ و موبایل به همراه اندازه‌گیری دقیق سرعت بارگذاری و المان‌های دارای سرریز افقی.',
        },
      },
      {
        id: 'a11y',
        code: 'STAGE 03–04 · A11Y & SEC',
        title: { en: 'axe-core WCAG & Security Posture', fa: 'ممیزی دسترس‌پذیری و هدرهای امنیتی' },
        tech: 'axe-core · CSP / HSTS / X-Frame Inspector',
        detail: {
          en: 'Extracts contrast failures, unlabeled controls, missing security headers, and mixed-content risks.',
          fa: 'استخراج خطاهای کنتراست، دکمه‌های فاقد برچسب و بررسی وضعیت هدرهای امنیتی سرور.',
        },
      },
      {
        id: 'seo',
        code: 'STAGE 05 · TECH SEO',
        title: { en: 'Search, Schema & hreflang Audit', fa: 'تحلیل سئو تکنیکال، اسکیما و چندزبانگی' },
        tech: 'Canonical · JSON-LD · hreflang · Sitemap',
        detail: {
          en: 'Audits indexability, structured metadata, heading hierarchy, and broken internal/external links.',
          fa: 'بررسی قابلیت ایندکس، داده‌های ساختاریافته <bdi dir="ltr">JSON-LD</bdi>، سلسله‌مراتب تیترها و تگ‌های زبان.',
        },
      },
      {
        id: 'vision',
        code: 'STAGE 06 · AI VISION',
        title: { en: 'Visual Hierarchy & Conversion Critique', fa: 'نقد بصری رابط کاربری با AI Vision' },
        tech: 'Multimodal Vision · Evidence-Linked Findings',
        detail: {
          en: 'Evaluates above-the-fold clarity, CTA prominence, and trust signals directly from captured screenshots.',
          fa: 'تحلیل وضوح پیام بخش اول صفحه، جایگاه دکمه‌های اقدام و نشانه‌های اعتماد بر اساس اسکرین‌شات واقعی.',
        },
      },
      {
        id: 'pdf',
        code: 'STAGE 07 · PDFSCRIPT',
        title: { en: '14-Page Branded Proposal Compiler', fa: 'کامپایلر پروپوزال PDF چهارده صفحه‌ای' },
        tech: 'Print CSS · Inter-Process Lock · 83/83 Tests',
        detail: {
          en: 'Renders executive summary, scored gauges, annotated screenshots, and prioritized remediation roadmap into A4 PDF.',
          fa: 'صفحه‌آرایی خودکار خلاصه مدیریتی، نمودارهای امتیاز، تصاویر حاشیه‌نویسی‌شده و نقشه راه اصلاحات در قالب A4.',
        },
      },
    ],
    decisions: [
      {
        title: { en: 'Real DOM Measurements Over Hallucinated Advice', fa: 'اندازه‌گیری واقعی DOM به‌جای توصیه‌های کلیشه‌ای' },
        body: {
          en: 'Every finding in the 14-page PDF traces back to a measured Lighthouse metric, HTTP header, or axe-core selector — zero generic filler paragraphs.',
          fa: 'تک‌تک موارد گزارش‌شده در PDF به یک عدد واقعی Lighthouse، هدر شبکه یا سلکتور مشخص در کد صفحه متصل هستند.',
        },
      },
      {
        title: { en: 'Defensive Null-Safe PDF Pagination', fa: 'صفحه‌بندی مقاوم در برابر داده‌های ناقص شبکه' },
        body: {
          en: 'Target sites frequently block trackers or time out sub-resources; hardening page-6 network waterfall templates eliminated crashes when `lighthouse.network` is partial.',
          fa: 'بسیاری از سایت‌ها زیرمنابع کند یا مسدود دارند؛ ایمن‌سازی قالب صفحه ۶ جلوی هرگونه توقف در رندر گزارش‌های سنگین را گرفت.',
        },
      },
      {
        title: { en: 'Inter-Process File Locking for Concurrent Runs', fa: 'قفل بین‌پردازه‌ای برای اجرای موازی بدون تداخل' },
        body: {
          en: 'Added deterministic file and account locks so batch audit queues never overwrite assets or double-dispatch reports.',
          fa: 'اعمال مکانیزم قفل بین‌پردازه‌ای برای جلوگیری از تداخل فایل‌ها هنگام اجرای هم‌زمان چندین ممیزی.',
        },
      },
      {
        title: { en: 'Bridging Engineering Diagnostics to Executive ROI', fa: 'ترجمه خطاهای فنی به زبان تصمیم‌گیری مدیران' },
        body: {
          en: 'Translates raw technical debt (`CLS 0.42`, missing `hreflang`, slow mobile LCP) into clear commercial impact for non-technical founders.',
          fa: 'تبدیل شاخص‌های تخصصی مهندسی به تاثیر مستقیم تجاری برای مدیران غیرفنی.',
        },
      },
    ],
    codeArtifact: `$ pytest tests/test_audit_pdf_pipeline.py
 ✓ 83/83 tests passed (including partial lighthouse.network fallback & brand metadata stamp)
 ✓ Output artifact: 14-page A4 Proposal PDF (annotated desktop + mobile captures embedded)
 ✓ Visual page-break check: 0 clipped tables · 0 orphan headings`,
    gates: [
      { metric: { en: 'Inspection Depth', fa: 'عمق بازرسی' }, status: { en: '7 Automated Stages (Perf/A11y/Sec/SEO/Vision)', fa: '۷ مرحله خودکار (سرعت/دسترس‌پذیری/امنیت/سئو/ویژن)' }, pass: true },
      { metric: { en: 'Deliverable Format', fa: 'فرمت خروجی' }, status: { en: '14-Page Executive Branded A4 PDF', fa: 'PDF برنددار ۱۴ صفحه‌ای A4' }, pass: true },
      { metric: { en: 'Regression Test Suite', fa: 'سوئیت تست رگرسیون' }, status: { en: '83/83 Pipeline Tests Passing', fa: '۸۳/۸۳ تست پایپ‌لاین پاس‌شده' }, pass: true },
      { metric: { en: 'Concurrency Safety', fa: 'ایمنی همروندی' }, status: { en: 'Inter-Process Lock Verified', fa: 'قفل بین‌فرایندی تاییدشده' }, pass: true },
    ],
    relatedIds: ['exvorta', 'leadgen', 'jobhunt'],
  },

  daftaryar: {
    id: 'daftaryar',
    index: '07',
    route: '/work/daftaryar',
    accent: '#10B981',
    accentSecondary: '#D2A738',
    heroMetrics: [
      {
        val: { en: '15,501', fa: '۱۵٬۵۰۱' },
        label: { en: 'PHPUnit Assertions Passing Across 2,645 Tests', fa: 'گزاره تست واحد پاس‌شده در ۲٬۶۴۵ تست خودکار' },
      },
      {
        val: { en: '397/397', fa: '۳۹۷/۳۹۷' },
        label: { en: 'Strict LDD Release Gate Checks Passed (0 FAIL)', fa: 'قبولی کامل در گیت سخت‌گیرانه انتشار با صفر خطا' },
      },
      {
        val: { en: '10 Mods', fa: '۱۰ ماژول' },
        label: { en: 'Unlocked Turnkey WooCommerce Accounting Suite', fa: 'ماژول کامل حسابداری، فاکتور و اتصال سپیدار در یک بسته' },
      },
    ],
    tagline: {
      en: 'Turnkey Persian WooCommerce accounting, tax invoicing, HMAC guest receipts, and Sepidar ERP bridge engineered to 15,501 unit assertions.',
      fa: 'افزونه جامع حسابداری ووکامرس، صدور فاکتور رسمی، رهگیری مرسوله و پل ارتباطی سپیدار با پشتوانه ۱۵٬۵۰۱ تست خودکار بدون خطا.',
    },
    startingPoint: {
      en: [
        'Iranian WooCommerce store owners struggle with fragile accounting plugins that break on modern WooCommerce Checkout Blocks, leak unauthenticated guest invoices, or lock essential Sepidar ERP sync behind confusing fragmented add-ons.',
        'Auditing the Iranian WordPress marketplace (thousands of products across RTL-Theme and Zhaket) revealed a massive quality gap: plugins rarely ship automated test suites, one-click demo data, or native block-checkout compatibility.',
      ],
      fa: [
        'مدیران فروشگاه‌های ووکامرسی در ایران سال‌هاست با افزونه‌های مالی شکننده‌ای درگیرند که با چک‌اوت بلوکی جدید ووکامرس ناسازگارند، امنیت لینک فاکتور مهمان را رعایت نمی‌کنند یا امکانات اصلی را پشت نسخه‌های قفل‌شده پنهان می‌کنند.',
        'تحلیل بازار افزونه‌های وردپرس ایران (هزاران محصول) شکاف بزرگ کیفیت مهندسی را آشکار کرد: نبود تست خودکار، نبود داده آزمایشی یک‌کلیکی و خطاهای مکرر در فایل لاگ وردپرس.',
      ],
    },
    solutionNarrative: {
      en: [
        'Daftaryar (`daftaryar-1.0.0-rtltheme-ready.zip`, built inside Hamid’s 28-plugin monorepo architecture) delivers all 10 accounting and fulfillment modules unlocked in one clean package: a 5-step RTL setup wizard, native WooCommerce Checkout Blocks integration, HMAC-signed guest PDF invoice downloads, Post/Tipax shipment tracking, 4 Elementor widgets, 1-click demo data import, JSON backup/restore, and a deterministic Sepidar accounting adapter.',
        'Before packaging, Daftaryar passed 2,645 unit tests (15,501 assertions), full end-to-end verification on live WordPress + WooCommerce (`0` entries in `debug.log`), and 397/397 LDD release gate checks.',
      ],
      fa: [
        'افزونه **دفتریار (Daftaryar)** تمام ۱۰ ماژول مالی و عملیاتی را یکجا و بدون قفل‌های مصنوعی ارائه می‌دهد: جادوگر راه‌اندازی ۵ مرحله‌ای راست‌به‌چپ، سازگاری بومی با <bdi dir="ltr">WooCommerce Checkout Blocks</bdi>، دانلود امن فاکتور مهمان با امضای رمزنگاری <bdi dir="ltr">HMAC</bdi>، رهگیری پست و تیپاکس، ۴ ویجت المنتور، ایمپورت داده دمو با یک کلیک، پشتیبان‌گیری <bdi dir="ltr">JSON</bdi> و آداپتور اتصال به نرم‌افزار حسابداری سپیدار.',
        'پیش از بسته‌بندی نهایی، دفتریار ۲٬۶۴۵ تست واحد (۱۵٬۵۰۱ گزاره)، تست سرتاسری واقعی روی وردپرس و ووکامرس با **صفر خطا در `debug.log`** و هر ۳۹۷ شرط گیت کنترل کیفیت را با موفقیت پشت سر گذاشت.',
      ],
    },
    topologyNodes: [
      {
        id: 'woo',
        code: 'CHECKOUT · BLOCKS',
        title: { en: 'WooCommerce Classic & Blocks Hook', fa: 'سازگاری دوجانبه با چک‌اوت کلاسیک و بلوکی' },
        tech: 'WooCommerce Store API · National ID / Tax Fields',
        detail: {
          en: 'Captures Iranian legal buyer fields (National ID, Economic Code, Postal Code) seamlessly across both classic and React block checkouts.',
          fa: 'دریافت کد ملی، کد اقتصادی و کد پستی خریدار هم در فرم‌های سنتی و هم در چک‌اوت مدرن بلوکی ووکامرس.',
        },
      },
      {
        id: 'invoices',
        code: 'SECURITY · HMAC',
        title: { en: 'HMAC-Signed Tax Invoices & Labels', fa: 'صدور فاکتور رسمی با امضای امنیتی HMAC' },
        tech: 'HMAC-SHA256 · Jalali Dates · Print Sheet',
        detail: {
          en: 'Prevents invoice ID enumeration leaks while letting guest buyers download official Persian tax receipts and shipping labels.',
          fa: 'جلوگیری از نشت اطلاعات فاکتورهای دیگران با امضای دیجیتال و امکان دانلود امن فاکتور برای خریداران مهمان.',
        },
      },
      {
        id: 'sepidar',
        code: 'ERP · ADAPTER',
        title: { en: 'Deterministic Sepidar ERP Bridge', fa: 'پل ارتباطی استاندارد با حسابداری سپیدار' },
        tech: 'Idempotent Sync · Mock + Live ERP Contract',
        detail: {
          en: 'Maps orders, SKU tax lines, shipping fees, and refunds into Sepidar voucher schemas without duplicate ledger entries.',
          fa: 'نگاشت دقیق سفارش‌ها، مالیات، هزینه ارسال و مرجوعی‌ها به ساختار سند سپیدار بدون ثبت تکراری.',
        },
      },
      {
        id: 'ux',
        code: 'UX · WIZARD & WIDGETS',
        title: { en: '5-Step RTL Wizard + 4 Elementor Widgets', fa: 'جادوگر ۵ مرحله‌ای + ۴ ویجت المنتور' },
        tech: '1-Click Demo Data · Post/Tipax Tracking · JSON Backup',
        detail: {
          en: 'Onboards non-technical shop owners in under 3 minutes with sample invoices, order tracking shortcodes, and portable JSON backups.',
          fa: 'راه‌اندازی کامل افزونه در کمتر از ۳ دقیقه همراه با داده‌های نمونه یک‌کلیکی و ویجت‌های آماده رهگیری سفارش.',
        },
      },
      {
        id: 'gate',
        code: 'QA · 15,501 ASSERTIONS',
        title: { en: 'PHPUnit + Zero-Debug-Log E2E Gate', fa: 'گیت ۱۵٬۵۰۱ تستی و صفر خطای وردپرس' },
        tech: '2,645 Unit Tests · 397/397 LDD Gate · 10p Illustrated PDF',
        detail: {
          en: 'Verified zero PHP warnings/notices in `wp-content/debug.log` and packaged with an illustrated 10-page Persian manual.',
          fa: 'تضمین صفر خطا و هشدار PHP در محیط واقعی به همراه راهنمای مصور ۱۰ صفحه‌ای فارسی.',
        },
      },
    ],
    decisions: [
      {
        title: { en: '15,501 Automated Assertions in an Ecosystem Used to Zero', fa: '۱۵٬۵۰۱ تست خودکار در بازاری که عادت به تست ندارد' },
        body: {
          en: 'Accounting bugs cost merchants real money and tax penalties; treating a WordPress plugin like banking software with 2,645 unit tests guarantees deterministic rounding, VAT, and refund math.',
          fa: 'خطای محاسباتی در افزونه مالی مستقیماً به ضرر ریالی فروشگاه منجر می‌شود؛ اعمال انضباط نرم‌افزار بانکی با ۲٬۶۴۵ تست واحد دقت مطلق اعداد و مالیات را تضمین کرد.',
        },
      },
      {
        title: { en: 'Marketplace Compliance Hygiene (Zero External Callbacks)', fa: 'رعایت کامل استانداردهای امنیتی مارکت‌پلیس‌ها' },
        body: {
          en: 'Stripped all external telemetry, Pro upsell nags, and third-party asset dependencies so the single-zip release passes strict code review cleanly.',
          fa: 'حذف کامل وابستگی به فونت یا سرور خارجی و تبلیغات مزاحم درون‌پنلی برای عبور تمیز از داوری فنی.',
        },
      },
      {
        title: { en: 'HMAC Guest Links Instead of Sequential Order IDs', fa: 'لینک‌های امضاشده HMAC به‌جای شماره سفارش ساده' },
        body: {
          en: 'Cryptographically signed URLs ensure a customer can print their invoice from SMS/WhatsApp without exposing sequential order numbers.',
          fa: 'امکان مشاهده سریع فاکتور از طریق پیامک برای مشتری، بدون ریسک حدس‌زدن شماره سفارش سایر مشتریان.',
        },
      },
      {
        title: { en: 'Shared "Yaar" Plugin Family Architecture', fa: 'معماری ماژولار خانواده افزونه‌های «یار»' },
        body: {
          en: 'Engineered inside a 28-spec monorepo blueprint with clean namespace isolation so multiple plugins coexist with zero hook/class collisions.',
          fa: 'طراحی بر پایه استاندارد ایزوله فضای نام تا در کنار ده‌ها افزونه دیگر بدون کوچک‌ترین تداخل کلاس یا هوک کار کند.',
        },
      },
    ],
    codeArtifact: `$ vendor/bin/phpunit (daftaryar-1.0-rtltheme-release @ d657346)
 OK (2,645 tests, 15,501 assertions · 0 failures · 0 risky)
 ✓ E2E WordPress + WooCommerce Checkout Blocks: PASS | wp-content/debug.log: 0 lines
 ✓ LDD Release Gate: 397/397 assertions PASS -> dist/daftaryar-1.0.0-rtltheme-ready.zip (local build artifact, Nov 2026)`,
    gates: [
      { metric: { en: 'PHPUnit Test Coverage', fa: 'پوشش تست PHPUnit' }, status: { en: '2,645 Tests · 15,501 Assertions PASS', fa: '۲٬۶۴۵ تست · ۱۵٬۵۰۱ گزاره پاس‌شده' }, pass: true },
      { metric: { en: 'Release Gate Standard', fa: 'استاندارد گیت انتشار' }, status: { en: '397/397 LDD Gate Checks · 0 FAIL', fa: '۳۹۷/۳۹۷ چک گیت LDD · بدون خطا' }, pass: true },
      { metric: { en: 'WordPress Runtime Hygiene', fa: 'بهداشت زمان‌اجرای وردپرس' }, status: { en: '0 Warnings/Errors in debug.log', fa: 'بدون هشدار/خطا در debug.log' }, pass: true },
      { metric: { en: 'Checkout Compatibility', fa: 'سازگاری تسویه حساب' }, status: { en: 'Classic + WooCommerce Blocks Verified', fa: 'کلاسیک + بلوک‌های ووکامرس تاییدشده' }, pass: true },
    ],
    relatedIds: ['hamesu', 'firoza', 'exvorta'],
  },

  jobhunt: {
    id: 'jobhunt',
    index: '08',
    route: '/work/jobhunt',
    accent: '#A78BFA',
    accentSecondary: '#0EC49A',
    heroMetrics: [
      {
        val: { en: '10 Boards', fa: '۱۰ مرجع' },
        label: { en: 'Global ATS & Remote Job Discovery Connectors', fa: 'اتصال خودکار به پلتفرم‌های کاریابی بین‌المللی و ATS' },
      },
      {
        val: { en: '0 Drift', fa: '۰ انحراف' },
        label: { en: 'Regex + Schema Fact Validator Blocking Hallucinations', fa: 'ولیدیتور سخت‌گیرانه منع تغییر تاریخ و سوابق واقعی' },
      },
      {
        val: { en: '1 Page A4', fa: '۱ صفحه A4' },
        label: { en: 'Playwright-Verified Precision Resume PDF Compiler', fa: 'کامپایلر رزومه استاندارد یک‌صفحه‌ای با کنترل ارتفاع پیکسل' },
      },
    ],
    tagline: {
      en: 'Autonomous ATS discovery pipeline, zero-hallucination Chromium resume compiler, and low-latency FA⇄EN virtual-microphone audio bridge.',
      fa: 'پایپ‌لاین خودکار کشف فرصت‌های بین‌المللی، کامپایلر رزومه ضدتوهم روی کرومیوم و رگ پردازش صوتی بلادرنگ فارسی⇄انگلیسی.',
    },
    startingPoint: {
      en: [
        'Senior remote roles on Greenhouse, Ashby, and Lever receive hundreds of applications within hours, requiring rapid role discovery and crisp track-specific resume positioning (AI Automation Track A vs. Full-Stack Web Track B).',
        'Crucially, automated tailoring must never invent employers, alter employment dates, or contradict verified personal constraints — and generated PDFs must never spill awkward orphan lines onto a second page.',
      ],
      fa: [
        'موقعیت‌های ارشد ریموت در بردهایی مثل <bdi dir="ltr">Greenhouse</bdi>، <bdi dir="ltr">Ashby</bdi> و <bdi dir="ltr">Lever</bdi> در ساعات اولیه صدها درخواست دریافت می‌کنند و نیازمند رصد خودکار و ارائه رزومه دقیق متناسب با نوع نقش (مسیر مهندسی AI یا مسیر توسعه وب) هستند.',
        'نکته حیاتی این است که سیستم هوشمند هرگز نباید نام شرکت‌ها، بازه‌های زمانی یا اعداد تاییدشده رزومه پایه را تغییر دهد و خروجی PDF باید دقیقاً در یک صفحه استاندارد A4 بدون سرریز خط آخر رندر شود.',
      ],
    },
    solutionNarrative: {
      en: [
        'The JobHunt Engineering Kit combines Python crawlers across 10 remote job boards (routed cleanly via a Cloudflare Worker relay) with an AST/regex truth-bank validator anchored to `80-owner-resume.md`: any LLM-tailored bullet that introduces an unverified employer, date, or metric is rejected automatically before PDF compilation.',
        'Alongside the async written workflow sits an experimental real-time audio R&D rig wiring virtual PulseAudio/PipeWire sinks to Gemini multimodal streaming audio for low-latency Persian-to-English speech translation.',
      ],
      fa: [
        'کیت مهندسی **JobHunt** خزنده‌های پایتونی ۱۰ مرجع شغلی بین‌المللی (به همراه رله Cloudflare Worker) را با یک اعتبارسنج سخت‌گیرانه ترکیب می‌کند: هر تغییر پیشنهادی مدل زبانی پیش از تبدیل به PDF با بانک حقیقت مالک تطبیق داده می‌شود و در صورت مشاهده کوچک‌ترین عدد یا تاریخ خارج از فکت، رد می‌شود.',
        'در کنار جریان اصلی همکاری مکتوب و Async، یک رگ تحقیق‌وتوسعه صوتی کم‌تاخیر نیز روی میکروفون مجازی لینوکس و <bdi dir="ltr">Gemini Audio</bdi> برای ترجمه هم‌زمان صوتی فارسی و انگلیسی مهندسی شده است.',
      ],
    },
    topologyNodes: [
      {
        id: 'ats',
        code: 'DISCOVERY · 10 ATS BOARDS',
        title: { en: 'ATS Crawler + Cloudflare Relay', fa: 'خزنده ۱۰ برد ATS و رله کلودفلر' },
        tech: 'Greenhouse · Ashby · Lever · CF Worker Relay',
        detail: {
          en: 'Fetches structured JSON/HTML postings across remote-first engineering boards and scores async/stack alignment.',
          fa: 'دریافت ساختاریافته آگهی‌های ریموت از بردهای اصلی استخدامی و امتیازدهی بر اساس تطابق استک فنی.',
        },
      },
      {
        id: 'truth',
        code: 'GUARD · TRUTH BANK',
        title: { en: 'Anti-Fabrication Fact Validator', fa: 'اعتبارسنج بانک حقیقت (ضدتوهم)' },
        tech: 'Regex + Entity Lock · 80-owner-resume.md',
        detail: {
          en: 'Enforces exact employer names, exact date spans (`2018–2026`), and official verified counts (`48,000+`, `21 countries`, `30+ modules`).',
          fa: 'قفل کامل روی نام شرکت‌ها، تاریخ‌های دقیق فعالیت و اعداد رسمی تاییدشده برای جلوگیری مطلق از بزرگ‌نمایی.',
        },
      },
      {
        id: 'pdf',
        code: 'RENDER · CHROMIUM A4',
        title: { en: '1-Page A4 Pixel-Budget PDF Engine', fa: 'موتور رندر PDF یک‌صفحه‌ای با کنترل ارتفاع' },
        tech: 'Playwright Chromium · scrollHeight <= 1040px Gate',
        detail: {
          en: 'Asserts exact DOM pixel height (`644px <= 1040px`) before emitting Track A (`38.7 KB`) and Track B (`34.7 KB`) A4 resumes.',
          fa: 'بررسی خودکار ارتفاع پیکسل پیش از خروجی‌گرفتن تا رزومه‌های مسیر A و B همیشه دقیقاً در یک برگ A4 جا بگیرند.',
        },
      },
      {
        id: 'audio',
        code: 'R&D · LIVE AUDIO RIG',
        title: { en: 'Virtual-Mic FA⇄EN Stream Bridge', fa: 'پل صوتی بلادرنگ میکروفون مجازی' },
        tech: 'PipeWire / PulseAudio · Gemini Streaming Audio',
        detail: {
          en: 'Routes local microphone input through streaming speech-to-speech translation onto a virtual Linux audio device.',
          fa: 'هدایت جریان صدای میکروفون از مسیر پردازش بلادرنگ و تحویل خروجی روی کارت صدای مجازی سیستم‌عامل.',
        },
      },
      {
        id: 'kit',
        code: 'ARTIFACTS · HIRING KIT',
        title: { en: 'Track A / Track B + Async Playbook', fa: 'بسته کامل رزومه دوگانه و پروتکل همکاری Async' },
        tech: 'Track A (AI) · Track B (Web) · Paid Trial Protocol',
        detail: {
          en: 'Pairs role-specific resumes with crystal-clear async communication positioning and work-sample trial readiness.',
          fa: 'ارائه هم‌زمان دو نسخه تخصصی رزومه به همراه چارچوب شفاف شروع همکاری با تسک آزمایشی واقعی.',
        },
      },
    ],
    decisions: [
      {
        title: { en: 'Hard Fact-Locking Over Creative LLM Rewriting', fa: 'قفل سخت روی فکت‌های واقعی به‌جای بازنویسی آزاد مدل' },
        body: {
          en: 'A resume pipeline is only useful if every line survives deep technical due diligence; locking entities to the Vault truth bank made tailoring 100% trustworthy.',
          fa: 'ارزش رزومه فنی به قابل‌اثبات بودن تک‌تک خطوط آن است؛ اتصال مستقیم به بانک حقیقت والت، ریسک خطای مدل زبانی را به صفر رساند.',
        },
      },
      {
        title: { en: 'Automated Single-Page Spill Prevention', fa: 'پیشگیری خودکار از سرریز رزومه به صفحه دوم' },
        body: {
          en: '`scripts/render-resumes.mjs` measures rendered Chromium `scrollHeight` and fails immediately if typography or margins push even one line onto page 2.',
          fa: 'اسکریپت رندر ارتفاع واقعی صفحه را در کرومیوم اندازه می‌گیرد و اجازه نمی‌دهد حتی یک خط به صفحه دوم سرریز شود.',
        },
      },
      {
        title: { en: 'Dedicated Track Separation (Never Muddy Positioning)', fa: 'جداسازی کامل مسیر AI از مسیر توسعه وب' },
        body: {
          en: 'Hiring managers for AI Automation roles search different signals than Next.js/WordPress leads; maintaining distinct Track A and Track B artifacts maximizes relevance without inventing facts.',
          fa: 'مدیران فنی در نقش‌های هوش مصنوعی دنبال سیگنال‌های متفاوتی نسبت به توسعه وب می‌گردند؛ تفکیک دو مسیر وضوح تخصصی را به حداکثر رساند.',
        },
      },
      {
        title: { en: 'Turning Async Written Precision Into the Primary Wedge', fa: 'تبدیل ارتباط مکتوب و Async به مزیت رقابتی شفاف' },
        body: {
          en: 'Clear written specs, documented PRs, and fast paid work-sample trials outperform vague introductory calls for distributed engineering teams.',
          fa: 'مستندسازی دقیق، کدهای قابل بررسی و آمادگی برای تسک آزمایشی پولی، سریع‌ترین راه اثبات کیفیت به تیم‌های بین‌المللی است.',
        },
      },
    ],
    codeArtifact: `$ node scripts/render-resumes.mjs --portfolio-url https://hamidmehrani.pages.dev
 ✓ Track A (AI Automation Engineer): scrollHeight=644px <= 1040px -> 1 page A4 (38.7 KB)
 ✓ Track B (Web Developer Next.js/WP): scrollHeight=618px <= 1040px -> 1 page A4 (34.7 KB)
 ✓ Truth-bank consistency check against 80-owner-resume.md: PASS (0 unverified claims)`,
    gates: [
      { metric: { en: 'ATS Board Connectors', fa: 'اتصال‌دهنده‌های ATS' }, status: { en: '10 Remote Engineering Boards Indexed', fa: '۱۰ برد مهندسی ریموت ایندکس‌شده' }, pass: true },
      { metric: { en: 'Truth-Bank Validator', fa: 'ولیدیتور بانک حقیقت' }, status: { en: '0 Unverified Employers, Dates, or Numbers', fa: 'بدون کارفرما، تاریخ یا عدد تاییدنشده' }, pass: true },
      { metric: { en: 'Track A & B Resume PDFs', fa: 'PDF رزومه مسیر A و B' }, status: { en: '1-Page A4 Verified · HTTP 200 Live', fa: 'یک‌صفحه A4 تاییدشده · زنده HTTP 200' }, pass: true },
      { metric: { en: 'Audio R&D Prototype', fa: 'پروتوتایپ تحقیق صوتی' }, status: { en: 'Virtual-Mic FA⇄EN Stream Rig Engineered', fa: 'ریگ استریم میکروفون مجازی فارسی⇄انگلیسی' }, pass: true },
    ],
    relatedIds: ['cvly', 'audit', 'exvorta'],
  },
};

export const LIVE_SIMULATIONS = [
  {
    id: 'sim-exvorta',
    label: { en: 'Mission 01 · Exvorta PINT-AE Release', fa: 'ماموریت ۰۱ · انتشار ماژول کامپلاینس Exvorta' },
    duration: { en: '4m 18s simulated · 1,152 tests', fa: '۴ دقیقه و ۱۸ ثانیه شبیه‌سازی‌شده · ۱٬۱۵۲ تست' },
    steps: [
      {
        stageIdx: 0,
        agent: 'CURATOR',
        msg: { en: 'Locked 12 Mobbin B2B fintech & workspace references -> docs/blueprint.md approved.', fa: '۱۲ رفرنس B2B فین‌تک و فضای کاری Mobbin قفل شد و docs/blueprint.md تایید شد.' },
        metric: { en: '12 refs · 0 ambiguity', fa: '۱۲ رفرنس · بدون ابهام' },
      },
      {
        stageIdx: 1,
        agent: 'ARCHITECT',
        msg: { en: 'Defined Payload migration #22 (bos_v2_trader_os) + WCO HS 2022 5,600+-code contract.', fa: 'مایگریشن #۲۲ Payload (bos_v2_trader_os) و قرارداد ۵٬۶۰۰+ کد WCO HS 2022 تعریف شد.' },
        metric: { en: 'Schema + Types PASS', fa: 'اسکیما + تایپ‌ها پاس شد' },
      },
      {
        stageIdx: 2,
        agent: 'BUILDERS (×3)',
        msg: { en: 'Parallel worktrees landed Trade Copilot, Reverse-Margin Solver (7 Incoterms), and SHA-256 Deal Dossier.', fa: 'ورک‌تری‌های موازی Trade Copilot، حل‌کننده حاشیه معکوس (۷ اینکوترمز) و پرونده معامله SHA-256 را لند کردند.' },
        metric: { en: '110 Vitest files · 1,152 PASS', fa: '۱۱۰ فایل Vitest · ۱٬۱۵۲ پاس‌شده' },
      },
      {
        stageIdx: 3,
        agent: 'VISUAL CRITIC',
        msg: { en: 'Independent Chromium gate inspected 1440×900 & 390×844 across EN/FA/AR -> 0px overflow.', fa: 'گیت مستقل کرومیوم صفحات را در ۱۴۴۰×۹۰۰ و ۳۹۰×۸۴۴ برای EN/FA/AR بررسی کرد؛ بدون سرریز.' },
        metric: { en: 'LH 100/100/100/100 · GO', fa: 'LH ۱۰۰/۱۰۰/۱۰۰/۱۰۰ · GO' },
      },
      {
        stageIdx: 4,
        agent: 'EDGE LAND',
        msg: { en: 'Deployed 141 static edge routes to Cloudflare Pages + synced Vault project ledger.', fa: '۱۴۱ مسیر استاتیک روی لبه کلودفلر دیپلوی و لجر پروژه والت همگام شد.' },
        metric: { en: 'HTTP/2 200 · exvorta.com', fa: 'HTTP/2 200 · exvorta.com' },
      },
    ],
  },
  {
    id: 'sim-firoza',
    label: { en: 'Mission 02 · Firoza 10-Locale Static Atelier', fa: 'ماموریت ۰۲ · بیلد استاتیک ۱۰ زبانه Firoza' },
    duration: { en: '3m 05s simulated · 239 pages', fa: '۳ دقیقه و ۵ ثانیه شبیه‌سازی‌شده · ۲۳۹ صفحه' },
    steps: [
      {
        stageIdx: 0,
        agent: 'CURATOR',
        msg: { en: 'Curated 13 luxury atelier & auction references into Mobbin collection firoza-v5-atelier.', fa: '۱۳ رفرنس آتلیه لوکس و حراجی در کالکشن Mobbin با نام firoza-v5-atelier ثبت شد.' },
        metric: { en: '13 keepers locked', fa: '۱۳ رفرنس قفل‌شده' },
      },
      {
        stageIdx: 1,
        agent: 'ARCHITECT',
        msg: { en: 'Replaced CMS dependency with static JSON lot schemas (NIS-2026-001..008) + claims.json truth gate.', fa: 'وابستگی CMS با اسکیماهای استاتیک JSON لات‌ها (NIS-2026-001 تا 008) و گیت حقیقت claims.json جایگزین شد.' },
        metric: { en: '0 synthetic stone rule', fa: 'قانون بدون سنگ مصنوعی' },
      },
      {
        stageIdx: 2,
        agent: 'BUILDERS (×2)',
        msg: { en: 'Built 2.5x optical stone loupe, 7-hub air-freight matrix, and Cloudflare Pages Function inquiry API.', fa: 'ذره‌بین اپتیکال ۲٫۵ برابری سنگ، ماتریس ۷ هاب حمل هوایی و API استعلام Cloudflare Pages Function ساخته شد.' },
        metric: { en: '239 static routes built', fa: '۲۳۹ مسیر استاتیک ساخته شد' },
      },
      {
        stageIdx: 3,
        agent: 'VISUAL CRITIC',
        msg: { en: 'Audited built HTML files for zero forbidden claims + verified YekanBakh/IRANYekanX RTL rendering.', fa: 'فایل‌های HTML ساخته‌شده برای صفر ادعای ممنوعه ممیزی و رندر RTL فونت‌های YekanBakh و IRANYekanX تایید شد.' },
        metric: { en: '0 violations · 0 errors', fa: '۰ تخلف · ۰ خطا' },
      },
      {
        stageIdx: 4,
        agent: 'EDGE LAND',
        msg: { en: 'Published atomic bundle to Cloudflare Pages edge -> POST /api/inquiry 200 verified.', fa: 'باندل اتمیک روی لبه کلودفلر منتشر شد و POST /api/inquiry با 200 تایید شد.' },
        metric: { en: 'HTTP 200 · www.firoza.ir', fa: 'HTTP 200 · www.firoza.ir' },
      },
    ],
  },
  {
    id: 'sim-daftaryar',
    label: { en: 'Mission 03 · Daftaryar 15,501-Assertion Gate', fa: 'ماموریت ۰۳ · گیت ۱۵٬۵۰۱ تستی افزونه دفتریار' },
    duration: { en: '5m 12s simulated · 2,645 tests', fa: '۵ دقیقه و ۱۲ ثانیه شبیه‌سازی‌شده · ۲٬۶۴۵ تست' },
    steps: [
      {
        stageIdx: 0,
        agent: 'CURATOR',
        msg: { en: 'Audited thousands of Iranian WP marketplace listings -> scoped 10 unlocked WooCommerce finance modules.', fa: 'هزاران لیستینگ بازار وردپرس ایران ممیزی شد و ۱۰ ماژول مالی ووکامرس قفل‌شده شناسایی شد.' },
        metric: { en: 'SPEC.md locked', fa: 'SPEC.md قفل شد' },
      },
      {
        stageIdx: 1,
        agent: 'ARCHITECT',
        msg: { en: 'Designed HMAC-SHA256 guest invoice URLs, Sepidar ERP adapter contract, and Checkout Blocks schema.', fa: 'لینک‌های مهمان HMAC-SHA256 برای فاکتور، قرارداد آداپتور ERP سپیدار و اسکیمای Checkout Blocks طراحی شد.' },
        metric: { en: 'Zero global namespace leak', fa: 'بدون نشت فضای نام سراسری' },
      },
      {
        stageIdx: 2,
        agent: 'BUILDERS (×3)',
        msg: { en: 'Implemented 5-step RTL wizard, 4 Elementor widgets, Post/Tipax tracking, and 2,645 PHPUnit tests.', fa: 'ویزارد RTL پنج‌مرحله‌ای، ۴ ویجت المنتور، رهگیری پست/تیپاکس و ۲٬۶۴۵ تست PHPUnit پیاده شد.' },
        metric: { en: '15,501 assertions PASS', fa: '۱۵٬۵۰۱ گزاره پاس‌شده' },
      },
      {
        stageIdx: 3,
        agent: 'VISUAL CRITIC',
        msg: { en: 'Ran live WordPress + WooCommerce E2E suite -> debug.log = 0 bytes, LDD gate = 397/397 PASS.', fa: 'سوئیت E2E زنده وردپرس + ووکامرس اجرا شد؛ debug.log صفر بایت و گیت LDD با ۳۹۷/۳۹۷ پاس شد.' },
        metric: { en: '397/397 PASS · 0 FAIL', fa: '۳۹۷/۳۹۷ پاس‌شده · ۰ خطا' },
      },
      {
        stageIdx: 4,
        agent: 'RELEASE PACK',
        msg: { en: 'Compiled single-zip release + 10-page illustrated Persian PDF guide (SHA-256 verified).', fa: 'ریلیز تک‌زیپ و راهنمای مصور فارسی ۱۰ صفحه‌ای PDF کامپایل شد (با تایید SHA-256).' },
        metric: { en: 'daftaryar-1.0.0 READY', fa: 'daftaryar-1.0.0 آماده است' },
      },
    ],
  },
  {
    id: 'sim-outreach',
    label: { en: 'Mission 04 · Outreach Studio + Freeze Shield', fa: 'ماموریت ۰۴ · ساخت Outreach Studio با سپر فریز' },
    duration: { en: '3m 44s simulated · 110 tests', fa: '۳ دقیقه و ۴۴ ثانیه شبیه‌سازی‌شده · ۱۱۰ تست' },
    steps: [
      {
        stageIdx: 0,
        agent: 'CURATOR',
        msg: { en: 'Collected Attio, Unify, Customer.io & Klaviyo references -> pure-white studio spec.', fa: 'رفرنس‌های Attio، Unify، Customer.io و Klaviyo جمع‌آوری و اسپک استودیوی سفید خالص نوشته شد.' },
        metric: { en: 'Mobbin refs saved', fa: 'رفرنس‌های Mobbin ذخیره شد' },
      },
      {
        stageIdx: 1,
        agent: 'ARCHITECT',
        msg: { en: 'Enforced out-of-repo 0600 secret storage, root-domain shield, and mandatory SenderFreezeError lock.', fa: 'ذخیره سیکرت خارج از ریپو با دسترسی 0600، سپر دامنه اصلی و قفل اجباری SenderFreezeError اعمال شد.' },
        metric: { en: '0 live-send guarantee', fa: 'تضمین صفر ارسال زنده' },
      },
      {
        stageIdx: 2,
        agent: 'BUILDERS (×3)',
        msg: { en: 'Built 9-signal Website Redesign Scanner, SPF/DKIM doctor, NEVER-CLAIM checker, and 3-pane Unibox.', fa: 'اسکنر ۹ سیگناله بازطراحی سایت، دکتر SPF/DKIM، چکر NEVER-CLAIM و یونی‌باکس سه‌پنلی ساخته شد.' },
        metric: { en: '19/19 + 62/62 tests PASS', fa: '۱۹/۱۹ + ۶۲/۶۲ تست پاس‌شده' },
      },
      {
        stageIdx: 3,
        agent: 'VISUAL CRITIC',
        msg: { en: 'Captured 15 Playwright screens @ 1440px & 390px EN/FA -> p95 API latency = 12.64 ms.', fa: '۱۵ اسکرین Playwright در ۱۴۴۰px و ۳۹۰px برای EN/FA گرفته شد؛ p95 تاخیر API برابر ۱۲٫۶۴ میلی‌ثانیه.' },
        metric: { en: '0px overflow · PASS (GO)', fa: 'بدون سرریز · پاس‌شده (GO)' },
      },
      {
        stageIdx: 4,
        agent: 'REPO LAND',
        msg: { en: 'Merged cleanly to main @ 53ed7920 while preserving production outbound freeze (0 sends).', fa: 'به‌صورت تمیز در main با کامیت 53ed7920 مرج شد و فریز ارسال پروداکشن (۰ ارسال) حفظ شد.' },
        metric: { en: 'GATE OK · Freeze intact', fa: 'GATE OK · فریز برقرار است' },
      },
    ],
  },
];

export const HIRING_ROLES = [
  {
    id: 'ai-architect',
    badge: { en: 'HIGHEST LEVERAGE', fa: 'بیشترین اهرم فنی' },
    title: { en: 'AI Automation & Multi-Agent Systems Engineer', fa: 'مهندس اتوماسیون AI و معمار سیستم‌های چند-ایجنتی' },
    pitch: {
      en: 'Ideal for founders and CTOs who want one senior AI-native engineer to architect and ship entire internal platforms, LLM pipelines, scrapers, and automated QA harnesses.',
      fa: 'مناسب مدیران فنی و بنیان‌گذارانی که می‌خواهند یک مهندس ارشد AI-native کل پایپ‌لاین‌های هوش مصنوعی، خزنده‌ها، اتوماسیون عملیات و گیت‌های تست خودکار را سرتاسر بسازد و تحویل دهد.',
    },
    replaces: {
      en: 'Replaces slow handoffs across separate prompt, backend, QA, and DevOps contractors.',
      fa: 'حذف ناهماهنگی و اتلاف وقت بین چندین نیروی جداگانه بک‌اند، پرامپت، تست و دواپس.',
    },
    proofIds: ['exvorta', 'leadgen', 'audit', 'jobhunt'],
    deliverables: {
      en: [
        'Production Python / Node / TypeScript agent pipelines with deterministic fallback & schema validation',
        'Headless Playwright / Puppeteer browser automation, data ingestion & visual verification gates',
        'End-to-end deployment on Linux systemd, Docker, PostgreSQL/SQLite, and Cloudflare Workers/Pages',
      ],
      fa: [
        'پایپ‌لاین‌های ایجنت پایتون و تایپ‌اسکریپت با اعتبارسنجی قطعی خروجی و خطایابی خودکار',
        'اتوماسیون مرورگر هدلس با Playwright، استخراج داده در مقیاس بالا و گیت‌های تست بصری',
        'استقرار کامل روی لینوکس، Docker، دیتابیس‌های رابطه‌ای و شبکه لبه کلودفلر',
      ],
    },
    pdfHref: '/resumes/Hamid_Mehrani_AI_Automation_Engineer.pdf',
    pdfLabel: { en: 'Download Track A · AI Engineer Resume (PDF)', fa: 'دانلود رزومه مسیر A · مهندس اتوماسیون AI (PDF)' },
  },
  {
    id: 'fullstack-web',
    badge: { en: '8 YEARS SHIPPED', fa: '۸ سال تجربه عملیاتی' },
    title: { en: 'Senior Full-Stack Web Architect (Next.js 15 / Payload / WP)', fa: 'معمار ارشد وب و فول‌استک (Next.js 15 / Payload / WordPress)' },
    pitch: {
      en: 'Ideal for companies needing high-craft marketing flagships, multilingual B2B portals, SaaS web apps, or revenue-grade WooCommerce/Medusa commerce builds.',
      fa: 'مناسب شرکت‌هایی که به وب‌سایت‌های پرچم‌دار چندزبانه، پلتفرم‌های SaaS، فروشگاه‌های پرترافیک Medusa یا افزونه‌های استاندارد ووکامرس نیاز دارند.',
    },
    replaces: {
      en: 'Combines Awwwards-level frontend craft, CMS architecture, technical SEO, and edge DevOps in one owner.',
      fa: 'ترکیب دیزاین سطح جهانی، معماری CMS، سئو تکنیکال و استقرار کلودفلر در یک نفر.',
    },
    proofIds: ['exvorta', 'firoza', 'hamesu', 'daftaryar'],
    deliverables: {
      en: [
        'Next.js 15 + Payload CMS + PostgreSQL platforms & ultra-fast Cloudflare Pages static builds',
        'Multilingual RTL/LTR design systems (EN/FA/AR + global locales) with 100/100 Lighthouse discipline',
        'Custom WordPress / WooCommerce & Medusa.js commerce plugins backed by automated test suites',
      ],
      fa: [
        'پلتفرم‌های مدرن Next.js 15 و Payload CMS و بیلدهای استاتیک فوق‌سریع روی کلودفلر پیجز',
        'سیستم‌های طراحی چندزبانه چپ‌به‌راست و راست‌به‌چپ با امتیاز سرعت ۱۰۰ و صفر سرریز موبایل',
        'توسعه اختصاصی ووکامرس و Medusa.js با پوشش تست واحد هزارگانه',
      ],
    },
    pdfHref: '/resumes/Hamid_Mehrani_Web_Developer.pdf',
    pdfLabel: { en: 'Download Track B · Web Developer Resume (PDF)', fa: 'دانلود رزومه مسیر B · توسعه‌دهنده ارشد وب (PDF)' },
  },
  {
    id: 'growth-seo',
    badge: { en: 'PIPELINE + REVENUE', fa: 'رشد مبتنی بر مهندسی' },
    title: { en: 'Technical SEO & AI Growth Systems Architect', fa: 'معمار سیستم‌های رشد B2B و سئو تکنیکال' },
    pitch: {
      en: 'Ideal for B2B brands and exporters wanting search-dominant multilingual web properties paired with custom lead-intelligence and automated proposal engines.',
      fa: 'مناسب برندهای صادراتی و شرکت‌های B2B که می‌خواهند سئو تکنیکال چندزبانه را با ابزارهای اختصاصی کشف مشتری و تولید خودکار پروپوزال ترکیب کنند.',
    },
    replaces: {
      en: 'Instead of buying 6 disconnected SaaS subscriptions, I engineer custom growth infrastructure you own.',
      fa: 'به‌جای خرید ده‌ها اشتراک گران و جزیره‌ای، زیرساخت رشد اختصاصی خود شرکت شما را می‌سازم.',
    },
    proofIds: ['leadgen', 'audit', 'firoza', 'cvly'],
    deliverables: {
      en: [
        'Technical SEO architecture, Core Web Vitals optimization, JSON-LD schema, and 10-locale static indexing',
        'Custom B2B lead discovery, website scoring scanners, and automated 14-page diagnostic PDF generators',
        'Conversion-focused B2B export showcases (proven across 6 live Exvorta Web trade houses)',
      ],
      fa: [
        'معماری سئو تکنیکال، بهینه‌سازی Core Web Vitals و ایندکس چندزبانه بین‌المللی',
        'ساخت اسکنرهای هوشمند ارزیابی مشتری و تولید خودکار پروپوزال‌های اختصاصی PDF',
        'طراحی وب‌سایت‌های صادراتی نتیجه‌گرا (اثبات‌شده در ۶ برند زنده Exvorta Web)',
      ],
    },
    pdfHref: '/resumes/Hamid_Mehrani_Growth_SEO.pdf',
    pdfLabel: { en: 'Download Track C · Growth & SEO Resume (PDF)', fa: 'دانلود رزومه مسیر C · رشد و سئو (PDF)' },
  },
];

export const ENGAGEMENT_MODELS = [
  {
    id: 'trial',
    label: { en: '48h Paid Async Trial Task (Recommended Start)', fa: 'تسک آزمایشی پولی ۴۸ ساعته (پیشنهاد شروع سریع)' },
    desc: {
      en: 'Send a real scoped problem from your backlog. Receive a deployed preview URL, clean Git PR, and Playwright verification report within 48–72h — zero risk before committing long-term.',
      fa: 'یک مساله واقعی و مشخص از بک‌لاگ خود بفرستید؛ ظرف ۴۸ تا ۷۲ ساعت لینک پیش‌نمایش زنده، کد تمیز گیت و گزارش تست Playwright تحویل بگیرید تا قبل از قرارداد بلندمدت، کیفیت واقعی را ببینید.',
    },
  },
  {
    id: 'fulltime',
    label: { en: 'Full-Time / Ongoing Remote Role (Async-Native)', fa: 'همکاری تمام‌وقت یا مستمر ریموت (Async)' },
    desc: {
      en: 'Embedded senior systems builder shipping daily commits, written architectural specs, and verified releases across your time zone via Slack/Linear/GitHub/Email.',
      fa: 'حضور مستمر به‌عنوان مهندس ارشد سیستم‌ها با تحویل روزانه کامیت، مستندات دقیق فنی و انتشارهای تست‌شده از طریق چت، گیت‌هاب و ایمیل در هر منطقه زمانی.',
    },
  },
  {
    id: 'project',
    label: { en: 'Turnkey Platform or B2B Flagship Build', fa: 'ساخت کامل پلتفرم SaaS یا وب‌سایت پرچم‌دار B2B' },
    desc: {
      en: 'Fixed-scope, milestone-verified delivery of your SaaS MVP, internal AI automation engine, or multilingual B2B web flagship in 1–3 weeks.',
      fa: 'تحویل کامل و مرحله‌به‌مرحله پلتفرم SaaS، موتور اتوماسیون هوش مصنوعی یا وب‌سایت چندزبانه تجاری در بازه ۱ تا ۳ هفته با گیت‌های کیفیت مشخص.',
    },
  },
];
