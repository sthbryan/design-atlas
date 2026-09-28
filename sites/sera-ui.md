---
title: Sera UI
description: About 90 MIT animated React and Tailwind components via shadcn registry URLs; now owned by Pimjo, repo quiet since February 2026.
url: https://seraui.com
type: component-registry
formats: animated component registry (shadcn) · small design tools
topics: [components, motion, landing-pages]
verdict: niche
agent: [llms-txt, registry]
pricing: free
licence: free and open source under MIT (repo `seraui/seraui`, copyright Sera UI); no paid tier found
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [magic-ui, aceternity-ui, reactbits, cult-ui, kokonut-ui, uiverse]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [landing-pages](../topics/landing-pages.md)

# Sera UI

## What it is

A free library of animated React and Next.js components styled with Tailwind CSS and animated with Framer Motion. The repo was created in July 2025, most of its commits come from a developer who goes by seraprogrammer, and it grew to about 1.3k GitHub stars, and, according to a banner on the site, has since been acquired by Pimjo, the company behind TailGrids and TailAdmin. The sidebar groups components into buttons, badges, form inputs, text effects, navigation, cards, grid layouts, backgrounds, retro-styled pieces and website sections, and adds a few tools (loaders, patterns, a colour palette, a gradient generator). The public registry folder held 93 items at review.

## When to open it

When you want a free, flashy piece for a portfolio or landing page (a text effect, an orbiting-skills ring, a 3D carousel, a hero or FAQ section) and are happy to adapt it yourself.

## Most useful

- A wide text-effect set: decrypting, fuzzy, flip words, aurora, sparkles, letter glitch, curved text, highlighter
- Portfolio pieces such as a developer profile card, orbiting skills and a network visualisation
- A retro-styled group (button, card, accordion, form) with a consistent chunky look
- Simple website sections: hero, pricing, testimonials, FAQ, team, footer

## Using it with agents

`/llms.txt` lists every docs page and points to shadcn's own installation guides, since Sera UI uses the same setup. Each component installs by URL, for example `npx shadcn@latest add https://seraui.com/registry/button.json`. There is no namespaced registry index (`/registry.json` and `/r/registry.json` both returned 404), so an agent has to start from the `llms.txt` page list.

## Watch out for

- Maintenance has slowed: the last commit to the repo was in February 2026, several months before this review, and the acquisition leaves its future unclear
- The home page claims "200+" components in one heading and "over 100" in the text below; the registry is closer to 90
- Many names and ideas (magic card, number ticker, orbiting circles, sparkles text) follow Magic UI and Aceternity UI closely, and some demos load images from third-party hosts such as postimg.cc

## Reusable ideas

- Group a stylistic sub-theme (here, retro) into its own small set so it stays consistent
- Link to an established project's install docs instead of duplicating them when the setup is identical
- Ship small helper tools (gradient, palette, pattern) next to the components they support

## Related

[Magic UI](magic-ui.md), [Aceternity UI](aceternity-ui.md), [React Bits](reactbits.md), [Cult UI](cult-ui.md), [Kokonut UI](kokonut-ui.md), [Uiverse](uiverse.md)
