---
title: morphicons
description: Tiny zero-dependency library that morphs any stroke icon into another using interruptible springs.
url: https://www.morphicons.com
type: js-library
formats: JS library · icon morphing
topics: [icons, motion, components]
verdict: very-useful
agent: [llms-txt]
pricing: free
licence: Free / MIT. The demo icons keep their own licences (Lucide ISC, Heroicons and Tabler MIT)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [lucide-animated, heroicons-animated, torph, iconoir, iconify]
---
[← Atlas](../site/home.md) · Topics: [icons](../topics/icons.md), [motion](../topics/motion.md), [components](../topics/components.md)

# morphicons

## What it is

morphicons is a small open-source library that turns one stroke icon into another with a spring animation: a menu icon becoming an X, or any stroke icon becoming any other, even across icon sets. It is made by Guillermo (guillermolg.com, GitHub `guillermolg00/morphicons`). It launched in August 2026, reached about 2,700 stars within weeks, was at version 1.7.1 when reviewed, and npm counted roughly 158,000 downloads in the past month. You never pair icons by hand. The library resamples both shapes, finds the best rotation and scale between them with closed-form 2D Procrustes alignment, then animates in that frame. The core is about 6.5 KB gzipped with no runtime dependencies and never touches the DOM.

## When to open it

Open it when a toggle, player control, disclosure or status icon should change shape instead of cross-fading, and you already use a 24px stroke set such as Lucide, Tabler, Heroicons outline, Iconoir or Hugeicons stroke. The playground lets you pick icons from several sets, scrub the transition and compare spring presets before you write any code.

## Most useful

- **One component per framework**: `MorphIcon` for React, Vue 3, Svelte 5 and React Native, a vanilla `createMorph` driver, and a custom element that Astro can render without an island
- **Three modes**: change the `icon` prop and it morphs; drive `from`/`to`/`progress` from scroll or a gesture; or call `morphTo` and `set` imperatively
- **Interruptible springs**: `smooth`, `snappy` and `bouncy` presets or your own stiffness and damping. A new target mid-flight replans from the current shape and keeps its velocity
- **Adapters**: `svgToIcon` takes raw markup (an Iconify body, a pasted `<svg>`), `maskTarget` morphs CSS-mask icons from UnoCSS or Tailwind icon plugins in place, and `canvasTarget` draws into a canvas for maps, charts or favicons
- **`fitIcon`**: moves sets drawn on other grids (Carbon 32, Heroicons solid 20, Teenyicons 15) onto the 24 grid
- **Showcase**: copy-paste components for common icon swaps in shadcn/ui-style apps, with a choice of library, framework, spring and stroke

## Using it with agents

The site publishes an `llms.txt` written for agents, with install commands, subpath exports and quickstarts, plus an `llms-full.txt` that holds the whole README, including the compatibility rules and the maths. Give an agent the `llms.txt` and a task like "morph the menu button into close". Stress one detail: icons are imported as data from the `lucide` package, not as `lucide-react` components. There is no MCP server or registry.

## Watch out for

- Stroke-drawn icons only. Filled sets (Material Symbols, Phosphor fill, Heroicons solid, Bootstrap, Remix) load but look wrong while they move
- Icon data may use only basic shapes with literal coordinates. `<g>` wrappers and `transform` attributes throw an error
- Reduced motion defaults to `"never"`. Set `reducedMotion: "user"` so the OS setting is respected
- By default the icon is `aria-hidden`. Pass `label` when the icon is the only content of a control, and keep `aria-expanded` or `aria-pressed` on the button itself
- It is new and ships often. Pin the version and check the roadmap before relying on newer adapters

## Reusable ideas

- Work out icon-to-icon transitions from the geometry instead of hand-writing rotation pairs
- Keep the animation core free of DOM code, so every framework binding stays a thin wrapper
- Let a new target interrupt a running spring and keep its velocity, so fast repeated taps still feel smooth
- Render the exact static SVG on the server and start the animation only after hydration

## Related

[Lucide Animated](lucide-animated.md), [Heroicons Animated](heroicons-animated.md), [Torph](torph.md), [Iconoir](iconoir.md), [Iconify](iconify.md)
