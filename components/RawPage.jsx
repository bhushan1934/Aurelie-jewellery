'use client';

import { useEffect, useRef } from 'react';

/**
 * Renders an original Aurélie page faithfully:
 *  - injects the page's head styles/links + body markup as-is
 *  - then executes the page's <script>s in their original document order
 *    (external scripts awaited so dependency order — e.g. GSAP before
 *    aurelie-gsap.js — is preserved, inline scripts run synchronously)
 */
export default function RawPage({ title, html, scripts }) {
  const ref = useRef(null);

  useEffect(() => {
    if (title) document.title = title;

    const container = ref.current;
    if (!container) return;

    let cancelled = false;
    const injected = []; // script nodes we add, for cleanup

    const loadExternal = (src, type) =>
      new Promise((resolve) => {
        // de-dupe libraries already present (GSAP, Swiper, aurelie.js, ...)
        const existing = document.querySelector(
          `script[data-raw-src="${CSS.escape(src)}"]`
        );
        if (existing) {
          resolve();
          return;
        }
        const s = document.createElement('script');
        s.src = src;
        if (type) s.type = type;
        s.async = false;
        s.setAttribute('data-raw-src', src);
        s.onload = () => resolve();
        s.onerror = () => resolve(); // never block the chain on a failed CDN
        document.body.appendChild(s);
        injected.push(s);
      });

    const runInline = (code, type) => {
      const s = document.createElement('script');
      if (type) s.type = type;
      s.textContent = code;
      s.setAttribute('data-raw-inline', '1');
      document.body.appendChild(s);
      injected.push(s);
    };

    (async () => {
      for (const sc of scripts || []) {
        if (cancelled) return;
        if (sc.src) {
          await loadExternal(sc.src, sc.type);
        } else {
          runInline(sc.code, sc.type);
        }
      }
    })();

    return () => {
      cancelled = true;
      injected.forEach((n) => n.parentNode && n.parentNode.removeChild(n));
      document.body.style.overflow = '';
    };
    // Intentionally run once per route mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className="raw-page"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
