---
title: Halftone Maker
description: Browser studio for vector halftone and stipple images, with shape, grid, colour and sampling controls.
url: https://halftonemaker.com/
type: tool
formats: halftone and stipple editor · PNG, SVG and JSON export · batch processing
topics: [assets, color]
verdict: useful
agent: []
pricing: freemium
licence: Free tier allows commercial use and unlimited 1× PNG export. Pro was $4/month or $48/year at review and adds unlimited SVG, high-resolution PNG, batch export and 30 monthly background removals. Generated outputs may be used commercially without attribution, but default sample artwork is preview-only; the app and its code are proprietary.
licence_class: proprietary-paid
reviewed: 2026-09-29
status: active
related: [vector-halftone-maker, pointilliser, ascii-magic, ditther]
---
[← Atlas](../site/home.md) · Topics: [assets](../topics/assets.md), [color](../topics/color.md)

# Halftone Maker

## What it is

Halftone Maker is a browser image studio for turning photos into vector halftone and stipple patterns. Its editor combines a large canvas with a top toolbar for loading, cropping, masking, presets and grid choices, plus a right-side panel for canvas adjustments and detailed parameters. The page states that ordinary halftone processing runs locally and does not upload images.

## When to open it

- When you need halftone, stipple or line-screen artwork for a poster, print or graphic element.
- When you want to compare square, hexagonal, radial, line or ring layouts and tune the sampling, shape and colour.
- When you need an SVG or a batch of consistently processed images; those exports require Pro.

## Most useful

- **Grid and shape controls**: choose grid arrangements and dot forms, then tune spacing, scale, angle, radius and sampling.
- **Image adjustments**: crop or mask a source and adjust blur, gamma, contrast, clamp and colour handling before export.
- **Presets and snapshots**: save named settings and capture alternate states to compare.
- **Exports**: the free tier includes unlimited standard-size PNG; Pro adds SVG, high-resolution PNG and batch exports. The editor also lists JSON output for raw dot data in its launch notes.
- **Privacy boundary**: the privacy page says the halftone tool processes images in-browser. The separate Background Remover uploads images to Supabase and sends them to fal.ai, which may retain them; do not use that feature for confidential images.

## Using it with agents

There is no published MCP, API, CLI, `llms.txt` or agent guide. Use the browser editor manually, export an image, and then provide that file to an agent. The 2D controls are exposed in the page, but no agent-facing endpoint is documented.

## Watch out for

- The free plan limits PNG exports to 1×; Pro was listed at $4 per month or $48 annually at review. Pricing and feature placement can change.
- Generated output is licensed for commercial use without attribution, but the default sample artwork is strictly for preview. That output grant does not license the site's code or design.
- The Background Remover has a different privacy model from halftone processing: it sends images to a third-party AI service and fal.ai may retain them for at least seven days.
- The terms limit each account to one person.

## Reusable ideas

- Keep the artwork on a broad canvas while grouping related parameters into labelled sections in a side panel.
- Expose simple, advanced and expert control levels so a focused first pass can grow into a more technical workflow.
- Let users save and compare settings, making visual iteration repeatable without turning each variation into a separate project.

## Related

[Vector Halftone Maker](vector-halftone-maker.md), [Pointilliser](pointilliser.md), [ASCII Magic](ascii-magic.md), [Ditther](ditther.md)
