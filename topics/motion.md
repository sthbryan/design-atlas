[← Atlas](../README.md)

# Motion

Animation libraries and motion patterns for interfaces — from full JS animation engines to copy-paste CSS effects.

## Start here

- [Kinetics](../sites/kinetics.md) — spring-physics interaction effects offered as CSS, React and AI-prompt formats.
- [React Bits](../sites/reactbits.md) — hundreds of animated pieces (GSAP, three.js, Framer Motion) with an `llms.txt` index.
- [Anime.js](../sites/animejs.md) — a mature, general-purpose JS animation engine with a clear API.
- [DialKit](../sites/dialkit.md) — an MIT live control panel for tuning springs, easing and timelines in the real component, with an agent-facing guide.
- [60fps](../sites/60fps.md) — about 2,080 recorded interactions from shipped apps, with storyboards and a paid MCP that returns motion breakdowns.

## All sources

- [60fps](../sites/60fps.md) — interaction recordings filtered by gesture, pattern, effect and element; the MCP returns trigger/move/settle breakdowns and SwiftUI code.
- [Aceternity UI](../sites/aceternity-ui.md) — animated backgrounds, bento grids and shaders for landing pages.
- [Animated Icons](../sites/animated-icons.md) — 4,000+ recolourable Lottie icons with hover, click or loop playback.
- [Anime.js](../sites/animejs.md) — fine-grained control over complex animation sequences and SVG effects.
- [Circle Loaders](../sites/circle-loaders.md) — 24 animated SVG loading spinners.
- [Collect UI](../sites/collect-ui.md) — a feed where much of the content is short motion clips, filed under UI Interaction, Motion and Web Animation.
- [CSS Text Effects](../sites/css-text-effects.md) — 90 animated text effects in pure CSS.
- [Design Spells](../sites/design-spells.md) — 337 recorded micro-interactions, celebrations and easter eggs from real apps.
- [DialKit](../sites/dialkit.md) — live sliders, a spring and Bezier editor and a timeline dock for React, Vue, Svelte, Solid and plain JS.
- [Kinetics](../sites/kinetics.md) — spring-physics-driven interaction effects with a live parameter editor.
- [Libraries.dev: Thinking orbs](../sites/libraries-dev-orbs.md) — canvas-drawn AI waiting states (searching, composing, listening) with reduced-motion and off-screen pausing built in.
- [Liquid Glass](../sites/liquid-glass.md) — real-time refractive DOM distortion effects.
- [loadmo.re](../sites/loadmore.md) — experimental mobile sites previewed as screen recordings, tagged by technique such as tactile or camera input.
- [Magic UI](../sites/magic-ui.md) — 150+ animated components and effects for React/Tailwind.
- [MicroKit](../sites/microkit.md) — 49 React microinteractions with polished transitions.
- [Motion Primitives](../sites/motion-primitives.md) — isolated, installable motion and text-effect components.
- [OpenMotion](../sites/openmotion.md) — a desktop app that drives your Claude Code or Codex CLI to turn a brief into editable launch videos.
- [Rare UI](../sites/rareui.md) — spring-animated sidebars, rolling OTP input, odometer counters and gooey pickers built with Motion.
- [React Bits](../sites/reactbits.md) — decorative WebGL backgrounds, text animations and physics-driven micro-interactions.
- [Scrolltide](../sites/scrolltide.md) — cinematic scroll-driven motion templates and shaders paired with prompts.
- [useAnimations](../sites/useanimations.md) — 87 Feather-style animated icons that play forward and back for two-state controls.

## Patterns worth reusing

- Offer each effect in multiple formats (pure CSS, framework code, AI prompt) so consumers pick whichever fits their stack.
- Isolate "expensive" effects (shaders, particles, WebGL) into separate components loaded only where they pay off.
- Use spring/physics-based easing instead of fixed-duration curves for feedback that feels naturally weighted.
- Ship a live parameter editor (stiffness, damping, duration) so an effect can be tuned before it's copied into a project.
- Respect `prefers-reduced-motion` by default on any animated effect, not as an afterthought.
- Describe every interaction in four beats (trigger, starting state, movement, settle) before writing animation code (60fps).
- Tune springs by perceived duration and bounce first, drop to stiffness and damping only when needed, and keep a replay button beside the element (DialKit).
- Give AI waiting states a distinct animation per activity, and pause canvas animations when they're off-screen or the tab is hidden (Libraries.dev: Thinking orbs).
- Spend the animation budget on moments that matter (streaks, rewards, success states) rather than on every transition (60fps).
- Write motion briefs scene by scene, with a duration, entry direction and easing character for each (OpenMotion).

## Pitfalls

- Heavier animation dependencies (Framer Motion, GSAP, three.js) add real bundle weight once many effects are used together.
- Text and motion effects can create accessibility issues for screen readers if not paired with a static fallback.
- Physics-driven interactions sometimes have poor affordance — users may not realize they're interactive at all.
- Running many simultaneous effects can hurt performance on low-power devices; budget how many run at once.
- Recordings show behaviour, not code: timing still has to be worked out, and 60fps's generated code targets SwiftUI, so web teams must translate springs to CSS or Motion.
- Live tuning panels are development tools; the values you settle on still have to be copied back into production code (DialKit).
- Lottie-based icons load `lottie-web` at runtime, which is heavy when a CSS or SVG transition would do (useAnimations).

## Related topics

- [Components](components.md)
- [Typography and styles](typography-and-styles.md)
- [CTA](cta.md)
- [Icons](icons.md)
- [Inspiration](inspiration.md)
