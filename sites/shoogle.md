---
title: Shoogle
description: Searches items across all shadcn registries from the web, the CLI or a remote MCP server.
url: https://shoogle.dev
type: directory
formats: search engine and directory for shadcn registries · MCP server · agent skill
topics: [components, agents-and-prompts, inspiration]
verdict: useful
agent: [mcp, registry, skill]
pricing: free
licence: free to use (labelled alpha); funded by sponsored placements and "enterprise partners". The site's terms are boilerplate that allow only personal, non-commercial viewing of its own materials. The indexed components keep their authors' licences. Operator not stated.
licence_class: proprietary-free
reviewed: 2026-09-25
status: active
related: [shadcn-ui, shadcnblocks, blocks-so, uiuno, 21st-dev]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [inspiration](../topics/inspiration.md)

# Shoogle

## What it is

Shoogle is a search engine for the shadcn ecosystem. It indexes the items that community registries publish and lets you search, preview and install them from one place. Its MCP page says it covers more than 26,000 community blocks, and its directory mirrors the official shadcn registry list (382 registries at review), sorted by date added and tagged by area: marketing, dashboard, AI, e-commerce, charts, maps, editors, auth, terminal UI, React Native and more. The Explore tab offers quick searches for common patterns such as kanban boards, checkout flows, changelogs and scroll effects. Signed-in users can keep bookmarks.

## When to open it

When you need a specific component (a carousel, a gantt chart, a pricing table) and don't want to check twenty registries one by one. Also as a way to discover new registries, since the directory can be sorted by date added.

## Most useful

- **Cross-registry search**: one query returns matches from many namespaces, each with its install name.
- **Preview**: third-party write-ups describe a split view with the rendered item next to its code.
- **Directory**: the full registry list, grouped by category, with links to source where it is public.
- **Explore**: curated quick searches by category, alongside a Fresh tab for recent items.

## Using it with agents

Shoogle is built to be queried by agents. The remote MCP server is at `https://mcp.shoogle.dev/mcp` over streamable HTTP (for example `claude mcp add shoogle --transport http --scope user https://mcp.shoogle.dev/mcp`). It exposes `search_registry_items` and a scoped version for chosen namespaces, and both return ready `npx shadcn add` commands. Without MCP, the `@shoogle` registry works through the shadcn CLI: `npx shadcn@latest search @shoogle -q carousel`, with `type`, `limit` and `offset` filters (the same JSON is served at `/r/registry.json?q=`). A Shoogle skill teaches an agent when to call these tools. No `llms.txt` was published (404).

## Watch out for

- Results are only as good as the registries: quality, upkeep and licences vary a lot between namespaces, so check each result's source before installing.
- Search matches by name. The docs suggest the website for layout-based discovery.
- Sponsored cards sit next to results.
- Nobody is named as the operator on the site, and the service is labelled alpha.

## Reusable ideas

- Index the public `registry.json` files of an ecosystem instead of hosting copies of the code.
- Return install commands, not just links, so an agent can act on a search result straight away.
- Offer the same search three ways (web, CLI registry, MCP) from one index.
- Sort a directory by date added so new entries are easy to spot.

## Related

[shadcn/ui](shadcn-ui.md), [shadcnblocks](shadcnblocks.md), [blocks.so](blocks-so.md), [Uiuno](uiuno.md), [21st.dev](21st-dev.md)
