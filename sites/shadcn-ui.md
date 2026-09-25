[← Atlas](../README.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# shadcn/ui

- **URL:** https://ui.shadcn.com
- **Type:** component library / code registry
- **Topics:** components, documentation, agents and prompts
- **Pricing / licence:** open source and free (the site itself states 125k GitHub stars)
- **Reviewed:** 2026-09-25

## What it is

Described as "the foundation for your design system": accessible, composable React components with thoughtful defaults, meant to be copied into your repo and freely edited rather than installed as a closed dependency. It's the de-facto standard other libraries in this atlas (Magic UI, Aceternity, mapcn, UIAble) build on top of.

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

## Watch out for

Since code is copied into the repo (not a versioned dependency), library updates don't arrive automatically: you need to re-copy or manually merge changes. The registry accepts third-party sources, so check provenance before installing an external registry via MCP.

## Reusable ideas

- The "copy the code, don't package it" model: the component stays as editable code you own, not a black box
- Your own internal component registry, queryable via CLI/MCP, reusable across an organization's projects
- Expose an `llms.txt` as a navigable summary for agents, alongside human-facing docs

## Related

[magic-ui](magic-ui.md), [aceternity-ui](aceternity-ui.md), [mapcn](mapcn.md), [uiable](uiable.md), [21st-dev](21st-dev.md)
