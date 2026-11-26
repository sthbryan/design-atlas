---
title: Ant Design
description: Enterprise React component library with an official MCP server, CLI and llms.txt, under MIT.
url: https://ant.design
type: component-library
formats: component library · MCP server · CLI · llms.txt
topics: [components]
verdict: very-useful
agent: [mcp, cli, llms-txt]
pricing: free
licence: MIT for the core library, stated in the repository.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [shadcn-ui, radix, designmd]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md)

# Ant Design

## What it is

Ant Design is an enterprise-class React component library and design language from Ant Group, aimed at data-dense backend and management interfaces. The library is MIT licensed and free, with design guidelines and tokens alongside the components. Its agent surface is unusually complete: an official MCP server, a CLI, and an llms.txt for tools without MCP.

## When to open it

- When building a dense admin, settings or data interface and you want a mature, token-driven component set instead of assembling one.
- When an agent needs component APIs, runnable examples and changelog differences, not just a component name.
- When you want to pin or compare a specific library version through the agent tooling.

## Most useful

- Official MCP server launched from the CLI (`antd mcp`, since `@ant-design/cli` v6.3.5) with 8 tools and 2 prompts, including `antd-expert` and `antd-page-generator`.
- Semantic styling hooks and design tokens, so agents can inspect structure and variants rather than guess at markup.
- Works as an llms.txt fallback: the docs publish a machine-readable index for clients without MCP.
- Version pinning through MCP arguments, so examples and APIs match the installed release.

## Using it with agents

- MCP via npx: `npx -y @ant-design/cli mcp`, with setup guides for Claude Code, Cursor, VS Code, Codex, Windsurf and Gemini CLI. The CLI can also write supported project configuration, with setup modes `mcp`, `skill` or both.
- CLI installed globally (`npm i -g @ant-design/cli`) exposes the same server as `antd mcp`.
- A community MCP server (`@jzone-mcp/antd-components-mcp`) lists components, docs, examples and changelogs, but the official one is the maintained path.
- llms.txt: `https://ant.design/llms.txt` is published at review.

## Watch out for

- The MCP server lives in the CLI package, so the library version pin and the CLI version move together; check both at review when an API looks off.
- Ant Design's visual language is opinionated and enterprise-flavoured. It will not suit a consumer brand look without heavy token overrides.
- Community MCP servers exist with similar names; prefer the official `@ant-design/cli` one.

## Reusable ideas

- Ship agent tooling inside the CLI (`antd mcp`) so docs, examples and version pinning travel with the release.
- Offer prompts that specialize the agent (`antd-expert`) and generate pages (`antd-page-generator`), not just retrieval tools.
- Publish llms.txt as the no-MCP fallback, so every client has a reading path.

## Related

[shadcn/ui](shadcn-ui.md), [Radix](radix.md), [DESIGN.md](designmd.md)
