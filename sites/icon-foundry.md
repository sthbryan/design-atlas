---
title: Icon Foundry
description: Free search across about 49k icons from open sets plus logos; check each source's licence.
url: https://www.iconfoundry.store
type: tool
formats: icon search · Figma plugin
topics: [icons, assets]
verdict: niche
agent: []
pricing: free
licence: Free. Each icon keeps its source library's licence (mostly MIT, ISC, Apache 2.0 or CC0; Solar is CC BY 4.0). The tool's terms forbid scraping, mirroring or redistributing its aggregated data
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [iconify, icons0, iconoir, hugeicons]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# Icon Foundry

## What it is

Icon Foundry is a free browser-based icon search tool by Fresh Contrast, an independent design studio, which says it began as an internal tool. It gathers about 49,000 SVGs into one grid (the site's own counter reads 49,382). Open sets include Phosphor, Material Design Icons, Tabler, Remix, MingCute, Bootstrap Icons, Lucide, Iconoir, Ionicons, Solar, Mage, Heroicons and Simple Icons. It adds brand and product logos, North American sports team logos (NBA, NFL, NHL, MLB, MLS), more than 750 football club badges, and several thousand icons labelled as its own "Foundry" collections. You search, filter by category, resize the preview and copy an SVG, and a Figma plugin brings the same search into Figma.

## When to open it

Open it when you need one specific glyph and don't mind which open library it comes from. Seeing Phosphor, Tabler, Lucide and others side by side makes it quicker to find a close match for an existing style, or a rare icon that your main set lacks.

## Most useful

- **One search box over many sets**: results mix libraries, so near-equivalent glyphs are easy to compare
- **Copy with `currentColor`**: copied SVGs take on the surrounding text colour in code and in Figma
- **Size slider and dark mode**: check how an icon reads at small sizes and on dark backgrounds before copying
- **Saved icons**: signing in keeps a saved list synced to the cloud. Recent searches stay in the browser
- **Legal page**: a table of each library's author and licence, plus a trademark notice for logos

## Using it with agents

Not agent-ready. There is no API, npm package, llms.txt or MCP server, and the terms forbid scraping or mirroring the aggregated data. Use the site by hand to pick an icon, note its source library, and have the agent install that library's own package (for example `lucide-react` or `@tabler/icons-react`) instead of pasting loose SVGs.

## Watch out for

- The About page says every library is MIT, Apache 2.0 or CC0. The Legal page lists Lucide as ISC and Solar as CC BY 4.0, which requires attribution. Go by the Legal page and check each source
- No licence is given for the "Foundry" collections, and one source (Aliimam) says only "see repo". Ask before shipping those
- Team logos, club badges and brand marks are trademarks. The MIT licence on the source repositories covers the data, not the right to use the marks. Commercial use needs permission from the owners
- The privacy notice says there are no accounts or logins. The page nonetheless offers sign-up with Google, Apple or email for saved icons. It also runs Replay session-recording analytics, which the notice says can be switched off with Do Not Track
- Icon counts differ across the site (47,000+, 49k+ and 49,382)

## Reusable ideas

- Show one search across several icon families side by side, so people choose on shape rather than brand
- Keep a licence and attribution table next to the browser, not buried in a footer
- Copy SVGs with `currentColor` by default so pasted icons pick up the theme
- Separate open-source icons from trademarked logos, and warn about each differently

## Related

[Iconify](iconify.md), [icons0](icons0.md), [Iconoir](iconoir.md), [Hugeicons](hugeicons.md)
