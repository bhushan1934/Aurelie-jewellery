# Aurélie — Next.js (frontend-only)

A faithful Next.js (App Router) port of the original static Aurélie / Shail
jewellery site. **The design and content are unchanged** — each route renders
the original page's exact markup, styles and scripts.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Routes

| Route        | Original file   |
| ------------ | --------------- |
| `/`          | `Shail.html`    |
| `/shop`      | `shop.html`     |
| `/product`   | `product.html`  |
| `/about`     | `about.html`    |
| `/contact`   | `contact.html`  |
| `/journal`   | `journal.html`  |
| `/article`   | `article.html`  |
| `/cart`      | `cart.html`     |
| `/checkout`  | `checkout.html` |
| `/account`   | `account.html`  |
| `/login`     | `login.html`    |
| `/wishlist`  | `wishlist.html` |
| `/faq`       | `faq.html`      |
| `/privacy`   | `privacy.html`  |
| `/terms`     | `terms.html`    |

The original links point to `*.html` filenames (e.g. `shop.html`). Those are
left untouched in the content and mapped to the routes above via
`rewrites()` in `next.config.js`, so every existing link keeps working.

## How it works

- `scripts/generate.mjs` reads the original `.html` files (in the parent
  folder) and writes one `content/<page>.json` per page, splitting each page
  into its markup (head styles/links + body) and an ordered list of its
  scripts. Re-run with `npm run gen` if the originals change.
- `components/RawPage.jsx` injects the markup as-is, then runs the page's
  scripts in their original order (external scripts awaited so dependencies
  like GSAP load before `aurelie-gsap.js`).
- Static assets live in `public/assets` and `public/uploads`.

## Notes

- Frontend only — no backend / no data layer. The `.php` originals were not
  ported.
- Draft/alternate originals (`* v1.html`, `Shail v4.html`, the standalone
  product pages, `cart-popup-demo.html`) were left out since nothing links to
  them; re-add a row to `PAGES` in `scripts/generate.mjs` and a route folder
  to include any of them.
