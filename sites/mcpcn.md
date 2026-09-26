---
title: mcpcn
description: Young MIT registry of 30 MCP App widget blocks (commerce, events, forms) with an optional ChatGPT Apps SDK theme.
url: https://www.mcpcn.dev
type: component-registry
formats: component registry (shadcn) for MCP App widgets
topics: [components, ai-interfaces, agents-and-prompts]
verdict: useful
agent: [llms-txt, registry, api, skill]
pricing: free
licence: free; MIT (repo `shadcn-labs/mcpcn`, © 2026 Shadcn Labs); a Sponsor link is the only paid option
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [mapcn, shadcn-ui, prompt-kit, agentcn, kibo-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [ai-interfaces](../topics/ai-interfaces.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# mcpcn

## What it is

mcpcn is a registry of React blocks meant to be rendered inside chat hosts as MCP App widgets, built by Aniket Pawar under the community "Shadcn Labs" GitHub organisation (not the official shadcn project). It uses Base UI primitives and installs through the shadcn CLI. At review the registry had 30 blocks in eleven groups (form, payment, list, selection, status, blogging, messaging, social, map, events and miscellaneous), plus an optional ChatGPT theme and two shared helper items. It launched in June 2026 and is still small, at about 45 GitHub stars.

## When to open it

When your MCP server or ChatGPT app needs to return something richer than text, such as a product picker, an order confirmation, a booking slot, a ticket selector or a social post card, and you want it to feel native inside the chat instead of like an embedded web page.

## Most useful

- **Commerce flow**: Product List (list, grid, carousel and picker), Amount Input, Order Confirm and Payment Confirmed.
- **Events flow**: Event Card, Event List with a fullscreen split map (Leaflet), Event Detail, Ticket Tier Select and Event Confirmation.
- **Chat helpers**: Quick Reply chips, Option List, Tag Select, Message Bubble with voice and image variants, Progress Steps and Status Badge.
- **Forms**: Contact Form, Calendly-style Date & Time Picker and an Issue Report Form.
- **Apps SDK theme**: `@mcpcn/apps-sdk-theme` maps your shadcn variables to OpenAI's Apps SDK UI surfaces, type and control sizes inside a `data-apps-sdk-ui` boundary, without touching the rest of your theme.

## Using it with agents

Add `"@mcpcn": "https://mcpcn.dev/r/{name}.json"` to `components.json`, then `npx shadcn@latest add @mcpcn/<block>`. For MCP it relies on the shadcn MCP server (`npx shadcn@latest mcp init`) rather than hosting its own. The site is unusually agent-readable: `llms.txt`, `llms-full.txt`, a Markdown copy of every page (append `.md` or send `Accept: text/markdown`), an OpenAPI file and a short agent skill at `/.well-known/agent-skills/site-skill.md`.

## Watch out for

- The theme only covers looks. Display modes, widget state, tool calls and external links still have to go through the host's Apps SDK bridge.
- The repo tagline mentions Claude, but only the ChatGPT styling layer is documented; check how blocks render in other MCP hosts yourself.
- The project is very young, with a single maintainer and little outside adoption so far.
- According to the docs, mcpcn buttons carry their own sound and haptic feedback; decide whether you want that inside a host's UI.

## Reusable ideas

- Allow at most one primary and one optional secondary action in an inline chat card, and move richer navigation to fullscreen.
- Build each block as a compound component that renders a sensible default when given no children.
- Scope a host-specific theme to a data attribute so the same components serve your app and the widget.
- Keep brand colour for accents and imagery, and use the host's system tokens for structure.

## Related

[mapcn](mapcn.md), [shadcn/ui](shadcn-ui.md), [Prompt Kit](prompt-kit.md), [agentcn](agentcn.md), [Kibo UI](kibo-ui.md)
