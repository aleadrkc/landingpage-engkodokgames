# Component Rebuild Notes

## Correction

The clone has been moved away from whole-page WordPress HTML injection. The UI is now composed from native Next.js/React components:

- `SiteHeader`
- `SiteFooter`
- `Hero`
- `SectionHeading`
- `CardGrid`
- `ContentCard`
- `PageHero`

## Visual direction

The rebuilt UI keeps the source-site structure:

1. Logo + uppercase primary navigation
2. Featured hero/product visual area
3. `Pre-Order Opened`
4. `Pre-Order Closed`
5. `Product On Sale`
6. Product/news/events/about/contact/retailer pages with shared page hero and card systems

## Design tokens

- White page background
- Black/dark text and footer: `#171717`, `#161616`
- Yellow accent: `#ffe100`
- Red hover/accent: `#e52420`
- Soft borders/shadows for product cards
- Serif heading treatment to echo WordPress/Elementor section headings

## Asset rule

Visible images are served locally from `public/cloned-assets/`; no source-site hotlinks are needed for primary UI assets.
