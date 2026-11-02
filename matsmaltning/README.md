# Reusable escape-room lesson (M3)

This vertical slice is intentionally small and uses plain HTML/CSS/JavaScript without additional dependencies.

- `game.js`: shared room runner, answer attempts, hints, feedback, progress and restart.
- `content.js`: lesson-specific data (`summary` and `rooms` with `title`, `lesson`, `question`, `options`, `correct`, `hint`, `explain`).
- `index.html`: presentation for the current Swedish digestion lesson.

To reuse for another subject, supply a new `content.js` with the same shape, and update the lesson-specific title and introduction in the HTML. Keep `game.js` unchanged. This is a reusable lesson pattern, not a universal game framework.

## Verification status

- Static checks: both JS files parse; five rooms; valid answer indices; required fields; content script precedes runner.
- Still required: real browser click-through, keyboard/focus check, responsive layout check, educational review, and regression review.
- Do not merge or deploy until independent verification and explicit approval.

Tracked by issue #4 and draft PR #5.
