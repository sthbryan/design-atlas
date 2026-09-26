---
title: Radix
description: WorkOS-maintained primitives, Themes, 15px icons and the 12-step Radix Colors system.
url: https://www.radix-ui.com
type: component-library
formats: headless component library, styled theme, icon set and colour system (npm packages)
topics: [components, documentation, color, icons]
verdict: very-useful
agent: [llms-txt]
pricing: free
licence: Free. Primitives, Themes, Icons and Colors are all MIT (repo `radix-ui/primitives`, about 19k GitHub stars at review)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [base-ui, shadcn-ui, headless-ui, base-cn, inclusive-components]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [color](../topics/color.md), [icons](../topics/icons.md)

# Radix

## What it is

Radix is a family of four open-source projects, now maintained by WorkOS. **Primitives** is the unstyled, accessible React layer that shadcn/ui was originally built on. The docs list about 30 components and 5 utilities (Slot, Portal, Visually Hidden, Accessible Icon, Direction Provider). They are published together as the `radix-ui` package, which reached v1.6.7 in July 2026. Newer additions still marked as previews include a Form, a One-Time Password Field and a Password Toggle Field. **Themes** is a pre-styled component library (v3.3, January 2026) with a `Theme` wrapper that sets accent colour, gray, radius and scaling, plus layout and typography components. **Icons** is a set of 15×15 icons for React, SVG and Figma. **Colors** is a palette of 12-step scales with a documented job for each step.

## When to open it

Open Primitives when you maintain a shadcn project built before the Base UI switch, or you want the most widely used headless layer, with the largest body of examples and answers. Open Colors whenever you need a principled way to pick background, border and text shades. Open Themes for an internal tool that should look good with almost no styling work.

## Most useful

- **Radix Colors' step guide**: steps 1-2 for backgrounds, 3-5 for component states, 6-8 for borders, 9-10 for solid fills, 11-12 for text, with light, dark and alpha versions
- **Primitive docs**: each page lists the parts, the data attributes, keyboard interactions and the WAI-ARIA pattern the component follows
- **Guides** on styling, animation, composition and server-side rendering
- **Themes playground and `ThemePanel`** for trying accent, gray, radius and scaling live
- **Icons**: one consistent small grid, also available in Figma

## Using it with agents

Primitive docs pages are served as markdown at the page URL plus `.md`, with a `text/markdown` content type, so an agent can fetch a single component's docs directly. There is no `llms.txt` (the URL returned 404 at review) and no MCP server. The primitives repo includes an `AGENTS.md` for contributors and a Context7 config. Models know Radix well, but they often mix the old per-component packages (`@radix-ui/react-dialog`) with the unified `radix-ui` package, so say which one to use.

## Watch out for

- shadcn/ui made Base UI its default in July 2026, and Base UI's FAQ argues that Radix gets less active development. Primitives still shipped fixes in July 2026, but new projects should compare both
- Radix Icons has not had a release since November 2024, and Colors since 2023
- Themes is a separate, opinionated product: using it with Tailwind or shadcn styles means two theming systems
- Some components are still marked as previews in the docs

## Reusable ideas

- Give every colour step a named job so designers and agents stop picking shades by eye
- Document each component's keyboard map and data attributes in a table on its page
- Expose a drop-in theme panel so people can tune tokens live before committing them
- Keep an open parts API (root, trigger, content) so teams can wrap each piece independently

## Related

[Base UI](base-ui.md), [shadcn/ui](shadcn-ui.md), [Headless UI](headless-ui.md), [Base CN](base-cn.md), [Inclusive Components](inclusive-components.md)
