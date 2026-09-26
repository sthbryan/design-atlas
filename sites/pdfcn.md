---
title: pdfcn
description: React PDF primitives and 20 invoice/report/label templates for Takumi or Forme, installed via shadcn CLI.
url: https://pdfcn.dev
type: component-library
formats: PDF component library (shadcn registry)
topics: [components, typography-and-styles]
verdict: useful
agent: [llms-txt, registry, api, prompts, skill]
pricing: free
licence: free; MIT (repo `shadcn-labs/pdfcn`); the Takumi renderer is MIT or Apache-2.0 and Forme is MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [emailcn, ogimagecn, termcn, shadcn-ui, mapcn]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md)

# pdfcn

## What it is

A shadcn-style registry for generating PDF documents from React, with every component written for two rendering engines: Takumi and Forme. It belongs to the Shadcn Labs family by Aniket Pawar, which says it is not affiliated with shadcn. At review time each engine had 24 components and 20 document templates, and there were 9 shared themes and a theme builder. At about 2.1k GitHub stars it was the most-starred repository in the family, even though it only started in August 2026.

## When to open it

When an app has to produce invoices, reports, tickets or printable forms and you want them styled like the rest of your UI, with the layout code in your repo instead of a hosted PDF service.

## Most useful

- **Document primitives**: repeating page header and footer, page numbers, forced page breaks and a keep-together wrapper that stops a block from splitting across pages.
- **Content components**: data table and low-level table parts, key-value lists, SVG bar, line and area charts, QR codes, a signature block, a watermark and alerts.
- **Templates**: six invoice styles, financial, marketing, operations and security reports, a packing slip, a 4x6 shipping label, an event ticket and agenda, a work order, meeting minutes, a press release, a lesson plan, a gift certificate and a medical intake form.
- **Themes**: presets from formal serif to monospace blueprint, applied through one theme provider so blocks and components match.

## Using it with agents

Register `@pdfcn` in `components.json`, then run `npx shadcn@latest add @pdfcn/takumi/<name>` or the `forme/` path; installing a template pulls in its components and the right engine packages. The homepage has a "Copy prompt for your agent" button, and the site publishes `llms.txt`, `llms-full.txt`, Markdown copies of every page, an OpenAPI file and a short agent skill. For MCP it points to the standard shadcn MCP server.

## Watch out for

- The `@pdfcn` namespace was not listed in shadcn's public registry directory at review time, so add the `registries` entry by hand before using the short names.
- Pick one engine early: the component API matches across both, but installed files, dependencies and the `Document` and `Page` imports differ.
- Templates such as the medical intake form or security report are layout starting points, not compliance-reviewed documents.
- Very young project (repository created August 2026) with a single core maintainer.

## Reusable ideas

- Give print documents explicit page furniture (running header, footer, page count) as components rather than ad hoc markup.
- Wrap tables and totals in a keep-together block so a row never orphans onto the next page.
- Share one theme object between the web UI and generated documents.
- Offer a template gallery by document type (invoice, label, ticket) instead of by visual style.

## Related

[emailcn](emailcn.md), [ogimagecn](ogimagecn.md), [termcn](termcn.md), [shadcn/ui](shadcn-ui.md), [mapcn](mapcn.md)
