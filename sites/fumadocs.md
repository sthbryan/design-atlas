---
title: Fumadocs
description: React documentation framework with llms.txt, MCP server, WebMCP and a CLI that installs UI as owned code.
url: https://www.fumadocs.dev
type: documentation
formats: docs framework · CLI · llms.txt · MCP server
topics: [documentation]
verdict: very-useful
agent: [cli, llms-txt, mcp]
pricing: free
licence: MIT for the framework, stated in the repository.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [designmd, component-gallery, radix]
---
[← Atlas](../site/home.md) · Topics: [documentation](../topics/documentation.md)

# Fumadocs

## What it is

Fumadocs is a React documentation framework (Next.js, React Router, TanStack Start, Waku, Astro) with layered packages: Core logic, MDX content, and integrations for search, changelog, blog, feedback, EPUB export and more. At review the repository shows about 13,700 stars and a last push on 2026-11-25. Its agent support is a first-class feature, not an afterthought.

## When to open it

- When docs must serve agents as well as people, with every page available as markdown.
- When a docs site needs to be generated and owned as code, with a CLI that installs layouts and components into the project.
- When search, i18n and content collections should be built in rather than assembled.

## Most useful

- llms.txt indexes the docs and llms-full.txt holds all of them; appending `.md` to a docs URL returns its markdown.
- MCP server and experimental WebMCP integrations, plus an AI chat integration answered from your docs.
- CLI: `customize` copies a layout into the project, `add` installs registry components with rewritten imports, `feature` wires up ai or search.
- Composable layers: Core, MDX, Notion or Content Collections as content sources.

## Using it with agents

- CLI: `pnpm create fumadocs-app` scaffolds; `npx @fumadocs/cli add banner files` installs components; `npx @fumadocs/cli feature llms` sets up the llms.txt integration.
- llms.txt at `fumadocs.dev/llms.txt` and llms-full.txt for full-text agent reading.
- MCP server documented in the llms integration page; WebMCP is experimental at review.

## Watch out for

- WebMCP is experimental at review, so treat its API as unstable.
- The framework assumes a React-based stack (or Astro); teams on other stacks should weigh the porting cost.
- Star and push dates are at review figures.

## Reusable ideas

- Offer each docs page as rendered HTML and markdown from the same source, with an index for agents.
- Install UI as owned code through a CLI (`customize`, `add`, `feature`) instead of hiding it in a package.
- Layer the framework (core, content, integrations) so teams adopt features incrementally.

## Related

[DESIGN.md](designmd.md), [The Component Gallery](component-gallery.md), [Radix](radix.md)
