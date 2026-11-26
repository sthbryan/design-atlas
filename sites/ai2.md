---
title: ai2
description: Agent-native shadcn-compatible component system with variant matrices, one token source and an MCP registry.
url: https://ai2.design
type: component-library
formats: component library · shadcn registry · MCP server
topics: [components]
verdict: useful
agent: [registry, cli, mcp, llms-txt]
pricing: freemium
licence: "the open core is MIT for components and tokens. Pro blocks, premium themes and kits carry a separate commercial licence; purchases were described as opening at launch, so check the pricing page before relying on Pro."
licence_class: mixed
reviewed: 2026-11-26
status: active
related: [shadcn-ui, radix, component-gallery]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md)

# ai2

## What it is

ai2 is an agent-native design system distributed in the shadcn registry format: same anatomy and install flow as shadcn/ui, with a full variant matrix and a single token source on top. At review it ships 51 open-source components. The Button alone exposes 300 combinations (5 variants × 6 tones × 10 sizes).

## When to open it

- When you want shadcn compatibility with richer component axes than a flat variant list.
- When aspect choices like tone and size should compose orthogonally instead of multiplying one-off components.
- When an agent needs discoverable components with examples, not a catalogue of names.

## Most useful

- Variant matrix: `variant × tone × size` axes instead of a flat list, so one component covers what takes three elsewhere.
- Six tone channels (neutral, brand, success, warning, danger, info) as semantic tokens on every tone-aware component.
- One token source: `tokens.json` generates both the CSS and the registry theme item, so light and dark follow one value.
- Every registry item carries a description, docs and a working example for agents to install through the shadcn MCP server.

## Using it with agents

- Registry: add `@ai2` (`https://ai2.design/r/{name}.json`) to `components.json`, then `npx shadcn@latest add @ai2/button`. Dependencies, tokens and styles come with the item.
- MCP: the shadcn MCP server discovers and installs components with their examples.
- llms.txt and docs are published at review; the agents page documents the MCP flow.

## Watch out for

- Pro blocks, premium themes and kits were described as in preparation at review, with purchases opening at launch. Confirm availability and licence on the pricing page before depending on Pro.
- The compatibility with shadcn is deliberate: variable names and file conventions match, so existing snippets keep working, but the new axes are additive, not drop-in identical.
- Chartory, a related chart product, was waitlist-only at review.

## Reusable ideas

- Compose styling across orthogonal axes (variant, tone, size) and generate the combinations, instead of hand-writing each one.
- Generate CSS and registry theme from one token file so both modes stay in sync.
- Keep shadcn variable names and conventions when extending the format, so existing tooling and agent habits transfer.

## Related

[shadcn/ui](shadcn-ui.md), [Radix](radix.md), [The Component Gallery](component-gallery.md)
