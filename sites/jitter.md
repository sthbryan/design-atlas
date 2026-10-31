---
title: Jitter
description: Browser motion design editor with animation presets, Lottie and video export, and AI features for variations and bulk edits.
url: https://jitter.video
type: tool
formats: motion editor · 400+ templates at review · Lottie, GIF and video export · Figma import · AI variations
topics: [motion, assets]
verdict: useful
agent: []
pricing: freemium
licence: Proprietary. The free plan covers unlimited drafts, three workspace files and export at 720p and 30fps with a watermark; paid plans are billed per editor per month, annually. The site notes that featured work belongs to its creators and may not be reproduced.
licence_class: proprietary-paid
reviewed: 2026-10-29
status: active
related: [rive, gsap, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [assets](../topics/assets.md)

# Jitter

## What it is

Jitter is a motion design editor that runs in the browser and needs no install. You design a scene and animate its layers, start from an animation preset or a template, or import a Figma file, then export video, GIF or Lottie. The marketing page is organised around the workflow it wants to own: a hero with a template rail, a feature tour that names the individual effects, a section on producing many variants at once, then collaboration and templates. At review it claimed 400+ free templates and 1,500+ fonts, and put AI features in the foreground, including a banner for agents built into the editor.

## When to open it

- A UI needs a short animation — a load-in, a hover loop, a page transition — and you want a Lottie file rather than hand-written keyframes.
- A launch needs a loop for social or a product page, and nobody on the team uses After Effects.
- You have a set of near-identical animations to produce for different copy or languages, which is where the batch and AI features earn their place.

## Most useful

- **Effects worth studying**: the feature list names the ones that separate a polished loop from a default transition — a pen tool with path animation and shape morphing, multi-stop gradients animated on fills, strokes and text, animated blur and background blur, blend modes, and audio and video layers.
- **Template rail**: cards from Jitter and from studios such as Rico Supply and Vendredi Society, named by effect — stretched type repeaters, split reveals, image-stretch transitions, halftone counters. It doubles as a vocabulary of current motion moves.
- **Animated components**: build an element once, reuse it, and update every instance with one edit. The same idea drives batch export of hundreds of files to video, GIF or Lottie.
- **Production scaling**: Magic Import generates variants with different copy or assets, and auto-resize with auto-translate reframes and translates an animation for other channels and languages.
- **Editor controls**: interactive previews, a properties panel and a timeline in the familiar shape, plus a starter library of presets described as one click away.

## Using it with agents

No public agent channel at review: no `llms.txt` content (the path returns a page-not-found document), no MCP server, no documented API. `/llms.txt` returning HTML rather than text is worth knowing, because an agent that trusts a 200 status will read a soft-404. The editor itself is a human tool; the useful agent-facing artefact is the exported Lottie file.

## Watch out for

- Free exports carry a watermark and stop at 720p and 30fps, which is fine for prototyping and not for shipping. Lottie output is the format that matters for UI work; the plan table lists it on every tier.
- AI features consume credits that differ by plan, so the "infinite variations" pitch has a meter behind it.
- The site states plainly that featured work is shown for illustration, belongs to its creators, and must not be used, reproduced or redistributed. Treat the template gallery as reference, not as an asset library.
- Templates are free to open inside Jitter, but that is not the same as a licence to redistribute a remixed template as your own asset. Check the terms before publishing one as a brand asset.
- Prices are per editor per month with annual billing, exclusive of tax, and they change. Read the plan table rather than a remembered number.
- A Lottie file is not free performance: heaviness, blur and blend modes cost frame time on mid-range phones, so test the export on the device you are targeting.

## Reusable ideas

- Name templates after the motion, not the mood ("split reveal", "stretched type repeater"), so the gallery teaches the vocabulary while it sells the tool.
- Animate once as a component, then reuse, so a brand tweak is one edit rather than a sweep through twenty files.
- Ship bulk export and variant generation next to the editor; the bottleneck in motion work is usually the tenth version, not the first.
- Put the licence of showcased work in the footer, in plain words, where a designer will actually find it.

## Related

[Rive](rive.md), [GSAP](gsap.md), [Motion Primitives](motion-primitives.md)
