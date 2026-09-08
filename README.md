# Sector 3

Photography site for sector3.cc — built with Next.js + Tailwind.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Add your real photos

1. Export web-sized JPG or WebP files (~2000px on the long edge — no need
   for full-resolution originals here; keep those separately for print use
   later).
2. Drop them into `public/images/`.
3. Open `data/photos.js` and set each photo's `src` field, e.g.:

   ```js
   { id: "b1", theme: "Bikes", title: "Shop Bike", location: "Boulder, CO", src: "/images/shop-bike.jpg", ... }
   ```

   Until `src` is set, a placeholder color block renders instead, so you can
   build out the site before every photo is ready.

4. To add a new photo entirely, add a new object to the `photos` array in
   `data/photos.js`. `theme` must be one of the values in the `themes` array
   in that same file (currently: Bikes, Cars, Landscape).

## Deploy

1. Push this project to a GitHub repo.
2. Go to https://vercel.com, sign in, and import the repo. Vercel detects
   Next.js automatically — no config needed.
3. Once deployed, go to the project's Settings → Domains in Vercel and add
   `sector3.cc`.
4. Vercel will show you either nameservers or A/CNAME records to add in
   GoDaddy's DNS settings for the domain. Add those, then wait for DNS to
   propagate (usually well under an hour).

## Project structure

```
app/
  layout.jsx        — global shell: fonts, nav, footer
  page.jsx           — homepage (gallery)
  about/page.jsx      — about page
components/
  Nav.jsx             — top nav + wordmark
  Footer.jsx
  Gallery.jsx         — theme filter + grid (client component)
  PhotoFrame.jsx       — single photo tile, used in grid and lightbox
  Lightbox.jsx         — full-screen photo view
data/
  photos.js            — every photo + theme list, single source of truth
```

## Brand tokens

Colors and fonts live in `tailwind.config.js` under `theme.extend`, so
`bg-green`, `text-bronze`, `font-display`, `font-wordmark`, etc. are
available as Tailwind classes anywhere in the project.
