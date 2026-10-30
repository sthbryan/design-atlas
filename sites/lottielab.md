---
title: Lottielab
description: Lottie editor for product teams, from Figma or After Effects imports to one animation file that ships to iOS, Android and web.
url: https://www.lottielab.com
type: tool
formats: Lottie editor · Figma and After Effects import · dotLottie, GIF, MP4 and WebM export · hosted Lottie CDN · templates
topics: [motion, assets]
verdict: useful
agent: []
pricing: freemium
licence: Proprietary with a free tier. The free plan covers unlimited files, Figma import and GIF and MP4 export with a watermark; Lottie export, HD video, a team library and hosting need the paid plans, billed per editor per month, annually. Prices are rendered in the page and were not readable at review.
licence_class: proprietary-paid
reviewed: 2026-10-29
status: active
related: [lottiefiles, jitter, rive]
---
[← Atlas](../site/home.md) · Topics: [motion](../topics/motion.md), [assets](../topics/assets.md)

# Lottielab

## What it is

Lottielab is a Lottie editor aimed at product teams rather than motion studios. You import from Figma or After Effects, or start from scratch, animate on a timeline, and export a Lottie file that renders the same on iOS, Android and web. The site is explicit about the audience and the pipeline: design to motion in one file, then ship it with the product. At review it claimed 500,000+ designers and advertised templates, real-time collaboration, file-size optimisation and hosting.

## When to open it

- A product needs an icon, a loading state or an onboarding illustration animated, and the result has to ship inside an app rather than as a video.
- You already have After Effects compositions or Figma frames and want a Lottie export without rebuilding them by hand.
- You need small files that stay smooth on a low-end phone, which is where a dedicated Lottie editor beats a general motion tool.

## Most useful

- **Import path**: Figma and After Effects in, Lottie out, which is the shortest route from design files to a shippable animation.
- **File-size tools**: the site advertises optimised exports and lists a standalone file-size optimiser alongside converters (SVG to Lottie, Lottie to dotLottie, Lottie to GIF, MP4 and WebM), all useful when a designer hands you a heavy file.
- **Collaboration**: comments and real-time editing on a shared file, so review happens on the animation instead of on a screen recording.
- **Templates**: a library by scenario and by asset type — icons, illustrations, logos, mockups, showreels, social — which is a quick way to see what a finished Lottie looks like in a product.
- **Hosting**: paid plans add a CDN for Lottie files, an option worth knowing if your team has no asset pipeline for animations.

## Using it with agents

No agent channel at review: no `llms.txt`, no MCP server, no documented API. An agent can read the site's tool pages to learn what each converter does, but the editing is manual and the deliverable for an agent is the exported Lottie file and its JSON.

## Watch out for

- The free plan watermarks exports and withholds Lottie export itself, so it is a trial for the editor rather than a way to ship.
- Prices are rendered client-side, so a figure quoted from a page load may be stale or unreadable. Check the pricing page in a browser before budgeting.
- Lottie is a constrained format. Blurs, masks, expressions and effects that After Effects allows may not survive the import, so test the exported JSON on the target platform, not only in the preview.
- A designer-authored Lottie still needs a player and a fallback in the app, and reduced-motion handling is your code's job.
- The site makes large adoption claims without a source; treat the number as marketing.

## Reusable ideas

- Publish single-purpose tool pages for each conversion (SVG to Lottie, Lottie to dotLottie), so search traffic lands on the exact task rather than a feature list.
- Show a real animation playing in the hero, with the layer names and the timeline visible; it explains the product faster than copy.
- Offer file-size optimisation as a named feature, because it is the constraint that decides whether an animation ships.

## Related

[Lottie](lottiefiles.md), [Jitter](jitter.md), [Rive](rive.md)
