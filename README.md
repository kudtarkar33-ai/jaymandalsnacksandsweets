# Jaymangal Sweets and Snacks — Website

A festive, mobile-friendly, three-language (English / Hindi / Marathi)
website for the business, built from your real menu, photos, and customer
testimonials.

## 1. Open it locally first

Unzip this folder, then double-click **`index.html`**. It opens directly in
your browser (`file:///...` in the address bar). Everything works this way
except the WhatsApp buttons, which need a real internet connection to open
WhatsApp — that part will work fine once it's hosted or if you're online.

## 2. Free hosting (no credit limits)

**Option A — Cloudflare Pages** (closest to Netlify's drag-and-drop)
1. Go to **https://pages.cloudflare.com** and sign up free (no card needed)
2. **Create a project → Upload assets**
3. Drag in the whole `jaymangal-sweets` folder
4. You'll get a link like `https://jaymangal-sweets.pages.dev`
5. Rename the project in settings to control that subdomain

**Option B — GitHub Pages** (also free, no limits)
1. Sign up at **https://github.com**
2. **New repository** → name it `jaymangal-sweets` → Public
3. **Add file → Upload files** → drag in everything (index.html, styles.css,
   app.js, and the whole `images` folder)
4. **Settings → Pages** → set Source to the `main` branch → Save
5. Live at `https://yourusername.github.io/jaymangal-sweets`

## What's on the site

- **Language switcher** (EN / हिं / मर) in the header — every section,
  the menu, reviews, and even the WhatsApp order messages themselves change
  language, so a customer who only reads Marathi still gets a fully native
  experience
- **Hero + trust badges** — 100% organic, made fresh to order, delivered
  across Mumbai
- **Our Story** — a *draft* about your mother (see note below — please send
  real details so I can rewrite it properly)
- **Menu** — every item and price from your menu card, filterable by
  category, in all 3 languages, each with an "Order this" button that opens
  WhatsApp with the item pre-filled in whatever language is selected
- **Gallery** — 9 real photos: ladoos, chivda, chakli, modak, puran poli,
  ghavane, and your labeled/dated flour packaging
- **Reviews** — 6 real customer testimonials, including one detailed rave
  review pulled from WhatsApp, shown as written with an English/Hindi gloss
  underneath where helpful
- **Order section** — step-by-step instructions + a form that also opens
  WhatsApp (there's no backend server, so WhatsApp is how messages reach you)
- **Footer** — contact details

## About the "Our Story" section — please read

I wrote a warm starting draft since I don't know the real details of your
mother's journey. To make it genuinely hers, tell me:
- How/when she learned these recipes (from her mother? self-taught?)
- Roughly how long she's been cooking this way
- What made her decide to start selling now

Send me those (in any language) and I'll rewrite the story in all three
languages.

## Editing content later

- **Menu/prices**: `MENU` array in `app.js`
- **WhatsApp number**: `WHATSAPP_NUMBER` in `app.js`
- **Reviews**: `REVIEWS` array in `app.js`
- **All text in all 3 languages**: `I18N` object at the top of `app.js`
- **Photos**: replace files in `images/` (keep filenames, or update the
  `<img src="...">` paths in `index.html`)

No build step — plain HTML/CSS/JS. Edit, save, and re-upload the folder to
redeploy.
