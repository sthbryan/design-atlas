[← Atlas](../README.md)

# UX patterns

Principles, guidelines, checklists and pattern libraries for how interfaces should behave: component states, accessibility, interaction details and evidence for design decisions.

## Start here

- [Laws of UX](../sites/laws-of-ux.md) — 30 named psychology principles with takeaways and origins, served as `llms.txt` and markdown for agents.
- [Inclusive Components](../sites/inclusive-components.md) — Heydon Pickering's in-depth posts on building common components accessibly, each ending in a checklist.
- [UI Playbook](../sites/ui-playbook.md) — nine component "plays" listing the states, traps and ARIA rules each one needs.
- [Detail (detail.design)](../sites/detail-design.md) — about 130 curated interface details across interaction, copy, accessibility and motion, with an agent skill for polish passes.
- [User Interface Wiki](../sites/user-interface-wiki.md) — demo-rich articles on motion, sound and type, packaged as a 152-rule agent skill with citable rule IDs.

## All sources

- [Design System Checklist](../sites/design-system-checklist.md) — 230 items across design language, foundations, 29 core components and maintenance, with accessibility items inside each component and progress shared as a link.
- [Detail (detail.design)](../sites/detail-design.md) — short recordings of small decisions that make software feel considered, such as labels that focus their input or shortcut hints shown while a modifier is held.
- [Devouring Details](../sites/devouring-details.md) — a paid interactive manual on why interactions feel right (inferring intent, choreography, contained gestures), with 23 chapters and downloadable React prototypes.
- [editorcn](../sites/editorcn.md) — Tiptap toolbar and block editors plus a read-only renderer, a worked example of pairing short-form and long-form editing on one format.
- [Good UI](../sites/good-ui.md) — 141 patterns grouped from 642 shared A/B tests, with statistical power per test and losing results published; effect sizes are paid.
- [Impeccable](../sites/impeccable.md) — an Apache-2.0 design skill whose catalogue names 67 AI tells, with a deterministic detector that can fail a CI build.
- [Inclusive Components](../sites/inclusive-components.md) — 11 long posts on toggles, menus, tooltips, tabs, tables and cards that start from the naive version and fix it step by step.
- [interior.dev](../sites/interior-dev.md) — 54 MIT micro-interactions that handle the edge cases: no layout shift, keyboard as a full second path, cancellable gestures and reduced motion.
- [Laws of UX](../sites/laws-of-ux.md) — Fitts's, Hick's and Jakob's laws, the Doherty threshold, the Gestalt laws and more, each with examples and research origins; CC BY-NC-ND.
- [The Shape of AI](../sites/shape-of-ai.md) — 57 patterns specific to AI features, from getting a first prompt started to human oversight and trust.
- [UI Playbook](../sites/ui-playbook.md) — one page per component on purpose, states, responsive behaviour, best practices, implementation traps and WAI-ARIA requirements; no longer updated.
- [UI Skills](../sites/ui-skills.md) — a directory of 306 agent skills, including accessibility and interaction fixes and `baseline-ui` rules written as MUST, SHOULD and NEVER lines.
- [User Interface Wiki](../sites/user-interface-wiki.md) — nine articles with 37 interactive demos, and rules with prefixed IDs and priorities that an agent reports as `file:line` findings.

## Patterns worth reusing

- Document every component under the same headings (purpose, states, responsive, implementation traps, accessibility) so missing pieces are easy to spot (UI Playbook).
- Treat loading as a state that must not change a component's size, and lock a button's width before its label changes (UI Playbook, interior.dev).
- Start from the obvious, broken version of a component, show how it fails for keyboard, screen-reader and zoom users, and fix it step by step; prefer native elements and add ARIA only when it changes what is announced (Inclusive Components).
- Keep a toggle's label fixed and let only its state change (Inclusive Components).
- Put accessibility items inside each component's checklist rather than in a separate section, and give every item a stable ID (Design System Checklist).
- Give each rule a short prefixed ID and a priority so reviews can cite it and automated passes fix timing and physics before cosmetics (User Interface Wiki); give recurring problems short names people and agents can share (Impeccable).
- Pair every rule with a wrong and a right example, and put a live demo next to any claim about motion (User Interface Wiki).
- Tie design decisions to a named, sourced principle (Laws of UX) or to a pattern's test record (Good UI), so reviews argue about evidence rather than taste.
- Split auditing from implementing: one pass writes a self-contained plan, another applies it (UI Skills).
- Guard destructive actions with hold-to-confirm instead of a modal, and delay only the first tooltip in a group (interior.dev).
- Remove motion from high-frequency interactions, and infer intent from pointer direction and speed before reacting (Devouring Details).
- Use the wording the host platform uses for common actions, and test layouts against long translated strings (Detail).

## Pitfalls

- Several classics are dated: Inclusive Components was last updated in 2018 with WCAG 2.0 references, and UI Playbook's examples use React 16 and Reach UI. Take the reasoning and checklists, and check the current WAI-ARIA Authoring Practices.
- Text licences limit reuse: Laws of UX is CC BY-NC-ND, The Shape of AI is CC BY-NC-SA, Good UI licenses its data per user, and Inclusive Components and Design System Checklist state no licence. Write your own takeaways instead of copying.
- Principles are not patterns: Laws of UX says why, not what to build, and some entries are loose heuristics rather than tested findings.
- Rule sets are opinionated and assume a stack: User Interface Wiki is built around React and Motion, `baseline-ui` assumes Tailwind and Base UI or Radix, and Impeccable's findings are prompts to look again, not verdicts. Record deliberate exceptions.
- Coverage is narrow: nine plays, 11 components, 29 basic components, with no data tables, comboboxes or date pickers in several of them.
- The deepest material is often paid or video-only: Devouring Details sits behind a login, Good UI's effect sizes need a plan, and most Detail entries are a recording and one sentence, with no code.

## Related topics

- [Components](components.md)
- [Documentation](documentation.md)
- [Motion](motion.md)
- [AI interfaces](ai-interfaces.md)
- [CTA](cta.md)
- [Agents and prompts](agents-and-prompts.md)
