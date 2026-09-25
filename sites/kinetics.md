[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md)

# Kinetics

- **URL:** https://kinetics.colorion.co
- **Type:** JavaScript library
- **Topics:** motion, components, interactions
- **Pricing / licence:** MIT / Open source
- **Reviewed:** 2026-09-25

## What it is

Kinetics is a JavaScript library focused on spring-physics-driven animations for interface interactions. Instead of fixed-duration easing curves, it applies stiffness and damping parameters that make animations feel natural and physically weighted.

## When to open it

Open this site when you need animations that respond to user interactions (clicks, dragging, state changes) with realistic physical behavior. It's especially useful for visual feedback, component transitions, and entrance/exit effects.

## Most useful

- **153 interaction effects** organized in two main categories: Interaction & Input, Feedback & State
- **Three implementation formats** for each effect: pure CSS, React code, and AI agent prompts
- **Live parameter editor**: adjust stiffness and damping in real time to see the animation change
- **Copy-paste ready**: select your preferred format and copy it to your project without friction

## Using it with agents

Each effect includes an AI prompt that describes the animation with its parameters. You can send these prompts directly to Claude or another agent to reproduce or adapt the animation. React code is optimized for performance with GPU-composited transforms.

## Watch out for

- Effects use cubic-bezier curves that *simulate* spring physics, not a full physics engine
- No time API or timeline for sequencing multiple complex animations
- Spring parameters have specific ranges; not all values are valid

## Reusable ideas

- Drag-to-dismiss patterns for notifications or cards
- Magnetic buttons that attract the cursor before clicking
- Progress indicators and spinners with smooth motion
- Hold-to-confirm as an alternative to double-click
- Tab and pill transitions with physical easing
- Feedback for counters and toggles with natural "bounce"

## Related

[css-text-effects](css-text-effects.md), [circle-loaders](circle-loaders.md), [animejs](animejs.md), [gradient-buttons](gradient-buttons.md)
