# IKIAN Dimitsana — Website

A production-ready, privacy-first website for **IKIAN Dimitsana**, a boutique accommodation brand in Dimitsana, Arcadia, Greece.

## Tech Stack

**Astro** was chosen for its:
- Static-first architecture with zero client-side JS by default
- Excellent image optimisation support
- Built-in component system (no framework overhead)
- Automatic sitemap generation via `@astrojs/sitemap`
- Near-perfect Lighthouse scores out of the box
- Simple deployment to any static hosting (Netlify, Vercel, Cloudflare Pages, etc.)
- Multilingual readiness via future i18n integration

## Getting Started

```bash
cd site
npm install
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production → dist/
npm run preview  # Preview production build locally
```

## Project Structure

```
site/
├── public/
│   ├── images/
│   │   ├── logos/           # Brand logos (PNG, JPG)
│   │   └── suites/          # Suite photos (suite-1 through suite-4)
│   ├── favicon.ico          # 32x32 favicon
│   ├── apple-touch-icon.png # 180x180 Apple touch icon
│   ├── icon-192.png         # 192x192 app icon
│   ├── icon-512.png         # 512x512 app icon
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro     # Sticky header with nav & CTA
│   │   ├── Footer.astro     # Footer with links, contact, privacy notice
│   │   └── SuiteCard.astro  # Reusable suite listing card
│   ├── layouts/
│   │   └── BaseLayout.astro # Base HTML layout with SEO/OG/privacy meta
│   ├── pages/
│   │   ├── index.astro      # Homepage (hero, intro, suites, CTA)
│   │   ├── contact.astro    # Contact page
│   │   ├── terms.astro      # Terms & Conditions (bilingual EN/EL)
│   │   ├── privacy.astro    # Privacy Policy
│   │   └── 404.astro        # 404 error page
│   └── styles/
│       └── global.css       # Global styles & design tokens
├── astro.config.mjs
└── package.json
```

## Privacy-by-Design Documentation

### What This Website Does NOT Do

| Category | Status |
|----------|--------|
| Cookies | **None** — zero cookies set |
| Analytics | **None** — no Google Analytics, Matomo, Plausible, or similar |
| Tracking pixels | **None** — no Meta Pixel, Hotjar, or Tag Manager |
| Third-party fonts | **None** — system font stack only |
| Third-party CDN | **None** — all assets self-hosted |
| Embedded maps | **None** — link to OpenStreetMap instead |
| Chat widgets | **None** |
| reCAPTCHA | **None** |
| Cookie consent banner | **Not needed** — no non-essential cookies/trackers |

### What Personal Data May Be Processed

| Data Category | When | Lawful Basis (GDPR) |
|---------------|------|---------------------|
| Phone call data | Guest calls the property | Art. 6(1)(b) — pre-contractual measures |
| Email content | Guest sends an email | Art. 6(1)(b) — pre-contractual measures / Art. 6(1)(f) — legitimate interest |
| Booking data (name, ID, dates) | Guest makes a reservation | Art. 6(1)(b) — contract performance / Art. 6(1)(c) — legal obligation (Greek guest registry) |
| Server access logs (IP, UA) | Any page visit | Art. 6(1)(f) — legitimate interest (security) |

### Where Consent IS Required (Currently Not Applicable)

No consent-requiring technologies are used. If any of the following are added in the future, a cookie consent banner (CMP) must be implemented:
- Analytics tools (even "privacy-friendly" ones may need consent depending on configuration)
- Marketing/retargeting pixels
- Third-party embedded content (maps, videos, social feeds)
- Non-essential cookies

### External Links

This site links to:
- **Airbnb** (for booking) — governed by Airbnb's privacy policy
- **OpenStreetMap** (for directions) — governed by OSM's privacy policy

Users are informed before navigating away via `target="_blank"` with `rel="noopener noreferrer"`.

### Before Launch Checklist

- [ ] Replace `https://ikian-dimitsana.gr` with actual domain in `astro.config.mjs`
- [ ] Review Privacy Policy TODOs (legal entity name, VAT, retention periods)
- [ ] Review Terms & Conditions CCTV section with property owner
- [ ] Confirm hosting provider's DPA (Data Processing Agreement)
- [ ] Confirm server log retention period with hosting provider
- [ ] Have legal documents reviewed by a qualified professional
- [ ] Verify all suite photos display correctly
- [ ] Test all phone/email links on mobile
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console

## Design

- **Palette:** Gold (#b08d57), earthy green (#4a5a3a), warm beige (#f5f0e8), stone (#e8e0d4)
- **Typography:** System font stack (serif for headings, sans-serif for body)
- **Mood:** Arcadian elegance, mountain village charm, understated luxury

## Accessibility

- Semantic HTML throughout
- Visible `:focus-visible` outlines
- Skip-to-content link
- Alt text on all images
- Keyboard-navigable menu and buttons
- `prefers-reduced-motion` respected
- Sufficient colour contrast ratios
- ARIA labels on interactive elements

## SEO

- Schema.org `LodgingBusiness` structured data
- Open Graph + Twitter Card meta tags
- Canonical URLs
- Auto-generated sitemap
- `robots.txt`
- Clean heading hierarchy
- Descriptive alt text and image file names
- Geo meta tags for local SEO

## License

All content, photos, and brand assets are property of IKIAN Dimitsana. All rights reserved.
