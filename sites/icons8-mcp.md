---
title: Icons8 MCP
description: "Icons8's MCP server for AI agents: icon and illustration search with one style per project, PNG free (at review)."
url: https://icons8.de/mcp
type: tool
formats: MCP server
topics: [icons, agents-and-prompts]
verdict: useful
agent: [mcp]
pricing: freemium
licence: Free account searches everything and downloads PNG with a link back to Icons8; SVG and production use in a UI require a paid plan. Icons8 keeps the rights.
licence_class: proprietary-paid
reviewed: 2026-11-28
status: active
related: [animated-icons, 3dicons, css-gg]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Icons8 MCP

## What it is

The Icons8 MCP server connects AI coding agents (Claude Code, Codex, Cursor, Windsurf, VS Code) to the Icons8 icon and illustration catalogue. An agent can search styles, list categories, and fetch icons through the MCP tools, and the integration keeps one icon style per project so every state of an icon comes from the same pack. The accompanying agent skills (installed through Claude Code's plugin marketplace) route design tasks to the right workflow. PNG downloads are free with attribution; SVG on paid plans.

## When to open it

Open it when an agent needs to pick icons from a very large catalogue (some styles pass 13,000 icons at review) without the developer browsing by hand, and one-style-per-project consistency matters more than picking from a small set.

## Most useful

- **Style-locked results**: one pack per project, so states of the same icon match
- **Catalogue depth**: search across styles and categories through MCP tools
- **Agent skills included**: routing skills for icon tasks, installed via the plugin marketplace
- **Free PNG tier**: search and download PNG free with a link back; SVG needs a paid plan

## Using it with agents

This is the integration: add the Icons8 MCP server to the agent, sign in (or use an API key), then let the agent search styles and fetch icons. The page documents the tools (`list_platforms`, `list_categories`), the free limits and how paid plans unlock SVG. An agent can also install the icons8 design skill as a front door that routes requests.

## Watch out for

- Free downloads are PNG only; production UIs that need SVG require a paid plan
- Attribution link is required on the free tier
- Confirm which account or key carries the subscription before relying on paid formats

## Reusable ideas

- One icon style per project as the default, enforced by the tooling
- Separate the free search surface from the paid formats, so agents can plan around both

## Related

[Animated Icons](animated-icons.md), [3dicons](3dicons.md), [css.gg](css-gg.md)
