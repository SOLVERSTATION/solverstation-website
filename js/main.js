/* =============================================
   SOLVERSTATION — Main JS
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Smooth scroll offset for fixed navbar --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* --- Navbar scroll shadow --- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(0,0,0,0.10)'
        : '0 2px 12px rgba(0,0,0,0.06)';
    });
  }

  /* --- Contact form — Web3Forms (free email delivery) ---
     Steps to activate:
       1. Go to https://web3forms.com
       2. Enter solver.ai.solutions@gmail.com and click "Create Access Key"
       3. Check your Gmail inbox and copy the access key
       4. Replace YOUR_WEB3FORMS_ACCESS_KEY below with your key
   -------------------------------------------------------- */
  const WEB3FORMS_KEY = '30119c57-8f6e-46a1-8213-be1f974996af'; // ← paste your key here

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const btn    = contactForm.querySelector('button[type="submit"]');
      const origTxt = btn.textContent;

      // Collect checked interests
      const interests = [];
      contactForm.querySelectorAll('input[name="interest"]:checked').forEach(cb => {
        interests.push(cb.value);
      });

      const fd = new FormData(contactForm);

      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key:       WEB3FORMS_KEY,
            subject:          'New Enquiry — SolverStation',
            from_name:        (fd.get('firstName') || '') + ' ' + (fd.get('lastName') || ''),
            email:            fd.get('email'),
            organisation:     fd.get('organisation') || '—',
            message:          fd.get('message'),
            areas_of_interest: interests.length ? interests.join(', ') : '—',
          })
        });

        const json = await res.json();

        if (json.success) {
          btn.textContent    = '✓ Message sent!';
          btn.style.background = 'rgb(27,27,27)';
          contactForm.reset();
          setTimeout(() => {
            btn.textContent    = origTxt;
            btn.disabled       = false;
            btn.style.background = '';
          }, 4000);
        } else {
          throw new Error(json.message || 'Submission failed');
        }

      } catch (err) {
        console.error('Contact form error:', err);
        btn.textContent    = '✗ Failed — please try again';
        btn.style.background = '#c0392b';
        btn.disabled       = false;
        setTimeout(() => {
          btn.textContent    = origTxt;
          btn.style.background = '';
        }, 3500);
      }
    });
  }

  /* --- Fade-in on scroll --- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));
  }

});
