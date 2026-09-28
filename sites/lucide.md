---
title: Lucide
description: Community fork of Feather with about 1,850 ISC-licensed stroke icons, official packages for most frameworks, llms.txt docs and shadcn's default.
url: https://lucide.dev
type: icon-library
formats: icon library
topics: [icons, assets, components]
verdict: very-useful
agent: [llms-txt]
pricing: free
licence: Free. ISC licence, with 115 icons inherited from Feather still covered by Feather's MIT licence (both notices are in the licence file)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [feather, lucide-animated, shadcn-ui, simple-icons, tabler-icons]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [components](../topics/components.md)

# Lucide

## What it is

Lucide is the community-run fork of Feather that became the default outline icon set for a large share of React and shadcn/ui projects. The site listed 1,856 icons at review, all drawn on a 24×24 grid with a 2px stroke, `currentColor` and round caps. Development happens in `lucide-icons/lucide` on GitHub (about 24,700 stars at review); Eric Fennis is the listed package author. Version 1 is out: release 1.48.0 shipped on 24 September 2026, and `lucide-react` alone was downloaded about 362 million times in the month before review. There is no paid tier.

## When to open it

Open Lucide when you need a large, consistent, stroke-based UI set that already has an official package for your framework. It is the safe default for dashboards, SaaS apps and anything built on shadcn/ui, and the obvious upgrade path for projects still on Feather.

## Most useful

- **Official packages for most stacks**: `lucide` (vanilla JS), `lucide-react`, `lucide-react-native`, `@lucide/vue`, `@lucide/svelte` (Svelte 5), `lucide-solid`, `@lucide/angular`, `lucide-preact` and `@lucide/astro`, plus community ports for Flutter, Blade, Slint and others
- **`lucide-static`**: plain SVG files, an SVG sprite, an icon font with stable code points and SVG strings for Node, plus a `tags.json` of search keywords
- **`@lucide/icons`**: framework-free icon data with small builder helpers, meant for writing your own integration
- **Context providers** in React, Vue, Svelte and Solid, so size, colour and stroke width are set once for a whole tree
- **Design documentation**: a published icon specification, naming and metadata conventions, templates for Figma, Illustrator, Inkscape and Affinity, and a short guide on when an icon helps and when it does not
- **Lucide Lab**: a separate set of community icons that do not meet the core rules, used through the generic `Icon` component

## Using it with agents

Lucide is agent-friendly. `lucide.dev/llms.txt` indexes the whole documentation, and every docs page is also served as Markdown at the same path with `.md` added. The shadcn CLI uses Lucide as its default `iconLibrary`, so shadcn components and blocks usually arrive already importing from `lucide-react`. Ask the agent to import named icons (`import { House } from 'lucide-react'`) instead of the `DynamicIcon` component, and to check names against the icon pages or `tags.json` rather than recalling them from memory, because names have been renamed with deprecated aliases over time.

## Watch out for

- Version 1 removed every brand logo because of legal pressure. The project points to Simple Icons for logos, so older tutorials importing `Github` or `Twitter` icons will break
- `DynamicIcon` loads icons by name at runtime, but the docs warn that it pulls every icon into the build and can flash while loading. Keep it for CMS-driven names only
- Package names changed in v1: `lucide-vue-next` became `@lucide/vue`, and Svelte 4 projects need the older `lucide-svelte` package
- Filled variants are not officially supported. Setting `fill` works on some shapes only
- Counts differ between pages: the homepage said 1,856 at review while the introduction still says 1,600+

## Reusable ideas

- Serve every docs page as Markdown and index them in llms.txt so agents read the same guide humans do
- Publish the icon rules (grid, stroke, corner radius, naming) as a public spec so outside contributors can match the set
- Keep a separate "lab" collection for icons that don't meet the core rules instead of lowering the bar
- Default `aria-hidden` on decorative icons and make labelling an explicit opt-in

## Related

[Feather](feather.md), [Lucide Animated](lucide-animated.md), [shadcn/ui](shadcn-ui.md), [Simple Icons](simple-icons.md), [Tabler Icons](tabler-icons.md)
