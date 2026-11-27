---
title: Clerk
description: "User management API reference: frontend, backend and platform APIs separated by intended use, with llms.txt published."
url: https://clerk.com/docs/reference/api/overview
type: documentation
formats: docs · auth API · user management
topics: [documentation, ux-patterns]
verdict: useful
agent: [llms-txt, api]
pricing: freemium
licence: "The platform is proprietary with a free tier at review, stated on the pricing page. The docs are free to read and look-only at review; API and component use follow the platform terms. No open source licence is stated for the service."
licence_class: proprietary-paid
reviewed: 2026-11-26
status: active
related: [supabase, linear]
---
[← Atlas](../site/home.md) · Topics: [documentation](../topics/documentation.md), [ux-patterns](../topics/ux-patterns.md)

# Clerk

## What it is

Clerk is a user management platform (sign-in, sign-up, profiles) sold as drop-in components plus APIs. Its API reference splits the surface by intended use: Frontend, Backend and Platform APIs, so a reader goes to the API that matches where they are building, rather than browsing one flat list.

## When to open it

- When an API suite spans client and server, and the reference must separate them without hiding either.
- When documentation needs to show both the drop-in UI path and the API path, and keep them distinct.
- When the docs are the product's support channel: auth docs are read at the worst moments, so they must be findable fast.

## Most useful

- Separation by intended use: frontend, backend and platform APIs have clear roles and their own reference paths.
- Component documentation sits beside API reference, which matches how the product is actually adopted.
- Navigation keeps the three surfaces parallel, so switching between client and server reads does not lose place.
- An llms.txt is published at review, so agents can enter the docs without scraping the site.

## Using it with agents

- Clerk publishes an llms.txt for the docs and a REST API behind project keys.
- The reference overview's three-way split is the agent starting point: pick the surface (frontend, backend, platform), then the endpoint.

## Watch out for

- Free tier limits at review are stated on the pricing page; confirm them live before planning around monthly active users.
- Test-mode and production keys behave differently; the docs cover both, check before wiring credentials.
- Docs are look-only at review; components and API use follow the platform terms, and cloning the UI is off limits.

## Reusable ideas

- Split a mixed client/server API reference by intended use, with parallel structure across the splits.
- Keep component docs and API docs adjacent when the product sells both an embeddable UI and an API.
- Publish a reference overview that acts as a map, so readers choose their surface before seeing any endpoint.

## Related