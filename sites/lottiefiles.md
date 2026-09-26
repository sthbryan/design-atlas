---
title: Lottie
description: Huge Lottie library, Creator editor with an MIT MCP, and dotLottie players; its licence and terms conflict.
url: https://lottiefiles.com
type: asset-library
formats: assets · animation editor · runtimes · MCP server
topics: [motion, assets, agents-and-prompts]
verdict: useful
agent: [mcp, llms-txt]
pricing: freemium
licence: Free plan; Individual $19.99, Team $24.99 and Enterprise $119.99 per user per month, billed annually (archived pricing page, July 2026) / free public animations under the Lottie Simple License; the terms limit Free and Individual plans to non-commercial use; dotLottie players and the Creator MCP are MIT
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [lottiefiles-motion-design, rive, animated-icons, useanimations]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Lottie

## What it is

LottieFiles, run by Design Barn Inc., is the main commercial home of Lottie, the JSON vector animation format Airbnb open-sourced for After Effects exports. The platform has five parts. There is a library that the site puts at 800,000+ free and premium animations. There is Lottie Creator, a browser editor with AI features: Motion Copilot for keyframes, Prompt to Vector, and Prompt to Themes. There are plugins for After Effects, Figma, Canva, Framer and Webflow. There is team workspace and asset management with a CDN. And there are the dotLottie format and its players. `.lottie` is a ZIP that bundles several animations, themes (through Lottie slots) and state machines for interactivity. The dotLottie web player is Rust and WASM (ThorVG), MIT, with about 1.5 million weekly npm downloads. The site claims 16 million users.

## When to open it

- For a ready-made loader, empty-state illustration, success tick or onboarding animation you can drop in as JSON.
- When a motion designer works in After Effects or Figma and needs a small, scalable handoff format for web and native apps.
- When you want one animation file with light, dark and brand themes and simple interactivity, without moving to Rive.

## Most useful

- **Search**, by keyword or by uploading an image, with free and premium filters.
- **dotLottie v2**: several animations per file, theming through slots, and state machines, all documented as an open spec.
- **Players** for the web and frameworks (React, Vue, Svelte, Solid, Web Components), iOS, Android and React Native.
- **Optimisation**: converts `.json` to the smaller `.lottie`, and exports to GIF, MP4, WebM and MOV on paid plans.
- **Developer docs**: `developers.lottiefiles.com/llms.txt` links separate llms files for the web players, mobile players, dotLottie-JS and reLottie.

## Using it with agents

The Lottie Creator MCP (`npx -y @lottiefiles/creator-mcp@latest`, MIT, 0.2.2 at review) connects Claude Code, Cursor, Codex, Copilot, VS Code and others to an open Creator browser tab. Through it the agent can build layers and keyframes, recolour and re-time animations, and batch out variants. Which features you get follows your Creator plan. Supported browsers can also use Creator directly through WebMCP. LottieFiles publishes a separate motion-design skill as well. For code, give the agent the developer `llms.txt` files so it uses current dotLottie player APIs.

## Watch out for

- **Two licences pull in different directions.** Public free files are under the Lottie Simple License: commercial use and modification are allowed, attribution is optional, but anything you redistribute must carry the same licence. The Terms of Use, however, make the Free and Individual plans non-commercial only, and require a Team plan (at most 10 users per domain) for animations created through the platform. Read both before you ship client work.
- lottiefiles.com sits behind a Cloudflare bot check, so agents and scripts can't fetch pages or its `llms.txt`. This review used archived copies for pricing, the licence and the terms.
- The library count varies from page to page: 800,000+ total on the homepage, and both 250,000 and 600,000 premium animations on the pricing page.
- Airbnb's original `lottie-web` player is still MIT, but its last push was in September 2025. New work belongs on the dotLottie players.
- Lottie plays timelines, not logic. Rich interactivity needs dotLottie state machines or another tool.

## Reusable ideas

- Pack variants (themes, states, several animations) into one file instead of shipping many.
- Publish a small, open spec for your file format, with a JSON Schema.
- Split `llms.txt` by product so an agent loads only the runtime it needs.

## Related

[LottieFiles Motion Design Skill](lottiefiles-motion-design.md), [Rive](rive.md), [Animated Icons](animated-icons.md), [useAnimations](useanimations.md)
