# landingpage-engkodokgames

Next.js UI-only clone of https://engkodokgames.com/.

## Scope

- Clones Engkodok Games public pages from the sitemap into native Next.js App Router routes.
- Downloads public visible assets, CSS, and favicon assets into `public/cloned-assets/`.
- Keeps `https://inventory.engkodokgames.com/` as an external anchor, per instruction.
- Backend, WordPress admin, WooCommerce data operations, form submissions, and inventory subdomain are out of scope.

## Commands

```bash
npm run dev
npm run lint
npm run build
```

Do not run local production builds unless explicitly instructed; this repo was prepared with the no-build/RAM-safe rule.
