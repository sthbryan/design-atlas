---
title: Scroll Shaders
description: Paid library of 117 looping WebGL backgrounds, shader components and 6K stills, sold as paste-in code or as MP4 for tools that take no code.
url: https://scrollshaders.com
type: asset-library
formats: 117 shader entries in 11 families at review · React components and vanilla JS snippets · seamless MP4 loops at 480p, 720p and 1080p · 2560px poster still · 77 stills in 15 collections at 6K · live colour filters
topics: [3d-and-shaders, motion, assets]
verdict: useful
agent: []
pricing: paid
licence: A commercial licence ships with every plan and covers client work, products and templates, but not reselling the shaders as a library. Plans at review are $29 monthly with a ten-item weekly limit, $129 yearly or $239 lifetime, billed in USD
licence_class: proprietary-paid
reviewed: 2026-11-11
status: active
related: [shadertoy, grainient, backgrounds-supply]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md), [assets](../topics/assets.md)

# Scroll Shaders

## What it is

A shop for animated backgrounds, organised by visual device rather than by technology. Eleven shelves at review — mesh gradients, grain gradients, dither, liquid metal, light and rays, fluted glass, halftone, waves and lines, 3D and depth, retro and ASCII, patterns and grids — with 117 entries between them, each previewed as a playing loop that is badged with its duration, mostly eight, ten or twelve seconds. Colour chips filter the library by hue and by dark or light, which is the fastest way to find something that fits a palette you already have.

The product is deliberately narrow: a hero background. Each shader is a single WebGL2 fragment shader in one file, with a React version and a plain HTML plus JavaScript version, and no three.js or npm install in between. The 3D shelf is raymarched inside the same single shader, so the "3D" promise does not pull in a scene graph.

## When to open it

Open it when a hero or a section needs a moving field of colour or texture and a video file would be too heavy or too blunt, and also when the stack cannot run your own code at all — Webflow, Framer and slides all take the MP4 route. It is the wrong place to look for illustration, for animated icons or for anything that has to respond to pointer input.

## Most useful

- **Loops that close by construction.** Motion travels a closed path through 4D noise, so the last frame lands on the first; no crossfade or trim is needed.
- **Code and video from the same asset**, which means the same look can go behind a custom hero and into a client's page builder without being rebuilt.
- **The component manages its own cost**: it pauses off-screen and in background tabs, caps device pixel ratio, and shows a still frame under reduced-motion preferences.
- **Shelf names that describe what you see.** "Grain gradients" and "fluted glass" are more useful in a design conversation than a technical label.
- **A colour filter across the whole library**, so matching an existing brand palette takes one click rather than a hundred previews.
- **A live customiser** on the higher plans that exports your own variation instead of only the stock loop.

## Using it with agents

There is no `llms.txt` at review and no public API. Item URLs are predictable (`/shaders/<family>/<slug>`), so an agent can read a shelf page to shortlist candidates by name, family and loop length, and can cite a preview URL in a brief. It cannot read the GLSL: the code sits behind a plan, and the public page shows a video, not the shader. Treat the site as a catalogue to link to, and get the code through a human with a licence.

## Watch out for

- Counts differ by page. The library page says 117 shaders across 11 shelves; the pricing page counts 164 "shaders and components" plus 77 stills, so the headline number depends on what you count.
- The monthly plan is metered: ten new items a week, and anything already opened stays open. Yearly and lifetime are unlimited.
- All sales are final, and logo and image effects are excluded below the yearly plan.
- A preview playing at full bleed is not a budget. Judge the cost on the page you are actually building, on a mid-range phone.
- The licence covers use in your work but not redistribution, so a component cannot be published as part of an open-source UI kit.
- Everything here looks like the same hand. A page of these plus a stock gradient reads as one trend, not as a distinct identity.

## Reusable ideas

- Sell one asset twice: as code for engineers, as video for the tools engineers do not control.
- Badge every preview with its loop length, so a designer can pick by rhythm.
- Pause animation when it leaves the viewport and freeze it under reduced motion — a behaviour worth copying whether or not the shader is bought.
- Name collections after the visual device, and let a colour filter do the rest.

## Related

[Shadertoy](shadertoy.md), [Grainient](grainient.md), [Backgrounds Supply](backgrounds-supply.md)
