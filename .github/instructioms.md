Act as a senior web developer, senior UX designer, senior technical SEO specialist, and senior GDPR/ePrivacy compliance manager.

Build me a production-ready, professional, privacy-first website for a hospitality property brand called “IKIAN Dimitsana”.

IMPORTANT: USE MY LOCAL ASSETS
In the project there is an assets folder similar to:
IKIAN_Dimitsana_assets/
- Logos/
- Photos/
- Terms & Conditions.docx

You must inspect and use these files.

ASSET RULES
1. In IKIAN_Dimitsana_assets/Logos, choose the best logo version yourself.
   - Prefer the highest-quality version with clean edges and best transparency support.
   - Prefer PNG if transparency and quality are better.
   - If JPG looks cleaner, use JPG.
   - If needed, create:
     - primary logo
     - footer logo
     - favicon/app icon from the best source
2. In IKIAN_Dimitsana_assets/Photos, use the room photos.
   - There are room folders/files for room1, room2, room3, room4.
   - Map them correctly to the 4 suites.
   - Optimize and organize them for responsive display.
   - Create elegant image galleries/cards from them.
3. There is also a “Terms & Conditions.docx”.
   - Read it.
   - Reuse the valid text where appropriate for the Terms & Conditions page.
   - If parts are unclear, badly written, incomplete, or legally risky, do NOT invent legal facts.
   - Improve wording for clarity and structure, but preserve meaning where possible.
   - Mark anything uncertain with TODO comments or placeholder notes for legal review.
4. If there is no complete Privacy Policy text in my files, create a conservative starter Privacy Policy template for this specific privacy-first website and clearly mark legal/business details that I still need to fill in.

PRIMARY GOAL
Create a modern, elegant, premium-feeling website that is mostly or fully static, fast, mobile-first, SEO-friendly, accessible, and privacy-by-design. The website must be suitable for a boutique accommodation business in Dimitsana, Greece.

CRITICAL PRIVACY / GDPR / EPRIVACY REQUIREMENTS
1. Prefer a fully static site with zero cookies and zero client-side tracking.
2. Do NOT use:
   - Google Analytics
   - Meta Pixel
   - Hotjar
   - Tag Manager
   - reCAPTCHA
   - third-party chat widgets
   - marketing automation scripts
   - embedded fonts from Google Fonts
   - third-party CDN assets unless strictly necessary
3. Self-host all assets whenever possible.
4. No cookie banner should be needed if the final implementation truly uses no non-essential cookies or trackers.
5. If any storage/cookies are unavoidable, use only those that are strictly necessary for a user-requested function and document them clearly.
6. If you believe any analytics can be included without consent only under a narrow exemption approach, explain it separately, but keep the default implementation fully privacy-first and cookie-free.
7. Avoid embedded third-party services where possible.
8. Add privacy-by-design documentation notes in comments or a README:
   - what personal data is processed,
   - lawful basis assumptions,
   - where consent is and is not needed,
   - what should be reviewed before launch.
9. Add pages for:
   - Privacy Policy
   - Terms & Conditions
10. Add a simple privacy notice near contact actions if any user data may be sent via email or booking links.
11. Structure the site so that a cookie consent banner can be added later only if I explicitly enable non-essential technologies.

LEGAL / COMPLIANCE BASELINE
Use a conservative EU GDPR + ePrivacy approach:
- strictly necessary technologies may be exempt from consent, but users must still be informed;
- analytics, advertising, session replay, fingerprinting, and similar tracking should be treated as requiring consent unless clearly avoided;
- default recommendation: no tracking, no cookies, no banner.

TECH STACK
Choose one of these and explain your choice briefly in a README:
- Astro
- Next.js with static export
- Eleventy
- plain HTML/CSS/JS static site

Prefer the simplest stack that delivers:
- static generation
- excellent performance
- easy deployment
- maintainability
- multilingual readiness

Prefer Astro unless there is a strong reason not to.

Do NOT build a CMS unless absolutely necessary.
Do NOT build a database-backed app.
Do NOT require a backend for normal browsing.
If forms are included, prefer:
- mailto fallback, or
- a clearly isolated optional serverless endpoint,
but default to simple low-risk contact methods.

DESIGN DIRECTION
Style: premium, calm, warm, natural, boutique hospitality.
Mood: Arcadian elegance, mountain village charm, understated luxury.
Visual language:
- earthy greens
- warm beige / stone
- soft gold accents
- plenty of white space
- strong typography hierarchy
- tasteful image-led sections
- clean and trustworthy booking CTAs

UX GOALS
- Visitors should quickly understand the property options
- Fast path to call, email, and view each suite
- Strong mobile experience
- Elegant but simple navigation
- Trust-building through clarity, legitimacy, and polished presentation

ACCESSIBILITY REQUIREMENTS
- semantic HTML
- visible focus states
- keyboard navigable menus, galleries, and buttons
- alt text support
- sufficient color contrast
- reduced-motion friendly behavior
- no distracting autoplay behavior

