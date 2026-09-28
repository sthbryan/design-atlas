---
title: glimm
description: WebGL colour-band page transitions for React/Next.js, with a copyable agent prompt.
url: https://glimm.dev
type: js-library
formats: JS library (React / Next.js)
topics: [motion, 3d-and-shaders]
verdict: niche
agent: [prompts]
pricing: free
licence: Free / MIT (added in 0.1.4)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [liquid-glass, reactbits, transitions-dev, animejs]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# glimm

## What it is

glimm is a small library by Noman Ijaz for page transitions drawn with a shader. On a route change or any state change you choose, one coloured WebGL band sweeps across the screen, and the new view appears beneath it as it passes. The package has a framework-free core plus `glimm/react` and `glimm/next` entry points. It has no runtime dependencies, and React 18+ and Next.js are optional peer dependencies. The site claims it is GPU-composited and under 10 KB. It was at 0.3.1 when reviewed, first released in May 2026, and got about 34k npm downloads a week. The GitHub repo linked from npm was not public when reviewed.

## When to open it

Open it when a product has a few moments that deserve a visual beat (publishing, finishing checkout, entering a focused mode) and you want something more distinctive than a crossfade. It is not meant for everyday navigation.

## Most useful

- **Three triggers**: `<TransitionLink>` for known destinations, `useTransitionRouter()` for navigation from code, and `<InterceptLinks />` to apply it to every internal link without touching them
- **Six palettes** (prism, berry, lagoon, citrus, azure, ember) built as cosine gradients and blended in OKLCH. You can pass your own `{a, b, c, d}` palette, and the site has a shuffle tool that generates the snippet
- **Ten built-in easing curves**, or your own `(p) => number` function
- **Tuning props**: direction (four axes), sweep and fade durations, the moment the route swaps, band tightness, brightness, wave and ripple amounts
- **Lazy set-up**: the WebGL context is only created on the first sweep. Four live demos show publish, autopilot, theme and task flows

## Using it with agents

The Installation section includes a ready "tell your coding agent" prompt. It installs the package and wraps the Next.js root layout in `GlimmProvider` with `InterceptLinks`, leaving the rest of the layout alone. There is no `llms.txt`, MCP server or registry entry, but the props table is short enough to paste into context.

## Watch out for

- Still 0.x with frequent visual changes (0.2 and 0.3 reworked the edges, palettes and reveal), so pin the version
- The site says Next 13+, but the 0.3.1 package declares `next >= 14` as its peer range
- According to the changelog, browsers without the newer reveal get a simpler cover-and-reveal, and reduced-motion users get no animation. Design for both
- The docs warn against sweeping on every click, on hover or menus, on repeated list actions, or as a loading indicator

## Reusable ideas

- Treat a full-screen transition as punctuation: keep it for moments you would mention in a changelog
- Swap the route partway through the sweep so the change hides under the band
- Define brand palettes as cosine-gradient parameters, so one small object makes a whole colour ramp
- Offer both per-link and global link interception, so teams can adopt it gradually

## Related

[Liquid Glass](liquid-glass.md), [React Bits](reactbits.md), [Transitions.dev](transitions-dev.md), [Anime.js](animejs.md)
