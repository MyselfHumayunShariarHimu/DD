/* ================================================================
   nb-components.js v2.0 — NewsBD Shared Components
   Navbar · Footer · Ticker · Lang Switch · Theme · PWA · Cookie
   ================================================================ */
(function () {

  /* ── i18n TRANSLATIONS ───────────────────────────────────── */
  const I18N = {
    bn: {
      home:'হোম', hub:'নিউজহাব', bag:'নিউজব্যাগ',
      desc:'বিবরণ', disc:'দাবিত্যাগ', priv:'গোপনীয়তা', contact:'যোগাযোগ',
      search_ph:'খবর / ব্রেকিং নিউজ অনুসন্ধান করুন...',
      breaking:'ব্রেকিং',
      install_title:'NewsBD ইনস্টল করুন',
      install_sub:'হোম স্ক্রিনে যুক্ত করুন',
      install_btn:'ইনস্টল',
      cookie_msg:'আমরা আপনার অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করি। ',
      cookie_more:'আরো জানুন',
      cookie_ok:'ঠিক আছে',
      newsletter_ph:'আপনার ইমেইল',
      newsletter_btn:'সাবস্ক্রাইব',
      footer_nav:'নেভিগেশন',
      footer_legal:'আইনি',
      footer_social:'সামাজিক',
      footer_newsletter:'নিউজলেটার',
      footer_newsletter_desc:'সর্বশেষ সংবাদ সরাসরি ইমেইলে পান।',
      copy:'স্বত্বাধিকারী',
    },
    en: {
      home:'Home', hub:'NewsHub', bag:'NewsBag',
      desc:'About', disc:'Disclaimer', priv:'Privacy', contact:'Contact',
      search_ph:'Search news, headlines, breaking news...',
      breaking:'BREAKING',
      install_title:'Install NewsBD',
      install_sub:'Add to home screen',
      install_btn:'Install',
      cookie_msg:'We use cookies to enhance your experience. ',
      cookie_more:'Learn more',
      cookie_ok:'Accept',
      newsletter_ph:'Your email address',
      newsletter_btn:'Subscribe',
      footer_nav:'Navigation',
      footer_legal:'Legal',
      footer_social:'Social',
      footer_newsletter:'Newsletter',
      footer_newsletter_desc:'Get the latest news directly to your inbox.',
      copy:'Owned & Created by',
    },
    hi: {
      home:'होम', hub:'न्यूज़हब', bag:'न्यूज़बैग',
      desc:'विवरण', disc:'अस्वीकरण', priv:'गोपनीयता', contact:'संपर्क',
      search_ph:'समाचार खोजें...',
      breaking:'ब्रेकिंग',
      install_title:'NewsBD इंस्टॉल करें',
      install_sub:'होम स्क्रीन पर जोड़ें',
      install_btn:'इंस्टॉल',
      cookie_msg:'हम आपके अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग करते हैं। ',
      cookie_more:'अधिक जानें',
      cookie_ok:'स्वीकार करें',
      newsletter_ph:'आपका ईमेल',
      newsletter_btn:'सदस्यता',
      footer_nav:'नेविगेशन',
      footer_legal:'कानूनी',
      footer_social:'सामाजिक',
      footer_newsletter:'न्यूज़लेटर',
      footer_newsletter_desc:'नवीनतम समाचार सीधे अपने इनबॉक्स में पाएं।',
      copy:'स्वामित्व',
    },
    ar: {
      home:'الرئيسية', hub:'مركز الأخبار', bag:'حقيبة الأخبار',
      desc:'وصف', disc:'إخلاء مسؤولية', priv:'الخصوصية', contact:'اتصل',
      search_ph:'ابحث عن الأخبار...',
      breaking:'عاجل',
      install_title:'تثبيت NewsBD',
      install_sub:'أضف إلى الشاشة الرئيسية',
      install_btn:'تثبيت',
      cookie_msg:'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. ',
      cookie_more:'اعرف أكثر',
      cookie_ok:'قبول',
      newsletter_ph:'بريدك الإلكتروني',
      newsletter_btn:'اشترك',
      footer_nav:'التنقل',
      footer_legal:'قانوني',
      footer_social:'التواصل',
      footer_newsletter:'النشرة الإخبارية',
      footer_newsletter_desc:'احصل على آخر الأخبار مباشرة في صندوق الوارد.',
      copy:'مملوك ومُنشأ بواسطة',
    },
    zh: {
      home:'首页', hub:'新闻中心', bag:'新闻袋',
      desc:'简介', disc:'免责声明', priv:'隐私政策', contact:'联系我们',
      search_ph:'搜索新闻...',
      breaking:'快讯',
      install_title:'安装 NewsBD',
      install_sub:'添加到主屏幕',
      install_btn:'安装',
      cookie_msg:'我们使用 Cookie 来改善您的体验。',
      cookie_more:'了解更多',
      cookie_ok:'接受',
      newsletter_ph:'您的电子邮件',
      newsletter_btn:'订阅',
      footer_nav:'导航',
      footer_legal:'法律',
      footer_social:'社交',
      footer_newsletter:'新闻通讯',
      footer_newsletter_desc:'将最新新闻直接发送到您的收件箱。',
      copy:'版权所有',
    },
  };

  const LANGS = [
    { code:'bn', flag:'🇧🇩', name:'বাংলা' },
    { code:'en', flag:'🇬🇧', name:'English' },
    { code:'hi', flag:'🇮🇳', name:'हिन्दी' },
    { code:'ar', flag:'🇸🇦', name:'العربية' },
    { code:'zh', flag:'🇨🇳', name:'中文' },
  ];

  /* Current language */
  let currentLang = localStorage.getItem('nb-lang') || 'bn';
  const t = (k) => (I18N[currentLang] || I18N.bn)[k] || k;

  /* RTL languages */
  function applyDir(lang) {
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }
  applyDir(currentLang);

  /* ── TICKER ITEMS ────────────────────────────────────────── */
  const TICKER_ITEMS = {
    bn: [
      { text:'প্রথম আলো — সর্বশেষ খবর', href:'https://www.prothomalo.com/' },
      { text:'যুগান্তর — আজকের সংবাদ', href:'https://www.jugantor.com/' },
      { text:'The Daily Star — Breaking News', href:'https://www.thedailystar.net/' },
      { text:'কালের কণ্ঠ — লাইভ আপডেট', href:'https://www.kalerkantho.com/' },
      { text:'Dhaka Tribune — Latest Headlines', href:'https://www.dhakatribune.com/' },
      { text:'সমকাল — সর্বশেষ খবর', href:'https://samakal.com/' },
      { text:'BDNews24 — Bangladesh News', href:'https://bdnews24.com/' },
      { text:'ইত্তেফাক — আজকের সংবাদ', href:'https://www.ittefaq.com.bd/' },
    ],
    en: [
      { text:'Prothom Alo — Latest News', href:'https://en.prothomalo.com/' },
      { text:'The Daily Star — Breaking News', href:'https://www.thedailystar.net/' },
      { text:'Dhaka Tribune — Headlines', href:'https://www.dhakatribune.com/' },
      { text:'BDNews24 — Bangladesh Today', href:'https://bdnews24.com/' },
      { text:'New Age BD — Current Affairs', href:'https://www.newagebd.net/' },
      { text:'Financial Express — Economy', href:'https://thefinancialexpress.com.bd/' },
    ],
    hi: [
      { text:'बांग्लादेश की ताज़ा खबरें — Daily Star', href:'https://www.thedailystar.net/' },
      { text:'ढाका ट्रिब्यून — ब्रेकिंग न्यूज़', href:'https://www.dhakatribune.com/' },
      { text:'BDNews24 — बांग्लादेश समाचार', href:'https://bdnews24.com/' },
    ],
    ar: [
      { text:'أحدث أخبار بنغلاديش — Daily Star', href:'https://www.thedailystar.net/' },
      { text:'دكا تريبيون — عاجل', href:'https://www.dhakatribune.com/' },
      { text:'BDNews24 — أخبار بنغلاديش', href:'https://bdnews24.com/' },
    ],
    zh: [
      { text:'孟加拉国最新新闻 — Daily Star', href:'https://www.thedailystar.net/' },
      { text:'达卡论坛报 — 突发新闻', href:'https://www.dhakatribune.com/' },
      { text:'BDNews24 — 孟加拉国新闻', href:'https://bdnews24.com/' },
    ],
  };

  function buildTickerHTML(lang) {
    const items = TICKER_ITEMS[lang] || TICKER_ITEMS.bn;
    const doubled = [...items, ...items]; // duplicate for seamless loop
    return doubled.map((it, i) =>
      `<a href="${it.href}" target="_blank" rel="noopener">${it.text}</a><span class="nb-ticker-sep">◆</span>`
    ).join('');
  }

  /* ── NAV LINKS ───────────────────────────────────────────── */
  const path = window.location.pathname;
  const active = (href) => path.endsWith(href) ? 'active' : '';

  const NAV_PAGES = [
    { href:'./index.html',       key:'home' },
    { href:'./newsbdhub.html',   key:'hub' },
    { href:'./newsbag.html',     key:'bag' },
    { href:'./description.html', key:'desc' },
    { href:'./disclaimer.html',  key:'disc' },
    { href:'./privacy.html',     key:'priv' },
    { href:'./contact.html',     key:'contact' },
  ];

  function buildNavLinks() {
    return NAV_PAGES.map(l =>
      `<a href="${l.href}" class="nb-nav-link ${active(l.href)}" data-i18n="${l.key}">${t(l.key)}</a>`
    ).join('');
  }
  function buildOverlayLinks() {
    return NAV_PAGES.map(l =>
      `<a href="${l.href}" data-i18n="${l.key}">${t(l.key)}</a>`
    ).join('');
  }
  function buildLangOptions(dropdownClass) {
    return LANGS.map(l =>
      `<div class="${dropdownClass} ${l.code===currentLang?'selected':''}" data-lang="${l.code}">
         <span class="flag">${l.flag}</span>
         <span class="lname">${l.name}</span>
       </div>`
    ).join('');
  }
  function buildOverlayLangBtns() {
    return LANGS.map(l =>
      `<button class="${l.code===currentLang?'selected':''}" data-lang="${l.code}">
         ${l.flag} ${l.name}
       </button>`
    ).join('');
  }

  /* ── HTML TEMPLATES ──────────────────────────────────────── */
  const navHTML = `
<div class="nb-ticker" id="nb-ticker">
  <div class="nb-ticker-label"><i class="fa fa-bolt"></i><span data-i18n="breaking">${t('breaking')}</span></div>
  <div class="nb-ticker-track"><div class="nb-ticker-inner" id="nb-ticker-inner">${buildTickerHTML(currentLang)}</div></div>
</div>
<nav class="nb-nav" id="nb-nav">
  <a href="./index.html" class="nb-logo">News<span>BD</span><span class="nb-logo-dot"></span></a>
  <div class="nb-nav-center">${buildNavLinks()}</div>
  <div class="nb-nav-controls">
    <div class="nb-lang-wrap">
      <button class="nb-lang-btn" id="nb-lang-btn" aria-label="Language">
        <i class="fa fa-globe"></i>
        <span class="lang-text">${LANGS.find(l=>l.code===currentLang)?.flag || '🇧🇩'}</span>
        <i class="fa fa-chevron-down" style="font-size:0.6rem;opacity:0.6;"></i>
      </button>
      <div class="nb-lang-dropdown" id="nb-lang-dropdown">${buildLangOptions('nb-lang-option')}</div>
    </div>
    <button class="nb-theme-btn" id="nb-theme-btn" aria-label="Toggle theme">
      <i class="fa fa-moon" id="nb-theme-icon"></i>
    </button>
    <button class="nb-menu-btn" id="nb-open-menu" aria-label="Open menu">
      <i class="fa-solid fa-bars-staggered"></i>
    </button>
  </div>
</nav>
<div class="nb-overlay" id="nb-overlay" role="dialog" aria-modal="true">
  <button class="nb-overlay-close" id="nb-close-menu" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
  <div class="nb-overlay-brand">NewsBD</div>
  <div class="nb-overlay-links">${buildOverlayLinks()}</div>
  <div class="nb-overlay-lang">${buildOverlayLangBtns()}</div>
</div>
<div class="nb-progress" id="nb-progress"></div>`;

  function buildFooterHTML() {
    return `
<footer class="nb-footer">
  <div class="nb-footer-grid">
    <div class="nb-footer-col">
      <h4 data-i18n="footer_nav">${t('footer_nav')}</h4>
      ${NAV_PAGES.map(l=>`<a href="${l.href}" data-i18n="${l.key}">${t(l.key)}</a>`).join('')}
    </div>
    <div class="nb-footer-col">
      <h4 data-i18n="footer_legal">${t('footer_legal')}</h4>
      <a href="./disclaimer.html" data-i18n="disc">${t('disc')}</a>
      <a href="./privacy.html" data-i18n="priv">${t('priv')}</a>
      <a href="./contact.html" data-i18n="contact">${t('contact')}</a>
      <a href="./sitemap.xml">Sitemap</a>
    </div>
    <div class="nb-footer-col">
      <h4 data-i18n="footer_social">${t('footer_social')}</h4>
      <p>Humayun Shariar Himu</p>
      <div class="nb-footer-social">
        <a href="https://www.facebook.com/humayunshariarhimu" target="_blank" rel="noopener" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/HumayunShariarHimu" target="_blank" rel="noopener" aria-label="Twitter / X"><i class="fab fa-x-twitter"></i></a>
        <a href="https://www.youtube.com/@humayunshariarhimu" target="_blank" rel="noopener" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="https://github.com/humayunshariarhimu" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
      </div>
    </div>
    <div class="nb-footer-col">
      <h4 data-i18n="footer_newsletter">${t('footer_newsletter')}</h4>
      <p data-i18n="footer_newsletter_desc">${t('footer_newsletter_desc')}</p>
      <div class="nb-newsletter">
        <input type="email" id="nb-nl-email" placeholder="${t('newsletter_ph')}" data-i18n-ph="newsletter_ph" aria-label="Email">
        <button id="nb-nl-btn" data-i18n="newsletter_btn">${t('newsletter_btn')}</button>
      </div>
    </div>
  </div>
  <div class="nb-footer-bottom">
    <div class="nb-footer-links">
      <a href="./description.html" data-i18n="desc">${t('desc')}</a>
      <a href="./disclaimer.html" data-i18n="disc">${t('disc')}</a>
      <a href="./privacy.html" data-i18n="priv">${t('priv')}</a>
      <a href="./contact.html" data-i18n="contact">${t('contact')}</a>
      <a href="./sitemap.xml">Sitemap</a>
    </div>
    <p class="copy">
      &copy; ${new Date().getFullYear()} <a href="./index.html">NewsBD</a> —
      <span data-i18n="copy">${t('copy')}</span>
      <a href="./humayun_shariar_himu.html" target="_blank">Humayun Shariar Himu</a>
    </p>
  </div>
</footer>
<button class="nb-back-top" id="nb-back-top" aria-label="Back to top"><i class="fa fa-chevron-up"></i></button>
<div class="nb-install-banner" id="nb-install-banner">
  <img src="./newsbd.png" alt="NewsBD">
  <div class="nb-install-banner-text">
    <strong data-i18n="install_title">${t('install_title')}</strong>
    <span data-i18n="install_sub">${t('install_sub')}</span>
  </div>
  <button class="nb-install-btn" id="nb-install-btn" data-i18n="install_btn">${t('install_btn')}</button>
  <button class="nb-install-dismiss" id="nb-install-dismiss" aria-label="Dismiss"><i class="fa fa-times"></i></button>
</div>
<div class="nb-cookie ${localStorage.getItem('nb-cookie')?'hidden':''}" id="nb-cookie">
  <span><span data-i18n="cookie_msg">${t('cookie_msg')}</span><a href="./privacy.html" data-i18n="cookie_more">${t('cookie_more')}</a>.</span>
  <button class="nb-cookie-btn" id="nb-cookie-btn" data-i18n="cookie_ok">${t('cookie_ok')}</button>
</div>`;
  }

  /* ── INJECT ──────────────────────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', buildFooterHTML());

  /* ── THEME ───────────────────────────────────────────────── */
  const savedTheme = localStorage.getItem('nb-theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    document.getElementById('nb-theme-icon').className = 'fa fa-sun';
  }
  document.getElementById('nb-theme-btn').addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    document.getElementById('nb-theme-icon').className = isLight ? 'fa fa-sun' : 'fa fa-moon';
    localStorage.setItem('nb-theme', isLight ? 'light' : 'dark');
  });

  /* ── LANGUAGE ────────────────────────────────────────────── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('nb-lang', lang);
    applyDir(lang);

    // Update all i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (I18N[lang] && I18N[lang][key]) el.textContent = I18N[lang][key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (I18N[lang] && I18N[lang][key]) el.placeholder = I18N[lang][key];
    });
    // Search input placeholder
    document.querySelectorAll('.nb-search-input').forEach(el => {
      el.placeholder = t('search_ph');
    });
    // Update ticker
    const ticker = document.getElementById('nb-ticker-inner');
    if (ticker) ticker.innerHTML = buildTickerHTML(lang);
    // Update lang btn flag
    const flagEl = document.querySelector('.nb-lang-btn .lang-text');
    if (flagEl) flagEl.textContent = LANGS.find(l=>l.code===lang)?.flag || '🌐';
    // Mark selected options
    document.querySelectorAll('.nb-lang-option').forEach(el => {
      el.classList.toggle('selected', el.dataset.lang === lang);
    });
    document.querySelectorAll('.nb-overlay-lang button').forEach(el => {
      el.classList.toggle('selected', el.dataset.lang === lang);
    });
  }

  const langBtn = document.getElementById('nb-lang-btn');
  const langDrop = document.getElementById('nb-lang-dropdown');
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDrop.classList.toggle('open');
  });
  document.addEventListener('click', () => langDrop.classList.remove('open'));
  langDrop.addEventListener('click', e => e.stopPropagation());

  document.querySelectorAll('.nb-lang-option').forEach(el => {
    el.addEventListener('click', () => { applyLang(el.dataset.lang); langDrop.classList.remove('open'); });
  });
  document.querySelectorAll('.nb-overlay-lang button').forEach(el => {
    el.addEventListener('click', () => { applyLang(el.dataset.lang); });
  });

  /* ── MOBILE OVERLAY ──────────────────────────────────────── */
  const overlay  = document.getElementById('nb-overlay');
  const openBtn  = document.getElementById('nb-open-menu');
  const closeBtn = document.getElementById('nb-close-menu');
  openBtn.addEventListener('click',  () => overlay.classList.add('open'));
  closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => overlay.classList.remove('open')));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

  /* ── BACK TO TOP ─────────────────────────────────────────── */
  const backTop = document.getElementById('nb-back-top');
  const progress = document.getElementById('nb-progress');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    backTop.classList.toggle('visible', scrolled > 300);
    // Progress bar
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    if (progress && docH > 0) progress.style.width = (scrolled / docH * 100) + '%';
  }, { passive: true });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── COOKIE CONSENT ──────────────────────────────────────── */
  const cookieBanner = document.getElementById('nb-cookie');
  const cookieBtn    = document.getElementById('nb-cookie-btn');
  if (cookieBtn) {
    cookieBtn.addEventListener('click', () => {
      localStorage.setItem('nb-cookie', '1');
      cookieBanner.classList.add('hidden');
    });
  }

  /* ── NEWSLETTER ──────────────────────────────────────────── */
  const nlBtn = document.getElementById('nb-nl-btn');
  if (nlBtn) {
    nlBtn.addEventListener('click', () => {
      const email = document.getElementById('nb-nl-email')?.value?.trim();
      if (!email || !email.includes('@')) return;
      nlBtn.textContent = '✓';
      nlBtn.style.background = '#10b981';
      setTimeout(() => { nlBtn.textContent = t('newsletter_btn'); nlBtn.style.background = ''; }, 3000);
    });
  }

  /* ── PWA INSTALL ─────────────────────────────────────────── */
  let deferredPrompt;
  const installBanner  = document.getElementById('nb-install-banner');
  const installBtn     = document.getElementById('nb-install-btn');
  const installDismiss = document.getElementById('nb-install-dismiss');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!localStorage.getItem('nb-pwa-dismiss')) {
      setTimeout(() => installBanner.classList.add('visible'), 4000);
    }
  });
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') installBanner.classList.remove('visible');
      deferredPrompt = null;
    });
  }
  if (installDismiss) {
    installDismiss.addEventListener('click', () => {
      installBanner.classList.remove('visible');
      localStorage.setItem('nb-pwa-dismiss', '1');
    });
  }

  /* ── REGISTER SERVICE WORKER ─────────────────────────────── */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

})();
