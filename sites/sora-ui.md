---
title: Sora UI
description: Animated React component registry with live motion demos and ready-made layout showcases.
url: https://ui.soralabs.studio/catalog
type: component-registry
formats: shadcn-compatible React registry · CLI · MCP
topics: [motion, components, inspiration]
verdict: useful
agent: [cli, mcp, registry]
pricing: free
licence: Free to preview and install; original code is MIT, while some components derived from Animate UI retain its MIT + Commons Clause terms.
licence_class: mixed
reviewed: 2026-09-27
status: active
related: [smooth-ui, motion-zajno]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [inspiration](../topics/inspiration.md)

# Sora UI

## What it is

Sora UI is a React component registry organized around motion primitives, styled UI foundations and a catalog of animated layout examples. The catalog is useful as a visual reference in its own right: each item pairs a live treatment with a complete composition rather than showing an isolated animation. The registry can be browsed without an account, and components are free to install. Original Sora UI code is MIT-licensed; the repository says a subset derived from Animate UI keeps that project's MIT + Commons Clause terms.

## When to open it

Open the catalog when a page needs a scroll-led gallery, chapter sequence, sticky card stack, cursor-following reveal or animated text treatment. Use the Motion area for smaller effects and the Catalog area for finished layouts that show how typography, media and motion work together.

## Most useful

- The catalog groups seven full examples and offers card, compact and list views, so a quick scan can become a closer comparison without losing the component names.
- In the visible cards, artwork sits in large framed previews beneath a compact navigation bar; a broad blank background and one oversized headline keep the collection legible.
- Items such as Scroll Chapters and Sticky Scroll Cards expose motion as part of the page structure, while Text Reveal Box and Cursor Trail Reveal make one effect easy to isolate.
- Component pages include live previews and install controls. The catalog is a visual showcase; the underlying source is available through the registry.

## Using it with agents

The site links to a shadcn-compatible registry, a Sora CLI and an MCP server for searching documentation and registry metadata. The free catalog and component pages can be inspected without signing in. Install a component into your own project and adapt the source there; check the Commons Clause before redistributing a component collection.

## Watch out for

- Check the individual component's provenance: original code uses MIT, while Animate UI-derived portions retain the upstream Commons Clause restriction.
- Catalog demos are larger and more art-directed than a typical reusable control; adapt the layout and motion to the target product rather than transplanting the entire treatment.
- Some catalog effects use GSAP and scroll behavior, so inspect their dependencies and reduced-motion handling before choosing one.

## Reusable ideas

- Pair a scroll-triggered transition with clear chapter markers so motion also communicates where the visitor is in a sequence.
- Keep the component preview and its title close together, then move installation detail below the live example.
- Use the same component in multiple catalog densities to test whether the visual still reads at different scales.

## Related

[Smooth UI](smooth-ui.md), [Motion Design Principles by Zajno](motion-zajno.md)
