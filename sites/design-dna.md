---
title: Design DNA
description: Turns references into a three-part JSON profile (tokens, style, WebGL effects), with measured colours and a ΔE verify loop.
url: https://github.com/zanwei/design-dna
type: agent-skill
formats: agent skill · JSON design-profile schema · colour-measurement scripts
topics: [agents-and-prompts, design-md, color, 3d-and-shaders]
verdict: useful
agent: [skill]
pricing: free
licence: free. MIT ("the design-dna authors"). About 1.8k GitHub stars and 5.1k skills.sh installs at review. The optional scripts need the `sharp` image library from npm.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [extract-design-system, styleseed, neuform, aura, paper-shaders]
---
[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [design-md](../topics/design-md.md), [color](../topics/color.md), [3d-and-shaders](../topics/3d-and-shaders.md)

# Design DNA

## What it is

Design DNA, by zanwei, is a single skill that turns reference designs (screenshots, images or URLs) into a structured JSON profile, then builds new UI from that profile and your content. The profile has three parts: `design_system` (tokens you can measure: colour, a type scale from display to overline, spacing, layout, shape, elevation, icons, motion and components), `design_style` (mood, visual language, composition, imagery, interaction feel, voice) and `visual_effects` (Canvas, WebGL and 3D, particles, shaders, scroll, cursor, text, image, glass, SVG animation), each with an `enabled` flag. The skill runs in three phases (show the schema, analyse references, generate) that you can use alone or chain. The files are small: an 8 KB `SKILL.md`, a 12 KB schema, an 8.6 KB generation guide and two Node scripts. The README comes in six languages.

## When to open it

- When "make it look like this screenshot" keeps drifting and you want a reusable, versioned spec in its place.
- When a reference relies on effects (particles, shaders, 3D, scroll scenes) that ordinary token files can't describe.
- When colour accuracy matters and you want the agent to measure hex values from pixels instead of guessing them.

## Most useful

- **Deterministic colour measurement**: `measure-colors.mjs` runs k-means over the screenshot's pixels, merges anti-aliasing noise by perceptual distance, and returns exact hexes with coverage (0–1) and background, text and accent roles. The skill forbids guessing hex values by eye, and the README shows a guessed rebuild drifting by a ΔE of about 29 on a brand pink.
- **Verify loop**: `verify.mjs` re-measures a screenshot of the generated page with the same cluster count and passes only if mean ΔE ≤ 5, max ΔE ≤ 20 and coverage drift ≤ 0.35 (exit code 0 or 2). The agent fixes the colours and re-runs it rather than asking you to judge by eye.
- **Effects vocabulary**: a schema and implementation notes for each effect type. Pick the technology by performance tier (CSS and SVG, then Canvas, GSAP or Lottie, then Three.js or GLSL), and always ship a fallback for reduced motion and low-end devices.
- **Build priority**: colour and typography first ("80% of visual identity"), then spacing and layout, shape and elevation, style, effects, and motion last.

## Using it with agents

Install with `npx skills add zanwei/design-dna` (add `-a claude-code -g -y` for a global Claude Code install). It triggers on phrases such as "design DNA", "extract design style", "design tokens from reference" or "generate design from JSON", or when you hand over reference images and ask for an analysis. Phase 2 outputs a complete DNA JSON with every field filled and asks whether you want to adjust it. Phase 3 outputs a single self-contained HTML file with inline CSS and JS unless you name a framework. The DNA is JSON, not a DESIGN.md. It is closer to a machine-readable twin of one, with effects added.

## Watch out for

- Network calls: `npm install` fetches `sharp` and its native binary, and generated pages load Three.js, GSAP or Lottie from jsDelivr at `@latest`, which is unpinned. Pin versions before shipping.
- The generation phase tells the agent to fetch real assets from a reference URL instead of recreating them. On someone else's site that means copying their images. Use your own assets.
- "Every field populated" pushes the model to fill in values it could not observe (fonts, motion timing from a still image). Treat those as guesses.
- Its cursor-effect recipes hide the system cursor (`cursor: none`), which several anti-slop skills ban outright.
- Measurement only works on image references. URL-only references fall back to the model's guess.

## Reusable ideas

- Measure colours from pixels with a script, and verify the result with the same script and fixed pass thresholds.
- Split a design profile into what you can measure, what you can feel, and what needs special rendering.
- Give every effect an `enabled` flag and a fallback, so the spec can say "none" explicitly.
- Keep the measurement settings (such as the cluster count) inside the spec so verification can repeat them exactly.

## Related

[extract-design-system](extract-design-system.md), [StyleSeed](styleseed.md), [Neuform](neuform.md), [Aura](aura.md), [Paper Shaders](paper-shaders.md)
