---
title: shadcn/ui
description: Accessible React components copied into your repo and edited freely, with llms.txt, a CLI and an MCP registry.
url: https://ui.shadcn.com
type: component-library
formats: component library / code registry
topics: [components, documentation, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, cli, registry, skill]
pricing: free
licence: free; MIT licence in the shadcn-ui/ui repository (about 125k GitHub stars at review)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [base-ui, radix, base-cn, magic-ui, aceternity-ui, mapcn, uiable, 21st-dev]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# shadcn/ui

## What it is

Described as "the foundation for your design system": accessible, composable React components with thoughtful defaults, meant to be copied into your repo and freely edited rather than installed as a closed dependency. It's the de-facto standard other libraries in this atlas (Magic UI, Aceternity, mapcn, UIAble) build on top of.

The same components ship for more than one set of primitives. Since July 2026 new projects start on [Base UI](base-ui.md) by default, [Radix](radix.md), the original base, is still fully supported (`npx shadcn init -b radix`), and a React Aria base followed later that month. The component API stays the same whichever base you pick; only the underlying implementation changes.

## When to open it

As the starting point for any new project that needs accessible, code-level customizable components, or as the compatibility base before adding components from other libraries that install "on top of" shadcn.

## Most useful

A wide catalog (buttons, badges, dialogs, alerts, button groups, forms, chat components with streaming, dashboard patterns with charts). Three install paths: `shadcn/create` (a visual wizard that generates the command for your framework: Next.js, Vite, Laravel, React Router, Astro, TanStack Start), direct CLI (`pnpm dlx shadcn@latest init -t <framework>`), or a manual setup guide per framework. A registry system lets you add your own or third-party components selectively.

## Using it with agents

An ecosystem built for agents right from the official docs:

- `llms.txt` published as an AI-facing documentation resource
- An MCP server for the registry: lets an agent list, search and install components using natural language ("add a login form", "install @internal/auth-form")
- Quick setup: `pnpm dlx shadcn@latest mcp init --client claude` (and equivalents for Cursor, VS Code, Codex)
- Helper libraries for the AI SDK and TanStack AI
- An agent skill (`npx skills add shadcn/ui`) that includes a step-by-step migration from Radix to Base UI, one component at a time

## Watch out for

Since code is copied into the repo (not a versioned dependency), library updates don't arrive automatically: you need to re-copy or manually merge changes. The registry accepts third-party sources, so check provenance before installing an external registry via MCP.

The default base switched from Radix to Base UI in July 2026. Scripts or CI that run `shadcn init` non-interactively now get Base UI unless they pass `-b radix`, registry items without a base config install as Base UI, and many older tutorials, third-party registries and model answers still assume Radix. Check which base a component targets before mixing sources. [Base CN](base-cn.md) is a community Base UI port that predates the official support.

## Reusable ideas

- The "copy the code, don't package it" model: the component stays as editable code you own, not a black box
- Your own internal component registry, queryable via CLI/MCP, reusable across an organization's projects
- Expose an `llms.txt` as a navigable summary for agents, alongside human-facing docs

## Related

[Base UI](base-ui.md), [Radix](radix.md), [Base CN](base-cn.md), [Magic UI](magic-ui.md), [Aceternity UI](aceternity-ui.md), [mapcn](mapcn.md), [UIAble](uiable.md), [21st.dev](21st-dev.md)
