---
title: Headless UI
description: Tailwind Labs' small set of unstyled accessible React components, styled through data attributes.
url: https://headlessui.com
type: component-library
formats: headless component library (npm packages)
topics: [components, ux-patterns]
verdict: useful
agent: []
pricing: free
licence: Free. The code is MIT (repo `tailwindlabs/headlessui`, about 28.8k GitHub stars at review). The docs site footer says all rights are reserved by Tailwind Labs Inc
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [radix, base-ui, shadcn-ui, inclusive-components]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [ux-patterns](../topics/ux-patterns.md)

# Headless UI

## What it is

Headless UI is Tailwind Labs' set of unstyled, accessible components, designed to be styled with Tailwind utility classes. The React package, `@headlessui/react` (v2.2.10, April 2026), has 16 components. The general ones are Dropdown Menu, Disclosure, Dialog, Popover, Tabs and Transition. The form ones are Button, Checkbox, Combobox, Fieldset, Input, Listbox, Radio Group, Select, Switch and Textarea, and they share Field, Label and Description helpers. Version 2 added built-in anchor positioning for floating panels and exposes state as data attributes (`data-focus`, `data-hover`, `data-open`). You can style these with Tailwind's `data-*` variants, and render props still work. The Vue package is still on v1.7 (last released September 2024), which covers ten components and lacks newer form pieces such as Checkbox, Input, Fieldset and Select.

## When to open it

Open it for a Tailwind project that needs a handful of solid interactive widgets (menu, listbox, combobox, dialog, tabs) and you do not want a copy-paste registry or an extra design layer. It is also a clear reference for how a small, well-scoped headless API can look.

## Most useful

- **Combobox and Listbox**: searchable and plain custom selects with keyboard navigation and multiple selection, plus virtual scrolling for long Combobox lists
- **Transition**: enter and leave animations driven by data attributes, usable on its own
- **Dialog**: focus trapping, scroll locking and close-on-outside-click handled for you
- **Form set**: Field, Label and Description wire up IDs and ARIA links for native and custom controls
- **Anchor positioning** on Menu, Listbox, Combobox and Popover panels without extra libraries

## Using it with agents

There is no `llms.txt` (404 at review), no markdown versions of the docs pages, and no MCP server or CLI. Agents install the npm package and learn from the docs pages or the source on GitHub. Models know Headless UI well, but much of what they learned is v1 style (render props, `Menu.Button` dot notation), so ask for the v2 component names (`MenuButton`, `MenuItems`) and data-attribute styling.

## Watch out for

- Smaller scope than Radix or Base UI: no tooltip, toast, slider, accordion, context menu or navigation menu
- Vue users only get the older v1 API, and it has not been released since 2024
- Releases have slowed, with the last React release in April 2026
- Tailwind is the intended styling method; other CSS approaches work but get little documentation

## Reusable ideas

- Expose interaction state as data attributes so utility classes can style focus, hover and open states directly
- Group label, description and control in a Field wrapper that handles IDs and ARIA links automatically
- Build anchor positioning into floating components instead of making every user add a positioning library
- Keep a headless library small and deep rather than broad and shallow

## Related

[Radix](radix.md), [Base UI](base-ui.md), [shadcn/ui](shadcn-ui.md), [Inclusive Components](inclusive-components.md)
