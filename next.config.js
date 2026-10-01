/** @type {import('next').NextConfig} */

// The original markup links to pages by their .html filenames
// (e.g. href="shop.html", href="Shail.html"). Rather than editing the
// content, we rewrite those URLs to the matching Next.js routes so every
// existing link keeps working unchanged.
const htmlToRoute = {
  'Shail.html': '/',
  'shop.html': '/shop',
  'product.html': '/product',
  'about.html': '/about',
  'contact.html': '/contact',
  'journal.html': '/journal',
  'article.html': '/article',
  'cart.html': '/cart',
  'checkout.html': '/checkout',
  'account.html': '/account',
  'login.html': '/login',
  'wishlist.html': '/wishlist',
  'faq.html': '/faq',
  'privacy.html': '/privacy',
  'terms.html': '/terms',
};

const nextConfig = {
  reactStrictMode: false, // avoid double-invoking the one-time script runner in dev
  async rewrites() {
    return Object.entries(htmlToRoute).map(([file, route]) => ({
      source: '/' + file,
      destination: route,
    }));
  },
};

module.exports = nextConfig;
