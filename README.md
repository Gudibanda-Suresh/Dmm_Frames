# dmm_frames — Silk City Photography Website

A bilingual (English/Telugu) photography portfolio site for **dmm_frames**,
a photography & videography studio based in Dharmavaram, Andhra Pradesh —
the "Silk City." Built with React, Vite, and Tailwind CSS.

Live sections: Hero, About, Services, Pricing, Gallery, Reels, Reviews,
Contact, Footer — plus a light/dark theme toggle and a language switcher.

---

## 1. Getting Started

**Requirements:** Node.js 18+ (built and tested on Node 22).

```bash
npm install       # install dependencies
npm run dev       # start local dev server (usually http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

> **Note for this machine specifically:** if `npm install` hangs or fails
> with a certificate error, it's this network's TLS-inspecting proxy. Run
> installs with:
> ```bash
> NODE_OPTIONS="--use-system-ca" npm install
> ```

---

## 2. Project Structure

```
src/
  components/        All page sections (Hero.jsx, About.jsx, Gallery.jsx, ...)
    ui/              Shared building blocks (GlassCard, SectionHeading, LazyImage, Reveal)
  data/              Editable content: gallery.js, reels.js, testimonials.js
  i18n/
    locales/
      en.json         All English text
      te.json          All Telugu text
  hooks/useTheme.jsx  Light/dark theme state (persisted to localStorage)
  utils/localImage.js Helpers that auto-pick images from a folder
  assets/
    hero/             Hero background photo
    about/            About section photos
    gallery/
      portraits/ nature/ travel/ street/ culture/ lifestyle/
      (or any other folder name you create)
    logo.jpeg
  App.jsx             Section order lives here
  index.css           Theme CSS variables + shared component classes
```

---

## 3. Adding Your Own Photos (no code changes needed)

This site is set up so **dropping a file into a folder is enough** — no
editing of any `.jsx` file required.

| Folder | What happens |
|---|---|
| `src/assets/hero/` | The first photo (alphabetically) becomes the hero background, shown uncropped at its natural size. |
| `src/assets/about/` | First photo → large About photo. Second photo → small floating detail photo. |
| `src/assets/gallery/<category>/` | Every photo in the folder appears in the Gallery under that category, automatically filterable. |

**Gallery categories are fully dynamic.** The 6 starter categories
(`portraits`, `nature`, `travel`, `street`, `culture`, `lifestyle`) show
placeholder photos until you add real ones. Create **any other folder name**
under `src/assets/gallery/` (e.g. `src/assets/gallery/festivals/`) and it
becomes its own filter category automatically as soon as it has a photo in
it — a category with zero photos simply doesn't show up as a filter.

Each of the `hero/`, `about/`, and `gallery/` folders has its own short
`README.md` inside it as a reminder.

**Photos are never processed or resized** — whatever you drop in is served
as-is. Compress large images yourself before adding them if page load speed
matters (a few of the current placeholder images are multi-MB PNGs and
would benefit from being converted to compressed `.webp`).

---

## 4. Content That Still Needs Real Data

A few things are currently **placeholder content** and should be swapped
before this goes fully live:

- **`src/data/reels.js`** — the 4 reel videos are public sample clips with
  Picsum poster images, not real dmm_frames footage. Replace `video` (and
  `poster`, or drop a real photo into a poster-image slot) with real content.
- **`src/data/testimonials.js`** — the 4 client reviews (Sowmya Reddy,
  Karthik Naidu, Divya & Ravi, Lakshmi Priya) are placeholder text I wrote,
  not real clients. Don't leave these live as if genuine — replace with
  actual client quotes.
- **WhatsApp number** — `src/components/Contact.jsx`, the `SOCIALS.whatsapp`
  value is `https://wa.me/919000000000` (a placeholder number). Update it to
  the real business WhatsApp number.
- Gallery categories **Portraits** and **Travel** currently have no real
  photos and won't appear until you add some.

---

## 5. Editing Text (English + Telugu)

All visible text lives in two files, mirrored key-for-key:

- `src/i18n/locales/en.json`
- `src/i18n/locales/te.json`

Edit the English and Telugu value for the same key to change what's shown
in each language — no other file needs touching for text changes. The
language switcher in the navbar defaults to English and remembers the
visitor's choice via `localStorage`.

---

## 6. Theme (Light / Dark)

- Toggle button lives in the navbar (sun/moon icon), next to the language
  switcher.
- Defaults to **dark** for every new visitor — there's no OS/browser
  dark-mode detection involved, it's a hardcoded default in
  `src/hooks/useTheme.jsx`. Once a visitor clicks the toggle, their choice
  is remembered in `localStorage` for future visits.
- Colors are driven by CSS custom properties in `src/index.css`
  (`--canvas`, `--fg`, etc.) so both themes stay in sync — the light theme
  palette is based on the site logo's cream/gold look.

