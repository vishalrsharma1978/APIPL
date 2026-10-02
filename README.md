# APIPL

Commercial website for Aashi Powertech India Private Limited, built with React
and Vite.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm ci
npm run build
```

The production files are generated in `dist/`.

## Render deployment

The repository includes a `render.yaml` Blueprint for static hosting. In Render,
create a new Blueprint and select this repository. Render will use:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- SPA fallback: all routes rewrite to `/index.html`
