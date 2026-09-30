---
title: Plasma UI
description: React surfaces with WebGL refraction, liquid joins and grid snapping, demonstrated through a material playground and a small workspace.
url: https://cruxgarden.github.io/plasma-ui/
type: component-library
formats: React container components · WebGL2 materials · interactive playground · workspace example
topics: [components, 3d-and-shaders, motion, inspiration]
verdict: niche
agent: [llms-txt]
pricing: free
licence: The public repository's MIT licence covers its software and associated documentation; keep its copyright and permission notice when reusing it. No paid plan was shown at review.
licence_class: open-source-permissive
reviewed: 2026-09-30
status: active
related: [liquid-glass-web-react, glass-lens-react, reactbits]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md), [inspiration](../topics/inspiration.md)

# Plasma UI

## What it is

Plasma UI is a React container library that draws connected material surfaces behind ordinary HTML using WebGL2. Its [documentation and playground](https://cruxgarden.github.io/plasma-ui/) demonstrate the library through their own interface, rather than collecting unrelated websites.

## When to open it

Open it for an experimental desktop workspace, draggable panels or a glass-like surface treatment. Use the playground to compare materials before deciding whether the effect suits your content; it is a focused container system rather than a complete control library.

## Most useful

- **Material comparison**: the inspected Lumen view has translucent panels, colored rims and a large serif heading over a dark contour background. Switching to Slate made the surfaces opaque and removed the prominent shine.
- **Playground**: adding a panel changed the visible total from five to six and showed joined states. Layout actions and separate material, motion and snapping controls make variations easy to compare.
- **[Workspace example](https://cruxgarden.github.io/plasma-ui/examples/workspace/)**: a dock, inbox, reader, task list and player show denser content within the material. Selecting another inbox item updated the reader heading and message during review.
- **[Component reference](https://cruxgarden.github.io/plasma-ui/#api)**: consult provider settings and surface props after choosing the visual treatment.

## Using it with agents

The [repository](https://github.com/CruxGarden/plasma-ui) publishes the package `@cruxgarden/plasma-ui` and an [AGENTS.md handoff](https://github.com/CruxGarden/plasma-ui/blob/main/AGENTS.md) covering architecture and maintenance. That guide is the verified agent-readable channel; no MCP, HTTP API or installable skill was found. The standard `llms.txt` route could not be read. Pin a package version and check its matching documentation.

## Watch out for

- The project warns about GPU cost on mobile and recommends desktop use; mobile performance was not measured here.
- Refraction samples the library's background layer, not arbitrary live HTML behind it. Overlaps within a canvas merge; clipping inside scrolling containers and dedicated resize handles remain documented limitations.
- The repository documents a CSS fallback and reduced-motion handling. Those paths were not exercised in this browser review.
- Version labels differ between the live documentation footer and the repository README at review; do not assume every deployed example matches the latest package.
- The [MIT licence](https://github.com/CruxGarden/plasma-ui/blob/main/LICENSE) requires preserving its notice.

## Reusable ideas

- Offer a quiet, opaque treatment beside a reflective one so visitors can compare legibility using the same content.
- Pair a material playground with a content-rich example; attractive empty panels do not establish how a workspace reads.
- Keep text and controls as HTML while letting a separate visual layer connect the surfaces.

## Related

[Liquid Glass Web React](liquid-glass-web-react.md), [glass-lens-react](glass-lens-react.md), [React Bits](reactbits.md)
