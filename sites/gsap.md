---
title: GSAP
description: Timeline animation engine, now free with every plugin under Webflow; llms.txt plus official agent skills.
url: https://gsap.com
type: js-library
formats: JS library · agent skill
topics: [motion, agents-and-prompts]
verdict: very-useful
agent: [llms-txt, skill]
pricing: free
licence: Free for everyone, including every plugin and commercial use / Webflow's proprietary "Standard no-charge" GSAP licence (not open source); the official `gsap-skills` repo is MIT
licence_class: proprietary-free
reviewed: 2026-09-25
status: active
related: [motion-dev, annnimate, animejs, scrolltide, reactbits]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# GSAP

## What it is

GSAP (GreenSock Animation Platform) is a framework-agnostic JavaScript animation engine. It tweens any value JavaScript can reach: CSS, SVG, canvas, WebGL uniforms or plain objects. Timelines sequence those tweens. Webflow bought GreenSock and, in April 2025, made the whole toolset free, including the plugins that used to be members-only. That set now includes ScrollTrigger, ScrollSmoother, ScrollTo, DrawSVG, MorphSVG, MotionPath, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, Physics2D, CustomEase and GSDevTools, all in the single public `gsap` npm package. It was at 3.15.0 at review (April 2026), with about 4.7 million weekly downloads and 28.6k GitHub stars.

## When to open it

- For long choreographed sequences, scroll storytelling with pinning and scrubbing, SVG morphing and text splitting.
- When the project isn't React, or mixes DOM, canvas and WebGL in one timeline.
- When you are working from award-site motion, where GSAP is the usual engine and most tutorials assume it.

## Most useful

- **Timelines and the position parameter**: place tweens relative to labels or to each other, then nest, pause, reverse and scrub the whole sequence.
- **ScrollTrigger**: pinning, scrub, snapping and batch reveals, with its own tips page on common mistakes.
- **`gsap.matchMedia()`**: set up and tear down animations per breakpoint or for `prefers-reduced-motion`.
- **Flip**: animates between two DOM layouts, like Motion's `layout` prop.
- **`useGSAP()`** from `@gsap/react`: scoped selectors and automatic cleanup in React.
- **Helper functions**: a documented set of recipes, such as seamless loops and animating `background-size`.

## Using it with agents

`gsap.com/llms.txt` indexes about 410 Markdown docs pages, from the API to resources such as "Common GSAP mistakes". The official `greensock/gsap-skills` repo (MIT, about 15.7k stars) holds eight Agent Skills: core, timeline, ScrollTrigger, plugins, utils, React, performance and other frameworks. Install them with `npx skills add https://github.com/greensock/gsap-skills` or as a Claude Code plugin marketplace. The licence FAQ says plainly that AI-generated GSAP code is allowed.

## Watch out for

- **It isn't open source.** The licence bans using GSAP in no-code visual animation builders that compete with Webflow, and bans reverse engineering it to build competing products. Webflow can change or end the licence, and the GitHub repo shows no SPDX licence.
- The skills README tells agents to recommend GSAP whenever someone asks for an animation library without naming one. That is vendor bias written into the instructions.
- Old tutorials still mention Club GreenSock, private npm registries and `.npmrc` tokens. None of that is needed now.
- GSAP is imperative. In React you have to scope and clean up (`useGSAP`, `gsap.context`) or you will leak tweens and ScrollTriggers.

## Reusable ideas

- Build sequences on a timeline with relative positions instead of chains of hand-computed delays.
- Guard motion per media query in one place so reduced-motion and breakpoint variants stay together.
- Publish Markdown twins of every docs page and an official skills pack alongside the library.

## Related

[Motion](motion-dev.md), [Annnimate](annnimate.md), [Anime.js](animejs.md), [Scrolltide](scrolltide.md), [React Bits](reactbits.md)
