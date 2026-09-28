---
title: Rune Icons
description: 220 Apache-2.0 glyphs, each in up to five styles including pixelated and glass, editable in the browser.
url: https://runeiconsnex.vercel.app
type: icon-library
formats: icon library · in-browser icon editor
topics: [icons, assets]
verdict: niche
agent: [llms-txt]
pricing: free
licence: Free. The icons are Apache 2.0 with no attribution required. The website code (landing page, components, animations, editor) is Apache 2.0 plus an attribution clause and the Commons Clause
licence_class: mixed
reviewed: 2026-09-25
status: active
note: The advertised domain, runeicons.com, had no DNS record at review.
related: [reicon, mx-icons, iconoir, animated-icons]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# Rune Icons

## What it is

Rune Icons is a small open-source UI icon set from Nexvyn, a three-person team (Vansh, Abhinav and Mohit), on GitHub as `Nexvyn/runeicons` (about 520 stars, started February 2026, updated daily at review). Each glyph is drawn on a 24×24 grid in up to five styles: outline, duotone, fill, pixelated and glass. The site's own llms.txt counts 220 distinct glyphs and 913 files across styles: outline 220, duotone 216, pixelated 215, glass 135 and fill 127. The "900+ icons" headline counts files, not glyphs. The site is built with Next.js 16, React 19 and Tailwind CSS v4.

## When to open it

Open it when a landing page or small product wants one icon drawn in several moods, such as outline in the navigation, glass on a hero card and pixelated for a retro accent. It suits marketing pages and side projects more than a full app, because the vocabulary is small.

## Most useful

- **Five styles of the same glyph**: switch between them without changing the icon's shape or meaning
- **Path editor**: drag anchor points on a glyph in the browser and copy the reshaped result
- **Copy as SVG or JSX**: outline icons use `currentColor`, so pasted icons take the surrounding text colour
- **Tuning controls**: stroke, size, colour, gradient and motion before you copy
- **Categories**: 16, from navigation and commerce to weather and dev

## Using it with agents

The llms.txt explains the counts, licences and copy workflow, and tells models not to suggest `npm install`, because nothing is on npm yet. So give the agent a pasted SVG or JSX snippet from the site, or have it read the SVG files in the repository's `public/` style folders. The repo also holds unpublished packages for React, Vue, Svelte, Astro, React Native, Flutter, a Figma plugin, a VS Code extension and an MCP server (`runeicons-mcp`). None of them was on the npm registry at review.

## Watch out for

- The canonical domain `runeicons.com` did not resolve at review, although the Vercel deployment worked. Links in the llms.txt and README point to the dead domain
- The homepage FAQ mentions tree-shakeable React and Vue components, which contradicts the llms.txt; only copy-paste works today
- Not every glyph has every style: fill covers barely more than half the set, glass about 60%
- Reusing the site's landing page, components or animations needs a visible credit link and bans resale. Only the icons themselves are attribution-free

## Reusable ideas

- Draw one glyph in several finishes so a product can switch mood without switching icon sets
- Let people edit vector anchors on the page before export instead of sending them to Figma
- Publish per-style counts honestly in llms.txt so agents know which styles are complete
- Use separate licences for the assets and for the showcase site that presents them

## Related

[Reicon](reicon.md), [MX Icons](mx-icons.md), [Iconoir](iconoir.md), [Animated Icons](animated-icons.md)
