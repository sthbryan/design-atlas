---
title: Icônes
description: Instant offline-search icon explorer over Iconify's sets, with an icon-font packer, SVG download and copy-ready usage snippets.
url: https://icones.js.org
type: tool
formats: icon explorer · local fuzzy search · icon-font packing · SVG download · copy usage snippets
topics: [icons, assets]
verdict: useful
agent: []
pricing: free
licence: The explorer is MIT licensed (Anthony Fu, 2020) and free. The icons it browses come from Iconify's collections, so each set keeps its own licence, which ranges from MIT and CC0 to CC BY and GPL
licence_class: mixed
reviewed: 2026-11-02
status: active
related: [iconify, icons0, icon-foundry, tabler-icons]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)


# Icônes

## What it is

Icônes is the icon browser Anthony Fu built over Iconify's collection data: a Vite and Vue 3 app, MIT licensed, that loads the sets locally and searches them with fuzzy matching as you type. It began as a way to make browsing several hundred thousand icons tolerable, and it remains one of the fastest routes from "I need a bell" to a file on disk. The feature that sets it apart is the Bag: collect icons across sets and pack them into an icon font, the workflow that grew into `svg-packer`. It also copies usage snippets, downloads SVGs, bookmarks collections, filters by category and ships a dark mode. A third-party VS Code extension brings the same search into the editor.

## When to open it

Open it when you are choosing icons in the browser and want to search every set at once, without an account, and when you need a small icon font built from a mixed selection. It is also the quickest way to copy a correct component snippet for the set you picked.

## Most useful

- **Local fuzzy search**: no network round trip per keystroke, so filtering by concept rather than by exact name works.
- **The Bag**: gather icons from different families and export an icon font or sprite instead of ten separate packages.
- **Copy snippets** in the syntax for the target framework, which avoids hand-writing import paths.
- **Direct SVG download** when a file is what you need, not a dependency.
- **Collection bookmarks and category filters** help you stay inside one set once you have chosen a family.

## Using it with agents

No `llms.txt`, MCP server or API is published at review; the search happens in the browser and there is no headless route. The underlying Iconify API does have a keyless search and SVG endpoint, so an agent should go there instead of trying to read this app, which renders almost nothing without JavaScript. The repository on GitHub is the public, MIT-licensed artefact.

## Watch out for

- It is a front end over Iconify, so licences vary set by set: attribution, GPL and non-commercial sets all appear. Check the set, not the app.
- The app is small and personal, so features move at the maintainer's pace and there is no support channel.
- Search covers names and keywords, not visual similarity; you still need to look at the results.
- The icon-font route needs a compatible rendering workflow; variable-width icons in a font can shift baseline and spacing.
- It is not a source of new icons. Nothing here is drawn by the project.

## Reusable ideas

- Ship the icon data with the app and search in memory, so filtering feels instant.
- Let people collect across families in a bag, then export once.
- Give a copy button per framework rather than one generic SVG string.
- Keep a small, MIT-licensed viewer separate from the data it browses, so the licence question stays clean.

## Related

[Iconify](iconify.md), [icons0](icons0.md), [Icon Foundry](icon-foundry.md), [Tabler Icons](tabler-icons.md)
