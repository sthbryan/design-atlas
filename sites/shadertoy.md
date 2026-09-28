---
title: Shadertoy
description: Community gallery of live GLSL scenes with an in-browser shader editor and a documented API for public examples.
url: https://www.shadertoy.com/
type: gallery
formats: GLSL fragment shaders · interactive WebGL canvas · API
topics: [3d-and-shaders, inspiration]
verdict: useful
agent: [api]
pricing: freemium
licence: Browsing and authoring are free; API keys are free but require Silver or Gold account status, and API use is capped at 1,500 requests per month at review. Each shader's author controls its licence; the default when none is selected is CC BY-NC-SA 3.0. The platform and editor are proprietary.
licence_class: mixed
reviewed: 2026-09-27
status: active
related: [grainient, metalforge, mesh3d]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [inspiration](../topics/inspiration.md)

# Shadertoy

## What it is

Shadertoy is a community gallery and browser editor for real-time GLSL fragment shaders. Public examples run in a WebGL canvas and can expose their source, inputs and rendering passes alongside the image.

## When to open it

Open it for procedural backgrounds, lighting, materials and abstract motion that can be studied as both a rendered effect and shader code. Use the filters and tags to find a specific visual technique, then inspect a working example such as [1D Radial Lightmap Test](https://www.shadertoy.com/view/XsK3RR).

## Most useful

- **Live shader canvas** makes color, light and motion visible directly in the page; the tested radial-light example rendered a colored volumetric scene while its GLSL remained beside it.
- **Multipass and input controls** reveal when an effect depends on buffers, textures, audio or other inputs instead of a single fragment function.
- **Source beside output** makes it possible to connect a visual result to the rendering technique that produced it.

## Using it with agents

The [official API guide](https://www.shadertoy.com/howto) documents query and shader endpoints. API keys are free, but require Silver or Gold account status and are limited to 1,500 requests per month at review. A shader must be published as “Public + API” to be available through the API. Check each shader's licence before using or adapting its code; API clients must credit the Shadertoy API.

## Watch out for

- Some shaders compile slowly or fail on a given browser or device; confirm the live canvas renders before relying on an example.
- The default shader licence is CC BY-NC-SA 3.0 only when its author has not selected another licence. Read the individual shader's licence before reuse.
- Many examples are experiments or full-screen effects rather than components designed for ordinary page layouts.

## Reusable ideas

- Keep the rendered result and source visible together so an effect can be inspected and learned from.
- Make a shader's buffers and inputs discoverable; they explain the structure behind complex visual output.
- Use one strong procedural visual as a focal point, then keep surrounding controls and navigation quiet.

## Related

[Grainient](grainient.md), [MetalForge](metalforge.md), [mesh3d](mesh3d.md)
