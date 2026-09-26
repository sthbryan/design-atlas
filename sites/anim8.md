---
title: Anim8
description: Browser editor that traces video into editable animated SVG and Lottie; MCP and CLI on Pro.
url: https://tryanim8.com
type: tool
formats: tool · animation editor · MCP server · CLI
topics: [motion, assets, agents-and-prompts]
verdict: useful
agent: [mcp, cli]
pricing: freemium
licence: Free plan; Pro Monthly (US$9 per month in the site's metadata) or Founding Lifetime at US$79 once for the first 100 buyers / closed commercial service; you keep ownership of what you import and create
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [lottiefiles-motion-design, morphrig, efecto, animated-icons]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Anim8

## What it is

Anim8 is a browser-based motion editor that turns video into editable vector animation. You import an MP4 (the site highlights AI-generated clips from tools such as Seedance 2.0, and says it is not affiliated with them) or an image. Anim8 traces every sampled frame into vector shapes, called "cels", on your own CPU cores, and packages the result as one self-contained animated SVG. The editor goes well beyond conversion: a keyframe timeline with easing and springs, direct path editing, skeleton rigging, state machines for playback states, auto-layout frames, a camera and audio tracks. It can import Figma Motion work as editable layers and keyframes through a bridge plugin. Exports are animated SVG, Lottie JSON and MP4. The maker is not stated. Billing runs through Polar.

## When to open it

Open it when you have a short, flat-colour clip or AI-generated animation and need it as a light, scalable vector for a web hero, onboarding step, empty state or app screen instead of a heavy video. It is also an option for polishing Figma Motion prototypes into shippable Lottie or SVG.

## Most useful

- **Video to one animated SVG**: frame rate, colour count and detail settings, with the dominant colour kept as a flat background cel
- **Editable after tracing**: paths, colours, timing and states stay editable, and any cel can become a regular keyframed scene
- **Rigging**: draw a skeleton over artwork, bind parts, then pose and keyframe it. Every export follows the rig
- **Three export targets**: animated SVG, Lottie and MP4, with clear warnings about which effects each one can't carry (blur, shaders, cameras and audio in Lottie, for example)
- **Figma Motion bridge**: brings in real layers and keyframes, not just a flattened reference video

## Using it with agents

Pro accounts get a CLI and a local MCP server. You install the CLI with `npm install -g` from a tarball hosted on tryanim8.com (Node 22+). Then register it, for example `claude mcp add --transport stdio anim8 -- anim8 mcp --root "/path/to/workspace"`. Pairing uses a code shown in the editor, and the agent can then inspect the live canvas, trace PNGs into shapes and export SVG or Lottie inside the root folder. The docs also describe WebMCP tools for compatible browsers. Integrations are labelled beta.

## Watch out for

- Exports are the paid part: the free plan prompts you to upgrade for Lottie, MP4 and animated SVG. The homepage demo allows only two free tries with files under 10 MB
- Every sampled frame adds file size. The site itself recommends short, flat-colour clips, and long or photographic video will produce huge SVGs
- Founding Lifetime covers the "operating life of Anim8", not yours, and refunds can revoke it. Third-party AI and API costs are separate
- The CLI comes from the vendor's own site rather than the npm registry, and the MCP companion needs a Pro sign-in
- You are responsible for the rights to imported video and artwork. The terms say Anim8 does not grant rights to third-party content
- The site uses PostHog analytics, and projects can sync to your account as well as browser storage

## Reusable ideas

- Treat video as a source to vectorise and re-time, not a file to embed
- Warn per export format about which effects will be lost, before exporting
- Keep agent write access inside a declared root folder and ask the agent to re-inspect revisions before retrying edits
- Offer a rig layer so one piece of artwork can drive many animations

## Related

[LottieFiles Motion Design Skill](lottiefiles-motion-design.md), [Morphrig](morphrig.md), [Efecto](efecto.md), [Animated Icons](animated-icons.md)
