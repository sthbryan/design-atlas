---
title: Cult UI
description: Textured, distinctive marketing components and shader heroes built with Motion; paid blocks and templates.
url: https://www.cult-ui.com
type: component-registry
formats: animated component registry (shadcn) with a paid Pro tier
topics: [components, motion, landing-pages]
verdict: useful
agent: [registry]
pricing: freemium
licence: free components under MIT (repo `nolly-studio/cult-ui`); Cult UI Pro is a one-time lifetime licence listed at $129 (reduced from $179) with blocks and templates under a restrictive commercial licence
licence_class: mixed
reviewed: 2026-09-25
status: active
related: [magic-ui, aceternity-ui, paper-shaders, shadcn-ui, kokonut-ui, skiper-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [landing-pages](../topics/landing-pages.md)

# Cult UI

## What it is

A shadcn-compatible set of components aimed at "design engineers", maintained by Nolly Studio (the MIT licence names Jordan Gilliam). The free registry holds 78 UI components plus 79 examples, most animated with Motion and styled with Tailwind CSS. The pieces lean toward distinctive, textured marketing UI rather than form controls: Dynamic Island style panels, texture and neumorphic buttons, a 3D carousel, a dock, dithered and liquid-metal hero backgrounds, pixel headings and poll widgets.

## When to open it

When a landing page or product site needs a few memorable interactions (a morphing surface, an expandable toolbar, a textured card) and a plain shadcn setup looks too generic. Less useful when you need a complete, consistent design system.

## Most useful

- Hero backgrounds built on Paper Design's shader package (dithering, heatmap, liquid metal)
- Expanding and morphing containers: floating panel, family drawer, expandable screen, side panel
- Small AI-adjacent pieces such as a prompt library and an AI instructions panel
- On Pro: marketing blocks, full-stack AI SDK patterns and starter templates (logo generator, directory, SEO tool)

## Using it with agents

Items live in a namespaced shadcn registry (`@cult-ui`, resolving to `cult-ui.com/r/{name}.json`), so `npx shadcn add @cult-ui/<component>` works and the shadcn MCP server can list and install them; the namespace appears in shadcn's registry directory. Each component also offers an "Open in v0" link. No `llms.txt` was found in the repo. The repo itself carries agent skill files for contributors (component-building rules and a motion performance checklist) that are worth reading as examples.

## Watch out for

- The site sat behind a Vercel bot checkpoint for scripted requests during this review; facts here come from the GitHub repo and the Pro site
- The Pro licence forbids redistribution, publishing the code in public repos and building derivative kits; keep Pro code out of open-source projects
- The README now promotes AI agent patterns hosted on a separate site (aisdkagents.com), which can blur what is actually in the free library

## Reusable ideas

- Give marketing components tactile material cues (texture, grain, neumorphism) instead of flat gradients
- Use shader-driven backgrounds as hero components with simple props rather than raw WebGL
- Keep free components granular and put full-page blocks and templates behind the paid tier

## Related

[Magic UI](magic-ui.md), [Aceternity UI](aceternity-ui.md), [Paper Shaders](paper-shaders.md), [shadcn/ui](shadcn-ui.md), [Kokonut UI](kokonut-ui.md), [Skiper UI](skiper-ui.md)
