# Astro Migration Plan

## Why Astro
Static HTML output, component reuse (header/footer), Tailwind native support, deploys to GitHub Pages unchanged.

## Target Structure
```
skilltechcontrolsystems/
├── src/
│   ├── components/
│   │   ├── Header.astro       ← shared nav
│   │   └── Footer.astro       ← shared footer
│   ├── layouts/
│   │   └── Base.astro         ← HTML shell (head, header, footer, slot)
│   └── pages/
│       ├── index.astro
│       ├── products.astro
│       ├── product-spec.astro
│       └── contact.astro
├── public/                    ← static assets (images, CNAME)
├── astro.config.mjs
├── tailwind.config.mjs        ← extracted from inline <script> tags
└── package.json
```

## Setup Steps
```bash
# 1. Init Astro in a temp dir, then copy config files
npm create astro@latest astro-temp -- --template minimal --no-git
cp astro-temp/package.json .
cp astro-temp/astro.config.mjs .
rm -rf astro-temp

# 2. Add Tailwind integration
npx astro add tailwind

# 3. Install deps
npm install

# 4. Dev server
npm run dev

# 5. Build & deploy (GitHub Pages)
npm run build      # outputs to dist/
```

## Key Changes per Page
- Remove `<html>`, `<head>`, `<nav>`, `<footer>` from each page
- Wrap remaining content in `<Layout title="Page Title">...</Layout>`
- Replace `href="./products.html"` links with `href="/products"`

## Tailwind Config Migration
The custom color palette and fonts currently live in an inline `<script id="tailwind-config">` block. These move verbatim into `tailwind.config.mjs`.

## GitHub Pages Deploy
In `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://yourdomain.com',   // from CNAME
  integrations: [tailwind()],
})
```
Add `.github/workflows/deploy.yml` using the official Astro GitHub Pages action.

## Pages → Routes Mapping
| Old file          | New route        |
|-------------------|------------------|
| `index.html`      | `src/pages/index.astro` |
| `products.html`   | `src/pages/products.astro` |
| `product-spec.html` | `src/pages/product-spec.astro` |
| `contact.html`    | `src/pages/contact.astro` |
