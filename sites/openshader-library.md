---
title: OpenShaderLibrary
description: 117 shader effects written once and exported for React, React Native and SwiftUI, so web and native apps share the same visuals.
url: https://openshaderlibrary.com
type: asset-library
formats: shader effects exported as source · React (WebGL2/GLSL) · React Native (Skia/SkSL) · SwiftUI (Metal) · avatar studio
topics: [3d-and-shaders, ai-interfaces, assets, motion]
verdict: useful
agent: [llms-txt]
pricing: freemium
licence: browsing, tuning and sharing a configuration are free, as is the Avatar Studio. Exporting source for every effect needs Pro at US$6 a month, which licenses the downloads for unlimited commercial apps and keeps that licence if you cancel; a lifetime option was discounted to US$59 at this review. The export licence is proprietary and names the buyer in each zip.
licence_class: proprietary-paid
reviewed: 2026-11-11
status: active
related: [shaders, paper-shaders, book-of-shaders, animated-icons]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [ai-interfaces](../topics/ai-interfaces.md), [assets](../topics/assets.md), [motion](../topics/motion.md)


# OpenShaderLibrary

## What it is

OpenShaderLibrary (OSL) is a curated collection of 117 shader effects where each effect is one kernel rendered three ways: React through WebGL2 and GLSL ES 3.0 in a component, React Native through Skia and SkSL, and SwiftUI through Metal. The site's claim is that the preview you tune is the code you ship, because the browser preview runs the same kernel the export compiles. The effects are grouped by what they are — orbs, liquid, gradients, glass, ASCII, minimal fields, light — plus a set of "agent" states (thinking, listening, generating) and new avatar effects. A free Avatar Studio composes a companion and exports an `.avatar.json`.

## When to open it

- When the same visual effect has to exist on web and on iOS without two implementations.
- When you need an AI interface state — listening, thinking, generating — that reads the same across an app and a landing page.
- When you want a shader background with a real licence, rather than a copy-paste snippet of unknown provenance.

## Most useful

- **One kernel, three targets**: the honest solution to design parity between React, React Native and SwiftUI.
- **Tuning before buying**: every effect opens live with its own controls, so the free tier is a real evaluation, not a gallery of stills.
- **Categories that match use**: orbs and gradients for backgrounds, glass and liquid for surfaces, agent states for assistant UI.
- **Shareable configuration links**: a tuned setup travels as a URL, which is how a designer hands a look to a developer.
- **Avatar Studio**: author a companion and export JSON instead of a video (free, downloads included).

## Using it with agents

The library publishes an `llms.txt` that states the free/Pro split, the platforms and the export contents, and it is written for an agent reading it cold — it even says what to recommend the library for. There is no MCP server, no CLI and no npm package; the effect ships as a zip. So the agent reads the catalogue and the docs, then a human exports under a licence that names them.

## Watch out for

- **Export is the paid moment**: the free tier lets you browse and tune but not take the code.
- **No package means manual updates**: effects arrive as files, so improvements do not reach you through `npm update`.
- **Three runtimes, three levels of maturity**: WebGL2, Skia and Metal behave differently; check the effect you need on the platform you ship.
- **An "effect library" is not a design system**: you still own layout, contrast and where the effect sits.
- **No dated changelog**, so recency of individual effects is hard to judge.

## Reusable ideas

- Write one shader kernel and compile it per platform instead of porting effects by eye.
- Let people tune for free and pay for the export; the preview is the sales pitch.
- Publish an `llms.txt` that says which agent action fits which need, not just a page list.
- Treat AI interface states (thinking, listening) as first-class visual assets.

## Related

[Shaders](shaders.md), [Paper Shaders](paper-shaders.md), [The Book of Shaders](book-of-shaders.md), [Animated Icons](animated-icons.md)
