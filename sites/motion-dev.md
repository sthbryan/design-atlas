---
title: Motion
description: "Former Framer Motion for React, JS and Vue: MIT core, free docs MCP and skill, paid Motion+ extras."
url: https://motion.dev
type: js-library
formats: JS library · MCP server · agent skill
topics: [motion, agents-and-prompts, components]
verdict: very-useful
agent: [mcp, llms-txt, skill]
pricing: freemium
licence: Free and MIT for the `motion`, `motion/react` and `motion-v` packages; Motion+ is a one-time Personal licence (the site's structured data lists £299) or an annual per-seat Business plan; Motion Studio is a separate subscription
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [motion-primitives, dialkit, easing-wizard, emil-kowalski-skills, gsap]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md), [components](../topics/components.md)

# Motion

## What it is

Motion is the animation library formerly called Framer Motion, maintained by Matt Perry under the motiondivision GitHub org. One package covers React (`motion/react`), plain JavaScript and Vue (`motion-v`). Its engine mixes JavaScript with hardware-accelerated browser APIs. On top of the free library sit three paid products: Motion+ (premium components, 450+ examples with source, 30 animated "Motion UI" sections installable through shadcn, 110+ tutorials), the Motion AI Kit's premium tools, and Motion Studio, a timeline editor that runs on your local dev site. The library was at 13.4.4 on npm at review, with patch releases almost daily, about 33.7k GitHub stars and roughly 20 million weekly downloads for `motion` (43 million more still on the old `framer-motion` name).

## When to open it

- For any React or Vue interface where animation lives inside the component tree: exits, layout changes, shared elements, gestures and springs.
- When most of the kits in this atlas assume Motion anyway and you need the real API behind them.
- When you want an agent to write current Motion code instead of Framer Motion code it half-remembers from old training data.

## Most useful

- **Layout animation**: a single `layout` prop animates any change in size or position, and `LayoutGroup` coordinates shared-element moves.
- **`AnimatePresence`**: lets elements finish an exit animation before React removes them.
- **Springs and motion values**: real spring physics, plus values that update styles without re-rendering React.
- **Scroll**: `scroll()` and `useScroll` drive scroll-linked effects through `ScrollTimeline` where the browser supports it.
- **`AnimateView`**: view transitions for React 19.3, built on React's own `ViewTransition`.
- **Bundle control**: `LazyMotion` loads features on demand, from about 4.6 KB according to the docs.

## Using it with agents

The site's `/llms.txt` indexes about 290 docs, tutorials and troubleshooting pages, and labels which entries need Motion+. A free hosted MCP server at `mcp.motion.dev` searches the docs with no account. `npx motion-ai` (MIT on npm) installs a `/motion` skill of hand-written best practices and configures the hosted MCP servers for Claude Code, Cursor, Amp, OpenCode, Gemini CLI or Copilot. Signing in with Motion+ adds example and Motion UI source search, `linear()` CSS spring generation, a transition editor and MotionScore audits, which grade animations from S to F by render cost.

## Watch out for

- The free and paid layers blur together. Many examples and several components (Ticker, Carousel, Typewriter, AnimateNumber, Cursor) are Motion+ only, and the docs often end with an upsell.
- Prices only show once JavaScript runs. The £299 figure comes from the page's structured data, and the Business price per seat isn't in the static HTML.
- Motion+ code is MIT once it is in your project, but a product that resells Motion+ capabilities needs a separate Builder's Licence.
- Motion Studio isn't part of Motion+. Its free tier edits visually, but the agent and "apply to code" features need the Studio subscription.
- GitHub reports no licence file for the `ai-kit` repo. The MIT claim rests on the npm package and the site.

## Reusable ideas

- Ship one engine for React, vanilla JS and Vue, with each API written the way that framework expects.
- Label paid entries inside `llms.txt` so an agent doesn't recommend code the user can't install.
- Grade animations by render cost (transform and opacity versus layout and paint) and hand the agent the upgrade path.
- Turn a feeling ("a little bouncier") into an exact CSS `linear()` spring.

## Related

[Motion Primitives](motion-primitives.md), [DialKit](dialkit.md), [Easing Wizard](easing-wizard.md), [Emil Kowalski's skills](emil-kowalski-skills.md), [GSAP](gsap.md)
