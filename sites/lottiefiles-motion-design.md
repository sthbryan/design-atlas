---
title: LottieFiles Motion Design Skill
description: "Motion-director skill: four personalities, duration and stagger tables, Disney principles adapted for UI."
url: https://github.com/LottieFiles/motion-design-skill
type: agent-skill
formats: agent skill
topics: [agent-skills, motion]
verdict: useful
agent: [skill]
pricing: free
licence: free. MIT (© 2025 LottieFiles). About 1.7k GitHub stars and 13.1k installs on skills.sh at review.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [design-motion-principles, mblode-agent-skills, easing-wizard, transitions-dev, ui-skills]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [motion](../topics/motion.md)

# LottieFiles Motion Design Skill

## What it is

A single `motion-design` skill (version 1.0.0) published by LottieFiles. It tries to make an agent think like a motion director before it writes any animation code: name the feeling, pick a personality, then choose property, duration and easing. It works with any stack (CSS, Motion, GSAP, Lottie, springs) and has nothing Lottie-specific in it. `SKILL.md` is 315 lines. The other 16 files, about 1,300 lines, fall into three groups: `director/` (Disney's 12 principles adapted for UI, emotion mapping, choreography, narrative, context), `patterns/` (entrance and exit, state feedback, ambient loops, multi-element sequences) and `reference/` (timing tables, property choice, a quality checklist, troubleshooting). The skill content was released in March 2026 and hasn't changed since; only the README was edited in May.

## When to open it

- When you need a vocabulary for motion *character*: playful, premium, corporate or energetic, and what each means in milliseconds and overshoot.
- For illustration, onboarding, celebration or brand moments, where expressive motion is the goal.
- As a lookup table of durations, stagger budgets, spring settings and ambient loop ranges.

## Most useful

- **Four personalities**: Playful 150–300ms with 10–20% overshoot, Premium 350–600ms on `(0.4, 0, 0.2, 1)` with none, Corporate 200–400ms on `(0.2, 0, 0, 1)` with 0–3%, Energetic 100–250ms with expo-out and 15–30%. Corporate is the default for UI.
- **Duration table**: tooltip 80–120ms, button 120–180ms, icon 150–250ms, card 200–350ms, modal 300–400ms, page 400–600ms. Longer travel means longer time (200px is 1.3×, 400px 1.6×), and an exit takes 65–75% of its entrance.
- **Stagger budgets**: 20–40ms for lists, 50–100ms for cards, and the whole cascade under 500ms.
- **Named curves**: Material 3 standard, emphasised and accelerate, Apple's default, and two overshoot curves, each with a use.
- **Context scaling**: mobile runs at 0.8× duration and a watch at 0.6×. Reduced motion keeps opacity, drops movement and springs, and at least halves durations.

## Using it with agents

Install with `npx skills add LottieFiles/motion-design-skill`, or copy `skills/motion-design/` into your agent's skills folder. The description triggers on any animation, transition, micro-interaction, loading state or scroll effect. The agent then runs an 8-step checklist (emotion, personality, property, duration, easing, hero element, extra layers, the "1/3 rules") and writes code in whatever library the project uses. Review happens against a checklist with CRITICAL, HIGH and MEDIUM tiers. It doesn't render or measure anything, and it makes no network calls.

## Watch out for

- **Exits use ease-in.** Emil Kowalski's skill says never to use ease-in for UI, and mblode's `ui-animation` also advises against it. Lottie applies it to every exit.
- **Layers by default.** A CRITICAL rule asks for primary, secondary *and* ambient motion in every animation, and one ambient pattern is a pulsing CTA. That is exactly what Design Motion Principles flags as AI slop, and it runs against Emil's rule to question how often a motion will be seen.
- **Values collide with other skills.** Tooltips at 80–120ms are faster than Emil's 125–200ms. Premium's 350–600ms goes past the "under 300ms" rule that Emil and mblode set. Hover scale-up of 1.02–1.05 on buttons and badges that scale from 0 both appear on other skills' ban lists. Its overshoot curves also clash with Jakub Krehel's rule of bounce 0 for icons.
- Blur and other `filter` animation sit in its "avoid" performance tier, while Jakub's skill uses a 4px blur on every icon swap.
- Nothing has changed since March 2026. It has no evals, no audit output format and no way to check its own results.

## Reusable ideas

- Define a brand's motion with three fixed choices: one signature curve, three durations, one entrance style.
- Scale duration by distance and by device instead of using one number everywhere.
- Give staggers a total budget, not just a per-item delay.
- Give overshoot a budget per context (errors 0%, feedback 2–5%, celebration 15–25%).

## Related

[Design Motion Principles](design-motion-principles.md), [mblode Agent Skills](mblode-agent-skills.md), [Easing Wizard](easing-wizard.md), [Transitions.dev](transitions-dev.md), [UI Skills](ui-skills.md)
