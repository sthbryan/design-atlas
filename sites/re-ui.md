---
title: Re UI
description: KeenThemes' shadcn registry with data grid, Gantt and calendar primitives, paid blocks and an MCP server.
url: https://reui.io
type: component-registry
formats: component registry (shadcn) with paid blocks and an MCP server
topics: [components, landing-pages, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, registry, skill]
pricing: freemium
licence: Freemium. The free components and primitives are MIT (repo `keenthemes/reui`, about 3.5k GitHub stars at review). Pro (blocks) is a one-time purchase from $249 for one person up to $3,999 for an enterprise, and Ultimate (adds icons and templates) runs from $499 to $7,999. Paid items fall under a restrictive commercial licence from KeenThemes Inc
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [shadcn-ui, kibo-ui, coss-ui, base-ui, 21st-dev]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [landing-pages](../topics/landing-pages.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Re UI

## What it is

ReUI is a shadcn/ui registry from KeenThemes, the studio behind the Metronic admin templates. The free layer has 22 primitives that stock shadcn does not ship, including Data Grid (TanStack Table), Event Calendar, Gantt, Kanban, Filters, Cascader, Phone Input, Stepper, Scrollspy, Sortable, Timeline and Tree. Around them sit 1,149 free example compositions across 81 categories (figures at review). Every primitive is built twice, once on Base UI and once on Radix, and the registry serves the right one for your shadcn style. The paid layer adds 575 blocks in six groups (application, data grid, solutions, eCommerce, marketing, AI and agents), 638 icons in four styles, and 16 full templates such as CRM, helpdesk, HR, commerce and agent-ops dashboards. A Figma kit is free.

## When to open it

Open it for data-heavy app screens where shadcn stops: grids with filtering, grouping and virtualisation, scheduling views, multi-step forms and settings pages. The free examples are also a good place to see many variants of the same shadcn component before you pick one.

## Most useful

- **Data Grid**: sorting, filtering, column controls, editing, grouping, drag-and-drop, row expansion and virtualisation, with dozens of example set-ups
- **Scheduling and planning primitives**: Event Calendar, Gantt and Kanban, built headless-first
- **Filters**: a stepped filter builder with nested attributes, the kind usually hand-built for admin tables
- **Base UI and Radix builds** of every primitive, useful during a migration
- **Paid blocks** for app shells, onboarding, settings, eCommerce and marketing sections (hero, CTA, pricing, FAQ)

## Using it with agents

Add the `@reui` namespace to `components.json` and run `npx shadcn@latest add @reui/<name>`. Paid items need a licence key sent as a Bearer header. A detailed `llms.txt` and `llms-full.txt` list every item, and each docs page is also served as markdown at its URL plus `.md`. A hosted MCP server at `https://mcp.reui.io` offers 19 tools, including scored search, component APIs, page composition, prop validation and install commands. It needs a free ReUI account through a browser sign-in (or a personal token for CI) and has a daily request limit on the free tier. A free agent skill describes the search, install, read-API and adapt workflow.

## Watch out for

- The paid licence bans publishing the code in public repos, building competing kits, handing editable source to clients who have no licence of their own, and using it to train machine-learning models
- The free MCP tier still requires creating an account, and paid blocks show up in search only when a licence key is supplied
- The README and the site give slightly different free-component counts, so treat figures as approximate
- The site says shadcn endorses it, which is a marketing claim

## Reusable ideas

- Ship each primitive for two behaviour layers so users are not blocked by a Radix to Base UI move
- Pair an MCP server with a short skill: the server supplies facts, the skill supplies the workflow and self-checks
- Give agents a `validate_usage`-style check that rejects invented props before code is written
- Publish counts per category so users can see coverage before they buy

## Related

[shadcn/ui](shadcn-ui.md), [Kibo UI](kibo-ui.md), [coss ui](coss-ui.md), [Base UI](base-ui.md), [21st.dev](21st-dev.md)
