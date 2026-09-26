[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [inspiration](../topics/inspiration.md)

# Bencho

- **URL:** https://bencho.dev
- **Type:** component library · tool
- **Topics:** components, motion, inspiration
- **Pricing / licence:** free; blocks MIT licensed (© 2026 Lorenzo Cabra), while the site, name, logo and bundled photos are not; paid sponsorship slots for companies
- **Reviewed:** 2026-09-25

## What it is

Bencho is a library of interactive React UI blocks by Lorenzo Cabra. Every block runs live on the page, and you can press, drag or tweak it before taking the code. The homepage listed 38 blocks at review time, each labelled with its gesture (hover, type, press, drag, select, swipe, slide): slide to confirm, pull to refresh, magnetic select, magnifying dock, radial menu, range dial, liquid toggle, slosh slider, tilt card, reorder list, command bar, a one-time-code field and more. The site has three areas: Blocks (the wall), Bench (a canvas workbench) and Finds (a hand-curated gallery of other people's interactions, credited to their authors on X).

## When to open it

When you need one interaction that feels physical and has been tuned by hand, and you want to adjust it by eye before committing. Use Finds as an inspiration board of recent micro-interactions from other designers.

## Most useful

- **Live parameter panel** on every block, with "Feel" (motion and physics) and "Form" (appearance) values, and code that matches whatever the panel is set to
- **Bench workspace**: place several copies of a block side by side with different values, compare them, and lock their positions; signing in saves your collection
- **Code pane** with a usage snippet showing the props as currently set, plus the CSS, with dependencies named (usually `framer-motion` and sometimes `lucide-react`)
- **Finds**: over a hundred credited interaction clips to browse for ideas

## Using it with agents

Each block's right-click menu includes "Copy prompt". The copied text is a complete brief for a coding agent: the MIT notice, where to create the file, what to install, the full TSX source and CSS, and instructions to map Bencho's CSS custom properties onto the project's own tokens rather than adding new globals. Placeholder images are flagged so the agent swaps in the project's own. There is no `llms.txt` (the path returns the app shell), registry or MCP server.

## Watch out for

- The Code pane points to a GitHub repository (`lorenzo04us/Bencho`) that returned 404 at review time, so "Copy prompt" is the reliable way to get the full source
- Photos inside some blocks are licensed only to the site, and one font it uses (Maison Neue) is not bundled
- Blocks read Bencho's design tokens; expect to map colours and fonts by hand
- React only; the site is a client-rendered app that needs JavaScript

## Reusable ideas

- Label each component with the gesture it answers to, so people know how to try it
- Put a live tuning panel next to the preview, and make the code match the panel
- Hand an agent a prompt that explains which parts need its judgement, not just source code
- Keep a credited gallery of others' work next to your own components

## Related

[interior.dev](interior-dev.md), [Kinetics](kinetics.md), [DialKit](dialkit.md), [Design Spells](design-spells.md), [60fps](60fps.md)
