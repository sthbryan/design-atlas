[← Atlas](../README.md) · Topics: [motion](../topics/motion.md), [inspiration](../topics/inspiration.md), [agents-and-prompts](../topics/agents-and-prompts.md)

# What Ships

- **URL:** https://whatships.com
- **Type:** directory of launch videos · open API
- **Topics:** motion, inspiration, agents-and-prompts
- **Pricing / licence:** Free, with no account, ads or paid placement according to the site. The site's source code is MIT on GitHub (`dingyi/whatships.com`). The videos, names and trademarks belong to their owners, and the terms ask you to cite the original X post
- **Reviewed:** 2026-09-25

## What it is

What Ships is an independent, curated directory of product launch videos, demos and walkthroughs that startups posted on X. At review time it had about 2,220 launch pages. Each one records the product, company, category, date, duration, author handle, tags and the original post URL. It also lists tools for making launch videos and a short directory of motion studios and freelance designers who make them. It is a static site built with Astro, and it is not affiliated with X or with the products it lists.

## When to open it

When you are planning your own launch or feature announcement and want to see how others pitch a product in a minute or so: how they open, how much real UI they show, how they use captions and cursor motion. It also helps you find the launch film for a named product without scrolling back through a timeline.

## Most useful

- **Daily feed** of new launches with duration shown up front, filterable by AI, developer tools, design, motion, productivity, consumer, hardware and other
- **Tools page** that groups editors, motion tools, mockup tools and agent skills for making product videos (for example Remotion skills and screen-recording apps)
- **Studios page** for finding a team or freelancer who makes launch films
- **Submissions as public GitHub issues**, so the review process is visible

## Using it with agents

It is one of the easier sites in this atlas for agents to use. It publishes `llms.txt`, a fuller `llms-full.txt`, an OpenAPI description (read-only, no auth, no MCP) and `search-index.json`, a compact index of videos, tools and studios. HTML pages return Markdown when requested with `Accept: text/markdown`. An agent can look up a product's launch video, list recent launches in a category and cite the original post, which the guide asks it to always include.

## Watch out for

- The collection only covers launches posted on X, so the selection follows what is visible there and leans heavily towards AI and developer tools
- In-site playback is streamed through the site's proxy, and the terms say it is not a download source; link the original post instead
- Pages hold metadata and a short description, not a breakdown of how the video was made
- It is a new project (the agent guide dates from August 2026) with no named editor beyond "What Ships editorial"

## Reusable ideas

- Open a launch video on the product doing the job, not on a logo or title card
- Keep product demos short and show the duration up front, so viewers know the commitment
- Store every reference with a durable link to its original source, not a re-upload
- Offer a Markdown response and a compact JSON index so agents can use a catalogue without scraping it

## Related

[OpenMotion](openmotion.md), [Motionimo](motionimo.md), [Recent](recent-design.md), [Collect UI](collect-ui.md), [60fps](60fps.md)
