---
title: Drawably
description: MIT hand-drawn UI controls that sketch fresh on each mount, keep native inputs and ship an agent.md.
url: https://www.drawably.dev
type: component-library
formats: component library · JS library
topics: [components, motion]
verdict: useful
agent: [llms-txt]
pricing: free
licence: Free / MIT
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [canvas-ui, evil-buttons, kinetics, inkword]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# Drawably

## What it is

Drawably is an open-source library of hand-drawn UI controls by Daniel Belyi (GitHub `danielwh2`), first published in August 2026. Each control draws a fresh pen sketch from seeded randomness every time it mounts, and the stroke "boils" like a hand-drawn cartoon: three slightly different frames cycled in pure CSS. The real HTML inputs stay in the DOM with an `aria-hidden` SVG layered underneath, so keyboard use, forms, labels and screen readers work normally. The homepage shows 25 pieces: buttons, checkbox, radio, toggle, input, select, textarea, badge, card, list and divider, text decorations (underline, highlight, circle, arrow) and composites such as chips, tabs, tooltips, alerts, steps, kbd, quotes and a pager. It ships as the `drawably` npm package (0.4.2 when reviewed) with no dependencies and optional React wrappers.

## When to open it

Open it for a playful, sketchbook feel: indie product sites, onboarding, whiteboard or note-taking tools, teaching material, or a single annotated section on an otherwise clean page. The text decorations are useful on their own for circling a price or underlining a key word.

## Most useful

- **Seeds**: omit the seed for a new sketch on every mount, or pass a number to keep one you like. The homepage lets you lock pieces and shuffle the rest until the set looks like one hand
- **Button states**: `setState('loading' | 'error' | 'success')` redraws the sketch in state colours, and the stroke boils faster while loading
- **Theming by CSS variables**: `--drawably-stroke`, `--drawably-fill` and state colours, plus roughness, boil amount and stroke width options
- **Rough renderer exported**: functions such as `roughRoundedRect`, `roughCircle` and `roughArrow` return SVG path strings for your own shapes
- **Optional pen font**: Drawably Pen, a 31 KB typeface built from the same stroke code, for labels in the same hand

## Using it with agents

The homepage has a "Copy agent.md" button, and the same file ships in the package at `drawably/agent.md`. It lists every attach function, the markup each one expects, the errors each one throws, the React components and the options. Paste it into your agent's context or point it at `node_modules/drawably/.github/agent.md`, then ask for a specific control. There is no MCP server or shadcn registry.

## Watch out for

- The React entry point is client-only and the peer range is React 18 to 19
- Arrows are appended to `<body>` in page coordinates, so anchors inside a scrolling container drift as it scrolls
- Sizes differ between sources: the README says about 9 KB of JS gzipped plus a 3 KB stylesheet, while the GitHub description says 4 KB
- A constantly boiling UI can tire people. Use it sparingly or set `boil: 0`. It does respect `prefers-reduced-motion`
- The custom select dropdown frame only appears in Chromium. Safari and Firefox keep the native popup

## Reusable ideas

- Keep native inputs and put decoration in an `aria-hidden` SVG layer, so style never costs accessibility
- Use seeded randomness so organic visuals can be random by default and reproducible when needed
- Animate hand-drawn strokes with a few pre-computed frames and CSS, not a per-frame JavaScript loop
- Redraw a control in a new colour to show state instead of adding extra icons

## Related

[Canvas UI](canvas-ui.md), [Evil Buttons](evil-buttons.md), [Kinetics](kinetics.md), [Inkword](inkword.md)
