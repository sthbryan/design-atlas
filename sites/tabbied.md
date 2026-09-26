---
title: Tabbied
description: 338 seeded geometric patterns as an MIT npm/React package, with a CLI and a hosted MCP.
url: https://tabbied.com
type: tool
formats: tool · JS library · MCP server
topics: [assets, components, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, cli]
pricing: free
licence: Free / `tabbied` package and repo MIT; patterns you generate are yours for personal and commercial use
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [fffuel, playgrnd, paper-shaders, shadercn]
---
[← Atlas](../README.md) · Topics: [assets](../topics/assets.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Tabbied

## What it is

Tabbied is a generative pattern maker by Sy Hong and Ye Joo Park. It started as a tool for making wall art and is built on css-doodle. The site offers 338 preset geometric patterns (rings, chevrons, weaves, grids, quarter-circles and so on) and 437 colour palettes. You can recolour any pattern, change its frequency and density live, and download a 3000 px PNG or a vector SVG. In 2026 it grew into a developer library: the `tabbied` npm package (0.6.0, MIT, first published June 2026) has a framework-agnostic core, a React component and every preset as a tree-shakeable export. The site also shows 107 free website templates, each themed around one pattern and one palette.

## When to open it

Open it when a hero, card, poster, cover or brand surface needs a geometric pattern that you can regenerate in code at any size, rather than a fixed image. It fits projects that want a pattern as a repeatable brand asset, since the same seed always draws the same design.

## Most useful

- **Deterministic seeds**: one pattern, seed, grid and option set always draw the same result, so a seed you like can be saved like a design token
- **`TabbiedPattern` React component**: sizes like an image, paints the background colour first on the server so layout doesn't shift, and supports redraw and export through a ref
- **Real vector SVG export**: plain rects, paths and gradients, loaded only when needed. 32 designs can't be converted and fall back to PNG
- **CLI**: `npx tabbied list` filters designs by tag and density, and `npx tabbied render` writes SVG, PNG or animation frames (it drives a headless Chromium)
- **`catalog.json`**: every design with description, tags, palette, options, preview URL and SVG support

## Using it with agents

Tabbied is built for agents. `llms.txt` and `llms-full.txt` document the whole API with a one-line entry per design, and every design has a stable preview image. A hosted MCP server at `https://tabbied.com/mcp` provides `search_designs`, `preview_design` (it returns rendered images, so the agent can look before choosing), `get_design`, `get_docs`, `list_templates` and `get_template`. In Claude Code: `claude mcp add --transport http tabbied https://tabbied.com/mcp`. Then ask for a sparse pattern suited to a hero background and have the agent install `tabbied`.

## Watch out for

- The docs also describe a local `npx -y tabbied-mcp` server with rendering, but no `tabbied-mcp` package was on npm when reviewed, so use the hosted endpoint
- The package is 0.x and moving fast, so pin the version
- The React component is client-only, so in the Next.js App Router render it from a client component
- Some designs use filter effects that browsers render but design tools may import imperfectly. Check the notes before handing an SVG to Figma
- The terms cover generated patterns. Reuse terms for the website templates are not stated separately

## Reusable ideas

- Treat a generated visual as data: name it, seed it, and version it like a token
- Give agents a way to see visual options (rendered previews through MCP), not only text descriptions
- Paint a placeholder at the final size on the server so generative art causes no layout shift
- Fail loudly (a typed error) when an export can't be faithful, instead of writing a broken file

## Related

[Fffuel](fffuel.md), [Playgrnd](playgrnd.md), [Paper Shaders](paper-shaders.md), [shadercn](shadercn.md)
