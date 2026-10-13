# Blockgoer website (English / 日本語)

Static, crawler-friendly marketing site for **Blockgoer**, operated by **ARIELY WON THROUGH INC** (Winona, Minnesota).
Every page is pre-rendered HTML in both languages, so search engines and compliance crawlers see the full
content, prices, policies and structured data without running JavaScript.

```
site/          ← the built website (what Cloudflare Pages serves)
src/           ← sources; `npm run build` regenerates site/
tools/         ← local preview server and the font downloader
wrangler.toml  ← Cloudflare Pages project settings
```

## Deploy to Cloudflare Pages

The site is built for Cloudflare Pages: clean URLs (`/legal/terms`, no `.html`), a real `404.html`
(English) and `ja/404.html` (Japanese), and a generated `site/_headers` with security headers, a strict
Content-Security-Policy, one-year caching for fingerprinted assets and `noindex` on `*.pages.dev` copies.

**Option A: upload in the dashboard (no Git, no build).**
Workers & Pages → Create → Pages → *Upload assets* → project name `blockgoer` → drop the
**contents of `site/`** (or the `blockgoer-cloudflare-pages.zip` export) → Deploy.

**Option B: connect a Git repository (rebuilds on every push).**
Push this folder to GitHub/GitLab, then Workers & Pages → Create → Pages → *Connect to Git*:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `site` |
| Root directory | the folder that contains this README (leave empty if it is the repo root) |
| Environment variable | `NODE_VERSION` = `20` (also set by `.nvmrc`) |

The build has no dependencies, so nothing is installed. `site/` is committed too, so an empty build command
also works.

**Option C: command line.**

```bash
npx wrangler@4 login
npm run build
npm run cf:deploy        # = npx wrangler@4 pages deploy site --project-name blockgoer
```

**Custom domain.** In the Pages project → *Custom domains* → add `blockgoer.net` (and `www.blockgoer.net`).
To send `www` to the apex domain, add a Bulk Redirect (or a Redirect Rule) in the Cloudflare dashboard:
`https://www.blockgoer.net/*` → `https://blockgoer.net/${1}` (301). `_redirects` cannot match host names.

**If you add third-party scripts** (Stripe.js, analytics, chat), allow their hosts in the
Content-Security-Policy in `src/build.mjs` (the `csp` list), then rebuild. A plain Stripe Payment Link in
`SITE.checkoutUrl` needs no change: it is an ordinary link.

## Preview locally

```bash
npm run build
npm run preview          # http://localhost:8788, routes like Cloudflare Pages (clean URLs, 404s, _headers)
npm run cf:dev           # exact Cloudflare emulation via Wrangler (downloads it on first run)
npm run check            # validates policies and every built page (links, SEO tags, JSON-LD, facts)
```

Because links are extensionless, opening the HTML files directly or with a plain static server will not
follow links between pages; use one of the commands above. To deploy on a host without clean-URL support,
set `SITE.cleanUrls: false` in `src/config.mjs` and rebuild.

## Change something

All business facts live in **`src/config.mjs`**: domain, checkout link, card statement descriptor, accepted cards,
company name/address/email, price per language (USD / JPY), trial length, credits, refund window.
Every page, every policy and the JSON-LD read from it, so they always agree.

```bash
npm run build          # Node 18+, no dependencies → rewrites site/
```

Before going live, set in `src/config.mjs`:

- `SITE.siteUrl`: your real domain (used for canonical, hreflang, Open Graph, sitemap). Currently `https://blockgoer.net`.
- `SITE.checkoutUrl`: your payment processor's hosted checkout / payment link. While empty, the
  "Start 1-hour free trial" button opens an email to support.
- `SITE.statementDescriptor`: must match the descriptor configured at your payment processor.

## What's in it

- **SEO / crawler**: unique `<title>` and description per page, canonical, `hreflang` (en / ja / x-default),
  Open Graph + Twitter cards with 1200×630 images, sitemap with language alternates, robots.txt.
- **Schema.org JSON-LD**: `Organization` (legal name, logo, address, email, contact point), `WebSite`,
  `Product` with `Offer`s in USD and JPY (1-hour free trial + annual `UnitPriceSpecification`, accepted cards,
  `MerchantReturnPolicy`), `WebApplication`, `FAQPage`, `BreadcrumbList`, `CheckoutPage`, `ContactPage`.
- **Pricing & checkout**: one plan, US$99/year (English) or ¥16,999/year tax included (Japanese), 1-hour free trial,
  automatic annual renewal, 30-Day Money-Back Guarantee, statement descriptor, card badges, consent checkbox, and
  the local time of the first charge.
- **Policies** (`src/legal/*.mjs`, EN + JA): Terms of Service, Privacy, Refund, Cancellation, Shipping & Delivery,
  Cookies, Accessibility, DMCA / Copyright, Disclaimer, Do Not Sell or Share, and 特定商取引法に基づく表記.
  `node src/lib/check-legal.mjs` validates them (structure, allowed HTML, no placeholder text, no hard-coded prices).
- **Preview mode**: the home page draws quick previews in the browser (`src/assets/js/gen.js`); no account needed.
- **Performance**: no third-party requests. Fonts are self-hosted (`src/assets/fonts/`): small Latin
  files, and for Japanese only a subset of Zen Kaku Gothic New holding the characters used in headings
  (body text uses the visitor's system font). Page art is drawn in idle time at display size, card logos come
  from one cached sprite, and HTML/CSS/JS are minified at build time.
  If you change a Japanese heading and the build warns about missing characters, refresh the subset:
  `node tools/fetch-fonts.mjs && node src/build.mjs` (needs network access to Google Fonts once).
