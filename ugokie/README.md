# Ugokie（うごくえ）— Image to Video AI

**Ugokie** comes from the Japanese 動く絵 (*ugoku e*), "moving picture". It is a bilingual (English / 日本語) image-to-video website: upload a photo, describe the motion, and download a short cinematic clip.

## Features
- **Generator**: upload or drag in an image (JPG/PNG/WebP, 10MB max) or pick one of the sample photos. Set a prompt, camera motion, aspect ratio (16:9 / 9:16 / 1:1 / 4:3), duration, quality and look, then click **Generate**.
- **8 camera motions**: zoom in/out, pan left/right, tilt up, orbit, dolly zoom, handheld. **Auto** chooses one from keywords in the prompt (English or Japanese, e.g. `zoom in`, `右へパン`).
- **Looks**: Natural, Cinematic (letterbox + vignette), Warm film (grain), Monochrome.
- **Bilingual UI**: EN / 日本語 switch. The language comes from `?lang=en|ja`, then the saved choice, then the browser language. Prices show in USD (EN) or JPY (JA).
- **Landing sections**: examples gallery, features, 3 steps, use cases, pricing (Pro: $99/year · ¥15,199/年), FAQ, CTA, footer.
- **Credits (demo)**: 3 free credits stored in `localStorage`. The free tier adds a watermark.

## How it renders
The video is made entirely in the browser. The image is drawn on a `<canvas>` with an animated virtual camera, then recorded with `MediaRecorder` (WebM on Chrome/Edge/Firefox, MP4 on Safari). Nothing is uploaded.

To switch to a real generative AI model (Kling, Runway, Veo, etc.), replace `render()` in `js/app.js` with a call to your backend that returns a video `Blob`. The UI, credits and download flow stay the same. Payments (`data-plan` buttons) and accounts are placeholders.

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
- `index.html`: page markup. Translatable nodes use `data-i18n`, `data-i18n-html` and `data-i18n-ph`.
- `js/i18n.js`: EN/JA dictionaries and the language switcher.
- `js/app.js`: upload, samples, rendering engine, credits, pricing toggle.
- `css/style.css`: dark purple/pink theme, responsive.

## Run locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000/ugokie/
```
