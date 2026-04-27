// Build-time helper to prefix paths with Astro's configured `base`.
// `import.meta.env.BASE_URL` always ends with `/`. We strip it and re-add
// a single slash so callers can pass either "/foo" or "foo".
const RAW_BASE = import.meta.env.BASE_URL || "/";
const BASE = RAW_BASE.replace(/\/+$/, "");

export function url(path: string): string {
  if (!path) return BASE || "/";
  // Leave external URLs and protocol-relative URLs untouched.
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#|mailto:|tel:)/i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${normalized}`;
}

export const BASE_PATH = BASE;
