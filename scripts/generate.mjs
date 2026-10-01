// Faithful HTML -> content JSON generator.
// Extracts each page's head styles/links + body markup (scripts pulled out
// into an ordered list) so the Next.js app can reproduce the original pages
// byte-for-byte in markup while running their scripts in document order.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.resolve(ROOT, '..'); // original project dir with the .html files
const OUT = path.join(ROOT, 'content');

// source file -> output slug (route)
const PAGES = [
  ['Shail.html', 'home'],
  ['shop.html', 'shop'],
  ['product.html', 'product'],
  ['about.html', 'about'],
  ['contact.html', 'contact'],
  ['journal.html', 'journal'],
  ['article.html', 'article'],
  ['cart.html', 'cart'],
  ['checkout.html', 'checkout'],
  ['account.html', 'account'],
  ['login.html', 'login'],
  ['wishlist.html', 'wishlist'],
  ['faq.html', 'faq'],
  ['privacy.html', 'privacy'],
  ['terms.html', 'terms'],
];

function between(str, openRe, closeStr) {
  const openMatch = str.match(openRe);
  if (!openMatch) return '';
  const start = openMatch.index + openMatch[0].length;
  const end = str.indexOf(closeStr, start);
  if (end === -1) return str.slice(start);
  return str.slice(start, end);
}

function extractScripts(html) {
  const scripts = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  const cleaned = html.replace(re, (full, attrs, code) => {
    const srcMatch = attrs.match(/\bsrc\s*=\s*["']([^"']+)["']/i);
    const typeMatch = attrs.match(/\btype\s*=\s*["']([^"']+)["']/i);
    const type = typeMatch ? typeMatch[1] : '';
    // skip non-executable script types (e.g. templates) -> keep inert, drop
    if (srcMatch) {
      scripts.push({ src: srcMatch[1], type });
    } else if (code.trim()) {
      scripts.push({ code, type });
    }
    return '';
  });
  return { cleaned, scripts };
}

fs.mkdirSync(OUT, { recursive: true });

for (const [file, slug] of PAGES) {
  const abs = path.join(SRC, file);
  if (!fs.existsSync(abs)) {
    console.warn('MISSING', file);
    continue;
  }
  const raw = fs.readFileSync(abs, 'utf8');

  const title = (raw.match(/<title>([\s\S]*?)<\/title>/i) || [, 'Aurélie'])[1].trim();

  let head = between(raw, /<head[^>]*>/i, '</head>');
  let body = between(raw, /<body[^>]*>/i, '</body>');

  // keep only <link> and <style> from head (drop meta/title/base)
  head = head
    .replace(/<meta\b[^>]*>/gi, '')
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<base\b[^>]*>/gi, '');

  const combined = head + '\n' + body;
  const { cleaned, scripts } = extractScripts(combined);

  const out = { title, html: cleaned, scripts };
  fs.writeFileSync(path.join(OUT, slug + '.json'), JSON.stringify(out));
  console.log(
    `${slug.padEnd(10)} <- ${file.padEnd(16)} html=${(cleaned.length / 1024).toFixed(0)}kb scripts=${scripts.length}`
  );
}
console.log('done ->', OUT);
