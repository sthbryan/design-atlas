---
title: Kite
description: Shared design canvas where Claude, ChatGPT, Cursor or Codex draw editable layers through a hosted MCP server, next to your team.
url: https://kite.new
type: design-workspace
formats: collaborative design editor · hosted MCP server · agent plugins and skill · HTML, React and Tailwind export · Mac and Windows apps
topics: [agents-and-prompts, ai-interfaces]
verdict: useful
agent: [mcp, llms-txt, skill]
pricing: freemium
licence: "Free plan with unlimited editors, 3 files and 100 agent actions a day; Pro $16 per editor a month billed yearly or $20 monthly at review. Proprietary terms; the agent plugins repo is MIT"
licence_class: proprietary-paid
reviewed: 2026-11-25
status: active
related: [magicpath, figma, penpot]
---
[← Atlas](../site/home.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [ai-interfaces](../topics/ai-interfaces.md)

# Kite

## What it is

Kite is a browser-based design editor (with Mac and Windows apps) built so people and their AI agents work in the same file at the same time. An agent connected through Kite's hosted MCP server draws real layers: frames, text, components and auto layout, not a flat image. The team edits and comments on the same canvas live. It launched in 2026.

## When to open it

Open it when you want an agent to lay out app screens, a user flow, a landing page, a banner or a small design system somewhere a designer can then adjust by hand, instead of going straight from prompt to code.

## Most useful

- **Editable output**: agent-drawn work lands as normal layers you can select, restyle and comment on.
- **Design systems**: the agent reads the file's tokens and components and reuses them.
- **Comments as instructions**: the agent can read comments on a file, apply them and reply.
- **Export**: copy a frame to Figma, or as HTML, React or Tailwind.

## Using it with agents

The MCP server is at `https://kite.new/api/mcp` (Streamable HTTP, OAuth with dynamic client registration). In Claude Code: `claude mcp add --transport http kite https://kite.new/api/mcp`; Cursor and Codex take the same URL. Plugins for Claude Code, Codex and Cursor, plus a `SKILL.md`, live in the MIT [kite-agent-plugins](https://github.com/kitedotnew/kite-agent-plugins) repo, and `https://kite.new/llms.txt` describes the tools for agents.

## Watch out for

- The free plan caps agent actions per day and the number of files.
- It is a young product, so expect the tool set and limits to change.
- Unrelated products share the name (Zerodha's Kite API, kite.ai); the design tool is at kite.new.

## Reusable ideas

- Give the agent the same layer model the human edits, so its output never needs redrawing.
- Let comments double as a task queue the agent can work through and answer.

## Related

[MagicPath](magicpath.md), [Figma](figma.md), [Penpot](penpot.md)
