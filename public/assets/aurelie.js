/* ============================================================
   Aurélie — shared chrome (nav + full-screen menu + footer)
   Include with:  <script src="assets/aurelie.js" defer></script>
   Placeholders:  <div id="site-nav"></div> … <div id="site-footer"></div>
   ============================================================ */
(function () {
  var NAV_HTML = `
<nav class="nav" id="nav">
  <div class="nav-left-slot">
    <button class="icon-btn nav-hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
      <span class="bars"><span></span></span>
    </button>
  </div>
  <a class="wordmark" href="Shail.html">Aurélie</a>
  <div class="nav-actions">
    <button class="icon-btn" aria-label="Search">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
    </button>
    <a class="icon-btn" href="wishlist.html" aria-label="Wishlist">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/></svg>
    </a>
    <a class="icon-btn bag-dot" href="cart.html" aria-label="Bag">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 7h12l-1 13H7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
      <span class="num">2</span>
    </a>
    <a class="icon-btn" href="account.html" aria-label="Account">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
    </a>
  </div>
</nav>

<div class="mega-backdrop" id="mega-backdrop"></div>
<aside class="drawer" id="drawer" aria-hidden="true">
  <div class="drawer-head">
    <span class="left">Atelier · Jaipur</span>
    <span class="wordmark">Aurélie</span>
    <span class="right"><button class="drawer-close" id="drawer-close" aria-label="Close menu">×</button></span>
  </div>
  <div class="drawer-body">
    <div class="drawer-col">
      <h6>Browse</h6>
      <ul class="primary">
        <li><a href="Shail.html">Home</a></li>
        <li><a href="shop.html">Shop <em>everything</em></a></li>
        <li><a href="shop.html">New arrivals <small>New</small></a></li>
        <li><a href="#">Bridal &amp; wedding</a></li>
        <li><a href="about.html"><em>Atelier</em> stories</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="drawer-col">
      <h6>Shop by Category</h6>
      <ul class="sub">
        <li><a href="shop.html">Earrings</a></li>
        <li><a href="shop.html">Necklaces &amp; pendants</a></li>
        <li><a href="shop.html">Rings</a></li>
        <li><a href="shop.html">Bangles &amp; bracelets</a></li>
        <li><a href="shop.html">Anklets &amp; payals</a></li>
        <li><a href="shop.html">Mangalsutra</a></li>
        <li><a href="shop.html">Nose pins &amp; nath</a></li>
        <li><a href="shop.html">Gifting</a></li>
      </ul>
      <h6 style="margin-top: 40px;">By Metal</h6>
      <ul class="sub">
        <li><a href="shop.html">22k solid gold</a></li>
        <li><a href="shop.html">18k gold</a></li>
        <li><a href="shop.html">Platinum</a></li>
        <li><a href="shop.html">Diamond &amp; precious stones</a></li>
        <li><a href="shop.html">Polki &amp; kundan</a></li>
        <li><a href="shop.html">Pearl &amp; moti</a></li>
      </ul>
    </div>
    <div class="drawer-col">
      <h6>Collections</h6>
      <ul class="sub">
        <li><a href="shop.html">Solène</a></li>
        <li><a href="shop.html">Quiet Gold</a></li>
        <li><a href="shop.html">Lumière</a></li>
        <li><a href="shop.html">Maharani Heirloom</a></li>
        <li><a href="shop.html">Céleste</a></li>
        <li><a href="shop.html">Festive Edit MMXXVI</a></li>
      </ul>
      <h6 style="margin-top: 40px;">Care</h6>
      <ul class="sub">
        <li><a href="account.html">Track your order</a></li>
        <li><a href="faq.html">Returns &amp; exchanges</a></li>
        <li><a href="faq.html">Lifetime polishing service</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="contact.html">Speak to the atelier</a></li>
      </ul>
    </div>
    <div class="drawer-col">
      <h6>This Season</h6>
      <div class="drawer-featured">
        <a class="drawer-card" href="product.html">
          <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=900&h=675&fit=crop&auto=format&q=80" alt="Solène drop earrings" />
          <div class="ov"><div class="label">N° 01 · New</div><div class="name">Solène <em>Drops</em></div></div>
        </a>
        <a class="drawer-card" href="shop.html">
          <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&h=675&fit=crop&auto=format&q=80" alt="Bridal Solène" />
          <div class="ov"><div class="label">Bridal</div><div class="name">Solène <em>Bridal</em></div></div>
        </a>
      </div>
    </div>
  </div>
  <div class="drawer-foot">
    <div class="pills">
      <span>BIS Hallmark</span><span>Lifetime Service</span><span>15-Day Returns</span><span>Free Insured Shipping</span>
    </div>
    <div class="contact"><b>care@aurelie.com</b> · +91 141 000 0000</div>
    <div class="social"><a href="#">Instagram</a><a href="#">Pinterest</a><a href="journal.html">Journal</a></div>
  </div>
</aside>`;

  var FOOTER_HTML = `
<footer class="site">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <a class="foot-wordmark" href="Shail.html">Aurélie</a>
        <p>Hand-crafted fine jewellery from Jaipur to the world. Quietly luxurious, made to be worn.</p>
        <div class="foot-badges">
          <span class="b">BIS Hallmark</span><span class="b">SGL Certified</span><span class="b">Responsible Jewellery Council</span>
        </div>
      </div>
      <div>
        <h5>Shop</h5>
        <ul>
          <li><a href="shop.html">New Arrivals</a></li>
          <li><a href="shop.html">Earrings</a></li>
          <li><a href="shop.html">Necklaces</a></li>
          <li><a href="shop.html">Rings</a></li>
          <li><a href="shop.html">Bridal</a></li>
        </ul>
      </div>
      <div>
        <h5>Care</h5>
        <ul>
          <li><a href="account.html">Order Tracking</a></li>
          <li><a href="faq.html">Returns &amp; Exchanges</a></li>
          <li><a href="faq.html">Lifetime Service</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h5>Atelier</h5>
        <ul>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="about.html">Craftsmanship</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div>
        <h5>Visit</h5>
        <p>Aurélie Atelier<br />Civil Lines, Jaipur<br />Open by appointment</p>
        <p style="margin-top: 14px;">care@aurelie.com<br />+91 141 000 0000</p>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 Aurélie Fine Jewellery</span>
      <div class="links">
        <a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="#">Cookies</a><a href="#">Instagram</a><a href="#">Pinterest</a>
      </div>
    </div>
  </div>
</footer>`;

  function mount() {
    var navSlot = document.getElementById('site-nav');
    var footSlot = document.getElementById('site-footer');
    if (navSlot) navSlot.outerHTML = NAV_HTML;
    if (footSlot) footSlot.outerHTML = FOOTER_HTML;

    // Nav scroll state
    var nav = document.getElementById('nav');
    if (nav) {
      var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 40); };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Full-screen menu
    var ham = document.getElementById('hamburger');
    var drawer = document.getElementById('drawer');
    var closeBtn = document.getElementById('drawer-close');
    var backdrop = document.getElementById('mega-backdrop');
    if (ham && drawer) {
      var open = function () {
        drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false');
        ham.classList.add('open'); ham.setAttribute('aria-expanded', 'true');
        backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      };
      var close = function () {
        drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true');
        ham.classList.remove('open'); ham.setAttribute('aria-expanded', 'false');
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
      };
      ham.addEventListener('click', function () { drawer.classList.contains('open') ? close() : open(); });
      closeBtn.addEventListener('click', close);
      backdrop.addEventListener('click', close);
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('open')) close();
      });
    }

    // Reveal on view
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    requestAnimationFrame(function () {
      document.querySelectorAll('.reveal').forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
      });
    });

    mountToasts();
  }

  /* ============================================================
     ADD-TO-CART / WISHLIST CONFIRMATION POPUP
     Public API:
       Aurelie.toast({ type:'cart'|'wishlist', name, meta, price, img, qty })
     Auto-wires any element with:
       data-toast="cart|wishlist"
       data-name / data-meta / data-price / data-img  (optional)
     ============================================================ */
  function mountToasts() {
    if (document.getElementById('toast-stack')) return;
    var stack = document.createElement('div');
    stack.id = 'toast-stack';
    stack.className = 'toast-stack';
    document.body.appendChild(stack);

    function icon(type) {
      return type === 'wishlist'
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>';
    }

    window.Aurelie = window.Aurelie || {};
    window.Aurelie.toast = function (opts) {
      opts = opts || {};
      var type = opts.type === 'wishlist' ? 'wishlist' : 'cart';
      var heading = type === 'wishlist' ? 'Saved to wishlist' : 'Added to your bag';
      var cta = type === 'wishlist'
        ? '<a class="t-btn ghost" href="wishlist.html">View wishlist</a>'
        : '<a class="t-btn ghost" href="cart.html">View bag</a><a class="t-btn solid" href="checkout.html">Checkout</a>';

      var el = document.createElement('div');
      el.className = 'toast toast--' + type;
      el.innerHTML =
        '<button class="t-close" aria-label="Dismiss">&times;</button>' +
        '<div class="t-top">' +
          '<span class="t-ico">' + icon(type) + '</span>' +
          '<span class="t-head">' + heading + '</span>' +
        '</div>' +
        '<div class="t-body">' +
          (opts.img ? '<span class="t-thumb"><img src="' + opts.img + '" alt="" /></span>' : '') +
          '<span class="t-meta">' +
            '<span class="t-name">' + (opts.name || 'Your item') + '</span>' +
            (opts.meta ? '<span class="t-sub">' + opts.meta + '</span>' : '') +
            (opts.price ? '<span class="t-price">' + opts.price + (opts.qty && opts.qty > 1 ? ' · Qty ' + opts.qty : '') + '</span>' : '') +
          '</span>' +
        '</div>' +
        '<div class="t-actions">' + cta + '</div>' +
        '<span class="t-bar"></span>';

      stack.appendChild(el);
      requestAnimationFrame(function () { el.classList.add('in'); });

      var timer = setTimeout(dismiss, 4200);
      function dismiss() {
        clearTimeout(timer);
        el.classList.remove('in');
        el.classList.add('out');
        setTimeout(function () { el.remove(); }, 500);
      }
      el.querySelector('.t-close').addEventListener('click', dismiss);
      el.addEventListener('mouseenter', function () { clearTimeout(timer); el.querySelector('.t-bar').style.animationPlayState = 'paused'; });
      el.addEventListener('mouseleave', function () { timer = setTimeout(dismiss, 2200); el.querySelector('.t-bar').style.animationPlayState = 'running'; });
      return el;
    };

    // Auto-wire declarative triggers
    document.addEventListener('click', function (e) {
      var t = e.target.closest('[data-toast]');
      if (!t) return;
      if (t.tagName === 'A' && !t.getAttribute('href')) e.preventDefault();
      window.Aurelie.toast({
        type: t.getAttribute('data-toast'),
        name: t.getAttribute('data-name'),
        meta: t.getAttribute('data-meta'),
        price: t.getAttribute('data-price'),
        img: t.getAttribute('data-img'),
        qty: parseInt(t.getAttribute('data-qty') || '1', 10)
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
