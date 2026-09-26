---
title: 21st.dev
description: Community registry of React and Tailwind components with many variants per pattern, a CLI and an MCP server.
url: https://21st.dev
type: component-registry
formats: community marketplace / registry of React components
topics: [components, agents-and-prompts, inspiration]
verdict: very-useful
agent: [mcp, cli, api]
pricing: freemium
licence: free with a limit of 2 component copies per day; premium membership for unlimited copies and exclusive templates. Installed code stays "in your repo, as your code," with no runtime package of its own.
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [shadcn-ui, magic-ui, aceternity-ui, vibeprompts, component-gallery]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [inspiration](../topics/inspiration.md)

# 21st.dev

## What it is

A community gallery and registry of React/Tailwind components, blocks and themes — the site states more than 12,000 components — with live previews and visible source code before installing. Many patterns have several distinct solutions side by side (e.g. ten different heroes) to compare styles before choosing.

## When to open it

To find inspiration for a specific pattern (hero, pricing, dialog...) by seeing several real variants before deciding on a design, or to install an already-built block via CLI or MCP without leaving the editor.

## Most useful

Categories by component type (heroes, pricing, testimonials, buttons, inputs, dialogs) and complete design-system themes. Direct integration with shadcn/ui primitives and with the design tokens of the project it's installed into.

## Using it with agents

Built to be installed without leaving the editor:

- CLI: `npx @21st-dev/cli@latest init --client <cursor|claude|codex|vscode|devin>`
- MCP server (`https://21st.dev/api/mcp`) with tools: `search` (catalog, free), `get_component` (source code, paid), `get_inspiration` (suggestions matched to the project's stack), `search_logo` (SVG logos) and `generate` (create new components from a prompt)
- Markdown endpoints and an OpenAPI 3.0 spec aimed at agents

## Watch out for

Search is free, but pulling the source code of a specific component may require payment depending on the plan. Since it's a community-open registry, accessibility quality and maintenance vary by author; check the licence of each individual component or template, since authors retain ownership and can sell templates on their own.

## Reusable ideas

- Compare several solutions to the same pattern before settling on a final design, instead of going with the first option
- Give an agent an "inspiration matched to your stack" tool instead of a generic catalog
- Publish your own blocks as an internal registry reusable across projects, shadcn-style

## Related

[shadcn/ui](shadcn-ui.md), [Magic UI](magic-ui.md), [Aceternity UI](aceternity-ui.md), [VibePrompts](vibeprompts.md), [The Component Gallery](component-gallery.md)
