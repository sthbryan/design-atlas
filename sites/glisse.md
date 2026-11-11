---
title: Glisse
description: MIT React components that reproduce Apple's Liquid Glass in the browser — switch, slider, tab bar, menu, input and the glass surface itself.
url: https://glisse.kelvinzhang.ca
type: component-library
formats: React component library · npm package (`glisse`) · CSS custom properties for the glass
topics: [components, motion, ux-patterns]
verdict: useful
agent: []
pricing: free
licence: MIT (repo `0kzh/glisse`, about 490 stars at review, package version 0.5.0). No paid tier and no account.
licence_class: open-source-permissive
reviewed: 2026-11-11
status: active
related: [liquid-glass, liquid-glass-web-react, glass-lens-react, motion-primitives]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [ux-patterns](../topics/ux-patterns.md)


# Glisse

## What it is

Glisse is Kelvin Zhang's attempt at a faithful implementation of Apple's Liquid Glass for the web, shipped as a normal npm package rather than a demo. `npm install glisse` gives you styled React components whose CSS travels with them: `Glass` (the surface primitive), `Button` (glass, filled, tinted, tinted filled, destructive and destructive filled), `Switch`, `Slider` (continuous or stepped), `Input`, `Menu`, `TabBar` and `SegmentedControl`. The refraction is real: the glass samples a backdrop you mark with `data-glisse-backdrop`, so a wallpaper, image or gradient underneath bends through it. It started in October 2026 and was at version 0.5.0 at this review.

## When to open it

- When you want the iOS 26 look on a web surface and would rather install components than rebuild a shader.
- When you need the *controls* from that world — a lifted tab bar, a segmented control, a glass slider — not just one hero showcase.
- When you want to study how a scattered set of CSS variables (`--lg-glass-bend`, `--lg-glass-dispersion`, `--lg-blur`, `--lg-rim-shine`) turns into a convincing material.

## Most useful

- **One primitive, many controls**: `Glass` takes the optical parameters, and the interactive components are built on it, so tuning the look once changes the family consistently.
- **The six button variants** cover the useful cases: plain glass for secondary actions, filled and tinted for primary ones, destructive for danger.
- **Tab bar with lift**: holding a tab lifts the selected item into a lens, which is the specific interaction people recognise from the source material.
- **Accessible names in the examples**: every snippet passes `aria-label`, and the tab bar and segmented control take `items` arrays with values, so keyboard and screen-reader behaviour are not an afterthought.

## Using it with agents

There is no MCP server, no `llms.txt` and no registry — the package is the interface, so an agent installs it like any other React dependency and imports from `"glisse"`. The site documents each component with a live example and the matching snippet beneath it, which is enough for an agent to copy the right prop names if it can fetch the page. Marking the backdrop element is the one non-obvious step and is easy to forget.

## Watch out for

- **Backdrop required**: without a `data-glisse-backdrop` element the glass has nothing to refract and reads as flat translucency.
- **Young and small**: version 0.5.0, a few hundred stars, one author, and APIs can still change between minors.
- **Heavy on the GPU**: blur plus refraction over a moving background costs real frame time on integrated graphics and mid-range phones.
- **iOS look on a web product** is a style decision, not a neutral one; it reads as imitation where the rest of the interface is not Apple-like.
- **Reduced motion and transparency**: check both. Glass over a bright image can push contrast below comfortable levels for text.

## Reusable ideas

- Put the optical values on CSS custom properties so one surface can be tuned per instance without new components.
- Build interactive controls on top of a single material primitive instead of redrawing the effect each time.
- Mark the backdrop explicitly in the DOM; it makes the effect a deliberate, inspectable dependency.
- Ship examples with real accessible names, so copy-paste keeps the semantics.

## Related

[Liquid Glass](liquid-glass.md), [Liquid Glass Web React](liquid-glass-web-react.md), [glass-lens-react](glass-lens-react.md), [Motion Primitives](motion-primitives.md)
