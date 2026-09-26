[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [motion](../topics/motion.md), [typography-and-styles](../topics/typography-and-styles.md)

# Huashu Design

- **URL:** https://github.com/alchaincyf/huashu-design
- **Type:** agent skill · HTML prototyping, slides and motion toolkit
- **Topics:** agents-and-prompts, motion, typography-and-styles
- **Pricing / licence:** free. MIT, © 2026 alchaincyf (Huashu), relicensed from a personal-use licence on 2026-05-14. About 24.5k stars and about 47k skills.sh installs at review. Last push 2026-09-22.
- **Reviewed:** 2026-09-25

## What it is

Huashu Design is a large, Chinese-language skill that treats HTML as a design medium, not a way to ship a web app. It makes clickable app prototypes inside a device frame, 1920×1080 HTML slide decks with editable PPTX export, timeline animations exported to MP4 and GIF with background music, infographics, and a scored design critique. The agent prompts (`SKILL.md` at about 580 lines and 33 reference files) are in Chinese. There is an English README, and the author says the agent handles English tasks. The repo is heavy, at about 33 MB of files: React starter components (iPhone, Android, macOS and browser frames, a deck engine, an animation stage), 24 prebuilt showcase samples, 37 sound effects, six music beds and about 20 export and verification scripts. The README says the brand-asset idea came from Claude Design's system prompts.

## When to open it

- When you want a clickable prototype, a deck or a short launch-style animation as a file, not code for a production app.
- When the output has to feature a real brand and should use that brand's real logo and product shots, not a drawn stand-in.
- When you want to see how a skill can make the agent stop and wait for the user to choose.

## Most useful

- **Three-direction gate**: every new visual design starts with three different first drafts (real HTML and screenshots) for the user to choose from, even when a style or brand is named. The turn ends until the user picks.
- **Fact check first**: when the brief names a product or event, the first step is a web search, and the results are written to `product-facts.md`.
- **Brand asset protocol**: ask, search official press and brand pages, download, verify, then save logo, product-image and UI-screenshot paths plus colours to `brand-spec.md`.
- **Gate files**: `brand-spec.md`, `direction-approved.md` and a storyboard must exist before the next stage. An optional hook blocks renders of 45 seconds or longer until the approval file exists.
- **Anti-slop table**: bans purple gradients, emoji icons, rounded cards with a coloured left border, SVG-drawn people, CSS silhouettes in place of product photos, and Inter or Roboto as a display face, each with the one case where it is allowed.
- **Five-part critique**: scores philosophy, hierarchy, execution, function and innovation from 0 to 10, then lists what to keep, what to fix and the quick wins.

## Using it with agents

Install with `npx skills add alchaincyf/huashu-design` (skills CLI 1.5.19 or later, because older versions copied only `SKILL.md`), or `git clone` it into your skills folder. It triggers on requests for prototypes, PPTs or slides, animations, MP4 or GIF export, reviews or "make it look good". It produces HTML files in the project, plus MP4, GIF, PDF or PPTX through Playwright, ffmpeg and `pptxgenjs`. A reduced mode for weaker agents (no subagents, small context) swaps the parallel drafts for sequential ones and reads fewer references.

## Watch out for

- Animation exports carry a "Created by Huashu-Design" watermark by default. Ask for it to be removed.
- A silent check runs `git ls-remote` against the repo about once every 30 days.
- The optional cloud scripts send your video or narration text to ByteDance APIs (Volcengine Ark, Doubao TTS) with your own keys, behind a `--yes` consent flag. `SECURITY.md` lists every host it contacts.
- It downloads third-party logos and product shots from brand sites. Check trademark use before publishing.
- In September 2026 the author replaced an `html2pptx.js` based on Anthropic's pptx skill with a clean-room rewrite. Use a current copy.
- The three-drafts rule clashes with "just build it" workflows and with skills that expect a single pass.

## Reusable ideas

- Turn checkpoints into files that must exist, so any model or hook can check that a step really happened.
- Search before stating facts about recent products, and save the results for the rest of the session.
- Give every banned pattern the single condition under which it becomes acceptable.
- Define a reduced mode for smaller agents that cuts variety but keeps the quality floor.

## Related

[Hallmark](hallmark.md), [Impeccable](impeccable.md), [OpenMotion](openmotion.md), [Superdesign](superdesign-skill.md), [visualize (display.dev)](visualize.md)
