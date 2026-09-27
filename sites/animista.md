---
title: Animista
description: A live CSS animation workbench with preview objects, timing controls and copyable generated keyframes.
url: https://animista.net/
type: style-library
formats: CSS animation library · live preview · CSS code generator
topics: [motion]
verdict: useful
agent: []
pricing: free
licence: Generated CSS animations are stated to be free for personal and commercial use under the FreeBSD license; redistribution requires retaining its copyright and licence notice. This does not license the site artwork.
licence_class: mixed
reviewed: 2026-09-26
status: active
related: [motion-primitives, ripplix]
---
[← Atlas](../README.md) · Topics: [motion](../topics/motion.md)

# Animista

## What it is

Animista is an in-browser library and editor for CSS animations. It groups effects by category, previews them on selectable objects and exposes the generated CSS properties and keyframes.

## When to open it

- When you want to compare the feel of a CSS entrance, exit, attention or background effect before writing it into an interface.
- When you need to compare timing curves, duration, delay, direction or iteration behavior on a preview object.
- When you want a small CSS starting point that you can review and adapt in your own code.

## Most useful

- Start at [Entrances](https://animista.net/play/entrances) and compare variants such as [rotate-in-center](https://animista.net/play/entrances/rotate-in/rotate-in-center), slide-in and fade-in. The horizontal effect and variant rows make neighboring motions easy to scan.
- In the live editor, switch the preview object between a box, circle, button, text, image, gradient and 3D card. This helps reveal whether an effect suits an icon, control or larger surface.
- Adjust duration, easing, delay, iteration, direction and fill mode; use **Replay** to compare the result, then open the code panel to inspect the class and keyframes.

## Using it with agents

No MCP, API, CLI, `llms.txt` or agent-specific integration was found. Open a specific effect URL in a browser and ask an agent to explain or adapt the generated CSS; review its behavior and reduced-motion handling in your project.

## Watch out for

- The site says its mobile version is unavailable. The desktop workbench is the reviewed experience.
- The preview isolates an effect from its interface context. Check that its duration and distance work in the actual layout, and account for reduced-motion preferences.
- The FreeBSD grant applies to generated animation CSS, not to the site's visuals or branding.

## Reusable ideas

- Pair a compact taxonomy of effects with a shared preview stage so variants can be compared quickly.
- Expose the timing parameters that materially change the motion rather than hiding them behind a code editor.
- Present generated properties and keyframes separately so a user can take only the part they need.

## Related

[Motion Primitives](motion-primitives.md), [Ripplix](ripplix.md)
