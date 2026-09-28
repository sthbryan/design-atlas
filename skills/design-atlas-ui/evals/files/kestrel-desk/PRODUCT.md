# Kestrel Desk

An internal positions blotter for a six-person equities desk. Used all day on two 27-inch monitors with a mouse and heavy keyboard use. Never used on phones; a 1280px laptop is the smallest screen.

## The positions panel
- Data: `src/data/positions.json` (static for now; later a websocket).
- Columns traders asked for: symbol, side, quantity, average price, last price, market value, unrealised P&L, P&L %.
- Market value, P&L and P&L % are derived: market value = quantity x last; P&L = (last - avg) x quantity for long, (avg - last) x quantity for short.
- A totals row at the bottom.

## Accessibility needs beyond the floor
One trader has deuteranopia. Gains and losses must not rely on red versus green.

## Facts
Prices are in USD. Nothing else about the desk may appear on screen.
