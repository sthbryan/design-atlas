---
title: Fluid Functionalism
description: Spring-driven shadcn registry (Radix or Base UI) with proximity hover, AI chat parts and copy prompts.
url: https://www.fluidfunctionalism.com
type: component-library
formats: component library (shadcn registry)
topics: [components, motion, ai-interfaces]
verdict: very-useful
agent: [registry, prompts]
pricing: free
licence: free; MIT (copyright Micka Touillaud)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, prompt-kit, interior-dev, motion-primitives, rareui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [ai-interfaces](../topics/ai-interfaces.md)

# Fluid Functionalism

## What it is

A shadcn/ui registry by designer Micka Touillaud (@micka_design) built on the idea that every animation should explain a state change. It uses springs instead of fixed durations, a single hover highlight that glides to whichever item is nearest the cursor, and labels that gain weight on hover without pushing their neighbours. At review time the docs listed 26 components and 5 shared "system" pages (fluid hover, motion, scrollbars, sizes, surfaces); the registry index held about 70 items including hooks, libs, themes and 7 blocks. Components that wrap a primitive ship in both Radix and Base UI flavours with the same API. The GitHub repository was created in February 2026 and had about 920 stars.

## When to open it

When you like shadcn/ui's structure but want controls that feel softer and more responsive: menus, tabs, selects and sidebars whose highlight follows the pointer, or an AI chat surface whose thinking states move with purpose.

## Most useful

- **Everyday controls**: accordion, button, checkbox and radio groups, combobox, command menu, dialog, dropdown, select, slider, switch, table, tabs (plus a subtle variant) and tooltip.
- **AI interface pieces**: chat message, message input with suggested prompts, a thinking indicator, expandable thinking steps and an "ask user questions" component.
- **Motion system**: three named spring presets (fast, moderate, slow) shared across the library, so a toggle reversed mid-flight picks up where it was.
- **Proximity hover**: the nearest interactive row lights up before you click, which the docs frame as a preview of the action.
- **Live customiser**: a side panel previews light or dark, rounded or pill corners, several icon sets and the Radix or Base UI flavour.

## Using it with agents

Run `npx shadcn@latest registry add @fluid`, then `npx shadcn@latest add @fluid/<name>` (prefix `base/` for the Base UI flavour), or install straight from `https://www.fluidfunctionalism.com/r/<name>.json`. Each doc page has a "Copy prompt" button that, according to the README, bundles the install command, a usage snippet, props and the docs URL into a self-contained brief for an agent. The README also warns that the CLI stops at its first overwrite question in a non-interactive shell, so agents should pass `--overwrite`.

## Watch out for

- Components reuse stock shadcn file names (`button.tsx`, `dialog.tsx` and so on), so installing replaces your existing ones.
- Font-weight animations depend on Inter loaded as a variable font with both weight and optical-size axes.
- The icon switcher is a site preview only; installed components ship with Lucide, with an icon provider for swapping.
- No `llms.txt` was published at review time; the prompts live behind per-page buttons.

## Reusable ideas

- Use one travelling hover highlight per list instead of a background per row.
- Make labels heavier on hover while tightening optical size so the text does not shift.
- Standardise on a few named springs so interrupted animations reverse naturally.
- Merge the backgrounds of adjacent selected items to show they form a group.
- Expand an agent's thinking into collapsible steps that name what it read or searched.

## Related

[shadcn/ui](shadcn-ui.md), [Prompt Kit](prompt-kit.md), [interior.dev](interior-dev.md), [Motion Primitives](motion-primitives.md), [Rare UI](rareui.md)
