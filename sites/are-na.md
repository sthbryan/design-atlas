---
title: Are.na
description: Independent research-style bookmarking in connected channels, with a v3 REST API, llms.txt, official OAuth MCP server and CLI.
url: https://www.are.na
type: design-workspace
formats: collaborative research and visual bookmarking platform · REST API, official MCP server and CLI
topics: [inspiration, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, cli, api]
pricing: freemium
licence: "Free Guest plan up to 200 blocks; Premium $7/month or $70/year; Supporter $120/year; students get 50% off for two years. Proprietary terms (effective 8 November 2023): personal, non-commercial viewing licence, no scraping or crawling, no abusive API use. Its robots.txt signals search yes, AI training no. The SDK repo is MIT; the MCP and CLI repos carried no licence file at review"
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [cosmos, pinterest, designspiration, posts-design]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Are.na

## What it is

Are.na is an independent platform, running for about 15 years at review, for collecting images, text, links and files into "channels" and linking ideas over time, alone or with others. Each saved item is a "block", and one block can sit in many channels, so collections connect across users. A small core team runs it (Charles Broskoski, Daniel Pianetti, Damon Zucconi and Meg Miller), and it publishes a printed Annual. Designers, artists, students and researchers use it for slow, research-style mood boards rather than feeds.

## When to open it

Open it for long-running research on a visual direction, a material, a typographic period or a design movement, when you want to follow how other people have grouped the same references. It is also the rare inspiration tool your agent can read and write through an official API.

## Most useful

- **Channels and connections**: see every other channel a block lives in, which leads to adjacent research.
- **Open, closed or private channels**, with collaborators on the free plan.
- **Export** channels as PDF, ZIP or HTML on every plan.
- **Premium extras**: unlimited blocks, advanced search filters, full text of saved links, table view and presentation mode.

## Using it with agents

The best-served site in this batch. `llms.txt` indexes the v3 REST API, with an OpenAPI spec and Markdown pages for each endpoint. Public channels can be read without a token; search needs Premium. The official MCP server is hosted at `https://mcp.are.na/mcp` with OAuth (in Claude Code: `claude mcp add --transport http arena https://mcp.are.na/mcp`) and exposes 40+ tools generated from the spec. There is also a CLI (`npm install -g @aredotna/cli`, `arena search`, `arena add`) and a TypeScript SDK. Let the agent read a channel you curated and write a style brief from it.

## Watch out for

- The terms forbid scraping and limit viewing to personal, non-commercial use, and the robots file opts out of AI training: read through the API with your own account.
- The free plan's 200-block cap fills quickly for real research.
- Blocks are other people's work; Are.na grants no reuse rights on them.

## Reusable ideas

- Let one item belong to many collections and show those links, so a library becomes a network.
- Publish API docs as Markdown per endpoint and index them in llms.txt so agents can read the API directly.
- Generate the MCP tools from the OpenAPI spec so the two stay in step.

## Related

[Cosmos](cosmos.md), [Pinterest](pinterest.md), [Designspiration](designspiration.md), [posts.design](posts-design.md)
