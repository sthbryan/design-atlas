---
title: Laws of UX
description: 30 psychology principles with takeaways and origins, served as llms.txt and markdown; CC BY-NC-ND.
url: https://lawsofux.com
type: guidelines
formats: guidelines · reference
topics: [ux-patterns, documentation, agents-and-prompts]
verdict: very-useful
agent: [llms-txt]
pricing: free
licence: "Free to read. The Info page puts all site content, including the free 11×17\" posters, under CC BY-NC-ND 4.0: attribution is required, and commercial use and derivatives are not allowed. The site's llms.txt calls the project \"open-source\", but that licence is more restrictive than most open-source licences. Paid extras: a large index poster, the O'Reilly book (2nd edition) and a 54-card deck made with Pip Decks."
licence_class: cc-noncommercial
reviewed: 2026-09-25
status: active
related: [user-interface-wiki, good-ui, ui-playbook, component-gallery]
---
[← Atlas](../README.md) · Topics: [ux-patterns](../topics/ux-patterns.md), [documentation](../topics/documentation.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# Laws of UX

## What it is

Laws of UX is Jon Yablonski's collection of psychology principles, heuristics and biases that apply to interface design. It has 30 entries, including Fitts's, Hick's, Jakob's, Miller's, Tesler's and Postel's laws, the Doherty threshold, the Gestalt grouping laws (common region, proximity, similarity, uniform connectedness, Prägnanz), the peak-end rule, the Zeigarnik and Von Restorff effects, and cognitive load. Each entry has a one-line definition, a few takeaways, examples from real products, its origin in research and further reading. The site is available in English, Spanish, French, Arabic and Persian, and it has a dark mode.

## When to open it

- When you need to explain a design decision to stakeholders with a named, citable principle, such as fewer choices (Hick's law) or familiar patterns (Jakob's law).
- When reviewing a flow for cognitive load: chunking, working memory, choice overload.
- When sizing and placing targets (Fitts's law) or setting a budget for response times (the Doherty threshold's 400 ms).
- As shared vocabulary for a design review or a course.

## Most useful

- **Takeaways** on each page are short and practical, and turn the principle into a design rule.
- **Origins** sections name the original researchers and year, which helps when someone asks for evidence.
- **Examples** tie each law to a familiar product, such as a search page kept to one decision or onboarding that reveals features gradually.
- **Newer entries** such as Paradox of the Active User, Selective Attention and Cognitive Bias go beyond the classic list.

## Using it with agents

The site is unusually agent-friendly. `/llms.txt` lists all 30 laws with one-line summaries and tells agents when to cite them. Every page URL also returns clean markdown when requested with `Accept: text/markdown`. `/index.md` gives the homepage as markdown. You can point an agent at llms.txt and ask it to name the law behind each suggestion in a UX review. There is no MCP or API.

## Watch out for

- The ND and NC terms matter: you can quote and link with attribution, but you may not republish edited versions or use the content in commercial products. Write your own takeaways instead of copying these into a paid product or an internal kit you sell.
- These are principles, not patterns. They tell you why, not what to build, so pair them with a pattern or component reference.
- Some "laws" are loose heuristics (Occam's razor, the Pareto principle, Parkinson's law) rather than tested findings about interfaces. Don't present them as hard data.

## Reusable ideas

- Give each principle the same structure: a definition, takeaways, examples and origins.
- Tell agents in `llms.txt` when a resource fits and when it doesn't.
- Serve markdown from the same URLs through content negotiation instead of keeping a separate docs site.
- Tie every design rule back to a named, sourced principle so reviews argue about evidence, not taste.

## Related

[User Interface Wiki](user-interface-wiki.md), [Good UI](good-ui.md), [UI Playbook](ui-playbook.md), [The Component Gallery](component-gallery.md)
