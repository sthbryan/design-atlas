---
title: css.gg
description: 704 icons drawn in pure CSS, also as SVG and TSX; relicensed in 2024 to personal non-commercial use, so pin MIT v2.1.1.
url: https://css.gg
type: icon-library
formats: icon library
topics: [icons, assets]
verdict: niche
agent: []
pricing: free
licence: Free to download, but not open source since version 2.1.2 (August 2024). The custom licence allows personal, non-commercial use with attribution only, bans derivative works, and needs written permission for commercial use. Versions up to 2.1.1 remain MIT
licence_class: mixed
reviewed: 2026-09-25
status: stale
note: Paused since the last commit and release in August 2024.
related: [bootstrap-icons, iconoir, iconify, eva-icons]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# css.gg

## What it is

css.gg is a set of 704 interface icons by the designer Astrit Malsija, known for drawing each glyph with plain CSS: one element, its borders and its `::before` and `::after` pseudo-elements, with no images or fonts. Every icon also exists as SVG, as TSX components and in a Figma file. The repository has about 10,000 stars and the `css.gg` npm package gets about 23,000 downloads a month. The same author runs glyf.app, a related collection of about 6,000 glyphs that the licence also covers.

## When to open it

Open it to study how far pure CSS drawing can go, or for a personal side project that wants tiny, themeable icons with no asset pipeline. For commercial or client work, use the MIT release 2.1.1 or pick another set.

## Most useful

- **Copy as CSS or SVG**: the site copies a single icon's CSS rule or SVG markup, and offers a ZIP of the set
- **Scale by variable**: each CSS icon reads a `--ggs` custom property, so `--ggs: 2` doubles it without touching the geometry
- **Colour from text**: icons are drawn with `currentColor` borders and backgrounds, so they follow the surrounding text colour
- **Raycast extension and Figma file**: search and copy icons without opening the site
- **Old MIT packages**: `css.gg@2.1.1` on npm still ships per-icon CSS, SCSS, SVG, PNG and TSX files

## Using it with agents

There is no llms.txt, MCP server or API. The icon CSS endpoints the old docs pointed to (`css.gg/<name>.css`) returned 404 at review. If you use it at all, pin `css.gg@2.1.1` and have the agent import only the CSS files it needs from `icons/css/`, since the newer packages dropped the CSS files and carry the restrictive licence. Tell the agent to check that licence before adding the package to any shipped product.

## Watch out for

- The licence change is easy to miss. npm shows only "SEE LICENSE", GitHub reports no standard licence, and Iconify still labels 2.1.4 as MIT
- The licence also forbids copying the library's "functionality" or design elements elsewhere, which is unusually broad
- The project looks paused: the last commit and release date from August 2024, and a Figma plugin announced then had not appeared at review
- CSS-drawn icons are fixed shapes built from boxes, so fine detail and optical balance are limited compared with path-based SVG sets
- The site is a JavaScript-only app and shows nothing without scripts

## Reusable ideas

- Draw simple UI glyphs from one element and two pseudo-elements when you want zero requests and full CSS control
- Scale a whole icon through one custom property instead of recalculating each dimension
- Let icons inherit `currentColor` so they theme with no extra rules
- If you ever change licence, make it visible in package metadata so downstream tools stay accurate

## Related

[Bootstrap Icons](bootstrap-icons.md), [Iconoir](iconoir.md), [Iconify](iconify.md), [Eva Icons](eva-icons.md)
