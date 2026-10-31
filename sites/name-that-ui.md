---
title: NameThatUI
description: A visual dictionary of UI elements that turns a bad description into the right name, the API symbol and an agent prompt.
url: https://namethatui.com
type: directory
formats: visual dictionary · pair and triple comparisons · search · llms.txt · search API
topics: [ux-patterns, agents-and-prompts]
verdict: useful
agent: [llms-txt, api, prompts]
pricing: free
licence: Not stated at review. The entries are reference text; reuse terms for the copy are not published on the page.
licence_class: not-stated
reviewed: 2026-10-29
status: active
related: [ui-patterns, laws-of-ux, good-ui]
---
[← Atlas](../site/home.md) · Topics: [ux-patterns](../topics/ux-patterns.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# NameThatUI

## What it is

NameThatUI is a dictionary of interface elements that people can see but cannot name. You describe the thing badly — "the dot you drag to change the volume", "the gray text inside the box that disappears when you type" — and it returns the canonical name, the alternate names, the phrasings people actually use, the API symbol for the relevant platform, and a prompt you can paste into a coding agent. Entries cover macOS and the web, and the site leans on comparison pages that separate three elements people confuse, such as submenu versus cascader versus drill-down.

## When to open it

- A design review or a bug report stalls because nobody knows what the element is called.
- You want the exact symbol to hand an agent — `NSPredicateEditor`, `aria-haspopup`, `background-clip: text` — rather than a description it has to interpret.
- You need to tell apart three near-identical patterns, and a screenshot of each next to a definition settles it faster than prose.

## Most useful

- **Entries with a live miniature**: each card renders the element in place — a rule editor, a status dot, a stepper, a timeline — above its name and API symbol. The demo is the definition.
- **Comparison entries**: the site's strongest device. Submenu versus cascader versus drill-down, hover highlight versus hover lift versus cursor spotlight, pie chart versus donut chart, typewriter versus rotating words versus text shimmer. Three examples, one line each.
- **Folk language**: every entry records how people describe the element, which is what makes the search work and what makes a prompt sound like something a person would write.
- **Filters**: a small query builder with all/any conditions over name and tag, plus `⌘K` search and a recently added list.
- **Word definitions**: a double press on any word on the site gives a plain-English definition, a thoughtful touch for a page full of jargon.

## Using it with agents

Three channels, all public. `https://namethatui.com/llms.txt` indexes every entry with a one-line definition, and `llms-full.txt` carries the entries inline. `POST https://namethatui.com/api/search` takes a JSON description, in any language, and returns matches, which is the useful one when a user points at something and cannot name it. Each entry also ships a paste-ready prompt, so an agent can go from a vague description to a component request in one step.

## Watch out for

- Coverage skews to macOS and web UI. Native mobile elements, data-dense enterprise patterns and anything platform-specific outside those two are thin at review.
- The API symbol is platform-dependent: the same visual control has different names in AppKit, SwiftUI, HTML and ARIA, so quote the one matching the codebase.
- An entry names an element; it does not prescribe one. A name is not an argument for adding a cascader.
- The page carries an advertisement for the maker's paid app-icon service. It is clearly marked but it takes the top slot.
- Reuse terms for the entry text are not stated, so quote short definitions rather than copying entries into a design system.

## Reusable ideas

- Teach a pattern by rendering it, naming it and then giving the code symbol; three layers, one card.
- Record the wrong names people use. The folk phrasings are the search index and the empathy.
- Write comparison pages for the pairs that get confused, with a one-line distinction each.
- Publish the dictionary as `llms.txt` and a search endpoint, so the same content that helps a designer answers an agent.

## Related

[UI-Patterns.com](ui-patterns.md), [Laws of UX](laws-of-ux.md), [Good UI](good-ui.md)
