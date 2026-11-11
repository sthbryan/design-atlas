---
title: OpnForm
description: Open-source form builder with conversational and classic layouts, unlimited responses on the free plan, and a Docker route to self-hosting.
url: https://opnform.com
type: tool
formats: hosted builder · Docker self-host · REST API and webhooks · conditional logic and calculations · themes, fonts and custom domains · llms.txt · about 4,000 GitHub stars at review
topics: [ux-patterns, landing-pages]
verdict: useful
agent: [llms-txt, api]
pricing: freemium
licence: The core is AGPL-3.0 with an enterprise directory under a separate licence, so it is an open core with paid tiers. The hosted cloud is free with unlimited submissions and charges for branding removal and team features
licence_class: mixed
licences:
  code: open-source-copyleft
reviewed: 2026-11-11
status: active
related: [tally, typeform]
---
[← Atlas](../site/home.md) · Topics: [ux-patterns](../topics/ux-patterns.md), [landing-pages](../topics/landing-pages.md)

# OpnForm

## What it is

A form builder with an open-source core and a hosted service on top. The pitch is against per-response pricing: unlimited submissions on the free plan, no charge per answer, and a Docker deployment for teams that need the data on their own infrastructure. The licence split is the same shape as most open-core products — everything outside the enterprise directory is AGPL-3.0, the enterprise directory carries its own licence.

For UI work the interesting feature is the layout switch. The same form can be built as a multi-step conversational flow, one question at a time with a large field, or as a classic single-page form; themes control brand colour and fonts, and paid plans remove the badge. Conditional logic, computed fields, answer piping and redirects are all in the builder rather than behind a plugin.

## When to open it

Open it when you need a form that looks designed and the alternative is a default Google Form, when a client's data has to stay in their own infrastructure, or when you want to read the source of a working form UI to see how validation, multi-step state and theming are actually implemented.

## Most useful

- **Two layouts from one definition**, which is the clearest demonstration that conversational and single-page forms are presentation choices, not different products.
- **Unlimited responses on the free tier**, a differentiator worth comparing against the per-response pricing that most of this category still uses.
- **Self-hosting with Docker**, documented separately, so the hosted and self-hosted stories are both real.
- **Conditional logic, calculations and hidden fields** in the builder, which is where free form tools usually stop.
- **A public REST API and webhooks**, so a themed form can live inside a product instead of being an iframe.
- **`llms.txt` that indexes the documentation and the API reference**, rather than advertising the product.

## Using it with agents

`llms.txt` resolves at review and lists the official resources, the product areas and the documentation and API entry points, which is enough for an agent to describe the product accurately and to point at the right docs page. The site's footer also advertises an MCP server for AI agents, but at review `/mcp` redirected to the homepage with a failed-redirect marker, so the MCP claim is unverified — treat `api` and `llms-txt` as the channels that actually exist.

## Watch out for

- The AGPL matters if you modify and host the core for others; the enterprise directory is outside it and has its own terms.
- Branding removal, custom domains and team features are paid, so "free forever" describes the builder, not the branded experience.
- The MCP route was broken at review while still being advertised, which is a reminder to test an agent channel before planning around it.
- The comparison pages against eight competitors are marketing; read the pricing pages directly.
- Conversational layout is not automatically better. Long option lists and multi-field questions are worse one-at-a-time.

## Reusable ideas

- Let one form definition render in two layouts and let the context choose.
- Price on features, not on responses; unlimited submissions is a positioning decision as much as a pricing one.
- Publish a Docker path for the customers who will never accept your hosting.
- Write `llms.txt` as an index of documentation, not as an advertisement.

## Related

[Tally](tally.md), [Typeform](typeform.md)
