---
title: Carbon Design System
description: "IBM's Apache-2.0 system: about 50 components, 2,775 icons and 1,576 pictograms, llms.txt, and an IBMid-gated MCP."
url: https://carbondesignsystem.com
type: design-system
formats: design system · icon library · MCP
topics: [components, icons, documentation, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, skill]
pricing: free
licence: Free. The main monorepo (`carbon-design-system/carbon`) and the npm packages, including `@carbon/icons` and `@carbon/pictograms`, are Apache-2.0. The Carbon MCP server is a free public preview, but it needs an IBMid, and people outside IBM have to request access. Apache-2.0 grants no trademark rights, so keep the IBM name and logo out of your product.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [iconoir, astryx, shadcn-ui, component-gallery, design-system-checklist]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [icons](../topics/icons.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Carbon Design System

## What it is

Carbon is IBM's open-source design system, built on the IBM Design Language and maintained by a core team at IBM. The docs cover foundations (colour, 2x grid, typography, spacing, shape, motion and four themes: White, G10, G90 and G100), about 50 components, from accordion and data table to UI shell and the newer AI label and AI skeleton, and 15 patterns such as empty states, filtering, forms, loading, login and status indicators. There are also data-visualisation guidelines. Code ships as `@carbon/react`, `@carbon/web-components` and an Angular version, with a community Vue port. There are also Carbon Charts, Carbon for IBM Products and a Carbon AI Chat library. Design kits are in Figma. The icon package holds 2,775 icons and the pictogram package 1,576, according to their metadata files.

## When to open it

- When building dense enterprise or data-heavy UI (tables, filters, side panels, notifications) and you want tested, accessible defaults.
- When you need a large, consistent, permissively licensed icon or pictogram set that works in React, Web Components and Figma.
- When you want well-written usage guidance: when to use a modal versus a side panel, a toggletip versus a tooltip, or inline versus toast notifications.
- When designing AI features and looking for a labelling pattern for AI-generated content.

## Most useful

- **Icons and pictograms**: `@carbon/icons-react` gets about 1.3 million npm downloads a month. The library page lets you search, and every icon is also available as a Web Component (`@carbon/icons-element`) and in an IBM UI Icon Library Figma file.
- **Pattern pages** that explain the flow, not just the component, such as empty-state types, loading versus skeleton placeholders, and filtering layouts.
- **Tokens as packages**: `@carbon/themes`, `@carbon/type`, `@carbon/layout` and `@carbon/motion` for the same values in code.
- **Usage, style, code and accessibility tabs** on each component page.
- **Carbon AI Chat** for a ready-made chat interface in React or Web Components.

## Using it with agents

- `/llms.txt` is a clean index of every foundation, component, pattern, framework and source package. It is the easiest free way to ground an agent.
- Carbon MCP (`https://mcp.carbondesignsystem.com/mcp`) has four tools: `docs_search`, `code_search`, `get_charts` and `labs_search`. It sits behind IBMid OAuth and gives you a bearer token and session header, and Carbon adds a `carbon-builder` skill for Bob and other clients. It is in public preview, and people outside IBM must request access first.
- Without MCP, `npm i @carbon/react @carbon/icons-react` and the React Storybook are enough for an agent to generate valid Carbon code.

## Watch out for

- The packages include a telemetry postinstall script. According to the FAQ, it only reports from CI installs in IBM or Carbon GitHub organisations. Set `CARBON_TELEMETRY_DISABLED=1` to opt out.
- The look is strongly IBM (Plex type, square corners, blue 60). Retheming beyond the four themes takes real work.
- Some community assets and help channels are IBM-internal only, and older Sketch, Adobe XD and Axure kits are no longer supported.
- The icon count here comes from the package metadata. The docs don't publish a single number.

## Reusable ideas

- Publish an `llms.txt` that maps every component to its usage page and its source package.
- Give each component page separate usage, style, code and accessibility tabs.
- Document patterns such as empty states and loading as full flows, not single components.
- Ship icons, pictograms and tokens as separate packages so products can take only what they need.

## Related

[Iconoir](iconoir.md), [Astryx](astryx.md), [shadcn/ui](shadcn-ui.md), [The Component Gallery](component-gallery.md), [Design System Checklist](design-system-checklist.md)
