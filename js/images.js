/* ================================================================
   SOLVERSTATION — Image Placeholder Configuration
   ================================================================

   HOW TO USE:
   -----------
   1. Add your image files anywhere inside the website folder
      (recommended: create an  images/  subfolder)

   2. Fill in the file paths below (relative to the website root).
      Examples:
        'images/hero-bg.jpg'
        'images/partners/kera-dekor-logo.png'
        'images/solutions/mech-hero.webp'

   3. Save this file — images will appear automatically on every page.

   HOW IT WORKS:
   -------------
   Elements with  data-img="key"      get their <img src> set.
   Elements with  data-img-bg="key"   get a CSS background-image set.
   If a value is left empty (''), the placeholder is hidden silently.

   ================================================================ */

const SS_IMAGES = {

  /* ── Homepage ──────────────────────────────────────────────── */
  hero_background:        '',   // Hero section right-side background or overlay
  about_illustration:     'images/visual-digital.jpg',   // "About" strip — illustration or office photo
  partners_logo_kera:     '',   // Active partner: Kera-Dekor logo
  partners_logo_atlantis: '',   // Active partner: Atlantis Engineering logo

  /* ── Solutions pages ───────────────────────────────────────── */
  sol_mech_hero:          '',   // Mechanical Engineering & Naval Architecture — page hero image
  sol_rd_hero:            '',   // Research & Development — page hero image
  sol_maintenance_hero:   '',   // Maintenance & Asset Management — page hero image
  sol_plm_hero:           '',   // Project Life-Cycle Management — page hero image
  sol_ai_hero:            '',   // AI Solutions & Prompt Engineering — page hero image
  sol_digital_hero:       '',   // Digital Solutions & Technologies — page hero image

  sol_mech_overview:      '',   // Mechanical Engineering — overview section illustration
  sol_rd_overview:        '',   // R&D — overview section illustration
  sol_ai_overview:        '',   // AI Solutions — overview section illustration

  /* ── Company pages ─────────────────────────────────────────── */
  about_hero:             '',   // About Us — page hero image
  about_team:             '',   // About Us — team photo
  about_office:           '',   // About Us — office / location photo
  values_illustration:    '',   // Our Values — illustration
  global_map:             '',   // Global Presence — map or illustration

  /* ── Products page ─────────────────────────────────────────── */
  products_hero:          '',   // Products — page hero image
  products_illustration:  '',   // Products — main illustration

  /* ── Partners page ─────────────────────────────────────────── */
  partners_hero:          '',   // Partners — page hero image

  /* ── Contact page ──────────────────────────────────────────── */
  contact_illustration:   '',   // Contact — side illustration

  /* ── Shared / misc ─────────────────────────────────────────── */
  og_image:               '',   // Open Graph / social sharing preview image (1200×630 px)
  favicon:                '',   // Favicon path  (also update <link rel="icon"> in each page head)
};

/* ── Auto-apply on DOM ready ──────────────────────────────────── */
(function () {
  function applyImages() {
    /* <img data-img="key"> — sets src directly */
    document.querySelectorAll('img[data-img]').forEach(function (el) {
      var key = el.getAttribute('data-img');
      var src = SS_IMAGES[key];
      if (src) {
        el.src = src;
        el.removeAttribute('hidden');
        el.style.display = '';
      } else {
        el.style.display = 'none'; // hide if no image provided yet
      }
    });

    /* <element data-img-bg="key"> — sets CSS background-image */
    document.querySelectorAll('[data-img-bg]').forEach(function (el) {
      var key = el.getAttribute('data-img-bg');
      var src = SS_IMAGES[key];
      if (src) {
        el.style.backgroundImage    = 'url("' + src + '")';
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
