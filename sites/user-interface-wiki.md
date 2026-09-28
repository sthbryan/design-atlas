---
title: User Interface Wiki
description: Raphael Salaja's nine demo-rich articles on motion, sound and type, installable as a 152-rule agent skill.
url: https://www.userinterface.wiki
type: guidelines
formats: guidelines · agent skill
topics: [motion, ux-patterns, sound, agents-and-prompts]
verdict: very-useful
agent: [skill]
pricing: free
licence: Free, no account. The GitHub repo (`raphaelsalaja/userinterface-wiki`), including the articles and the agent skill, is MIT (© 2026 Raphael Salaja).
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [dialkit, motion-primitives, uisfx, kinetics, laws-of-ux]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [ux-patterns](../topics/ux-patterns.md), [sound](../topics/sound.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# User Interface Wiki

## What it is

User Interface Wiki is a small, carefully built manual of interface craft written by Raphael Salaja. It has nine long-form articles: the 12 principles of animation, animating container bounds, AnimatePresence, springs versus easing, morphing icons, pseudo-elements and View Transitions, sound on the web, generating sounds with AI, and the laws of UX. Each article has interactive demos, and a Demos page gathers all 37 in one place. The articles also come with narrated audio. Everything on the site is also packaged as an agent skill with 152 rules in 12 categories. The site runs on Next.js with Fumadocs and Base UI.

## When to open it

- When you are adding motion to a React UI and want concrete rules: how long, which easing, spring or no spring.
- When exit animations or animated height and width misbehave and you want the known fixes.
- When you are adding UI sounds and want guidance on when sound helps and how to synthesise it with the Web Audio API.
- When you want an agent to review your UI code against a fixed set of craft rules.

## Most useful

- **Rules with IDs**: every rule has a prefixed slug (`timing-`, `easing-`, `spring-`, `exit-`, `pseudo-`, `ux-`, `type-`, `visual-`...) and a priority, from critical animation principles down to morphing icons.
- **Demos you can play with**: side-by-side ease versus spring, Fitts's and Hick's law toys, nested exits, a sound lab.
- **Clear numbers**: user-triggered animations stay under 300 ms, stagger stays under 50 ms per item, squash and stretch stays within about 5%, and linear easing is only for progress.
- **Typography rules**: 16 rules on OpenType features such as slashed zero, oldstyle numbers for prose, proper fractions, and never letting the browser fake bold or italic.
- **Sound rules**: when sound is appropriate, volume and reduced-motion toggles, envelopes, and filter ranges.

## Using it with agents

- Install the skill with `npx skills add raphaelsalaja/userinterface-wiki`. It works in Claude Code, Codex, Cursor and other agents that read skills.
- The skill's `SKILL.md` tells the agent when to apply it and asks for findings as `file:line`. The `rules/` folder holds one markdown file per rule with incorrect and correct code, and `AGENTS.md` is a compiled version of all of them.
- There is no llms.txt (404) and no MCP server. The RSS feed has no articles in it, so point agents at the GitHub `content/` folder for the MDX sources.

## Watch out for

- It is opinionated and built around React and Motion (Framer Motion). Some rules, such as "no entrance animation on context menus", are one author's taste, not a standard.
- It covers nine topics, not the whole field. Forms, navigation, colour and layout are barely covered outside the short `visual-` and `ux-` rule groups.
- The header promotes the author's own text-morphing library, Calligraph.

## Reusable ideas

- Give each design rule a short, prefixed ID so reviews can cite it and agents can report it.
- Rank rules by impact so an automated review fixes timing and physics before cosmetic details.
- Pair every rule with a wrong and a right code sample instead of prose alone.
- Put a live demo next to any claim about motion, because a description of motion is easy to misread.

## Related

[DialKit](dialkit.md), [Motion Primitives](motion-primitives.md), [UI SFX](uisfx.md), [Kinetics](kinetics.md), [Laws of UX](laws-of-ux.md)
