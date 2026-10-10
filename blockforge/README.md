# BlockForgeo website (English / 日本語)

Static, crawler-friendly marketing site for **BlockForgeo**, operated by **CALDRIVO GLOBAL INC**.
Every page is pre-rendered HTML in both languages, so search engines and compliance crawlers see the full
content, prices, policies and structured data without running JavaScript.

```
site/          ← the deployable website (upload this folder as-is)
src/           ← sources; run the build to regenerate site/
```

## Deploy

Upload the **contents of `site/`** to any static host (Netlify, Cloudflare Pages, Vercel, S3/OSS, Nginx, GitHub Pages).
No server code and no build step on the host. All links are relative, so it also works in a sub-folder.

- English: `/index.html`, `/checkout.html`, `/contact.html`, `/legal/*.html`
- Japanese: the same paths under `/ja/`
- `sitemap.xml`, `robots.txt`, `site.webmanifest` are included.

## Change something

All business facts live in **`src/config.mjs`**: domain, checkout link, card statement descriptor, accepted cards,
company name/address/email, price per language (USD / JPY), trial length, credits, refund window.
Every page, every policy and the JSON-LD read from it, so they always agree.

```bash
node src/build.mjs     # Node 18+, no dependencies → rewrites site/
```

Before going live, set in `src/config.mjs`:

- `SITE.siteUrl`: your real domain (used for canonical, hreflang, Open Graph, sitemap).
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
