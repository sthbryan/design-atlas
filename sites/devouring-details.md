---
title: Devouring Details
description: Rauno Freiberg's paid interactive manual on interaction craft, with 23 chapters and downloadable React prototypes.
url: https://devouringdetails.com
type: documentation
formats: interactive reference manual (paid) · downloadable React prototypes
topics: [motion, documentation, ux-patterns]
verdict: very-useful
agent: []
pricing: paid
licence: $249 one-time for the current edition, paid through Polar. The FAQ offers a 30-day refund and a 20% student discount. Two chapters are free to preview. No licence is published for the downloadable source code
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [detail-design, 60fps, motion-primitives, dialkit, kinetics]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [documentation](../topics/documentation.md), [ux-patterns](../topics/ux-patterns.md)

# Devouring Details

## What it is

Devouring Details is an interactive manual on interaction design by Rauno Freiberg, a Staff Design Engineer at Vercel who previously designed and built the Arc browser at The Browser Company. He also wrote the essay "Invisible Details of Interaction Design" and, according to the site, shipped the open-source `cmdk` command-menu library. It is a reference to revisit, not a step-by-step course. According to the site, it has 23 chapters, each paired with a downloadable React component, and all the footage is recorded from real React components. The platform is built with Next.js.

## When to open it

When you already build interfaces and want to understand why an interaction feels right: how much delay a sequence needs, when to drop motion altogether, how a gesture should stay within its bounds. It suits design engineers and designers who read code, and it works best on desktop.

## Most useful

- **Principles**: essays on inferring intent, interaction metaphors, ergonomic interactions, simulating physics, motion choreography, responsive interfaces, contained gestures and drawing inspiration
- **Prototypes**: deep dives into single components (a line minimap, a radial timeline, a morphing surface, a blur reveal, a logos carousel, a time machine…), each with source you can view and download as a ZIP
- **Resources**: code snippets, design workflow, a component library, bookmarks, design philosophies and a React handbook
- **Free previews**: the "Behind scenes" and "Next.js Dev Tools" chapters are public

## Using it with agents

It has no agent support: no `llms.txt`, API or MCP, and the content sits behind a login. Once you have paid, download a prototype's source and give it to your agent as a reference implementation, for example to port it to another stack. Written principles are best turned into your own short rules for a project brief, not pasted in wholesale.

## Watch out for

- Examples use React, Tailwind and Motion (formerly Framer Motion). The ideas carry over to Vue or SwiftUI, but you would have to port the code yourself
- It is not a beginner course. According to the FAQ, it skips HTML, CSS and JavaScript basics and doesn't take you from a blank project to a finished one
- On mobile you can read the text and watch the videos, but many interactive prototypes don't work well there
- Reuse terms for the downloaded code are not stated; ask before putting it in a product or shared library

## Reusable ideas

- Add a small, deliberate delay to a sequence so each step can be read, instead of making everything instant
- Remove motion from high-frequency interactions where animation only slows people down
- Keep a gesture's effect inside the element that received it, so the rest of the layout stays still
- Infer intent from pointer direction and speed before reacting, for example on menus and hovers
- Give each prototype a short problem statement before its code, so the reasoning can be reused

## Related

[Detail (detail.design)](detail-design.md), [60fps](60fps.md), [Motion Primitives](motion-primitives.md), [DialKit](dialkit.md), [Kinetics](kinetics.md)
