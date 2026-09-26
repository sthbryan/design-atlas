---
title: mblode Agent Skills
description: Design audits with a ship verdict, Playwright probes, a 78-rule typography check, and motion curves fitted from recordings.
url: https://github.com/mblode/agent-skills
type: agent-skill-collection
formats: agent skill collection
topics: [agent-skills, ux-patterns, motion, typography-and-styles]
verdict: very-useful
agent: [skill]
pricing: free
licence: free. MIT (© 2026 Matthew Blode). About 130 GitHub stars but 27.1k installs on skills.sh at review. The README also promotes the author's own course, Taste Training, whose first unit is free.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [impeccable, ui-skills, hallmark, design-motion-principles, dialkit, agentation]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [ux-patterns](../topics/ux-patterns.md), [motion](../topics/motion.md), [typography-and-styles](../topics/typography-and-styles.md)

# mblode Agent Skills

## What it is

Matthew Blode's collection of 27 skills. Its tagline promises that you won't ship "AI slop". Six are design skills, and each one owns a single area and hands off the rest. `product-design` decides what an interface should do (which controls, how far an action reaches, whether it can be undone, which states are reachable). `ui-design` sets the visual direction, builds React, Next.js and Tailwind UI, and audits it with 58 rules. `ui-verification` opens the app in a headless Playwright browser and runs nine probes. `ui-animation` covers timing, springs and gestures, and can work out the curves of an animation from a screen recording. `typography-audit` checks 78 rules in 10 categories. `presentation-creator` makes slide decks. The others cover PRs, releases, SEO and agent docs. The repo is very active: commits landed the day before this review.

## When to open it

- When you want a design audit that ends in a ship verdict with `file:line` evidence, and can change a finding from "probably" to "measured" in a real browser.
- When you want to copy the curve and timing of a motion you recorded on screen.
- When you're designing your own skill suite and want an example of clear ownership rules and evals.

## Most useful

- **Audit rules in `ui-design`**: the audit may read only its rules and references, never the design guidelines, so an audit can't quietly become a redesign. Diffs are the default scope. A question gets a report, and a request to fix gets edits. A fix that doesn't clear its own finding is reverted.
- **Deslop ladder**: delete, then reduce, then reconcile with existing tokens, and restyle only after that. Screenshots at desktop and mobile width come first.
- **Build defaults**: 48px touch targets when building (audits check against WCAG's 44px). Indigo accents and `gray-*`/`slate-*` neutrals aren't used by default. Ramps are built in OKLCH, with a role for every step.
- **Motion values in `ui-animation`**: an enter curve of `cubic-bezier(0.22, 1, 0.36, 1)`, press 100–160ms, dropdowns 150–250ms, modals and drawers 200–350ms, routine UI under 300ms. Popovers grow from their trigger starting at `scale(0.9–0.96)`, and staggers are 30–50ms with the whole cascade under 300ms. Springs don't bounce unless a flick or drag gave them momentum.
- **Reverse-engineering motion**: Python scripts (`extract_frames`, `track_motion`, `fit_curves`) turn a recording into spring or bezier values, flag fits with error above 0.08, and output code for CSS, Motion, SwiftUI or React Native.

## Using it with agents

Install with `npx skills add mblode/agent-skills` (the README adds `-g --agent codex claude-code -y`), or through the Claude Code marketplace in `.claude-plugin/`. Each skill's description lists the phrases that trigger it, such as "remove UI slop", "audit typography" or "match this easing", and names the sibling that handles the neighbouring job. `ui-design` audits give each finding one of three tiers, from release-blocker down, and end with a ship verdict as terminal text or CI JSON. Motion reviews end in Block or Approve. Every skill includes an `evals/evals.json` of regression scenarios.

## Watch out for

- **It won't coexist with Emil's or Jakub's skills.** The author decided not to include `emilkowalski/skill` or `jakubkrehel/skills` because their triggers collide with his. Installing them together means two owners for the same rules.
- **Press timing contradicts itself.** The core rules say `:active` press happens at 0ms. The easing table lists 100–160ms, which is Emil's range. Jakub says 150ms. Press scale is 0.97 within 0.96–0.98, while Jakub insists on exactly 0.96.
- **Staggers vary between skills.** Here it is 30–50ms with a total under 300ms. Emil allows 30–80ms per item, Jakub uses about 100ms, and LottieFiles allows a 500ms total.
- **High-frequency UI flips enter and exit.** Hover highlights and popovers enter at 0ms and fade out over 100–150ms. LottieFiles says the opposite (entrances 30–50% longer than exits), and it also uses ease-in, which this skill advises against.
- **Blur**: it avoids animating `filter` in core interactions (and caps blur at 20px), while Jakub's icon swaps rely on a 4px blur.
- **Setup and network**: `ui-verification` needs a running app and Playwright. Motion fitting needs `ffmpeg`, OpenCV, NumPy and SciPy installed locally. Dark-mode images need Codex's `imagegen` skill. Its font picks load from Fontshare and rsms.me. No telemetry was found.

## Reusable ideas

- State what each skill does and doesn't do in "IS / IS NOT" lines, with a routing section that names who owns the next step.
- Limit what an audit may read, so review stays review, and have it list every file it loaded to prove it.
- Mark rules that need a rendered page, and report them as `unknown` instead of guessing when no browser is available.
- Build to a stricter default than the one the audit enforces, so later changes don't drop below the floor.

## Related

[Impeccable](impeccable.md), [UI Skills](ui-skills.md), [Hallmark](hallmark.md), [Design Motion Principles](design-motion-principles.md), [DialKit](dialkit.md), [Agentation](agentation.md)
