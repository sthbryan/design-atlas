---
title: Rive
description: State-machine vector editor with MIT runtimes, an agent-friendly CLI and a local MCP; exporting needs a paid seat.
url: https://rive.app
type: tool
formats: tool · animation editor · runtimes · CLI · MCP server
topics: [motion, assets, agents-and-prompts]
verdict: very-useful
agent: [mcp, llms-txt, cli]
pricing: freemium
licence: Free plan (3 collaborative files, no runtime export); Cadet, Voyager and Enterprise per seat, with exact prices that differ between the pricing page and the docs at review / closed commercial editor; official runtimes MIT; Marketplace files CC BY
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [lottiefiles, theatrejs, animated-icons, useanimations]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Rive

## What it is

Rive is an editor and runtime for interactive vector graphics. In the editor (browser or desktop app) you design, rig and animate, then wire behaviour with state machines, data binding to view models, Luau scripts and WGSL shaders. You export a compact `.riv` file, which the open-source runtimes play natively on the web, iOS, Android, Flutter, React Native, C++, Unity, Unreal, Defold and inside Framer, Webflow and Wix Studio. All of them draw through the Rive Renderer, a GPU vector engine. The site names Spotify Wrapped and Duolingo among its users. The web runtimes are busy packages: `@rive-app/canvas` and `@rive-app/react-canvas` each had around a million weekly npm downloads at review.

## When to open it

- For animated UI that has to respond to input or data: toggles, onboarding characters, game HUDs, and dashboards whose numbers are bound to the animation.
- When one asset has to play in several native apps and on the web from a single source.
- When Lottie's non-interactive, After Effects-first workflow is holding a team back.

## Most useful

- **State machines**: states, transitions and conditions built in the editor, so developers set inputs instead of scripting timelines.
- **Data binding**: view models connect editor properties to app data, and lists can be generated at runtime.
- **Scripting**: Luau node, layout, converter, path-effect and transition scripts, with a debug panel and unit tests.
- **Rive CLI**: build `.riv` files from Rive Markup Language (RML) text, preview locally, render frames headlessly and push or pull files from your account.
- **Marketplace**: community files you can remix, all shared under CC BY.

## Using it with agents

Rive offers three routes. The CLI (`rive create` writes an `AGENTS.md` and `CLAUDE.md` into the project) lets Claude Code or Cursor write RML, Luau and shaders, then check the work with `rive <dir> --verify`, `rive inspect --summary` and screenshots. It installs with `curl | sh`, a PowerShell script or a Homebrew cask. The desktop editor also runs a local MCP server at `127.0.0.1:9791/mcp`, whose tools edit artboards, state machines, keyframes, view models and scripts. The third route is a built-in AI Agent billed in credits: $20 per seat per month on Voyager and $40 on Enterprise. Docs have `/llms.txt` (about 430 pages) and `llms-full.txt`.

## Watch out for

- The free plan can't export `.riv` for runtimes, so shipping anything means a paid seat.
- The pricing page showed Cadet $9, Voyager $32 and Enterprise $120 per seat per month. The docs' pricing table gave $17 monthly or $108 a year for Cadet, and $39 monthly or $304 a year for Voyager. Check before you budget.
- Enterprise is required above $10M annual revenue, and Cadet caps at 3 seats.
- The MCP server only works in the desktop app on macOS and Windows. The CLI is a vendor binary with no stated licence.
- The editor and file format are proprietary. Your work lives in Rive's cloud unless you export it.
- Marketplace files need attribution under CC BY.

## Reusable ideas

- Treat animation as a state machine with named inputs, not a sequence of timelines.
- Bind animation properties to a view model so the app changes data rather than frames.
- Give agents a text scene format plus verify, inspect and screenshot commands so they can check their own output.
- Scaffold `AGENTS.md` into every new project.

## Related

[Lottie](lottiefiles.md), [Theatre.js](theatrejs.md), [Animated Icons](animated-icons.md), [useAnimations](useanimations.md)
