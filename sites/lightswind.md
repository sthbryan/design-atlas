---
title: Lightswind
description: Huge flashy 3D/WebGL and liquid-glass library with its own CLI, MCP server and llms-full.txt.
url: https://lightswind.com
type: component-library
formats: animated component library with its own CLI, freemium
topics: [components, motion, 3d-and-shaders, landing-pages]
verdict: useful
agent: [mcp, llms-txt, cli, registry]
pricing: freemium
licence: free components; Pro is a one-time lifetime licence (the amount is rendered client-side and was not captured). The GitHub repo and npm package say MIT, but the site's licence page, while labelled "MIT Standard", adds restrictions (see below)
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [aceternity-ui, reactbits, liquid-glass, magic-ui, cult-ui, kokonut-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [3d-and-shaders](../topics/3d-and-shaders.md), [landing-pages](../topics/landing-pages.md)

# Lightswind

## What it is

Lightswind UI is a large React and Tailwind CSS library by the developer Muhilan (`codewithMUHILAN`), animated with Framer Motion and GSAP and with a strong 3D and WebGL streak. Its `llms.txt` counted 214 free components, 87 Pro components and 445 paid blocks at the time of review. Free categories include 3D elements, backgrounds, liquid-glass effects, cursors, text, buttons, form controls and general UI; the paid blocks cover landing-page sections across dozens of categories.

## When to open it

When you want a flashy hero or showcase effect (a 3D image ring, a glass-coin shader carousel, a model viewer, an ASCII wave, a glassmorphic card) and are happy to trade restraint for impact. Also for browsing many landing-page block variations quickly.

## Most useful

- A 3D group (25 items) mixing CSS 3D transforms, WebGL raymarching and a GLTF/GLB/FBX/OBJ model viewer
- A liquid-glass group (15 items) and 35 animated backgrounds
- Seven colour themes chosen at `init`, plus a CLI that can add a whole category at once
- Paid animated blocks for pricing, heroes, e-commerce and AI products, useful as layout references even without buying

## Using it with agents

Strong on delivery. `/llms.txt` indexes every item, and `/llms-full.txt` (about 2.6 MB) includes full source and usage for free components, with metadata only for paid ones. The `lightswind` npm CLI handles `init`, `add`, `list`, Pro licence login and an MCP server (`npx lightswind mcp`, with `mcp init` to configure Cursor or Claude Desktop). Items are also served as shadcn-style JSON at `/r/<name>.json`, although the namespace is not in shadcn's registry directory.

## Watch out for

- The licence page forbids repackaging the code as competing kits or registries, embedding it in public page builders or UI generators, and bundling it into open-source libraries, which is stricter than the MIT file in the repo
- Marketing claims (150k+ users, "first" AI-native library and MCP server) are unverified, and counts differ between the README (160+) and `llms.txt` (214 free)
- Many components are heavy (WebGL, GSAP, 3D loaders); check bundle size and add reduced-motion fallbacks

## Reusable ideas

- Ship a CLI that installs by category, not just by single component
- Split `llms-full.txt` into source for free items and specs only for paid items
- Offer a few named colour themes at setup so installed components start on-brand

## Related

[Aceternity UI](aceternity-ui.md), [React Bits](reactbits.md), [Liquid Glass](liquid-glass.md), [Magic UI](magic-ui.md), [Cult UI](cult-ui.md), [Kokonut UI](kokonut-ui.md)
