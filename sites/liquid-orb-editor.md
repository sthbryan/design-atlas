---
title: Liquid Orb Editor
description: Live WebGPU editor for liquid-glass orbs, with shareable parameter links and Web or SwiftUI/Metal code export.
url: https://lersent001.github.io/orb/
type: tool
formats: WebGPU shader playground · SwiftUI/Metal exporter
topics: [3d-and-shaders, motion, ai-interfaces]
verdict: useful
agent: []
pricing: free
licence: The author's `LerSent001/orb` repository states that project code is MIT licensed; bundled Toolcraft UI code retains its original MIT notices.
licence_class: open-source-permissive
reviewed: 2026-09-27
status: active
related: [orbkit, shadercn, liquid-glass-web-react]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md), [ai-interfaces](../topics/ai-interfaces.md)

# Liquid Orb Editor

## What it is

Liquid Orb Editor is a live WebGPU playground for animated liquid-glass orbs. The reviewed page loaded a rendered Siri Wave orb, with 13 presets at review, a separate scene preview and grouped controls for audio response, state, motion, colour, shape, glass and glow. Its URL hash stores the current parameters. The linked `LerSent001/orb` repository says the editor exports a standalone web page or SwiftUI/Metal code from the same parameter snapshot.

## When to open it

- Build a distinctive animated status mark for an AI assistant or voice interface.
- Study how a material effect changes as hue, refraction, rim light, distortion, speed and glow are adjusted.
- Carry one tuned look between a web prototype and a SwiftUI/Metal implementation.

## Most useful

- **Presets**: choose among different glass, liquid, particle, aurora and metal looks before adjusting individual values.
- **Preview modes**: compare a standalone orb with a compact interface scene that pairs the orb with editable status text.
- **State and audio controls**: choose idle or thinking and adjust activation/settling timing; the interface also offers microphone or audio-file response.
- **Share and export**: hash parameters make a specific look linkable; Copy Code offers an implementation path from the same settings.

## Using it with agents

The editor has no MCP, CLI, API or agent skill. Its controls and source code are public, and the repository is MIT licensed. An agent can open a shared hash URL to inspect a specific preset and parameter set, then use the copy-code workflow to move it into a project.

## Watch out for

- WebGPU support is required for the live renderer; the site indicates it can fall back to a static preview when WebGPU is unavailable.
- Treat microphone response as an optional user-facing feature and provide a clear permission flow if adapting it.
- A decorative orb alone communicates little. Pair it with a labelled state such as “Thinking” and avoid using colour as the only status signal.
- The editor can export shader code, but the copied result still needs integration and performance checks on target browsers and devices.

## Reusable ideas

- Store visual parameters in a shareable URL so a working material can be reviewed without recreating every slider value.
- Model a status transition with explicit idle/thinking states and separate activation and settling times.
- Offer a simple orb preview and a small in-context version to evaluate scale and legibility.

## Related

[Orbkit](orbkit.md), [shadercn](shadercn.md), [Liquid Glass Web React](liquid-glass-web-react.md)
