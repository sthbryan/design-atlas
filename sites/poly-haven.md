---
title: Poly Haven
description: About 2,400 CC0 HDRIs, PBR textures and models made by people, with a keyless API that asks for credit.
url: https://polyhaven.com
type: asset-library
formats: 3D asset library (HDRIs, textures, models) · public API
topics: [3d-and-shaders, assets]
verdict: very-useful
agent: [llms-txt, api]
pricing: free
licence: free; every asset is CC0 with no attribution needed. The public API is free, commercial use included, but requires visible credit to Poly Haven and a unique User-Agent. The paid Blender add-on ($49 once or via Patreon) and Patreon-only "Vaults" fund the project
licence_class: public-domain
reviewed: 2026-09-25
status: active
related: [drei, threejs, blender, gltf-report, 3dicons]
---
[← Atlas](../site/home.md) · Topics: [3d-and-shaders](../topics/3d-and-shaders.md), [assets](../topics/assets.md)

# Poly Haven

## What it is

Poly Haven is a public library of 3D assets run by a small South African company. It was formed by merging HDRI Haven, Texture Haven and 3D Model Haven, and is led by Greg Zaal and co-founder Rob Tuytel. At review, its API listed 997 HDRIs, 862 textures and 521 models. The HDRIs are unclipped and go up to 16K or more (some to 24K), in HDR and EXR. The textures are scanned, seamless PBR sets of at least 8K, and the models are photoreal props and scenery. The site says the assets are made by people, without generative AI. Downloads need no account. Funding comes from Patreon, a Blender add-on sold on Superhive, and "Vaults": themed collections that Patreon members get early and that are freed for everyone once a patron target is met.

## When to open it

Open it when a web 3D scene needs believable lighting or surfaces: an environment map behind a product, a studio or outdoor HDRI for reflections, or wood, concrete and fabric materials for a configurator. It is also the safe default when you need assets whose licence you never have to explain.

## Most useful

- **HDRIs with rich metadata**: filter by time of day, weather, contrast, light type and indoor/outdoor. Download from 1K for the web up to full resolution for offline renders
- **PBR texture sets**: diffuse, normal (OpenGL and DirectX), roughness, displacement and AO maps, also packaged as glTF, `.blend` and MaterialX
- **Models**: furniture, plants, rocks and props, each offered as glTF, FBX, USD or `.blend` with textures from 1K up to 4K or 8K
- **Public API**: `api.polyhaven.com` lists every asset with tags, categories and authors, searches in plain language, and gives direct download URLs per map, format and resolution
- **Finance reports** published on the site, which helps if you are deciding whether to rely on it long term

## Using it with agents

Poly Haven publishes a short `llms.txt` written for agents. It tells them to use the API instead of the website (the library grids are built in JavaScript, so a plain fetch returns an empty list) and lists the endpoints: `/assets` with filters by type, category and lighting attributes, a plain-language `/search`, `/files` with URLs, sizes and checksums, a taxonomy and an OpenAPI spec. No key is needed. Ask the agent to choose a 1K or 2K HDRI for a Three.js or Drei `Environment`, save it into the project rather than hotlink it, send a User-Agent naming your tool, and add a visible credit if your product uses the live API. There is no MCP server.

## Watch out for

- CC0 covers the assets only. Logos, site text and example renders are protected, and the terms forbid scraping the website without permission; use the API instead
- API use must credit Poly Haven in your interface, and Poly Haven says it may change endpoints or authentication
- Full-resolution files are very large. For the web, pick 1K–2K HDRIs and compressed textures, or convert them to KTX2
- Vault collections are temporarily Patreon-only, so an asset seen in a preview may not yet be free

## Reusable ideas

- Pick one licence with no conditions (CC0), state it plainly on every page, and explain why
- Tag environment maps by lighting traits (contrast, time of day, sky view), not only by place
- Release funded collections to everyone when a patron goal is met, and show progress toward that goal
- Offer a free, keyless JSON API with simple, clearly stated conditions

## Related

[Drei](drei.md), [Three.js](threejs.md), [Blender](blender.md), [gltf.report](gltf-report.md), [3dicons](3dicons.md)
