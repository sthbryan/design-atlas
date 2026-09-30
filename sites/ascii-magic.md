---
title: ASCII Magic
description: Browser image and video studio for ASCII, dithering, mosaics and visual effects, with an MCP server for agents.
url: https://www.ascii-magic.com/
type: tool
formats: image and video effects · recipes · MCP server · agents.md
topics: [assets, motion, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: freemium
licence: Free plan includes core styles and unlimited watermark-free exports; Pro was $4/month on the annual plan, $7 quarterly or $8 monthly at review. The terms assign the exported output to the user for commercial use; the site and renderer remain proprietary.
licence_class: proprietary-paid
reviewed: 2026-09-29
status: active
related: [ascii-studio, ditther, doodad-dither-me-this, halftone-maker, dotforge]
---
[← Atlas](../site/home.md) · Topics: [assets](../topics/assets.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# ASCII Magic

## What it is

ASCII Magic is a browser studio for transforming images and video into ASCII, dither, pixel, mosaic, voxel, halftone, glitch and other styles. The site pairs a before-and-after slider with style previews, recipes and use-case examples; the editor adds real-time controls, post-processing and exports for stills and video. The maker is Kailash, an independent designer and developer.

## When to open it

- When a photo or video needs a distinct print, ASCII, retro-computer or glitch treatment without installing an editor.
- When you need a quick palette or algorithm comparison, or a shareable recipe that preserves a chosen look.
- When you want an agent to render an image through MCP instead of manually operating the browser.
- When you need an image or video export with an effect applied frame by frame.

## Most useful

- **Style pages**: individual guides show examples and controls for dithering, dots, ASCII, mosaics and other effects.
- **Dither controls**: the current guide lists 15 algorithms, 16+ palettes, custom colours and animated matrices. It distinguishes stable ordered patterns from error-diffusion effects that can shimmer across video frames.
- **Recipes**: one-click presets load the tool with a saved style and parameter set.
- **Exports**: the free plan includes unlimited watermark-free exports for core styles; Pro adds the full effects library, 4K exports and generative renders.
- **Visual direction**: a dark, nearly black frame gives the image most of the space. A before/after divider and row of style chips make the effect differences immediately scannable.

## Using it with agents

- **MCP**: connect to `https://www.ascii-magic.com/mcp`. The public setup guide supports MCP clients using streamable HTTP and OAuth. You need an ASCII Magic account; free accounts can use free styles, while Pro features follow the account plan.
- **Agent guide**: the site publishes [`agents.md`](https://www.ascii-magic.com/agents.md) alongside its MCP instructions.
- A call can process an image or video with a style and return rendered output; no API key or SDK is required by the published guide.

## Watch out for

- Local styles process images in the browser. Generative AI is different: it sends images to an AI provider for processing, so avoid confidential images there.
- The free plan has core styles and three starter generative credits; Pro was listed at $4/month billed yearly, $7 quarterly or $8 monthly at review. The yearly rate is a launch price.
- Outputs may be used commercially according to the terms, but you still need rights to the source image or video. The site's own code and content are not offered under an open-source licence.
- The MCP service requires sign-in even though the core browser editor does not.

## Reusable ideas

- Let visitors compare an original and a transformed image through one direct, draggable boundary.
- Pair a broad, curated preset library with explicit controls so people can begin with a named look and still refine it.
- Keep the choice between local processing and remote generative processing visible where privacy and output quality differ.
- Provide a small text recipe or URL that reproduces the same parameters in another session.

## Related

[ASCII Studio](ascii-studio.md), [Ditther](ditther.md), [Dither Me This](doodad-dither-me-this.md), [Halftone Maker](halftone-maker.md), [DotForge](dotforge.md)
