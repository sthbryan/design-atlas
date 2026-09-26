---
title: Design Motion Principles
description: Create or audit UI motion through Emil, Jakub and Jhey lenses; HTML audit report with looping demos.
url: https://github.com/kylezantos/design-motion-principles
type: agent-skill
formats: agent skill
topics: [agent-skills, motion]
verdict: very-useful
agent: [skill]
pricing: free
licence: free. MIT (© 2026 Kyle Zantos). About 1.1k GitHub stars and 10.1k installs on skills.sh at review.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [lottiefiles-motion-design, mblode-agent-skills, ui-skills, impeccable, easing-wizard]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [motion](../topics/motion.md)

# Design Motion Principles

## What it is

Kyle Zantos's motion skill (v2.1.1, May 2026) looks at UI animation through three "lenses" based on published work by Emil Kowalski (restraint and speed), Jakub Krehel (production polish) and Jhey Tompkins (playful CSS experiments). The README says the skill is not written or endorsed by any of the three. `SKILL.md` is a 122-line router with two modes. **Create** builds components with motion. **Audit** reviews motion that already exists. Twelve reference files do the work: one cookbook of recipes, one file per designer, a list of mistakes agents make when writing motion, an audit checklist, an "anti-checklist" of AI-slop motion, accessibility, performance, and the templates for the HTML report. It is about 2,500 lines, plus a 63 KB worked-example report.

## When to open it

- When a project needs motion rules that change with the product: a kids' app and a SaaS dashboard shouldn't get the same timing.
- When you want an agent to point out motion that is *missing* (conditional UI that appears and disappears without a transition) as well as motion that is wrong.
- When you want an audit that someone who doesn't read code can review, with looping demos of each fix.

## Most useful

- **Context-to-lens table**: productivity tools and dashboards lead with Emil. Consumer, mobile, marketing and kids' apps lead with Jakub, with Jhey as the second or selective lens.
- **Frequency gate**: rare actions can be expressive, daily ones subtle and fast, actions repeated hundreds of times a day get none, and keyboard actions never animate.
- **Anti-checklist**: seven named slop patterns, including pulsing indicators, blur on every entrance, hover-scale on everything, stagger on every list and bouncy springs on utility actions. Each has a threshold, such as three or more components or two or more lists in one view, so one deliberate use isn't flagged.
- **Motion-gap search**: grep for `&&` and ternary renders that have no `AnimatePresence` or transition.
- **Recipe values**: enter with opacity, 8px translate and 4px blur on a spring of 0.45s with bounce 0. Exits move a smaller fixed −12px. Press is `scale(0.97)`, entrances never start below `scale(0.9)`, and drawers use `cubic-bezier(0.32, 0.72, 0, 1)`.

## Using it with agents

Install with `npx skills add kylezantos/design-motion-principles`, or copy the skill folder into `~/.claude/skills/` or `~/.cursor/skills/`. Words like "build", "animate" or "make it feel…" start Create mode, and "audit" or "review" start Audit mode. If the request is unclear, it asks. Audit mode first reads `CLAUDE.md`, `package.json` and the existing animations, proposes lens weights, and **stops until you confirm them**. It then writes `motion-audits/<project>-<date>.html` in the repo root and opens it in your browser. Use `--terminal` to get the report inline. Create mode checks its code against the mistakes file before handing it over.

## Watch out for

- **The lenses don't match the originals.** The cookbook's icon swap starts at `scale(0.8)`, but Jakub's own `better-ui` uses 0.25 and says never to use 0.5 or 0.6. The skill gives Jakub's lens 200–500ms, while his skill sets press at 150ms and icon swaps at 300ms.
- **Reduced motion is switched off completely.** The accessibility file sets every duration to 0.01ms. Emil and Jakub both keep gentle fades.
- **Contradictions on easing.** Jhey's table pairs ease-in with exits, which Emil bans. The skill also says "never bare `ease`", while Emil's easing tree uses `ease` for hover and colour changes.
- **It conflicts with LottieFiles' skill.** Lottie's breathing CTA and hover-scale patterns are things this audit flags on sight.
- **The report loads Google Fonts** (Familjen Grotesk, Public Sans, Geist Mono) when opened. It adds an untracked `motion-audits/` folder, and the skill never edits `.gitignore`. Otherwise there is no telemetry.
- Loading the original Emil or Jakub skills at the same time gives you two versions of the same rules that disagree.

## Reusable ideas

- Pick a weighting between named philosophies before applying rules, and say which one decided each value.
- Add a threshold to each slop pattern so a single deliberate use passes.
- Look for UI that changes state without any transition, not only for motion that is badly tuned.
- Show each recommended fix as a looping demo next to the finding.

## Related

[LottieFiles Motion Design Skill](lottiefiles-motion-design.md), [mblode Agent Skills](mblode-agent-skills.md), [UI Skills](ui-skills.md), [Impeccable](impeccable.md), [Easing Wizard](easing-wizard.md)
