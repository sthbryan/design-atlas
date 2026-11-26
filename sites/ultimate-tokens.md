---
title: Ultimate Tokens
description: HCT palette and design-token generator exporting CSS, Tailwind, DTCG and DESIGN.md, with a brand-kit MCP.
url: https://github.com/kimgranlund/ultimate-tokens
type: tool
formats: token generator · web app · web component · Figma plugin · MCP server
topics: [color, design-md]
verdict: useful
agent: [mcp]
pricing: free
licence: MIT, stated in the repository LICENSE.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [design-md-format, designmd, typeui]
---
[← Atlas](../site/home.md) · Topics: [color](../topics/color.md), [design-md](../topics/design-md.md)

# Ultimate Tokens

## What it is

Ultimate Tokens is a perceptual colour-palette and design-token generator. It builds tonal ramps that stay visually even, derives a 53-role semantic layer (surfaces, on-colors, outlines, containers, scrims, inverse), and exports to CSS, Tailwind v4, shadcn/ui, Panda CSS, Radix, Figma, DTCG, JSON and a design-system bundle (`DESIGN.md` plus `tokens.json` plus preview cards). It ships as a web app, a dependency-free web component, and a Figma plugin, all from one engine.

## When to open it

- When a palette needs to be generated with even perceptual steps instead of picked swatch by swatch.
- When semantic roles (surface, on-color, outline) should be derived from ramps rather than hand-assigned.
- When the output has to land in several stacks at once (CSS, Tailwind, DTCG, Figma variables).

## Most useful

- HCT tonal ramps with a 53-role semantic layer in light and dark, validated against a canonical role table.
- Geometry scale derived from one centering law, with radius modes (Default, Round, Sharp, Pill) and CSS plus DTCG dimension exports.
- Export drawer with ten colour formats, typography, geometry, design-system and project groups, plus a one-click zip.
- Brand-Kit MCP: a zero-dependency server pre-filled with your tokens that serves palettes, ramps, typography and geometry scales to MCP agents.

## Using it with agents

- MCP: download the brand-kit server, point Claude Code, Cursor or any MCP client at `node brand-kit-server.mjs`, and the agent builds with your exact tokens.
- The design-system export writes a `DESIGN.md` aimed at Claude (claude.ai/design and Claude Code) alongside `tokens.json`.
- The web component can be embedded directly where a palette tool is needed inside another app.

## Watch out for

- The repo is large and actively developed (about 1,448 commits at review); the export surface is wide, so pin the version you generate from.
- Generated tokens are only as good as the base ramp you start from. The engine makes ramps even, it does not choose the brand colours for you.
- Figma UI3 export is interchange-only, not a native Figma format.

## Reusable ideas

- Derive semantic roles from perceptual ramps with a canonical role table, then validate exports against that table.
- Ship one engine behind a web app, a web component and a plugin, so behaviour never drifts between surfaces.
- Pre-fill an MCP server with the generated tokens so agents build with the palette instead of re-describing it.

## Related

[Google's DESIGN.md format](design-md-format.md), [DESIGN.md](designmd.md), [TypeUI](typeui.md)
