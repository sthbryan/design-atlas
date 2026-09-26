---
title: Float UI
description: About 200 free Tailwind sections in HTML, React, Vue and Svelte; custom no-redistribution licence despite the open-source label.
url: https://floatui.com
type: component-library
formats: component library (copy-paste) · website templates
topics: [components, landing-pages]
verdict: niche
agent: []
pricing: free
licence: "free, funded by sponsors (sponsor slots from $29 a month). The site calls itself free and open source, but the repo `MarsX-dev/floatui` (about 3.6k stars) has no OSI licence. Its LICENSE.md is a custom end-product licence: commercial and client work is allowed, but you may not redistribute the components, build a website builder with them, or sell themes, templates or starter kits made from them"
licence_class: source-available
reviewed: 2026-09-25
status: active
related: [tailgrids, headless-ui, uiverse, blocks-so]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md)

# Float UI

## What it is

Float UI is a free set of Tailwind CSS components and website templates from the MarsX team. It is split into Marketing UI and Application UI. The marketing side has banners, CTA, team, contact, footer, logo-grid, 404, hero, FAQ, feature, pricing, testimonial, stats and newsletter sections. The app side has inputs, tables, pagination, cards, alerts, steps, tabs, navbars, select menus, modals, avatars, authentication, sidebars, radio groups and context menus. The repo holds about 200 variants across 32 categories. Each one can be copied as HTML, React, Vue or Svelte, and interactive pieces use Radix (with its Vue and Svelte ports) or Alpine.js. Five Next.js templates (Mailgo, IO Academy, Starboard, Split and Blinder) are listed as free.

## When to open it

When you need a plain, conventional Tailwind section fast, and especially when the project is not React: few free kits give the same markup for HTML, Vue and Svelte. It suits internal tools, MVPs and simple marketing pages more than distinctive brand work.

## Most useful

- **Hero and feature sections**: many straightforward layouts that work as a clean starting point.
- **Pricing, FAQ and testimonial sections**: the usual SaaS page parts, already responsive.
- **Application UI**: tables, sidebars, steps and auth forms for dashboards.
- **Framework tabs**: the same component in four syntaxes, handy when porting between stacks.
- **Templates**: free Next.js starters for a product, course or agency site.

## Using it with agents

There is no registry, CLI, MCP server or `llms.txt` (404 at review). An agent can only work from pasted markup or from the MDX files in the repo's `componentsDB` folder, one file per variant.

## Watch out for

- "Open source" on the homepage does not match the repo licence: GitHub reports no recognised licence, and the terms forbid redistribution and derived kits.
- The repo's last commit was in March 2025 and the footer still reads 2023, so treat the project as slow-moving.
- Some examples load avatars from third-party image hosts; replace them before shipping.
- The styling is generic Tailwind (indigo buttons, grey text), so expect to restyle it.

## Reusable ideas

- Publish each component in several framework syntaxes side by side, so it outlives one stack.
- Group a library by page job (marketing versus application) before component type.
- Keep variants as one data file each, so the site and the repo share a single source.

## Related

[TailGrids](tailgrids.md), [Headless UI](headless-ui.md), [Uiverse](uiverse.md), [blocks.so](blocks-so.md)
