---
title: Layout UI
description: Reskinnable component system on Base UI with semantic tokens, a layout.md theme kit, registry and MCP.
url: https://ui.layout.design
type: component-library
formats: component library · theme kits · registry · MCP server · CLI
topics: [components, design-md]
verdict: useful
agent: [cli, mcp, registry, llms-txt]
pricing: free
licence: MIT for the repository (uselayout/ui); the site itself states no separate reuse terms.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [shadcn-ui, designmd, radix]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [design-md](../topics/design-md.md)

# Layout UI

## What it is

Layout UI is a component system from the layout.design team where every component consumes only semantic `--layout-*` tokens. A theme kit (a `layout.md` file plus a CSS brand block) compiles to tokens, and swapping one `data-brand` attribute re-skins the whole app with no markup changes. At review the brand gallery lists about 50 kits (Airbnb, Linear, Stripe, Notion, Vercel and more).

## When to open it

- When you want one component set to express several brand themes, so a product can ship a client re-skin without forking components.
- When token discipline matters: no per-component overrides, no colour leaks, one place to change a value.
- When an agent should generate UI against usage rules, not just component names.

## Most useful

- Token contract: components reference intent tokens only, so a token change updates every surface that uses it.
- `layout.md` kits: design tokens compiled into a context file agents can read, plus the CSS block that applies them.
- Registry items carry usage rules (`meta.usage`, `meta.never`, `meta.tokens`), so guidance travels with each component.
- The Layout MCP server surfaces those rules to agents and validates generated code before it lands.

## Using it with agents

- MCP server: install components and read the usage rules through an MCP-compatible client (setup in the docs).
- Registry and CLI for installing components into a project; llms.txt is published at review.
- The rule metadata is the main agent surface: `never` lists what not to do with a component, and `tokens` lists which tokens it may use.

## Watch out for

- The public GitHub repository showed 0 stars and a July 2026 last push at review, so community adoption signals are thin even though the site and docs are live.
- Brand kits describe real brands. Treat kit previews as inspiration; the tokens are the reusable part.
- The reskin trick only works if components stay token-only. One hard-coded colour breaks the contract.

## Reusable ideas

- Bind components to intent tokens and ship the brand as data (one attribute), not as a component fork.
- Attach usage and never rules to each registry item so agents get constraints with the code.
- Compile theme kits to a markdown context file, so the design intent is readable by both people and agents.

## Related

[shadcn/ui](shadcn-ui.md), [DESIGN.md](designmd.md), [Radix](radix.md)
