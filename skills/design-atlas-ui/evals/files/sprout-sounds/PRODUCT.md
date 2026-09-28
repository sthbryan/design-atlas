# Sprout Sounds

A phonics app for children aged 4 to 6, used on a shared family tablet (portrait and landscape) with a grown-up nearby.

## The lesson-complete screen
Shown after a child finishes a lesson. It must:
- Say which sounds were practised in this lesson (passed in as props: `sounds: string[]`, `lessonName: string`).
- Show the star earned (one star per completed lesson; `starsTotal: number` is passed in).
- Offer two actions: "Play again" (calls `onReplay`) and "Next lesson" (calls `onNext`).
- Have an audio button that replays the spoken praise (calls `onSpeak`), because most users cannot read yet.

## Accessibility needs beyond the floor
- Pre-readers: every action needs an icon plus a spoken label; nothing depends on reading.
- Small hands and imprecise taps.
- Some children in our pilot school have vestibular and attention needs; parents can turn on the tablet's reduce-motion setting.

## Facts we cannot publish
No rankings, streaks, comparisons with other children, or percentages.
