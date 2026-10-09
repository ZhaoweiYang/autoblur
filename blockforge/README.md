# BlockForge — bilingual (EN / 日本語) game-asset studio landing page

A static, dependency-free landing site for an AI asset tool aimed at game creators
(thumbnails, UI, textures, clothing, icons, GFX and sound effects), with a full
English / Japanese language switch.

## Features

- **EN / 日本語 switch** in the nav. Language is picked from `?lang=ja|en`, then the
  saved choice, then the browser language. All copy lives in `js/i18n.js`.
- **Per-language pricing** (USD for English, JPY for Japanese) with a monthly / yearly toggle.
- **Working demo workspace**: type a prompt, pick a tool, and a preview is generated
  locally in the browser (canvas images, WebAudio sounds) and can be downloaded as PNG / WAV.
  Replace `openWorkspace()` in `js/app.js` with a call to your real generation API.
- Hero with tool tabs and prompt suggestions, a scrolling ribbon, tool cards, a showcase
  carousel ("use this idea"), a "why" section, reviews, pricing, an FAQ accordion, a final CTA
  and a sticky quick-create bar.
- Dark theme by default with a light-theme toggle; responsive down to phone width.

## Before launch

- The reviews are **sample placeholders** (labelled as such on the page). Replace them with real reviews.
- The stats in the hero (`data-count` in `index.html`) and prices (`window.PRICES` in `js/i18n.js`) are placeholders.
- "Start free" / plan buttons open a placeholder dialog. Wire them to your sign-up flow.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000/blockforge/
```

## Files

```
index.html       page structure (text comes from data-i18n keys)
css/style.css    styles and theme tokens
js/i18n.js       English + Japanese copy, price tables
js/gen.js        procedural image / sound generators for the demo
js/app.js        i18n, theme, creator widgets, workspace, carousel, pricing, FAQ
```
