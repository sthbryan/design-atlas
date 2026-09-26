[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [components](../topics/components.md)

# Screenshot to Code

- **URL:** https://screenshottocode.com
- **Type:** tool (screenshot/video → code) · open-source app with a hosted version
- **Topics:** agents-and-prompts, components
- **Pricing / licence:** the source is MIT at `abi/screenshot-to-code` (about 79.7k stars on GitHub at review) and free to self-host with your own model keys. The hosted app, run by WhimsyWorks, Inc., gives one free generation and then uses credit plans: Hobby $15/month (100 credits) and Pro $40/month (500 credits), with yearly options. The hosted terms let you use Output for personal or commercial purposes but make no promise that it's original or non-infringing, and they require you to hold the rights to any screenshot you upload.
- **Reviewed:** 2026-09-25

## What it is

A tool that turns a screenshot, mockup, exported design frame or screen recording into front-end code with a vision-capable model. It also works from a plain-text description. You choose the stack (HTML + Tailwind, HTML + CSS, React + Tailwind, Vue + Tailwind, Bootstrap, Ionic + Tailwind), watch the code build up, and refine it with follow-up prompts. It's one of the best-known open-source projects in this space.

## When to open it

- When you have a picture of a UI (your own mockup, a whiteboard shot, a legacy screen) and want a first-pass implementation to edit, not a blank file.
- When you want to prototype an interaction from a screen recording rather than describing it.
- When you want to self-host a screenshot-to-code pipeline and compare several models' output side by side.

## Most useful

- Screen-recording mode for multi-step flows and hover or transition behavior (Gemini is needed for video when self-hosting).
- Several variants per generation when more than one provider key is configured.
- An optional screenshot-preview tool that renders the generated page in headless Chromium so the model can check its own result.
- Asset handling: Gemini reuses real logos and images from the input, and Replicate handles image generation, background removal and edits.

## Using it with agents

There's no MCP server, CLI or DESIGN.md output. It's a standalone generator. The practical route is to generate a section here, paste the code into your repo, then have your coding agent refactor it against your own components and DESIGN.md tokens. Self-hosting is a React/Vite frontend plus a FastAPI backend and needs at least one OpenAI, Anthropic or Gemini key (Docker is also supported).

## Watch out for

- Screenshots of other people's sites are their work. The terms put the rights question on you, and the output can closely mirror the source, so use it on your own designs or as a learning aid.
- Output is written for the stack you pick, not your project's existing components and tokens, so expect to restructure it.
- Figma links can't be imported directly: export frames as images first.
- The site's GitHub star counter (72.9k) lags the repo itself.

## Reusable ideas

- Let the model render and screenshot its own output, then compare it with the target and fix the differences. It's a cheap self-check loop.
- Generate several model variants of the same screen and pick the closest, instead of trusting one run.
- Treat a screen recording as a spec for behavior (states, transitions), not just for layout.

## Related

[OpenDesign](open-design.md), [Aura](aura.md), [21st.dev](21st-dev.md), [VibePrompts](vibeprompts.md), [Kage](kage.md)