SEO REQUIREMENTS
- strong title/meta structure
- Open Graph and Twitter metadata
- structured data / schema.org where relevant
- canonical URLs
- clean heading hierarchy
- image optimization and descriptive alt text
- sitemap and robots.txt
- local/business/accommodation SEO best practices
- pages optimized naturally for:
  - IKIAN Dimitsana
  - accommodation in Dimitsana
  - suites in Dimitsana
  - stay in Dimitsana
  - Arcadia boutique stay

PERFORMANCE REQUIREMENTS
- Aim for very high Lighthouse scores
- optimized images
- lazy loading where appropriate
- minimal JavaScript
- self-hosted fonts or system font stack
- no unnecessary libraries

CONTENT / SITE STRUCTURE
Use the following business content as source of truth unless my local files provide better wording or supporting material.

Brand:
IKIAN Dimitsana

Main hero title:
IKIAN Dimitsana

Top contact CTA:
Call Us Directly & Save 10%
Phone: +30 697 337 3560

Navigation:
- Home
- Contact

Suites / listings:
1. Signature Suite with Central Terrace
   Description: A signature suite with private terrace, where comfort meets the charm of Dimitsana.
   AMA: 00003342582
   Link: https://www.airbnb.gr/rooms/1491162600380899878

2. Luxury Serenity Suite in Dimitsana
   Description: A romantic suite in Dimitsana, offering elegance and serenity for a truly memorable stay.
   AMA: 00003342600
   Link: https://www.airbnb.com/h/ikian-dimitsana-2

3. Charming Arcadian Escape
   Description: A charming Dimitsana suite, crafted for cozy moments and unforgettable romantic escapes.
   AMA: 00003342577
   Link: https://www.airbnb.com/h/ikian-dimitsana-3

4. Dimitsana Center Escape
   Description: A cozy Dimitsana escape steps from the village center, with a queen bed and effortless comfort.
   AMA: 00003342615
   Link: https://www.airbnb.com/h/ikian-dimitsana-4

Contact details:
Phone: +30 697 337 3560
Email: ikian.dimitsana@gmail.com

Map coordinates visible in current site:
Approx. 37.595581, 22.039512

Footer:
© Copyright IKIAN Dimitsana All Rights Reserved

CONTENT STRATEGY
- Improve the site copy so it sounds polished, premium, and trustworthy.
- Do not fabricate amenities, ratings, awards, reviews, distances, legal claims, cancellation rights, or company identity details that were not provided.
- Where content is missing, use tasteful placeholders clearly marked as TODO.
- Use the room photos and logos from local assets, not remote placeholders, unless clearly marked temporary.

INFORMATION ARCHITECTURE
Create at minimum:
1. Home page
   - Hero
   - Intro / brand positioning
   - Suites overview cards using actual room photos
   - Why stay here / experience section
   - Direct contact CTA
   - Location section
   - Footer
2. Contact page
   - Phone
   - Email
   - location/map link
   - privacy note
3. Privacy Policy page
4. Terms & Conditions page

BOOKING / CTA STRATEGY
Each suite card should have:
- suite title
- short description
- AMA number
- “View details / Book” button to external Airbnb link

MAP / LOCATION
Do NOT embed Google Maps iframe by default.
Instead use:
- a static location section
- optional static map image if available
- a button: “Open in Maps”

IMAGES
- Build a reusable image system
- use my local room photos
- create responsive image handling
- add meaningful alt text
- optimize hero and gallery usage
- do not hardcode Google Sites image URLs in final production build

MULTILINGUAL READINESS
Architect the site so Greek and English can be added later easily.
For now, build in English unless otherwise stated, but keep content structure translation-ready.

OUTPUT I WANT
1. Full site code
2. Clean folder structure
3. README with:
   - how to run locally
   - how to deploy
   - privacy/compliance decisions
   - what is static vs optional dynamic
   - which logo was chosen and why
   - how room photos were mapped to suites
4. A short launch checklist including:
   - replace placeholders
   - add legal entity details
   - verify policy texts
   - verify image licenses/ownership
   - verify accessibility
   - verify no cookies/tracking in browser tests
5. A Privacy and Cookies Audit Note listing:
   - cookies used: ideally none
   - localStorage/sessionStorage used: ideally none
   - external requests on first load
   - third-party services included
   - whether a cookie banner is required

IMPORTANT IMPLEMENTATION RULES
- Be opinionated and senior-level
- Make the site look premium and credible
- Keep code clean and maintainable
- Minimize dependencies
- Avoid unnecessary JavaScript
- Use system fonts or self-hosted fonts only
- No cookie banner unless technically necessary
- If something might trigger consent requirements, replace it with a privacy-safe alternative
- Comment privacy-sensitive decisions in code where useful
- Read and use the local assets folder before generating final code

DELIVERABLE STYLE
Return the complete implementation, not just an outline.
If tradeoffs are needed, choose:
privacy > simplicity > performance > visual effects.

Now generate the full project.