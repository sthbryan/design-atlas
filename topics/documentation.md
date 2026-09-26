---
title: Documentation
description: how sites document components and style, for humans and agents.
order: 10
---
[← Atlas](../README.md)

# Documentation

How sites document components, design systems and style — for human readers and increasingly for coding agents.

## Start here

- [The Component Gallery](../sites/component-gallery.md) — aggregates how 95 different design systems document the same components.
- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt` and an MCP registry published alongside human-facing docs.
- [DESIGN.md](../sites/designmd.md) — a whole design system distributed as a single markdown file.
- [Refero Styles](../sites/refero-styles.md) — real brand styles extracted into AI-readable `DESIGN.md` files.
- [Carbon Design System](../sites/carbon-design-system.md) — a large system documented well for both audiences: tabbed component pages for people and a clean `llms.txt` index for agents.

## All sources

<!-- atlas:sources:start -->
- [Anime.js](../sites/animejs.md) — a clear, well-documented API that agents can follow to generate complex animations.
- [Astryx](../sites/astryx.md) — a well-documented npm package with meta descriptions summarizing each component.
- [The Book of Shaders](../sites/book-of-shaders.md) — teaching docs done well: a live, editable example next to every concept and a glossary that sends each term back to its chapter; all rights reserved.
- [Carbon Design System](../sites/carbon-design-system.md) — usage, style, code and accessibility tabs on every component, pattern pages for whole flows, and an `llms.txt` that indexes every page and package.
- [The Component Gallery](../sites/component-gallery.md) — reference documentation comparing 60 components across 95 systems.
- [Design System Checklist](../sites/design-system-checklist.md) — a maintenance chapter on documentation, contribution and support that component lists usually skip; the item text lives in plain JS files in the repo.
- [DESIGN.md](../sites/designmd.md) — design systems distributed as single markdown files, with an MCP/CLI to browse them.
- [Design.md Store](../sites/designmd-store.md) — documents the Google DESIGN.md format itself: front matter fields, token references, standard sections and the lint/export CLI.
- [Devouring Details](../sites/devouring-details.md) — a paid interactive manual where each chapter comes with a downloadable React prototype and footage recorded from real components.
- [DialKit](../sites/dialkit.md) — a Human/Agent switch on its docs, where the agent view is a Markdown guide with purpose, workflow and install steps per framework.
- [Inclusive Components](../sites/inclusive-components.md) — long-form component docs that build the argument from the broken version up and end every post with a checklist.
- [Laws of UX](../sites/laws-of-ux.md) — one fixed structure per principle (definition, takeaways, examples, origins), with every page also served as markdown to agents.
- [Morphrig](../sites/morphrig.md) — an interactive manual on SVG icon morphing with scrubbable figures, measured browser findings and the whole text in `llms-full.txt`.
- [Refero Styles](../sites/refero-styles.md) — extracted brand design specs (palette, typography, spacing) as text.
- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt`, an MCP server, and a manual setup guide per framework.
- [shieldcn](../sites/shieldcn.md) — shadcn-styled README badges, star charts and headers, plus a README Studio that exports GitHub Markdown with light and dark image pairs.
- [UI Playbook](../sites/ui-playbook.md) — one MDX page per component under the same headings: purpose, states, responsive behaviour, best practices, traps and accessibility.
- [UIAble](../sites/uiable.md) — command-palette-searchable docs across components, blocks and templates.
<!-- atlas:sources:end -->

## Patterns worth reusing

- Publish an `llms.txt` or markdown index alongside human docs so agents can parse the catalog directly, without scraping HTML.
- Distribute an entire design system as one markdown file an agent can treat as source of truth for style.
- Tag each documented entry with badges (accessibility, code examples, unmaintained) for an at-a-glance trust signal.
- Link out to the original system's documentation instead of duplicating anatomy and guidance content.
- Serve component docs at predictable URLs (e.g. `/r/<name>.md`) so an agent can fetch exactly the page it needs.
- Offer a Human/Agent toggle on the docs: the agent view states purpose, workflow and install snippets in plain Markdown, with ready prompts next to it (DialKit).
- Document a spec format with best-practice pages on writing for AI, semantic token naming and versioning, not just a field reference (Design.md Store).
- Serve markdown from the same URLs through content negotiation (`Accept: text/markdown`) instead of keeping a separate agent docs site, and say in `llms.txt` when the resource fits and when it doesn't (Laws of UX).
- Document every component under the same headings so a missing state or accessibility note stands out (UI Playbook, Carbon Design System).
- Put a live, editable example or a scrubbable figure next to each concept, and publish the measurements behind any claim (The Book of Shaders, Morphrig).
- End each component page with a short checklist a reviewer can tick off (Inclusive Components).
- Export README images as light and dark `<picture>` pairs so they follow the reader's theme (shieldcn).

## Pitfalls

- Aggregators are only a gateway: detailed anatomy and guidance still live on the original system's site, not inline.
- Community-submitted documentation varies in freshness; some catalogued systems are explicitly flagged "unmaintained."
- No licence is stated for many community-submitted design systems — verify before using one on a commercial project.
- Terms can forbid automated retrieval even when robots.txt allows AI crawlers; read both before pointing an agent at a docs site (Design.md Store).
- Free to read is not free to reuse: The Book of Shaders reserves all rights, Laws of UX forbids derivatives and commercial use, and Morphrig states no licence at all.
- Good docs date too: UI Playbook was last pushed in January 2023 and Inclusive Components in 2018, so check examples against current standards.
- Some docs only render in the browser; point agents at the repo sources instead (Design System Checklist's `src/translations/en/*.js`, UI Playbook's MDX files).

## Related topics

- [Components](components.md)
- [Agents and prompts](agents-and-prompts.md)
- [Typography and styles](typography-and-styles.md)
- [DESIGN.md files](design-md.md)
- [UX patterns](ux-patterns.md)
