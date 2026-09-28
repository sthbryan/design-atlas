---
title: 8bitcn
description: "Retro 8-bit shadcn/ui skin: 56 components, 63 blocks, game UI pieces and 21 themes."
url: https://www.8bitcn.com
type: component-library
formats: component library · blocks (shadcn registry)
topics: [components, typography-and-styles, landing-pages]
verdict: very-useful
agent: [registry]
pricing: free
licence: free; MIT (repo `TheOrcDev/8bitcn-ui`). The retro font it loads, Press Start 2P, comes from Google Fonts under its own licence.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, evil-buttons, termcn, srcl, dither-kit]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md), [landing-pages](../topics/landing-pages.md)

# 8bitcn

## What it is

8bitcn (styled "8bitcn/ui") is a shadcn/ui registry that reskins the usual primitives as 8-bit game UI: pixel borders, chunky shadows and an optional pixel font. It is built by OrcDev with outside contributors on Next.js, Tailwind and Radix, and it is part of Vercel's open-source programme. At review time the public registry listed 121 items (56 components, 63 blocks, 2 pages), the repository had about 2k GitHub stars, and v2 (March 2026) had added a new landing page, dozens of page blocks and 9 extra themes.

## When to open it

- When a game, a hackathon project, a developer tool or a playful launch page should look like a console menu rather than a SaaS dashboard.
- When you already use shadcn/ui and want the retro look without rewriting your component API.

## Most useful

- **Standard primitives**: accordion, dialog, command, data table, calendar, chart, sidebar, toast and the rest of the shadcn set, each wrapping the stock shadcn component.
- **Game pieces**: health, mana and XP bars, an enemy health display, inventory item slots and a switch that turns the retro effects on and off.
- **Marketing blocks**: heroes, feature grids, pricing tiers, FAQs, testimonials, timelines, comparison CTAs, team grids and several playable 404 pages (brick breaker, crate pusher).
- **Game screens**: main and pause menus, save slots, quest log, character sheet, leaderboard, dialogue box and a game-over screen.
- **Themes**: 21 copy-paste colour themes, from console homages to fantasy names like Dungeon Torch and Lava Core, in light and dark.

## Using it with agents

Install items with the shadcn CLI and the `@8bitcn` namespace, for example `pnpm dlx shadcn@latest add @8bitcn/button`; files land under `components/ui/8bit`. The getting-started page suggests `shadcn mcp init` so the shadcn MCP server can see the whole catalogue. The registry JSON is public at `/r/registry.json`, and each docs page has a "Copy Page" button. There was no `llms.txt` at review time.

## Watch out for

- The components import your existing shadcn primitives (for example `@/components/ui/button`), so a plain shadcn setup has to be in place first.
- The pixel font loads from Google Fonts through a CSS `@import`; self-host it if you care about privacy or offline builds.
- Several themes carry console and game names (Sega, Game Boy, Nintendo, Pac-Man, Zelda). They are colour homages, not licensed assets.
- The pixel font is hard to read at small sizes and in long passages; keep it for headings and labels.

## Reusable ideas

- Wrap stock components and add decoration spans marked `aria-hidden`, so the retro skin does not change the accessibility tree.
- Put the pixel font behind a `font="retro"` variant instead of forcing it everywhere.
- Turn meters into game metaphors (health, mana, XP) to make progress and quotas feel lighter.
- Make the 404 page a small playable game to soften a dead end.

## Related

[shadcn/ui](shadcn-ui.md), [Evil Buttons](evil-buttons.md), [termcn](termcn.md), [SRCL](srcl.md), [Dither Kit](dither-kit.md)
