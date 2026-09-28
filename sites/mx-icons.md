---
title: MX Icons
description: About 2,200 soft React icons in six styles labelled MIT; sources not credited.
url: https://mx-icons.vercel.app
type: icon-library
formats: React icon library
topics: [icons, assets]
verdict: niche
agent: []
pricing: free
licence: Free. MIT according to the repository and npm package. No source or design credits are given (see below)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [reicon, rune-icons, iconoir, icons0]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# MX Icons

## What it is

MX Icons is a React icon package by Manish Kumar (GitHub `ig-imanish/mx-icons`, about 180 stars, started November 2025). The site's title says 5,600+ icons. The npm package (`mx-icons` 1.1.1) actually exports 12,968 components at review: about 2,200 base glyphs, each in six styles named Linear, Outline, Bold, Broken, Bulk and Twotone. Components are named glyph plus style (`HomeSmileAngleLinear`) and take `size`, `color` and `className`. The preview site is a Vite and React single-page app with Umami analytics. The package gets about 4,300 downloads a month.

## When to open it

Open it if you want the rounded, soft look of Solar- or Iconsax-style icons in a React project with six weights to choose from, including broken and two-tone looks for illustrations and empty states. For production work, the source sets below are usually the safer choice.

## Most useful

- **Six styles per glyph**, from thin linear to solid bold, plus two-tone and bulk looks
- **Plain React components** with React 18 or 19 as the only peer dependency
- **Per-icon files** under `dist/components/<category>/`, so bundlers can drop unused icons
- **Browse and copy** on the preview site, grouped by category

## Using it with agents

There is no MCP, llms.txt or name list outside the package. An agent can read `dist/index.d.ts` after install to find valid component names; tell it to do that rather than guessing, because the names are long and follow the source sets' wording.

## Watch out for

- Provenance is unclear. About 1,225 of the base names match Solar Icons exactly (CC BY 4.0 by 480 Design, which requires attribution), and most of the rest match Iconsax names. The six style names and the default colour `#292D32` also follow Iconsax. MX Icons credits neither, so its MIT label may not be the whole story
- The default colour is a fixed dark grey rather than `currentColor`, and the npm description says "light mode only". Pass `color` yourself for dark themes
- The README describes outline, solid and 16px mini variants, which does not match the six styles actually shipped
- The npm tarball is about 53 MB unpacked with over 28,000 files, including the preview site's own build
- It is a one-person project with 31 versions and no release notes on the site

## Reusable ideas

- Name components glyph plus style so the style is explicit at every import
- Offer broken and two-tone styles alongside UI weights so one family covers illustrations too
- Group per-icon files by category folder to keep a very large package navigable
- Always credit the icon sets a library is built on, next to its own licence

## Related

[Reicon](reicon.md), [Rune Icons](rune-icons.md), [Iconoir](iconoir.md), [icons0](icons0.md)
