---
title: "Rauno's Field Notes #5"
description: A video-backed interaction study of stacked sidebar cards, hover cues, hit areas and dismissal motion.
url: https://rauno.me/notes/5
type: website
formats: interaction design essay · animated prototypes · sidebar card navigation
topics: [motion, ux-patterns]
verdict: niche
agent: []
pricing: free
licence: This note is free to read. No reuse licence for its writing, prototypes or visuals is stated; treat it as a look-only reference.
licence_class: not-stated
reviewed: 2026-09-27
status: active
related: [devouring-details, uiwtf]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [ux-patterns](../topics/ux-patterns.md)

# Rauno's Field Notes #5

## What it is

Rauno Freiberg documents iterations for navigating notification cards in a narrow dashboard sidebar. The article pairs a short rationale with playable video prototypes, including the final interaction and approaches he discarded.

## When to open it

Open it when a compact rail or sidebar needs to cycle through several notices without adding cramped arrow controls. The interaction is specific to a desktop pointer; use it as a case study, then check touch and keyboard behavior for your own component.

## Most useful

- **Cards as controls**: offset cards peek from behind the active card, hinting that more notices are available without adding separate arrows.
- **Hover and activation**: hovering the visible card previews its title; once the user has discovered the stack, the hint motion stops repeating. Clicking the card advances one item.
- **Forgiving hit area**: an invisible padded target lets the pointer reach a partly obscured card without precise aim.
- **Exit and dismissal**: the departing card fades before returning to the end of the queue. Hovering the dismiss control collapses the whole stack, then scales down the active card to suggest that all notices will be removed.
- **Iteration record**: the author shows why a bottom stack, overlapping controls and a direct z-index swap were set aside.

## Using it with agents

No published agent channel was found. Share the note and ask an agent to map each video to the state it demonstrates, then adapt the interaction for pointer, touch, keyboard and reduced-motion input.

## Watch out for

- This is an interaction study rather than a reusable component or source repository; no implementation or API is offered.
- The author notes that the approach is designed around pointer hover and that a bottom stack made the primary action feel too close to a navigation target.
- No reuse licence is stated for the prototypes or visuals.

## Reusable ideas

- Use a visible edge of the next item as a progressive hint when separate navigation controls would crowd a small surface.
- Enlarge the interactive target beyond the visible portion of an overlapping card.
- Make repeated motion teach the interaction once, then reduce the cue after the user has learned it.
- Let exit timing communicate queue order: fade the active card before placing it at the back.
- Use a coordinated change across related objects to show that an action affects the whole group.

## Related

[Devouring Details](devouring-details.md), [UIWTF](uiwtf.md)
