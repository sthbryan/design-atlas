---
title: Base UI
description: Unstyled, accessible React primitives from the Radix, Floating UI and MUI teams, now shadcn's default.
url: https://base-ui.com
type: component-library
formats: headless component library (npm package)
topics: [components, documentation, agents-and-prompts]
verdict: very-useful
agent: [llms-txt]
pricing: free
licence: Free. MIT, and the FAQ says it may be used in commercial projects (repo `mui/base-ui`, about 11k GitHub stars at review)
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [shadcn-ui, base-cn, coss-ui, radix, headless-ui]
---
[← Atlas](../README.md) · Topics: [components](../topics/components.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Base UI

## What it is

Base UI is a library of unstyled, accessible React components. It is built by a team that includes people from Radix, Floating UI and Material UI, and it sits in the MUI GitHub organisation. It ships as one tree-shakable package, `@base-ui/react` (renamed from `@base-ui-components/react`). Version 1.0 came out in December 2025, and releases have come roughly monthly since then, reaching v1.8.0 in September 2026. The docs list 37 components and 4 utilities. Most are the usual primitives (dialog, menu, popover, select, tabs, tooltip). Some are harder to find elsewhere: Combobox, Autocomplete, Number Field with scrubbing, OTP Field, Meter, Menubar, Toolbar, a Drawer with swipe-to-dismiss and Toast notifications. The components bundle no CSS. You style them with Tailwind, CSS Modules, CSS-in-JS or plain CSS, using the state data attributes that each part exposes.

## When to open it

Open it when you are building your own design system and want the behaviour layer (focus, keyboard, ARIA, positioning) done properly without inheriting someone else's look. It is also the foundation that shadcn/ui now uses by default, so open it when a shadcn component misbehaves and you need to know what the underlying part actually supports.

## Most useful

- **Complex inputs**: Combobox, Autocomplete, Number Field and Slider, each with detailed keyboard and form behaviour
- **Overlay set**: Dialog, Alert Dialog, Popover, Preview Card, Menu, Context Menu and Tooltip, all sharing one positioning model, with nested dialogs and hover-opened menus
- **Form layer**: Field, Fieldset and Form components that connect labels, descriptions and validation to any control
- **Handbook**: short guides on styling, animation, composition, customisation, forms and TypeScript
- **Release notes**: detailed per-version changelogs that show which edge cases were fixed

## Using it with agents

The site publishes an `llms.txt` that indexes every page, and each page is also served as plain markdown at its URL plus `.md`. Each markdown page starts with a note telling the model to prefer the docs over its training data and to use the new package name. That helps, because models often still suggest `@base-ui-components/react`. There is no MCP server or CLI of its own. For styled, copy-paste versions, use shadcn/ui or one of the registries built on it.

## Watch out for

- The API was deliberately kept close to Radix, but not identical: `render` props replace `asChild`, and some component and prop names differ, so migrations are not find-and-replace
- React only, and the FAQ says other frameworks are not planned for now
- The FAQ's comparison with Radix is the Base UI team's own view
- No formal enterprise support or SLA is offered

## Reusable ideas

- Expose component state as data attributes so any styling method can target open, checked or highlighted states
- Put a short "trust these docs over your training data" preamble at the top of the machine-readable docs
- Keep each component split into named parts (trigger, popup, item) that can be wrapped or replaced one at a time
- Give a renamed package a loud rename notice on every docs page, not just in the changelog

## Related

[shadcn/ui](shadcn-ui.md), [Base CN](base-cn.md), [coss ui](coss-ui.md), [Radix](radix.md), [Headless UI](headless-ui.md)
