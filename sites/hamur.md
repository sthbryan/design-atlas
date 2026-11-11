---
title: hamur
description: Unstyled accessible components with one shared core and five framework adapters — React, Vue, Svelte, Angular and Solid — under the MIT licence.
url: https://hamur.dev
type: component-library
formats: 79 unstyled components · five framework adapters from one core · per-adapter test counts published · installable packages per framework · early preview, not yet on npm at review
topics: [components, documentation]
verdict: useful
agent: []
pricing: free
licence: MIT, stated on the site and in the repository at review (about 37 stars), built on Base UI
licence_class: open-source-permissive
reviewed: 2026-11-11
status: active
related: [radix, headless-ui, base-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md)

# hamur

## What it is

A headless component set that takes the multi-framework problem seriously: one behaviour core, five thin adapters, and the same 79 components available in React, Vue, Svelte, Angular and Solid. The components ship without CSS, so styling is yours, via data attributes, CSS variables or Tailwind.

The documentation makes an unusual claim and backs it with numbers: the same behaviour tests run against every adapter, and each framework page publishes its own count — 17,795 tests on React, 22,900 on Vue, 22,484 on Svelte, 15,117 on Angular, 17,396 on Solid at review, with the framework version beside it. That is the kind of evidence a headless library needs and rarely provides, because the failure mode is always one adapter drifting behind the others.

The component list is deeper than the usual dialog-and-tabs set: angle slider, cascader, combobox, date range picker, image cropper, OTP field, signature pad, tree select, virtualizer, tour, splitter, toast, data table. Accessibility is handled in the core, and every part is unstyled by design.

## When to open it

Open it when a design system has to work across more than one framework and you refuse to maintain two component libraries, or when you want accessible primitives with no visual opinion so the design team owns every pixel.

## Most useful

- **One core, five adapters**, which is the only structure that keeps behaviour identical across frameworks over time.
- **Published test counts per adapter**, so drift is visible before it bites.
- **79 components** including the awkward ones — cropper, signature pad, virtualizer, tour.
- **No styles to undo**: parts are unstyled, which is the honest form of theming.
- **Built on Base UI**, so the primitives have a lineage you can inspect.
- **Framework-specific install commands** rather than one package pretending to fit all.

## Using it with agents

No `llms.txt`, no MCP, no registry at review. An agent can read the docs pages and the repository, and because the packages are conventional, it can write code against them from the documentation alone. The early-preview status means an agent trained on current libraries will not recognise it, so the framework and version have to be named explicitly in a prompt.

## Watch out for

- It is an early preview: the site says it is not on npm yet, so the install command is aspirational for now.
- One person, on and off, for a long time — the page says so, and sponsorship is what stands between this and a 1.0.
- Unstyled components mean your team writes every style, which is a real cost disguised as freedom.
- Angular and Solid adapters are the ones most likely to lag; check the test counts rather than the changelog.
- Five frameworks is a maintenance promise, and the test counts are the only honest measure of whether it is kept.

## Reusable ideas

- Put the per-adapter test count on the page; it is a trust signal competitors cannot fake.
- One core plus thin adapters, rather than five rewritten libraries.
- Ship no CSS and say so in the headline.
- Publish the framework version each adapter was tested against, beside the count.

## Related

[Radix](radix.md), [Headless UI](headless-ui.md), [Base UI](base-ui.md)
