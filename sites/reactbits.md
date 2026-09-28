---
title: React Bits
description: Large catalogue of animated React components and WebGL backgrounds (GSAP, three.js, Framer Motion) with an llms.txt index.
url: https://reactbits.dev
type: component-library
formats: component library
topics: [components, motion, agents-and-prompts, 3d-and-shaders]
verdict: very-useful
agent: [llms-txt]
pricing: freemium
licence: MIT + Commons Clause (DavidHDev/react-bits); React Bits Pro is commercial
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [kinetics, animejs, motion-primitives, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# React Bits

## What it is

React Bits is a large collection of animated React components built with GSAP, three.js, Framer Motion, and physics libraries. It covers everything from decorative backgrounds (aurora, galaxy, silk fields rendered with WebGL) to text animations (glitch, decrypt, shiny, split, scroll reveal, count up, typing), cursor and pointer effects (splash, blob, magnet, image trail, click spark), 3D galleries, and physics-driven micro-interactions (elastic slider, squish switch, spring checkbox).

## When to open it

Use this when you need richly animated or decorative component pieces that make interfaces feel polished and alive. It's ideal for landing pages, hero sections, and product-focused UI where motion draws attention and delights users.

## Most useful

- **Hundreds of ready-built components** organized by category: backgrounds, text effects, cursors, 3D pieces, physics interactions, and product UI patterns (stepper, scrub field, segmented control, buttons)
- **`llms.txt` index** listing every component with a one-line description, perfect for feeding to agents
- **Multiple tech stacks represented**: GSAP for timeline animations, three.js and ogl for WebGL, Framer Motion for simpler transitions, physics libraries for realistic bounce
- **Visual previews** on the site make it easy to spot the feeling you want to match

## Using it with agents

The `llms.txt` file exposes the full component catalog in a format agents can parse. You can ask Claude to reproduce or adapt an effect, either describing it by name or asking to browse the index first. Pair agent prompts with live examples to verify physics parameters and visual timing.

## Watch out for

- Many pieces are purely decorative and rely on heavy libraries (WebGL renders, GSAP timelines)
- Text animations can create accessibility issues for screen readers
- Physics micro-interactions sometimes have poor affordance—users may not understand they're interactive
- Commons Clause on the open-source license restricts commercial redistribution; think of these as ideas and reference implementations, not code to repackage

## Reusable ideas

- WebGL background effects (aurora, particle fields) as hero section backdrops
- Text reveal animations for headlines and calls-to-action
- Magnetic cursor behaviors for large clickable areas
- Physics-based feedback for form submissions and confirmations
- Elastic transitions between view states
- Spring-loaded buttons and toggles for delightful micro-interactions

## Related

[Kinetics](kinetics.md), [Anime.js](animejs.md), [Motion Primitives](motion-primitives.md), [shadcn/ui](shadcn-ui.md)
