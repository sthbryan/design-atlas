---
title: DesEngs
description: Dated feed of about 106 design-engineering links (tools, libraries, essays, jobs) plus site, minimal-site and designer galleries; MIT source.
url: https://desengs.com
type: directory
formats: directory · resource feed · website gallery · open-source Astro site
topics: [inspiration, components, ux-patterns]
verdict: useful
agent: []
pricing: free
licence: Free, no account. The site's source and data files are MIT-licensed on GitHub (remvze/desengs); linked resources keep their own licences and terms. No sponsors or paid listings seen at review
licence_class: open-source-permissive
reviewed: 2026-09-25
status: active
related: [designeer, design-spells, emil-kowalski-skills, jakub-krehel-skills, minimal-gallery]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [components](../topics/components.md), [ux-patterns](../topics/ux-patterns.md)

# DesEngs

## What it is

DesEngs is a hand-kept list of resources for design engineers, curated by the developer who goes by MAZE (remvze on GitHub and X). The home page is a single dated feed of links, newest first, with a one-line note on each, and every entry is tagged with a verb-style format: Read, Watch, Listen, Browse, Use, Build, Learn, Join, Follow or Apply. Three side sections sit beside the feed: Inspiration (full websites), Minimum (very minimal personal and studio sites) and DSGNRS (designers to follow). There is also a Substack newsletter. The site is an Astro 5 build whose source is public under MIT.

## When to open it

- When you want a short, recent list of what design engineers are sharing, such as new motion components, sound libraries and agent skills, rather than a huge catalogue.
- When you want essays on the role itself (what a design engineer does, taste, when not to animate) gathered in one place.
- When you want minimal portfolio references, or a list of design-engineering job openings.

## Most useful

- **The feed**: 106 entries at review, dated 4 March to 20 September 2026. By format: Build 30, Read 26, Browse 20, Use 14, Learn 6, Apply 4, Follow 4, Watch 1, Join 1. Filters toggle formats, and a "Random Resource" button picks one.
- **Build entries** are mostly small React libraries and registries (toasts, command menus, number animation, dot-matrix loaders, sound and haptics kits), each linking to its own site.
- **Inspiration**: 95 websites at review, with Serendipity, Portfolios (about 49) and OG Images (about 41) tabs.
- **Minimum**: 184 minimal sites at review. **DSGNRS**: 72 designers at review.

## Using it with agents

No llms.txt, MCP or API. The data does live in plain TypeScript files in the public repo (`src/data/resources.ts`, `websites.ts`, `minimum.ts`, `designers.ts`), each entry with a title, URL, description, date and format. An agent can read those files straight from GitHub instead of scraping the page, then fetch the linked library's own docs before installing anything.

## Watch out for

- It's a link list with a note per entry. There are no previews, ratings or licence details, so check each linked project yourself.
- The Apply entries are job posts with no expiry dates shown, so older ones may have closed.
- Additions go through GitHub issues, not pull requests, so the lists reflect one person's picks and pace.
- The feed began in March 2026, so it misses older classics unless they were added later.

## Reusable ideas

- Tagging links by what you do with them (read, build, follow, apply) rather than by topic tells a visitor at a glance whether an entry is an article, a library or a person.
- Keeping the directory's data in typed files in a public repo makes the list easy to audit, fork and read by machine.
- A dated feed with the newest entry first shows at a glance whether the list is still being kept up.

## Related

[Designeer](designeer.md), [Design Spells](design-spells.md), [Emil Kowalski's skills](emil-kowalski-skills.md), [Jakub Krehel's skills](jakub-krehel-skills.md), [Minimal Gallery](minimal-gallery.md)
