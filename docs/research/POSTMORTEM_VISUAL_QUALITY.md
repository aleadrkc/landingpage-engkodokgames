# Visual Quality Postmortem

User feedback: deployed clone “looks bad”.

## Root cause

The implementation treated WordPress-rendered HTML as the deliverable instead of using it as reference material. The page was shipped through `dangerouslySetInnerHTML` with a JSON blob of captured HTML plus CSS patches for Smart Slider/WordPress runtime behavior.

That violates the NEKO/GitHub recipe:

- HTML output is input/reference, not the final architecture.
- The clone should be real Next.js/React components with Tailwind/global CSS.
- WordPress/Elementor/Smart Slider plugin runtime behavior must be rebuilt or simplified as React/static UI.
- Visual QA must compare source and deployed render, not only verify HTTP 200/build success.

## Required correction approach

1. Rebuild homepage as components:
   - `Header`
   - `HeroCarouselStatic`
   - `SectionHeading`
   - `ProductCardGrid`
   - `Footer`
2. Extract product/news/event data from captured pages.
3. Rebuild internal pages using shared layout primitives instead of whole-page raw HTML.
4. Preserve `https://inventory.engkodokgames.com/` as external anchor.
5. Reuse downloaded local assets.
6. Verify source vs staging visually at desktop and mobile.

## Skill update made

The `neko-website-cloner` skill now explicitly forbids full-page WordPress/Elementor/slider raw HTML injection and requires component-based Next.js/Tailwind reconstruction plus visual QA.
