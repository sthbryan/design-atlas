[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md), [ux-patterns](../topics/ux-patterns.md)

# Impeccable

- **URL:** https://impeccable.style
- **Type:** agent skill · CLI · anti-pattern detector · browser extension
- **Topics:** agents-and-prompts, design-md, ux-patterns
- **Pricing / licence:** free. Apache-2.0 (GitHub `pbakaus/impeccable`, about 71k stars at review; npm `impeccable` 4.1.0). The optional image-generation route bills your own `OPENAI_API_KEY`.
- **Reviewed:** 2026-09-25

## What it is

Impeccable is a design skill for coding agents made by Paul Bakaus. The README says it began from Anthropic's `frontend-design` skill. It installs one main skill (`/impeccable`, or `$impeccable` in Codex) with 24 commands covering the whole design loop: `shape` and `init` before code, `critique` and `audit` to review, focused passes such as `typeset`, `layout`, `colorize`, `animate`, `clarify`, `harden`, `distill`, `bolder` and `quieter`, and `polish` at the end. Around it sit a deterministic detector (a native engine run through `npx`), provider hooks, a Live Mode for picking elements in the browser, and a Chrome DevTools extension. The site lists about ten supported tools, including Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI and OpenCode.

## When to open it

- Before asking an agent for new UI, so it works from a brief and product context instead of its defaults.
- When an existing page "looks AI-made" and you want named problems and a fix list rather than a vague redesign.
- When you want design checks in CI or on every agent edit, without calling a model.

## Most useful

- **Slop catalog**: 67 named patterns (61 detector rules and 6 that need design review) in groups such as typography, colour and contrast, layout, motion, copy and imagery, each with a live example page.
- **Detector**: `npx impeccable detect src/` or a `localhost` URL. `--json` output and exit codes (0 clean, 2 findings, 1 scan failure) make it usable in CI.
- **Design-system checks**: with a `DESIGN.md` present, it flags fonts, colours, type sizes and radii that fall outside the documented system.
- **Context files**: `/impeccable init` writes `PRODUCT.md` (users, purpose, accessibility). `/impeccable document` writes a `DESIGN.md` in the Google Stitch format.
- **Live Mode**: name or click an element, generate variants in the running app, and accept one to write it back to source.

## Using it with agents

Run `npx impeccable install` from the project root (Node.js 22.18+). It detects your tools and installs a matching build, plus native hooks where supported. Alternatives are the Claude Code marketplace (`/plugin marketplace add pbakaus/impeccable`), `npx skills add pbakaus/impeccable`, or a ZIP. Then run `/impeccable init` and `/impeccable hooks on`. The site publishes an `llms.txt` that maps every doc page and command.

## Watch out for

- Hooks only run after you approve them in your coding tool's hook or trust settings.
- It makes a few network calls: a daily version check (`IMPECCABLE_NO_UPDATE_CHECK=1` turns it off), and requests for design directions to the site's API with an optional choice report (`IMPECCABLE_NO_TELEMETRY=1` or `DO_NOT_TRACK=1`). The privacy page says no project content is sent.
- With an OpenAI key, image prompts and any reference images go to OpenAI.
- The rules are opinionated (gradient text, one-font pages, cards inside cards). The site itself treats a finding as a reason to look again, not a verdict. Record deliberate exceptions in `.impeccable/config.json` or with inline ignores.
- The homepage is mostly social-media praise; judge the tool by the docs and the detector lab.

## Reusable ideas

- Keep "who and why" (`PRODUCT.md`) separate from "how it looks" (`DESIGN.md`) so every design command reads both.
- Give recurring AI tells short names (side-tab cards, status-chip soup) so people and agents can talk about them.
- Lint rendered pages for design problems the way you lint code, with exit codes a build can act on.
- Check new UI against the project's own documented tokens, not only against generic rules.

## Related

[Hallmark](hallmark.md), [UI Skills](ui-skills.md), [TypeUI](typeui.md), [DialKit](dialkit.md), [getdesign.md](getdesign-md.md)
