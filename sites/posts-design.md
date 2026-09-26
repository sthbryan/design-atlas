[← Atlas](../README.md) · Topics: [inspiration](../topics/inspiration.md), [assets](../topics/assets.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# posts.design

- **URL:** https://posts.design
- **Type:** inspiration gallery · API
- **Topics:** inspiration, assets, agents-and-prompts
- **Pricing / licence:** Free to browse (optional member accounts). Its terms say featured images, videos, names and logos stay with their owners and that the site grants no permission to reuse third-party work
- **Reviewed:** 2026-09-25

## What it is

posts.design is a hand-curated gallery of real company social media posts, mostly captured from X: launch announcements, feature updates, hiring posts, milestones and memes. It is run by an independent curator (@baseddesigner on X) and has been live since May 2026.

## When to open it

- When you're designing a launch or product-update graphic and want to see how established brands format theirs.
- When you need references for adjacent social surfaces: profile headers/banners or Open Graph link-preview images.
- When you want to compare a single brand's social visual language over time.

## Most useful

- Filters by post purpose (hiring, event, partnership, launch, milestone, teaser, merch, rebrand, meme and more) and by industry (AI, crypto, finance, developer tools, productivity, commerce and others).
- Each reference records the brand, account, capture date, post type and visual format (announcement card, product screenshot, chart), with a link to the original post.
- Separate walls for Top Launches, brand profile headers (245 at review time, with a weekly favorite), OG images and editorial trend pages such as brand icon remixes.
- A brands directory (the site cites 680+ brands) and a public stats page, which showed about 2,650 published posts at review time.
- A weekly newsletter archive, an RSS feed and a public changelog.

## Using it with agents

Its llms.txt documents a public JSON search endpoint (`/api/gallery/search`) with pagination, text query, post-type, industry and collection filters (launches or OG images), and each result carries the canonical source URL. It also lists the URL patterns for brand, category and type pages. There is no MCP or prompt export; the API is best used to pull a shortlist of references that you then describe to the agent.

## Watch out for

- Everything shown is someone else's branded marketing material; use it for layout and format, never copy brand assets.
- robots.txt disallows `/api/` even though llms.txt advertises the search API, so check with the site before running automated queries at volume.
- The archive is young and weighted towards tech, AI and crypto companies.

## Reusable ideas

- Tagging posts by their job (launch, hiring, milestone) and separately by visual format (announcement card, screenshot, chart) answers both "what should this post say" and "how should it look".
- Giving headers and OG images their own walls acknowledges that each social surface has its own constraints.
- A public stats page and changelog make a small curation project feel accountable and alive.

## Related

[Recent](recent-design.md), [Inspora](inspora.md), [AppShot Gallery](appshot-gallery.md), [Collect UI](collect-ui.md)
