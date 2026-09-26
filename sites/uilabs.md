---
title: UI Labs
description: Mariana Castilho's dozen live Framer Motion experiments with morphing toolbars, popovers and widgets; demo-only.
url: https://www.uilabs.dev
type: gallery
formats: personal lab of animated interface experiments, demo-only
topics: [motion, components, inspiration]
verdict: niche
agent: []
pricing: free
licence: free to view; no licence is stated and no source code is published
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [motion-primitives, interior-dev, transitions-dev, design-spells, uiwtf]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [inspiration](../topics/inspiration.md)

# UI Labs

## What it is

UI Labs is a one-page lab by designer and developer Mariana Castilho (`mrncst`), dated 2024 in its footer. It shows a dozen interactive product-UI experiments built with React, Tailwind CSS, Framer Motion and, in places, Radix UI, each with a short note on the idea behind it and the stack used. The pieces are live and clickable on the page rather than recordings.

## When to open it

When you are designing a small piece of product chrome (a toolbar, a settings popover, a feedback control, a calendar widget) and want to see how a state change can morph in place with blur and spring transitions instead of opening a new screen.

## Most useful

- **Toolbars that change role**: an action toolbar that turns into a status notice, and a contextual toolbar that suggests page-specific actions and runs them inline.
- **Inline feedback**: a beta-feedback control that expands in place instead of triggering a modal.
- **Morphing containers**: a two-step popover, a dynamic settings panel with blurred transitions, and a tags container that grows and shrinks as tags change; the author notes she would not ship the last one because the layout jumps.
- **Data widgets**: a calendar widget that spells out timezone differences, and a footer widget that surfaces live metrics on hover.
- **Native feel on the web**: an iOS-style slider recreated with Radix UI and Tailwind.
- **Real-world pieces**: according to the site, the dynamic header dropdown shipped in a Vercel project and the footer widget grew out of a Vercel hackathon entry.

## Using it with agents

There is no code, registry, `llms.txt` or API; `/llms.txt` falls through to the homepage. Use it as a visual brief: describe the transition you liked (what morphs, what blurs, how long it takes) and ask the agent to rebuild the behaviour with your own components and Motion.

## Watch out for

- Demo-only: nothing is copyable, so any implementation is your own rebuild.
- Small and apparently finished; there is no sign of updates since 2024.
- The page promotes a paid animation course by a third party; that link is a recommendation, not part of the lab.

## Reusable ideas

- Let a toolbar change its content to report the result of an action instead of firing a separate toast.
- Collect feedback inside the control that asked for it rather than in a modal.
- Show timezone offsets directly on a meeting card so no one has to do the maths.
- Be honest in your own lab about which experiments are not production-ready.

## Related

[Motion Primitives](motion-primitives.md), [interior.dev](interior-dev.md), [Transitions.dev](transitions-dev.md), [Design Spells](design-spells.md), [UIWTF](uiwtf.md)
