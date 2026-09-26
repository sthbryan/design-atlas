---
title: Kobra
description: Proprietary component system for AI and agent product interfaces, with an llms.txt index and a markdown API per component.
url: https://kobra.systems
type: design-system
formats: design system
topics: [components, agents-and-prompts, ai-interfaces]
verdict: useful
agent: [llms-txt, api]
pricing: freemium
licence: Proprietary / commercial; free tier for personal use only, paid tiers grant commercial use, no OSS licence or redistribution
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [shadcn-ui, aceternity-ui, component-gallery]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md), [ai-interfaces](../topics/ai-interfaces.md)

# Kobra

## What it is

Kobra is a component system purpose-built for AI and agent product interfaces. It includes specialized pieces like a message scroller that sticks to the bottom of chat containers with a "N new messages" jump button, plan cards for approving or rejecting agent actions (with ⌘Enter shortcuts), inline citations with hover-revealed sources, file diffs with per-hunk accept/reject controls, input OTP fields, multi-select, select components that adapt to touch vs. pointer input, item rows, toggle groups, and chat-specific media pieces.

## When to open it

Open Kobra when designing interfaces for AI assistants, agent dashboards, or chat applications. It's especially useful if your product needs specialized controls for reviewing agent outputs, comparing diffs, or managing structured input.

## Most useful

- **Agent-aware components** like plan cards and citation links that anticipate workflows around LLM outputs
- **`llms.txt` index and markdown API** (`/r/<name>.md`) with exports and package info—agents can read these directly
- **Keyboard shortcuts** baked into components (e.g., ⌘Enter on plan cards)
- **Responsive controls** that detect pointer type and adapt (native select on touch, custom on desktop)
- **Live examples** at `/components/<name>` with interactive previews

## Using it with agents

Kobra publishes detailed markdown documentation per component, accessible at predictable URLs. You can point Claude to these pages or paste component names into agent prompts; the system is designed to be agent-friendly. Keyboard shortcuts and approval workflows map naturally to LLM outputs.

## Watch out for

- **Most restrictive licensing** of the sites in this atlas—ideas only, never copy code or component names
- Free tier is personal use only; commercial projects require a paid license
- No open-source license or redistribution rights; you cannot fork or reuse code outside the commercial product
- Dependencies include input-otp, motion, Embla, Vaul, kmenu, and Tabler/Hugeicons—check compatibility with your stack

## Reusable ideas

- Chat containers that auto-scroll to new messages but allow manual scroll-up
- Action approval flows with keyboard shortcuts for efficiency
- Inline citations linked to their sources (visible on hover)
- File diff UI with fine-grained accept/reject controls
- Message type indicators (user, assistant, error) as visual badges
- Plan cards for human-in-the-loop agent validation

## Related

[shadcn-ui](shadcn-ui.md), [aceternity-ui](aceternity-ui.md), [component-gallery](component-gallery.md)
