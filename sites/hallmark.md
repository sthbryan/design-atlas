[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [typography-and-styles](../topics/typography-and-styles.md), [landing-pages](../topics/landing-pages.md), [design-md](../topics/design-md.md)

# Hallmark

- **URL:** https://www.usehallmark.com
- **Type:** agent skill
- **Topics:** agents-and-prompts, typography-and-styles, landing-pages, design-md
- **Pricing / licence:** free. MIT (GitHub `nutlope/hallmark`, about 29k stars at review). Made by Together AI.
- **Reviewed:** 2026-09-25

## What it is

Hallmark is a design skill for Claude Code, Cursor and Codex that tries to stop agents shipping the same generic page. It is a `SKILL.md` (version 1.1.0 at review) with a large `references/` folder. When you ask for a page, it first picks a macrostructure (the order and shape of sections), then a theme, then runs a list of "slop-test" gates before it hands anything back. The README counts 21 themes, 21 macrostructures and 57 gates. Besides the default build it has three verbs: `audit` (a ranked list of problems, no edits), `redesign` (same content and brand, different structure) and `study` (read a screenshot or URL and describe its structure). The site is a demo of about fifteen one-shot example pages and cycles through the themes when you press `T`.

## When to open it

- When you want a landing page or small site whose layout doesn't look templated, not just a new colour scheme.
- When you want a quick audit of an existing page against named AI tells.
- When you admire a site and want its structure described in words, without copying its pixels.

## Most useful

- **Archetype library**: separate reference files for hero, navigation, footer, feature, section-header and testimonial patterns (for example a newspaper-masthead nav, a terminal command bar or a letter-style footer).
- **Six rules that apply to every verb**: a scored self-critique before output, stamped into a CSS comment; no invented metrics or testimonials; every colour and font through named tokens; no hand-drawn fake browser or phone frames; checks at 320, 375, 414 and 768 px; no italic headings.
- **Foundations**: two typefaces minimum, OKLCH palettes with one anchor hue and an accent kept under 5% of the page, a 4-px spacing scale, and exponential ease-out with a reduced-motion alternative.
- **Custom branch**: when the brief names a brand colour or a mood no theme fits, it builds a one-off palette and font pairing instead.

## Using it with agents

Install with `npx skills add nutlope/hallmark`, or copy `SKILL.md` and `references/` into `~/.claude/skills/hallmark/`, `~/.codex/skills/hallmark/`, or `.cursor/rules/hallmark.mdc` (the body without front matter). After that, a normal UI request triggers it; use `hallmark audit <target>` and the other verbs by name. `study` can also write a portable `design.md` of the extracted structure when you ask for it. There is no MCP server and no `llms.txt`.

## Watch out for

- The counts disagree: the site footer says 20 themes, the README and skill say 21.
- The skill deliberately avoids repeating its last three macrostructures. That suits one-off pages; for several pages of one product, tell it to keep a single structure and theme.
- In existing projects the skill is told to edit in place and ask before deleting files. Still review the plan it states before a `redesign`.
- `study` refuses template-marketplace URLs, and writing a `design.md` from a URL requires you to confirm the source is your own or a public reference for your brand.
- The rules are strict (no centred-everything, no italic headings) and may clash with an existing brand guide.

## Reusable ideas

- Decide the page's structure before its styling, and don't reuse the same hero → three features → CTA rhythm on every page.
- Replace missing numbers with a labelled placeholder instead of letting the model invent a statistic.
- Choose a navigation pattern that signals the kind of site (editorial, developer tool, shop) rather than the default logo-links-button bar.
- Stamp the chosen structure and a self-review score into a comment so reviewers can see what the agent intended.

## Related

[Impeccable](impeccable.md), [UI Skills](ui-skills.md), [TypeUI](typeui.md), [getdesign.md](getdesign-md.md), [Scrolltide](scrolltide.md)
