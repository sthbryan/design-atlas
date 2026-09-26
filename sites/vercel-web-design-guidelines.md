[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [ux-patterns](../topics/ux-patterns.md)

# Vercel Web Design Guidelines

- **URL:** https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines
- **Type:** agent skill (part of Vercel's `agent-skills` collection)
- **Topics:** agents-and-prompts, ux-patterns
- **Pricing / licence:** free. The `vercel-labs/agent-skills` repo (about 31.5k stars at review) has no licence file; its README only says "MIT" in a closing line. The rules it fetches live in `vercel-labs/web-interface-guidelines`, which does ship an MIT `LICENSE` (© 2025 Vercel Labs). skills.sh counted about 667k installs for this skill, the most of any design skill we have reviewed.
- **Reviewed:** 2026-09-25

## What it is

`web-design-guidelines` is Vercel's UI review skill. The skill file itself is tiny (39 lines, version 1.0.0, unchanged since January 2026). It holds no rules. Each run, it tells the agent to download the current `command.md` from the Web Interface Guidelines repo (last changed 2026-08-18), read the files you name, and report every violation in a terse `file:line` format. That fetched file carries about 90 rules in 16 groups (accessibility, focus, forms, animation, typography, content handling, images, performance, navigation and state, touch, safe areas, dark mode, locale, hydration, hover states, copy) plus a 14-item "flag these" list. The same guidelines are published for people at vercel.com/design/guidelines. The collection has eight other skills, mostly about React and the Vercel platform: `react-best-practices`, `composition-patterns`, `react-native-skills`, `react-view-transitions`, `vercel-optimize`, `deploy-to-vercel`, `vercel-cli-with-tokens`, and `writing-guidelines`, which uses the same fetch pattern to review docs prose.

## When to open it

- For a fast code-level pass over components before a pull request, when you want a checklist of findings rather than a redesign.
- When your stack is React or Next.js with Tailwind; several rules (`nuqs`, hydration warnings, `focus-visible:ring-*`) assume it.
- When you want rules that someone else keeps current, without reinstalling anything.

## Most useful

- **Accessibility and focus basics**: icon-only buttons need `aria-label`, `<button>` for actions and `<a>` for navigation, never remove outlines without a `:focus-visible` replacement, sticky bars must not cover the focused element.
- **Forms**: `autocomplete` and a real `name` on inputs, correct `type` and `inputmode`, never block paste, keep submit enabled until the request starts, show errors inline and focus the first one.
- **Animation**: honour `prefers-reduced-motion`, animate only `transform` and `opacity`, never `transition: all`, put SVG transforms on a `<g>` with `transform-box: fill-box`.
- **Typography details**: the `…` character instead of three dots, curly quotes, non-breaking spaces in `10 MB` and `⌘ K`, `tabular-nums` for number columns, `text-wrap: balance` on headings.
- **State and i18n**: filters, tabs and pagination belong in the URL; dates and numbers go through `Intl.*`; brand names get `translate="no"`.

## Using it with agents

Install with `npx skills add vercel-labs/agent-skills` (add `--skill web-design-guidelines` to take only this one). It triggers on requests such as "review my UI", "check accessibility" or "audit design", and takes a file or glob argument. It produces findings grouped by file, one line each (`src/Modal.tsx:12 - missing overscroll-behavior: contain`), with a pass mark for clean files and no preamble. It only reports; any fixes are a separate step. The guidelines repo also has an `install.sh` that copies `command.md` as a slash command into Claude Code, Cursor, OpenCode, Amp, Windsurf, Gemini CLI and Antigravity.

## Watch out for

- Every run fetches a file from GitHub. The review therefore needs network access, and its rules can change between two runs with no version to pin. If you need repeatable reviews, vendor a copy of `command.md`.
- The skill names Claude Code's `WebFetch` tool. Other agents need an equivalent fetch tool.
- Licence gap: the skill repo has no `LICENSE` file, only a README line. The rules themselves are MIT.
- Rule conflicts: it asks for Title Case (Chicago style) on headings and buttons, while Anthropic's design plugin writes sentence-case CTAs. It allows `maximum-scale=1` in the long-form guide as an iOS zoom workaround but lists it as an anti-pattern in the review file.
- It reads source only. Contrast, rendered focus order and real layout problems need a browser-based skill such as AccessLint or Web Quality Skills.

## Reusable ideas

- Keep the skill as a thin loader and the rules in a separate, versioned file, so one repo can serve a website, a slash command and a skill.
- Standardise on `file:line - problem` output so editors make every finding clickable.
- End a rule set with a short "always flag" list of mechanical anti-patterns that are cheap to grep for.
- Put the output format inside the rules file, so every agent that loads the rules reports the same way.

## Related

[UI Skills](ui-skills.md), [ibelick UI Skills](ibelick-ui-skills.md), [User Interface Wiki](user-interface-wiki.md), [Impeccable](impeccable.md), [AccessLint Skills](accesslint-skills.md), [Web Quality Skills](addy-osmani-web-quality-skills.md)
