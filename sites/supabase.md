---
title: Supabase
description: "Open source Postgres platform docs: guide and reference paths organized by product, client libraries in many languages, MCP and llms.txt."
url: https://supabase.com/docs
type: documentation
formats: docs · hosted Postgres platform · MCP server
topics: [documentation, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, api]
pricing: freemium
licence: "The core platform is open source under Apache-2.0 as stated in the repository. The hosted service is paid with a free tier at review, and platform-specific terms apply to hosted usage. Docs content is look-only beyond what the repository licence covers."
licence_class: mixed
reviewed: 2026-11-26
status: active
related: [stripe, clerk]
---
[← Atlas](../site/home.md) · Topics: [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Supabase

## What it is

Supabase is the open source Postgres platform: database, auth, storage and realtime under one hosted service. Its docs are organized as a product suite rather than a single API manual, with guides and references split by capability and client libraries in many languages.

## When to open it

- When docs must cover several products (database, auth, storage, edge functions) without becoming a maze.
- When client library docs need to exist for many languages and still stay findable.
- When an open source core needs documentation that serves both self-hosters and hosted users with the same pages.

## Most useful

- Top-level structure by capability instead of by internal service names, so readers find the concept they mean.
- Guide and reference paths kept distinct: learn the workflow in guides, look up the exact call in references.
- Multi-language client docs presented as one surface, so a reader switches language without losing place.
- Agent access is built in: an MCP server and llms.txt ship with the docs at review.

## Using it with agents

- Supabase publishes an MCP server for platform access, an llms.txt for the docs, and REST and Postgres protocols behind credentials.
- The docs themselves are the agent starting point: product concepts first, then the specific client library page.

## Watch out for

- The repo licence is Apache-2.0, but hosted usage follows the platform terms; check both before redistributing code or selling a service on top.
- Free tier limits at review are stated on the pricing page; confirm them live before building on hosted guarantees.
- Self-hosting exists, but the hosted roadmap and support are what the docs primarily describe at review.

## Reusable ideas

- Organize multi-product docs by capability, not by backend service names.
- Keep guides and references as separate paths with a clear rule for which one a task needs.
- Ship MCP and llms.txt with the docs on day one when the product is API-driven.

## Related