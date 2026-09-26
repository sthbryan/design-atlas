[← Atlas](../README.md) · Topics: [ux-patterns](../topics/ux-patterns.md), [motion](../topics/motion.md), [inspiration](../topics/inspiration.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Detail (detail.design)

- **URL:** https://detail.design
- **Type:** inspiration gallery · agent skill · Figma plugin
- **Topics:** ux-patterns, motion, inspiration, agents-and-prompts
- **Pricing / licence:** Free to read. The paid Craft Manual costs $199, and sponsors fund the site. The terms let you read, quote, link to and teach from the writing, but not republish whole pieces or scrape it. The captured interfaces belong to their makers. The agent skill's README says MIT, but the repo has no LICENSE file
- **Reviewed:** 2026-09-25

## What it is

Detail is a curated archive of small interface decisions that make software feel considered: a label that focuses its input, a placeholder built from the name you just typed, a shortcut hint that appears while you hold a modifier key. Rene Wang, a design engineer who previously worked at ByteDance (Lark, TikTok) and LobeHub, started it in 2025 and runs it as a personal project. Each entry is a short screen recording with a one-line takeaway. The sitemap listed about 130 entries at review time, and there is a Chinese edition. It is built with Next.js.

## When to open it

When a screen works but feels mechanical and you want concrete fixes that go beyond animation: smarter line breaks, platform-correct wording, clearer back behaviour, accessible focus handling. It is also a good checklist to run before a polish pass or a design review.

## Most useful

- **Six categories** (Design, Interactivity, Motion, Copywriting, Accessibility, Easter Egg), which cover much more than motion alone
- **Strict curation rule**: according to the about page, something that is required for the product to work doesn't count as a detail
- **Resources page** with essays, people to follow and a list of agent skills for UI polish. It is reshuffled monthly
- **Figma plugin** for browsing the archive inside Figma
- **Craft Manual**, a paid companion with essays on foundations, making and packaging, plus a private Discord

## Using it with agents

There is no `llms.txt` or MCP, but the site publishes an agent skill at `detaildotdesign/skill` on GitHub, installed with `npx skills add detaildotdesign/skill`. According to its README, it turns 120+ curated examples into rules in chapters such as typography, motion, accessibility, copywriting, interactivity and easter eggs. You can then ask an agent to review a project for missing details or to polish a set of components.

## Watch out for

- Most entries are videos with a single sentence of explanation and no code, so you still have to work out how to build each one
- The skill's licence rests on a README line, not a LICENSE file
- It is run by one person with no uptime promise, and member-only "manual" pages are hidden from crawlers
- Some entries have a tech breakdown, but it usually links out to a post on X

## Reusable ideas

- Pre-fill or shape a field's hint from what the user already typed elsewhere in the form
- Reveal keyboard shortcuts in context while a modifier key is held, instead of only on a help page
- Merge password and magic-link sign-in into one field that adapts to the input
- Use the wording the host platform uses for common actions, not your own synonyms
- Test layouts against long translated strings and break words sensibly

## Related

[Design Spells](design-spells.md), [60fps](60fps.md), [Recent](recent-design.md), [Devouring Details](devouring-details.md)
