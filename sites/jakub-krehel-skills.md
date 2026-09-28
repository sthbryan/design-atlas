---
title: Jakub Krehel's skills
description: Eleven modular skills that review with evidence and polish UI, typography, colour, layout, accessibility and copy.
url: https://github.com/jakubkrehel/skills
type: agent-skill-collection
formats: agent skill suite · Claude Code plugin
topics: [agent-skills, ux-patterns, typography-and-styles, color]
verdict: very-useful
agent: [skill]
pricing: free
licence: free. MIT (© 2026 Jakub Krehel, repo-root `LICENSE`; about 7.2k stars at review, last change 2026-08-29). The Claude Code plugin is called `interfaces` (version 1.6.3 at review).
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [emil-kowalski-skills, ui-skills, impeccable, hallmark, oklch]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [ux-patterns](../topics/ux-patterns.md), [typography-and-styles](../topics/typography-and-styles.md), [color](../topics/color.md)

# Jakub Krehel's skills

## What it is

A suite of 11 skills from Jakub Krehel, who writes jakub.kr and the design engineering magazine Interfaces (interfaces.dev). It splits rules from procedures. Six domain skills hold the rules: `better-ui` (surfaces, icons and motion polish), `better-typography`, `better-colors` (palettes, semantic tokens, OKLCH, contrast), `better-layout`, `better-accessibility` and `better-writing` (product copy). Five procedure skills own no rules of their own. `better-interface` runs all six domain skills as one review. `interface-review` reviews only a change. `break` renders one component in every state on a temporary page to find where it fails. `variant` builds a few genuinely different versions inside the real page. `explain-interface` works out how someone else's UI was built. Each skill is a short `SKILL.md` with reference files beside it (`better-ui` has six) and an `agents/openai.yaml` for Codex. A repo-level `AGENTS.md` says which skill owns each rule and how skills in the repo are written.

## When to open it

- When you want a design review that reports failures it can prove, ranked by severity, instead of taste opinions.
- For final polish on UI that already works: nested radii, icon alignment, shadows versus borders, icon swaps, press feedback.
- When you are setting up a colour system, a type scale or consistent product copy and want checkable rules.
- As a model for writing your own skills: small, single-owner, cross-referenced by name.

## Most useful

- **`better-interface`**: at most 15 findings, each with `file:line` and the current code. HIGH, MEDIUM and LOW severities, plus 13 triggers that are always HIGH (a control with no accessible name, no visible focus, colour as the only signal, clipping at 320 px or 200% zoom, and more). A cheapest-fix ladder: delete, use the platform, reuse a token, correct the value, and only then add. A coverage table marks skipped domains `Not reviewed`. The verdict is Block or Approve.
- **`better-ui` values**: outer radius equals inner radius plus padding; 2 px less padding on the icon side of a button; a three-layer ring-and-lift shadow in light mode and a single white ring in dark mode; image outlines in pure black or white at 10%; press at `scale(0.96)`; icon swaps using scale from 0.25, opacity and a 4 px blur; icon stroke that follows the weight of nearby text.
- **`interface-review`**: tags each finding Introduced, Regression or Pre-existing, reads the removed lines as well as the added ones, and keeps old problems out of the verdict.
- **`break`** and **`variant`**: throwaway harness pages. `break` lists what survived and what broke, and names the skill that owns each fix.
- **`AGENTS.md`**: a rule-ownership table and writing conventions (one rule stated once, headings that make the point, short sentences).

## Using it with agents

`npx skills add jakubkrehel/skills` installs all eleven. On skills.sh the repo showed about 190k installs at review, with `better-ui` the most installed at about 27k. In Claude Code, run `/plugin marketplace add jakubkrehel/skills`, then `/plugin install interfaces@interfaces`. OpenCode finds the skills through the repo's `opencode.json`. The domain skills and `better-interface` can load from their descriptions; `interface-review`, `explain-interface`, `break` and `variant` run only when you call them. Each skill is also listed on ui-skills.com with its own `llms.txt`. The review skills report without editing code unless you ask for fixes.

## Watch out for

- `better-interface` depends on all six domain skills. Any that are missing show as `Not reviewed`, so install the whole suite rather than one skill.
- Used together with Emil Kowalski's collection, the values clash: press scale is exactly 0.96 with bounce 0 here, against 0.97 (range 0.95–0.98) with some spring bounce there. A dashboard built with both shipped both press scales. Choose one per project.
- `better-ui`'s description still mentions hit areas, which have moved to `better-accessibility`.
- Two older standalone repos, `make-interfaces-feel-better` and `oklch-skill`, still exist and appear on ui-skills.com next to the suite. skills.sh also still lists retired names such as `great-interfaces` and `oklch-colors`. They overlap with `better-ui` and `better-colors`, so install one or the other, not both.
- It polishes and checks. It doesn't choose a visual direction (palette, typeface, composition) for a new product, and nothing in it checks that displayed numbers add up.
- Some recipes are written for Tailwind or Motion. The skills tell the agent to express fixes in the project's existing styling system, so check that it did.

## Reusable ideas

- Separate procedure skills from rule skills, and give every rule exactly one owning skill.
- Keep a short list of failures that are always high severity, whatever the style guide says.
- Prefer the cheapest fix: remove something before adding something.
- Report coverage honestly with `Not reviewed` and `Not verified` instead of implying approval.
- State values exactly (0.96, not "about 0.95") so agents don't drift back to their defaults.

## Related

[Emil Kowalski's skills](emil-kowalski-skills.md), [UI Skills](ui-skills.md), [Impeccable](impeccable.md), [Hallmark](hallmark.md), [OKLCH](oklch.md)
