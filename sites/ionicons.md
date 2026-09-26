---
title: Ionicons
description: "Ionic's MIT icon set: about 1,357 SVGs in filled, outline and sharp variants, served by a lazy-loading ion-icon web component."
url: https://ionic.io/ionicons/
type: icon-library
formats: icon library · web component
topics: [icons, assets, components]
verdict: useful
agent: []
pricing: free
licence: Free. MIT licensed for personal and commercial use. The README notes that brand icons remain trademarks of their owners
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [bootstrap-icons, eva-icons, iconsax, iconify, iconoir]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [components](../topics/components.md)

# Ionicons

## What it is

Ionicons is the icon set made by Ionic (now part of OutSystems) for the Ionic Framework. It also works on its own in any web page. Version 8.1.0 (July 2026) ships 1,357 SVG files. Most app icons come in three variants (filled, `-outline` and `-sharp`), plus 94 `logo-` brand marks that have only one form. The site and README round this to 1,300 icons. Icons are delivered through `<ion-icon>`, a Stencil-built web component. The `ionicons` npm package gets about 2.6 million downloads a month, largely because Ionic apps pull it in.

## When to open it

Open it for hybrid or PWA apps that should feel native on both iOS and Android, or when you want one framework-free icon tag that works in React, Vue, Angular or plain HTML. The outline and sharp variants map neatly onto iOS and Material conventions.

## Most useful

- **Lazy web component**: `<ion-icon name="heart">` fetches only icons that are actually shown, and skips ones below the fold
- **Three variants by name suffix**: `heart`, `heart-outline`, `heart-sharp`
- **Per-platform icons**: inside Ionic, `ios` and `md` attributes pick a different icon per platform
- **Stroke control**: the `--ionicon-stroke-width` custom property thins or thickens outline icons
- **Bundled imports**: `addIcons()` with named imports from `ionicons/icons` registers only what you use, and `setAssetPath()` serves the SVGs yourself
- **Designer pack**: a ZIP of all SVGs linked from the site header

## Using it with agents

No llms.txt or MCP server is published, but the API is small. Tell the agent to use `<ion-icon>` with an `aria-label` or `aria-hidden`, which the docs have required since v7. Have it check names against `dist/svg/` in the installed package. In a bundled app, ask it to register icons with `addIcons()` instead of relying on CDN fetches. Pin the loader version in any `esm.sh` or CDN script.

## Watch out for

- The usage page's CDN snippet rendered as `ionicons@undefined` at review. Copy the versioned loader from the GitHub README instead
- New glyphs arrive rarely. Recent releases are mostly build and component fixes, and 8.1.0 mainly added font icon support to `ion-icon`
- The component loads SVGs at runtime by default, so strict CSP rules or offline builds need a local asset path
- Major versions have renamed and removed icons (see the 5.0 notes), so check names when upgrading
- Logo icons have no outline or sharp form, so a row of mixed logos and UI icons may not match

## Reusable ideas

- Encode style variants as a name suffix so switching style means changing one string
- Lazy-load icons by visibility instead of shipping the whole set in the bundle
- Expose stroke width as a CSS custom property so outline icons can match nearby text weight
- Let one component pick a platform-specific glyph through attributes

## Related

[Bootstrap Icons](bootstrap-icons.md), [Eva Icons](eva-icons.md), [Iconsax](iconsax.md), [Iconify](iconify.md), [Iconoir](iconoir.md)
