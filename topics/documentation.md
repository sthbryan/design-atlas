[← Atlas](../README.md)

# Documentation

How sites document components, design systems and style — for human readers and increasingly for coding agents.

## Start here

- [The Component Gallery](../sites/component-gallery.md) — aggregates how 95 different design systems document the same components.
- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt` and an MCP registry published alongside human-facing docs.
- [DESIGN.md](../sites/designmd.md) — a whole design system distributed as a single markdown file.
- [Refero Styles](../sites/refero-styles.md) — real brand styles extracted into AI-readable `DESIGN.md` files.

## All sources

- [Anime.js](../sites/animejs.md) — a clear, well-documented API that agents can follow to generate complex animations.
- [Astryx](../sites/astryx.md) — a well-documented npm package with meta descriptions summarizing each component.
- [The Component Gallery](../sites/component-gallery.md) — reference documentation comparing 60 components across 95 systems.
- [DESIGN.md](../sites/designmd.md) — design systems distributed as single markdown files, with an MCP/CLI to browse them.
- [Design.md Store](../sites/designmd-store.md) — documents the Google DESIGN.md format itself: front matter fields, token references, standard sections and the lint/export CLI.
- [DialKit](../sites/dialkit.md) — a Human/Agent switch on its docs, where the agent view is a Markdown guide with purpose, workflow and install steps per framework.
- [Refero Styles](../sites/refero-styles.md) — extracted brand design specs (palette, typography, spacing) as text.
- [shadcn/ui](../sites/shadcn-ui.md) — `llms.txt`, an MCP server, and a manual setup guide per framework.
- [UIAble](../sites/uiable.md) — command-palette-searchable docs across components, blocks and templates.

## Patterns worth reusing

- Publish an `llms.txt` or markdown index alongside human docs so agents can parse the catalog directly, without scraping HTML.
- Distribute an entire design system as one markdown file an agent can treat as source of truth for style.
- Tag each documented entry with badges (accessibility, code examples, unmaintained) for an at-a-glance trust signal.
- Link out to the original system's documentation instead of duplicating anatomy and guidance content.
- Serve component docs at predictable URLs (e.g. `/r/<name>.md`) so an agent can fetch exactly the page it needs.
- Offer a Human/Agent toggle on the docs: the agent view states purpose, workflow and install snippets in plain Markdown, with ready prompts next to it (DialKit).
- Document a spec format with best-practice pages on writing for AI, semantic token naming and versioning, not just a field reference (Design.md Store).

## Pitfalls

- Aggregators are only a gateway: detailed anatomy and guidance still live on the original system's site, not inline.
- Community-submitted documentation varies in freshness; some catalogued systems are explicitly flagged "unmaintained."
- No licence is stated for many community-submitted design systems — verify before using one on a commercial project.
- Terms can forbid automated retrieval even when robots.txt allows AI crawlers; read both before pointing an agent at a docs site (Design.md Store).

## Related topics

- [Components](components.md)
- [Agents and prompts](agents-and-prompts.md)
- [Typography and styles](typography-and-styles.md)
- [DESIGN.md files](design-md.md)
