---
title: Phosphor
description: MIT icon family of about 1,500 glyphs in six weights, from thin to duotone, with React, Vue, Flutter, Swift and web font packages.
url: https://phosphoricons.com
type: icon-library
formats: icon library
topics: [icons, assets, components]
verdict: very-useful
agent: []
pricing: free
licence: Free. MIT licence across the core assets and the official packages
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [lucide, hugeicons, iconoir, remix-icon, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [components](../topics/components.md)

# Phosphor

## What it is

Phosphor is an open-source icon family whose selling point is six weights of every glyph: Thin, Light, Regular, Bold, Fill and Duotone. The icons are designed on a 16×16 grid so they read well small and scale up, and the stroke data is kept in the source files. The `@phosphor-icons/core` catalog held about 1,530 icons at review, grouped into 18 categories that include brands. The project lives in the `phosphor-icons` GitHub organisation, with Tobias Fried listed as author; the homepage repository has about 7,500 stars. The website is a JavaScript app with a search, weight switcher, size and colour controls, and copy or download for each icon.

## When to open it

Open Phosphor when one product needs several visual tones from the same icon: a thin weight for large marketing art, regular for UI, fill for active states and duotone for illustrations or empty states. It suits friendly consumer apps and diagrams more than dense developer tools, where a strict 2px stroke set may fit better.

## Most useful

- **Weight as a prop**: `@phosphor-icons/react` takes `weight`, `size`, `color` and `mirrored`, and `IconContext` sets defaults for a whole tree
- **Server-safe imports**: a `/ssr` submodule for React Server Components and other places where React context is not available
- **Web font with no build step**: `@phosphor-icons/web` loads one stylesheet per weight from a CDN and draws icons with `ph` and `ph-fill` style classes
- **Many official targets**: Vue (components prefixed with `Ph`), Flutter, SwiftUI, Elm and web components, plus plugins for Figma, Sketch and Penpot
- **Build helpers**: `pack` strips the web font down to the icons you use, and `unplugin` generates sprite sheets for several bundlers
- **Long list of community ports** for Rails, Laravel, Astro, Nuxt, Rust frameworks, WordPress and more, linked from the homepage README

## Using it with agents

There is no llms.txt or MCP server, so the agent works from the npm packages. The shadcn CLI accepts `phosphor` as its `iconLibrary`, which makes generated components import from `@phosphor-icons/react`. Ask the agent to use the `/ssr` import inside server components, to set shared defaults through `IconContext`, and to look icon names up in the `@phosphor-icons/core` catalog, which lists each icon's name, category and tags.

## Watch out for

- Counts are out of date in places: the homepage README still says 1,248 icons, well below the current catalog
- Releases have slowed. `@phosphor-icons/react` was last published in May 2025 and the core GitHub release tags are older still, although the repositories were touched in 2026
- Recent React docs use `Icon`-suffixed names (`HorseIcon`) while older examples use bare names, so match the style of the version you install
- Duotone draws a second layer at reduced opacity in the current colour. Check contrast on coloured backgrounds before shipping it
- The web font loads a separate stylesheet and font file per weight, so pulling in all six adds real weight to a page
- Brand icons remain their owners' trademarks whatever the MIT licence says

## Reusable ideas

- Offer weight as a single prop so one icon set can cover hero art, UI and selected states
- Design at the smallest target size (16px) and scale up, rather than shrinking a 24px drawing
- Ship a tool that subsets the icon font so no-build users are not stuck with the full set
- Keep a public list of community ports so the official team doesn't have to maintain every framework

## Related

[Lucide](lucide.md), [Hugeicons](hugeicons.md), [Iconoir](iconoir.md), [Remix Icon](remix-icon.md), [shadcn/ui](shadcn-ui.md)
