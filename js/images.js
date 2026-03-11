/* ================================================================
   SOLVERSTATION — Image Configuration
   ================================================================

   Paths are relative to the WEBSITE ROOT.
   images.js auto-resolves the root via components.js rootPath().

   ================================================================ */

const SS_IMAGES = {

  /* ── Homepage ──────────────────────────────────────────────── */
  hero_background:        '',
  about_illustration:     'images/image-design-engineering.jpg',
  partners_logo_kera:     '',
  partners_logo_atlantis: '',

  /* ── Solutions pages ───────────────────────────────────────── */
  sol_mech_hero:          'images/image-design-engineering.jpg',
  sol_rd_hero:            'images/image-research.jpg',
  sol_maintenance_hero:   'images/image-development.jpg',
  sol_plm_hero:           'images/visual-network.jpg',
  sol_ai_hero:            'images/image-digital-hand.jpg',
  sol_digital_hero:       'images/image-digital.jpg',

  sol_mech_overview:      'images/image-design-engineering.jpg',
  sol_rd_overview:        'images/image-research2.jpg',
  sol_ai_overview:        'images/visual-digital-dna.jpg',

  /* ── Company pages ─────────────────────────────────────────── */
  about_hero:             'images/image-design-engineering.jpg',
  about_team:             'images/visax-8oni9vTWj7U-unsplash.jpg',
  about_office:           'images/image-blue-colors.jpg',
  values_illustration:    'images/visual-digital-dna.jpg',
  global_map:             'images/image-network-partnerships.jpg',

  /* ── Products page ─────────────────────────────────────────── */
  products_hero:          'images/image-development.jpg',
  products_illustration:  'images/image-digital.jpg',

  /* ── Partners page ─────────────────────────────────────────── */
  partners_hero:          'images/image-network-partnerships.jpg',

  /* ── Contact page ──────────────────────────────────────────── */
  contact_illustration:   'images/visual-network.jpg',

  /* ── Shared / misc ─────────────────────────────────────────── */
  og_image:               '',
  favicon:                '',
};

/* ── Auto-apply on DOM ready ──────────────────────────────────── */
(function () {
  /* Resolve the root path — mirrors components.js logic exactly */
  function rootPath() {
    var p = window.location.pathname;
    if (/\/(solutions|company|resources)\/[^/]/.test(p)) { return '../../'; }
    if (/\/(partners|contact|products)(\/|\/index\.html|$)/.test(p)) { return '../'; }
    return './';
  }

  function applyImages() {
    var r = rootPath();

    /* <img data-img="key"> — sets src directly */
    document.querySelectorAll('img[data-img]').forEach(function (el) {
      var key = el.getAttribute('data-img');
      var src = SS_IMAGES[key];
      if (src) {
        el.src = r + src;
        el.removeAttribute('hidden');
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });

    /* <element data-img-bg="key"> — sets CSS background-image */
    document.querySelectorAll('[data-img-bg]').forEach(function (el) {
      var key = el.getAttribute('data-img-bg');
      var src = SS_IMAGES[key];
      if (src) {
        el.style.backgroundImage    = 'url("' + r + src + '")';
        el.style.backgroundSize     = 'cover';
        el.style.backgroundPosition = 'center';
        el.style.backgroundRepeat   = 'no-repeat';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyImages);
  } else {
    applyImages();
  }
})();
