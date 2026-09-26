---
title: Awwwards
description: Paid-entry web design awards with jury-scored winners, interaction clips and studio credits; llms.txt plus a small awards API.
url: https://www.awwwards.com
type: gallery
formats: web design awards and gallery · interaction clip library · llms.txt · read-only awards API
topics: [inspiration, motion, landing-pages]
verdict: useful
agent: [llms-txt, api]
pricing: freemium
licence: Free to browse. A standard submission costs $65 per site. Pro memberships were $6.70, $13.80 or $324 a month billed yearly at review, and courses cost $12 a month. The legal terms say all site material belongs to Awwwards and bar commercial reuse without permission. Featured sites stay the property of their makers
licence_class: proprietary-paid
reviewed: 2026-09-25
status: active
related: [landing-love, scrolltide, minimal-gallery, siteinspire, best-website-gallery]
---
[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [motion](../topics/motion.md), [landing-pages](../topics/landing-pages.md)

# Awwwards

## What it is

Awwwards is a paid-submission awards programme and gallery for web design, run by Awwwards Online SL in Madrid. Studios pay to submit a site. A jury of designers, developers and agencies scores it on design (40%), usability (30%), creativity (20%) and content (10%), and members vote alongside them. Winners are listed as Honorable Mentions, Site of the Day, Site of the Month and Site of the Year, and there is a separate Developer Award. Around the gallery sit Elements (short clips of single interactions), curated Collections, a Directory of agencies and freelancers, a jobs board, a template Market and a paid Academy.

## When to open it

Open it when you want to see where expressive, motion-heavy web design is heading, or to find the studio behind a site you admire. It suits agency, portfolio, launch and brand pages, where scroll choreography, WebGL and custom transitions are the point. It is a poor guide for dense product UI or conventional SaaS marketing.

## Most useful

- **Winners archive**: SOTD, SOTM and SOTY lists give a jury-filtered shortlist, not an open feed
- **Filters**: 27 categories, about 60 tags (Microinteractions, Horizontal Layout, Unusual Navigation, 404 pages) and a technology list covering GSAP, Three.js, Lottie, Barba.js, Locomotive Scroll and most CMSs
- **Elements**: video clips of one interaction each (transitions, scroll effects, menus, loaders, 404 pages), handy when you only need the pattern
- **Credits**: every entry names the studio and collaborators, which leads to their other work in the Directory
- **Scores**: Site of the Day winners show their jury score out of 10, a rough signal of what the jury rewards

## Using it with agents

Awwwards publishes an `llms.txt` that points agents to the winners gallery, Directory and blog. It also links an OpenAPI file for a small public, read-only JSON API. At review that API covered only Annual Awards categories and nominees (five GET operations), not the everyday gallery. The robots file blocks search, filtered listings, `/elements/*` and `/gallery/`, so an agent can read individual site pages and the llms.txt but should not crawl listings. For design work, pick winners by hand and give the agent the live URL and a written description of the motion, not screenshots.

## Watch out for

- Inclusion is pay-to-enter, so the gallery reflects studios with a submission budget, not the whole web
- Pages mix in Pro upsells, promoted Elements, course offers and Market templates
- Jury scores are shown only for Site of the Day winners
- Award-winning sites often trade accessibility and performance for spectacle; check both before borrowing a pattern

## Reusable ideas

- Score references against named, weighted criteria so a team can say why one beats another
- Keep single-interaction clips next to full-site entries, so a pattern can be found without its page
- Credit every contributor on an entry and link to their profile
- Publish the scoring rules and thresholds so makers know what an award means

## Related

[Landing Love](landing-love.md), [Scrolltide](scrolltide.md), [Minimal Gallery](minimal-gallery.md), [Siteinspire](siteinspire.md), [Best Website Gallery](best-website-gallery.md)
