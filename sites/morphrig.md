[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [icons](../topics/icons.md), [documentation](../topics/documentation.md)

# Morphrig

- **URL:** https://morphrig.dev
- **Type:** documentation (interactive manual)
- **Topics:** motion, icons, documentation
- **Pricing / licence:** Free to read / Not stated. The site says it is not open source and nothing is published to npm
- **Reviewed:** 2026-09-25

## What it is

Morphrig is an interactive manual by Sanyam that explains how SVG icon morphing works, such as a hamburger turning into a cross. It is written as ten parts plus an appendix. It covers the `d` attribute and path commands, the correspondence problem (which stroke should become which), what to do when two icons have different numbers of strokes, and why a straight tween shrinks a rotating shape. It ends with a guide to building your own system. The figures are scrubbable, and the site says every number on it comes from the compiler the manual describes, not from estimates. The colophon credits Benji Taylor's post on morphing icons with Claude as the starting point.

## When to open it

Read it before you build or commission animated icon toggles (menu/close, play/pause, sun/moon), or when a morph looks wrong halfway through and you need to know why. It is a reference for understanding, not a library to install.

## Most useful

- **The core argument**: author the stroke-to-stroke pairing once, as data (a "rig" of slots), instead of solving it on each visitor's device. Every frame is then known in advance and can compile to plain CSS keyframes
- **Browser support table, measured**: according to the site, Safari 26.3 has no CSS or WAAPI support for animating `d`, so compiled CSS shows a static icon there. SMIL works in both Chromium and Safari, and Firefox is unverified
- **Rotation**: polar sampling keeps a spinning shape at full length, where a two-keyframe tween shrinks it at the midpoint
- **Honest failure rates**: in the site's 300-pair sweep of Lucide, only 7.7% of arbitrary icon pairs were worth morphing
- Appendix chapters on importing Lucide or Tabler icons, fixing bad pairings, a vanilla driver, a React component, scrubbing with gestures, and reduced motion

## Using it with agents

The site publishes `/llms.txt` with a chapter map and key facts, plus `/llms-full.txt` with the whole manual as prose (about 85 kB). Give an agent the full file before asking it to build an icon morph, so it authors slot pairings and picks a delivery method (compiled CSS, SMIL or a JS driver) on purpose rather than guessing at interpolation.

## Watch out for

- The compiler, driver and React component it describes are not released. You get the method, not the code
- No reuse licence is stated for the text or figures, so summarise it and link to it; do not copy it
- The browser findings are dated to specific versions (Safari 26.3). Test again before you rely on them

## Reusable ideas

- Treat animation correspondence as reviewable data you commit, not a runtime guess
- When two icons have different stroke counts, collapse the extra strokes to a point rather than letting them appear from nothing
- Check at build time whether a pair is worth morphing, and fall back to a crossfade when it is not
- Pick the cheapest delivery that works: static CSS for toggles, a small driver only for interactive scrubbing
- Publish the measurements behind every claim in your docs

## Related

[Animated Icons](animated-icons.md), [useAnimations](useanimations.md), [Iconoir](iconoir.md), [Torph](torph.md)
