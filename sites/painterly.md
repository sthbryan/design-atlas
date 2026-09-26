---
title: Painting Loaders
description: Slow p5.brush loaders that paint Monet-style scenes; each copies out as one standalone HTML file.
url: https://painterly.design-tools.workers.dev
type: gallery
formats: gallery
topics: [motion, components, assets]
verdict: niche
agent: []
pricing: free
licence: Free; licence for the copied code not stated (it loads p5.js, LGPL-2.1, and p5.brush, MIT)
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [circle-loaders, paper-shaders, loading-dev, loader-buttons]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [assets](../topics/assets.md)

# Painting Loaders

## What it is

Painting Loaders is a small gallery of slow, painterly loading animations by Sasha (@aleksksaa), hosted on Cloudflare Workers. Each loader paints a small picture stroke by stroke on a canvas, holds it for a moment, then starts again, in a loop of about nine seconds. At review time there were 12. Eleven are Monet-style Impressionist scenes (Garden, Dawn, Willow, Wisteria, Orchard, Irises, Poppies, Koi, Roses, Oranges, Sail), and one, Dusk, is an abstract piece. They are drawn with p5.js and the p5.brush library, which imitates real brushes, washes and hatching. The pitch is that a loader can set a mood rather than just signal "busy". It is not a React library: what you copy is plain HTML and JavaScript.

## When to open it

Open it when a wait is long enough to be noticed and the product has a calm, crafted or artistic tone: a creative tool rendering an export, a journaling or wellness app syncing, a gallery loading large images, or a splash screen.

## Most useful

- **Hover replay** on each card, a full-screen view and a light and dark theme
- **"Copy code"** builds a complete standalone HTML file for that loader. It includes only the painting functions that loader actually uses, and pins the same p5 and p5.brush versions from jsDelivr, so the copy looks the same as the preview
- **Editable copies**: the copied file starts with the loader's tuning values and palette as plain constants, followed by its loop and hold timings, so it is easy to recolour or slow down
- **A clear engine model**: each stroke is drawn once off screen, then revealed on the visible canvas in slices along its direction, so it looks painted in real time

## Using it with agents

Partly usable. There is no `llms.txt`, package or docs, but the copied file is self-contained, readable HTML that an agent can adapt: change the palette, resize the canvas, or wrap it in a React or Vue component that mounts p5 in instance mode. The site's scripts are unminified and well commented.

## Watch out for

- The site publishes no licence for its own code. Ask the author before shipping a copied loader in a commercial product
- Each loader loads the whole p5.js library plus p5.brush from a CDN, which is heavy for a spinner and adds a third-party request
- The copied code uses p5's global mode, so two loaders on one page, or one inside a framework, will need refactoring
- No reduced-motion handling was found in the gallery code, so add a static frame for users who prefer less motion
- A nine-second painting loop suits long waits. For short ones it will never finish its picture

## Reusable ideas

- Treat a long loading state as a small piece of art that sets the tone instead of signalling urgency
- Pre-render the expensive drawing off screen and reveal it progressively, which is cheaper than painting live
- Build the copy button from the live code so the snippet always matches what the user saw
- Hold the finished image briefly before looping, so each cycle feels complete

## Related

[Circle Loaders](circle-loaders.md), [Paper Shaders](paper-shaders.md), [loading.dev](loading-dev.md), [Loader Buttons](loader-buttons.md)
