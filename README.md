# SheThrives

The SheThrives marketing + pre-launch storefront, rebuilt in **Next.js** (App Router)
as a faithful, pixel-for-pixel port of the original design.

The product catalogue isn't live yet — the store is in "coming soon / join the
waitlist" mode, exactly like the source. Waitlist forms validate input and show a
success state; wiring them to a CRM is a single `fetch` (see `app/lib/useWaitlist.js`).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm start   # production
```

## Routes

| Route            | Page                                   |
| ---------------- | -------------------------------------- |
| `/`              | Home (hero, why-a-cup, products, education, community, waitlist, app teaser) |
| `/shop`          | Product detail page — the Menstrual Cup |
| `/how-it-works`  | First-timer guide (article)            |
| `/journal`       | Journal / blog index                   |
| `/about`         | About + founder story                  |

Each route ships its own SEO `metadata` (title/description), matching the
per-page SEO the original set at runtime.

## Structure

```
app/
  layout.js            Root layout: global <head> metadata, JSON-LD, Header/Footer/CookieBanner
  page.js              Home
  shop|how-it-works|journal|about/page.js
  globals.css          Reset, keyframes, hover utilities, responsive helpers
  fonts.css            Embedded Cardo + Jost @font-face (self-hosted)
  components/          Header, Footer, CookieBanner, Faq, PdpProduct, WaitlistForms
  lib/
    content.js         All copy + data (nav, products, specs, FAQs, footer, SEO…)
    style.js           s() — parses inline CSS strings into React style objects
    icons.js           Inline SVG icon set
    useWaitlist.js     Waitlist form state + validation
public/
  fonts/   *.woff2     27 self-hosted webfont files
  images/  hero.png, app-teaser.png, favicon.png, og-image.png
```

### Notes on fidelity

- The original's inline styles are preserved verbatim via the `s()` helper, so the
  visual output matches exactly.
- The desktop/mobile hero & nav variants (originally toggled by a JS `isMobile`
  flag at a 900px breakpoint) are reproduced with CSS media queries — a single,
  hydration-safe render.
- Fonts and images are self-hosted (extracted from the source bundle) — no
  external font/CDN requests.
- `heroStyle` defaults to the fuchsia hero (the source's default prop value).
