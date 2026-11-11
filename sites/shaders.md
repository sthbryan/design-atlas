---
title: Shaders
description: MIT WebGPU component library with 200 shader effects for React, Vue, Svelte and Solid, plus a paid pro library, visual editor and MCP server.
url: https://shaders.com
type: js-library
formats: npm package (`shaders`) · WebGPU components for React, Vue, Svelte, Solid and vanilla JS · visual editor · CLI · MCP server · Framer plugin
topics: [3d-and-shaders, components, motion, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, cli]
pricing: freemium
licence: the component library is MIT (`shader-effects-inc/shaders`, about 5.9k stars at review) and free to install. Pro is a subscription at US$10 a month billed US$120 a year, or US$299 once for lifetime, and unlocks the curated pro shader library, code export from the editor and the MCP server. The components are composable layers rather than prebuilt sections, so what you build from them is yours under the MIT terms.
licence_class: mixed
reviewed: 2026-11-11
status: active
related: [paper-shaders, scrollshaders, book-of-shaders, aceternity-ui, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [components](../topics/components.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)


# Shaders

## What it is

Shaders is a WebGPU effect library built around a declarative component model: `<Shader>` renders a canvas, and the components you nest inside it are layers, evaluated top to bottom and blended on the GPU. The open npm package `shaders` ships about 200 of those components with framework entry points for React, Vue, Svelte, Solid, vanilla JavaScript and Framer. Over the top sits a commercial layer: a curated Pro library, a visual editor on an infinite canvas that exports the component tree you designed, a CLI and an MCP server. The company is Shader Effects, Inc.; the library went MIT and public at the end of September 2026, and the site counted roughly 19,000 design engineers and 5,900 GitHub stars at this review.

## When to open it

- When a hero, a card or a section needs a real GPU effect and you would rather compose components than write GLSL or WGSL.
- When you want to study how a shader library models effects as layers (`<LinearGradient>`, `<CursorTrail>`, `<ChromaFlow>`, `<Swirl>`) instead of one monolithic canvas.
- When a designer on the team needs to tune the effect by hand and hand the exact component tree back to you.

## Most useful

- **Composition instead of presets**: stack, nest, mask and blend components, bind any prop to state, and the same code runs in six frameworks.
- **The free library is genuinely large**: about 200 components covering blur, colour, distortion, patterns, textures and camera/webcam inputs, all MIT.
- **Visual editor to code**: design on a canvas, then export the matching component tree for your framework — the reverse of the usual "copy this snippet" flow.
- **CLI**: `npx shaders connect` detects the framework, installs the package, writes `shaders.config.ts` and links the codebase to an account, so shaders installed from the editor stay in sync as files in the repo.
- **Pro sections**: ready-made website sections, for teams that want the effect already placed in a layout.

## Using it with agents

Unusually complete for a shader library. There is an `llms.txt` that explains the free and Pro split and the install steps; a CLI that answers plain-language requests (`npx shaders install`, install by id, or install a preset by name); and a Pro MCP server that lets a coding agent browse the Pro library, install a shader and customise it. The documented pitch is exactly that: describe the look you want, let the agent search the library, then install and adapt it. The Framer plugin covers the no-code path.

## Watch out for

- **Two products behind one name**: the MIT package and the Pro subscription. Check which one a tutorial is about before following it.
- **WebGPU only**: it renders in the browser, not on the server, and support is narrower than WebGL. Wrap it in a client-only boundary in SSR frameworks and plan a fallback for older Safari and Firefox versions.
- **Effects cost frames**: stacking several layers over a scrolling page is easy to write and expensive to render on integrated graphics.
- **Pro is per developer and renews** unless you buy lifetime; the editor export and MCP are what you are paying for, not the components.
- **The library is new**: public since late September 2026, so APIs can still move between minors.

## Reusable ideas

- Model effects as composable layers with blended output, so a new look is a new stack rather than new shader code.
- Ship one package with framework entry points instead of separate ports per framework.
- Export the exact component tree from a visual editor: designers tune, developers review a diff.
- Publish `llms.txt` with an honest free/paid split so agents do not try to install what they cannot.

## Related

[Paper Shaders](paper-shaders.md), [Scroll Shaders](scrollshaders.md), [The Book of Shaders](book-of-shaders.md), [Aceternity UI](aceternity-ui.md), [Motion Primitives](motion-primitives.md)
