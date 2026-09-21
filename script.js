/* Plain JS. Accordion + language + reveal + menu + stack parallax + clock + copy. */
(function () {
    'use strict';

    var STR = {
        en: {
            'a11y.skip': 'Skip to work',
            'nav.work': 'Work', 'nav.svc': 'Services', 'nav.log': 'Log', 'nav.about': 'About',
            'nav.avail': 'open for work', 'nav.talk': "Let's talk",
            'hero.kicker': 'Mashad, Iran - 2026',
            'hero.h': 'I make <em> Games.</em><br>And <em> websites.</em>',
            'hero.sub': 'I&rsquo;m Erfan. I build Gamein Unreal Engine, and  Websites with HTML, CSS and JS: landing pages, portfolios, little shops. This page? Designed and coded it all myself, no template.',
            'hero.cta1': 'See the work ↓', 'hero.cta2': 'I need a website →',
            'hero.now': 'Now', 'hero.nowV': 'Building a small online shop',
            'hero.open': 'Booking', 'hero.openV': 'Open for work on website And UE work',
            'hero.elsewhere': 'Elsewhere',
            'c1k': 'Shop - work in progress', 'c1s': 'cart + checkout · HTML/CSS/JS',
            'c2t': 'سایت دوزبانه، راست‌چین واقعی', 'c2s': 'FA / EN · real RTL · fast',
            'c3k': '* one spot open', 'c3t': 'Your site here?', 'c3s': 'landing · portfolio · shop - 1 to 3 weeks',
            'mq': 'I Make GAMES ✳ LANDING + SHOP ✳ UNREAL ENGINE - Unity ✳ FA/EN · REAL RTL ✳ NO TEMPLATE ✳ PLAIN HTML/CSS/JS ✳&nbsp;',
            'work.k': '01 - Selected work',
            'work.title': 'Web stuff first, games after.',
            'work.sub': 'You are probably here for a website, so that is first. Then my game bits. Click each one, I wrote what worked, what broke, and where it sits now.',
            'svc.k': '02 - Services',
            'svc.title': 'What I can do for you.',
            'svc.sub': 'Websites are the main thing. Games with Unreal on the side.',
            'svc.b.k': 'Websites - the main thing',
            'svc.b.t': 'Landing, portfolio, small shop',
            'svc.b.d': 'Plain HTML/CSS/JS. Persian and English with real RTL, not just a quick mirror. Fast, light, with basic SEO so Google finds you.',
            'svc.b.l1': 'FA/EN with proper RTL',
            'svc.b.l2': '1 to 3 weeks, you watch it grow',
            'svc.b.l3': 'All yours - code and domain',
            'svc.b.cta': 'Start a website →',
            'svc.a.k': 'Game bits',
            'svc.a.t': 'Horror prototypes in Unreal',
            'svc.a.d': 'Small scary prototypes. Enemies that follow sound, tight maps, that kind of thing. Made in UE with Blueprint.',
            'svc.a.l1': 'Sound-based enemies + stealth',
            'svc.a.l2': 'Blueprint gameplay in UE',
            'svc.a.l3': 'Good for jams and small gigs',
            'svc.c.k': 'Fix + support',
            'svc.c.t': 'Got a site? I clean it up',
            'svc.c.d': 'Speed it up, fix the mobile view, add a cart button or a slider. Plain work, no mess, you can read the code after.',
            'svc.c.l1': 'HTML/CSS/JS fixes',
            'svc.c.l2': 'Mobile + speed cleanup',
            'svc.c.l3': 'Cart, menu, slider bits',
            'proc.k': '03 - How ordering a site goes',
            'proc.title': 'Four steps, super simple.',
            'proc.s1t': 'Hi - 20 min chat',
            'proc.s1d': 'A call or a long email. What you sell, who buys it, 3 sites you like. If I am not your guy, I will tell you straight.',
            'proc.s2t': 'Sketch - few days',
            'proc.s2d': 'You get a homepage draft fast, both languages if you need. We argue about it early, when changes are still cheap.',
            'proc.s3t': 'Build - 1 to 3 weeks',
            'proc.s3d': 'Hand-coded, no page builder. You get a live link and watch it come together. Two rounds of edits included.',
            'proc.s4t': 'Launch + handover',
            'proc.s4d': 'Up, tested, explained. Code and domain are yours. I am one message away for a month, free.',
            'log.k': '04 - Build log',
            'log.title': 'What I have been up to.',
            'log.sub': 'I write here when something actually happens, not on a schedule.',
            'about.k': '05 - About',
            'about.title': 'The short version.',
            'about.p1': 'I am Erfan Hassanpur, from Iran. I make horror bits in Unreal Engine, and small fast websites with HTML, CSS and JS, in Persian and English.',
            'about.p2': 'No team, no agency, just me. Design, Blueprint, sound, and this site. Honestly this site is my best proof for web work. You are looking at it.',
            'about.p3': 'Solo means I keep it small. Few characters, systems over big maps, sound over fancy graphics. Same for web: few pages, done well, loads fast.',
            'about.tools': 'What I use',
            'about.rules': 'How I build',
            'about.r1': 'Make it work in days, not months.',
            'about.r2': 'Sound first, looks later.',
            'about.r3': 'If it needs a manual, it is too much.',
            'about.r4': 'Ship small, drop fast.',
            'about.no': 'Not my thing',
            'about.noV': 'Copy-paste hyper-casual, crypto games, free work for exposure.',
            'contact.tag': '06 - Contact',
            'contact.h': 'Game? Website? <em>Let&rsquo;s build it.</em>',
            'contact.sub': 'Email is fastest. Tell me what you want, when you need it, rough budget. I usually reply the same day, same evening at the latest. I reply to everything.',
            'contact.email': 'erfanhoo14@gmail.com',
            'contact.copy': 'Copy address',
            'contact.copied': 'Copied ✓',
            'foot.col': 'Made by Erfan, by hand. No template, no tracking.',
            'foot.top': 'Back to top ↑',
            'note.tried': 'Tried', 'note.broke': 'Broke', 'note.stands': 'Now',
            'ptype.web': 'website', 'ptype.game': 'game', 'ptype.tool': 'JS bits'
        },
        fa: {
            'a11y.skip': 'برو سراغ کارها',
            'nav.work': 'کارها', 'nav.svc': 'خدمات', 'nav.log': 'لاگ', 'nav.about': 'درباره من',
            'nav.avail': 'برای کار بازم', 'nav.talk': 'حرف بزنیم',
            'hero.kicker': 'مشهد، ایران - ۱۴۰۵',
            'hero.h': 'بازی می‌سازم،<br><em> سایت </em> هم می‌زنم.',
            'hero.sub': 'من عرفانم. با Unreal Engine بیشتر بازی ترسناک می‌سازم، با  HTML و CSS و JS هم سایت‌های کوچیک و سریع می‌زنم: لندینگ، پورتفولیو، فروشگاه کوچیک. همین صفحه رو هم خودم از صفر دیزاین کردم و کد زدم، بدون قالب آماده.',
            'hero.cta1': 'دیدن کارها ↓', 'hero.cta2': 'من سایت می‌خوام ←',
            'hero.now': 'الان', 'hero.nowV': 'دارم یه فروشگاه اینترنتی می‌زنم',
            'hero.open': 'ظرفیت', 'hero.openV': 'برای وب‌سایت و Unreal بازم',
            'hero.elsewhere': 'جاهای دیگه',
            'c1k': 'فروشگاه - دارم می‌سازمش', 'c1s': 'سبد خرید · HTML/CSS/JS',
            'c2t': 'سایت دوزبانه، راست‌چین واقعی', 'c2s': 'فا / ان · RTL واقعی · سریع',
            'c3k': '* یه جا خالی دارم', 'c3t': 'سایت تو اینجا باشه؟', 'c3s': 'لندینگ · پورتفولیو · فروشگاه - ۱ تا ۳ هفته',
            'mq': 'بازی ترسناک ✳ لندینگ و فروشگاه ✳ Unreal Engine - Unity ✳ دوزبانه با RTL واقعی ✳ بدون قالب آماده ✳ با HTML/CSS/JS دستی ✳&nbsp;',
            'work.k': '۰۱ - کارها',
            'work.title': 'اول وب، بعد بازی.',
            'work.sub': 'احتمالا برای سایت اومدی، پس اونا اولن. بعدش بازی‌ها. رو هر کدوم بزن، نوشتم چی جواب داد، چی خراب شد، الان کجاست.',
            'svc.k': '۰۲ - خدمات',
            'svc.title': 'چیکار می‌تونم برات بکنم.',
            'svc.sub': 'کار اصلیم وب‌سایته. با Unreal هم بازی می‌سازم.',
            'svc.b.k': 'وب‌سایت - کار اصلی',
            'svc.b.t': 'لندینگ، پورتفولیو، فروشگاه کوچیک',
            'svc.b.d': 'با HTML/CSS/JS تمیز. فارسی و انگلیسی با RTL واقعی، نه اینکه فقط mirror شده باشه. سریع و سبک، با SEO پایه که گوگل پیدات کنه.',
            'svc.b.l1': 'فارسی/انگلیسی با RTL درست',
            'svc.b.l2': '۱ تا ۳ هفته، خودت می‌بینی جلو می‌ره',
            'svc.b.l3': 'همه‌چی مال خودته - کد و دامین',
            'svc.b.cta': 'بزن بریم برای سایت ←',
            'svc.a.k': 'بازی',
            'svc.a.t': 'پروتوتایپ ترسناک با Unreal',
            'svc.a.d': 'نمونه‌های کوچیک ترسناک. دشمنی که با صدا دنبالت می‌کنه، مپ‌های کوچیک و تنگ، از این حرفا. با Blueprint تو UE.',
            'svc.a.l1': 'دشمن صدا-محور و مخفی‌کاری',
            'svc.a.l2': 'گیم‌پلی با Blueprint تو UE',
            'svc.a.l3': 'برای گیم‌جم و کار کوچیک خوبه',
            'svc.c.k': 'فیکس و پشتیبانی',
            'svc.c.t': 'سایت داری؟ تمیزش می‌کنم',
            'svc.c.d': 'سرعتشو می‌برم بالا، نمای موبایلشو درست می‌کنم، دکمه سبد خرید یا اسلایدر اضافه می‌کنم. کار تمیز و ساده که بعدش خودتم می‌تونی کد رو بخونی.',
            'svc.c.l1': 'فیکس HTML/CSS/JS',
            'svc.c.l2': 'درست کردن موبایل و سرعت',
            'svc.c.l3': 'سبد خرید، منو، اسلایدر',
            'proc.k': '۰۳ - سفارش سایت چجوری پیش می‌ره',
            'proc.title': 'چهار تا قدم ساده.',
            'proc.s1t': 'سلام - یه گپ ۲۰ دقیقه‌ای',
            'proc.s1d': 'یه زنگ یا یه ایمیل بلند. چی می‌فروشی، کی می‌خره، ۳ تا سایتی که باهاشون حال می‌کنی. اگه به دردت نخورم رک می‌گم.',
            'proc.s2t': 'اتود - چند روز',
            'proc.s2d': 'خیلی زود یه پیش‌نویس صفحه اصلی می‌گیری، اگه بخوای دوزبانه. همون اول سرش بحث می‌کنیم که تغییر هنوز مفته.',
            'proc.s3t': 'ساخت - ۱ تا ۳ هفته',
            'proc.s3d': 'دستی کد می‌زنم، بدون صفحه‌ساز. یه لینک زنده داری و می‌بینی داره جون می‌گیره. دو دور ادیت هم روش.',
            'proc.s4t': 'انتشار + تحویل',
            'proc.s4d': 'می‌ره بالا، تست می‌شه، توضیح می‌دم. کد و دامین مال خودته. یه ماه هم مجانی یه پیام باهام فاصله داری.',
            'log.k': '۰۴ - لاگ ساخت',
            'log.title': 'این مدت چیکار کردم.',
            'log.sub': 'هر وقت یه اتفاق واقعی بیفته اینجا می‌نویسم، نه سر تاریخ خاصی.',
            'about.k': '۰۵ - درباره',
            'about.title': 'خلاصه‌اش.',
            'about.p1': 'من عرفان حسن‌پورم، از ایران. با Unreal Engine چیزای ترسناک می‌سازم، با HTML و CSS و JS هم سایت‌های کوچیک و سریع می‌زنم، فارسی و انگلیسی.',
            'about.p2': 'تیم و شرکت و اینا نیست، فقط خودمم. دیزاین، Blueprint، صدا و همین سایت. راستش بهترین مدرک وبم همین سایته که داری نگاش می‌کنی.',
            'about.p3': 'تنها کار می‌کنم پس کوچیک نگهش می‌دارم. کاراکتر کم، سیستم به‌جای مپ بزرگ، صدا به‌جای گرافیک خفن. تو وب هم همین: چند تا صفحه، تمیز، با لود سریع.',
            'about.tools': 'باهاشون کار می‌کنم',
            'about.rules': 'قانون‌هام موقع ساختن',
            'about.r1': 'تو چند روز جواب بده، نه چند ماه.',
            'about.r2': 'اول صدا، بعد تصویر.',
            'about.r3': 'اگه دفترچه راهنما خواست زیادی پیچیده‌ست.',
            'about.r4': 'کوچیک بده بیرون، نشد ولش کن.',
            'about.no': 'اینارو قبول نمی‌کنم',
            'about.noV': 'کپی بازی‌های هایپرکژوال، بازی کریپتویی، کار مجانی برای دیده شدن.',
            'contact.tag': '۰۶ - تماس',
            'contact.h': 'بازی؟ وب‌سایت؟ <em>بزن بریم بسازیمش.</em>',
            'contact.sub': 'ایمیل سریع‌ترین راهه. بگو چی می‌خوای، کی لازم داری، بودجه حدودا چقدره. معمولا همون روز جواب می‌دم، نهایتا همون شب. همه رو جواب می‌دم.',
            'contact.email': 'erfanhoo14@gmail.com',
            'contact.copy': 'کپی آدرس',
            'contact.copied': 'کپی شد ✓',
            'foot.col': 'کار خودمه، دستی. بدون قالب آماده، بدون ردیابی.',
            'foot.top': 'برگرد بالا ↑',
            'note.tried': 'چی امتحان کردم', 'note.broke': 'چی خراب شد', 'note.stands': 'الان کجاست',
            'ptype.web': 'وب‌سایت', 'ptype.game': 'بازی', 'ptype.tool': 'تکه‌کد'
        }
    };

    var PROJECTS = [
        {
            n: '01', type: 'web',
            title: { en: 'This Site', fa: 'همین سایت' },
            meta: { en: '2026 · design + build', fa: '۱۴۰۵ · دیزاین و ساخت' },
            lede: {
                en: 'This very site. I designed and coded it by hand. Two languages with real RTL, no framework, no tracking. Loads fast and sounds like me, cause it is me.',
                fa: 'همین سایتی که داری می‌بینی. دیزاین و کدش با خودم بوده. دوزبانه با RTL واقعی، نه فقط mirror، بدون فریم‌ورک، بدون ردیابی. سریع لود می‌شه.'
            },
            notes: [
                { h: 'note.tried',
                  en: 'One HTML, one CSS, one JS file. Fraunces for titles, Space Grotesk for English, Vazirmatn for Persian. All text lives in a small dictionary, RTL flips with it.',
                  fa: 'یه دونه HTML، یه دونه CSS، یه دونه JS. برای تیتر Fraunces، برای انگلیسی Space Grotesk، برای فارسی وزیرمتن. همه متن‌ها تو یه دیکشنری کوچیکه، RTL هم باهاش می‌چرخه.' },
                { h: 'note.broke',
                  en: 'First version was dark neon with glowing stuff. Looked cool in screenshots but felt like everyone else. This warm paper look with hard shadows feels more like me.',
                  fa: 'نسخه اول تیره و نئونی بود با کلی برق و افکت. تو اسکرین‌شات خوب بود ولی خاص نبود. این تم کاغذی گرم با سایه‌های تخت بیشتر شبیه اون نسخه خاصی هست که میخوام.' },
                { h: 'note.stands',
                  en: 'Live. You are on it. If you want something like this, mail me.',
                  fa: 'بالاست. الان داخلش هستی. اگه مثل این می‌خوای ایمیل بزن.' }
            ],
            tags: ['HTML', 'CSS', 'JS', 'RTL'],
            status: { en: '<b>Live</b> - you are here', fa: '<b>بالاست</b> - اینجایی' }
        },
        {
            n: '02', type: 'web',
            title: { en: 'Corner Shop - demo store', fa: 'فروشگاه مواد غذایی - نمونه فروشگاهی' },
            meta: { en: '2026 · online shop, building now', fa: '۱۴۰۵ · فروشگاه اینترنتی، دارم می‌سازمش' },
            lede: {
                en: 'A small demo shop I am building right now. Persian + English, real RTL, cart and checkout UI in plain JavaScript. No Shopify, no WordPress, just HTML, CSS and JS.',
                fa: 'یه فروشگاه نمونه کوچیک که الان دارم می‌سازمش. فارسی + انگلیسی، با RTL واقعی، سبد خرید و تسویه‌حساب با JavaScript خالص. نه شاپیفای، نه وردپرس، فقط HTML و CSS و JS.'
            },
            notes: [
                { h: 'note.tried',
                  en: 'Grid catalog, product page, cart saved in localStorage. RTL mirror done by hand, not auto-flip, so the Persian version actually sits right.',
                  fa: 'کاتالوگ گریدی، صفحه محصول، سبد خرید با localStorage. mirror کردن RTL رو دستی انجام دادم، نه با فلیپ خودکار، که نسخه فارسی واقعا درست وایسه.' },
                { h: 'note.broke',
                  en: 'Cart kept clearing on refresh. Turns out I wiped localStorage on every load. Silly bug, quick fix.',
                  fa: 'سبد خرید با هر رفرش پاک می‌شد. بعد فهمیدم هر بار که صفحه لود می‌شد localStorage رو پاک می‌کردم. سوتی مسخره‌ای بود، زود درست شد.' },
                { h: 'note.stands',
                  en: 'Half done. Catalog + cart work, checkout UI is next, then a fake payment step.',
                  fa: 'نصفش رفته. کاتالوگ و سبد کار می‌کنه، بعدی رابط تسویه‌ست، بعدش مرحله پرداخت تستی.' }
            ],
            tags: ['HTML', 'CSS', 'JavaScript', 'RTL'],
            status: { en: '<b>Building now</b> - cart works, checkout next', fa: '<b>دارم می‌سازمش</b> - سبد اوکیه، بعدی تسویه' }
        },
        {
            n: '03', type: 'game',
            title: { en: 'Sound Hunter', fa: 'Sound Hunter' },
            meta: { en: '2024-25 · UE horror bit', fa: '۱۴۰۳-۴ · یه چیز ترسناک با UE' },
            lede: {
                en: 'First-person horror where enemies hear you, not see you. Footsteps, doors, stuff you drop, it all feeds the noise that moves them.',
                fa: 'ترسناک اول‌شخص که دشمناش به‌جای دیدن می‌شنون. قدم، در، چیزی که از دستت میفته، همه می‌ره تو سیستم نویز که دشمنو می‌چرخونه.'
            },
            notes: [
                { h: 'note.tried',
                  en: 'Noise events with UE perception, different floors sound different. Concrete echoes, carpet eats sound.',
                  fa: 'نویز ایونت با perception خود Unreal، هر سطح صدای خودشو داره. بتن اکو می‌ده، فرش صدا رو می‌خوره.' },
                { h: 'note.broke',
                  en: 'For a month it heard me through walls. Fix was dumb simple: trace a line from the noise first. Now I check walls first, always.',
                  fa: 'یه ماه از پشت دیوار می‌شنید. راه‌حلش خیلی ساده بود: اول از منبع صدا line trace بگیر. الان همیشه اول دیوار چک می‌کنم.' },
                { h: 'note.stands',
                  en: 'Playable slice, like 15 min. Paused for now while I finish the shop.',
                  fa: 'یه نسخه قابل‌بازی حدود ۱۵ دقیقه‌ای. فعلا پازش کردم تا فروشگاه تموم شه.' }
            ],
            tags: ['UE5', 'Blueprint'],
            status: { en: '<b>Paused</b> - playable, shop first', fa: '<b>پاز شده</b> - قابل‌بازیه، اول فروشگاه' }
        },
        {
            n: '04', type: 'game',
            title: { en: 'Ward', fa: 'Ward' },
            meta: { en: '2025 · small mechanic test', fa: '۱۴۰۴ · یه تست کوچیک' },
            lede: {
                en: 'Tiny test: you read notes while something gets closer. The longer you read, the worse it gets.',
                fa: 'یه تست خیلی کوچیک: یادداشت می‌خونی و یه چیزی هی نزدیک‌تر می‌شه. هر چی بیشتر وایسی بخونی بدتر می‌شه.'
            },
            notes: [
                { h: 'note.tried',
                  en: 'Reading UI in UMG tied to enemy distance. Light + sound shift as it gets close.',
                  fa: 'رابط خوندن با UMG که به فاصله دشمن وصله. نور و صدا با نزدیک شدنش عوض می‌شه.' },
                { h: 'note.broke',
                  en: 'First pass, nobody read, everyone just ran. Slowed the enemy while you read and suddenly it became a choice.',
                  fa: 'اولش هیچکی نمی‌خوند، همه فقط می‌دویدن. سرعت دشمنو وقتی می‌خونی کم کردم و یهو شد یه انتخاب.' },
                { h: 'note.stands',
                  en: 'Done as a test. Folded the pressure bit into Sound Hunter.',
                  fa: 'به‌عنوان تست تمومه. سیستم فشارش رفت تو Sound Hunter.' }
            ],
            tags: ['UE5', 'Blueprint', 'UMG'],
            status: { en: 'Done - folded into Hunter', fa: 'تمومه - رفت تو Hunter' }
        },
        {
            n: '05', type: 'tool',
            title: { en: 'Shop bits in plain JS', fa: 'خرده‌ریز فروشگاه با JS خالص' },
            meta: { en: '2026 · small JS pieces', fa: '۱۴۰۵ · چند تا تیکه JS' },
            lede: {
                en: 'Little pieces I reuse on sites: cart button, mobile menu, slider, back to top. No library, just plain JS you can actually read.',
                fa: 'چند تا تیکه کوچیک که تو سایت‌ها دوباره استفاده می‌کنم: دکمه سبد، منوی موبایل، اسلایدر، برگشت به بالا. بدون کتابخونه، فقط JS ساده که می‌شه خوندش.'
            },
            notes: [
                { h: 'note.tried',
                  en: 'One file per piece, copy-paste friendly. If the note gets longer than the code, I delete it.',
                  fa: 'هر تیکه یه فایل، کپی‌پیستی. اگه توضیحش از خودش طولانی‌تر بشه پاکش می‌کنم.' },
                { h: 'note.broke',
                  en: 'Slider jumped on old phones. Ditched fancy transforms, used plain scroll. Boring but works everywhere.',
                  fa: 'اسلایدر رو گوشی‌های قدیمی می‌پرید. افکت‌های خوشگل رو ریختم دور، با اسکرول ساده نوشتم. کسل‌کننده ولی همه‌جا کار می‌کنه.' },
                { h: 'note.stands',
                  en: 'Small folder that keeps growing. I pull from it for every new site.',
                  fa: 'یه پوشه‌ست که هی بزرگ می‌شه. برای هر سایت جدید ازش برمی‌دارم.' }
            ],
            tags: ['HTML', 'CSS', 'JavaScript'],
            status: { en: '<b>Reuse</b> - goes on new sites', fa: '<b>آماده استفاده</b> - برای سایت‌های جدید' }
        }
    ];

    var LOG = [
        { d: { en: 'Sep 2026', fa: 'شهریور ۱۴۰۵' },
          en: '<strong>Shop demo is half up.</strong> Catalog + cart in plain JS, checkout UI is next.',
          fa: '<strong>نصف فروشگاه رفت بالا.</strong> کاتالوگ و سبد با JS خالص، بعدی رابط تسویه‌ست.' },
        { d: { en: 'Sep 2026', fa: 'شهریور ۱۴۰۵' },
          en: '<strong>New warm look, web first.</strong> This page now starts with websites, games later.',
          fa: '<strong>قیافه جدید، اول وب.</strong> این صفحه الان با وب‌سایت شروع می‌شه، بازی‌ها بعدن.' },
        { d: { en: 'Aug 2026', fa: 'مرداد ۱۴۰۵' },
          en: '<strong>Cart bug was dumb.</strong> I cleared localStorage on load. Fixed, cart sticks now.',
          fa: '<strong>باگ سبد مسخره بود.</strong> با هر لود localStorage رو پاک می‌کردم. درست شد، الان سبد می‌مونه.' },
        { d: { en: 'Mar 2026', fa: 'اسفند ۱۴۰۴' },
          en: 'Second shop page done. Mobile view finally looks right.',
          fa: 'صفحه دوم فروشگاه تموم شد. نمای موبایل بالاخره درست شد.' },
        { d: { en: 'Dec 2025', fa: 'آذر ۱۴۰۴' },
          en: 'Hunter slice is playable, about 15 min. Paused it to finish the shop.',
          fa: 'نسخه Hunter قابل‌بازیه، حدود ۱۵ دقیقه. پازش کردم تا فروشگاه تموم شه.' },
        { d: { en: 'Oct 2025', fa: 'مهر ۱۴۰۴' },
          en: 'Ward test wrapped. Reading under pressure works when waiting is your call.',
          fa: 'تست Ward تموم شد. خوندن تحت فشار وقتی جواب می‌ده که وایسادن انتخاب خودت باشه.' }
    ];

    var lang = 'en';
    try { lang = localStorage.getItem('eh-lang') || 'en'; } catch (e) { lang = 'en'; }
    if (lang !== 'en' && lang !== 'fa') lang = 'en';

    function esc(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    }

    function renderProjects() {
        var host = document.getElementById('rows');
        if (!host) return;
        var html = '';
        for (var i = 0; i < PROJECTS.length; i++) {
            var p = PROJECTS[i];
            var title = (p.title && typeof p.title === 'object') ? p.title[lang] : p.title;
            var notes = '';
            for (var j = 0; j < p.notes.length; j++) {
                var n = p.notes[j];
                notes += '<div><h4>' + STR[lang][n.h] + '</h4><p>' + n[lang] + '</p></div>';
            }
            var tags = '';
            for (var k = 0; k < p.tags.length; k++) tags += '<span>' + esc(p.tags[k]) + '</span>';
            html += '<article class="proj" data-i="' + i + '">' +
                '<button class="proj-btn" aria-expanded="false">' +
                '<span class="proj-num">' + p.n + '</span>' +
                '<span class="proj-title">' + esc(title) + '</span>' +
                '<span class="proj-tag' + (p.type === 'web' ? ' web' : '') + '">' + STR[lang]['ptype.' + p.type] + '</span>' +
                '<span class="proj-plus" aria-hidden="true">+</span>' +
                '</button>' +
                '<div class="proj-panel"><div class="proj-clip"><div class="proj-body">' +
                '<p class="proj-when">' + p.meta[lang] + '</p>' +
                '<p class="proj-lede">' + p.lede[lang] + '</p>' +
                '<div class="proj-notes">' + notes + '</div>' +
                '<div class="proj-tags">' + tags + '</div>' +
                '<p class="proj-status">' + p.status[lang] + '</p>' +
                '</div></div></div></article>';
        }
        host.innerHTML = html;
    }

    function renderLog() {
        var host = document.getElementById('logList');
        if (!host) return;
        var html = '';
        for (var i = 0; i < LOG.length; i++) {
            html += '<li><time>' + LOG[i].d[lang] + '</time><p>' + LOG[i][lang] + '</p></li>';
        }
        host.innerHTML = html;
    }

    function updateClock() {
        var el = document.getElementById('clock');
        if (!el) return;
        try {
            var t = new Intl.DateTimeFormat(lang === 'fa' ? 'fa-IR' : 'en-GB', {
                hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tehran'
            }).format(new Date());
            el.textContent = (lang === 'fa' ? 'تهران ' : 'TEH ') + t;
        } catch (e) { el.textContent = ''; }
    }

    function setLang(next) {
        lang = next;
        try { localStorage.setItem('eh-lang', lang); } catch (e) {}
        var rtl = lang === 'fa';
        document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);
        var els = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < els.length; i++) {
            var key = els[i].getAttribute('data-i18n');
            if (STR[lang][key]) els[i].innerHTML = STR[lang][key];
        }
        var label = document.getElementById('langLabel');
        if (label) label.textContent = lang === 'en' ? 'فا' : 'EN';
        document.title = lang === 'fa'
            ? 'عرفان حسن‌پور - وب‌سایت و ساخت  بازی '
            : 'Erfan Hassanpur - Websites and horror games';
        renderProjects();
        renderLog();
        updateClock();
    }

    function initAccordion() {
        var host = document.getElementById('rows');
        host.addEventListener('click', function (e) {
            var btn = e.target.closest ? e.target.closest('.proj-btn') : null;
            if (!btn) return;
            var item = btn.parentElement;
            var wasOpen = item.classList.contains('open');
            var all = host.querySelectorAll('.proj');
            for (var i = 0; i < all.length; i++) {
                all[i].classList.remove('open');
                all[i].querySelector('.proj-btn').setAttribute('aria-expanded', 'false');
            }
            if (!wasOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    }

    function initReveal() {
        var els = document.querySelectorAll('.rv');
        if (!('IntersectionObserver' in window)) {
            for (var i = 0; i < els.length; i++) els[i].classList.add('in');
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    entries[i].target.classList.add('in');
                    io.unobserve(entries[i].target);
                }
            }
        }, { threshold: 0.08 });
        for (var j = 0; j < els.length; j++) io.observe(els[j]);
    }

    function initMenu() {
        var btn = document.getElementById('menuBtn');
        var nav = document.getElementById('mobileNav');
        if (!btn || !nav) return;
        btn.addEventListener('click', function () {
            var open = nav.classList.toggle('open');
            nav.hidden = !open;
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.addEventListener('click', function (e) {
            if (e.target.closest && e.target.closest('a')) {
                nav.classList.remove('open');
                nav.hidden = true;
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    function initParallax() {
        var stage = document.getElementById('stack');
        var hero = document.getElementById('hero');
        if (!stage || !hero) return;
        if (window.matchMedia('(hover: none)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        var cards = stage.querySelectorAll('.pcard');
        var rx = 0, ry = 0, tx = 0, ty = 0, raf = 0;
        function frame() {
            rx += (tx - rx) * 0.08;
            ry += (ty - ry) * 0.08;
            for (var i = 0; i < cards.length; i++) {
                var depth = parseFloat(cards[i].getAttribute('data-depth')) || 30;
                cards[i].style.transform = 'rotateY(' + (rx * depth / 30).toFixed(2) + 'deg) rotateX(' + (-ry * depth / 30).toFixed(2) + 'deg) translate3d(' + (rx * depth / 12).toFixed(1) + 'px,' + (-ry * depth / 12).toFixed(1) + 'px,0)';
            }
            if (Math.abs(tx - rx) > 0.01 || Math.abs(ty - ry) > 0.01) raf = requestAnimationFrame(frame);
            else raf = 0;
        }
        hero.addEventListener('mousemove', function (e) {
            var r = hero.getBoundingClientRect();
            tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
            ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
            if (!raf) raf = requestAnimationFrame(frame);
        });
        hero.addEventListener('mouseleave', function () {
            tx = 0; ty = 0;
            if (!raf) raf = requestAnimationFrame(frame);
        });
    }

    function initProgress() {
        var bar = document.getElementById('progress');
        if (!bar) return;
        function onScroll() {
            var max = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function initMagnet() {
        if (window.matchMedia('(hover: none)').matches) return;
        var btns = document.querySelectorAll('.btn.solid, .talk');
        for (var i = 0; i < btns.length; i++) (function (btn) {
            btn.addEventListener('mousemove', function (e) {
                var r = btn.getBoundingClientRect();
                btn.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.12).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.18).toFixed(1) + 'px)';
            });
            btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
        })(btns[i]);
    }

    function initCopy() {
        var btn = document.getElementById('copyMail');
        if (!btn) return;
        btn.addEventListener('click', function () {
            var done = function () {
                btn.textContent = STR[lang]['contact.copied'];
                setTimeout(function () { btn.textContent = STR[lang]['contact.copy']; }, 1600);
            };
            var mail = 'erfanhoo14@gmail.com';
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(mail).then(done, function () { fallback(); });
            } else { fallback(); }
            function fallback() {
                var ta = document.createElement('textarea');
                ta.value = mail;
                document.body.appendChild(ta);
                ta.select();
                try { document.execCommand('copy'); } catch (e) {}
                document.body.removeChild(ta);
                done();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        setLang(lang);
        initAccordion();
        initReveal();
        initMenu();
        initParallax();
        initProgress();
        initMagnet();
        initCopy();
        updateClock();
        setInterval(updateClock, 20000);
        var t = document.getElementById('langToggle');
        if (t) t.addEventListener('click', function () { setLang(lang === 'en' ? 'fa' : 'en'); });
        var y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
    });
})();
