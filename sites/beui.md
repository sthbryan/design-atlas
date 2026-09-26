---
title: beUI
description: MIT motion components, agent UI and charts with llms.txt, JSON API, agent skill and hosted MCP; paid Pro adds blocks and templates.
url: https://beui.dev
type: component-registry
formats: animated component registry (shadcn) · agent skill · MCP server · paid Pro tier
topics: [components, motion, ai-interfaces, data-viz]
verdict: very-useful
agent: [mcp, llms-txt, registry, api, skill]
pricing: freemium
licence: the free library is MIT (repo `starc007/ui-components`). beUI Pro is $129 for one year of access (no auto-renewal) or $179 lifetime per seat, with unlimited personal and client projects; single templates also sell separately for $39 to $99. No separate Pro licence or refund page was found at review
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [smooth-ui, prompt-kit, animate-ui, motion-primitives, evil-charts, sona-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [ai-interfaces](../topics/ai-interfaces.md), [data-viz](../topics/data-viz.md)

# beUI

## What it is

beUI is a library of motion-first React components by Saurabh, built on Motion and Tailwind CSS v4 for React 19 and distributed through shadcn. The homepage claimed 125 components; the public JSON index at review held 90 entries: 42 motion components, 23 blocks, 17 AI-agent components and 8 charts. The repo had about 1.7k GitHub stars and was committed to on the day of review. The Pro site lists 248 premium components, 173 animated blocks, 34 page blocks and 9 full templates.

## When to open it

- When everyday controls (select, combobox, context menu, tabs, stepper) should feel physical, with spring layout and morphing panels, but still behave like proper form controls.
- When you are building an agent or chat product and need message, tool-call, approval, diff and citation pieces that already move well.
- When a finance or analytics screen needs animated charts such as funnels, bump charts, heat calendars or an order book.

## Most useful

- **Motion primitives**: spring buttons, morphing modal, toast stack, dynamic island, command palette, bottom sheet, pull to refresh, file tree and a gooey popover.
- **Agent UI**: prompt input, streaming response, tool approval and result, file diff, citations, agent activity, todo list and a complete chat app.
- **Charts**: composition, funnel, bump, liquidity heatmap, order book, returns calendar and price-target fan.
- **Motion guide**: a written page on timing, easing and reduced motion, also served as Markdown.

## Using it with agents

One of the most agent-ready kits in this batch. `/llms.txt` indexes every component and points to per-component Markdown, a JSON index at `/r`, detail JSON with source at `/r/{slug}` and raw source at `/r/{slug}/raw`. Install with `npx shadcn@latest add @beui/<name>`; the namespace is in the official shadcn directory. There is an agent skill (`npx skills add starc007/ui-components --skill beui`) and a hosted MCP server at `https://mcp.beui.dev/mcp` with list, search, get and install-command tools. An OpenUI guide covers streaming generated interfaces built from beUI parts. Pro adds a private token-based registry that agents can use as well.

## Watch out for

- Counts differ between the homepage (125) and the index (90), so check the index for what actually exists.
- Pro seats are permanently assigned once a teammate accepts; they cannot be moved to someone else.
- Yearly Pro leaves out the animated illustrations and full templates, which are Lifetime-only.
- Many components pull in several dependencies (Motion plus helpers), so read the detail JSON before adding one.

## Reusable ideas

- Serve the same catalogue as Markdown, JSON and raw source so humans, agents and scripts each get the right format.
- Morph one surface (a trigger that grows into its panel) instead of swapping elements, to keep spatial continuity.
- Treat AI-agent states (thinking, tool call, approval, result) as their own component family.

## Related

[Smooth UI](smooth-ui.md), [Prompt Kit](prompt-kit.md), [Animate UI](animate-ui.md), [Motion Primitives](motion-primitives.md), [Evil Charts](evil-charts.md), [Sona UI](sona-ui.md)
