# Ugokiego — photo to video (ugokiego.net)

Ugokiego is a bilingual (English / 日本語) website that turns a still photo into a short cinematic video. It is operated by STRATA PINNACLE RESOURCE TRADING, Unit 7 No 510 Monsall Road, Manchester, United Kingdom, M40 8WN (support@ugokiego.net).

## Features
- **Generator**: upload or drag in an image (JPG/PNG/WebP, 10MB max) or pick one of the sample photos. Set a prompt, camera motion, aspect ratio (16:9 / 9:16 / 1:1 / 4:3), duration, quality and look, then click **Generate**.
- **8 camera motions**: zoom in/out, pan left/right, tilt up, orbit, dolly zoom, handheld. **Auto** chooses one from keywords in the prompt (English or Japanese, e.g. `zoom in`, `右へパン`).
- **Looks**: Natural, Cinematic (letterbox + vignette), Warm film (grain), Monochrome.
- **Bilingual UI**: EN / 日本語 switch. The language comes from `?lang=en|ja`, then the saved choice, then the browser language. Prices follow the language: USD in English, JPY in Japanese.
- **Free previews**: 3 previews at 720p with a watermark, counted in `localStorage`, no account needed.

## Pricing and billing (what the site promises)
One plan, **Ugokiego Pro**: 1-hour free trial (card required), then **$99/year** or **¥16,999/year**, renewing every year until cancelled. Includes 150 credits per month, 1080p export, no watermark and a commercial-use license.

The site states, and the billing backend must do exactly this:
- No charge during the 1-hour trial; cancelling in the trial means no charge.
- Charge the annual price when the trial ends; renew yearly at the same price.
- Email a renewal reminder at least 7 days before each renewal.
- Card statement descriptor **UGOKIEGO.NET** (set the same value in Stripe).
- Cancellation via the Stripe customer portal link in receipt emails, or by email.
- 30-Day Money-Back Guarantee: full refund on unused credits (see `refund.html` for the exact rule).

All of these values live in `js/config.js` (`prices`, `descriptor`, `trialHours`, `checkoutUrl`). The **Start 1-hour free trial** button opens a confirmation dialog (trial end time, price, renewal, statement name, agreement checkbox), then redirects to `checkoutUrl` for the current language. Stripe Payment Links only support trials in whole days, so a 1-hour trial needs a small backend that creates a Checkout Session / Subscription with `trial_end = now + 3600`. Until `checkoutUrl` is set, the button shows a message asking the customer to email support.

## How it renders
The video is made entirely in the browser. The image is drawn on a `<canvas>` with an animated virtual camera, then recorded with `MediaRecorder` (WebM on Chrome/Edge/Firefox, MP4 on Safari). Nothing is uploaded.

## SEO and structured data
- `index.html` has a title, description, canonical URL, `hreflang` alternates, Open Graph and Twitter tags, and Schema.org JSON-LD: `Organization` (company, address, email, logo), `WebSite`, `SoftwareApplication`/`Product` with two annual `Offer`s (USD 99, JPY 16999) and the refund policy, and `FAQPage`.
- Each policy page has its own title, description, canonical URL, Open Graph tags and a `WebPage` JSON-LD block with the publisher.
- `sitemap.xml` and `robots.txt` use `https://ugokiego.net/`, so the folder should be served at the domain root.

## Policy pages
`terms.html`, `privacy.html`, `refund.html`, `cancellation.html`, `shipping.html`, `cookies.html`, `accessibility.html`, `dmca.html`, `disclaimer.html`, `do-not-sell.html`. They are written in English with a short Japanese note at the top, and are linked from the footer of every page. Have them reviewed by a lawyer before launch.

## Assets
- `assets/examples/`: the six gallery clips (MP4 H.264 + WebM VP9, plus a poster JPG each). They were rendered from still photos with the same camera curves as `js/app.js` (960×540, 6s, 30fps). Clips play only while visible and stay paused when the viewer prefers reduced motion.
- `assets/samples/`: the three sample photos offered in the generator.

All source photos come from [Unsplash](https://unsplash.com/license). The Unsplash License allows free commercial use without attribution. Photo IDs (open `https://unsplash.com/photos/<id>`, or the image at `https://images.unsplash.com/photo-<id>`):

| File | Unsplash photo |
|---|---|
| examples/golden-hour | 1495567720989-cebdbdd97913 |
| examples/neon-city | 1542051841857-5f90071e7989 |
| examples/alpine-lake | 1493246507139-91e8fad9978e |
| examples/instant-camera | 1526170375885-4d8ecf77b99f |
| examples/ocean-breeze | 1507525428034-b723cf961d3e |
| examples/fuji-sakura | 1490806843957-31f4c9a91c65 |
| samples/lantern-alley | 1528360983277-13d401cdc186 |
| samples/sakura | 1522383225653-ed111181a951 |
| samples/lake-boat | 1501785888041-af3ef285b470 |

## Files
- `index.html`: page markup, SEO tags and JSON-LD. Translatable nodes use `data-i18n`, `data-i18n-html`, `data-i18n-ph`, `data-i18n-title` and `data-i18n-aria`.
- `js/config.js`: company details, prices, trial length, statement descriptor and checkout URLs.
- `js/i18n.js`: EN/JA dictionaries and the language switcher. `{price}`, `{zero}`, `{currency}`, `{descriptor}` and `{email}` are filled from `js/config.js`.
- `js/app.js`: upload, samples, rendering engine, free previews, checkout dialog.
- `css/style.css`: dark purple/pink theme, responsive, shared by the policy pages.
- `assets/logo.png`, `assets/og-image.jpg`, `assets/cards/*.svg`: logo, social share image, payment card badges.

## Run locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000/ugokiego/
```
