---
title: Inspo
description: Searchable archive of production-site screens with live-source links, extracted design profiles and a free hosted MCP.
url: https://inspomcp.dev/
type: gallery
formats: website and screen archive · design profiles · MCP
topics: [inspiration, agents-and-prompts, design-md]
verdict: very-useful
agent: [mcp]
pricing: free
licence: The site says its read-only catalogue is free and credits featured sites to their authors. The public source repository is MIT licensed; no reuse licence for the captured third-party screens was stated.
licence_class: mixed
reviewed: 2026-09-30
status: active
related: [curated-design, a1-gallery, appinspo]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md)

# Inspo

## What it is

Inspo is a searchable archive of production websites and page captures, paired with design profiles and a hosted MCP for coding agents. At review, its pages reported 832 sites, 2,320 screens and 68 reference components. Its own site uses an airy editorial layout with a serif display face, restrained rust accents and rounded search and navigation controls; the archive images and linked products are separate examples by their original makers.

## When to open it

- When a visual brief is still broad and you want to search for a mood, layout, industry or named macrostructure before writing UI.
- When you need to compare captured pages and then follow a record to the live source.
- When an agent should search the same archive and return concrete references rather than inventing examples.

## Most useful

- The [archive](https://inspomcp.dev/screens) exposes category and style filters, a search palette and individual screen records. A [Linear record](https://inspomcp.dev/sites/linear-app) lists separate captures for its landing page, pricing, features, about, blog and docs, along with tags, palette roles, a type ramp and a link to [linear.app](https://linear.app/).
- The [MCP page](https://inspomcp.dev/mcp) has a browser demo of `search_screens`. At review, running its example query returned six screen records, each with a named original site and a short description. The page also describes a tool that finds real sites for a named macrostructure such as Bento Grid.
- The archive record is useful for discovering a direction; inspect the linked live site before relying on a screenshot or generated design profile as current evidence.

## Using it with agents

The site documents a hosted, unauthenticated MCP and provides a client-specific setup path, including Codex, Claude Code and Cursor. It describes the catalogue as read-only and says the endpoint is rate-limited. For a fresh design task, ask the agent to search for a few different visual directions, open several matching records, and follow at least one result to its original site. Have it explain which decisions came from the capture and which it verified on the live page. The MCP page also offers a browser search demo if you want to try the query before connecting a client.

## Watch out for

- Captured screens and the linked websites belong to their respective creators. The archive credits sites but does not state a general reuse licence for their images or page designs; use them as references, not assets or source code.
- The GitHub repository's MIT licence applies to that public source repository. Do not extend it to the third-party catalogue.
- Counts and design profiles can change. Recheck the original site and current page before treating any screenshot or extracted value as authoritative.

## Reusable ideas

- Pair free-text visual search with stable tags for style, industry and page role so a designer can move between an open-ended brief and a narrower set of references.
- Keep the original-site link beside each capture, and separate a record's observed page from palette or typography analysis.
- Let an agent name a macrostructure first, then retrieve several real examples that embody it.

## Related

[Curated](curated-design.md), [A1](a1-gallery.md), [Appinspo](appinspo.md)
