---
title: Ansphare
description: Free gallery that pairs a design with its prompt, its DESIGN.md or a skill file you can drop into Claude or Cursor.
url: https://ansphare.com
type: prompt-library
formats: prompt gallery · brand DESIGN.md library · Claude and Cursor skills · CLI that writes a skill file
topics: [design-md, agents-and-prompts, inspiration, motion]
verdict: useful
agent: [cli, skill, prompts]
pricing: freemium
licence: free to browse and copy; premium skills and the full design-system library are paid subscriptions billed through Polar. The terms keep all rights over the prompts, videos and design resources and forbid reproducing, distributing or creating derivatives, so treat the prompts as references to read and adapt, never as text to republish.
licence_class: proprietary-paid
reviewed: 2026-11-11
status: active
related: [designmd-supply, designmd-store, lovable-prompts, vibeprompts, onepromptdesign]
---
[← Atlas](../site/home.md) · Topics: [design-md](../topics/design-md.md), [agents-and-prompts](../topics/agents-and-prompts.md), [inspiration](../topics/inspiration.md), [motion](../topics/motion.md)


# Ansphare

## What it is

Ansphare is a free gallery of designs where every card carries the thing you need to rebuild it. The site states 1,200+ prompts, 300+ DESIGN.md files and 120+ skills at this review. A card offers a copyable prompt (kinetic type, particle effects, SVG animation, animated charts, phone mockups, logo animation, 3D scenes) or, for the design-system side, a DESIGN.md. The design systems are written for named brands — Apple, BMW, Tesla, Spotify, Stripe, Notion, GitHub, Airbnb, Uber among them — and each lists that brand's tokens and components. There is also a generator: paste any URL and it reads the site's HTML and CSS to produce a DESIGN.md of colours, type, spacing, radii and components. Ansphare, Inc. runs it and shows a release counter (V39) in the header.

## When to open it

- When you want to see the design and its prompt together, rather than reverse-engineering a screenshot into a description.
- When you need a DESIGN.md quickly — either one of the brand studies to learn the structure, or a generated file for a site you are matching.
- When the thing you are building is motion-first: several of the prompt families are AI-video and UI-animation briefs rather than static page layouts.

## Most useful

- **One-click pairing**: a design card gives you the prompt or the DESIGN.md, so there is no guessing which of a gallery's hundred cards matches the file you downloaded.
- **Category filters** across illustration, 3D, web, motion, branding, print, product and onboarding.
- **Brand design systems** as worked examples of the format: eight or so tokens, a component list, and a written tone that reads like a style guide rather than a mood board.
- **URL to DESIGN.md**: the fastest way to get a starting file out of a site you like and then edit it by hand.
- **CLI skill files**: the most unusual part, covered below.

## Using it with agents

The CLI generates a skill file for a component rather than code:

```bash
npx @ansphare/cli@latest add hero-section --creator="Ansphare"
```

That writes `hero-section-skill.md`, which bundles the video URL on the CDN, pre-configured FFmpeg commands for analysing that video, the prompt, the creator's metadata and category, and the shadcn install command for the matching component. You paste it into Claude, Cursor, ChatGPT or Gemini and let the agent produce the code. Skills can also be downloaded from the site for installation in Claude and Cursor directly. There is no `llms.txt`, no MCP endpoint and no API documentation at this review (`/mcp`, `/api` and `/llms.txt` all return the site's 404 page), so an agent without the CLI file has to read the pages like a person.

## Watch out for

- **Rights**: the terms keep all rights over the prompts and design resources and prohibit reproduction, distribution and derivatives. Copying a prompt into a project is the intended use; publishing or reselling collections of them is not.
- **Paid sides**: the tool is free, but premium skills and the full design-system library are subscriptions, processed by Polar, and the terms say sales are final except under the refund policy.
- **Prompts are not specs**: they describe a look in prose. Expect to iterate, and check the result rather than trusting the wording.
- **Generated DESIGN.md files** come from parsing HTML and CSS, so they can pick up a build tool's artifacts or miss states the page never showed.
- **Share of the catalogue is AI-video oriented**, which is useful for motion work and noise for a static interface.

## Reusable ideas

- Ship the design, the prompt and the file next to each other so a gallery entry is directly actionable.
- Generate a DESIGN.md from a URL, then edit it — a fast first draft beats a blank page.
- Package the context an agent needs (source video, FFmpeg steps, prompt, install command) into one file instead of a chat message.
- Keep a visible release counter when the catalogue changes weekly; it tells users the library is alive.

## Related

[designmd.supply](designmd-supply.md), [Design.md Store](designmd-store.md), [Lovable Prompts](lovable-prompts.md), [VibePrompts](vibeprompts.md), [OnePromptDesign](onepromptdesign.md)
