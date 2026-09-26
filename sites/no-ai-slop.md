[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [documentation](../topics/documentation.md)

# No AI Slop

- **URL:** https://github.com/petergyang/no-ai-slop
- **Type:** agent skill
- **Topics:** agents-and-prompts, documentation
- **Pricing / licence:** free. MIT (© 2026 Peter Yang; about 11.3k stars at review, last push 2026-09-02, plugin version 1.0.6). The README also promotes the author's paid courses and newsletter.
- **Reviewed:** 2026-09-25

## What it is

No AI Slop is Peter Yang's editing skill for prose. It removes AI writing patterns while keeping the writer's own voice, which is the difference from stricter rule lists. The skill is one 10.9 KB `SKILL.md` plus a 3.2 KB `eval.md` of pass/fail checks the agent runs on its own edit. It does two jobs: **edit** (the default), which makes the smallest edit that fixes the draft and returns it with a "What changed" note, and **detect**, which names each pattern it finds, quotes the line and suggests a fix without rewriting. Detect mode deliberately won't score the text or guess whether AI wrote it. The repo also packages it as a ChatGPT and Codex plugin. skills.sh counted about 14.6k installs at review.

## When to open it

- When you want a draft cleaned up without turning it into polished, anonymous copy.
- When someone asks "does this read as AI?" and you want quoted evidence instead of a detector's guess.
- For UI and marketing copy, where the short-copy rules apply (no em dashes at all).

## Most useful

- **Voice first**: before editing, note the writer's vocabulary, cadence, bluntness, humour, uncertainty and digressions, and keep them. Hedges like "I think" stay when they are real.
- **Named patterns**: binary contrasts, faux-insight setups ("what nobody tells you"), colon reveals ("The best part: it learns."), trailing "-ing" analysis ("highlighting the team's commitment"), importance puffery, weasel attribution ("studies show"), synonym cycling, fake-profound closing lines and recap endings, and formatting slop such as emoji headings and decorative bold.
- **Portability test**: if a sentence could move unchanged to another company or product, it is filler; cut it or make it specific.
- **Banned words**: a short list including delve, leverage, utilize, robust, tapestry, paramount and supercharge. Often-empty adverbs are cut only when they add nothing.
- **Self-check**: `eval.md` asks 26 pass/fail questions after the edit, ending with whether the writer would still recognise the draft as their own.

## Using it with agents

Install with `npx skills add petergyang/no-ai-slop --skill no-ai-slop --global --yes`, or ask your agent to install it from the GitHub URL. Call it with `/no-ai-slop` and your text to edit, or `/no-ai-slop is this slop?` to detect. It also triggers when you ask for a clearer, more direct or less AI-sounding draft. If there is no draft it asks for one, and if the audience is unclear it asks one question about who the text is for and where it will be published. It never invents claims, stats or sources; it asks instead. `PRIVACY.md` states there is no server, account or data collection, and the skill makes no network calls.

## Watch out for

- The README advertises a satire mode ("draft an AI slop post"), but `SKILL.md` doesn't define it.
- It is prose-only. Pair it with a UI skill for interface work.
- It disagrees with Stop Slop on purpose: adverbs and hedges can stay, and long drafts may keep one or two em dashes. Taste Skill and antislop ban em dashes outright. Pick one policy per project.
- Minimum-edit means a weak draft may stay weak; it fixes patterns, not arguments.

## Reusable ideas

- Offer a detect-only mode that quotes each pattern and never guesses authorship.
- Record what to preserve before deciding what to cut.
- Use the portability test for generic lines in copy and in UI text.
- Ship a separate pass/fail eval file the agent runs on its own output before returning it.

## Related

[Stop Slop](stop-slop.md), [antislop-ui](antislop-ui.md), [Taste Skill](taste-skill.md), [UI Skills](ui-skills.md)
