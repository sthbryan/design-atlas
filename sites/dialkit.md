[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [agents-and-prompts](../topics/agents-and-prompts.md), [documentation](../topics/documentation.md)

# DialKit

- **URL:** https://dialkit.dev
- **Type:** tool (npm library for live tuning)
- **Topics:** motion, agents and prompts, documentation
- **Pricing / licence:** free, MIT / Open source
- **Reviewed:** 2026-09-25

## What it is

DialKit is a small library by Josh Puckett (author of Interface Craft) that puts a floating control panel beside the interface you are building. You declare the values you want to tweak in code, bind them to your styles or animation props, and adjust them live with sliders instead of editing constants and reloading. It has adapters for React 18+, Solid, Svelte 5, Vue 3 and plain JavaScript, uses Motion for its own UI in React and Solid, and had about 1.2k GitHub stars at review time.

## When to open it

When a spring, easing curve, spacing value or colour "almost" feels right and you want to find the right number by eye, or when a designer and an engineer need to agree on timing while looking at the real component rather than a prototype.

## Most useful

- **Control types**: sliders with ranges and steps, toggles, text, selects, colour pickers that understand OKLCH and Display P3, images, two-axis pads, action buttons and nested folders.
- **Spring and easing editor** with a time mode (visual duration and bounce) and a physics mode (stiffness, damping, mass), plus a draggable cubic Bezier editor.
- **Timeline dock** for sequenced animations: clips with start times and durations that you scrub, move and resize, with loops and groups.
- **Versions and copy-out**: save alternatives, compare them, then copy the chosen values back into code; optional persistence to local storage and keyboard shortcuts per control.
- The panel hides itself in production builds unless you opt in.

## Using it with agents

The site has a Human/Agent switch; the Agent view is a Markdown guide describing what the library is for, a step-by-step workflow for coding agents and install snippets per framework. The home page also offers ready prompts, such as adding spring controls to an existing hover animation or wiring a timeline with a replay button. There is no MCP server or `llms.txt` file.

## Watch out for

- It is a development tool: values you settle on still have to be copied back into production code, and timeline bindings must be replaced before removing the dock.
- React and Solid adapters need Motion installed alongside it; the vanilla build has no runtime dependencies.
- In Next.js App Router the controls must live in a client component.

## Reusable ideas

- Expose only a handful of meaningful knobs per component (duration, bounce, scale, shadow blur) rather than every property.
- Tune springs by perceived duration and bounce first, and drop to stiffness and damping only when needed.
- Add a replay action next to any entrance animation you are tuning.
- Save competing versions of a motion and compare them in place before committing to one.
- Publish a separate agent-facing page that states purpose, workflow and install steps in plain Markdown.

## Related

[kinetics](kinetics.md), [60fps](60fps.md), [motion-primitives](motion-primitives.md), [animejs](animejs.md)
