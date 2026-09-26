---
title: Design System Checklist
description: 230 items across language, foundations, 29 components and maintenance, with shareable progress links.
url: https://www.designsystemchecklist.com
type: guidelines
formats: checklist
topics: [components, documentation, ux-patterns]
verdict: useful
agent: []
pricing: free
licence: Free, no account. The site calls itself open source, but its GitHub repo (`ardakaracizmeli/design-system-checklist`) has no licence file, so reuse rights for the checklist text are not stated.
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [component-gallery, ui-playbook, inclusive-components, astryx, shadcn-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [ux-patterns](../topics/ux-patterns.md)

# Design System Checklist

## What it is

Design System Checklist is an interactive list of what a complete design system should cover. It is made by Arda Karacizmeli and Dmitry Belyaev, the team behind the paid Reshaped design system. It has four chapters. Design language covers brand and guidelines. Foundations covers colour, layout, typography, elevation, motion and iconography. Core components covers 29 components from accordion to tooltip. Maintenance covers documentation, local libraries, team processes, community support and contribution. The repo's data files hold 42 sections and 230 checklist items in total. Most items are in the components chapter (166), and each section links to how two or three well-known systems (MUI, Radix, Atlassian, Reshaped and others) handle it. The site is a Next.js app in six languages: English, Spanish, Korean, Portuguese, Turkish and Simplified Chinese.

## When to open it

- At the start of a design system or component library, to agree on scope before anyone builds anything.
- When auditing an existing system to see which components or foundations are missing or thin.
- When writing a component spec and you want a list of states and details to cover (active states, fallbacks, sizes, keyboard behaviour).

## Most useful

- **Per-component items** that go beyond "exists": an avatar needs an image fallback, sizes, colours, a shape and grouping; an alert needs colours, a title, an icon, actions, responsive behaviour and the right ARIA role.
- **Accessibility items marked by ID** (`-a11y-`) inside each component, so they are not left in a separate section.
- **Reference links for each section**, useful for comparing APIs before choosing your own.
- **Progress tracking**: ticked items are saved in your browser's local storage, and a "Share your progress" button copies a link with your ticks encoded in it.
- **Maintenance chapter**: the process side (contribution model, team rituals, support channels) that component lists usually leave out.

## Using it with agents

There is no llms.txt (404), MCP or export format. The cleanest source is the repo: `src/data/*.js` lists the item IDs and reference links, and `src/translations/en/*.js` has each item's title and one-line description. Give an agent the raw GitHub URL of `translations/en/components.js` and ask it to audit a component against the matching section. The site itself is rendered in the browser, so plain fetches of it return little text.

## Watch out for

- The final "Looking for more?" and footer sections promote Reshaped, the authors' paid system.
- The components chapter only covers the basics. There are no data tables, date pickers beyond a calendar, comboboxes or navigation shells.
- Items are one-sentence prompts, not guidance. You still need a proper reference for how to build each one.
- The shared progress link is only the ticked IDs encoded in base64, not a saved account. Clearing browser data loses progress unless you kept the link.

## Reusable ideas

- Split a design system audit into language, foundations, components and maintenance so the process work isn't forgotten.
- Give each checklist item a stable ID so progress can be shared as a link without accounts.
- Put accessibility items inside each component's checklist instead of a separate section.
- Back every item with links to two or three mature systems that already do it.

## Related

[The Component Gallery](component-gallery.md), [UI Playbook](ui-playbook.md), [Inclusive Components](inclusive-components.md), [Astryx](astryx.md), [shadcn/ui](shadcn-ui.md)
