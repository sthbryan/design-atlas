---
title: 60fps
description: About 2,080 real iOS interaction recordings with storyboards, a glossary, llms.txt and a paid MCP that returns motion breakdowns.
url: https://60fps.design
type: gallery
formats: inspiration gallery (motion)
topics: [inspiration, motion, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt]
pricing: freemium
licence: "free to browse; PRO $15/mo or $150/yr (full filters, storyboards, better player); MCP is a separate plan at $29/mo or $75/quarter, billed through Gumroad. Content is proprietary: recordings belong to the apps shown, and the curation and breakdowns belong to 60fps"
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [design-spells, kinetics, openmotion, dialkit, motion-primitives]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# 60fps

## What it is

A curated library of screen recordings of animations and interaction details from shipped apps, mostly iOS. At review time the site listed about 2,080 shots across 487 apps, plus 88 app marketing sites, 71 brand "motion bento" reels credited to the studio behind them, and 67 storyboards that break a single interaction down frame by frame. It is built on Framer and run as a sole proprietorship based in Bengaluru, India, according to its terms; individual shots credit curators such as Benji and Rishabh.

## When to open it

Before designing or coding a mobile interaction you want to feel premium: onboarding, bottom sheets, streaks and rewards, tab bars, pull-to-refresh, success states. It is also a quick way to see how several well-known apps solve the same pattern side by side.

## Most useful

- **Filters in four families**: gestures (drag, flick, long press, pinch, scrub…), patterns (onboarding, empty state, streak, paywall-style pricing…), effects (morph, blur, spring physics, stagger, confetti…) and elements (bottom sheet, tabs, toast, picker…), plus App Store categories.
- **Storyboards**: each one tags the interaction, the psychology principles it leans on (progressive disclosure, variable reward, feedback loops) and the user impact it aims for.
- **Glossary**: 85 short definitions of motion and gesture terms, each linked to real examples, which is handy for building a shared vocabulary with a team or an agent.
- **App Sites**: a smaller web-focused section covering hover states, scroll effects and hero transitions on product landing pages.
- **Mockup**: a companion tool at mockup.60fps.design that wraps screen recordings in iPhone frames.

## Using it with agents

There is a public `llms.txt` describing the sections. The paid MCP server (hosted at mcp.60fps.design, beta) works with Claude, ChatGPT, Cursor and Codex and exposes tools to search shots in plain language, list filters, fetch one shot's keyframes and mood, return a motion breakdown (trigger, start, move, settle, rationale), return SwiftUI code for the motion and suggest related shots. The terms publish fair-use limits (per minute, per day and per month) and return HTTP 429 when they are hit.

## Watch out for

- The MCP is not included in PRO; they are separate keys, except for PRO keys bought on or before 12 September 2026.
- Generated code targets SwiftUI; web teams will need to translate timing and springs to CSS or Motion themselves.
- The terms forbid bulk downloading, mirroring, building a competing reference library and using the content to train or evaluate models. Rebuild the motion, never the app's brand, copy or assets.
- The free tier is usable, but many filters and the better player sit behind PRO.

## Reusable ideas

- Describe every interaction in four beats (trigger, starting state, movement, settle) before writing any animation code.
- Tag motion references by gesture, pattern, effect and element so the same shot can be found from any angle.
- Pair each interaction with the behavioural principle it serves, so motion is justified rather than decorative.
- Morphing a tapped card or pill into the next screen keeps spatial continuity across navigation.
- Spend animation budget on "moments" (streaks, rewards, success states) rather than on every transition.

## Related

[design-spells](design-spells.md), [kinetics](kinetics.md), [openmotion](openmotion.md), [dialkit](dialkit.md), [motion-primitives](motion-primitives.md)
