[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Remocn

- **URL:** https://remocn.dev
- **Type:** video component library (shadcn registry) · agent skill
- **Topics:** motion, components, agents-and-prompts
- **Pricing / licence:** free; remocn code is MIT (repo `Remocn/remocn`), but Remotion itself is free only for individuals, non-profits and companies of up to 3 employees; larger companies need a Remotion company licence
- **Reviewed:** 2026-09-25

## What it is

A shadcn-style registry of Remotion components for making product videos in React, paired with an agent skill that composes them into full videos. It is an independent project (mainly by developer KapishDima) that says it is not affiliated with shadcn or Remotion. At review time the site listed 308 components: text animations, scene transitions, shader and canvas backgrounds, effects, UI-block simulations, self-drawing icons derived from Lucide, social cards and full templates. The repository had about 1.5k stars.

## When to open it

When you need a launch video, changelog clip, teaser or product demo and would rather describe it to a coding agent than learn After Effects, or when an existing Remotion project needs polished pieces instead of hand-timed animation.

## Most useful

- **Two tiers**: an animation tier (reveals, transitions, backgrounds, icons) and a UI tier where familiar shadcn parts like Button, Input, Checkbox and Select change state on a scripted timeline instead of on clicks.
- **Typography and transitions**: about 60 text entrances and exits and about 27 scene transitions, each stating its natural length in frames.
- **Shaders, filters and effects**: gradient and noise backdrops, whole-scene filters (CRT, VHS, halftone, hologram, ASCII), a paper crumple, a hand-drawn arrow, a scribbled circle and a TV power-off exit.
- **Guides**: step-by-step recipes for launch, feature, changelog, teaser and showcase videos, plus notes on on-screen copy, music, brand setup and exporting to vertical formats.
- **Craft notes**: house rules on restraint, a short list of motion principles and common anti-patterns in generated video.

## Using it with agents

This is the strongest agent story in the -cn family. `npx skills add Remocn/remocn` installs a skill with archetype recipes and timing rules, which reads the live `/llms-components.txt` index, a table giving each component's use and avoid cases, length, tone and dependencies. Components install with `npx shadcn@latest add @remocn/<name>` (the namespace is in shadcn's public directory). The site also has `llms.txt`, a large `llms-full.txt`, and `.md` copies of every docs page. An "Add to Studio" button can push a component straight into a running Remotion Studio.

## Watch out for

- Check your company's size against the Remotion licence before using this commercially; remocn's MIT licence does not cover Remotion.
- The AI section recreates branded interfaces (ChatGPT, Claude, Claude Code, v0, OpenCode) and social cards for X and GitHub; get permission before using those marks in marketing.
- The skill needs network access to remocn.dev because the catalogue is not bundled.
- Output is silent by default; music and voice are left to you.

## Reusable ideas

- Give every component a stated duration so an agent can budget a timeline without trial renders.
- Publish "use for" and "avoid for" notes per component so agents choose by intent, not by name.
- Script UI states on a timeline (`at` frame, `state`) to fake a flawless product walkthrough.
- Wrap static scenes in a slow camera drift so no frame looks frozen.

## Related

[framecn](framecn.md), [OpenMotion](openmotion.md), [Motion Primitives](motion-primitives.md), [Anime.js](animejs.md), [shadcn/ui](shadcn-ui.md)
