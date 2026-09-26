[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md), [inspiration](../topics/inspiration.md)

# Superdesign

- **URL:** https://github.com/superdesigndev/superdesign-skill
- **Type:** agent skill · client for the hosted superdesign.dev canvas (CLI `@superdesign/cli`)
- **Topics:** agents-and-prompts, design-md, inspiration
- **Pricing / licence:** the skill and the CLI are MIT, © 2026 Superdesign (about 600 stars and about 9.8k skills.sh installs at review; plugin 0.6.0, CLI 0.14.0 on npm). Designing needs a superdesign.dev account, and each generation spends that account's credits.
- **Reviewed:** 2026-09-25

## What it is

Superdesign is the agent-side front end of superdesign.dev, a hosted AI design agent with an infinite canvas. The skill does not design by itself. It teaches your coding agent to drive the `superdesign` CLI. The agent reads your codebase, writes a design system file, builds an HTML replica of the current page, and sends that to the canvas. There, Superdesign's models create and branch drafts that you review in the browser. The skill (a 16 KB `SKILL.md` and nine reference files) covers UI pages and flows, slide decks with an approved outline, posters and social graphics, design-system extraction, and image or video assets. You can choose among several AI models and compare them side by side. It is not the old, archived Superdesign VS Code extension.

## When to open it

- When you want to see several visual directions for a real page on a shared canvas before your agent writes the code.
- When you want an agent to pull style references from a prompt library or a live URL into a `design.md`.
- When you want to compare design output from different models on the same brief.

## Most useful

- **Replica-first workflow**: the agent rebuilds the current UI as plain HTML in `.superdesign/replica_html_template/`, without adding anything new, so the remote model designs on top of what really exists.
- **Branch versus replace**: `iterate-design-draft --mode branch` with one short prompt per option to compare. `--mode replace` refines the chosen draft and keeps its version history.
- **Inspiration commands**: `search-prompts` and `get-prompts` query the site's prompt library. `extract-website --url … --design-md` turns a site into a style guide.
- **Logo invariant**: when a design has a logo slot and a brand logo has been uploaded, that exact logo must appear. Initials, emoji and made-up marks are not allowed.
- **Direct edit path**: for exact text or CSS fixes, the agent edits the HTML itself and imports it as a new version, which costs no credits.
- **Credit courtesy**: ask before making more variations, because each one spends the user's credits.

## Using it with agents

Install with `npx skills add superdesigndev/superdesign-skill`, or in Claude Code with `/plugin marketplace add superdesigndev/superdesign-skill` and `/plugin install superdesign@superdesign` (then call `/superdesign:superdesign`). Builds exist for Cursor, Codex and DeepSeek Harness. The agent runs `npx --yes @superdesign/cli@latest` and `superdesign login`. It triggers on requests to design or redesign a page, compare models, set up a design system, or make a deck or graphic. It returns canvas and preview links, and `get-design --output` writes a draft's HTML locally.

## Watch out for

- Your code leaves the machine. `superdesign init` writes full component source into `.superdesign/init/`, and design calls send source files, CSS and Tailwind config as `--context-file` payloads, plus uploaded logos and screenshots, to superdesign.dev.
- It needs a shell, an account and a network connection. It stops in sandboxes without a shell and in headless setups where the login flow cannot run.
- The CLI runs as `@latest` through `npx` on every call, so its behaviour can change between sessions.
- The pricing page did not render without JavaScript at review, so check credit costs in the web app.
- It overlaps with local-only skills (Impeccable, Hallmark) and adds its own `.superdesign/design-system.md` next to any `DESIGN.md` you already keep.

## Reusable ideas

- Give the design model a faithful "before" replica, and keep new ideas out of it.
- Keep reproduction prompts about structure and put style words only in the variation prompts.
- Save context-file fingerprints so an unchanged project resumes without rediscovering the codebase.
- Send cheap, predictable fixes through a direct edit and save model calls for changes that need judgment.

## Related

[Huashu Design](huashu-design.md), [Design Lab](design-lab.md), [Efecto](efecto.md), [OpenDesign](open-design.md), [Impeccable](impeccable.md)
