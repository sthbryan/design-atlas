---
title: ObsidianUI
description: A free React component library whose live previews pair restrained documentation layouts with expressive hover and motion effects.
url: https://obsidianui.dev/
type: component-library
formats: React components · Tailwind CSS · shadcn registry · API · llms.txt
topics: [components, motion, inspiration]
verdict: useful
agent: [llms-txt, registry, api]
pricing: free
licence: The library is MIT licensed at review; third-party assets and dependencies retain their own licences.
licence_class: open-source-permissive
reviewed: 2026-09-27
status: active
related: [shadcn-ui, componentry, godly]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [inspiration](../topics/inspiration.md)

# ObsidianUI

## What it is

ObsidianUI is a React component library with live previews, source, installation guidance and a public registry. Its catalogue mixes practical interface pieces with visual effects and interaction patterns.

## When to open it

Open it to study a component in context and compare the implementation with its rendered state, especially for hover effects, interactive backgrounds and polished controls.

## Most useful

- **Browse Components** on the home page leads into the catalogue. The component pages keep a narrow left navigation, a central preview and a right-side page outline, leaving the example itself plenty of room.
- **[Hover Image](https://www.obsidianui.dev/docs/hover-img)** shows a quiet list treatment: large black item names, smaller muted descriptions and thin dividers on a pale stage. Hovering reveals the image, so the motion is attached to a clear list target.
- Component pages expose preview and code views; use the preview to understand spacing and interaction, then inspect the source and install instructions before adapting it.

## Using it with agents

The site publishes [llms.txt](https://www.obsidianui.dev/llms.txt), a component registry and API documentation. Its [CLI guide](https://www.obsidianui.dev/docs/cli) describes adding the registry through shadcn tooling. The library is available without a paid account at review.

## Watch out for

- The MIT licence covers the library; check separate licences for any third-party assets or dependencies included in a component.
- Hover Image's image reveal depends on pointer hover. Check the touch and keyboard behavior before using the same interaction on a production list.

## Reusable ideas

- Give documentation previews a clear three-column frame: compact navigation, broad example stage and a small table of contents.
- Keep a motion-led list legible at rest by using strong item labels, quiet supporting text and consistent separators; let hover add a second layer of imagery.
- Pair each visual example with source and installation directions so a designer can assess the effect before adopting it.

## Related

[shadcn/ui](shadcn-ui.md), [Componentry](componentry.md), [Godly](godly.md)
