---
title: Twentyfirst UI
description: Two MIT-licensed React UI kits, Halo and Pro, sharing one component API so a product can swap its look without changing code.
url: https://ui.twentyfirst.media/
type: component-library
formats: React components · two visual systems · MCP server · CLI · registry
topics: [components, documentation, agents-and-prompts]
verdict: useful
agent: [mcp, cli, llms-txt]
pricing: free
licence: MIT, stated on the site and in the project's GitHub organisation at review. No paid tier was advertised.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [shadcn-ui, saasflare-ui, beamline-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Twentyfirst UI

## What it is

Twentyfirst UI ships two React UI kits with one API: Halo is soft, rounded and light-first, Pro is sharp, dense and dark-first. Same components, props and markup, so switching looks is a token and CSS change rather than a rewrite. It covers 270 components, 54 screens and patterns and 690+ icons at review.

## When to open it

Open it when you want to explore two distinct visual directions on one codebase before committing to a look.

## Most useful

- **One API, two looks**: the same component in a soft and a dense treatment.
- **Screens included**: 54 complete screens and patterns, not only primitives.
- **Agent tools**: an MCP server with a small tool set, `llms.txt` and a CLI installer.

## Using it with agents

The MCP server (search, get pattern, check usage), `llms.txt` and `llms-full.txt` plus a CLI and registry are documented for agents.

## Watch out for

- Component counts differ between the site and the GitHub description, so treat 270 at review as the site's figure.
- Two looks in one library is a strength only if you actually pick one.

## Reusable ideas

- Ship one component API with two token sets, so a redesign is a theme change.
- Give an agent a tiny tool surface (search, read pattern, check usage) instead of dumping the whole library.


## Related

[shadcn/ui](shadcn-ui.md), [Saasflare UI](saasflare-ui.md), [Beamline UI](beamline-ui.md)
