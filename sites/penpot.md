---
title: Penpot
description: MPL-2.0, self-hostable Figma alternative with CSS Flex/Grid layout, W3C-format design tokens and an official MCP server.
url: https://penpot.app
type: design-workspace
formats: open-source design workspace · self-hostable (Docker) · MCP server (remote and local) · plugin API · llms.txt
topics: [components, agents-and-prompts, typography-and-styles]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: freemium
licence: "MPL-2.0 source at `penpot/penpot` (about 60,000 stars at review), free to self-host. Cloud: Professional is $0 with no file limits, Unlimited is $7 per editor per month capped at $175, Enterprise is $25 per member per month, and a Private Server costs $50k a year. Discounts for non-profits, education and open source. The site says you own your designs and code"
licence_class: open-source-copyleft
reviewed: 2026-09-25
status: active
related: [figma, open-design, shadcn-ui, refero-styles, designmd]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# Penpot

## What it is

Penpot is a browser-based design and prototyping tool built by Kaleidos, a Spanish company, and presented as an open alternative to Figma. Files are SVG-native, layouts use real CSS Flex and Grid rules, and the inspect panel exports CSS, HTML and SVG, so what a designer builds maps closely to what a developer writes. Components, shared libraries and native design tokens cover design-system work. Version 2.18.0 was released on 23 September 2026, and the repo is still very active. The monorepo also includes the MCP server, a plugins workspace and a WebAssembly renderer.

## When to open it

Open it when a team needs Figma-style collaboration but has to self-host for privacy, compliance or cost, or wants an open file format it can read without a vendor API. It also suits developers who want layout settings that behave like CSS instead of a proprietary auto layout.

## Most useful

- **Flex and Grid layout** that follows CSS semantics, so the handoff code matches the canvas
- **Design tokens** that follow the W3C Design Tokens Community Group format, with sets, themes, and import and export as JSON
- **Inspect and code export** in CSS, HTML and SVG, plus an open file format
- **Plugins**: a JavaScript plugin API and a community hub listing 113+ plugins at review
- **Self-hosting** with Docker, which gives full control of data and infrastructure

## Using it with agents

Penpot's official MCP server lets an agent read and change the file you have open. On Penpot's cloud, enable it under Your account, Integrations, MCP Server, generate a personal MCP key (shown once), copy the server URL, and add it to your client, for example with `npx -y add-mcp -g -n penpot <URL>`. Then connect the file from File, MCP Server, Connect. A local mode runs the server on your machine. The server works through a Penpot plugin over WebSocket and gives the model an `execute_code` tool that runs scripts against the Plugin API, alongside `high_level_overview`, `penpot_api_info`, `export_shape` and, in local mode only, `import_image`. The site publishes `llms.txt`, although the linked `llms-full.txt` was empty at review.

## Watch out for

- MCP can write to your file: it can create, rename, move, delete and restyle layers. The docs advise starting with read-only prompts and small, reversible steps
- The Penpot browser tab has to stay active, and only one tab can own MCP at a time. A tab the browser puts to sleep stops the server
- Because the agent writes code against the Plugin API, results depend heavily on the model you use
- The Unlimited plan limits storage to 10 GB and version history to 7 days, and the Enterprise plan to 25 GB and 30 days. Plan storage accordingly
- The site now also runs under `penpot.dev`, and llms.txt links there, so expect both domains in links

## Reusable ideas

- Model layout with the same Flex and Grid rules the browser uses, so handoff needs no translation
- Store tokens in the W3C DTCG format, so any compatible tool can read them without conversion
- Give an agent one general "run code against the API" tool plus an API-info tool, instead of dozens of narrow ones
- Scope agent access to the focused page, so a prompt cannot touch the whole workspace at once

## Related

[Figma](figma.md), [OpenDesign](open-design.md), [shadcn/ui](shadcn-ui.md), [Refero Styles](refero-styles.md), [DESIGN.md](designmd.md)
