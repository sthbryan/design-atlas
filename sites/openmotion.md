---
title: OpenMotion
description: Free closed desktop app that drives your Claude Code or Codex CLI to turn a brief into editable launch videos; nothing for your own agent to call.
url: https://openmotion.design
type: tool
formats: tool (desktop app)
topics: [motion, agents-and-prompts]
verdict: niche
agent: []
pricing: free
licence: free while in development, with a possible future Pro plan per the site; requires an account. Closed-source desktop app despite the name; no public repository, terms or licence page was found
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [60fps, scrolltide, animejs, dialkit]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# OpenMotion

## What it is

A desktop app for macOS (Apple silicon and Intel) and Windows (beta) that turns a written brief into an editable motion video, aimed at product launch films, teasers, explainers, social clips and logo animations. Instead of rendering a locked video, it builds a plan of scenes that you then adjust on a canvas with a layer and audio timeline. The heavy lifting is done by your own Claude Code or Codex CLI, which the app connects to so you do not manage separate API keys.

## When to open it

When you need a short launch or feature video for a product and do not have a motion designer, or want a first cut to hand to one. It is less relevant for in-product UI animation.

## Most useful

- **Scene-by-scene direction**: you describe the story, duration, format, look and closing line; the app proposes scenes that you can revise individually by chat, on the canvas or on the timeline.
- **Timeline control** over timing, easing, colour, assets and sound, plus reusable brand kits.
- **Exports** to standard video, transparent WebM for overlays, and self-contained HTML for the web, with the project staying editable afterwards.
- **Case study page** that shows a real eleven-scene video next to the prompt used for each scene, which doubles as a guide to writing motion briefs.

## Using it with agents

The app is itself agent-driven: it detects an installed Codex or Claude Code CLI, runs the provider's own sign-in flow and uses that subscription to generate scenes. It does not expose an MCP server, `llms.txt` or an API that other agents can call, so it plugs agents in rather than plugging into them.

## Watch out for

- Needs a local install (around 326 MB for macOS) plus a signed-in Claude Code or Codex CLI; Windows ARM devices are not supported yet.
- The site's social proof is heavily weighted towards posts by one creator; judge output quality on your own brief.
- Pricing may change once a Pro plan appears, and no terms of use were published at review time.

## Reusable ideas

- Write motion briefs per scene with an explicit duration, entry direction, easing character and what carries over from the previous scene.
- Name the viewer's problem before showing the product; open on the question, not the logo.
- Let "thinking" or loading states hold on screen long enough to feel real; instant results can read as fake.
- End with a lockup beat and a moment of empty space so the close has room to land.
- Export motion as transparent WebM when it needs to sit over other footage or UI.

## Related

[60fps](60fps.md), [scrolltide](scrolltide.md), [animejs](animejs.md), [dialkit](dialkit.md)
