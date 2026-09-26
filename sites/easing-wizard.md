[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Easing Wizard

- **URL:** https://easingwizard.com
- **Type:** tool · API · MCP server
- **Topics:** motion, agents-and-prompts
- **Pricing / licence:** Free / custom source-available licence (use inside larger products allowed; selling it as a product of its own is not), Claude plugin MIT
- **Reviewed:** 2026-09-25

## What it is

Easing Wizard is a visual editor for CSS timing functions, made by Matthias Martin. It covers five curve families: Bézier, Spring, Bounce, Wiggle and Overshoot. Bézier curves come out as `cubic-bezier()`. The physics-style curves are sampled into a CSS `linear()` function, so a spring or bounce runs with no JavaScript. The Bézier tab has the classic families (Sine through Expo and Circ, plus Jump and Anticipate) in In, Out, In Out and Out In versions, and the public API lists 68 presets in total. The project is a TypeScript monorepo: a React Router front end, a Hono API, an MCP server and a Claude Code plugin.

## When to open it

Open it when `ease` or `ease-in-out` feels flat and you want a curve you have actually looked at, or when you need a spring or bounce feel in plain CSS without adding an animation library. It also helps a team agree on one easing, because every configuration gets a shareable link.

## Most useful

- **Live preview** on a sample shape, with a toggle to compare against linear. You can preview movement, size, scale, rotation, 3D rotation or opacity at a duration you choose
- **CSS and Tailwind output**: copy the `cubic-bezier()`/`linear()` value, or the matching arbitrary `ease-[...]` class
- **Spring controls** for mass, stiffness and damping, plus an accuracy setting that trades output length against how closely the `linear()` points follow the curve
- **Share links** that store the whole curve setup in the URL hash
- **REST API** (`api.easingwizard.com/v1`) with an OpenAPI spec and no key required. It returns presets and generates curves as JSON, CSS or SVG

## Using it with agents

This is one of the most agent-ready motion tools in the atlas. `npx @easingwizard/mcp-server` gives Claude, Cursor or VS Code seven tools for generating curves. The Claude Code plugin, listed in the community marketplace, adds skills to recommend a curve from a description of the feel you want, to replace default easings in CSS or Tailwind files, and to audit a whole project for missing or generic easings. It also ships an animation-advice agent. For agents without MCP, point them at the OpenAPI document and have them call the curve endpoints.

## Watch out for

- The licence is not an OSI licence. You may use the code inside larger products, but not resell it or build a competing easing product on it
- Spring, bounce and wiggle output is a long list of `linear()` stops. Keep it in a CSS custom property, not scattered through class names
- `linear()` needs a modern browser. Older engines ignore the declaration and fall back to the default timing function
- Rate limits and uptime guarantees for the public API are not stated

## Reusable ideas

- Name easings by the feel they give (snappy, gentle, playful), then map each to a curve once, in tokens
- Bake physics curves into CSS `linear()` at build time and skip the runtime spring library
- Put the full editor state in the URL so a curve can be shared and reviewed like code
- Give agents an audit command that finds default easings, not only a generator

## Related

[DialKit](dialkit.md), [Kinetics](kinetics.md), [Transitions.dev](transitions-dev.md), [Anime.js](animejs.md)
