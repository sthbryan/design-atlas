---
title: Remix Icon
description: About 3,230 line-and-fill system icons with an official MCP server, under a custom free licence since January 2026.
url: https://remixicon.com
type: icon-library
formats: icon library
topics: [icons, assets, components]
verdict: useful
agent: [mcp]
pricing: free
licence: Free for personal and commercial projects. Since version 4.9.0 (January 2026) it uses its own Remix Icon License v1.0 instead of Apache 2.0. The new licence bans selling the icons as a pack, building a competing icon library from them, and using them as a logo or brand mark. Attribution is optional
licence_class: source-available
reviewed: 2026-09-25
status: active
related: [phosphor, hugeicons, iconify, simple-icons, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [components](../topics/components.md)

# Remix Icon

## What it is

Remix Icon is a neutral-style system icon set from Remix Design, maintained since 2018. Version 4.9.1 (29 January 2026) holds about 3,230 icons at review, each in an outlined (`-line`) and a filled (`-fill`) version on a 24×24 grid. They are grouped into categories that include a growing set of AI-product glyphs and brand logos. The website is a JavaScript app for search, preview and copying SVG or PNG. The GitHub repository `Remix-Design/RemixIcon` has about 8,400 stars, and `@remixicon/react` was downloaded about 3.2 million times in the month before review.

## When to open it

Open Remix Icon when you need a paired outline-and-fill set for app UI, for example outline icons in navigation that switch to filled when active. The strong coverage of AI-related concepts (agents, generation, copilots, model brands) makes it handy for AI product interfaces.

## Most useful

- **Line and fill pairs** for every icon, named so switching state is a suffix change
- **`remixicon` npm package and CDN**: web font CSS with `ri-*` classes, an SVG sprite and raw SVGs, with version-pinned jsDelivr links
- **`@remixicon/react` and `@remixicon/vue`** components such as `RiHeartFill`
- **Official Figma plugin**, plus copy-as-SVG that pastes into Figma, Sketch, Illustrator and Affinity
- **`tags.json`** with search keywords in English and Chinese, open to community fixes

## Using it with agents

Remix Icon has an official MCP server, `remixicon-mcp` (MIT, in the Remix Design organisation). Run it with `npx -y remixicon-mcp` and it takes up to 20 short keywords and returns the five best-matching icon names from a local index, with a hint to pick one. The shadcn CLI also accepts `remixicon` as its `iconLibrary`. Ask the agent to search through the MCP or `tags.json` rather than guessing names, and to keep the line and fill suffixes consistent.

## Watch out for

- Licence change: releases up to 4.8.0 were Apache 2.0, while 4.9.0 and later use the custom licence. The `remixicon` package's `license` field still said Apache-2.0 at 4.9.1 even though the repository licence changed, so check the licence file, not the npm badge
- The new licence rules out icon marketplaces, "extended" paid packs, and using an icon (even modified) as an app icon or logo. Check those cases before reuse
- Brand icons may only stand for their own brand and remain their owners' trademarks
- The MCP server is small (fewer than 300 npm downloads in the month before review) and matches keywords, not full sentences
- The site needs JavaScript and has no llms.txt

## Reusable ideas

- Ship every icon as a line and fill pair so selected states need no extra design work
- Keep search keywords in a plain JSON file that users can improve through pull requests
- Offer a small MCP server that turns keywords into exact icon names, so agents stop inventing them
- Spell out allowed and prohibited uses with concrete examples in the licence itself

## Related

[Phosphor](phosphor.md), [Hugeicons](hugeicons.md), [Iconify](iconify.md), [Simple Icons](simple-icons.md), [shadcn/ui](shadcn-ui.md)
