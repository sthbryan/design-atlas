---
title: BoardUI
description: React and Tailwind design system for dashboards and agentic interfaces, with 103 components, 19 charts and an MCP server that installs source.
url: https://www.boardui.com
type: design-system
formats: 103 components including 19 charts · 10 Pro templates · 400+ design tokens designed in Figma · React and Tailwind v4 · shadcn-compatible registry · MCP over HTTP and stdio · agent skill · llms.txt, llms-full.txt and openapi.json
topics: [components, data-viz, agent-skills]
verdict: very-useful
agent: [mcp, llms-txt, skill, registry]
pricing: freemium
licence: The base components and blocks are MIT and installable without an account; BoardUI Pro unlocks chart cards, agent components and full-page templates, with duration and updates depending on the plan at review
licence_class: mixed
licences:
  code: open-source-permissive
  assets: proprietary-paid
reviewed: 2026-11-11
status: active
related: [shadcn-ui, tremor, hexta-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [data-viz](../topics/data-viz.md), [agent-skills](../topics/agent-skills.md)

# BoardUI

## What it is

A design system aimed at two shapes that are usually served by different libraries: the data-heavy dashboard and the agentic interface. It ships 103 components, nineteen of them charts, plus an app shell, tables and 400+ tokens designed in Figma, on React and Tailwind v4.

Components install as source. `npx boardui init` writes tokens, global styles and agent rules; `npx boardui add button` writes the `.tsx` files and installs the packages they need. After that BoardUI is not a dependency to upgrade, it is code you edit — which is the right contract for a design that is expected to diverge from the defaults.

The agent story is unusually complete for a component library: an MCP server over HTTP with read-only tools (`list_components`, `search_components`, `get_component`, `get_usage_examples`, `get_theme`), a stdio variant that can also write files and activate a Pro licence, an installable skill, `llms.txt`, `llms-full.txt` and an OpenAPI document. `init` also writes always-on design rules into `AGENTS.md` and `.cursor/rules/`, including semantic tokens only and no hardcoded dark-mode colours.

## When to open it

Open it when the product is a dashboard, admin panel or internal tool and the charts, tables and shell have to agree, or when you are building a chat or agent surface and need the tedious parts — a composer with attachments, streaming task lists, thinking indicators, context meters, web-search trails.

## Most useful

- **Charts and shell designed together**, which is where most dashboard work actually goes wrong.
- **Agent components as a category**, not a theme: the states an agent UI needs are components here.
- **Source install over runtime package**, so a component can be changed without a fork.
- **Design rules written into the repository by `init`**, which is how a library keeps an agent honest after the first file.
- **Four agent channels**, with a read-only HTTP server for planning and a stdio server that can install.
- **`llms-full.txt` with every component inlined**, which is the right shape for a long-context agent.

## Using it with agents

The strongest set in the atlas at review: `llms.txt` as a site map, `llms-full.txt` as the whole catalogue, an OpenAPI document, an MCP server in two transports, and a skill that installs a `SKILL.md` with the catalog, theming and page patterns. An agent can therefore discover, plan and install without a human copying anything.

## Watch out for

- The free tier is the base set; chart cards, agent components and templates are Pro, which is exactly the part the product's positioning sells.
- Pro licence duration and updates depend on the plan, so the cost is not a one-time number.
- Semantic-token rules only help if your project adopts them; mixed token systems produce the drift the rules exist to prevent.
- Tailwind v4 is a hard requirement, which excludes projects still on v3.
- It is one opinionated system for dashboards: pushing it into a marketing site will fight its density.

## Reusable ideas

- Write design rules into the repository at init, not into a docs page nobody opens.
- Offer `llms.txt`, `llms-full.txt` and OpenAPI together; they serve different context budgets.
- Split the MCP server into read-only and installing transports, and say which does what.
- Treat the agent interface as its own component category rather than a restyled chat box.

## Related

[shadcn/ui](shadcn-ui.md), [Tremor](tremor.md), [HextaUI](hexta-ui.md)
