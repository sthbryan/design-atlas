---
title: Insposite
description: Hand-picked list of 70 inspiration sites, designer portfolios and tools for design engineers, with its data file public on GitHub.
url: https://www.insposite.com
type: directory
formats: small curated directory of portfolios, inspiration sites and tools · open-source site
topics: [inspiration, assets]
verdict: niche
agent: []
pricing: free
licence: Free, no account. The footer says linked content belongs to its creators. The site's code is public on GitHub and the README says MIT, but the repository has no LICENSE file and GitHub detects no licence
licence_class: not-stated
reviewed: 2026-09-25
status: active
related: [designeer, minimal-gallery, seesaw, appinspo]
---
[← Atlas](../site/home.md) · Topics: [inspiration](../topics/inspiration.md), [assets](../topics/assets.md)

# Insposite

## What it is

Insposite is a hand-picked list of links for people who both design and code, made by designer Prasanjit Dey. It picks entries for how buildable they are, not only for looks. At review its data file held 70 entries in three tabs: Inspiration (32, such as Awwwards, Siteinspire, Godly, Mobbin, Refero and SEESAW), Portfolios (18 personal sites of designers and developers) and Tools (20, such as Aceternity UI, Efecto, ShaderGradient, Ramps and Tabbied). Each card has a screenshot, a tag, the maker's X handle and a link out. It is built with Next.js, Tailwind CSS and Motion.

## When to open it

Open it when you want a short list rather than a big directory: a few well-known galleries to start a moodboard, or real portfolios from the design-engineering crowd to see how people present their work. With 70 entries you will get through it in a few minutes.

## Most useful

- **Portfolio tab**: personal sites from designers and developers active on X, useful when planning your own portfolio
- **Tools tab** mixing component libraries with small visual tools for shaders, dithering, ASCII art and colour
- **A credit on every card**, so you can follow the person behind each site
- **The public data file**: the whole list is one TypeScript array in the repository, easy to read or fork

## Using it with agents

There is no API, MCP server or llms.txt. The simplest route for an agent is the site's GitHub repository: the entries live in a single data file with title, tag, URL and creator fields, which an agent can read to pull links for a given tag. Check the licence question below before reusing the list itself.

## Watch out for

- It is small and run by one person, and new entries depend on one person reviewing submissions
- Submissions go to the maintainer through a Discord webhook; there is no public queue or status
- The licence is unclear: the README says MIT, but no licence file was published
- Many entries are already well known (Awwwards, Mobbin, Landingfolio), so there is little new here for seasoned designers

## Reusable ideas

- Pick entries by how buildable they are, not only by how they look
- Keep a curated list as one typed data file in the repository, so contributions and forks are easy
- Credit the maker's handle on every card of a link directory
- Protect a public submission form with a hidden honeypot field and a per-IP rate limit instead of a CAPTCHA

## Related

[Designeer](designeer.md), [Minimal Gallery](minimal-gallery.md), [SEESAW](seesaw.md), [Appinspo](appinspo.md)
