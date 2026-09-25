[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md)

# Motion Primitives

- **URL:** https://motion-primitives.com
- **Type:** animated component library
- **Topics:** motion, components, typography and styles
- **Pricing / licence:** free, open-source core with frequent updates; a "Pro" tier at pro.motion-primitives.com
- **Reviewed:** 2026-09-25

## What it is

A kit of animated interface pieces built on the Motion library and Tailwind CSS, focused on text effects and micro-interactions (for example a "Text Scramble" component or animated date pickers).

## When to open it

When you need one specific text or transition effect (scramble, reveal, an animated selector) and would rather drop in an isolated, installable piece than adopt a full component library.

## Most useful

Components grouped by effect type, with a stated focus on quality over quantity. Installed via its own CLI (not shadcn's): `npx motion-primitives@latest add <component>` (e.g. `text-effect`), or manual copy of the code from the component's page.

## Using it with agents

No MCP server, `llms.txt`, or agent-specific CLI was found for this project during this review; the AI-integration angle is indirect, via the sibling product prompt-kit.com that the site mentions.

## Watch out for

It depends on Motion as its animation foundation; the site itself notes it doesn't yet offer a "CSS/Tailwind only" version of every component. Before installing via CLI you need Tailwind CSS, Motion, Lucide React and a `cn()` helper in `lib/utils.ts` already set up.

## Reusable ideas

- Isolate text effects (scramble, reveal) as standalone components reusable across projects
- Offer a dedicated CLI with manual install as a fallback, so you're not locked into one path
- Explicitly split the free catalog from the "Pro" one by domain (public site vs. app)

## Related

[aceternity-ui](aceternity-ui.md), [magic-ui](magic-ui.md), [css-text-effects](css-text-effects.md), [animejs](animejs.md), [kinetics](kinetics.md)
