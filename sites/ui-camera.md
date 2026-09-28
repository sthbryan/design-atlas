---
title: ui.camera
description: Puts UI screenshots in a 3D scene for angled 4K stills and camera-move videos; commercial use needs Pro.
url: https://ui.camera
type: tool
formats: tool · browser studio · Chrome extension
topics: [assets, 3d-and-shaders, motion]
verdict: useful
agent: []
pricing: freemium
licence: freemium. Free is for personal use only (1 project, 3 captures and 1 video a week). Pro costs $16 a month and Unlimited $29 a month, with about 28% off yearly; both include a commercial-use licence. No terms of service are published at review
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [screan, rebrand-gallery, what-ships, craftwork]
---
[← Atlas](../site/home.md) · Topics: [assets](../topics/assets.md), [3d-and-shaders](../topics/3d-and-shaders.md), [motion](../topics/motion.md)

# ui.camera

## What it is

ui.camera is a browser studio for "product photography" of software. You upload a screenshot or screen recording (PNG, JPG, WebP, AVIF, GIF, MP4, MOV or WebM), and it places the UI on a plane inside a three.js scene. You then tilt it on three axes, zoom and frame it against a backdrop, and capture a still or record a camera move in 4K at 60 fps. A timeline with keyframes drives the moves. There are motion presets such as soft orbit, wide sweep, isometric glide, focus pull and push directions, along with text overlays (typewriter, highlighted or circled words) and device frames such as a MacBook or Pro Display XDR. "Operator" builds a move for you from interest points you mark on the image. It is run by Autogram AB in Sweden, and its showcase features shots of ElevenLabs, Departure Mono and Phosphor Icons.

## When to open it

- When a launch post, changelog or landing page needs an angled, cinematic shot of your interface instead of a flat screenshot.
- When you want a short looping video of a product screen without opening After Effects or a 3D app.

## Most useful

- **Try before sign-up**: the studio works as a guest, and projects stay in the browser's local storage.
- **Operator and presets**: generated camera paths that you tune on the timeline instead of animating from scratch.
- **Aspect ratios**: 16:9, 1:1, 4:3, 4:5 and 9:16 for site, social and story formats.
- **Chrome extension**: captures or records the current tab with page clean-up and optional cursor capture. A macOS menu-bar app handles area recording. Files go to your Downloads folder.
- **Transparent PNG export** on paid plans, for dropping shots onto your own backgrounds.

## Using it with agents

There is no API, MCP server, CLI or llms.txt, and the output is image and video files. Render the shots by hand, commit them, and let the agent place them in the page. Record the preset and angle you used alongside the file so the set can be matched later.

## Watch out for

- Free captures are personal use only. Commercial work needs Pro or Unlimited, and the licence text itself is not published.
- The free tier is tight: videos are capped at 12 seconds (30 seconds on Pro, 3 minutes on Unlimited), and custom backdrops and middle keyframes are paid features.
- Signed-in projects, including your uploaded screens, are stored on the service (Supabase handles authentication). Avoid unreleased or sensitive UI if that matters.
- The sitemap lists only the home page and privacy policy, and pricing is shown only inside the app.

## Reusable ideas

- Let people use the full editor as a guest and ask them to sign up only when they save or exceed a limit.
- Build camera moves from marked points of interest rather than asking users to set keyframes.
- Name motion presets after camera language (orbit, sweep, focus pull) so non-animators can pick one.
- Pair a web studio with a capture extension so the source screen comes in already clean.

## Related

[Screan](screan.md), [Rebrand Gallery](rebrand-gallery.md), [What Ships](what-ships.md), [Craftwork](craftwork.md)
