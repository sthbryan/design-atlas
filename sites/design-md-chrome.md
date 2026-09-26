[← Atlas](../README.md) · Topics: [design-md](../topics/design-md.md), [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md)

# TypeUI DESIGN.md Extractor

- **URL:** https://github.com/bergside/design-md-chrome
- **Type:** browser extension (Chrome, Manifest V3) · open-source repo
- **Topics:** design-md, agents-and-prompts, typography-and-styles
- **Pricing / licence:** free. The repo is MIT, with 2,907 stars and 315 forks at review. It's also listed on the Chrome Web Store as "DESIGN.md Style Extractor - TypeUI" (manifest version 0.4.0). No separate terms apply to the generated files: they come from the page you're viewing plus the extension's own MIT template text.
- **Reviewed:** 2026-09-25

## What it is

A Chrome extension from Bergside, the team behind TypeUI, that reads the styles of the tab you have open and writes either a `DESIGN.md` or a `SKILL.md` for an agent (it names Google Stitch, Claude Code, Codex and Cursor). The output follows TypeUI's own DESIGN.md format, which is different from Google's front-matter-plus-sections spec.

## When to open it

- When you're on a site whose look you want to capture and would rather click a button in the browser than run a CLI or pay for a hosted generator.
- When you want a `SKILL.md`-shaped file (agent instructions) instead of a pure token document.
- When you want to read a small, local, dependency-free extraction script before writing your own.

## Most useful

- How it extracts: a content script samples up to 280 visible elements (body, headings, paragraphs, links, buttons, form fields, landmarks, list items, tables, anything with `card` or `btn` in the class name, focusable nodes). It reads `getComputedStyle` for typography, colors, spacing, radius, shadows and transition or animation timing. It also counts components (forms, inputs, tables, code blocks, articles) and gathers site signals. Everything is normalized and written locally. The source we read makes no network calls.
- Output sections: Mission, Brand (name, URL, audience, product surface), Style Foundations (visual style, main font, type scale, palette, spacing scale, radius/shadow/motion tokens), Accessibility (WCAG 2.2 AA, keyboard-first, visible focus, contrast), Writing Tone, Rules: Do, Rules: Don't, Guideline Authoring Workflow, Required Output Structure, Component Rule Expectations and Quality Gates.
- Popup actions: auto-extract, generate DESIGN.md or SKILL.md, refresh for the current page state, download, and an explainer on how the file was built.
- Permissions are limited to `activeTab`, `scripting`, `storage` and `downloads`.

## Using it with agents

Download the file into the project root and reference it from your agent's rules. The SKILL.md option makes it easy to drop into skill-aware agents. TypeUI's curated design skills are linked from the README if you want hand-made versions instead.

## Watch out for

- Only the Style Foundations section comes from the page. Most of the other sections (accessibility, do/don't rules, workflow, quality gates) are fixed template text that's the same for every site, so the file is more of a process scaffold than a measured spec like [DesignMD.cc](designmd-cc.md).
- There's no YAML token block, and it doesn't use Google's section order, so tools built for that spec, or for the nine-section files in [Refero Styles](refero-styles.md) and [OpenDesign](open-design.md), may not parse it.
- It only samples elements that are visible in the page's current state, so run it on several pages (and in dark mode) for a fuller picture.
- MIT covers the extension code, not the brand you extract. Don't lift logos or trademarks.

## Reusable ideas

- Cap sampling at a few hundred visible, semantically chosen elements to keep extraction fast and representative.
- Offer the same extraction in two outputs, a descriptive DESIGN.md and an instructive SKILL.md, depending on how the agent consumes context.
- Build testable quality gates (component states, keyboard behavior, contrast) into the generated file, not just visual tokens.

## Related

[TypeUI](typeui.md), [DesignMD.cc](designmd-cc.md), [Hyperbrowser DESIGNMD](hyperbrowser-design-md.md), [DESIGN.md](designmd.md), [Refero Styles](refero-styles.md)
