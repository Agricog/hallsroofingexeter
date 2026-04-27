# Hall's Roofing Exeter — Astro 5

Astro 5 + React island for the AI chat. Deploys to Cloudflare Pages (free tier).

## What this is

This is a complete rebuild of the site using **Astro 5** instead of a Vite + React SPA. The key wins:

- **Real HTML for every page** — Google sees actual content, not an empty `<div id="root">`. Fixes the "Discovered, currently not indexed" issue (21 pages).
- **Per-page SEO baked into the HTML** — every URL has a unique title, description, canonical, OG tags, and JSON-LD structured data, all server-rendered at build time.
- **Auto-generated sitemap** at `/sitemap-index.xml` — covers all 24 pages including dynamic service and area routes.
- **AI chat is a React island** — only loads JavaScript when scrolled into view (`client:visible`). Pages without the chat ship near-zero JS.
- **Self-hosted fonts retained** — preserves the LCP win from the previous build.
- **A-grade security headers** via Cloudflare Pages `_headers` file (no Express server needed).
- **www canonicalization** via `_redirects` — fixes the 4 "Page with redirect" issues.

## Project structure

```
public/                           Static assets (fonts, robots, _headers, _redirects)
src/
  components/
    react/AiChatIntake.tsx        ← Only React component (island)
    BaseHead.astro                ← All SEO meta tags
    Header.astro                  ← Site header (vanilla JS for menu/scroll)
    Footer.astro
    ServiceCard.astro
    TrustStrip.astro
    CtaSection.astro
    FaqSection.astro              ← Native <details>/<summary>, zero JS
    Breadcrumb.astro
    EmergencyBanner.astro
  layouts/BaseLayout.astro        ← One layout, every page
  pages/
    index.astro                   /
    about.astro                   /about
    emergency.astro               /emergency
    privacy.astro                 /privacy
    terms.astro                   /terms
    404.astro                     custom 404
    services/
      index.astro                 /services
      [slug].astro                /services/roof-repair, /services/new-roof, etc.
    areas/
      index.astro                 /areas
      [slug].astro                /areas/exeter, /areas/topsham, etc.
  data/clientConfig.ts            ← THE ONLY FILE THAT CHANGES PER CLIENT
  utils/seo.ts                    SEO + structured data helpers
  utils/analytics.ts              GA event tracking
  styles/global.css               Design tokens + @font-face + Tailwind
```

To deploy a new client site, the only file that changes is `src/data/clientConfig.ts` and the domain in `astro.config.mjs`.

## Deployment to Cloudflare Pages

### Step 1 — Push this code to a new branch

1. On GitHub, in your repo, create a new branch called `astro-rebuild`.
2. Upload all files from this zip (preserving the folder structure).
3. Commit.

### Step 2 — Connect Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Authorize Cloudflare to access your GitHub repo.
3. Select the `hallsroofingexeter` repo.
4. **Production branch:** `astro-rebuild` (or `main` once you merge).
5. **Build settings:**
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: leave blank (or `/`)
6. **Environment variables** (under Settings → Environment variables → Production):
   - `PUBLIC_API_URL` — your CallFirst API base URL
   - `PUBLIC_API_KEY` — your CallFirst API key
   - `PUBLIC_CLIENT_ID` — your client ID
   - `NODE_VERSION` — `20`
7. Click **Save and Deploy**. First build takes ~2 minutes.

### Step 3 — Connect your custom domain

1. In the Pages project, go to **Custom domains** → **Set up a custom domain**.
2. Add `www.hallsroofingexeter.co.uk`.
3. Follow the DNS instructions — usually a CNAME record pointing to your Pages project URL.
4. (Optional but recommended) Also add the apex `hallsroofingexeter.co.uk` and Cloudflare will redirect it to www via the `_redirects` file.
5. Once DNS resolves, Cloudflare auto-provisions an SSL cert.

### Step 4 — Switch from Railway

Once Cloudflare is live and serving the new site at `www.hallsroofingexeter.co.uk`, you can disable the Railway deployment.

## Local development (optional)

If you ever want to test locally before pushing:

```bash
npm install
npm run dev      # http://localhost:4321
```

## Verifying SEO after deploy

1. **View source on the live site** — should show full HTML with content, not empty root div.
2. **PageSpeed Insights** — should be 95–100 across the board.
3. **securityheaders.com** — should be A.
4. **Google Search Console** — submit `https://www.hallsroofingexeter.co.uk/sitemap-index.xml`. Within a couple of weeks the "Discovered, currently not indexed" pages should move to "Indexed".
5. **Test structured data** at [search.google.com/test/rich-results](https://search.google.com/test/rich-results) — paste any URL.

## Adding a new client

1. Duplicate this whole project (new repo).
2. Edit `src/data/clientConfig.ts` — change business name, services, areas, FAQs, etc.
3. Edit `astro.config.mjs` — change the `site:` URL.
4. Edit `public/robots.txt` — change the sitemap URL.
5. Edit `public/_redirects` — change the domain.
6. Connect to Cloudflare Pages.
7. Done — same template, new client, full SEO baked in.

## Notes

- The AI chat's `PUBLIC_API_KEY` env var is exposed to the browser by design (it's a client-side fetch). This matches the previous Vite setup. If your CallFirst API needs server-side calls instead, that's a future architecture change.
- All Lucide icons are bundled at build time via `astro-icon` + `@iconify-json/lucide` — no JS shipped for icons.
- The favicon at `public/favicon.svg` is a simple placeholder. Replace with your real logo when ready.
- Place an Open Graph image at `public/og-image.jpg` (1200×630px) for social sharing previews.
