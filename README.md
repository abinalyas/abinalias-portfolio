# Abin Alias Portfolio (Static)

A static-export Next.js portfolio configured for free GitHub Pages hosting.

## Local development

```bash
npm install
npm run dev
```

## Build static site

```bash
npm run build
```

The generated static files are in `out/`.

## GitHub Pages deployment

1. Push this repo to GitHub.
2. In GitHub: `Settings -> Pages -> Build and deployment`, set `Source` to `GitHub Actions`.
3. Keep your default branch as `main`.
4. Every push to `main` will build and deploy automatically.

## Customize content

- Update your case studies in `lib/case-studies.ts`.
- Update homepage/about/contact copy in:
  - `app/page.tsx`
  - `app/about/page.tsx`
  - `app/contact/page.tsx`
