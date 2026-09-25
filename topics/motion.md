[← Atlas](../README.md)

# Motion

Animation libraries and motion patterns for interfaces — from full JS animation engines to copy-paste CSS effects.

## Start here

- [Kinetics](../sites/kinetics.md) — spring-physics interaction effects offered as CSS, React and AI-prompt formats.
- [React Bits](../sites/reactbits.md) — hundreds of animated pieces (GSAP, three.js, Framer Motion) with an `llms.txt` index.
- [Anime.js](../sites/animejs.md) — a mature, general-purpose JS animation engine with a clear API.
- [CSS Text Effects](../sites/css-text-effects.md) — 90 pure-CSS text effects, each with a built-in agent prompt.

## All sources

- [Aceternity UI](../sites/aceternity-ui.md) — animated backgrounds, bento grids and shaders for landing pages.
- [Anime.js](../sites/animejs.md) — fine-grained control over complex animation sequences and SVG effects.
- [Circle Loaders](../sites/circle-loaders.md) — 24 animated SVG loading spinners.
- [CSS Text Effects](../sites/css-text-effects.md) — 90 animated text effects in pure CSS.
- [Kinetics](../sites/kinetics.md) — spring-physics-driven interaction effects with a live parameter editor.
- [Liquid Glass](../sites/liquid-glass.md) — real-time refractive DOM distortion effects.
- [Magic UI](../sites/magic-ui.md) — 150+ animated components and effects for React/Tailwind.
- [MicroKit](../sites/microkit.md) — 49 React microinteractions with polished transitions.
- [Motion Primitives](../sites/motion-primitives.md) — isolated, installable motion and text-effect components.
- [React Bits](../sites/reactbits.md) — decorative WebGL backgrounds, text animations and physics-driven micro-interactions.
- [Scrolltide](../sites/scrolltide.md) — cinematic scroll-driven motion templates and shaders paired with prompts.

## Patterns worth reusing

- Offer each effect in multiple formats (pure CSS, framework code, AI prompt) so consumers pick whichever fits their stack.
- Isolate "expensive" effects (shaders, particles, WebGL) into separate components loaded only where they pay off.
- Use spring/physics-based easing instead of fixed-duration curves for feedback that feels naturally weighted.
- Ship a live parameter editor (stiffness, damping, duration) so an effect can be tuned before it's copied into a project.
- Respect `prefers-reduced-motion` by default on any animated effect, not as an afterthought.

## Pitfalls

- Heavier animation dependencies (Framer Motion, GSAP, three.js) add real bundle weight once many effects are used together.
- Text and motion effects can create accessibility issues for screen readers if not paired with a static fallback.
- Physics-driven interactions sometimes have poor affordance — users may not realize they're interactive at all.
- Running many simultaneous effects can hurt performance on low-power devices; budget how many run at once.

## Related topics

- [Components](components.md)
- [Typography and styles](typography-and-styles.md)
- [CTA](cta.md)
