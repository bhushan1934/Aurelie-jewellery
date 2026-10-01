/* Aurélie — shared GSAP animation layer */
(function () {
  if (!window.gsap || !window.ScrollTrigger) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  // --- Take over .reveal elements from the CSS/IO system ---
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  reveals.forEach(function (el) {
    el.classList.add('in');            // neutralise CSS transition state
    el.style.transition = 'none';
  });
  ScrollTrigger.batch(reveals, {
    start: 'top 88%',
    once: true,
    onEnter: function (batch) {
      gsap.from(batch, { opacity: 0, y: 42, duration: 1.05, stagger: 0.09, ease: 'power3.out', clearProps: 'opacity,transform' });
    }
  });
  // Elements already in view on load
  gsap.from(reveals.filter(function (el) {
    var r = el.getBoundingClientRect();
    return r.top < window.innerHeight * 0.9 && r.bottom > 0;
  }), { opacity: 0, y: 30, duration: 0.9, stagger: 0.08, ease: 'power3.out', clearProps: 'opacity,transform' });

  // --- Full-bleed banner heroes: cinematic settle + scrubbed parallax ---
  document.querySelectorAll('.contact-hero, .j-hero, .about-hero, .page-hero, .shop-hero').forEach(function (hero) {
    var img = hero.querySelector('img');
    if (img) {
      gsap.from(img, { scale: 1.1, duration: 2.2, ease: 'power2.out' });
      gsap.to(img, { yPercent: 14, ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    }
    var inner = hero.querySelector('.inner');
    if (inner) gsap.from(inner.children, { opacity: 0, y: 28, duration: 1.1, stagger: 0.14, delay: 0.2, ease: 'power3.out' });
  });

  // --- Page-hero / masthead blocks: staggered fade-up on load ---
  document.querySelectorAll('.page-hero, .legal-hero, .acct-hero, .a-head, .faq-hero, .j-top').forEach(function (head) {
    gsap.from(head.children, { opacity: 0, y: 26, duration: 1, stagger: 0.12, delay: 0.15, ease: 'power3.out', clearProps: 'opacity,transform' });
  });

  // --- Article: cover parallax, body flow, pull quote ---
  var cover = document.querySelector('.a-cover img');
  if (cover) {
    gsap.from('.a-cover', { opacity: 0, y: 40, duration: 1.2, delay: 0.3, ease: 'power3.out', clearProps: 'opacity,transform' });
    gsap.fromTo(cover, { yPercent: -8, scale: 1.08 }, { yPercent: 8, scale: 1.08, ease: 'none',
      scrollTrigger: { trigger: '.a-cover', start: 'top bottom', end: 'bottom top', scrub: true } });
  }
  var aBody = document.querySelector('.a-body');
  if (aBody) ScrollTrigger.batch(aBody.children, {
    start: 'top 90%', once: true,
    onEnter: function (b) { gsap.from(b, { opacity: 0, y: 30, duration: 0.9, stagger: 0.1, ease: 'power3.out', clearProps: 'opacity,transform' }); }
  });
  var aq = document.querySelector('.a-quote');
  if (aq) gsap.from(aq, { x: -28, duration: 1.1, ease: 'power3.out', clearProps: 'transform',
    scrollTrigger: { trigger: aq, start: 'top 85%' } });

  // --- Legal pages: body sections drift up ---
  var legal = document.querySelector('.legal-body');
  if (legal) ScrollTrigger.batch(legal.children, {
    start: 'top 92%', once: true,
    onEnter: function (b) { gsap.from(b, { opacity: 0, y: 24, duration: 0.8, stagger: 0.08, ease: 'power2.out', clearProps: 'opacity,transform' }); }
  });

  // --- Two-column layouts (cart, checkout, account, product): columns slide in ---
  document.querySelectorAll('.cart-layout, .co-layout, .acct-layout, .pdp').forEach(function (lay) {
    var kids = Array.prototype.slice.call(lay.children);
    if (kids.length < 2) return;
    gsap.from(kids[0], { opacity: 0, x: -34, duration: 1.05, delay: 0.15, ease: 'power3.out', clearProps: 'opacity,transform' });
    gsap.from(kids.slice(1), { opacity: 0, x: 34, duration: 1.05, delay: 0.3, ease: 'power3.out', clearProps: 'opacity,transform' });
  });

  // --- Generic card families: batch fade-up (skip ones already .reveal) ---
  var cardSel = ['.product', '.collection-card', '.social-tile', '.assurance-cell', '.quote',
                 '.cat-tile', '.j-card', '.n-card', '.qa', '.visit-block', '.acc-card',
                 '.cart-item', '.co-block', '.order-card', '.faq-group', '.m-field', '.map-card',
                 '.drawer-card', '.thumbs img'];
  var cards = Array.prototype.slice.call(document.querySelectorAll(cardSel.join(','))).filter(function (el) {
    return !el.classList.contains('reveal') && !el.closest('.reveal');
  });
  if (cards.length) {
    gsap.set(cards, { opacity: 0, y: 36 });
    ScrollTrigger.batch(cards, {
      start: 'top 90%',
      once: true,
      onEnter: function (batch) {
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.95, stagger: 0.07, ease: 'power3.out', clearProps: 'opacity,transform' });
      }
    });
    ScrollTrigger.refresh();
    // safety: anything never triggered (e.g. filtered/hidden) becomes visible
    setTimeout(function () { gsap.set(cards, { clearProps: 'opacity,transform' }); }, 4000);
  }
})();
