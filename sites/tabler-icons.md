---
title: Tabler Icons
description: Over 6,200 MIT outline and filled icons on a 2px grid, with packages for every major framework and llms.txt docs.
url: https://tabler.io/icons
type: icon-library
formats: icon library
topics: [icons, assets, components]
verdict: very-useful
agent: [llms-txt]
pricing: freemium
licence: Free. The icon source is MIT for personal and commercial use. Optional paid bundles ($9 for compiled PNG, PDF and web font files; $69 for an all-products package with premium templates and illustrations) are one-time payments that support the project
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [lucide, feather, iconify, hugeicons, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [components](../topics/components.md)

# Tabler Icons

## What it is

Tabler Icons is one of the largest free outline icon sets, made by Paweł Kuna (codecalm) as part of the Tabler open-source products alongside a Bootstrap admin kit. At review the site listed 6,220 icons in version 3.48.0 (released 22 September 2026): 5,166 outline icons and a smaller filled set. Every icon sits on a 24×24 grid with a 2px stroke. The GitHub repository `tabler/tabler-icons` has about 21,800 stars, and `@tabler/icons-react` was downloaded about 11 million times in the month before review.

## When to open it

Open Tabler Icons when coverage matters more than anything else: admin panels, internal tools and data-heavy apps where you keep needing obscure glyphs (laundry symbols, zodiac signs, currencies, version-control actions) that smaller sets lack. Its style sits close to Lucide and Feather, so it also works as a fallback source next to them.

## Most useful

- **Customiser on the site**: filter by outline or filled and by more than 40 categories, set size, stroke and colour, then copy or download
- **One package per target**: `@tabler/icons` (raw SVGs with metadata), sprite, web font, React, React Native, Preact, Vue 3, Svelte 4, Svelte 5 runes, SolidJS, Astro and Angular, plus PNG, PDF and EPS packages
- **Tree-shaken components** named with an `Icon` prefix (`IconAward`) and TypeScript types included
- **Figma plugin** that tracks the latest release
- **Frequent releases**: new icons arrive in minor releases, several times a year and sometimes days apart

## Using it with agents

Tabler has good agent support at the docs level. `docs.tabler.io/llms.txt` indexes the documentation, including the Tabler Icons pages for each framework, every page is available as Markdown by adding `.md`, and a single `llms-full.txt` holds the whole site. A published agent skill for Tabler UI (the admin kit) also tells agents to use Tabler Icons as inline SVGs. The shadcn CLI accepts `tabler` as its `iconLibrary`. Ask the agent to confirm names in the metadata shipped with `@tabler/icons` before importing, since filled variants exist for only a fraction of the set.

## Watch out for

- Counts disagree: the icon site says 6,220 while the docs still say "over 5,000"
- Only about a sixth of the icons have a filled version, so a design that relies on filled active states will run into gaps
- The page carries promotions, including a link to a third-party paid icon library. That is advertising, not part of the free set
- The full web font is large; use tree-shaken components or a subset for production
- Svelte has two packages (`@tabler/icons-svelte` for Svelte 4 and `@tabler/icons-svelte-runes` for Svelte 5); pick the right one

## Reusable ideas

- Fund an MIT project with optional convenience bundles (compiled files, extra formats) instead of locking icons behind a paywall
- Keep one metadata source for tags and categories and generate every framework package from it
- Publish the same docs as HTML, per-page Markdown and one combined text file for agents
- Group a very large set into many narrow categories so browsing stays practical

## Related

[Lucide](lucide.md), [Feather](feather.md), [Iconify](iconify.md), [Hugeicons](hugeicons.md), [shadcn/ui](shadcn-ui.md)
