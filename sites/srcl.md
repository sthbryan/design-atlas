---
title: SRCL
description: Terminal-aesthetic React kit plus matching CLI framework, with llms.txt, AGENTS.md catalogue and porting skills.
url: https://www.sacred.computer
type: component-library
formats: component library · CLI framework · llms.txt
topics: [components, typography-and-styles, agents-and-prompts]
verdict: very-useful
agent: [llms-txt, skill]
pricing: free
licence: free; MIT (repo `internet-development/www-sacred`, © Internet Development Studio Company). The dozens of monospace fonts in the font switcher are third-party typefaces with their own licences and load from the studio's own storage bucket.
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [termcn, 8bitcn, departure-mono, ascii-studio]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [typography-and-styles](../topics/typography-and-styles.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# SRCL

## What it is

SRCL ("Sacred Computer") is a set of React components and styles for building web, desktop and static sites that look like DOS, mainframe and terminal software. It comes from Internet Development Studio and is maintained by @wwwjim. Everything sits on a strict monospace character grid. The site is one long kitchen-sink page with live examples, including an AS/400-style order screen. A second half, called Simulacrum, is a zero-dependency CLI framework in TypeScript with a Python mirror that renders the same primitives in a real terminal from a shared colour file. At review time it was at version 2.0.9, the catalogue listed 64 components, and the repo had about 1.6k stars.

## When to open it

- When you want a web app or landing page that feels like a terminal, with real monospace alignment rather than a green-on-black filter.
- When the same screen has to exist both in the browser and as a CLI, and you want them to match.

## Most useful

- **Layout and text**: action bar, grid, rows with ellipsis and space-between, indent, divider, sidebar layout and a debug grid for checking alignment.
- **Controls**: buttons, combo box, date picker, number range slider, radio groups, dropdown menus, popovers, modal stack and tooltips.
- **Data**: data table, simple table, tree view, code block, message viewer, and bar, block and matrix loaders.
- **Novelties**: an ASCII canvas, snake and platformer games, and a chessboard.
- **Theming**: font, appearance and mode switchers driven by `--theme-*`, `--ansi-*` and `--font-*` custom properties.

## Using it with agents

This is one of the most agent-friendly kits in its niche. `/llms.txt` indexes everything, `/llms-full.txt` bundles it in one fetch, and each component's raw source is served as `/llm/components/<Name>.tsx.txt`. `/llm/components/AGENTS.md` lists each component's props, theming tokens and CLI equivalent, and tests keep that list in sync with the code. Five skills under `/llm/skills/` cover porting a screen to a TypeScript or Python CLI, back to React, or into an unrelated React codebase, plus a fast type-checking skill.

## Watch out for

- There is no npm package or shadcn registry. You copy files, or clone the Next.js repo, and bring the CSS modules with them.
- Components are styled with CSS modules and theme variables, not Tailwind, so plan how they fit an existing design system.
- The MIT licence covers the code, not the bundled fonts. Check each typeface's licence (some are commercial or bitmap revivals) before shipping it.
- The kitchen-sink page is heavy (about 480 KB of HTML) and mixes in philosophical quotes and studio promotion.

## Reusable ideas

- Size everything in character cells so borders and tables line up at any font size.
- Publish every component's source and an AGENTS.md catalogue at stable URLs, with tests that fail when the docs drift.
- Share one palette file between the browser and CLI versions of the same interface.
- Offer a porting skill for dropping a component into a "hostile" codebase with different conventions.

## Related

[termcn](termcn.md), [8bitcn](8bitcn.md), [Departure Mono](departure-mono.md), [ASCII Studio](ascii-studio.md)
