---
title: Stripe
description: "Payment platform API reference: language-switchable code samples, a clear endpoint catalog and an embedded API explorer."
url: https://stripe.com/docs/api
type: documentation
formats: docs · API reference · MCP server
topics: [documentation, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, api]
pricing: freemium
licence: "The documentation and reference content are free to read; the platform's terms govern the API itself, and the site's content is all rights reserved, so treat it as look-only. The platform has paid, usage-based tiers stated on stripe.com at review. No open source licence covers the docs at review."
licence_class: proprietary-paid
reviewed: 2026-11-26
status: active
related: [supabase, resend]
---
[← Atlas](../site/home.md) · Topics: [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Stripe

## What it is

Stripe's API reference is a large, carefully organized catalog. Endpoints are cataloged clearly, every example can be switched between languages, and the structure keeps the reader oriented inside a very large API.

## When to open it

- When API reference pages need code samples in many languages without duplicating the layout for each.
- When a documentation site must stay navigable at hundreds of endpoints: grouping, search and consistent page structure.
- When agent-facing access matters: an MCP server, llms.txt and an API explorer are all part of the offer.

## Most useful

- Language-switchable examples: one page serves every SDK, and the toggle preserves the endpoint context.
- A consistent reference layout where request, response and errors always appear in the same places.
- An embedded API explorer that lets readers try endpoints in place, which doubles as a live demo of the product.
- Agent channels are first-class: an MCP server and llms.txt are published alongside the docs, not as an afterthought.

## Using it with agents

- Stripe publishes an MCP server for API access, an llms.txt for the docs, and a REST API behind credentials.
- The reference examples are the most reliable agent input: they show exact parameters and response shapes per endpoint.

## Watch out for

- The docs are a look-only reference; the API requires an account and secret keys, and pricing is usage-based per the main site.
- Examples in the docs show test-mode usage; production requests need real keys and real data.
- Do not copy Stripe's docs layout, copy or examples into a product; study the patterns instead.

## Reusable ideas

- One endpoint page with a language toggle beats one page per language, both for readers and for maintenance.
- Keep reference pages rigidly consistent (same sections in the same order) so large APIs stay scannable.
- Put a playable explorer inside the reference so readers learn the workflow and try calls in one place.

## Related