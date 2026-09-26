---
title: Annnimate
description: 105 GSAP components in React, Vue and HTML from a studio, with an MCP for paid subscribers.
url: https://annnimate.com
type: component-library
formats: component library · MCP server · API
topics: [motion, components, agents-and-prompts]
verdict: useful
agent: [mcp, llms-txt]
pricing: freemium
licence: "A handful of free components; Library subscription from €29 a month billed quarterly or €249 a year (Solo, 1 seat), plus 5- and 15-seat tiers; Menu and Reveal Kits €149 each, one-time / proprietary licence: unlimited end products including client work, no redistribution, and a ban on feeding components to AI tools"
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [gsap, scrolltide, aceternity-ui, reactbits, motion-dev]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Annnimate

## What it is

Annnimate is a paid library of GSAP motion components from Julian Fella's studio Good Fella (Munich and Vienna). Every component comes in three versions: React (with `useGSAP` and refs), Vue 3 (`<script setup>`) and vanilla HTML/CSS/JS. You copy the code into your project; the only runtime dependency is `gsap`. Each detail page says whether the piece first shipped on a client site or is a studio original. At review the public API listed 105 components, 13 of them free: 33 UI components, 26 scroll effects, 14 full sections, 12 shaders, 9 experimental pieces, 7 buttons and 4 menus. Two one-time Landmark Kits add 13 preloader and hero-reveal pieces and ten navigation menus.

## When to open it

- For a marketing or portfolio site that needs agency-grade scroll storytelling, menus or shader transitions, built on GSAP rather than Motion.
- When the project is Vue or plain HTML and most motion kits only cover React.
- As a source of named patterns (Split Flap Board, Morphing Tabs, Fog Reveal), even if you build your own.

## Most useful

- **Three idiomatic formats** for every component, not a vanilla snippet wrapped in a React shell.
- **Scroll pieces**: Process Rail, Feature Rail, Grid Chapters and Text On Path, all built on ScrollTrigger scrub and pinning.
- **Gooey and morphing UI**: toasts, filter chips, tabs and an accordion joined by liquid necks.
- **House conventions**: animate only transforms, opacity and clip-path, `expo.out` as the default ease, reduced motion through `gsap.matchMedia`, cleanup on unmount.
- **Public catalogue API**: `/api/v1/components` and `/api/v1/categories` return JSON with no key, described by an OpenAPI 3.1 spec.

## Using it with agents

There is an `/llms.txt` index, an `/agents.md` guide, an MCP manifest at `/.well-known/mcp.json`, and Markdown versions of the free `/learn`, `/patterns` and `/compare` pages (add `.md` to the URL). The MCP server at `https://annnimate.com/api/mcp` uses Streamable HTTP with OAuth sign-in. Searching is open to any signed-in user; pulling React, Vue or HTML code needs a live Library subscription.

## Watch out for

- **The terms conflict with the MCP server.** They forbid submitting components to "any machine-learning model, generative-AI tool", and forbid using the service to train an automated agent, yet the paid MCP hands the same code to a coding agent. Ask for written clarification before you use it with an agent.
- Your licence to copy lasts only while the subscription is active. Code you already pasted stays yours.
- The counts don't agree: 104 components in `llms.txt`, 105 in the API and 106 on the pricing page.
- The prices for the 5- and 15-seat tiers only appear after JavaScript runs. There is no trial, only a 14-day refund.
- Sharing components as standalone snippets, templates or course material is forbidden.

## Reusable ideas

- Record each component's origin (shipped on a client site or a studio original) on its page.
- Publish a free, keyless catalogue API and an OpenAPI spec alongside the paid code.
- Offer `.md` versions of your educational pages for agents.

## Related

[GSAP](gsap.md), [Scrolltide](scrolltide.md), [Aceternity UI](aceternity-ui.md), [React Bits](reactbits.md), [Motion](motion-dev.md)
