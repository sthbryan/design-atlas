# Driftwood

A trip planner for small groups travelling together. Each trip has a cover photo the organiser uploads: any photo, from a white beach to a night city street.

## The trip overview screen
- Data: `src/data/trip.json`.
- Shows the trip name, dates, the next three itinerary items and the traveller list over the full-bleed cover photo.
- One action: "Open itinerary" (link to `/trips/:id/itinerary`).
- Used mostly on phones (iOS Safari and Android Chrome), also on laptops.

## Accessibility needs beyond the floor
Several organisers are older travellers with low vision who use larger text settings.

## Facts
Only the trip data in the JSON may appear. The cover photo is user content: use `src/assets/cover-sample.jpg` as the sample path (the file is not in the repo yet; say so).
