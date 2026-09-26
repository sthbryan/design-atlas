---
title: Base CN
description: Community port of the shadcn/ui components to Base UI, installed through a namespaced registry.
url: https://basecn.dev
type: component-registry
formats: component registry (shadcn)
topics: [components, agents-and-prompts]
verdict: niche
agent: [llms-txt, registry]
pricing: free
licence: Free. MIT (repo `akash3444/basecn`, about 290 GitHub stars at review)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [base-ui, shadcn-ui, coss-ui, re-ui, radix]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Base CN

## What it is

basecn is a community port of the shadcn/ui components from Radix to Base UI. It is a solo project by the GitHub user akash3444, with docs built on Fumadocs. It keeps shadcn's look, props and file layout, so the components read like the originals, but the behaviour underneath comes from Base UI. At review the `llms.txt` listed 61 component pages. Most mirror shadcn one for one, from Accordion to Tooltip, including Sidebar, Data Table, Chart, Calendar, Carousel, Sonner and Input OTP. Some have two versions: a Combobox built on Base UI's own combobox as well as the classic Popover plus Command version, a Base UI Drawer next to one built on the `vaul-base` drawer package, and forms for both React Hook Form and TanStack Form. Each page shows several examples, including states and accessibility cases.

## When to open it

Open it when an existing shadcn project needs Base UI behaviour without restyling anything. It is also useful for the "Migrating from Radix UI" guide, which maps shadcn and Radix patterns to their Base UI equivalents, and for the RTL notes.

## Most useful

- **Drop-in shadcn look on Base UI**: the same class names and tokens, so the components sit next to existing shadcn code
- **Two-way component choices**: native Base UI Combobox and Drawer shown next to the familiar shadcn versions
- **Form recipes**: the same field set wired to React Hook Form and to TanStack Form with Zod
- **Radix-to-Base UI migration guide**
- **RTL support page** for right-to-left layouts

## Using it with agents

Components install with the shadcn CLI. After adding the `@basecn` namespace to `components.json`, run `npx shadcn@latest add @basecn/<name>`. The raw JSON is also served at `https://basecn.dev/r/<name>.json`. An `llms.txt` lists every docs page with a one-line summary, and each page has a "Copy Page" button for pasting it into a chat. There is no MCP server of its own, but the shadcn CLI's MCP mode can reach any namespaced registry.

## Watch out for

- shadcn/ui now supports Base UI itself: it added Base UI docs in January 2026 and made Base UI the default in July 2026, so check the official registry before adding a second source
- One maintainer, and the last push to the repo was in March 2026
- The docs say little about which Base UI version the components target, so check the installed `@base-ui/react` version against the Base UI changelog

## Reusable ideas

- Offer a migration guide next to a port, written as "this Radix pattern becomes this Base UI pattern"
- Show both the new native component and the familiar composite version when a primitive gains a better option
- Keep one visual system and let the behaviour layer change underneath it
- Publish form examples for the two most common form libraries rather than picking one

## Related

[Base UI](base-ui.md), [shadcn/ui](shadcn-ui.md), [coss ui](coss-ui.md), [Re UI](re-ui.md), [Radix](radix.md)
