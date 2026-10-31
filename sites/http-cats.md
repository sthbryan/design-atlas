---
title: HTTP Cats
description: An image per HTTP status code plus JSON with MDN's description; MIT code, photographs with no separate licence.
url: https://http.cat
type: asset-library
formats: image API · JSON per status code · one HTML page per status
topics: [error-pages, assets]
verdict: niche
agent: [api]
pricing: free
licence: "The repository httpcats/http.cat is MIT (about 3.7k stars at review). Donations run through Patreon and Buy Me a Coffee, and an adopt-a-cat option puts a supporter's name in a chosen image. The cat photographs carry no separate credit or licence line, so treat the images themselves as look-only before using them in a commercial product."
licence_class: mixed
licences:
  code: open-source-permissive
  assets: not-stated
reviewed: 2026-10-30
status: active
related: [404s, 404-gallery, empty-states]
---
[← Atlas](../site/home.md) · Topics: [error-pages](../topics/error-pages.md), [assets](../topics/assets.md)


# HTTP Cats

## What it is

HTTP Cats is a static site that serves one cat photograph for each HTTP status code. It covers roughly a hundred codes from 100 to 599, including the ones developers actually reach for — 404, 500, 503 — and a long tail of unofficial ones: 418 I'm a teapot, 419 Page Expired, 420 Enhance Your Calm, 444 No Response, 451 Unavailable For Legal Reasons, 495 to 499 from nginx, 599 Network Connect Timeout Error. Since version 3 the site is built with Next.js 16, and the API behaviour is left to an nginx config, so every response is a static file.

## When to open it

When a small internal project, a status page, a staging site or a documentation page needs an error image and a real illustration would be overkill. It is also handy as a reference for how to document a one-endpoint API: the whole surface fits on the homepage.

## Most useful

- **Image by code**: `https://http.cat/404` or `/404.jpg` returns the photograph; `/599` and `/100` answer too, while an unassigned code such as `/999` returns 404 with a cat photo as the body.
- **JSON twin**: `/404.json` returns `status`, `name`, `description`, `image` and `url`. The description is MDN prose with the RFC and Wikipedia links kept intact.
- **HTML page per code**: `/status/404` is a readable page for the same code, useful when you want the explanation rather than the image.

## Using it with agents

There is no `llms.txt`: requesting `/llms.txt` answers 404 with a JPEG body, which is a good reminder to have the agent check the content type rather than the status alone. The JSON endpoint is the agent-facing surface — fetch `/404.json` and you get the status name, the MDN explanation and the image URL in one object. Because every path returns an image or a 404 image, do not use the host as a link checker for anything.

## Watch out for

- These are photographs of cats, not illustrations: they clash with most brands and do not adapt to a colour scheme.
- One image per code, at one aspect ratio, with no dark variant and no SVG version.
- The JSON `description` field is MDN text served verbatim; shipping it means publishing someone else's prose in your UI.
- The repository licence covers the code. Nothing states that the photographs may be reused commercially, so do not put them on a paid product without checking.
- No documented rate limit and no SLA — it is a volunteer site kept alive by donations.

## Reusable ideas

- Give a one-endpoint API a homepage that *is* the documentation: a table of every input, the URL pattern, and a note on the optional extension.
- Serve the same resource as an image, as JSON and as an HTML page, so a human, an agent and a `<img>` tag each get what they need.
- Cover the unofficial codes your infrastructure actually emits (499, 599, 444) instead of only the RFC ones.

## Related

[404s](404s.md), [404 Gallery](404-gallery.md), [Empty States](empty-states.md)
