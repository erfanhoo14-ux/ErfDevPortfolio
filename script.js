/* Plain JS. Accordion + language + reveal + menu + stack parallax + clock + copy. */
(function () {
    'use strict';

    var STR = {
        en: {
            'a11y.skip': 'Skip to work',
            'nav.work': 'Work', 'nav.svc': 'Services', 'nav.log': 'Log', 'nav.about': 'About',
            'nav.avail': 'open for work', 'nav.talk': "Let's talk",
            'hero.kicker': 'Portfolio 2026 — Tehran, Iran',
            'hero.h': 'Horror games that <em>listen.</em><br>Websites that <em>breathe.</em>',
            'hero.sub': 'I&rsquo;m Erfan — indie horror developer working in Unreal Engine 5, and a web designer making fast bilingual sites: landing pages, portfolios, small shops. This page is both my resume and my sample — designed and coded by hand.',
            'hero.cta1': 'See the work ↓', 'hero.cta2': 'I need a website →',
            'hero.now': 'Now', 'hero.nowV': 'Horror prototype in UE5',
            'hero.open': 'Booking', 'hero.openV': 'Websites + gameplay freelance',
            'hero.elsewhere': 'Elsewhere',
            'c1k': 'Game — in progress', 'c1s': 'enemies hear you · UE5',
            'c2t': 'سایت دوزبانه، راست‌چین واقعی', 'c2s': 'FA / EN · RTL · static · fast',
            'c3k': '★ available — one slot', 'c3t': 'Your site here?', 'c3s': 'landing · portfolio · shop — 1–3 weeks',
            'mq': 'HORROR GAMES ✳ WEB DESIGN ✳ UNREAL ENGINE 5 ✳ FA/EN + REAL RTL ✳ NO TEMPLATES ✳ FAST &amp; HAND-CODED ✳&nbsp;',
            'work.k': '01 — Selected work',
            'work.title': 'Five builds, web first.',
            'work.sub': 'You&rsquo;re probably here for a website — so that&rsquo;s project one. Then the games. Each opens into notes: what I tried, what broke, where it stands.',
            'svc.k': '02 — Services',
            'svc.title': 'Hire me for this.',
            'svc.sub': 'Scroll — the cards stack. Websites are the main act; games and automation come along.',
            'svc.b.k': 'Web design — the main act',
            'svc.b.t': 'Websites, designed &amp; built by me',
            'svc.b.d': 'Landing pages, portfolios, small shops. Bilingual Persian/English with proper RTL — not a mirrored afterthought. Hand-coded, static, fast, with SEO basics covered.',
            'svc.b.l1': 'FA/EN + real RTL layout',
            'svc.b.l2': '1–3 weeks, you watch it grow',
            'svc.b.l3': 'You own everything — no lock-in',
            'svc.b.cta': 'Start a website →',
            'svc.a.k': 'Game dev',
            'svc.a.t': 'Horror prototypes in UE5',
            'svc.a.d': 'Systems-first horror: sound-driven AI, stealth, small spaces. Vertical slices in weeks, not months.',
            'svc.a.l1': 'Sound-driven AI &amp; stealth',
            'svc.a.l2': 'Blueprint + C++ gameplay',
            'svc.a.l3': 'Jam &amp; freelance friendly',
            'svc.c.k': 'Automation',
            'svc.c.t': 'Small AI tools that remove boring work',
            'svc.c.d': 'Prompt batches, renaming scripts, subtitle timing, deploy checklists. One file per job, documented.',
            'svc.c.l1': 'Prompt test batches',
            'svc.c.l2': 'Batch renaming &amp; subtitles',
            'svc.c.l3': 'Deploy checklists',
            'proc.k': '03 — How a website with me goes',
            'proc.title': 'Four steps, no mystery.',
            'proc.s1t': 'Hello — 20 minutes',
            'proc.s1d': 'A call or a long email. What you&rsquo;re selling, who it&rsquo;s for, three sites you like. I tell you honestly if I&rsquo;m the wrong person.',
            'proc.s2t': 'Sketch — days',
            'proc.s2d': 'You get a homepage draft in a few days, in both languages if needed. We argue about it early, while changes are cheap.',
            'proc.s3t': 'Build — 1–3 weeks',
            'proc.s3d': 'Hand-coded, no page builder. You get a live link and watch it grow. Two revision rounds included.',
            'proc.s4t': 'Launch + handover',
            'proc.s4d': 'Deployed, measured, documented. You own the code and the domain. I stay a message away for a month, free.',
            'log.k': '04 — Build log',
            'log.title': 'Notes, dated.',
            'log.sub': 'Updated when something actually happens — not on a schedule.',
            'about.k': '05 — About',
            'about.title': 'The short version.',
            'about.p1': 'I&rsquo;m Erfan Hassanpur, from Iran. I make horror games in Unreal Engine 5 — and I design websites: landing pages, portfolios, small shops, in Persian and English.',
            'about.p2': 'No studio, no publisher, no agency. Design, Blueprint, C++ when I must, audio, and this site — the fastest proof of the web half is that you&rsquo;re looking at it.',
            'about.p3': 'Working alone sets the scope: small casts, systems over content, sound over spectacle. Same on the web: few pages, done right, loading instantly.',
            'about.tools': 'Toolbox',
            'about.rules': 'Rules I build by',
            'about.r1': 'Prototype in days, not months.',
            'about.r2': 'Sound before visuals.',
            'about.r3': 'If it needs a tutorial, it&rsquo;s too complicated.',
            'about.r4': 'Ship small, shelve fast.',
            'about.no': 'Not taking on',
            'about.noV': 'Hyper-casual clones, crypto games, unpaid &ldquo;exposure&rdquo; work.',
            'contact.tag': '06 — Contact',
            'contact.h': 'Game? Website? <em>Let&rsquo;s make it weird.</em>',
            'contact.sub': 'Email is best. Say what you&rsquo;re making, the timeline, and the budget range. I reply in two or three days — a week max if I&rsquo;m deep in a build. I always reply.',
            'contact.email': 'erfanhoo14@gmail.com',
            'contact.copy': 'Copy address',
            'contact.copied': 'Copied ✓',
            'foot.col': 'Designed &amp; hand-coded by Erfan. Fraunces + Space Grotesk + Vazirmatn. No framework, no cookies, no tracking.',
            'foot.top': 'Back to top ↑',
            'note.tried': 'Tried', 'note.broke': 'Broke', 'note.stands': 'Stands',
            'ptype.web': 'web design', 'ptype.game': 'game', 'ptype.tool': 'tool'
        },
        fa: {
            'a11y.skip': 'رفتن به کارها',
            'nav.work': 'کارها', 'nav.svc': 'خدمات', 'nav.log': 'تاریخچه', 'nav.about': 'درباره',
            'nav.avail': 'باز برای کار', 'nav.talk': 'حرف بزنیم',
            'hero.kicker': 'پورتفولیو من — مشهد، ایران',
            'hero.h': '<br>وب‌سایتی که <em>منو بهتر توضیح میده </em>',
            'hero.sub': 'من عرفانم — سازنده مستقل بازی ترسناک با آنریل انجین ۵ و طراح وب‌سایت‌های دوزبانه سریع: لندینگ، پورتفولیو، فروشگاه کوچیک. این صفحه هم رزومه‌ منه هم نمونه‌کارم — با دست طراحی و کدنویسی شده.',
            'hero.cta1': 'دیدن کارها ↓', 'hero.cta2': 'من وب‌سایت می‌خوام ←',
            'hero.now': 'الان', 'hero.nowV': 'بازی ترسناک با UE5',
            'hero.open': 'ظرفیت', 'hero.openV': 'فریلنس وب‌سایت و گیم‌پلی',
            'hero.elsewhere': 'پلتفرم های دیگه',
            'c1k': 'بازی — در حال ساخت', 'c1s': 'دشمن‌ها می‌شنون · UE5',
            'c2t': 'سایت دوزبانه، راست‌چین واقعی', 'c2s': 'فا / ان · راست‌چین · استاتیک · سریع',
            'c3k': '★ آزاد — یه ظرفیت', 'c3t': 'سایت تو اینجا؟', 'c3s': 'لندینگ · پورتفولیو · فروشگاه — ۱ تا ۳ هفته',
            'mq': 'بازی ترسناک ✳ طراحی وب ✳ آنریل انجین ۵ ✳ دوزبانه + راست‌چین واقعی ✳ بدون قالب آماده ✳ سریع و دست‌ساز ✳&nbsp;',
            'work.k': '۰۱ — کارهای منتخب',
            'work.title': 'پنج تا بیلد، اول وب.',
            'work.sub': 'احتمالاً برای وب‌سایت اینجایی — پس پروژه اول همونه. بعد بازی‌ها. هر کدوم باز می‌شه به یادداشت‌ها: چی رو امتحان کردم، چی خراب شد، الان کجاست.',
            'svc.k': '۰۲ — خدمات',
            'svc.title': 'برای این کارا استخدامم کن.',
            'svc.sub': 'اسکرول کن — کارت‌ها روی هم می‌شینن. وب‌سایت نقش اوله؛ بازی و اتوماسیون هم همراهش.',
            'svc.b.k': 'طراحی وب — نقش اول',
            'svc.b.t': 'وب‌سایت، طراحی و ساخت خودم',
            'svc.b.d': 'لندینگ، پورتفولیو، فروشگاه کوچیک. دوزبانه فارسی/انگلیسی با راست‌چین درست — نه آینه‌کاری آخر کار. دست‌کد، استاتیک، سریع، با سئوی پایه.',
            'svc.b.l1': 'فارسی/انگلیسی + راست‌چین واقعی',
            'svc.b.l2': '۱ تا ۳ هفته، رشدش رو می‌بینی',
            'svc.b.l3': 'همه‌چیز مال خودته — بدون قفل',
            'svc.b.cta': 'شروع وب‌سایت ←',
            'svc.a.k': 'بازی‌سازی',
            'svc.a.t': 'پروتوتایپ ترسناک با UE5',
            'svc.a.d': 'ترسناک سیستم-محور: هوش مصنوعی صدا-محور، مخفی‌کاری، فضاهای کوچیک. ورتیکال اسلایس در چند هفته، نه چند ماه.',
            'svc.a.l1': 'هوش مصنوعی صدا-محور و مخفی‌کاری',
            'svc.a.l2': 'گیم‌پلی بلوپرینت + C++',
            'svc.a.l3': 'مناسب گیم‌جم و فریلنس',
            'svc.c.k': 'اتوماسیون',
            'svc.c.t': 'ابزارهای کوچیک که کار خسته‌کننده رو حذف می‌کنن',
            'svc.c.d': 'بچ پرامپت، اسکریپت تغییر اسم، زمان‌بندی زیرنویس، چک‌لیست دیپلوی. هر کار یه فایل، مستند.',
            'svc.c.l1': 'بچ تست پرامپت',
            'svc.c.l2': 'تغییر اسم دسته‌ای و زیرنویس',
            'svc.c.l3': 'چک‌لیست دیپلوی',
            'proc.k': '۰۳ — سفارش وب‌سایت با من چطور پیش می‌ره',
            'proc.title': 'چهار قدم، بدون راز.',
            'proc.s1t': 'سلام — ۲۰ دقیقه',
            'proc.s1d': 'یه تماس یا یه ایمیل بلند. چی می‌فروشی، مخاطبت کیه، سه تا سایتی که دوست داری. صادقانه می‌گم اگه آدمش نیستم.',
            'proc.s2t': 'اسکچ — چند روز',
            'proc.s2d': 'تو چند روز یه پیش‌نویس صفحه اصلی می‌گیری، اگه لازم باشه دوزبانه. زود سرش بحث می‌کنیم، وقتی تغییر هنوز ارزونه.',
            'proc.s3t': 'ساخت — ۱ تا ۳ هفته',
            'proc.s3d': 'دست‌کد، بدون صفحه‌ساز. یه لینک زنده می‌گیری و رشدش رو می‌بینی. دو دور بازبینی هم داخلشه.',
            'proc.s4t': 'لانچ + تحویل',
            'proc.s4d': 'دیپلوی، اندازه‌گیری، مستند. کد و دامین مال خودته. یه ماه مجانی یه پیام فاصله دارم.',
            'log.k': '۰۴ — دفترچه ساخت',
            'log.title': 'یادداشت‌ها، تاریخ‌دار.',
            'log.sub': 'وقتی واقعاً اتفاقی بیفته به‌روز می‌شه — نه طبق برنامه.',
            'about.k': '۰۵ — درباره',
            'about.title': 'نسخه کوتاه.',
            'about.p1': 'من عرفان حسن‌پورم، از ایران. بازی ترسناک با آنریل انجین ۵ می‌سازم — و وب‌سایت طراحی می‌کنم: لندینگ، پورتفولیو، فروشگاه کوچیک، فارسی و انگلیسی.',
            'about.p2': 'نه استودیو، نه ناشر، نه آژانس. طراحی، بلوپرینت، وقتی لازم باشه C++، صدا و همین سایت — سریع‌ترین مدرک بخش وب اینه که داری نگاهش می‌کنی.',
            'about.p3': 'تنها کار کردن اسکوپ رو تعیین می‌کنه: شخصیت کم، سیستم به‌جای محتوا، صدا به‌جای جلوه. تو وب هم همینه: چند صفحه، درست انجام‌شده، با لود فوری.',
            'about.tools': 'جعبه‌ابزار',
            'about.rules': 'قانون‌های ساختن',
            'about.r1': 'پروتوتایپ در عرض چند روز، نه چند ماه.',
            'about.r2': 'اول صدا، بعد تصویر.',
            'about.r3': 'اگه آموزش لازم داشت، زیادی پیچیده‌ست.',
            'about.r4': 'کوچیک منتشر کن، سریع کنار بذار.',
            'about.no': 'کارهایی که قبول نمی‌کنم',
            'about.noV': 'کلون هایپرکژوال، بازی کرپتویی، کار مجانی برای «اکسپوژر».',
            'contact.tag': '۰۶ — تماس',
            'contact.h': 'بازی؟ وب‌سایت؟ <em>بزن بریم یه چیز عجیب بسازیم.</em>',
            'contact.sub': 'ایمیل بهترین راهه. بگو چی می‌سازی، ددلاین کیه و بودجه حدوداً چقدره. ظرف دو سه روز جواب می‌دم — اگه وسط یه بیلد سنگین باشم حداکثر یه هفته. همیشه جواب می‌دم.',
            'contact.email': 'erfanhoo14@gmail.com',
            'contact.copy': 'کپی آدرس',
            'contact.copied': 'کپی شد ✓',
            'foot.col': 'طراحی و دست‌کد عرفان. Fraunces + Space Grotesk + وزیرمتن. بدون فریم‌ورک، بدون کوکی، بدون ردیابی.',
            'foot.top': 'برگشت به بالا ↑',
            'note.tried': 'چی رو امتحان کردم', 'note.broke': 'چی خراب شد', 'note.stands': 'الان کجاست',
            'ptype.web': 'طراحی وب', 'ptype.game': 'بازی', 'ptype.tool': 'ابزار'
        }
    };

    var PROJECTS = [
        {
            n: '01', type: 'web',
            title: { en: 'This Site', fa: 'همین سایت' },
            meta: { en: '2026 · web design + build', fa: '۲۰۲۶ · طراحی و ساخت وب' },
            lede: {
                en: 'This portfolio, designed and hand-coded by me. Bilingual (EN/FA with real RTL, not a mirrored hack), no framework, no tracking — it loads in a blink and reads like a person wrote it.',
                fa: 'همین پورتفولیو، با طراحی و کدنویسی دستی خودم. دوزبانه (انگلیسی/فارسی با راست‌چین واقعی، نه آینه‌کاری الکی)، بدون فریم‌ورک، بدون ردیابی — تو یه چشم‌به‌هم‌زدن لود می‌شه و انگار یه آدم نوشته.'
            },
            notes: [
                { h: 'note.tried',
                  en: 'One HTML file, one CSS file, one JS file. Fraunces for display, Space Grotesk for body, Vazirmatn for Persian — every string lives in a translation table, including RTL layout flips.',
                  fa: 'یه فایل HTML، یه فایل CSS، یه فایل JS. Fraunces برای تیتر، Space Grotesk برای متن، وزیرمتن برای فارسی — همه رشته‌ها توی یه جدول ترجمه‌ست، از جمله چرخش‌های چیدمان راست‌چین.' },
                { h: 'note.broke',
                  en: 'The previous version was a dark neon theme — glowing orbs, glass cards, cyan everything. It photographed well and felt like everyone else. This warm paper theme with hard shadows is more me: print-like, opinionated, harder to copy.',
                  fa: 'نسخه قبلی یه تم تیره نئونی بود — گوی‌های درخشان، کارت‌های شیشه‌ای، همه‌چیز فیروزه‌ای. تو عکس خوب بود ولی حس بقیه رو می‌داد. این تم کاغذی گرم با سایه‌های تخت بیشتر خودمه: چاپی، صاحب‌نظر، سخت‌تر برای کپی.' },
                { h: 'note.stands',
                  en: 'Live — you are looking at it. It doubles as my web-design sample: if you want a site like this, email me.',
                  fa: 'بالاست — داری نگاهش می‌کنی. همزمان نمونه‌کار وب‌دیزاینمه: اگه همچین سایتی می‌خوای، ایمیل بزن.' }
            ],
            tags: ['HTML/CSS/JS', 'RTL', 'i18n', 'Static'],
            status: { en: '<b>Live</b> — you’re here', fa: '<b>بالاست</b> — اینجایی' }
        },
        {
            n: '02', type: 'game',
            title: { en: 'Sound Hunter', fa: 'شکارچی صدا' },
            meta: { en: '2024 — now · Unreal Engine 5 horror prototype', fa: '۲۰۲۴ — تا الان · پروتوتایپ ترسناک آنریل انجین ۵' },
            lede: {
                en: 'A first-person horror prototype where the enemies don’t see you — they hear you. Every footstep, door, and dropped object feeds a noise system that drives the AI.',
                fa: 'یه پروتوتایپ ترسناک اول‌شخص که دشمن‌هاش تو رو نمی‌بینن — می‌شنون. هر قدم، هر در و هر چیزی که میفته وارد یه سیستم نویز می‌شه که هوش مصنوعی رو هدایت می‌کنه.'
            },
            notes: [
                { h: 'note.tried',
                  en: 'Player noise events through UE5 perception plus custom attenuation curves per surface — concrete echoes, carpet swallows.',
                  fa: 'نویز ایونت‌های بازیکن از perception آنریل رد می‌شه + منحنی افت صدا برای هر سطح — بتن اکو می‌ده، فرش صدا رو می‌بلعه.' },
                { h: 'note.broke',
                  en: 'For a month the creature heard through walls. The fix was embarrassingly simple: a line trace from the noise source before raising the stimulus. I check occlusion first on everything now.',
                  fa: 'یه ماه هیولا از پشت دیوار می‌شنید. راه‌حلش خجالت‌آور ساده بود: قبل از تحریک، از منبع صدا line trace بگیر. از اون به بعد همه‌جا اول occlusion رو چک می‌کنم.' },
                { h: 'note.stands',
                  en: 'Playable vertical slice, about 15 minutes. No public build yet — the chase sequence needs a second pass.',
                  fa: 'یه ورتیکال اسلایس قابل‌بازی، حدود ۱۵ دقیقه. هنوز بیلد عمومی نداره — سکانس تعقیب یه دور دیگه کار می‌خواد.' }
            ],
            tags: ['UE5', 'Blueprint', 'C++', 'AI Perception'],
            status: { en: '<b>In progress</b> — chase pass next', fa: '<b>در حال ساخت</b> — قدم بعدی: سکانس تعقیب' }
        },
        {
            n: '03', type: 'game',
            title: { en: 'Ward', fa: 'وارد' },
            meta: { en: '2025 · mechanic study', fa: '۲۰۲۵ · مطالعه مکانیک' },
            lede: {
                en: 'A small study: you read scattered notes while something gets closer. Reading is the interaction — a page fills as you read, and the room reacts to how long you take.',
                fa: 'یه مطالعه کوچیک: یادداشت‌های پخش‌شده رو می‌خونی در حالی که یه چیزی نزدیک‌تر می‌شه. خوندن خودش تعامله — با خوندن صفحه پر می‌شه و اتاق به وقتی که می‌ذاری واکنش نشون می‌ده.'
            },
            notes: [
                { h: 'note.tried',
                  en: 'A UMG reading UI tied to a pressure value driven by enemy distance; audio and light shift as it closes in.',
                  fa: 'رابط خوندن UMG رو به یه مقدار فشار وصل کردم که با فاصله دشمن هدایت می‌شه؛ صدا و نور با نزدیک شدنش عوض می‌شه.' },
                { h: 'note.broke',
                  en: 'The first version punished reading at all — players just sprinted. Slowing the enemy while a page is open fixed the loop: risk became a choice.',
                  fa: 'نسخه اول خوندن رو کلاً تنبیه می‌کرد — بازیکن‌ها فقط می‌دویدن. کم کردن سرعت دشمن وقتی صفحه‌ای بازه حلقه رو درست کرد: ریسک شد یه انتخاب.' },
                { h: 'note.stands',
                  en: 'Finished as a study; the pressure system now lives inside Sound Hunter. Shelved as its own game.',
                  fa: 'به‌عنوان مطالعه تموم شد؛ سیستم فشارش الان توی Sound Hunter زندگی می‌کنه. به‌عنوان بازی مستقل کنار گذاشته شد.' }
            ],
            tags: ['UE5', 'UMG', 'Blueprint'],
            status: { en: 'Shelved — systems reused', fa: 'کنار گذاشته شد — سیستم‌ها استفاده شدن' }
        },
        {
            n: '04', type: 'tool',
            title: { en: 'Can I Build This?', fa: 'می‌تونم اینو بسازم؟' },
            meta: { en: '2025 · web tool', fa: '۲۰۲۵ · ابزار وب' },
            lede: {
                en: 'A weekend tool that scores startup ideas on demand, competition, cost, difficulty, and monetization. Type an idea, get a blunt breakdown — it talks you out of most things.',
                fa: 'یه ابزار آخرهفته‌ای که ایده‌های استارتاپی رو از نظر تقاضا، رقابت، هزینه، سختی و درآمدزایی نمره می‌ده. ایده رو تایپ می‌کنی، یه تحلیل رک می‌گیری — بیشتر وقت‌ها منصرفت می‌کنه.'
            },
            notes: [
                { h: 'note.tried',
                  en: 'A single page on an LLM API with a strict scoring rubric in the prompt; scores render as plain bars, no fluff.',
                  fa: 'یه تک‌صفحه‌ای روی API یه مدل زبانی با یه روبریک نمره‌دهی سفت‌وسخت توی پرامپت؛ نمره‌ها به‌صورت نوار ساده نمایش داده می‌شن، بدون حاشیه.' },
                { h: 'note.broke',
                  en: 'Early answers were horoscope-generic. Forcing the model to name a comparable real product per score fixed most of it.',
                  fa: 'جواب‌های اول مثل فال قهوه کلی بودن. مجبور کردن مدل به ذکر یه محصول واقعی مشابه برای هر نمره بیشترش رو درست کرد.' },
                { h: 'note.stands',
                  en: 'Live, used by a few friends. Costs almost nothing to run, so it stays up.',
                  fa: 'بالاست، چند تا از دوستام استفاده می‌کنن. اجراش تقریباً هیچی خرج نداره، پس می‌مونه.' }
            ],
            tags: ['JavaScript', 'LLM API', 'Netlify'],
            status: { en: '<b>Live</b> — maintained when I feel like it', fa: '<b>بالاست</b> — وقتی حوصله کنم نگهش می‌دارم' }
        },
        {
            n: '05', type: 'tool',
            title: { en: 'AI Toolkit', fa: 'جعبه ابزار هوش مصنوعی' },
            meta: { en: '2024–25 · scripts & utilities', fa: '۲۰۲۴–۲۵ · اسکریپت و ابزار' },
            lede: {
                en: 'Not one product — a folder of Python scripts and API glue I have actually reused: batch asset renaming, subtitle timing, prompt test batches, deploy checklists.',
                fa: 'یه محصول نیست — یه پوشه اسکریپت پایتون و چسب API که واقعاً دوباره استفاده‌شون کردم: تغییر اسم دسته‌ای asset، زمان‌بندی زیرنویس، بچ تست پرامپت، چک‌لیست دیپلوی.'
            },
            notes: [
                { h: 'note.tried',
                  en: 'One file per tool, one job each, no frameworks. If the README outgrows the script, the script gets deleted.',
                  fa: 'هر ابزار یه فایل، هر فایل یه کار، بدون فریم‌ورک. اگه README از خود اسکریپت طولانی‌تر بشه، پاکش می‌کنم.' },
                { h: 'note.broke',
                  en: 'Half of them only ran on my machine. Documenting the environment per script instead of one global setup fixed that.',
                  fa: 'نصفشون فقط روی سیستم خودم اجرا می‌شدن. مستند کردن محیط هر اسکریپت به‌جای یه راهنمای کلی درستش کرد.' },
                { h: 'note.stands',
                  en: 'Private repo; it grows whenever a task annoys me twice. A couple of scripts went to friends and never came back — good sign.',
                  fa: 'ریپوی خصوصی؛ وقتی یه کار دوبار اذیتم کنه بزرگ می‌شه. چند تا اسکریپت رفت دست دوستام و دیگه برنگشت — نشونه خوبیه.' }
            ],
            tags: ['Python', 'APIs', 'Automation'],
            status: { en: 'Ongoing — private repo', fa: 'ادامه‌دار — ریپوی خصوصی' }
        }
    ];

    var LOG = [
        { d: { en: 'Sep 2026', fa: 'شهریور ۱۴۰۵' },
          en: '<strong>New warm theme, web first.</strong> This page now sells websites first, games second.',
          fa: '<strong>تم گرم جدید، وب در اولویت.</strong> این صفحه الان اول وب‌سایت می‌فروشه، بعد بازی.' },
        { d: { en: 'Sep 2026', fa: 'شهریور ۱۴۰۵' },
          en: '<strong>Through-wall hearing is dead.</strong> Chase AI now traces occlusion before reacting to noise.',
          fa: '<strong>شنیدن از پشت دیوار مرد.</strong> هوش تعقیب الان قبل از واکنش به نویز occlusion رو trace می‌کنه.' },
        { d: { en: 'Aug 2026', fa: 'مرداد ۱۴۰۵' },
          en: '<strong>Shelved Ward</strong> as a standalone. Its pressure system moved into Sound Hunter.',
          fa: '<strong>Ward رو کنار گذاشتم</strong> به‌عنوان مستقل. سیستم فشارش رفت توی Sound Hunter.' },
        { d: { en: 'Mar 2026', fa: 'اسفند ۱۴۰۴' },
          en: 'Second prototype area done — a flooded basement. Reverb tuning ate a whole weekend.',
          fa: 'ناحیه دوم پروتوتایپ تموم شد — یه زیرزمین پرآب. تنظیم ریورب یه آخرهفته کامل برد.' },
        { d: { en: 'Dec 2025', fa: 'آذر ۱۴۰۴' },
          en: 'Noise-system rewrite started: per-surface attenuation. Concrete echoes; carpet swallows.',
          fa: 'بازنویسی سیستم نویز شروع شد: افت صدا برای هر سطح. بتن اکو می‌ده؛ فرش می‌بلعه.' },
        { d: { en: 'Oct 2025', fa: 'مهر ۱۴۰۴' },
          en: 'Reading-mechanic study wrapped. Verdict: pressure works when slowness is the player’s choice.',
          fa: 'مطالعه مکانیک خوندن تموم شد. نتیجه: فشار جواب می‌ده وقتی کند بودن انتخاب خود بازیکن باشه.' }
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
            ? 'عرفان حسن‌پور — بازی ترسناک و وب‌سایت'
            : 'Erfan Hassanpur — Horror games & websites';
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
