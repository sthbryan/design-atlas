---
title: Vengeance UI
description: MIT animated hover, text and scroll effects plus landing blocks for Next.js, installed with shadcn from a GitHub-hosted registry.
url: https://www.vengeanceui.com
type: component-library
formats: animated component library · blocks · templates (shadcn-compatible registry)
topics: [components, motion, landing-pages]
verdict: useful
agent: [registry]
pricing: free
licence: free; MIT (repo `Ashutoshx7/VengenceUI`). The site's terms only cover paid sponsor placements, billed monthly through Stripe; there is no paid component tier
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [skiper-ui, aceternity-ui, reactbits, magic-ui, eldora-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [landing-pages](../topics/landing-pages.md)

# Vengeance UI

## What it is

Vengeance UI is an open-source React and Next.js library of animated components and marketing blocks, built with Tailwind CSS and Motion by GitHub user Ashutoshx7 and part of Vercel's winter 2026 open-source cohort. It focuses on unusual interactions for landing pages: displacement hovers, animated tooltips and scroll-driven cards. The homepage counted 46 components in 9 families; the registry file listed 133 items at review, because it also bundles restyled standard shadcn primitives. The repo had about 1.2k stars and was committed to on the day of review.

## When to open it

- When a marketing site needs one signature interaction that visitors remember, such as a glass dock, a spotlight navbar, a folder that previews its contents or a pixelated image trail.
- When you want a complete animated footer, mega-menu navbar or bento grid to adapt rather than build.

## Most useful

- **Hover and cursor effects**: cursor card, image reveal list, line-hover links, image scatter and trails, glow-border cards.
- **Text motion**: flip, morph, stagger, liquid and glitch text, plus a kinetic text loader.
- **Showpieces**: interactive book, interactive keyboard, circular and perspective carousels, liquid-metal and ocean backgrounds, animated rays.
- **Blocks**: hero, CTA, feature, contact and FAQ sections, bento grids and navbars.
- **Templates**: two developer portfolios and a blog, each with live preview and source.

## Using it with agents

Components install with the shadcn CLI from a raw GitHub URL, or with an `@vengeanceui` alias you add to `components.json` yourself (the namespace was not in the official shadcn directory at review). The docs describe `npx vengeanceui init`, which would install a Cursor or Claude skill, an `AGENTS.md` or `CLAUDE.md` and an MCP config, but neither the `vengeanceui` nor the `vengeanceui-mcp` package was published on npm at review; the source sits in the repo's `packages/` folder. There was no `llms.txt`.

## Watch out for

- The documented agent CLI and MCP server could not be installed from npm at review, so treat them as work in progress.
- The name is spelled two ways (the repo and a second domain use "Vengence"), which makes search and registry URLs easy to get wrong.
- Counts vary across pages (46 components, "100+ blocks", "80+ registry entries"); check the registry for what exists.
- Several effects are heavy on pointer tracking and canvas work; test on low-end devices and with reduced motion.

## Reusable ideas

- Group components into families by what they do on a page (buttons, type, tooltips, layouts, scenes) instead of by HTML element.
- Pair each block with a short note on the interaction idea behind it.
- Show templates as a vertical queue with desktop and mobile screenshots side by side.

## Related

[Skiper UI](skiper-ui.md), [Aceternity UI](aceternity-ui.md), [React Bits](reactbits.md), [Magic UI](magic-ui.md), [Eldora UI](eldora-ui.md)
