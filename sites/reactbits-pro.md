---
title: React Bits Pro
description: Paid library of animated React work — 230 components, 300 page blocks and 300 app-UI blocks — with a counted, category-by-category inventory.
url: https://pro.reactbits.dev
type: component-library
formats: 230 animated components · 300 page blocks · 300 app UI blocks · 15 templates · agent kit
topics: [components, ai-interfaces]
verdict: very-useful
agent: [prompts]
pricing: paid
licence: One-time payment for lifetime access and updates, with the price shown at checkout rather than on the page read. The free React Bits set is separate and openly licensed; Pro assets are proprietary
licence_class: proprietary-paid
reviewed: 2026-11-02
status: active
related: [reactbits, magic-ui, uiverse]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [ai-interfaces](../topics/ai-interfaces.md)


# React Bits Pro

## What it is

React Bits Pro is the paid counterpart to React Bits, and its page does something the free galleries rarely do: it publishes an inventory with counts. 230 animated components split into text (34), backgrounds (98), 3D and shaders (49), cursor effects (21) and UI and cards (28); 300 page blocks split by section type — hero (34), bento (42), stats (18), pricing (15), 404 (8); and 300 app-UI blocks split by product surface, which is the genuinely interesting list: command menu, data table, dashboard (14), analytics (16), kanban, wizard, paywall, empty state, settings form, agent activity, tool calls, agent approval, prompt input.

## When to open it

Open it when you are building an app interface rather than a landing page and need to see what a complete set of screens looks like, or when you are planning your own component library and want a taxonomy to copy. The app-UI categories are the part worth studying: they name surfaces, not components.

## Most useful

- **Surface-based categories for app UI**: agent activity, tool calls, approval, usage, empty state, paywall. These are the screens products actually need.
- **Counts on every category**, so the library's depth is legible before purchase.
- **Section blocks grouped by page position**, which matches how a page is assembled.
- **An agent kit** listed as a product with 20 items, aimed at prompts rather than at code.
- **A block preview strip** (navbar, hero, bento, pricing, testimonials, CTA, footer, modal, dashboard) showing the intended composition order.

## Using it with agents

The library is described as structured for AI agents and ships an agent kit with prompts, which is the channel worth testing. There is no MCP server or registry documented on the page read, so an agent would consume the prompts and the copied source rather than fetch components.

## Watch out for

- Paid, one-time, with pricing at checkout; the page read does not show the number.
- The free React Bits and this paid set are different products with different licences, and the naming invites confusion.
- Counts are marketing figures and will drift from the shipped set.
- Categories overlap: a "cards" UI block can also be a "list" block.
- Animated components at this volume tend toward a house look; a UI built entirely from them will read as one.

## Reusable ideas

- Organise an app-UI library by screen, not by component; developers search for the screen.
- Publish counts per category so depth can be judged.
- Split page blocks by the section they occupy.
- Sell a prompt kit next to the code for teams working with agents.

## Related

[React Bits](reactbits.md), [Magic UI](magic-ui.md), [Uiverse](uiverse.md)
