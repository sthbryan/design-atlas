---
title: Stop Slop
description: Small prose skill listing AI phrases and sentence shapes to cut, with a 50-point score.
url: https://github.com/hardikpandya/stop-slop
type: agent-skill
formats: agent skill
topics: [agents-and-prompts, documentation]
verdict: useful
agent: [skill]
pricing: free
licence: free. MIT (© 2025 Hardik Pandya; about 17.6k stars at review, last push 2026-03-17).
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [no-ai-slop, antislop-ui, taste-skill, ui-skills]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [documentation](../topics/documentation.md)

# Stop Slop

## What it is

Stop Slop is Hardik Pandya's small skill for removing AI tells from prose. It is the copy-side companion to the UI anti-slop skills in this atlas: it doesn't touch layout or code, only sentences. The whole thing is about 12 KB: a 2.6 KB `SKILL.md` with eight core rules, a pre-delivery checklist and a scoring table, plus three reference files that load when needed: `phrases.md` (openers, crutches, jargon, adverbs, meta-commentary), `structures.md` (the sentence shapes to avoid) and `examples.md` (five before-and-after rewrites). skills.sh counted about 15.5k installs at review.

## When to open it

- When landing-page copy, docs, release notes or a README written by an agent reads like every other AI draft.
- When you want a fixed list of phrases and sentence shapes to scan for before publishing.
- As a system-prompt add-on for API calls that generate prose.

## Most useful

- **Structures list**: binary contrasts ("It's not this. It's that."), negative listing ("Not a X... Not a Y... A Z."), dramatic fragments, rhetorical setups ("Think about it:"), and "false agency", where an inanimate thing does a human verb ("the decision emerges"). Each comes with the plain alternative.
- **Phrase lists**: throat-clearing openers ("Here's the thing"), emphasis crutches ("Let that sink in"), meta-commentary ("Let me walk you through"), vague declaratives ("The stakes are high"), and a jargon table with plain replacements (navigate → handle, deep dive → analysis).
- **Quick checks**: twelve yes/no questions to run before delivery, such as three sentences of the same length in a row, a punchy one-liner closing every paragraph, or any em dash.
- **Scoring**: rate directness, rhythm, trust, authenticity and density from 1 to 10 each, and revise anything below 35 out of 50.

## Using it with agents

Install with `npx skills add hardikpandya/stop-slop`, or copy the folder into your skills directory. The README also suggests uploading the files to a Claude Project or pasting `SKILL.md` into a system prompt, with the reference files loaded on demand. It triggers when drafting, editing or reviewing prose and returns the revised text, checked against the list and scored. There are no scripts, network calls or telemetry.

## Watch out for

- Several rules are absolute and will flatten some writing: cut all adverbs, no passive voice, no sentences starting with a Wh- word, two-item lists instead of three, and no "every", "always" or "never". Technical docs, legal text and UI microcopy often need passive voice or a list of three.
- Its own examples break its rules: one "after" rewrite uses an em dash and another keeps a "not X" contrast.
- It hasn't changed since March 2026.
- It conflicts with No AI Slop, which keeps adverbs and hedges that carry the writer's voice and allows one or two em dashes in long drafts. Choose one per project. The zero-em-dash rule agrees with Taste Skill and antislop.

## Reusable ideas

- Give each prose tell a short name and a plain fix, the same way UI skills name visual tells.
- Replace "don't be vague" with a list of the vague sentences themselves.
- Ask who is doing the action whenever a sentence gives an object a human verb.
- Score a draft on a few named dimensions and set a threshold that forces a revision.

## Related

[No AI Slop](no-ai-slop.md), [antislop-ui](antislop-ui.md), [Taste Skill](taste-skill.md), [UI Skills](ui-skills.md)
