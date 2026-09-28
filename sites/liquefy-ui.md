---
title: Liquefy UI
description: MIT React primitives with a live playground for tuning refractive glass, spring motion, and accessible component states.
url: https://liquefy-ui.com
type: component-library
formats: React components · WebGL material playground · shadcn registry · MCP
topics: [components, motion]
verdict: useful
agent: [mcp, llms-txt, registry]
pricing: free
licence: Free and open source under MIT; the library, docs and live demos are public at review.
licence_class: open-source-permissive
reviewed: 2026-09-26
status: active
related: [liquid-glass, base-ui, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# Liquefy UI

## What it is

A React component library built around translucent surfaces with WebGL edge refraction and spring-driven movement. The home page is also a material playground: a right-side control panel changes the sample surface, scene and component demonstrations together. The GitHub project states MIT licensing.

## When to open it

Open the [live playground](https://liquefy-ui.com/#/playground) to compare clear glass, frost, tint and refraction over different backdrops. Use [Components](https://liquefy-ui.com/#/components) when studying how the material is applied to buttons, inputs, tabs, dialogs, alerts and navigation.

## Most useful

- The five switchable background scenes show where rim light and refraction hold up against bright photos, dark water and saturated color.
- The shared panel lets you tune intensity, frost, wobble and effects while seeing the result on a sample card or form.
- Component examples pair the material with real control states: selected tabs, disabled buttons, progress, fields, dialogs and a floating dock.
- The docs call out the CSS fallback and platform differences in the shader path; this is useful when deciding where a glass treatment can safely carry content.

## Using it with agents

The site publishes [`llms.txt`](https://liquefy-ui.com/llms.txt), a [full text guide](https://liquefy-ui.com/llms-full.txt), an MCP server and a shadcn registry. These expose the component names, props and tokens. The examples are especially useful for checking the real component contract before composing the effect.

## Watch out for

- The repo says MIT, but its demos and photographic backgrounds are reference material; check the individual assets before reusing them.
- Motion and transparency are enabled by default. The docs describe opt-out props and fallbacks, so check reduced-motion and reduced-transparency behavior in the app you build.
- Glass can lower text contrast. The library itself advises using it for interaction and navigation layers rather than primary content.

## Reusable ideas

- Make a material playground change every sample in place so visual tuning has immediate feedback.
- Show the same translucent surface over both photographic and flat-color backdrops.
- Give a visually strong component an accessible CSS fallback and document the conditions that activate it.
- Keep theme, motion and transparency controls visible beside the live sample.

## Related

[Liquid Glass](liquid-glass.md), [Base UI](base-ui.md), [Motion Primitives](motion-primitives.md)
