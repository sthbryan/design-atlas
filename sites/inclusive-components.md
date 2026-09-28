---
title: Inclusive Components
description: Heydon Pickering's 11 in-depth posts on making common components accessible, each ending in a checklist.
url: https://inclusive-components.design
type: guidelines
formats: guidelines · book
topics: [components, ux-patterns, documentation]
verdict: very-useful
agent: []
pricing: freemium
licence: The blog is free. An updated ebook costs €18 (ePub, PDF and Kindle) and adds a bonus chapter on modal dialogs. Smashing Magazine sells a print edition. No licence is stated for the articles, and the demo repo on GitHub (`Heydon/Inclusive-Components`) has no licence file, so treat both as all rights reserved.
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [ui-playbook, component-gallery, design-system-checklist, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [ux-patterns](../topics/ux-patterns.md), [documentation](../topics/documentation.md)

# Inclusive Components

## What it is

Inclusive Components is Heydon Pickering's "blog trying to be a pattern library". Pickering is the author of Inclusive Design Patterns and has worked as Smashing Magazine's accessibility editor. It has 11 long posts published in 2017 and 2018: toggle buttons, a todo list, menus and menu buttons, tooltips and toggletips, a theme switcher, tabbed interfaces, collapsible sections, a content slider, notifications, data tables and cards. Each post runs to about 3,000 to 4,500 words. It starts from the naive version of a component, shows how it fails for screen-reader, keyboard, zoom or low-vision users, and works toward a sturdier version with small demos hosted on GitHub Pages. Each post ends with a short checklist.

## When to open it

- When you are building one of those 11 components and want to understand why its accessible version is built the way it is, not just copy ARIA attributes.
- When deciding between similar patterns, such as a toggletip versus a tooltip, a menu versus a list of links, or tabs versus a table of contents with same-page links.
- When a pull request reaches for ARIA roles and you suspect plain HTML would do the job better.

## Most useful

- **Menus and menu buttons**: explains why most navigation doesn't need the ARIA `menu` role.
- **Toggle buttons**: `aria-pressed` versus a checkbox or switch, and why the label shouldn't change when the state does.
- **Cards**: making a whole card clickable without wrapping everything in one link, using the "redundant click" and pseudo-content techniques.
- **Data tables**: optional sortable columns, and a responsive table built by letting its wrapper scroll sideways, focusable and labelled only when it actually overflows.
- **Tooltips and toggletips**: choosing between label and description, why `title` attributes and interactive content inside tips are ruled out.
- **The checklist at the end of each post** turns the argument into rules you can review against.

## Using it with agents

There is no llms.txt, API or code package. The pages are simple server-rendered HTML (the Ghost blogging platform), so an agent can read a single post from its URL. Ask it to follow that post's checklist rather than paste the demo code, since no licence is stated. The posts explain reasoning well, which makes them good for having an agent justify or review an accessibility choice.

## Watch out for

- It was last updated in 2018. Some details are dated, such as WCAG 2.0 references and older screen-reader behaviour. Check the current WAI-ARIA Authoring Practices before shipping.
- The demos are plain HTML, CSS and JavaScript, not framework components, so you will need to adapt them.
- Only 11 components are covered. There is no modal dialog, combobox or date picker on the free site.

## Reusable ideas

- Start from the broken, obvious version of a component and fix it step by step, so readers see why each attribute is there.
- End every component doc with a short checklist.
- Prefer native elements and minimal ARIA, and only add roles that change what assistive technology announces.
- Keep a toggle's label fixed and let only its state change.

## Related

[UI Playbook](ui-playbook.md), [The Component Gallery](component-gallery.md), [Design System Checklist](design-system-checklist.md), [shadcn/ui](shadcn-ui.md)
