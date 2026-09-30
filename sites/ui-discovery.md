---
title: UI Discovery
description: Search real website, app and section captures by product, industry, style or query, with palettes, type and an MCP/API for agents.
url: https://uidiscovery.com/
type: gallery
formats: website and app reference library · searchable sections · MCP · REST API
topics: [inspiration, agents-and-prompts, ux-patterns]
verdict: very-useful
agent: [mcp, api]
pricing: free
licence: Browsing and the MCP connector are free. The terms say the pictured product designs belong to their owners and are for study and inspiration; UI Discovery permits use of its own prompts and templates. Paid plans are displayed but the terms say they are not yet available for purchase.
licence_class: mixed
reviewed: 2026-09-30
status: active
related: [mobbin, siteinspire, ui-patterns]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [agents-and-prompts](../topics/agents-and-prompts.md), [ux-patterns](../topics/ux-patterns.md)

# UI Discovery

## What it is

UI Discovery is a searchable library of captured websites, web apps, dashboards, iOS screens and individual page sections. Its landing page surrounds a large two-line headline with floating product previews on a soft lavender grid. The library can be searched and filtered by industry, style, colour and font; a reference page provides its capture and extracted design details.

## When to open it

Open it when you have a specific design problem and want to find more than one example to compare. Search for the page or section you are building, inspect several real products, then follow their links to study the original context. Its MCP and REST API make the same library searchable from an agent workflow.

## Most useful

- The landing page previews both mobile screens and a dashboard around its main message, showing the range of the library before the user chooses a section.
- The browse controls include product type, industry, style, colour and font, so discovery can start from either a brief or a visual property.
- A documented example follows a Later pricing section from search to a detail view with extracted palette and Inter Tight typography, then to a prompt with its headings and layout signals.
- Its MCP tools include `search_screens`, `search_sections`, `search_flows`, `search_sites`, `get_design_brief`, `get_image_plan` and `get_design_tokens`.
- The REST API exposes site, section, prompt and search endpoints; the docs show filters for section type, category, style and result count.

## Using it with agents

The homepage documents the hosted MCP URL `https://uidiscovery.com/mcp` and a plain JSON REST API. It says the connector and API are available on every plan without an account or key; the pricing page lists 200 requests per day on Free at review. The API documentation includes tool descriptions, filters and example requests.

## Watch out for

- Captured designs, screenshots, logos and trademarks belong to their original owners. The terms permit using references to inform original work but prohibit copying a product's design, identity, copy or imagery as a substitute for your own.
- UI Discovery says its own prompts and templates may be used in projects; do not confuse that permission with rights to the products shown in its reference images.
- Its terms describe the service as free today and say paid plans displayed on the pricing page are not yet available for purchase. Confirm before relying on the listed paid tiers.
- Counts change. The homepage showed more than 6,540 websites, apps and web apps and 110,313+ sections at review; the sources page gave a different section count, so avoid relying on a precise total.

## Reusable ideas

- Let people search by the design question they have, then expose the metadata that helps them compare answers: palette, type, headings and page structure.
- Turn a reference into a concise implementation brief while preserving a link to the original and asking for original content and assets.
- Make browse, inspect and agent access parts of one flow, so a reference remains useful whether the designer is exploring manually or the agent is searching.

## Related

[Mobbin](mobbin.md), [Siteinspire](siteinspire.md), [UI-Patterns.com](ui-patterns.md)
