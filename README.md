# Skill Tech Control Systems

Website for [skilltechcontrolsystems.com](https://skilltechcontrolsystems.com) — built with Astro + Tailwind CSS, deployed to GitHub Pages.

## Local Development

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run preview    # preview the production build locally
```

## Build

```bash
npm run build      # outputs to docs/
```

The build output goes to `docs/` (configured in `astro.config.mjs`). This folder is committed to the repo and served by GitHub Pages.

> `public/.nojekyll` is copied into `docs/` on every build to prevent GitHub Pages from blocking the `_astro/` CSS folder.

## Deployment (CI/CD)

Deployment is **manual** — build locally and push:

```bash
npm run build
git add docs/
git commit -m "build: update site"
git push
```

GitHub Pages picks up the `docs/` folder on the `master` branch automatically. No GitHub Actions workflow is needed.

**GitHub Pages settings:**
- Source: `Deploy from a branch`
- Branch: `master` / `docs` folder
- Custom domain: `skilltechcontrolsystems.com` (set via `CNAME` file)

## Project Structure

```
src/
├── components/
│   ├── Header.astro       # shared nav
│   └── Footer.astro       # shared footer
├── layouts/
│   └── Base.astro         # HTML shell used by all pages
└── pages/
    ├── index.astro
    ├── products.astro
    ├── product-spec.astro
    └── contact.astro
public/
└── .nojekyll              # prevents Jekyll from blocking _astro/
docs/                      # build output — committed, served by GitHub Pages
tailwind.config.mjs        # custom color palette + fonts
astro.config.mjs           # site URL, outDir, integrations
```