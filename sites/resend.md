---
title: Resend
description: "Developer email API reference: a crisp entry point for auth and base URLs, clean response codes and an MCP server."
url: https://resend.com/docs/api-reference
type: documentation
formats: docs · email API · MCP server
topics: [documentation]
verdict: useful
agent: [mcp, llms-txt, api]
pricing: freemium
licence: "The platform is proprietary with a free tier at review, stated on the pricing page (3000 emails per month on the free tier at review). The docs are free to read and look-only at review; API use follows the platform terms. No open source licence is stated for the service."
licence_class: proprietary-paid
reviewed: 2026-11-26
status: active
related: [stripe, posthog]
---
[← Atlas](../site/home.md) · Topics: [documentation](../topics/documentation.md)

# Resend

## What it is

Resend is a developer email service: a small API that sends transactional email. The API reference page is worth studying precisely because it does so little: a clear conceptual entry point for authentication, base URL and response codes, then the endpoint list, without tutorials pretending to be reference.

## When to open it

- When an API reference needs to open with authentication and base URL before anything else, because that is where every reader needs to be in five seconds.
- When a small API (one action, one resource) deserves a reference that is short and complete instead of padded.
- When docs and the product are the same surface: the reference is the fastest path from reading to a first send.

## Most useful

- A tight conceptual opening: auth, base URL and response codes up front, in that order, every time.
- Consistent response code presentation, so error handling can be read off the reference instead of discovered in production.
- The API reference does not duplicate guides; it stays a reference and links out to the learning path.
- An MCP server and an llms.txt published at review, so agents can send mail contextually instead of through hand-written calls.

## Using it with agents

- Resend publishes an MCP server, an llms.txt for the docs and a REST API behind API keys.
- The reference page's auth and response sections are the agent-safe starting point: exact headers, exact codes, no prose guessing.

## Watch out for

- The free tier limit at review is stated on the pricing page (3000 emails per month, with a daily cap on free); confirm it live before designing around it.
- Overage and per-volume pricing at review are stated on the pricing page; check before quoting costs.
- Docs are look-only at review; sending requires an account and API key.

## Reusable ideas

- Open every API reference with auth, base URL and response codes, in that order, before endpoints.
- Keep reference pages short when the API is small; completeness beats volume.
- Keep guides and references as separate paths so each page has one job.

## Related