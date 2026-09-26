[← Atlas](../README.md) · Topics: [agents-and-prompts](../topics/agents-and-prompts.md), [ai-interfaces](../topics/ai-interfaces.md)

# Agentation

- **URL:** https://www.agentation.com
- **Type:** tool (React dev component) · MCP server · annotation schema
- **Topics:** agents-and-prompts, ai-interfaces
- **Pricing / licence:** free for individuals and companies for internal use, according to the site. You need a commercial licence to redistribute it inside a product you sell. The npm packages (`agentation` 3.1.2, `agentation-mcp` 1.3.2) declare `PolyForm-Shield-1.0.0`. The repo's LICENSE file is headed PolyForm Shield, but its body is a short custom text that bans competing products. It is source-available, not open source.
- **Reviewed:** 2026-09-25

## What it is

Agentation is a floating toolbar you mount in your running React app so you can point at problems instead of describing them. It is made by Benji Taylor, Dennis Jin and Alex Vanderzon. Click an element or select text, write a note, and the tool copies markdown an agent can act on. Depending on the output level, that markdown includes the CSS selector, source file path, React component tree and computed styles. It had about 4.8k GitHub stars and roughly 4.9 million npm downloads in the month before review. It works on desktop only.

## When to open it

- When you are reviewing a UI an agent built and "the blue button in the sidebar" keeps sending it to the wrong file.
- When you want a designer or PM to leave precise, element-attached feedback that the agent can pick up directly.
- When you want the agent to critique a page itself and leave its findings as visible notes.

## Most useful

- **Four output levels**, Compact, Standard, Detailed and Forensic, from a short note up to bounding boxes and computed styles.
- **React component detection**: it walks the fiber tree to name the component hierarchy, with Filtered, Smart, All and Off modes.
- **Animation pause** for CSS animations, Web Animations and video, so you can annotate a single frame.
- **Annotation Format Schema (AFS 1.1)**: an open JSON shape for feedback with threads and a pending → acknowledged → resolved status.
- Webhooks and a typed API for sending annotations to other tools.

## Using it with agents

Install with `npm install agentation -D` and render `<Agentation />` only in development. Without MCP, you paste the copied markdown into any agent. With MCP, run `claude mcp add agentation -- npx -y agentation-mcp server` and point the component at `endpoint="http://localhost:4747"`. The server exposes nine tools, including listing pending notes, acknowledging, resolving, dismissing and a blocking watch. That enables three modes: hands-free (the agent waits for new notes and fixes them), critique (the agent opens a headed browser and annotates your page itself) and self-driving (it annotates and fixes). `npx skills add benjitaylor/agentation` then `/agentation` wires it into a Claude Code project. There is no `llms.txt`.

## Watch out for

- It requires React 18+. Closed shadow roots and cross-origin iframes can't be annotated.
- Notes live in `localStorage` for seven days unless you sync them to the MCP server.
- The MCP server uses the native `better-sqlite3` module, which can fail to build on some Node versions (Node 24 LTS is recommended).
- By default the server accepts private-network and `.local`/`.test` origins. Its CORS setting is not authentication, so don't open it to `*` on a shared network.
- Check the licence before bundling it into anything you distribute.

## Reusable ideas

- Give agents selectors and file paths, not descriptions of what an element looks like.
- Track feedback as a status lifecycle, so "fixed" is an explicit, visible event.
- Keep one issue per note and quote the exact text when the problem is copy.
- Let the agent leave its own review as annotations for a human to accept or dismiss before it edits anything.

## Related

[DialKit](dialkit.md), [Screenshot to Code](screenshot-to-code.md), [Impeccable](impeccable.md), [Efecto](efecto.md)
