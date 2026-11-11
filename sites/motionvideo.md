---
title: MotionVideo
description: Gallery of motion videos made by coding agents, each shown with the prompt that produced it, plus named moves and a free MCP catalogue.
url: https://motionvideo.xyz
type: gallery
formats: prompt gallery · agent skill · MCP server · public API · prompt templates
topics: [motion, agents-and-prompts, inspiration]
verdict: useful
agent: [mcp, llms-txt, skill, api, prompts]
pricing: freemium
licence: gallery, gallery prompts, the MCP catalogue tools and the onboarding skill are free. Pro is US$9 per month, US$79 per year or US$149 once; Business is US$29 per month or US$249 per year for three seats. Pro unlocks every move and template prompt, the Pro skill from a private repository and two extra MCP tools — at review.
licence_class: proprietary-paid
reviewed: 2026-11-11
status: active
related: [60fps, motionsites, motion-primitives, lottiefiles-motion-design]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md), [inspiration](../topics/inspiration.md)


# MotionVideo

## What it is

MotionVideo is a small independent catalogue of motion work that was made by AI coding agents rather than keyframed by hand, and nearly every entry carries the prompt behind it: the public catalog endpoint listed 594 videos at this review, and 591 of them expose their prompt. The gallery is grouped by kind of motion — product UI, kinetic type, charts, diagrams, characters, particles, shapes — and each card shows a preview, the prompt, and a button to run it again with your own agent. The catalogue is dominated by one model, Opus 5.5, with Fable 5.x versions behind it, which the catalog records per entry alongside the stack and the creator's handle. Around the gallery sit four supporting sections: **Moves** (named techniques such as a shape morphing through UI states, each with the copy-ready prompt), **Templates** (prompt structures with fields for concept, palette, length and size), **Creatives** (the designers and studios whose work is credited) and **Skills** (motion skills you install into an agent). The pitch is that agents can already write animation code but lack taste, so the site sells the taste in written form.

## When to open it

- When you need motion for a launch film, a showreel, a feature update or a social cut and you want to write code rather than open After Effects.
- When a landing page needs a short animated moment and you want to see what the prompt-to-result step actually looks like before writing your own.
- When you want to teach a coding agent a vocabulary for timing and choreography instead of asking for "a nice animation".

## Most useful

- **Prompt beside result**: the same discipline as a good pattern gallery — you see the output and the instruction that produced it, so the prompt can be judged rather than guessed at.
- **Moves as a shared vocabulary**: named techniques an agent can be told to use, which is far more useful than adjectives.
- **Templates with fields**: concept, palette, length and size are the four variables that usually need stating, and the template makes you state them.
- **Free MCP catalogue**: searching the gallery from inside an agent needs no plan.
- **A named, countable library**: 120 moves at this review, each with a description and examples, so "use a whip pan that lands on the logo" stops being a guess.

## Using it with agents

This is built agent-first. The site publishes `llms.txt`, a `skill.md` that an agent can read to set itself up, per-page Markdown (the pricing page is `pricing.md`), and a keyless read-only API with an OpenAPI 3.1 document at `/openapi.json`: `GET /api/catalog` returns every gallery video with its prompt, model, stack, effort and media URLs, `GET /api/catalog/directories` returns the tools, skills and creatives lists, and `GET /api/moves` the public part of every move. A free MCP server lets Claude, ChatGPT or Cursor search the gallery and pull prompts. Pro adds the Pro skill, installed from a private GitHub repository, plus the `search-moves` and `get-move-prompt` tools. The documented setup lives at `/docs/mcp` and `/docs/skill`.

## Watch out for

- **The paid part is the prompt library, not the gallery.** Moves and templates are visible, but their full prompts sit behind Pro, so evaluate the free cards before paying.
- **It is a young, one-product site** with its own sale periods (a Black Friday discount was running at this review), so prices move.
- **Prompts produce video-ready motion**, not necessarily UI code: check whether the output you need is a rendered clip or a component.
- **Submitted work is credited but AI-made**, and provenance of the underlying style is worth a look before copying a look closely.
- **Costs stack**: the prompts are one subscription, and the model that renders the video is another.

## Reusable ideas

- Publish the prompt next to the result; a gallery of output alone teaches nothing repeatable.
- Name techniques (a move, a template) so an agent and a designer can refer to the same thing.
- Offer the catalogue to agents for free and charge for the prompts — the search sells the subscription.
- Ship `llms.txt`, a skill file and Markdown twins for every page when the audience is agents.

## Related

[60fps](60fps.md), [MotionSites AI](motionsites.md), [Motion Primitives](motion-primitives.md), [LottieFiles Motion Design Skill](lottiefiles-motion-design.md)
