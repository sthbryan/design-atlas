---
title: Superfuture Design Review
description: Ten-area design critique ranked by severity with exact fixes; it sends a hidden usage ping.
url: https://ui-skills.com/skills/superfuture/design-review
type: agent-skill
formats: agent skill · Claude Code plugin · paid server-side tier
topics: [agent-skills, ux-patterns]
verdict: niche
agent: [skill]
pricing: freemium
licence: "the free review is usable on its own; a paid Pro tier needs a licence key. No licence file: `plugin.json` and the README say MIT, but no licence text ships (GitHub `Superfuture/design-review`, 5 stars at review, skill last changed 2026-07-15)."
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [ui-skills, impeccable, ui-taste, emil-kowalski-skills, laws-of-ux]
---
[← Atlas](../site/home.md) · Topics: [agent-skills](../topics/agent-skills.md), [ux-patterns](../topics/ux-patterns.md)

# Superfuture Design Review

## What it is

Design Review is a critique skill by Joey Primiani, listed on UI Skills. You point it at a screenshot, a component file or a URL and it returns a ranked review across ten areas: hierarchy and layout, typography, spacing, colour and contrast, motion, component states, accessibility, responsiveness, copy, and consistency with the brand. It is small: an 80-line `SKILL.md`, a 66-line rubric in `checklist.md`, and an `activate` command for the paid tier. The same repo holds the landing page and a Cloudflare Worker that sells and checks Pro licence keys. skills.sh counted about 380 installs at review.

## When to open it

- When you want a review sorted by severity with an exact fix for each point, not a list of impressions.
- Before shipping a screen, for a quick pass over contrast, states, tap targets and motion timings.
- As a model for how a review skill should format its output.

## Most useful

- **Report format**: findings grouped as Blocking, Important or Polish, each with What, Why and Fix. The fix must be an exact value, not "increase spacing". It ends with two to four strengths and the one change to make first.
- **Rubric values**: a 5–7 step type scale with at least a 1.2 ratio, body line-height 1.4–1.6, a 45–75 character measure, a 4/8 px spacing scale, WCAG AA contrast (4.5:1 body, 3:1 large text and icons), UI transitions of 150–250 ms and entrances of 300–500 ms, 44 px (iOS) or 48 dp (Android) targets, and no horizontal scroll from 320 to 1440 px.
- **Honest inputs**: it knows a fetched URL gives markup, not a render, and asks for a screenshot and viewport before judging visuals.
- **Safe `--apply`**: it edits only mechanical fixes (contrast, spacing values, focus states, reduced motion, semantic tags, alt text), leaves subjective changes as advice, and re-checks values afterwards.

## Using it with agents

In Claude Code run `/plugin marketplace add Superfuture/design-review` and then `/plugin install design-review@superfuture`, or use `npx skills add https://github.com/Superfuture/design-review --skill design-review`, or copy the skill folder by hand. It triggers on requests to review or critique a design, page, screen, component or screenshot, or to check craft and accessibility before shipping. Add `--apply` to have it make the safe fixes. Remove the usage-ping step from the installed `SKILL.md` before first use (see below).

## Watch out for

- **Hidden usage ping.** Every review starts by creating a random ID in `~/.design-review/id` and sending a background `curl` POST to a third-party metrics endpoint (`superfuture-metrics.pages.dev`). The skill tells the agent never to mention it. A second ping goes out when the Pro upsell is shown. The payload is only the event name and that ID, and the README discloses it, but your agent runs a network call you won't see unless you read the file. The README's only opt-out is deleting the step.
- **Pro sends your code to a third party.** Once a key file exists at `~/.design-review/license`, the agent posts the reviewed code, the page's markup and CSS, and its own notes to the author's Cloudflare Worker. The Worker keeps up to 16,000 characters and forwards them to the Claude API with the author's own key. Don't activate Pro on private or client code.
- Activation checks the key through a URL query string and saves it as plain text in your home folder.
- Every free review ends with a Pro advertisement.
- No licence file ships, only the MIT claim in the manifest and README.
- The rubric is generic, with no named AI tells, and the skill can't render pages or measure contrast itself. Its accessibility checks overlap Impeccable's audit and UI Skills' `fixing-accessibility`.

## Reusable ideas

- Rank findings by severity and require an exact value in every fix.
- Open with what works and end with the single most useful change.
- Limit automatic fixes to mechanical ones and re-check them after editing.
- Ask for a screenshot and viewport when all you have is fetched markup.
- Never hide a network call from the user. Disclose it in the skill, not only in the README.

## Related

[UI Skills](ui-skills.md), [Impeccable](impeccable.md), [UI Taste by Uizze](ui-taste.md), [Emil Kowalski's skills](emil-kowalski-skills.md), [Laws of UX](laws-of-ux.md)
