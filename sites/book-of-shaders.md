---
title: The Book of Shaders
description: Classic step-by-step guide to fragment shaders with editable live examples; learning only, all rights reserved.
url: https://thebookofshaders.com
type: documentation
formats: Documentation
topics: [3d-and-shaders, documentation]
verdict: very-useful
agent: []
pricing: free
licence: "Free to read / all rights reserved: no rehosting, redistribution, or use in any product or project, commercial or not; linking with attribution and unmodified screenshots is allowed for teaching"
licence_class: proprietary-free
reviewed: 2026-09-25
status: active
related: [paper-shaders, shaderfrog, compute-toys, orbkit]
---
[← Atlas](../README.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [documentation](../topics/documentation.md)

# The Book of Shaders

## What it is

The Book of Shaders is a free online guide to GLSL fragment shaders by Patricio Gonzalez Vivo and Jen Lowe. It starts from zero and works up to generative graphics. Thirteen chapters are published so far, in four parts. Getting started covers what a shader is, a first program, uniforms and running shaders. Algorithmic drawing covers shaping functions, colour, shapes, matrices and patterns. Generative design covers random, noise, cellular noise and fractional Brownian motion. Every chapter has live examples you can edit in the page, running on the authors' glslCanvas and glslEditor tools. The book has translations into about 13 other languages, an examples gallery, a glossary and appendices on reading it offline, printing it and contributing. The GitHub repository started in 2015 and has around 7,000 stars.

## When to open it

Open it when you need to understand a shader instead of just installing one: why a gradient bands, how smoothstep shapes an edge, how noise and fBm make organic motion, or how to tile a pattern. It is also the best background reading before tuning props on libraries like Paper Shaders or Orbkit.

## Most useful

- **Edit and see the result right away**: every example runs in the page and redraws as you type
- **Shaping functions chapter**: a clear visual guide to the easing and falloff maths behind most shader effects
- **Noise, cellular noise and fBm chapters**: the basis for grain, clouds, marble and flowing gradients
- **Glossary**: GLSL types, qualifiers, built-in variables and functions grouped by theme, each with a "see also" link to the chapter that uses it
- **glslCanvas**: the MIT-licensed runtime from the same author that puts a fragment shader on a web page with a single canvas tag

## Using it with agents

There is no llms.txt, API or agent-specific material, and the licence forbids pasting the book's text or code into your project. Use it for learning: read the chapter yourself, then describe the technique to the agent in your own words (for example "domain-warped fBm with three octaves"). Link the chapter URL in a design brief rather than copying from it.

## Watch out for

- The licence is much stricter than the site's openness suggests. The repository's LICENSE says the author holds all rights and bans rehosting, redistribution and use in any product. Write your own shaders based on the ideas, and don't copy the examples
- Later chapters (fractals, image processing, simulation and 3D graphics such as ray marching) are listed in the contents but not written yet
- Everything is GLSL ES for WebGL. There is no coverage of WGSL or WebGPU compute
- The pages load a third-party newsletter script (Flodesk), which some privacy blockers will flag

## Reusable ideas

- Put a live, editable example next to every concept so readers learn by changing numbers
- Teach effects as a chain of small functions (shape, then repeat, then distort, then colour) that can be recombined
- Use a glossary that sends each term back to the chapter where it is taught

## Related

[Paper Shaders](paper-shaders.md), [Shaderfrog](shaderfrog.md), [compute.toys](compute-toys.md), [Orbkit](orbkit.md)
