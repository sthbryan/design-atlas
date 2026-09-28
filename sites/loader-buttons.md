---
title: Loader Buttons
description: 25 experimental loading-state buttons in WebGL, SVG, Canvas and CSS; no licence published.
url: https://loader-buttons.appllama.io
type: gallery
formats: gallery
topics: [components, cta, motion, 3d-and-shaders]
verdict: niche
agent: []
pricing: free
licence: Free to view; licence not stated
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [evil-buttons, gradient-buttons, loading-dev, paper-shaders]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [cta](../topics/cta.md), [motion](../topics/motion.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# Loader Buttons

## What it is

Loader Buttons is a one-page motion experiment from Appllama, a site that studies screens and paywalls of top-grossing iOS apps. The maker is credited as jaimin (@jaimintf). It shows 25 buttons in their loading state. Each has its own animation and its own one-word status label, such as "Gathering", "Aligning" or "Flipping". According to the page, 13 are drawn with WebGL and 12 with SVG, Canvas or CSS. The names hint at the techniques: Fibonacci Breather, Chladni Whisper, Voronoi Lantern, Strange Attractor Scribe, Murmuration Turn, Sandpile Bloom, Mechanical Iris and Braille Flipwave. Click a button to replay it. There is also a "Pause motion" control. The page was last updated in August 2026.

## When to open it

Open it for ideas when a submit, pay or generate button needs a loading state with more character than a plain spinner, especially in a consumer or AI product where the wait is part of the experience.

## Most useful

- **25 studies**, each pairing a visual metaphor with a verb that says what the system is doing
- **A wide range of techniques** in one place: shader fields, metaballs, reaction-diffusion, particle flocking, conic-gradient masking, dot-matrix flips
- **Polite runtime behaviour** to learn from: honours `prefers-reduced-motion`, pauses when the tab is hidden, runs only what is on screen (IntersectionObserver), and sets `aria-busy` on buttons while they load
- **Readable source**: the page loads plain ES modules, one file per design, so you can study how each effect is built in the browser's dev tools

## Using it with agents

Not agent-ready. There is no copy button, package, `llms.txt` or documentation. The most you can do is describe an effect (or share a screenshot) and ask an agent to build your own version with the same idea, such as "a conic-gradient eclipse inside the button with an 'Aligning' label".

## Watch out for

- No licence or terms are published, so treat the designs as inspiration rather than code to copy
- Thirteen of the loaders use WebGL. A shader in every button is heavy for a normal form, and you need a plan for devices where WebGL is unavailable
- The page's structured data names `loader-buttons.experiments.appllama.io` as its address, but that host did not resolve at review time. Use the URL above
- JavaScript is required and nothing renders without it

## Reusable ideas

- Swap the button label for a short verb that names the current step instead of a generic "Loading…"
- Keep the button's size and shape fixed while loading, so the layout does not shift
- Pause decorative loaders when they are off screen or the tab is hidden
- Offer a global "pause motion" control on pages with a lot of animation

## Related

[Evil Buttons](evil-buttons.md), [Gradient Buttons](gradient-buttons.md), [loading.dev](loading-dev.md), [Paper Shaders](paper-shaders.md)
