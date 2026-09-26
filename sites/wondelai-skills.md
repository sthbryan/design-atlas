---
title: Wondel.ai Skills
description: Refactoring UI, Nielsen/Krug heuristics and web typography turned into scored audit skills.
url: https://github.com/wondelai/skills
type: agent-skill-collection
formats: agent skill collection · Claude Code and Codex plugin marketplace
topics: [agent-skills, ux-patterns, typography-and-styles]
verdict: useful
agent: [skill]
pricing: free
licence: free. MIT (repo-root `LICENSE`, © 2025 Wondel.ai sp. z o.o.; about 2.3k stars at review, last change 2026-09-10). The "Further reading" links in the skills include Amazon affiliate tags.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [laws-of-ux, anthropic-design-plugin, ibelick-ui-skills, impeccable, good-ui]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [ux-patterns](../topics/ux-patterns.md), [typography-and-styles](../topics/typography-and-styles.md)

# Wondel.ai Skills

## What it is

Wondel.ai turns well-known books into agent skills. The repo has 65: 51 frameworks (product, marketing, sales, strategy, code, UX) and 14 "metaskills" that walk you through a longer journey and keep their state in your project's `docs/` folder. The design skills are in an 11-skill `ux-design` plugin: `refactoring-ui` (after Wathan and Schoger), `ux-heuristics` (Krug and Nielsen), `web-typography` (Jason Santa Maria), `microinteractions`, `top-design` (Awwwards-style sites), `ios-hig-design`, `design-everyday-things`, `lean-ux`, `hooked-ux`, `improve-retention` and `steve-jobs-design-review`. Each is one `SKILL.md` of about 14 to 20 KB, and the three main ones add five or six reference files each. Each design skill scores the work out of 10 from a yes/no "Quick Diagnostic" table. skills.sh counted about 8.1k installs for `web-typography`, 7.7k for `refactoring-ui` and 7.5k for `ux-heuristics`.

## When to open it

- When you want an audit based on a named book, with a score and a list of what to fix to reach 10/10.
- When the problem is "it looks amateur" and you want spacing, hierarchy, colour and shadow scales rather than a new style.
- For a usability review of forms, navigation and error handling, graded on the Nielsen 0–4 severity scale.

## Most useful

- **`refactoring-ui`**: design in grayscale first; spacing only from 4, 8, 16, 24, 32, 48 and 64 px; type from 12 to 36 px on a hand-tuned ratio of about 1.2; 5–9 shades per colour, with the darkest `#111827` rather than black and grays tinted warm or cool; two-part shadows; left alignment by default. It scores the 8 diagnostic rows (blur test, grayscale test, white space, label weight, scale use, measure, contrast, shadow level).
- **`ux-heuristics`**: Krug's laws and the trunk test, Nielsen's 10 heuristics, a 0–4 severity scale weighed by frequency, impact and persistence, rules for when heuristics conflict (for example, prefer undo to a confirmation dialog), and a dark-pattern reference.
- **`web-typography`**: body text at least 16 px (18 for reading-heavy pages), 45–75 characters per line with 65ch as the default, line height 1.5–1.7 for body, 1.3–1.4 for UI and 1.1–1.25 for headings, fonts under 200 KB, `font-display: swap`, and text that survives 200% zoom.
- **Cross-routing**: each description names its neighbours ("for typeface selection, see web-typography"), so an agent picks the right one.

## Using it with agents

Install the design set in Claude Code with `/plugin marketplace add wondelai/skills` and then `/plugin install ux-design@wondelai-skills`. Or install single skills with `npx skills add wondelai/skills/refactoring-ui --global`. The repo also ships a Codex marketplace and Agent Plugins manifests. Skills trigger on everyday phrases ("my UI looks off", "usability audit", "font pairing"). An audit produces a current score, the failing diagnostic rows or highest-severity issues, and concrete fixes, often as Tailwind classes. The skills are plain prose with no scripts and no network calls.

## Watch out for

- The code is Tailwind-flavoured (`p-4`, `text-gray-600`, `max-w-prose`) and the values are the book's. They will override a project's own tokens unless you say otherwise.
- The 10/10 scores come from counting checklist rows. They are useful for tracking progress, not as a quality measure.
- Some thresholds differ from the standards. `refactoring-ui` counts 18 px as "large text" for contrast, but WCAG defines it as 18 pt (about 24 px). The accessibility references follow WCAG 2.1, not 2.2.
- Overlaps: `ux-heuristics` covers the same ground as Laws of UX and the Anthropic design critique, and `web-typography` sets measure and line-height values that other type skills may set differently.
- Most of the 65 skills are about business, not UI. Install the `ux-design` plugin, not `--all`, unless you want the lot.
- Each skill summarises a commercial book. Read the originals for the full argument.

## Reusable ideas

- End every audit skill with a yes/no diagnostic table and derive the score from it, so the number can be explained.
- Name neighbouring skills in the description ("for X, see Y") so routing happens before loading.
- Add an "ethical boundary" line to each principle, such as never using hierarchy to hide pricing or cancellation.
- Keep the main file to principles and tables, and move depth (dark mode, data viz, cultural UX) into references the skill points to by situation.

## Related

[Laws of UX](laws-of-ux.md), [Anthropic Design Plugin](anthropic-design-plugin.md), [ibelick UI Skills](ibelick-ui-skills.md), [Impeccable](impeccable.md), [Good UI](good-ui.md)
