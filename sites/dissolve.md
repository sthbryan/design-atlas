---
title: dissolve
description: Open-source animated UI components for React Native and React, copied into your app with an agent prompt and CLI.
url: https://dissolve.rselmi.com
type: component-library
formats: component library · React Native and React · CLI · agent prompt
topics: [components, motion, documentation]
verdict: niche
agent: [llms-txt, cli, prompts]
pricing: freemium
licence: Open source and MIT per its `llms.txt` (npm package `dissolve-ui`); a Pro tier exists for extra components at review.
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [motion-dev, shadcn-ui, useplanes]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [documentation](../topics/documentation.md)

# dissolve

## What it is

dissolve is an open-source animation library for React Native with 44 animated UI components, also usable in React. Components are copied into your app rather than installed as a dependency, and the package is `dissolve-ui` (version 0.0.9 at review, MIT).

## When to open it

Open it when you need animated mobile components (toasts, segmented controls, pull-to-refresh, scratch cards) without building the gestures yourself.

## Most useful

- **Gesture-first components**: swipe-to-delete, reorder lists, scratch cards and signature pads, the pieces that are painful to hand-roll.
- **Agent prompt and CLI**: the docs ship an agent prompt and a CLI theming flow, so an agent can install and theme components.
- **Copy-in model**: components land in your codebase and stay editable.

## Using it with agents

An `llms.txt`, a CLI and a ready-made agent prompt are the agent channels; the theming flow is designed to be driven from a prompt.

## Watch out for

- It is young (version 0.0.9 at review), so the API may still move.
- React Native is the home platform; web use is secondary.

## Reusable ideas

- Ship an agent prompt with a copy-in library so installation is a conversation, not a docs hunt.
- Group components by the gesture they implement, not only by their visual category.

## Related

[Motion](motion-dev.md), [shadcn/ui](shadcn-ui.md), [Planes](useplanes.md)
