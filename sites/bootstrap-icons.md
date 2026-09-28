---
title: Bootstrap Icons
description: Bootstrap's official MIT set of 2,078 icons on a 16px grid, delivered as SVG, sprite, icon font, npm, Composer and Figma.
url: https://icons.getbootstrap.com
type: icon-library
formats: icon library
topics: [icons, assets]
verdict: very-useful
agent: []
pricing: free
licence: Free. MIT licensed, with no paid tier or sign-up. Brand logos in the set remain their owners' trademarks
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [ionicons, boxicons, iconoir, iconify, simple-icons]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md)

# Bootstrap Icons

## What it is

Bootstrap Icons is the official icon set of the Bootstrap project, designed mainly by Mark Otto (@mdo) and kept in the `twbs/icons` repository (about 8,100 stars at review). Release 1.13.1 holds 2,078 icons, 705 of them `-fill` variants of an outline glyph. Every icon is drawn on a 16×16 grid as a flattened filled path, and uses `currentColor`. The npm package `bootstrap-icons` gets about 2.7 million downloads a month. It works with or without the Bootstrap CSS framework.

## When to open it

Open it for admin panels, dashboards and server-rendered apps where a small, dense 16px icon reads better than a 24px stroke set. It is the natural pick on any Bootstrap project, and a safe MIT default when you want an icon font or a sprite rather than framework components.

## Most useful

- **Several ways to ship**: inline SVG, `<img>` files, one SVG sprite used through `<use>`, or an icon font with `bi bi-<name>` classes
- **Pinned CDN stylesheet**: a versioned jsDelivr link loads the whole icon font with one `<link>`
- **Other channels**: Composer (`twbs/bootstrap-icons`), a Figma community file, and a ZIP of SVGs and fonts on GitHub releases
- **Per-icon pages**: each icon has its own page with tags, category and copyable markup
- **Accessibility notes**: the docs show when to use `aria-hidden` and when to give a text label

## Using it with agents

There is no llms.txt, MCP server or official framework component package. Names are plain kebab-case (`arrow-right-circle`, `arrow-right-circle-fill`), so an agent can check them against the `icons/` folder of the installed package or the list on the homepage. For a no-build page, tell it to use the pinned CDN font and `bi-` classes. For React, the community `react-bootstrap-icons` package wraps the same SVGs, but it is not maintained by the Bootstrap team.

## Watch out for

- Releases are slow: 1.13.1 shipped in May 2025 and was still the latest at review, even though the repository is active
- The homepage banner still advertises the 1.11.0 icons, so the headline does not match the current version
- The 16px grid and filled construction look heavier than 24px stroke sets. Mixing them in one interface looks uneven
- The set includes company logos (Apple, Amazon, Android and others). The MIT licence covers the files, not the right to use a trademark
- The docs note that the SVG sprite does not work across domains in Chrome, so host it on the same origin as the page

## Reusable ideas

- Pair every outline glyph with a `-fill` twin so a selected or active state is just a name suffix
- Publish the same source as SVG files, a sprite and a font, and let each project choose
- Give each icon a permanent page with tags so search engines and people find it by meaning
- Keep one small grid for dense UI instead of scaling a large-grid icon down

## Related

[Ionicons](ionicons.md), [Boxicons](boxicons.md), [Iconoir](iconoir.md), [Iconify](iconify.md), [Simple Icons](simple-icons.md)
