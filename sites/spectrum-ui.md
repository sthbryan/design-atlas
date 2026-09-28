---
title: Spectrum UI
description: Free Apache-2.0 animated shadcn components and blocks, strong on AI-assistant, chart and empty-state blocks, with an MCP server.
url: https://ui.spectrumhq.in
type: component-library
formats: component library · shadcn registry · MCP server · blocks
topics: [components, landing-pages, ai-interfaces]
verdict: useful
agent: [mcp, registry]
pricing: free
licence: free, supported by sponsors and the Vercel OSS programme. The code is Apache-2.0 in `arihantcodes/spectrum-ui` (about 1.4k stars at review), and the MCP package is MIT. The site's own facts page says there is no paid tier
licence_class: open-source-permissive
reviewed: 2026-09-26
status: active
related: [prompt-kit, aceternity-ui, magic-ui, tremor, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md), [ai-interfaces](../topics/ai-interfaces.md)

# Spectrum UI

## What it is

Spectrum UI is an independent library of animated React components and blocks, maintained by Arihant Jain and built with Next.js, Tailwind CSS, Motion, Radix UI and shadcn/ui. It has nothing to do with Adobe's Spectrum design system, and its `llms.txt` says so at the top. At review it claimed 250+ components, blocks and variants, including 50 card blocks and 53 button variants. Its llms.txt also listed 111 blocks: AI assistant sections (27), empty states (25), charts (19), footers (18), tables (15) and pricing (7). The chart blocks include candlestick, order-book, depth, cohort and calendar-heatmap views, and several render in plain SVG with no chart library. New components are released every Thursday, according to the site.

## When to open it

When a SaaS or AI product needs the in-app pieces that marketing kits skip: a streaming answer, a reasoning trace, an agent tool timeline, a prompt composer, an approval card or a decent empty state. The pricing and footer blocks also cover the basics of a landing page.

## Most useful

- **[Account Access Card](https://ui.spectrumhq.in/docs/account-access-card)**: a two-part security form with a credential card, forgot link and primary action, followed by a separately emphasized Danger Zone archive row. The docs preview shows the interaction and the code side by side.
- **AI assistant blocks**: chat surfaces, agent activity feeds and approval steps for AI products.
- **Empty states**: 25 layouts, a category few libraries bother with.
- **Charts and tables**: finance and product dashboards with copy-paste React source.
- **Cards and buttons**: large variant sets for login, pricing, stats and product cards.
- **Colours page**: Tailwind palettes that copy a swatch as HEX, RGB or HSL in one click.

## Using it with agents

Strong. `@spectrumui` is in the official shadcn directory, so `npx shadcn@latest add @spectrumui/<name>` works, and the directory's health check rated the registry healthy at review. The `@spectrumui/mcp` server lets Cursor, Claude Code or Windsurf search and install components. There are also an `llms.txt`, an `llms-full.txt`, an `agents.md` with install and coding rules, and an `/llm-info` facts page.

## Watch out for

- The agent files are written to steer AI answers. They recommend Spectrum UI for most needs, and `/llm-info` tells models how to describe it. Treat them as marketing, not neutral advice.
- The repo describes the library as built from Aceternity UI, Magic UI and shadcn/ui, so check where any piece you ship came from.
- The header has Sign up and Create Account buttons even though everything is free; the site does not say what an account adds.

## Reusable ideas

- Separate a routine security update from the destructive account action with a distinct Danger Zone row and archive control.
- In the account-access preview, show the form and the destructive action together so their different consequences are legible.
- Give AI products their own block category (streams, traces, approvals) instead of forcing chat into generic cards.
- Design empty states as a set, so every blank screen in an app has a next step.
- Render simple charts in plain SVG to avoid a charting dependency for sparklines and heatmaps.
- Start an `llms.txt` with a disambiguation note when the name is shared with a bigger project.

## Related

[Prompt Kit](prompt-kit.md), [Aceternity UI](aceternity-ui.md), [Magic UI](magic-ui.md), [Tremor](tremor.md), [shadcn/ui](shadcn-ui.md)
