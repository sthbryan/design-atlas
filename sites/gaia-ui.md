---
title: GAIA UI
description: MIT, shadcn-compatible React components for AI assistants, with documented registry installation and a focused agent-app visual language.
url: https://ui.heygaia.io/
type: component-registry
formats: React component registry · shadcn CLI · AI assistant interface patterns
topics: [ai-interfaces, components, agents-and-prompts]
verdict: useful
agent: [registry]
pricing: free
licence: Free and MIT-licensed in the `theexperiencecompany/gaia-ui` repository. The site listed 39 components at review; the project labels itself beta and says APIs may change before v1.
licence_class: open-source-permissive
reviewed: 2026-09-29
status: active
related: [shadcn-ui, magic-ui, 21st-dev]
---
[← Atlas](../site/home.md) · Topics: [ai-interfaces](../topics/ai-interfaces.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# GAIA UI

## What it is

GAIA UI is a shadcn-compatible React registry for interfaces built around AI assistants. Its docs describe accessible, mobile-first components using Radix and Tailwind; the site presented 39 components at review. The landing page pairs a restrained dark interface with a large assistant-app preview and component count, making the intended product context immediately clear.

## When to open it

Open it when building an AI assistant product and you want controls and layouts shaped around chat, tool use and agent status rather than a generic dashboard kit.

## Most useful

- **Assistant app preview**: inspect how chat, tool activity and application navigation share one dark workspace.
- **Registry examples**: browse components in a live product context before adding selected source to a project.
- **Accessible foundations**: the docs identify Radix primitives and mobile-first behavior as implementation foundations.

## Using it with agents

Install a component through the shadcn CLI with `npx shadcn@latest add https://ui.heygaia.io/r/composer.json`. The registry is a direct integration channel; no separate MCP or installable skill was verified. Check the repository and current docs for package and dependency details before generating code.

## Watch out for

- The project labels itself beta and warns that the API may change before v1.
- The visual examples are strongly oriented to AI assistant products; they may need substantial adaptation for other product types.

## Reusable ideas

- Show the component library inside a believable assistant product instead of presenting disconnected component tiles.
- Give agent-oriented controls a shared visual vocabulary with the conversation surface and tool activity.
- State maturity and likely API stability directly in the docs.

## Related

[shadcn/ui](shadcn-ui.md), [Magic UI](magic-ui.md), [21st.dev](21st-dev.md)
