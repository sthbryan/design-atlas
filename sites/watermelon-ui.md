---
title: Watermelon UI
description: MIT shadcn registry of 850+ components, blocks and dashboards with a keyless public API, llms.txt and a hosted MCP server.
url: https://ui.watermelon.sh
type: component-registry
formats: shadcn-compatible component registry with a public API and MCP server
topics: [components, motion, landing-pages]
verdict: very-useful
agent: [mcp, llms-txt, registry, api]
pricing: free
licence: Free. MIT for both the platform repo (`WatermelonCorp/watermelon-platform`, about 580 GitHub stars at review) and the registry repo (`WatermelonCorp/watermellon-registry`)
licence_class: open-source-permissive
reviewed: 2026-09-26
status: active
related: [shadcn-ui, shadcnblocks, 21st-dev, magic-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [landing-pages](../topics/landing-pages.md)

# Watermelon UI

## What it is

Watermelon UI is the open-source component arm of Watermelon (watermelon.sh), a small startup-design outfit that also runs a design studio and announces mobile components, an inspiration showcase and an AI layer as upcoming. It began in late 2025 and launched in January 2026. At review its catalogue API reported 851 entries: 516 components, 131 animated components, 189 blocks, 12 dashboards, 2 showcases (full pages composed from blocks) and 1 template. The shadcn registry index lists about 1,180 installable items. Components are React and Tailwind CSS, animated with Motion, and use Lucide, Hugeicons or React Icons for glyphs.

## When to open it

Open it when you want a large, free pool of shadcn-style parts with ready landing-page sections and a few dashboard layouts, and you like to browse by example. It is also one of the few kits in this category an agent can search through a proper API.

## Most useful

- **[SaaS Launch Stack showcase](https://ui.watermelon.sh/showcase/saas-launch-stack)**: a dark docs shell pairs a left navigation rail with a large rounded intro card and a right-hand panel linking the exact hero, feature, testimonial, pricing, CTA and footer blocks used below. It makes the composed page easier to evaluate than isolated thumbnails.
- **Blocks**: nearly 200 copy-paste page sections for landing and product pages
- **Animated components**: interaction-heavy pieces such as inline disclosure menus with two-step delete confirmation
- **Dashboards**: a dozen complete layouts to start an admin screen from
- **Showcases**: example pages showing how blocks combine, which helps judge fit before copying

## Using it with agents

This is the strongest part. Items install with `npx shadcn@latest add` from `registry.watermelon.sh/r/<name>.json`, and the full index is at `/r/registry.json`. An `llms.txt`, an `openapi.json` and read-only catalogue endpoints (`/api/catalog/summary`, `/api/catalog/entries`) need no key. A hosted MCP server at `mcp.watermelon.sh/mcp` (Streamable HTTP, no auth) exposes tools to search, fetch a component, get inspiration, compose a page and list categories; the platform repo can also run it locally.

## Watch out for

- The docs mention an installer package, `@watermelon-ui/cli`, that was not on npm at review; use the hosted MCP URL or the shadcn commands
- The MCP docs page and the live server list different tool sets, so check what your client actually sees
- The terms say designs may be visually inspired by public work and credited "where known"; review provenance for anything prominent
- The registry index is a single file of more than 10 MB, heavy for an agent to load whole
- Very fast growth by a young team means naming and quality vary between items

## Reusable ideas

- Show a block-built page beside a labelled list of its source sections, so people can inspect the whole composition and reuse only the needed parts.
- Expose a catalogue as a read-only JSON API and an MCP server, not just as web pages
- Show a few composed pages built only from your own blocks so users can judge them in context
- Keep the storefront and the installable registry in separate repositories

## Related

[shadcn/ui](shadcn-ui.md), [shadcnblocks](shadcnblocks.md), [21st.dev](21st-dev.md), [Magic UI](magic-ui.md)
