---
title: Fffuel
description: About 65 free SVG generators for grainy gradients, blobs, noise and patterns, plus simple palette tools.
url: https://www.fffuel.co
type: tool
formats: tool · asset generators
topics: [assets, color]
verdict: useful
agent: []
pricing: free
licence: Free tools / generated images free for personal and commercial use, no redistribution (optional paid video course)
licence_class: proprietary-free
reviewed: 2026-09-25
status: active
related: [gradient-buttons, 3dicons, liquid-glass, huetone]
---
[← Atlas](../site/home.md) · Topics: [assets](../topics/assets.md), [color](../topics/color.md)

# Fffuel

## What it is

Fffuel (styled "fffuel") is a collection of about 65 free browser tools, most of them SVG generators whose names repeat their first letter: grainy gradients (gggrain), blobs (ssshape), noise (nnnoise), waves (sssurf), mesh-like gradients (uuunion), blurry shapes (bbblurry), confetti, doodles, isometric patterns and many more. A smaller colour group sits next to them: a HEX/RGB/HSL picker (cccolor), a palette generator built on colour categories such as pastel, earth, jewel and neon (pppalette), and a curated palette collection (hhhue). There are also helpers for converting SVG to PNG and encoding SVG as Base64, an SVG reference and a browser-support chart. It was built by Sébastien Noël; the footer now credits Sentry.io / Syntax.fm, and every page links to the Syntax podcast. The pages use Alpine.js, and the palette tools use chroma.js.

## When to open it

Open it when a landing page, hero, card or empty state needs a background, texture or decorative shape that feels custom, and you don't want to draw it or license stock art. The colour tools help with a quick starter palette or code conversion, not with a full design-system scale.

## Most useful

- **gggrain**: layered gradients with SVG noise for a grainy, analog look, with blend modes, angle and grain controls
- **ssshape, bbblurry and uuunion**: organic blobs, soft blurred background shapes and mesh-style gradients
- **nnnoise and tttexture**: noise and grunge textures you can lay over flat colour
- **Copy or save**: each generator can copy the SVG markup or download the file, with randomise buttons to explore variations
- **pppalette and hhhue**: palettes grouped by mood, with copy as HEX, RGB or HSL
- **rrrasterize and eeencode**: turn the SVG into PNG, or into a Base64 data URI for inline CSS backgrounds

## Using it with agents

There is no API, MCP server or llms.txt (`/llms.txt` returns 404), so an agent can't call the generators directly. Generate the art yourself, commit the SVG to the repo, and let the agent reference it as a background image or inline it. Since the output is plain SVG markup, an agent can also change the colours or size of a pasted file to fit your palette.

## Watch out for

- The licence covers the images, not the tools. Commercial use is allowed and attribution is optional, but you cannot resell, sublicense or redistribute the images, so don't ship them inside a template, icon pack or asset kit
- Filter-heavy SVGs such as grain and noise can be slow to render. The site itself suggests turning them into JPEG, WebP or AVIF when that matters
- The colour tools work in HEX, RGB and HSL only, with no OKLCH ramps or contrast checks
- The "Make an SVG App" video course is a paid product (listed at $24 when reviewed), separate from the free tools

## Reusable ideas

- Add subtle grain to flat gradients so large colour fields look less digital
- Give each small tool its own URL and short, playful name, and link them all from one index page
- Put an "about this generator" section under each tool that explains the SVG technique it uses
- Offer a one-click random option next to fine controls, so people can explore first and fine-tune later

## Related

[Gradient Buttons](gradient-buttons.md), [3dicons](3dicons.md), [Liquid Glass](liquid-glass.md), [Huetone](huetone.md)
