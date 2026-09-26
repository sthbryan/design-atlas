---
title: Icons.download
description: 275 hand-drawn UI icons in 16 styles (weight, fill, corner), free SVG and Figma.
url: https://icons.download
type: icon-library
formats: icon library
topics: [icons, assets]
verdict: niche
agent: []
pricing: free
licence: "Free / custom licence: personal and commercial use, changes allowed, no attribution needed. You may not resell or redistribute the icons as a standalone library or competing service"
licence_class: proprietary-free
reviewed: 2026-09-25
status: active
related: [iconoir, hugeicons, icon-foundry, 3dicons]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# Icons.download

## What it is

Icons.download is a small hand-drawn icon family by designer Vitaly Belousov. The site counts 275 icons, each drawn in 16 styles: four stroke weights (thin, regular, medium, bold), outline or solid fill, and rounded or sharp corners. Icons sit on a 24×24 grid and are grouped into 13 categories, including arrows, commerce, communication, content, date and time, design, devices, files, interface, multimedia, navigation and system. The site is a single page: pick a style with three toggles, search, then copy or download an SVG. A free Figma community file ("Free Universal Icons") holds the same set.

## When to open it

Open it for a compact, consistent set of everyday UI glyphs when you want to tune the look (lighter or heavier, soft or crisp) instead of taking a library's single default. It suits marketing sites, small apps and prototypes that need a few dozen icons, not thousands.

## Most useful

- **Three-axis style switcher**: weight, fill and corner change together across the whole grid, so you can compare the same icon in every style before choosing
- **Copy or download per icon**: one click puts the SVG on the clipboard or saves the file
- **Figma file**: the same styles as components for designers, so design and code use one source
- **Plain licence page**: a short list of what is and isn't allowed, with attribution welcome but not required

## Using it with agents

Not agent-ready. There is no npm package, API, llms.txt or bulk ZIP. The simplest route is to choose the icons and style yourself, save the SVGs into the project's icon folder, then ask the agent to wrap them in components and swap the hard-coded colour for `currentColor`. The site serves files from predictable static paths, but these are not documented and may change, so don't build on them.

## Watch out for

- The exported SVGs are outlined shapes filled with a hard-coded `black`, not live strokes. Stroke width can't be changed in CSS, and colour needs `fill="currentColor"` before theming or dark mode works
- The set is small. Check it covers every glyph the product needs before committing, because gaps mean mixing in another family
- The count is approximate: the page says 275, while the site's own icon list held 274 entries when reviewed
- There is no version history or changelog, so keep your own copies rather than hot-linking
- The licence is custom, not an open-source licence. Packaging the icons into your own icon set or icon site is not allowed

## Reusable ideas

- Give an icon family independent axes (weight, fill, corner) so one set covers several brand moods
- Put the style controls above the grid and apply them to every icon at once, so comparisons are instant
- Write the licence as three short lists: allowed, not required, not allowed
- Ship the Figma file and the SVGs from the same master so they never drift apart

## Related

[Iconoir](iconoir.md), [Hugeicons](hugeicons.md), [Icon Foundry](icon-foundry.md), [3dicons](3dicons.md)
