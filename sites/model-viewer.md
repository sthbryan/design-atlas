---
title: model-viewer
description: Web component documentation for showing interactive 3D models in a page or in AR, with a quick start, examples and FAQ.
url: https://modelviewer.dev
type: documentation
formats: web component · documentation · examples and editor · AR on supported devices · Apache 2.0
topics: [3d-and-shaders, documentation]
verdict: useful
agent: []
pricing: free
licence: Apache License 2.0, copyrighted by Google and stated in the site footer at review
licence_class: open-source-permissive
reviewed: 2026-11-10
status: active
related: [needle-engine, threejs]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [documentation](../topics/documentation.md)


# model-viewer

## What it is

The documentation site for a single custom element that displays an interactive 3D model in a page and can hand it to a phone's augmented reality viewer. The proposition is one line long, the navigation is four items — quick start, getting started, examples, FAQ — and the rest of the page is a live model you can drag.

Its design lesson is about narrowing: a three-dimensional technology presented as a two-attribute HTML tag, with the complexity moved into documentation and examples rather than into the hero.

## When to open it

Open it when a page has to show a physical product and a static image is not enough, or when you need an AR handoff from a website without building an app. Also useful as a model for documenting a component whose interesting part is configuration rather than appearance.

## Most useful

- **A live model in the hero**, so the capability is demonstrated before it is explained.
- **A four-item structure** — quick start, getting started, examples, FAQ — that assumes a reader who wants to ship today.
- **Examples with editable attributes**, which teach the API faster than prose.
- **Progressive enhancement by default**: without a capable device, the model still renders as an image.

## Using it with agents

No `llms.txt` or MCP server at review, but the documentation is plain HTML and the component's attribute API is small and stable, so an agent can read the examples and generate markup reliably. The package itself is the better source for exact attribute names.

## Watch out for

- Model files dominate performance; a page with three models is a page that loads late.
- AR support depends on the device and browser, so it is an enhancement, not a feature you can promise.
- The default controls are functional rather than designed; brand them or accept the browser look.
- Model authoring is the real cost — the component is the easy part.

## Reusable ideas

- Put the live artefact in the hero and the reference material behind it.
- Keep the navigation to four entries when the product is one component.
- Document attributes with editable examples.
- Degrade to a static image everywhere the capability is missing.

## Related

[Needle Engine](needle-engine.md), [Three.js](threejs.md)
