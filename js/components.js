/* =============================================
   SOLVERSTATION — Shared Components
   Navbar + Footer injected into every page
   ============================================= */

(function () {
  'use strict';

  /* ---------- Language ---------- */
  const LANGS = {
    en: {
      nav_home: 'HOME',
      nav_solutions: 'SOLUTIONS',
      nav_products: 'PRODUCTS',
      nav_partners: 'PARTNERS',
      nav_company: 'COMPANY',
      nav_resources: 'RESOURCES',
      nav_contact: 'CONTACT US',
      sol_mech: 'Mechanical Engineering & Naval Architecture',
      sol_rd: 'Research & Development',
      sol_maint: 'Maintenance & Asset Management',
      sol_plm: 'Project Life-Cycle Management & Coordination',
      sol_ai: 'AI Solutions & Prompt Engineering',
      sol_digital: 'Digital Solutions & Technologies',
      comp_about: 'About Us',
      comp_values: 'Our Values',
      comp_global: 'Global Presence',
      res_news: 'News',
      res_events: 'Events',
      res_library: 'Library',
      footer_location: 'Zagreb, Croatia',
    },
    hr: {
      nav_home: 'POČETNA',
      nav_solutions: 'RJEŠENJA',
      nav_products: 'PROIZVODI',
      nav_partners: 'PARTNERI',
      nav_company: 'TVRTKA',
      nav_contact: 'KONTAKTIRAJTE NAS',
      nav_resources: 'RESURSI',
      sol_mech: 'Strojarstvo i brodogradnja',
      sol_rd: 'Istraživanje i razvoj',
      sol_maint: 'Održavanje i upravljanje imovinom',
      sol_plm: 'Upravljanje projektnim životnim ciklusom i koordinacija',
      sol_ai: 'AI rješenja i prompt inženjering',
      sol_digital: 'Digitalna rješenja i tehnologije',
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

  /* ---------- Resolve root path ---------- */
  function rootPath() {
    const parts = window.location.pathname
      .replace(/\/+$/, '')   // strip trailing slashes
      .split('/').filter(Boolean);
    return parts.length === 0 ? './' : '../'.repeat(parts.length);
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

          <!-- HOME -->
          <li class="nav-item" role="none">
            <a href="${r}index.html" class="nav-link" role="menuitem" data-key="nav_home">${t.nav_home}</a>
          </li>

          <!-- SOLUTIONS -->
          <li class="nav-item" role="none">
            <span class="nav-link" role="menuitem" aria-haspopup="true" data-key="nav_solutions">
              ${t.nav_solutions} ${chevron}
            </span>
            <ul class="dropdown" role="menu">
              <li><a href="${r}solutions/mech-eng-naval"        class="dropdown-item" role="menuitem" data-key="sol_mech">${t.sol_mech}</a></li>
              <li><a href="${r}solutions/research-development"  class="dropdown-item" role="menuitem" data-key="sol_rd">${t.sol_rd}</a></li>
              <li><a href="${r}solutions/maintenance-asset"     class="dropdown-item" role="menuitem" data-key="sol_maint">${t.sol_maint}</a></li>
              <li><a href="${r}solutions/project-lifecycle"     class="dropdown-item" role="menuitem" data-key="sol_plm">${t.sol_plm}</a></li>
              <li><a href="${r}solutions/ai-solutions"          class="dropdown-item" role="menuitem" data-key="sol_ai">${t.sol_ai}</a></li>
              <li><a href="${r}solutions/digital-solutions"     class="dropdown-item" role="menuitem" data-key="sol_digital">${t.sol_digital}</a></li>
            </ul>
          </li>

          <!-- PRODUCTS -->
          <li class="nav-item" role="none">
            <a href="${r}products" class="nav-link" role="menuitem" data-key="nav_products">${t.nav_products}</a>
          </li>

          <!-- PARTNERS -->
          <li class="nav-item" role="none">
            <a href="${r}partners" class="nav-link" role="menuitem" data-key="nav_partners">${t.nav_partners}</a>
          </li>

          <!-- COMPANY -->
          <li class="nav-item" role="none">
            <span class="nav-link" role="menuitem" aria-haspopup="true" data-key="nav_company">
              ${t.nav_company} ${chevron}
            </span>
            <ul class="dropdown" role="menu">
              <li><a href="${r}company/about"           class="dropdown-item" role="menuitem" data-key="comp_about">${t.comp_about}</a></li>
              <li><a href="${r}company/values"          class="dropdown-item" role="menuitem" data-key="comp_values">${t.comp_values}</a></li>
              <li><a href="${r}company/global-presence" class="dropdown-item" role="menuitem" data-key="comp_global">${t.comp_global}</a></li>
            </ul>
          </li>

          <!-- RESOURCES -->
          <li class="nav-item" role="none">
            <span class="nav-link" role="menuitem" aria-haspopup="true" data-key="nav_resources">
              ${t.nav_resources} ${chevron}
            </span>
            <ul class="dropdown" role="menu">
              <li><a href="${r}resources/news"    class="dropdown-item" role="menuitem" data-key="res_news">${t.res_news}</a></li>
              <li><a href="${r}resources/events"  class="dropdown-item" role="menuitem" data-key="res_events">${t.res_events}</a></li>
              <li><a href="${r}resources/library" class="dropdown-item" role="menuitem" data-key="res_library">${t.res_library}</a></li>
            </ul>
          </li>

          <!-- CONTACT -->
          <li class="nav-item" role="none">
            <a href="${r}contact" class="nav-link nav-link-cta" role="menuitem" data-key="nav_contact">${t.nav_contact}</a>
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

    const socialIcons = {
      linkedin:  `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="8" y1="10" x2="8" y2="17"/><line x1="8" y1="7" x2="8" y2="7.5"/><path d="M12 10v7M12 13a3 3 0 0 1 6 0v4"/></svg>`,
      twitter:   `<svg viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.3 9 4-.9-4.2 4-6.5 6-3.7 1.1.2 2-.7 4-1.3z"/></svg>`,
      facebook:  `<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
      instagram: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>`,
    };

    return `
    <footer id="footer" role="contentinfo">

      <!-- Bottom bar (single row) -->
      <div class="footer-row2">
        <div class="footer-row2-inner">

          <!-- Logo -->
          <a href="${r}index.html" class="footer-logo" aria-label="SolverStation">
            <span class="footer-logo-text">Solver<span>Station</span></span>
          </a>

          <!-- Email -->
          <a href="mailto:solver.ai.solutions@gmail.com" class="footer-email">
            <svg viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            solver.ai.solutions@gmail.com
          </a>

          <!-- Social (inactive) -->
          <div class="footer-social" aria-label="Social media (coming soon)">
            <div class="footer-social-icon" title="LinkedIn (coming soon)">${socialIcons.linkedin}</div>
            <div class="footer-social-icon" title="Twitter (coming soon)">${socialIcons.twitter}</div>
            <div class="footer-social-icon" title="Facebook (coming soon)">${socialIcons.facebook}</div>
            <div class="footer-social-icon" title="Instagram (coming soon)">${socialIcons.instagram}</div>
          </div>

          <!-- Location (footer only) -->
          <span class="footer-location" data-key="footer_location">${t.footer_location}</span>

          <!-- Language Toggle -->
          <div class="lang-toggle-wrap" aria-label="Language selector">
            <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" onclick="SS.setLang('en')" aria-label="English">EN</button>
            <button class="lang-btn ${currentLang === 'hr' ? 'active' : ''}" onclick="SS.setLang('hr')" aria-label="Croatian">HR</button>
          </div>

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
