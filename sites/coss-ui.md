---
title: coss ui
description: Cal.com's Base UI design system with about 500 composed particles and agent skills; mixed MIT/AGPL repo.
url: https://coss.com/ui
type: component-registry
formats: component registry (shadcn) with agent skills
topics: [components, agents-and-prompts, ux-patterns]
verdict: very-useful
agent: [llms-txt, registry, skill]
pricing: free
licence: Free. The `apps/ui` and `apps/origin` folders of the `cosscom/coss` monorepo are MIT, while the rest of the repo, including the shared `packages/ui` package, is AGPL-3.0 (about 10.6k GitHub stars at review)
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [base-ui, base-cn, re-ui, shadcn-ui, kibo-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [ux-patterns](../topics/ux-patterns.md)

# coss ui

## What it is

coss ui is Cal.com's design system, built in the open on Base UI and Tailwind CSS v4 and handed out shadcn-style as source you copy into your project. It grew out of Origin UI, the React and Tailwind collection by Pasquale Vitiello and Davide Pacilio, which Cal.com acquired. The old Origin UI set is still online at coss.com/origin while it is rebuilt. The system has three layers. Primitives are 55 styled components at review, from Accordion to Tooltip, including Autocomplete, Combobox, Number Field, OTP Field, Meter, Toolbar, Frame and Group. Particles are ready-made compositions of those primitives, and the homepage counted 508 of them. Atoms are planned components that also connect to Cal.com APIs. It uses the same CSS variables as shadcn/ui, plus extra info, success and warning tokens.

## When to open it

Open it when you want a dense, product-grade look for an app (settings screens, forms, tables, command palettes) on Base UI, and you would rather adopt one coherent system than assemble parts. Also open it when moving a shadcn or Radix project to Base UI: it has a detailed migration guide.

## Most useful

- **Particles catalogue**: about 500 small working compositions, several for each primitive, good for copying realistic usage rather than minimal stubs
- **`@coss/style` preset**: one command sets up every primitive, the neutral colour scale, sidebar variables and fonts (Inter and Geist Mono)
- **Radix and shadcn migration guide**: covers `asChild` to `render`, the Select item pattern, ToggleGroup and Slider value changes
- **Status tokens** (info, success, warning, destructive foreground) added on top of the shadcn variables
- **Two hooks**: a Tailwind-style media query hook and a copy-to-clipboard hook

## Using it with agents

Everything installs with the shadcn CLI: `npx shadcn@latest init @coss/style` for a new project, or `npx shadcn@latest add @coss/<name>` for single items. An `llms.txt` indexes the docs, and each page is served as markdown at its URL plus `.md`. The repo ships agent skills, installed with `npx skills add cosscom/coss`, covering the primitives, styling rules, migration patterns and the particle catalogue. The skill files are marked MIT.

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