---

## 7. Contact Form

The contact form sends real submissions via
**[Web3Forms](https://web3forms.com)** — a free service for handling form
submissions on static sites with no backend.

- Access key lives in `src/components/Contact.jsx` as
  `WEB3FORMS_ACCESS_KEY`.
- Web3Forms blocks non-browser traffic (curl, headless test tools) as
  anti-spam protection — this only affects automated testing, not real
  visitors using an actual browser.

---

## 8. Deployment (Render)

This is a static site (no backend), deployed as a **Render Static Site**.

1. Push your changes: `git push origin main`
2. Render Dashboard → **New +** → **Static Site** → connect the GitHub repo.
3. Settings:
   - **Branch:** `main`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `20` (or `22`)
4. Render auto-deploys on every push to `main` after the first setup.

**Remember:** changes made locally (or by an AI assistant in this repo)
only go live after `git push` — Render only rebuilds from what's actually
on GitHub.

---

## 9. Suggested Next Steps

Not built yet — worth considering:

- **Floating WhatsApp button** — persistent tap-to-chat icon, usually
  converts better than a scroll-to-contact-form flow.
- **Google Business Profile** — a *separate* free listing directly with
  Google (not code on this site) that's what actually gets a business into
  Google Maps and "photographer near me" search results. Higher-impact for
  local search than on-site SEO schema alone. Set this up at
  [google.com/business](https://www.google.com/business/) whenever you're
  ready — it's a Google-side listing, not something added to this repo.
- Replace the large placeholder PNGs (`src/assets/hero/`, `src/assets/about/`)
  with compressed `.webp` versions once real, final photos are chosen —
  current file sizes (2–3MB each) slow down first load.

Two more are common to add together, since they solve different problems:
**Analytics answers "what are visitors doing on my site?"**, while
**LocalBusiness schema answers "what is my business?" for search engines.**
Step-by-step for both below. Neither is implemented in the code yet — this
is a guide for when you're ready to add them.

### 9a. Google Analytics (GA4) — step by step

1. Go to [analytics.google.com](https://analytics.google.com) and sign in
   with any Google account.
2. Click **Admin** (gear icon, bottom left) → **Create Property**.
3. Enter a property name (e.g. "dmm_frames website"), pick your timezone
   (India Standard Time) and currency (INR), click through the business
   details.
4. Under **Data Streams**, choose **Web**, enter your site's URL (the
   Render URL from Section 8, or your custom domain if you set one up) and
   a stream name.
5. GA4 will show a **Measurement ID** that looks like `G-XXXXXXXXXX`. Copy
   it.
6. Add this snippet to `index.html`, just before the closing `</head>` tag
   (replace `G-XXXXXXXXXX` with your real Measurement ID):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
7. Deploy (`git push`, wait for Render to rebuild), then visit your live
   site and check **Analytics → Reports → Realtime** — you should see
   yourself as an active visitor within a minute or two.

That's it — no npm package needed, it's just the two `<script>` tags above.

### 9b. LocalBusiness SEO Schema — step by step

This is a block of structured data (JSON-LD) added to `index.html`. It
doesn't change anything visible on the page — it's read by search engines.

1. Gather the real business details you want public: exact phone number,
   any full street address (or just city/state if you don't have a public
   office), and confirm the social links.
2. Add this block to `index.html`, just before the closing `</head>` tag
   (fill in the placeholders marked `TODO`):
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     "name": "dmm_frames",
     "image": "TODO: full URL to your logo or a hero photo, e.g. https://your-site-url.com/favicon.jpeg",
     "url": "TODO: your live site URL, e.g. https://dmm-frames.onrender.com",
     "telephone": "TODO: real phone number, e.g. +91XXXXXXXXXX",
     "email": "dmmframes@gmail.com",
     "priceRange": "₹₹",
     "address": {
       "@type": "PostalAddress",
       "addressLocality": "Dharmavaram",
       "addressRegion": "Andhra Pradesh",
       "addressCountry": "IN"
     },
     "sameAs": [
       "https://www.facebook.com/profile.php?id=61591771426900",
       "https://www.instagram.com/dmm_frames",
       "https://www.youtube.com/@dmm_frames"
     ]
   }
   </script>
   ```
3. Deploy, then validate it actually parses correctly using Google's free
   [Rich Results Test](https://search.google.com/test/rich-results) — paste
   your live URL in and confirm it detects the `LocalBusiness` type with no
   errors.
4. This is a slow-burn SEO signal — it doesn't produce instant results,
   and (as noted above) it's a complement to a Google Business Profile,
   not a replacement for one.

---

## Tech Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · react-i18next ·
lucide-react icons · Web3Forms (contact form backend-as-a-service)
