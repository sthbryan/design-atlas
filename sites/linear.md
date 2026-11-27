---
title: Linear
description: "Issue tracking API developers hub: a compact GraphQL doc structure, an explorable schema and MCP access for agents."
url: https://linear.app/developers
type: documentation
formats: docs · GraphQL API · MCP server
topics: [documentation, ai-interfaces]
verdict: useful
agent: [mcp, llms-txt, api]
pricing: free
licence: "The developers documentation is free to read at review; the API requires a workspace account and the platform terms govern its use. The site content is all rights reserved, so treat it as look-only. No open source licence covers the docs at review."
licence_class: proprietary-free
reviewed: 2026-11-26
status: active
related: [clerk, resend]
---
[← Atlas](../site/home.md) · Topics: [documentation](../topics/documentation.md), [ai-interfaces](../topics/ai-interfaces.md)

# Linear

## What it is

Linear is an issue tracking tool, and its developers hub is the API and integration surface: a compact GraphQL reference with a visible topic structure and a schema you can explore instead of just reading about. It is docs for a product whose own UI is the design benchmark, so the docs keep the same restrained tone.

## When to open it

- When an API reference must stay legible inside a small hub: topics visible at a glance, schema explorable, no sprawling sidebar tree.
- When agents will read the API: the MCP server and llms.txt make the docs reachable without scraping.
- When the product's design language should carry into developer docs without turning docs into a marketing page.

## Most useful

- A tight information architecture: the hub shows its topics immediately, so readers know what exists before clicking anything.
- A GraphQL schema presented as something to explore, not a pile of generated pages, which suits a graph-shaped API.
- The same visual restraint as the product UI: quiet typography, clear hierarchy, no chrome competing with the reference.
- Agent channels published at review: MCP server for API access and llms.txt for the docs.

## Using it with agents

- Linear publishes an MCP server for issue data and a REST/GraphQL API behind workspace credentials.
- The developers hub is the agent entry point at review: topics first, then the specific endpoint or schema area.

## Watch out for

- API access needs a workspace and proper auth; the docs are a look-only reference for anyone without an account.
- Workspace plans and API rate limits are stated on the main site and docs; check them before building automation.
- Do not copy Linear's docs layout or copy into your own product; study the structure instead.

## Reusable ideas

- Show the top-level topics of an API hub immediately, instead of hiding them behind deep navigation.
- Present GraphQL schemas as explorable trees with the reference pages linked from the tree.
- Keep developer docs visually continuous with the product UI, so docs feel like the same product.

## Related