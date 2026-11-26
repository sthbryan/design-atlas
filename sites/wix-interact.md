---
title: Wix Interact
description: MIT declarative interaction library that drives scroll, pointer and hover effects from a JSON spec in React or vanilla JS.
url: https://github.com/wix/interact
type: js-library
formats: interaction library · declarative JSON spec · React and Web Components · agent skill
topics: [motion, agents-and-prompts]
verdict: useful
agent: [skill]
pricing: free
licence: MIT, stated in the repository at review (created November 2025).
licence_class: open-source-permissive
reviewed: 2026-11-26
status: active
related: [motion-dev, framewave, zephyr3d]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Wix Interact

## What it is

Wix Interact is a declarative interaction library for the web: you describe effects (scroll, pointer, hover and other triggers) as a JSON spec, and the library applies them to React, Web Components or plain DOM. It is MIT-licensed and was created in November 2025.

## When to open it

Open it when you want the same interaction spec to run across frameworks, or when an agent should describe an effect as data instead of writing imperative animation code.

## Most useful

- **Interaction as a spec**: the effect is a document, which is easier to review, share and generate than code.
- **Framework-agnostic**: React, Web Components and vanilla JS from one spec.
- **Agent support**: an official skill for coding agents plus LLM-readable docs.

## Using it with agents

The repository ships an Interactor skill for coding agents (Claude Code, Cursor and others) and agent rules, so the spec can be authored and applied in-session.

## Watch out for

- It is a young project (about 4 stars at review), so APIs may still move.
- A declarative spec hides timing: check the interaction feels right, not only that it runs.

## Reusable ideas

- Describe effects as data so the same interaction works in any framework.
- Publish agent rules with the library, so an agent applies the spec instead of hand-rolling CSS.


## Related

[Motion](motion-dev.md), [Framewave](framewave.md), [Zephyr3D](zephyr3d.md)
