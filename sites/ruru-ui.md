---
title: Ruru UI
description: Small Radix and Tailwind v3 library with its own CLI; its author says it is no longer maintained.
url: https://ui.ruru.build
type: component-library
formats: component library with its own CLI (unmaintained)
topics: [components, motion]
verdict: niche
agent: [cli]
pricing: free
licence: Free. MIT (repo `ruru-m07/ruru-ui`, about 90 GitHub stars at review)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: stale
related: [shadcn-ui, radix, headless-ui, base-cn]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md)

# Ruru UI

## What it is

Ruru UI is a small React and Tailwind CSS component library by the developer known on GitHub as ruru-m07. It follows the shadcn model: its own CLI, `ruru-ui-cli`, runs an `init` wizard that writes a `ruru.json` config (TypeScript, global CSS path, Tailwind config, CSS variables, prefix, import aliases, React Server Components), and an `add` command then copies components into your project. The docs list 17 components: Accordion, Avatar, Badge, Button, Checkbox, Dropzone, Form, Input, Label, Modal, Select, Spinner, Stack, Switch, Tabs, Textarea and Tooltip. There are also hooks, a dark-mode guide, a theme page and three authentication blocks (login, register, forgot password). The interactive parts wrap Radix primitives and use Framer Motion for animation, all under a `RuruProvider` that holds global settings. The stack is React 18 and Tailwind CSS v3 (`tailwind.config.js`, `tailwindcss-animate`).

## When to open it

Open it mainly as a reference for how a solo developer structured a shadcn-style library with a provider and a CLI. As of 2026 it is not a good choice for new production work.

## Most useful

- **Provider-level animation switch**: a single setting in `RuruProvider` turns component animations on or off across the app
- **CLI wizard** that records aliases, prefix and RSC choices in one config file
- **Dropzone** and **Stack**, two pieces that stock shadcn/ui does not include
- **Auth blocks**: three simple login, sign-up and password-reset layouts

## Using it with agents

There is no `llms.txt` (404 at review), no MCP server and no shadcn-compatible registry. The CLI reads its own component index at `/registry/index.json`. An agent can run `npx ruru-ui-cli@latest init` and `add`, or read the component source on GitHub. Models are unlikely to know the library, so give them the docs page for each component.

## Watch out for

- The author added a notice to the README in August 2025 saying they stopped maintaining the project some time ago
- The CLI was last published in September 2024 and the package in October 2024. Since the notice, the only change has been a January 2026 dependency patch for a React Server Components vulnerability
- Built for Tailwind v3 and React 18, so expect friction in Tailwind v4 or React 19 projects
- Some docs pages still carry unfinished placeholder text, and the theme page did not render without JavaScript

## Reusable ideas

- Put a global "animations on or off" switch in the app provider so users and tests can disable motion in one place
- Have the setup wizard save every path and alias to one config file that later commands read
- Ship a few auth screens as blocks, since they are the first pages most apps need

## Related

[shadcn/ui](shadcn-ui.md), [Radix](radix.md), [Headless UI](headless-ui.md), [Base CN](base-cn.md)
