---
title: Icons
description: outline, animated and 3D icon sets, and how to hand them to an agent.
order: 17
---
[← Atlas](../README.md)

# Icons

Icon sets for interfaces and marketing pages, from outline SVG systems to animated Lottie icons and rendered 3D glyphs.

## Start here

- [Iconoir](../sites/iconoir.md) — 1,671 MIT SVG icons (regular and solid) with packages for React, Vue, React Native, Flutter and Swift, plus Figma and Framer.
- [3dicons](../sites/3dicons.md) — 1,500+ CC0 rendered 3D icons with an online editor and a Figma plugin.
- [Animated Icons](../sites/animated-icons.md) — 4,000+ recolourable animated icons across business categories, usable commercially without attribution.
- [icons0](../sites/icons0.md) — the agent-friendly way to find a real icon: search across Iconify sets by meaning, filter by licence, and fetch over MCP or the shadcn CLI.
- [Carbon Design System](../sites/carbon-design-system.md) — one of the largest permissive sets, with 2,775 icons and 1,576 pictograms under Apache-2.0.

## All sources

<!-- atlas:sources:start -->
- [3dicons](../sites/3dicons.md) — 1,500+ CC0 rendered 3D icons with an online editor and a Figma plugin.
- [Animated Icons](../sites/animated-icons.md) — 4,000+ recolourable Lottie/SVG/GIF icons; free tier plus one-time All-Access, no attribution needed.
- [Carbon Design System](../sites/carbon-design-system.md) — IBM's Apache-2.0 system: about 50 components, 2,775 icons and 1,576 pictograms, llms.txt, and an IBMid-gated MCP.
- [design-mobile-apps (Sleek)](../sites/design-mobile-apps.md) — REST client for Sleek's paid mobile-screen generator, with handoff to HTML, React Native or SwiftUI.
- [Heroicons Animated](../sites/heroicons-animated.md) — 316 Heroicons outline icons with hover animations built on Motion, via shadcn registry, npm and llms.txt.
- [Hugeicons](../sites/hugeicons.md) — 60k+ icons in 10 styles; MIT free tier, paid per-seat Pro, official MCP and agent skill.
- [Icon Foundry](../sites/icon-foundry.md) — Free search across about 49k icons from open sets plus logos; check each source's licence.
- [Iconify](../sites/iconify.md) — One naming scheme, API and toolchain over 200+ open icon sets and about 300k+ icons.
- [Iconoir](../sites/iconoir.md) — 1,671 MIT SVG icons (regular + solid) with React, Vue, React Native, Flutter, Swift, CSS, Figma and Framer.
- [Icons.download](../sites/icons-download.md) — 275 hand-drawn UI icons in 16 styles (weight, fill, corner), free SVG and Figma.
- [icons0](../sites/icons0.md) — Hybrid search over roughly 200k Iconify icons with a licence filter, a shadcn registry and a token-gated MCP.
- [Lucide Animated](../sites/lucide-animated.md) — 467 hover-animated Lucide icons with shadcn registry, llms.txt, skill.md and a hosted MCP endpoint.
- [morphicons](../sites/morphicons.md) — Tiny zero-dependency library that morphs any stroke icon into another using interruptible springs.
- [Morphrig](../sites/morphrig.md) — Interactive manual on how SVG icon morphing works, with measured browser findings and llms-full.txt.
- [Shadcn Labs Skills](../sites/shadcn-skills.md) — Six MIT skills: launch a shadcn registry, generate, audit and extend SVG icon sets, Tailwind-to-StyleX.
- [useAnimations](../sites/useanimations.md) — 87 free micro-animated icons (SVG + Lottie) and a React package; attribution required, licence inconsistent.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Let people set stroke weight, size and colour before download, so one set fits dense UIs and large hero art alike (Iconoir, Animated Icons, 3dicons).
- Set icon defaults once through a provider or context instead of repeating props on every icon (Iconoir).
- Publish one source to every major framework and to the design tool, and derive component names mechanically from kebab-case names (Iconoir).
- Animate two-state controls (menu/close, play/pause, like) forward and back instead of swapping two static icons (useAnimations).
- Let callers import each animated icon on its own, and offer a render prop so it sits inside the product's own accessible button (useAnimations).
- Ship a static fallback (SVG or PNG) next to every animation for email, docs and slides (Animated Icons).
- Organise a set by business domain as well as by UI function, so a whole feature grid can be filled from one category (Animated Icons).
- Combine keyword and semantic search so both "cog" and "preferences" find the settings icon, and serve single icons as registry items so a project only gets what it uses (icons0).
- Ship icons, pictograms and tokens as separate packages so products take only what they need (Carbon Design System).
- For icon morphs, author the stroke-to-stroke pairing once as data, check at build time whether a pair is worth morphing, and fall back to a crossfade when it isn't (Morphrig).

## Pitfalls

- Licences vary widely: CC0 (3dicons), MIT (Iconoir), Apache-2.0 without trademark rights (Carbon Design System), CC BY with extra no-resale rules and an MIT tag on npm (useAnimations), a custom no-redistribution, no-scraping licence (Animated Icons), and a different licence per collection, some attribution or copyleft (icons0). Read each one before shipping.
- Agents tend to guess icon names. icons0's MCP (which needs an API key) and Carbon's `llms.txt` help; for the other sets, have the agent check the repo folders or package list. Names also change: icons0's own README example `lucide:home` fails because Lucide renamed it `house`, so search before fetching.
- Installing a whole collection through icons0 writes one component file per icon, which can mean thousands of files.
- Morphing is fragile across browsers: according to Morphrig, Safari 26.3 can't animate an SVG path's `d` with CSS or WAAPI, and the compiler the manual describes isn't released.
- Headline counts mix variants and tiers: Iconoir's 1,671 includes solid variants, and Animated Icons' 4,000+ includes premium icons that only download as PNG without a purchase.
- Lottie-based icons pull in `lottie-web` at runtime, and a grid of animated icons playing at once can hurt performance and distract; honour `prefers-reduced-motion`.
- Pin CDN versions in production (Iconoir's docs load its CSS from `@main`).
- Distinctive styles such as 3D lose clarity at very small sizes and don't suit every product.

## Related topics

- [Assets](assets.md)
- [Motion](motion.md)
- [Components](components.md)
- [Agents and prompts](agents-and-prompts.md)
