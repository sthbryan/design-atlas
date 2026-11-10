---
title: Needle Engine
description: Ships 3D scenes to the web from Unity, Blender or code, with a product-led site that shows the editor as the interface.
url: https://needle.tools
type: tool
formats: web engine · Unity and Blender integrations · code-first workflow · spatial websites · llms.txt
topics: [3d-and-shaders, documentation]
verdict: useful
agent: [llms-txt]
pricing: freemium
licence: No licence is stated for the engine on the pages read at review; the free tier and paid tiers are described commercially
licence_class: not-stated
reviewed: 2026-11-10
status: active
related: [model-viewer, threejs, spline]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [documentation](../topics/documentation.md)


# Needle Engine

## What it is

A tool for getting 3D into a website without rebuilding the scene in a second tool: it takes work made in Unity or Blender and ships it to the browser, or lets you start from code. The site is built around that promise — the headline is a verb, ship 3D to the web from Unity, Blender, or code, and the products are listed as products rather than as features.

The design interest is in how it handles an integration product: the visual weight goes to the tools people already use, and the engine is presented as the bridge rather than the destination.

## When to open it

Open it when a project needs a 3D scene that a designer or artist authors in a familiar tool, or when you want a reference for marketing a pipeline instead of a single piece of software. Less useful if you only need to place one model in a page.

## Most useful

- **The pipeline stated in the headline**, so the reader knows immediately whether it matches how they work.
- **Named integrations** with the tools a 3D team already has open.
- **Spatial websites as the category**, which sets expectations for interactions rather than for product viewers.
- **`llms.txt` served at review**, so an agent can read the product structure and the workflow without parsing marketing pages.

## Using it with agents

`llms.txt` resolves at review and is the useful channel here; there is no MCP server. Because the workflow spans two external applications, an agent can help with the web side but cannot drive the authoring tool, which is the part that matters most.

## Watch out for

- It is a pipeline product: adopting it means adopting an authoring workflow, not just a library.
- Web 3D budgets are unforgiving; what looks fine in the editor can be tens of megabytes in a browser.
- No licence is stated on the pages read, so the engine's terms have to be checked before shipping.
- The site is early-stage in tone and some pages are thin.

## Reusable ideas

- Put the pipeline in the headline: "from X to Y" tells a reader more than a feature list.
- Name the tools you integrate with, not the formats you support.
- Market a bridge product by showing both banks, not the bridge.
- Serve an `llms.txt` describing the workflow, not only the pricing.

## Related

[model-viewer](model-viewer.md), [Three.js](threejs.md), [Spline](spline.md)
