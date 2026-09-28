---
title: Atelier UI
description: An interactive library of shader and motion components with a live preview, adjustable controls and copyable implementation prompts.
url: https://atelier-ui.com/en
type: component-library
formats: React components · WebGL effects · CLI · prompts
topics: [components, 3d-and-shaders, motion]
verdict: useful
agent: [llms-txt, cli, prompts]
pricing: freemium
licence: The free catalogue is MIT licensed at review; Pro is listed at $79.99 one-time for additional components and Shader Studio.
licence_class: mixed
reviewed: 2026-09-27
status: active
related: [componentry, godly, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md)

# Atelier UI

## What it is

Atelier UI offers React components centered on WebGL, cursor, scroll and motion effects. Each component page puts a live example alongside controls and implementation guidance.

## When to open it

Open it to study a controlled shader or motion effect, or to find a component that can give a restrained page one distinctive visual moment.

## Most useful

- The home page uses a faint drafting grid, centered oversized type with an italic accent, and a wide component preview below the hero. The pale canvas and small yellow accents keep the visual effects easy to notice.
- **[Fluid Distortion](https://atelier-ui.com/en/docs/components/cursor/fluid-distortion)** renders an iridescent translucent form on white beside sliders for intensity, force, distortion, radius, curl and swirl, plus color controls.
- The component documentation groups effects by family in a left sidebar, while the live canvas and controls share the main area. The prompt and code actions sit with the preview rather than hiding behind general setup docs.

## Using it with agents

The site publishes [llms.txt](https://atelier-ui.com/llms.txt), a CLI, and copyable component prompts. Its docs show a component identifier such as `@atelier/fluid-distortion` and explain shared WebGL provider setup.

## Watch out for

- The free components are MIT licensed; the Pro catalogue and Shader Studio cost $79.99 once at review. Confirm which tier and licence apply to the selected component before reusing it.
- These effects rely on WebGL and motion. Check device performance, fallback behavior and reduced-motion preferences in the finished page.

## Reusable ideas

- Put the live effect and its controls in one frame so visitors can connect a parameter change with the visual result.
- Use a quiet grid and restrained neutral palette around a colorful effect; the contrast gives the effect focus without adding more decoration.
- Organize control names around the visual qualities they change, such as radius, swirl and distortion, and keep implementation actions near the example.

## Related

[Componentry](componentry.md), [Godly](godly.md), [shadcn/ui](shadcn-ui.md)
