---
title: glass-lens-react
description: A React glass-surface demo showing how refractive controls behave over video, images, gradients and interface elements.
url: https://glass-lens-react.vercel.app
type: component-library
formats: React component · interactive demo · live preset editor
topics: [components, motion, 3d-and-shaders]
verdict: useful
agent: []
pricing: free
licence: The package is MIT-licensed; no separate licence for demo media was stated.
licence_class: open-source-permissive
reviewed: 2026-09-26
status: active
related: [liquid-glass, canvas-ui, motion-primitives]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# glass-lens-react

## What it is

`glass-lens-react` is a React glass-surface component with automatic render paths for Chromium, still backdrops in Safari and Firefox, and live video. Its demo acts as an interactive readme, showing controls over video, photos, gradients and interface elements.

## When to open it

Open it when comparing glass treatments for media-heavy pages or when a design needs the same glass control to behave consistently across browsers and moving backgrounds.

## Most useful

- The hero and slideshow controls show the lens bending video and imagery in context.
- Photo, gradient, pattern and flat-colour examples make it easy to see when refraction adds value versus a simple frosted surface.
- Three named presets provide distinct starting points for a crisp hero, subtle portfolio treatment or thick pane.
- The live settings panel can tune a preset and copy its resulting configuration.

## Using it with agents

No agent channel is advertised. The public GitHub repository contains an MIT licence and the demo source.

## Watch out for

- The package selects different rendering techniques depending on browser and backdrop; verify the actual target environment.
- The global specular light is an effect choice that can become distracting when every control flashes at once.
- The demo's video and imagery are visual examples, not assets to reuse.

## Reusable ideas

- Define a few named looks, then keep shared controls consistent through a single preset object.
- Use one light direction across the interface so glass edges feel like parts of one material system.
- Give glass controls a reveal state on hover, focus and press, while keeping their underlying content legible.
- Compare the same component across still, gradient and video backdrops before choosing its default strength.

## Related

[Liquid Glass](liquid-glass.md), [Canvas UI](canvas-ui.md), [Motion Primitives](motion-primitives.md)
