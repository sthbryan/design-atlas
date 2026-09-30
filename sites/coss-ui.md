---
title: coss ui
description: Cal.com's Base UI design system with composed particles and agent skills; mixed MIT/AGPL repo.
url: https://coss.com/ui
type: component-registry
formats: component registry (shadcn) with agent skills
topics: [components, agents-and-prompts, ux-patterns]
verdict: very-useful
agent: [llms-txt, registry, skill]
pricing: free
licence: Free. The `apps/ui` and `apps/origin` folders of the `cosscom/coss` monorepo are MIT, while the rest of the repo, including the shared `packages/ui` package, is AGPL-3.0 (about 10.6k GitHub stars at review)
licence_class: mixed
reviewed: 2026-09-29
status: active
related: [base-ui, base-cn, re-ui, shadcn-ui, kibo-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [ux-patterns](../topics/ux-patterns.md)

# coss ui

## What it is

coss ui is Cal.com's design system, built on Base UI and Tailwind CSS v4 and distributed as source through a shadcn-compatible registry. The system has three layers: 53 styled primitives at review, 510 ready-made compositions called particles, and planned API-connected atoms. The docs cover controls from Accordion to Tooltip, including Autocomplete, Combobox, Number Field, OTP Field, Meter, Toolbar, Frame and Group. Its CSS variables align with shadcn/ui and add info, success and warning tokens. Origin UI remains available separately while the acquired collection is rebuilt.

## When to open it

Open it when you want a dense, product-grade look for an app (settings screens, forms, tables, command palettes) on Base UI, and you would rather adopt one coherent system than assemble parts. Also open it when moving a shadcn or Radix project to Base UI: it has a detailed migration guide.

## Most useful

- **Particles catalogue**: 510 small working compositions at review, with examples for realistic usage rather than minimal stubs
- **`@coss/style` preset**: one command sets up every primitive, the neutral colour scale, sidebar variables and fonts (Inter and Geist Mono)
- **Radix and shadcn migration guide**: covers `asChild` to `render`, the Select item pattern, ToggleGroup and Slider value changes
- **Status tokens** (info, success, warning, destructive foreground) added on top of the shadcn variables
- **Two hooks**: a Tailwind-style media query hook and a copy-to-clipboard hook

## Using it with agents

Everything installs with the shadcn CLI: `npx shadcn@latest init @coss/style` for a new project, or `npx shadcn@latest add @coss/<name>` for single items. An `llms.txt` indexes the docs, and each page is served as Markdown at its URL plus `.md`. The repo's Agent Skills-format skill can be installed with `pnpm dlx skills add cosscom/coss`; its docs cover the primitives, styling, migration and particle catalogue, and list support for Claude Code, Cursor, Codex, Cline, Windsurf and GitHub Copilot. Check the skill's own file header for its stated licence separately from the mixed monorepo licence.

## Watch out for

- The licensing is mixed: copy components from the registry or `apps/ui`, not from the AGPL `packages/ui` folder
- The design is opinionated toward Cal.com's dense UI, so expect to retheme it for marketing pages
- Atoms are still on the roadmap, and particles have not yet replaced the full Origin UI collection
- Requires Tailwind CSS v4 and `@base-ui/react`

## Reusable ideas

- Split a system into primitives, compositions and API-connected components, so teams pick their level of abstraction
- Ship a style preset that installs tokens, fonts and every component in one step
- Add explicit info, success and warning tokens instead of reusing the primary or destructive colours
- Publish an agent skill next to the registry so models learn the migration rules, not just the component list

## Related

[Base UI](base-ui.md), [Base CN](base-cn.md), [Re UI](re-ui.md), [shadcn/ui](shadcn-ui.md), [Kibo UI](kibo-ui.md)
