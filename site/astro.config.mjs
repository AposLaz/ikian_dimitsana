// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Allow overriding `site` and `base` at build time so the same project can
// deploy to a custom domain (root) or to a GitHub Pages project subpath.
const site = process.env.SITE || "https://ikian-dimitsana.gr";
const base = process.env.BASE || "/";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "el"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  compressHTML: true,
});
