---
title: Swift Pieces
description: Animated SwiftUI components for iOS with live interaction previews, single-file source and agent installation paths.
url: https://swiftpieces.com
type: component-library
formats: SwiftUI component library · CLI · MCP · shadcn-style registry
topics: [components, motion, ai-interfaces]
verdict: useful
agent: [mcp, llms-txt, cli, registry]
pricing: freemium
licence: "The 55-item free library at review is MIT plus Commons Clause: usable in personal and commercial apps, but not for resale or redistribution as a library. Pro is a $199 one-time purchase per developer at review and grants commercial use for its paid screens and templates."
licence_class: mixed
reviewed: 2026-09-26
status: active
related: [liquid-glass, motion-primitives, base-ui, shadcn-ui]
---
[← Atlas](../site/home.md) · Topics: [components](../topics/components.md), [motion](../topics/motion.md), [ai-interfaces](../topics/ai-interfaces.md)

# Swift Pieces

## What it is

Swift Pieces is a library of animated SwiftUI components for native iOS apps. The public site groups pieces into buttons, inputs, cards, navigation, feedback, charts and AI interfaces, with code-oriented install paths and Pro screens and app templates.

## When to open it

- When building a native iOS app and looking for concrete interaction, haptic and motion patterns.
- When an agent needs a SwiftUI example for loading states, AI chat, voice mode, glass effects or gesture-heavy controls.

## Most useful

- **Component categories**: browse [controls](https://swiftpieces.com/components/controls), [cards](https://swiftpieces.com/components/cards), [navigation](https://swiftpieces.com/components/navigation), [feedback](https://swiftpieces.com/components/feedback), [AI](https://swiftpieces.com/components/ai) and [animations](https://swiftpieces.com/components/animations).
- **Motion and haptics**: components pair spring motion, drag and hold states with haptic feedback; the site's guides explain patterns for [animations](https://swiftpieces.com/docs/guides/swiftui-animations) and [haptics](https://swiftpieces.com/docs/guides/swiftui-haptics).
- **Pro screens**: the [public screen library](https://pro.swiftpieces.com/library/screens) previews wallet, dashboard, chat, voice and paywall patterns; app templates provide complete Xcode projects.
- **Installation**: free pieces can be copied, added by CLI or retrieved through an agent; source is written into the consumer project rather than linked as a runtime package.

## Using it with agents

The site provides `llms.txt`, an MCP guide, a CLI and a registry at `https://swiftpieces.com/r/index.json`. Free library install instructions are in the [MCP docs](https://swiftpieces.com/docs/mcp); the Pro side has its own [agent docs](https://pro.swiftpieces.com/docs/mcp).

## Watch out for

- This is native SwiftUI for iOS, not a web or React component library.
- Free components use MIT plus Commons Clause: they may be used in apps, but the pieces themselves cannot be sold, sublicensed or redistributed as a library.
- Pro is licensed per developer. Each developer who installs or works with Pro pieces needs a separate license; the listed price is $199 one-time at review.
- Check that interactive components respect Reduce Motion and provide a non-haptic path where needed.

## Reusable ideas

- Make interaction states explicit: pressed, held, loading, success and failure can each have distinct motion and feedback.
- Tune haptics to meaningful transitions rather than triggering them on every frame.
- Preview code against real device-size constraints, especially for thumb-reachable controls and gesture-driven cards.

## Related

[Liquid Glass](liquid-glass.md), [Motion Primitives](motion-primitives.md), [Base UI](base-ui.md), [shadcn/ui](shadcn-ui.md)
