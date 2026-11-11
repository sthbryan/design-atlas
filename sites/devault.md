---
title: Devault
description: Library of 2,383 DESIGN.md systems free to copy, each exportable to nine formats, alongside a paid reference collection and an MCP server.
url: https://devault.design/design-md
type: style-library
formats: 2,383 DESIGN.md systems at review · nine exports including DESIGN.md, Tailwind v4, CSS variables, shadcn/ui, design tokens, Figma variables, SwiftUI, Android XML and an image prompt · MCP server on paid plans · installable agent skill · llms.txt
topics: [design-md, agents-and-prompts, typography-and-styles]
verdict: useful
agent: [llms-txt, mcp, skill]
pricing: freemium
licence: The DESIGN.md library is free to copy with no account or card. The wider library of about 172,670 designs is paid, and Devault's llms.txt states that screens of real products are references only, while only Devault-made visual assets and design systems may ship in your work
licence_class: mixed
licences:
  assets: mixed
reviewed: 2026-11-11
status: active
related: [designmd-store, getdesign-md, designmd-supply]
---
[← Atlas](../site/home.md) · Topics: [design-md](../topics/design-md.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# Devault

## What it is

A reference library with an unusually specific free layer. The paid part is familiar: screens of real websites at desktop and phone width, app screens, user flows, redesign timelines, marketing emails, a Figma plugin — roughly 172,670 items at review for $9 a month. The free part is where the design-for-agents argument lives: 2,383 generated DESIGN.md files, each describing one style as a palette with roles, a type scale, spacing, shape and components, plus a WCAG contrast grid, do's and don'ts, and prompts for an agent.

The format is not invented here. The page names it as the specification that came out of Google's Stitch, published openly and linked from the page, and every file follows it. What Devault adds is volume and portability: each system exports nine ways, from DESIGN.md to a Tailwind v4 `@theme` block, CSS variables, shadcn/ui, W3C design tokens, Figma variables, SwiftUI, Android XML and an image prompt.

The styles are named like art direction rather than like component kits — "Cobalt Lumina", "Synaptic Clinical Matrix", "Orbital Editorial" — and each is tagged with the source screen it was extracted from, so the token file has a picture behind it.

## When to open it

Open it when you want a specific direction rather than a blank slate and you need it as tokens before you need it as pixels, or when an agent has to be handed a system it can actually read. It is also useful as an argument: the library shows what a DESIGN.md can contain, which is a better tutorial than a spec alone.

## Most useful

- **The free DESIGN.md library**, with no account and no card, which is rare next to the paid reference collection.
- **Nine export targets from one source**, so the same direction reaches a Tailwind build, a Figma file and a SwiftUI view.
- **A WCAG contrast grid per style**, which turns a pretty palette into one you can defend.
- **Source screens attached to each system**, so a token set can be checked against the design it came from.
- **An MCP server that returns both tokens and the source screenshot**, which is a better contract for an agent than a URL to scrape.
- **`llms.txt` that states the licence boundaries plainly**, including that screens are references only.

## Using it with agents

Three channels, with different gates: `llms.txt` resolves and is honest about plans and licences; the MCP server exposes `list_styles`, `get_style` and `get_screen_image`, but ships only with paid plans; the `npx skills add` route installs a skill that teaches the research method rather than the catalogue. For a free workflow, an agent can fetch individual style pages and copy the DESIGN.md text.

## Watch out for

- The free copy right covers the DESIGN.md text; it does not turn the source screens into assets you can ship.
- The style names promise a mood, and the tokens are a fragment of what produced it. A palette and a type scale will not reproduce a hero.
- The volume is generated. Two thousand three hundred systems include near-duplicates, and the names flatter them.
- MCP access, the full library and HD downloads are all behind the subscription; the trial needs a card.
- A page of these styles applied without a decision looks like the same product in different colours, which is the failure mode of every style library.

## Reusable ideas

- Ship one design direction as many formats, and let the stack choose.
- Attach the screen a token set came from; it keeps the abstraction honest.
- Put a contrast grid in the file rather than in a separate audit.
- Write an `llms.txt` that says what may ship and what may only be looked at.

## Related

[Design.md Store](designmd-store.md), [getdesign.md](getdesign-md.md), [designmd.supply](designmd-supply.md)
