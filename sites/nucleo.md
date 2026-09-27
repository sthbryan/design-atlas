---
title: Nucleo
description: A polished SVG icon system with sharply differentiated families, a desktop editor, and an agent workflow for licensed icons.
url: https://nucleoapp.com/
type: icon-library
formats: SVG icon families · web and desktop app · React and Vue packages · CLI, MCP server, and agent skills
topics: [icons, assets, agent-skills]
verdict: useful
agent: [mcp, skill]
pricing: freemium
licence: "Free SVG sets are described as open-source, but their licence is not named on the listing. Paid families use Nucleo's commercial licence: up to 250 icons per project, or 100 in downloadable templates and open-source projects with a copyright notice; extended licences cover specified exceptions. Individual paid families were $69–99 each and the bundle was $149 sale / $405 list (at review). Do not sublicense or resell icons."
licence_class: mixed
reviewed: 2026-09-26
status: active
related: [3dicons, iconoir, phosphor]
---
[← Atlas](../README.md) · Topics: [icons](../topics/icons.md), [assets](../topics/assets.md), [agent-skills](../topics/agent-skills.md)

# Nucleo

## What it is

Nucleo is an icon library and editor built around separate, deliberately drawn families rather than one base glyph with cosmetic toggles. The Core and UI families cover everyday interface work; Sharp uses firmer corners, Pixel is grid-like, Micro Bold keeps heavier marks legible at small sizes, and Glass adds a shaded, translucent look. The web and desktop apps organize the SVGs and export them for product work.

## When to open it

Open [the family overview](https://nucleoapp.com/premium-icons) when an interface needs a complete icon vocabulary and you want to compare stroke, corner, and density choices before settling on one. Use [UI Icons](https://nucleoapp.com/ui-icons) for compact controls and [Pixel Icons](https://nucleoapp.com/pixel-icons) when the rest of the interface uses a retro grid. The [free sets](https://nucleoapp.com/free-icons) are a useful starting point for glass, isometric, flag, cursor, and social icons.

## Most useful

- Family previews make it easy to judge how a single subject changes between outline, filled, sharp, pixel, and heavier treatments.
- SVG export supports individual files, sprites, and symbols, with options such as size, padding, colour, and stroke width.
- The desktop and web apps provide a managed place to search and organize icons before export.

## Using it with agents

The [AI integration](https://nucleoapp.com/ai-integration) installs Nucleo's MCP server and agent skills through `npx @nucleoicons/skills setup`. It supports Cursor, Claude Code, and Codex, with React, Vue, or vanilla SVG targets. A free-only setup uses `--free` without an account; licensed families require signing in. An agent can search a family and return an SVG or framework component, then apply that family's supported size, stroke, or colour options.

## Watch out for

- The free sets are described as open-source, but the free-icons page does not name a specific licence. Check the individual source before redistributing them.
- Paid family licences cap use at 250 icons in a project and 100 icons in downloadable templates or open-source projects. Some uses require a separate extended licence; read the [current licence](https://nucleoapp.com/license) before shipping.
- The icon packages are licensed assets, not an open-source icon dataset. Do not include their source files in a public or downloadable product without checking the licence.

## Reusable ideas

- Treat size, stroke weight, corner shape, and fill as a family-wide system, and show those attributes in the preview instead of making users infer them from a name.
- Put free families in a separate section so users can identify which sets they can try without an account or paid licence.
- Give agent tooling the same family and style vocabulary that designers see in the visual catalogue.

## Related

[3dicons](3dicons.md), [Iconoir](iconoir.md), [Phosphor](phosphor.md)
