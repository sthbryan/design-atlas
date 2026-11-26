---
title: tweakcn
description: Visual theme editor for shadcn/ui that previews tokens in context and exports CSS or a registry command.
url: https://tweakcn.com
type: tool
formats: theme editor · shadcn themes · CSS export · registry
topics: [color, components]
verdict: useful
agent: [registry]
pricing: freemium
licence: "the app repository is Apache-2.0. Reuse terms for individual community theme presets are not stated, so check the preset before shipping it."
licence_class: mixed
reviewed: 2026-11-26
status: active
related: [shadcn-ui, radix, designmd]
---
[← Atlas](../site/home.md) · Topics: [color](../topics/color.md), [components](../topics/components.md)

# tweakcn

## What it is

tweakcn is a visual theme editor for shadcn/ui: tune colours, typography and layout tokens against live components, then export the CSS or a registry command that applies the theme to a project. At review the repository shows about 10,500 stars. The site also offers AI theme generation from an image or a text prompt as a Pro feature.

## When to open it

- When a shadcn/ui theme has to be tuned by eye against real components instead of edited variable by variable.
- When you want a shareable theme (community gallery) rather than a one-off palette.
- When a project needs Tailwind v4 theme output from the same editor.

## Most useful

- Live preview of token changes on actual components, so a colour is judged on a button or sidebar, not a swatch.
- Export paths: CSS variables, Tailwind output, and a shadcn registry command that installs the theme.
- Community themes gallery for starting from a theme someone already tuned.
- AI generation (Pro): image-to-theme and text-to-theme shortcuts into the same editor.

## Using it with agents

- The registry command is the agent surface: generated themes install like any shadcn registry item.
- No first-party MCP server or llms.txt was found at review (llms.txt returns 404), so agents consume the exported CSS or registry output.
- Exported CSS drops into existing projects, including tools that read Tailwind variables.

## Watch out for

- Pro pricing and AI features were listed on the pricing page at review; the FAQ confirms a Pro tier exists. Check current prices there.
- Community presets carry no stated reuse terms individually. The app licence does not cover preset content.
- A theme that looks right as swatches can still fail contrast on components. Preview on components before shipping.

## Reusable ideas

- Tune tokens against rendered components and check contrast in context, not in isolation.
- Export every theme three ways (CSS, framework config, registry) so it lands in any stack.
- Let users checkpoint and restore theme states while exploring, so tuning is reversible.

## Related

[shadcn/ui](shadcn-ui.md), [Radix](radix.md), [DESIGN.md](designmd.md)
