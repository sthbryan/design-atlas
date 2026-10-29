---
title: Rune Icons
description: 223 Apache-2.0 glyphs, each in up to five styles including pixelated and glass, editable in the browser.
url: https://www.runeicons.com/
type: icon-library
formats: icon library · in-browser icon editor
topics: [icons, assets]
verdict: niche
agent: [mcp, llms-txt]
pricing: free
licence: Free. The icons are Apache 2.0 with no attribution required. The website code (landing page, components, animations, editor) is Apache 2.0 plus an attribution clause and the Commons Clause
licence_class: mixed
reviewed: 2026-10-29
status: active
note: The site moved off runeiconsnex.vercel.app, which now returns 404, and runeicons.com resolves. The repository moved to the Runeicons organisation.
related: [reicon, mx-icons, iconoir, animated-icons]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# Rune Icons

## What it is

Rune Icons is a small open-source UI icon set from a three-person team (Vansh, Abhinav and Mohit), on GitHub as `Runeicons/runeicons` (about 714 stars, started February 2026, last push 11 October 2026). Each glyph is drawn on a 24×24 grid in up to five styles: outline, duotone, fill, pixelated and glass. The site's own llms.txt counts 223 distinct glyphs and 919 files across styles: outline 221, duotone 218, pixelated 215, glass 136 and fill 129. The "900+ icons" headline counts files, not glyphs. The site is built with Next.js 16, React 19 and Tailwind CSS v4.

## When to open it

Open it when a landing page or small product wants one icon drawn in several moods, such as outline in the navigation, glass on a hero card and pixelated for a retro accent. It suits marketing pages and side projects more than a full app, because the vocabulary is small.

## Most useful

- **Five styles of the same glyph**: switch between them without changing the icon's shape or meaning
- **Path editor**: drag anchor points on a glyph in the browser and copy the reshaped result
- **Copy as SVG or JSX**: outline icons use `currentColor`, so pasted icons take the surrounding text colour
- **Tuning controls**: stroke, size, colour, gradient and motion before you copy
- **Categories**: 16, from navigation and commerce to weather and dev

## Using it with agents

The llms.txt explains the counts, both licences, the copy workflow and the published packages. At review npm held version 0.1.0 of `runeicons` (raw SVG data and a `buildSvg` helper), component packages for React, Vue, Svelte, Astro and React Native, `runeicons-brands` for third-party logos, and `runeicons-mcp`, an MCP server run with `npx -y runeicons-mcp`. Flutter, the VS Code extension and the Figma plugin were still unpublished. Without a package, paste an SVG or JSX snippet from the site, or have the agent read the SVG files in the repository's `public/` style folders.

## Watch out for

- The earlier deployment, `runeiconsnex.vercel.app`, now returns 404; `runeicons.com` serves the site and is the address every package and the llms.txt point to
- The packages are version 0.1.0 and young, and the brand logos in `runeicons-brands` are third-party trademarks outside the Apache 2.0 licence
- Not every glyph has every style: fill covers barely more than half the set, glass about 60%
- Reusing the site's landing page, components or animations needs a visible credit link and bans resale. Only the icons themselves are attribution-free

## Reusable ideas

- Draw one glyph in several finishes so a product can switch mood without switching icon sets
- Let people edit vector anchors on the page before export instead of sending them to Figma
- Publish per-style counts honestly in llms.txt so agents know which styles are complete
- Use separate licences for the assets and for the showcase site that presents them

## Related

[Reicon](reicon.md), [MX Icons](mx-icons.md), [Iconoir](iconoir.md), [Animated Icons](animated-icons.md)
