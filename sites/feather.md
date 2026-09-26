---
title: Feather
description: The original 287-icon minimal stroke set that Lucide forked. MIT, still usable, but no new icons since 2022.
url: https://feathericons.com
type: icon-library
formats: icon library
topics: [icons, assets]
verdict: useful
agent: []
pricing: free
licence: Free. MIT licence
licence_class: open-source-permissive
reviewed: 2026-09-25
status: stale
note: "Frozen: no new icons since version 4.29.0 in March 2022; Lucide is the maintained fork."
related: [lucide, iconoir, tabler-icons, heroicons]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# Feather

## What it is

Feather is the minimal open-source icon set by Cole Bemis that set the look many later sets copied: 287 icons on a 24×24 grid with a 2px rounded stroke and nothing else. The site is a single page where you search, set size, stroke width and colour, then copy or download each icon or the whole set. The GitHub repository `feathericons/feather` dates from 2014 and has about 26,000 stars. The official `feather-icons` package still gets roughly 760,000 downloads a month, and the community `react-feather` package about 1.4 million.

## When to open it

Open Feather for small projects that need only common UI glyphs, for older codebases that already use it, or when you want the original of the style that Lucide continued. For anything new or growing, Lucide covers the same drawings plus many more and is actively maintained.

## Most useful

- **`feather.replace()`**: add the script from a CDN, mark elements with `data-feather="name"`, and it swaps them for inline SVGs; no build step
- **`feather.icons[name].toSvg()`**: get an SVG string with custom attributes, handy for templates and server rendering
- **SVG sprite** in the npm package for `<use>` references
- **Figma component library** that you duplicate into your drafts
- **Tiny, predictable set**: every icon follows the same stroke, cap and join rules, so mixing them never looks uneven

## Using it with agents

There is no llms.txt, MCP server or registry, and agents usually know the API already. The practical advice is to steer them away from Feather for new work: Lucide publishes a guide for moving from `react-feather` to `lucide-react`, and most Feather names carry over, some through aliases. If a project must stay on Feather, have the agent check names against the `icons` folder in the repository, since newer icon names learned from Lucide will not exist.

## Watch out for

- The set is effectively frozen. The last new icon (`table`) came in version 4.29.0 in March 2022, later releases were patches, and hundreds of issues and pull requests are open
- The site header shows v4.29.0 while npm is at 4.29.2
- `feather.replace()` scans the whole DOM when called, so it fits static pages better than apps that re-render often
- `react-feather` is a separate community package, not an official one
- The site shows a sponsor ad; it is not part of the icon set

## Reusable ideas

- Define a whole style with a handful of rules (grid, stroke, caps, joins) so anyone can match it
- Offer a no-build path (a data attribute plus one script) next to the npm package
- Put a live size, stroke and colour control above the grid so users preview their exact settings
- When a project slows down, point clearly to a maintained fork instead of letting users guess

## Related

[Lucide](lucide.md), [Iconoir](iconoir.md), [Tabler Icons](tabler-icons.md), [Heroicons](heroicons.md)
