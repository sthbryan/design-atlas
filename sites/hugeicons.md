---
title: Hugeicons
description: 60k+ icons in 10 styles; MIT free tier, paid per-seat Pro, official MCP and agent skill.
url: https://hugeicons.com
type: icon-library
formats: icon library · MCP server · agent skill
topics: [icons, assets, agents-and-prompts]
verdict: very-useful
agent: [mcp, skill]
pricing: freemium
licence: Freemium. The 6,000+ free Stroke Rounded icons are MIT. Pro is $99 a year per seat or $1,197 one-time per seat (Pro Plus), under a proprietary per-seat licence with pageview and bandwidth quotas
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [iconify, icons-download, iconoir, icons0, morphicons]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Hugeicons

## What it is

Hugeicons is a large commercial icon family made by Masum Parvej's studio Halal Lab. It is sold by HLAB UX WEB DESIGN CO LLC, registered in the UAE. According to the site, it holds more than 60,000 icons in 10 styles and 59 categories, all on a 24×24 grid. The styles are stroke, solid, bulk, duotone and twotone families in rounded, standard and sharp versions. A free tier of 6,000+ Stroke Rounded icons is MIT licensed and published on npm as `@hugeicons/core-free-icons`, which gets about 3.6 million downloads a month. Framework packages are thin renderers (`HugeiconsIcon`) that take icon data from the free package or from private Pro packages (`@hugeicons-pro/core-*`).

## When to open it

Open it when a product needs one visual language across a very wide range of subjects, or several matching styles (for example stroke for navigation and bulk or duotone for feature highlights). The free tier alone is a solid MIT alternative to Lucide or Tabler if rounded strokes suit your brand.

## Most useful

- **Many platforms**: renderers for React, React Native, Vue, Angular, Svelte and SolidJS, plus Flutter, Swift, WordPress, Webflow, Framer and VS Code
- **CDN icon fonts and a font generator**: build a font from just the icons a project uses
- **Figma plugin and files**: search and swap icons inside Figma; Pro adds source files, ZIP and IconJar downloads
- **Migration CLI**: `npx @hugeicons/migrate` scans React code that uses Lucide, Font Awesome, Heroicons, Feather, Tabler or Phosphor, previews a mapping to Hugeicons, and keeps a backup so you can roll back
- **Multicolour styles**: bulk, duotone and twotone icons accept separate colours in Pro

## Using it with agents

Hugeicons supports agents directly. The official MCP server runs locally (`claude mcp add --transport stdio hugeicons -- npx -y @hugeicons/mcp-server`). It offers icon search and listing, per-platform usage guides and glyph lookups for font setups. There is also an agent skill (`npx skills add https://github.com/hugeicons/hugeicons --skill hugeicons`). It detects the framework, uses the right renderer and checks bundled name catalogues instead of guessing (for example `Search01Icon`, `Home01Icon`). Either one stops agents from inventing icon names, a common failure with large sets.

## Watch out for

- Pro seats apply to every person who touches the icons, including developers who only commit icon imports. A shared Figma library or repository needs a seat per user
- Pro plans have monthly quotas (300K or 900K pageviews, 2 or 4 GB of package bandwidth), with overage billed per GB and per 300K pageviews
- Pro icons can't ship in open-source projects, templates or downloadable kits where users could extract the files. Use the MIT free set there
- The free count depends on the source: 6,000+ on the site, while the skill's catalogue lists 5,471 names for JavaScript and 4,547 for Flutter
- The old `hugeicons-react` package is deprecated. Use `@hugeicons/react` with `@hugeicons/core-free-icons`
- The migration tool relies on curated mappings that cover 70–90% of icons and fuzzy matching for the rest. Review the swaps by eye

## Reusable ideas

- Split the renderer from the icon data, so free and paid sets share one component API
- Ship both an MCP server and an agent skill with full name catalogues, so agents look names up instead of guessing
- Offer a codemod that moves users over from competing libraries, with a preview and a rollback
- Give a large family a few style axes (stroke, solid, bulk, duotone) so one set covers both UI chrome and illustration

## Related

[Iconify](iconify.md), [Icons.download](icons-download.md), [Iconoir](iconoir.md), [icons0](icons0.md), [morphicons](morphicons.md)
