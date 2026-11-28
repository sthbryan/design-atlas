---
title: Fluenticons
description: Free MCP server, HTTP API and CLI for Microsoft Fluent UI icons; no API key, with llms.txt.
url: https://fluenticons.co/ai
type: tool
formats: MCP server · HTTP API · CLI
topics: [icons, agents-and-prompts]
verdict: useful
agent: [mcp, api, cli, llms-txt]
pricing: free
licence: Free with no signup, key or paid plan. The icons are Microsoft's Fluent UI System Icons, released under the MIT licence; the gateway states it sends no code, only search words and icon names.
licence_class: open-source-permissive
reviewed: 2026-11-28
status: active
related: [icons8-mcp, animated-icons, css-gg]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Fluenticons

## What it is

Fluenticons is a free gateway to Microsoft's Fluent UI System Icons for AI agents. It exposes the same icon set three ways: an MCP server for agent clients, a plain HTTP API for anything without MCP, and a CLI for terminals. Search runs on words and icon names, every request is counted, and there is no API key, signup or paid plan. Filled, outlined and colour variants are browsable on the site, with a topic index (billing, settings and similar) that maps search words to icon names.

## When to open it

Open it when an agent or script needs Fluent icons by name or topic, especially Microsoft-styled interfaces, without managing keys or a paid icon service.

## Most useful

- **Three channels, one catalogue**: MCP, API and CLI reach the same icons
- **Free and keyless**: no signup, no key, no paid plan (at review)
- **Topic search**: searches like "user permissions" return the icon names for that topic
- **llms.txt**: the agent page documents the endpoints for non-MCP clients

## Using it with agents

Point an MCP client at `https://fluenticons.co/mcp`, call the HTTP API at `/api/v1/icons/search`, or run the CLI tarball from the page (`search`, icon lookup). The site shows copy-ready commands for each channel. Search words and icon names are sent; code never is.

## Watch out for

- The icons belong to Microsoft's Fluent UI System Icons (MIT); the gateway is a third-party service, not Microsoft
- Requests are counted, so heavy bulk use should be measured against the site's stated approach

## Reusable ideas

- Offer MCP, API and CLI against one catalogue so every client kind has a path
- Map search topics to icon names, because agents rarely know exact icon names

## Related

[Icons8 MCP](icons8-mcp.md), [Animated Icons](animated-icons.md), [css.gg](css-gg.md)
