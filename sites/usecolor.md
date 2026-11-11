---
title: Usecolor
description: OKLCH palette generator by Imperavi that builds tonal scales, semantic roles and chart-ready sets, with colour-blindness simulation.
url: https://imperavi.com/usecolor
type: tool
formats: OKLCH palette generator · six generation models · colour roles and neutrals · tonal scales and semantics · protanopia, deuteranopia and tritanopia simulation · chart previews · exports to HEX, OKLCH, SVG and CSS
topics: [color, data-viz]
verdict: useful
agent: []
pricing: freemium
licence: Free to use with a Pro tier at $5 per month or $50 per year at review, and a three-day trial with no card. No licence or terms for the tool are stated on the page, and nothing says what you may do with exported palettes
licence_class: proprietary-paid
reviewed: 2026-11-11
status: active
related: [colorbox, hihayk-scale, poline]
---
[← Atlas](../site/home.md) · Topics: [color](../topics/color.md), [data-viz](../topics/data-viz.md)

# Usecolor

## What it is

A palette generator built inside the working vocabulary of data visualisation rather than of branding. You pick a model — Balance, Adaptive, Companion, Composition, Sequential, Diverging — choose colour roles (Equal, Accent, Related), set a hue direction and spread from 0° to 360°, a colour count up to nine, and how many neutrals the system should carry, with an option to replace generated companions with subtly tinted neutrals.

The output is arranged as a system, not swatches: tonal scales, semantic roles, utility colours, an area comparison that shows how much visual weight each colour will take, and a hue map that explains the circular spacing you just set. Contrast is handled through a separate preview rather than a single ratio badge.

Two things make it worth opening over a generic generator. The first is colour-vision simulation — protanopia, deuteranopia, tritanopia — applied to the palette in place, which is where categorical palettes usually fail. The second is chart previews: the same colours rendered on sample data, so you can see whether an ordered scale reads as magnitude or a related set reads as categories before it reaches a dashboard.

## When to open it

Open it when the palette has a job to do — a chart, a dashboard, a status system — and not merely a mood to set. Also open it when you need to prove a palette survives colour-blindness, or when you need CSS, SVG, OKLCH and HEX from one source without a design tool in the loop.

## Most useful

- **Sequential and diverging models**, the two patterns data work actually needs and most palette tools ignore.
- **Colour-vision simulation in the same view as the palette**, so the failure is visible while you edit rather than in an audit later.
- **Chart previews on sample data**, which answer whether the ramp orders and the categories separate.
- **Tonal scales and semantic roles generated together**, so a UI can take both.
- **Neutrals as a first-class choice**, including tinted neutrals that keep a palette coherent.
- **Four export formats** — HEX, OKLCH, SVG, CSS — with copy to clipboard.

## Using it with agents

`llms.txt` does not exist at review: the path returns the site's HTML rather than a text file, which is a false positive for anything checking status codes alone. There is no API and no documented export endpoint. An agent should generate palettes with a library and use this page for its models and vocabulary, not as a data source.

## Watch out for

- The models are opinionated presets. "Balance" and "Adaptive" decide a lot on your behalf, and the difference between them is not spelled out in the interface text.
- Contrast against a background is previewed but not enforced; there is no pass mark to fail.
- Pro is metered by subscription for features that are mostly local computation, so check what the free tier leaves out before relying on a workflow.
- No licence or terms page for the tool, so treat the interface as read-only inspiration and the exported values as your own work.
- It is Imperavi's side project beside charting tools, so the roadmap follows that interest.

## Reusable ideas

- Generate by role and by data shape, not only by count.
- Show palettes on sample charts while they are being chosen.
- Put colour-vision simulation in the editor rather than in a separate accessibility step.
- Explain the hue map visually: a circle with degrees marked teaches the model in one glance.

## Related

[ColorBox](colorbox.md), [Scale](hihayk-scale.md), [Poline](poline.md)
