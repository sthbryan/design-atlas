[← Atlas](../README.md)

# Icons

Icon sets for interfaces and marketing pages, from outline SVG systems to animated Lottie icons and rendered 3D glyphs.

## Start here

- [Iconoir](../sites/iconoir.md) — 1,671 MIT SVG icons (regular and solid) with packages for React, Vue, React Native, Flutter and Swift, plus Figma and Framer.
- [3dicons](../sites/3dicons.md) — 1,500+ CC0 rendered 3D icons with an online editor and a Figma plugin.
- [Animated Icons](../sites/animated-icons.md) — 4,000+ recolourable animated icons across business categories, usable commercially without attribution.

## All sources

- [3dicons](../sites/3dicons.md) — 3D icons for landing-page sections, empty states and dashboards; best between 32 and 256 px.
- [Animated Icons](../sites/animated-icons.md) — Lottie, SVG, PNG and GIF icons recoloured in the browser; free tier plus a one-time All-Access purchase.
- [Iconoir](../sites/iconoir.md) — one consistent outline set, customisable stroke and size, and tree-shakeable framework packages.
- [useAnimations](../sites/useanimations.md) — 87 Feather-style micro-animated icons (SVG + Lottie) and a React package; attribution required.

## Patterns worth reusing

- Let people set stroke weight, size and colour before download, so one set fits dense UIs and large hero art alike (Iconoir, Animated Icons, 3dicons).
- Set icon defaults once through a provider or context instead of repeating props on every icon (Iconoir).
- Publish one source to every major framework and to the design tool, and derive component names mechanically from kebab-case names (Iconoir).
- Animate two-state controls (menu/close, play/pause, like) forward and back instead of swapping two static icons (useAnimations).
- Let callers import each animated icon on its own, and offer a render prop so it sits inside the product's own accessible button (useAnimations).
- Ship a static fallback (SVG or PNG) next to every animation for email, docs and slides (Animated Icons).
- Organise a set by business domain as well as by UI function, so a whole feature grid can be filled from one category (Animated Icons).

## Pitfalls

- Licences vary widely: CC0 (3dicons), MIT (Iconoir), CC BY with extra no-resale rules and an MIT tag on npm (useAnimations), and a custom no-redistribution, no-scraping licence (Animated Icons). Read each one before shipping.
- None of these sets has an `llms.txt` or MCP server, so agents tend to guess icon names; have them check against the repo folders or package list instead.
- Headline counts mix variants and tiers: Iconoir's 1,671 includes solid variants, and Animated Icons' 4,000+ includes premium icons that only download as PNG without a purchase.
- Lottie-based icons pull in `lottie-web` at runtime, and a grid of animated icons playing at once can hurt performance and distract; honour `prefers-reduced-motion`.
- Pin CDN versions in production (Iconoir's docs load its CSS from `@main`).
- Distinctive styles such as 3D lose clarity at very small sizes and don't suit every product.

## Related topics

- [Assets](assets.md)
- [Motion](motion.md)
- [Components](components.md)
