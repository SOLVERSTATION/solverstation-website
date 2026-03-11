/* =============================================
   SOLVERSTATION — Shared Components
   Navbar + Footer injected into every page
   ============================================= */

(function () {
  'use strict';

  /* ---------- Language ---------- */
  const LANGS = {
    en: {
      nav_home: 'SOLVERSTATION',
      nav_industries: 'INDUSTRIES',
      nav_solutions: 'SOLUTIONS',
      nav_products: 'PRODUCTS',
      nav_partners: 'PARTNERSHIPS',
      nav_company: 'COMPANY',
      nav_resources: 'RESOURCES',
      nav_contact: 'CONTACT US',
      sol_mech: 'Mechanical Engineering and Naval Architecture',
      sol_maint: 'Maintenance and Asset Management',
      sol_rd: 'Research and Development',
      sol_lll: 'Life-long Learning & Training',
      sol_digital: 'Digital Technologies and Data',
      sol_plm: 'Project Life-Cycle Management & Coordination',
      sol_ai: 'Artificial Intelligence & Prompt Engineering',
      sol_intl: 'International Business Operations',
      comp_about: 'About Us',
      comp_values: 'Our Values',
      comp_global: 'Global Presence',
      res_news: 'News',
      res_events: 'Events',
      res_library: 'Library',
      footer_location: 'Zagreb, Croatia',
    },
    hr: {
      nav_home: 'SOLVERSTATION',
      nav_industries: 'INDUSTRIJE',
      nav_solutions: 'RJEŠENJA',
      nav_products: 'PROIZVODI',
      nav_partners: 'PARTNERSTVA',
      nav_company: 'TVRTKA',
      nav_contact: 'KONTAKTIRAJTE NAS',
      nav_resources: 'RESURSI',
      sol_mech: 'Strojarstvo i brodogradnja',
      sol_maint: 'Održavanje i upravljanje imovinom',
      sol_rd: 'Istraživanje i razvoj',
      sol_lll: 'Cjeloživotno učenje i obrazovanje',
      sol_digital: 'Digitalne tehnologije i podaci',
      sol_plm: 'Upravljanje projektnim životnim ciklusom i koordinacija',
      sol_ai: 'Umjetna inteligencija i prompt inženjering',
      sol_intl: 'Međunarodno poslovanje',
      comp_about: 'O nama',
      comp_values: 'Naše vrijednosti',
      comp_global: 'Globalna prisutnost',
      res_news: 'Vijesti',
      res_events: 'Događaji',
      res_library: 'Knjižnica',
      footer_location: 'Zagreb, Hrvatska',
    }
  };

  let currentLang = localStorage.getItem('ss_lang') || 'en';

  /* ---------- Logo SVG removed — text-only logo ---------- */

  /* ---------- Resolve root path ----------
     Detects depth from KNOWN site structure so it works correctly
     regardless of which folder Live Server / GitHub Pages serves from.
     ---------------------------------------------------------------- */
  function rootPath() {
    const p = window.location.pathname;

    // Two levels deep: /solutions/*, /company/*, /resources/*
    if (/\/(solutions|company|resources)\/[^/]/.test(p)) {
      return '../../';
    }

    // One level deep: /partners/, /contact/, /products/, /solutions/ (overview)
    if (/\/(partners|contact|products)(\/|\/index\.html|$)/.test(p)) {
      return '../';
    }
    // Solutions overview (exactly /solutions/ or /solutions/index.html, not /solutions/sub/)
    if (/\/solutions\/(index\.html)?$/.test(p)) {
      return '../';
    }

    // Root (index.html or anything else at server root)
    return './';
  }

  /* ---------- Build Navbar HTML ---------- */
  function buildNavbar() {
    const r = rootPath();
    const t = LANGS[currentLang];
    const chevron = `<svg class="chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`;

    return `
    <nav id="navbar" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">
        <!-- Logo -->
        <a href="${r}index.html" class="nav-logo" aria-label="SolverStation Home">
          <span class="nav-logo-text">Solver<span>Station</span></span>
        </a>

        <!-- Menu -->
        <ul class="nav-menu" id="nav-menu" role="menubar">

          <!-- SOLUTIONS -->
          <li class="nav-item" role="none">
            <a href="${r}solutions/index.html" class="nav-link" role="menuitem" aria-haspopup="true" data-key="nav_solutions">
              ${t.nav_solutions} ${chevron}
            </a>
            <ul class="dropdown" role="menu">
              <li><a href="${r}solutions/mech-eng-naval/index.html"        class="dropdown-item" role="menuitem" data-key="sol_mech">${t.sol_mech}</a></li>
              <li><a href="${r}solutions/maintenance-asset/index.html"     class="dropdown-item" role="menuitem" data-key="sol_maint">${t.sol_maint}</a></li>
              <li><a href="${r}solutions/research-development/index.html"  class="dropdown-item" role="menuitem" data-key="sol_rd">${t.sol_rd}</a></li>
              <li><a href="#"                                              class="dropdown-item" role="menuitem" data-key="sol_lll">${t.sol_lll}</a></li>
              <li><a href="${r}solutions/digital-solutions/index.html"     class="dropdown-item" role="menuitem" data-key="sol_digital">${t.sol_digital}</a></li>
              <li><a href="${r}solutions/project-lifecycle/index.html"     class="dropdown-item" role="menuitem" data-key="sol_plm">${t.sol_plm}</a></li>
              <li><a href="${r}solutions/ai-solutions/index.html"          class="dropdown-item" role="menuitem" data-key="sol_ai">${t.sol_ai}</a></li>
              <li><a href="#"                                              class="dropdown-item" role="menuitem" data-key="sol_intl">${t.sol_intl}</a></li>
            </ul>
          </li>

          <!-- PRODUCTS -->
          <li class="nav-item" role="none">
            <a href="${r}products/index.html" class="nav-link" role="menuitem" data-key="nav_products">${t.nav_products}</a>
          </li>

          <!-- PARTNERSHIPS -->
          <li class="nav-item" role="none">
            <a href="${r}partners/index.html" class="nav-link" role="menuitem" data-key="nav_partners">${t.nav_partners}</a>
          </li>

          <!-- COMPANY -->
          <li class="nav-item" role="none">
            <span class="nav-link" role="menuitem" aria-haspopup="true" data-key="nav_company">
              ${t.nav_company} ${chevron}
            </span>
            <ul class="dropdown" role="menu">
              <li><a href="${r}company/about/index.html"           class="dropdown-item" role="menuitem" data-key="comp_about">${t.comp_about}</a></li>
              <li><a href="${r}company/values/index.html"          class="dropdown-item" role="menuitem" data-key="comp_values">${t.comp_values}</a></li>
              <li><a href="${r}company/global-presence/index.html" class="dropdown-item" role="menuitem" data-key="comp_global">${t.comp_global}</a></li>
            </ul>
          </li>

          <!-- RESOURCES -->
          <li class="nav-item" role="none">
            <span class="nav-link" role="menuitem" aria-haspopup="true" data-key="nav_resources">
              ${t.nav_resources} ${chevron}
            </span>
            <ul class="dropdown" role="menu">
              <li><a href="${r}resources/news/index.html"    class="dropdown-item" role="menuitem" data-key="res_news">${t.res_news}</a></li>
              <li><a href="${r}resources/events/index.html"  class="dropdown-item" role="menuitem" data-key="res_events">${t.res_events}</a></li>
              <li><a href="${r}resources/library/index.html" class="dropdown-item" role="menuitem" data-key="res_library">${t.res_library}</a></li>
            </ul>
          </li>

          <!-- CONTACT -->
          <li class="nav-item" role="none">
            <a href="${r}contact/index.html" class="nav-link nav-link-cta" role="menuitem" data-key="nav_contact">${t.nav_contact}</a>
          </li>

        </ul>

        <!-- Hamburger -->
        <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>`;
  }

  /* ---------- Build Footer HTML ---------- */
  function buildFooter() {
    const r = rootPath();
    const t = LANGS[currentLang];

    const linkedinIcon = `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="8" y1="10" x2="8" y2="17"/><line x1="8" y1="7" x2="8" y2="7.5"/><path d="M12 10v7M12 13a3 3 0 0 1 6 0v4"/></svg>`;

    return `
    <footer id="footer" role="contentinfo">

      <!-- ROW 1 — Four-column layout -->
      <div class="footer-row1">
        <div class="footer-row1-inner">

          <!-- Column 1: Brand -->
          <div class="footer-col footer-col-brand">
            <a href="${r}index.html" class="footer-logo" aria-label="SolverStation">
              <span class="footer-logo-text">Solver<span>Station</span></span>
            </a>
            <p class="footer-brand-desc"
               data-en="A next gen Engineering and Computing company dedicated to providing solutions for organisations."
               data-hr="Inženjerska i računarska tvrtka nove generacije posvećena pružanju rješenja za organizacije.">
              A next gen Engineering and Computing company dedicated to providing solutions for organisations.
            </p>
            <a href="https://www.linkedin.com/company/solverstation/" target="_blank" rel="noopener noreferrer" class="footer-social-icon footer-social-icon--active" title="LinkedIn" aria-label="LinkedIn">${linkedinIcon}</a>
          </div>

          <!-- Column 2: Company -->
          <div class="footer-col">
            <h4 class="footer-col-heading"
                data-en="Company" data-hr="Tvrtka">Company</h4>
            <ul class="footer-links">
              <li><a href="${r}company/about/index.html"           data-en="About Us"        data-hr="O nama">About Us</a></li>
              <li><a href="${r}company/values/index.html"          data-en="Our Values"      data-hr="Naše vrijednosti">Our Values</a></li>
              <li><a href="${r}company/global-presence/index.html" data-en="Global Network"  data-hr="Globalna mreža">Global Network</a></li>
            </ul>
          </div>

          <!-- Column 3: Contact Us -->
          <div class="footer-col">
            <h4 class="footer-col-heading"
                data-en="Contact Us" data-hr="Kontaktirajte nas">Contact Us</h4>
            <ul class="footer-links">
              <li>
                <a href="mailto:solver.ai.solutions@gmail.com">
                  <svg class="footer-link-icon" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  solver.ai.solutions@gmail.com
                </a>
              </li>
              <li>
                <a href="${r}contact/index.html" data-en="Contact Form" data-hr="Kontakt obrazac">Contact Form</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- ROW 2 — Bottom bar -->
      <div class="footer-row2">
        <div class="footer-row2-inner">

          <!-- Logo + copyright -->
          <div class="footer-bottom-left">
            <a href="${r}index.html" class="footer-logo footer-logo--small" aria-label="SolverStation">
              <span class="footer-logo-text">Solver<span>Station</span></span>
            </a>
            <a href="mailto:solver.ai.solutions@gmail.com" class="footer-email">solver.ai.solutions@gmail.com</a>
            <span class="footer-location" data-key="footer_location">${t.footer_location}</span>
          </div>

          <div class="footer-bottom-right">
            <!-- Language Toggle -->
            <div class="lang-toggle-wrap" aria-label="Language selector">
              <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" onclick="SS.setLang('en')" aria-label="English">EN</button>
              <button class="lang-btn ${currentLang === 'hr' ? 'active' : ''}" onclick="SS.setLang('hr')" aria-label="Croatian">HR</button>
            </div>
          </div>

        </div>
        <div class="footer-copyright">
          <span>&copy; 2026 SolverStation. All rights reserved.</span>
        </div>
      </div>

    </footer>`;
  }

  /* ---------- Load images.js once ---------- */
  (function loadImages() {
    if (document.querySelector('script[src*="images.js"]')) return; // already loaded
    const r = rootPath();
    const s = document.createElement('script');
    s.src = r + 'js/images.js';
    document.head.appendChild(s);
  })();

  /* ---------- Inject Components ---------- */
  function inject() {
    const navHolder  = document.getElementById('navbar-placeholder');
    const footHolder = document.getElementById('footer-placeholder');
    if (navHolder)  navHolder.outerHTML  = buildNavbar();
    if (footHolder) footHolder.outerHTML = buildFooter();
    initNavbar();
    applyLang();
  }

  /* ---------- Navbar interactions ---------- */
  function initNavbar() {
    const hamburger = document.getElementById('nav-hamburger');
    const menu      = document.getElementById('nav-menu');
    if (!hamburger || !menu) return;

    hamburger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      hamburger.classList.toggle('active', open);
      hamburger.setAttribute('aria-expanded', open);
    });

    document.querySelectorAll('#nav-menu .nav-link[aria-haspopup]').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          const dropdown = link.nextElementSibling;
          if (dropdown) dropdown.classList.toggle('open');
        }
      });
    });

    document.addEventListener('click', e => {
      if (!document.getElementById('navbar').contains(e.target)) {
        menu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Apply translations ---------- */
  function applyLang() {
    const t = LANGS[currentLang];
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === currentLang);
    });
    document.documentElement.lang = currentLang === 'hr' ? 'hr' : 'en';
  }

  /* ---------- Public API ---------- */
  window.SS = {
    setLang(lang) {
      if (!LANGS[lang]) return;
      currentLang = lang;
      localStorage.setItem('ss_lang', lang);
      const nav  = document.getElementById('navbar');
      const foot = document.getElementById('footer');
      if (nav)  { const ph = document.createElement('div'); ph.id = 'navbar-placeholder';  nav.replaceWith(ph); }
      if (foot) { const ph = document.createElement('div'); ph.id = 'footer-placeholder'; foot.replaceWith(ph); }
      inject();
      applyPageLang(lang);
    },
    getLang() { return currentLang; }
  };

  /* ---------- Page-level translation ---------- */
  function applyPageLang(lang) {
    const t = lang === 'hr' ? 'hr' : 'en';
    document.querySelectorAll('[data-en]').forEach(el => {
      const txt = el.getAttribute('data-' + t);
      if (txt) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = txt;
        } else {
          el.innerHTML = txt;
        }
      }
    });
  }

  /* ---------- Init on DOM ready ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { inject(); applyPageLang(currentLang); });
  } else {
    inject();
    applyPageLang(currentLang);
  }

})();
