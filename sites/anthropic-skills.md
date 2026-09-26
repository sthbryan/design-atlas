---
title: Anthropic Skills
description: Anthropic's frontend-design anti-default skill plus canvas-design, theme-factory and brand-guidelines, all Apache-2.0.
url: https://github.com/anthropics/skills
type: agent-skill-collection
formats: agent skill collection · Claude Code plugin marketplace
topics: [agent-skills, typography-and-styles, landing-pages, color]
verdict: very-useful
agent: [skill]
pricing: free
licence: "free. The repo has no root licence file. Each design skill ships its own Apache-2.0 `LICENSE.txt`, and the `canvas-fonts` are under the SIL Open Font Licence. The document skills (docx, pdf, pptx, xlsx) are source-available only and are not covered here. About 178k GitHub stars at review. skills.sh installs: `frontend-design` 923k, `canvas-design` 111k, `brand-guidelines` 96k, `theme-factory` 87k."
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [impeccable, hallmark, ui-skills, ui-ux-pro-max, typeui]
---
[← Atlas](../README.md) · Topics: [agent-skills](../topics/agent-skills.md), [typography-and-styles](../topics/typography-and-styles.md), [landing-pages](../topics/landing-pages.md), [color](../topics/color.md)

# Anthropic Skills

## What it is

This is Anthropic's public repo of example Agent Skills. It holds 19 skills, and the README describes them as for demonstration and education. Four are about visual design. `frontend-design` (71 lines, one file) is the anti-default skill for building or reshaping UI, and [Impeccable](impeccable.md) says it started from it. It was rewritten again on 2026-09-03. `canvas-design` makes posters and art as a PNG or PDF by first writing a "design philosophy". `theme-factory` applies one of ten preset colour-and-font themes to slides, documents or pages. `brand-guidelines` applies Anthropic's own brand colours and fonts. The last three have not changed in substance since at least April 2026.

## When to open it

- Before any UI build, as a short and well-calibrated brief against templated output.
- When you need a one-off poster, cover or art piece rather than an interface.
- When you want a quick, consistent colour and font set for a deck or report without designing one.

## Most useful

- **`frontend-design` tells list**: five named clusters of AI defaults with values, for example warm cream near `#F4F1EA` with a serif and a terracotta accent near `#D97757`, near-black with one acid accent, and the SaaS card kit with one radius and the same soft grey shadow on every card. It also bans accenting one word in a headline and all-caps labels, and flags scattered fade-up entrances. The brief always wins over the list.
- **Two-pass plan**: before coding, write 4–6 named hex colours, typefaces with roles, and a layout concept in one sentence plus ASCII wireframes. Then check whether a similar prompt would land in the same place, and revise if so. Other rules: line length under 80 characters, spend boldness in one place, and remove one accessory before finishing.
- **UX copy rules**: write from the user's side, name a button by its result, keep one name for an action from button to toast, and never apologise in errors.
- **`canvas-design`**: name a movement, write a 4–6 paragraph philosophy as a `.md` file, express it at 90% visuals and 10% text, and nothing may overlap or leave the canvas. A final pass refines what is there instead of adding more. It bundles 54 OFL fonts.
- **`theme-factory`**: shows `theme-showcase.pdf`, waits for an explicit choice, then applies four hex colours and a header and body font. It can also generate a new theme and show it for review.

## Using it with agents

In Claude Code, run `/plugin marketplace add anthropics/skills` and then `/plugin install example-skills@anthropic-agent-skills`. That plugin installs all twelve example skills, including these four. For one skill, use `npx skills add anthropics/skills --skill frontend-design` or copy the folder. On claude.ai the example skills are already available on paid plans, and the API can load them too. The descriptions do the triggering: building or restyling UI (`frontend-design`), a poster or static piece (`canvas-design`), theming an artifact (`theme-factory`), or Anthropic brand work (`brand-guidelines`). They produce code, `.md` + `.pdf`/`.png` files, or restyled artifacts. None of them writes a DESIGN.md or token file.

## Watch out for

- `brand-guidelines` is Anthropic's own identity (`#141413`, `#faf9f5`, accent `#d97757`, Poppins and Lora), not a neutral template. Using it on your product is exactly the cream-and-terracotta look `frontend-design` warns about, and it is someone else's brand.
- `canvas-design` tells the agent to download extra fonts as needed, so check their licences. Its prompt also repeats "masterpiece" framing heavily, which can make results overwrought.
- `theme-factory` themes use system fonts (DejaVu, FreeSans and FreeSerif). They are safe for documents and plain on the web.
- `frontend-design` gives no numbers for spacing, type ratio or motion timing, and its ban list will age as models learn to avoid it.
- Third-party skills copy these files: UI UX Pro Max's `ui-styling` ships the same 54 fonts and an Apache-2.0 licence file. If you reuse any of this text, Apache-2.0 asks for attribution and a note of your changes.

## Reusable ideas

- Keep a dated list of the defaults you reject, with concrete values, and always let the brief override it.
- Plan tokens and a wireframe first, then test whether the plan is just a default before writing code.
- For art pieces, write the idea down as a short manifesto before drawing, then refine instead of adding.
- Ask the user to pick from a visual showcase before applying a theme, rather than choosing silently.

## Related

[Impeccable](impeccable.md), [Hallmark](hallmark.md), [UI Skills](ui-skills.md), [UI UX Pro Max](ui-ux-pro-max.md), [TypeUI](typeui.md)
