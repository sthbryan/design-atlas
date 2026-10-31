---
title: Navbar Design
description: 29 hand-picked navbars sorted by 7 types and 9 styles, each with a screenshot, a short note and a link to the live site.
url: https://navbar.design
type: gallery
formats: navbar gallery · detail page per entry · llms.txt index · submissions
topics: [navigation, inspiration]
verdict: niche
agent: [llms-txt]
pricing: free
licence: "Not stated. The footer reads © navbar.design and credits A Happy Pizza Studio Project; no reuse terms are published for the screenshots or the write-ups."
licence_class: not-stated
reviewed: 2026-10-30
status: active
related: [navbar-gallery, footer-design, 404s, hover-states]
---
[← Atlas](../site/home.md) · Topics: [navigation](../topics/navigation.md), [inspiration](../topics/inspiration.md)


# Navbar Design

## What it is

Navbar Design is a hand-curated directory of website navigation bars, run by Happy Pizza Studio. At review it held 29 navbars in 9 styles and 7 types, which the author splits as dropdown (3), full screen (3), mega (5), mobile (0), side drawer (5), static (12) and sticky (11) — the counts add up to more than 29 because a navbar can carry several tags. Every entry has its own page at `/navbars/<slug>` with a screenshot, one or two sentences on what works, style and type tags, a link to the live site and a strip of related navbars. It is a young, deliberately small directory rather than a scrape, and the about page says so: curated by hand, not by bots.

## When to open it

When you are choosing a navigation type before drawing anything — full-screen overlay, mega menu, side drawer, sticky strip — and want to see the same decision made on real sites, not explained in the abstract. The one-line write-ups are also useful in a client conversation, because they argue for a specific idea rather than a general aesthetic.

## Most useful

- **Type taxonomy with definitions**: each type has a short line, and the pages are addressable (`/type/sticky`, `/type/side-drawer`), so you can send someone straight to the flavour you are debating.
- **Per-entry critique**: for the Stripe.dev entry the note points at the navbar mirroring a TUI menu, which is the kind of specific observation a screenshot alone does not give you.
- **Links to the live site** on every entry, so you can check how the bar behaves on scroll, hover and on a phone.
- **An `llms.txt`** that lists every entry with its write-up, tags and source URL, which makes the whole directory readable in one request.

## Using it with agents

`https://navbar.design/llms.txt` is a real index, not a policy file: it gives the site's purpose, the seven type pages with counts, and every navbar with a one-sentence description, its tags and the `Site:` URL of the live page. An agent can read it once, filter by tag, and describe the structure it needs — sticky bar with a wordmark, three text links and one filled CTA — without loading the screenshots. The sitemap is linked from the same file. There is no MCP, API or export.

## Watch out for

- Small and young: 29 entries, one curator, and the mobile type currently has no examples at all, so a mobile-navigation decision gets no help here.
- No licence or reuse policy is published; the screenshots belong to the sites shown.
- The tags are the curator's own vocabulary, not a standard taxonomy, so "minimalism" and "static" may mean something narrower than you expect.
- Entries go stale quietly: a navbar gets redesigned on the live site and the screenshot stays. Check the source link before quoting an example.

## Reusable ideas

- Give each type its own addressable page with a one-line definition and a count, so the taxonomy does the filtering instead of a tag cloud.
- Pair every screenshot with a link to the live page and one sentence of critique; the sentence is what makes a gallery useful a second time.
- Publish an `llms.txt` that lists entries with their tags and source URLs, so agents get the index instead of scraping the grid.
- Credit the galleries that inspired you, as this one does to 404s.design and footer.design.

## Related

[Navbar Gallery](navbar-gallery.md), [Footer Design](footer-design.md), [404s](404s.md), [Hover States](hover-states.md)
