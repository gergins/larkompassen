# Lärkompassen — session handoff (15 October 2026)

## How to resume
Say: **"Resume Lärkompassen from docs/SESSION_HANDOFF_2026-10-15.md; check GitHub issue #3 and the first scheduled heartbeat run before suggesting next steps."**
Source of truth: this repository, `docs/PROJECT_MEMORY.md`, the live application, the Supabase project and GitHub Actions evidence. Do not infer that a configured system has passed E2E tests.

## Project
- Repository: https://github.com/gergins/larkompassen
- Live site: https://gergins.github.io/larkompassen/
- Child views: `/ak1/`, `/ak5/`; parent view: `/foralder/`; separate goal lessons: `/lektion/`.
- Swedish Lgr22-inspired exercises for children in Åk 1 and Åk 5. Goals are curriculum-aligned examples, not claims of official date-specific Skolverket pacing or complete subject coverage.
- User prefers evidence-first execution, small safe slices, tests, explicit responsibility and durable handoffs.

## What was delivered
- The original child subject pages offer Math, Swedish, English and other subjects. The **✨ Nya målövningar** links on both child views now include Math, English, Swedish, NO/Biology and SO/Geography.
- Original Mathematics in `app.js`: randomized questions per session, selectable levels (Åk 1: 0–10, 0–20, 0–100; Åk 5: decimal, percent, mixed); rerunning generates new tasks. Other subjects have expanded but still limited reviewed question banks and shuffling.
- Åk 1 Math gently recommends level changes only after three sessions on the same level; it never forces them. Session aggregates are stored in browser localStorage under `lk-original-math-progress-v1`.
- `/lektion/` goal exercises are a **different** engine and do not yet share this original math level recommendation system; parent session results for that route are also local to the device.
- GitHub Actions `verify.yml` has static regression tests; do not claim green without checking the exact run.

## Supabase heartbeat: verified vs pending
- Supabase project **gergins's Project**, ref `vogkpshnisidtzrkvjzs`, region `eu-north-1` had status `ACTIVE_HEALTHY`.
- Existing table `public.service_heartbeat` was created through Supabase migration, contains just the public marker `larkompassen`; RLS enabled; SELECT as `anon` verified. No student statistics are read/written by this bot.
- `.github/workflows/supabase-heartbeat.yml` runs a single daily best-effort check scheduled for **09:17 UTC**, adding up to 10 minutes of operational scheduling jitter. Uses only the **public publishable key** (never use service-role or secret administrator keys). Does not guarantee avoidance of Supabase Free inactivity pause.
- **Manual GitHub Actions E2E succeeded**: https://github.com/gergins/larkompassen/actions/runs/38645311251, event `workflow_dispatch`, run conclusion `success`, job `heartbeat` passed, log `HEALTHY: Supabase returned its non-personal monitoring marker.` at 22:06:51 UTC on October 14, 2026. Scheduled-jitter step was appropriately skipped for manual dispatch.
- **Outstanding:** verify first genuine `schedule` event and its REST success. Issue https://github.com/gergins/larkompassen/issues/3 is held open and contains run evidence and owner role **Integration Reliability Steward** (a defined responsibility, not a hired or autonomous human).
- An enabled ChatGPT automation titled **Verify First Scheduled Heartbeat** checks daily and is configured to notify once when a genuinely scheduled run completes. The automation executes independently of the user's Windows laptop. Do not set up a duplicate.
- If schedule fails, inspect actual workflow event, job logs and issue #3. Do not falsely report green if event is only `workflow_dispatch`.

## Important design boundary
- **No cross-device student result synchronization exists yet.** iPad, iPhone, parent PC each have their own browser localStorage; shutting a laptop does not erase saved data, but clearing browser data can. Supabase heartbeat is NOT data sync.
- No production student identity/auth/RLS schema yet. Before implementing sync: parent-controlled authentication, private child-owned rows, RLS, offline queue, idempotent writes, reliable testing, backup/export, and a minimal-data privacy review.
- Avoid sending fabricated scores / duplicate student events to keep a database active.
- No further project deployments or schema alterations should occur merely because the user is going to bed.

## Recommended next priorities
1. Verify first scheduled heartbeat and issue #3 acceptance evidence; keep monitoring concise.
2. Make shared exercise catalog consistent across child `app.js`, goal `lektion/lesson.js`, parent planning/rewards and curriculum goals; don't conflate grade/date with measured mastery.
3. Test random-task generator for valid level bounds and nonrepeating sessions; add deeper Lgr22-grounded vetted question banks per topic.
4. Only if user approves: design protected cross-device result sync from iPad/iPhone to parent portal. Do NOT assume heartbeat means sync.

## Resume verification checklist
Confirm latest repo status and live GitHub Actions results, Supabase project/table health, existing open issues #1 QA, #2 curriculum, #3 integration, and configured automation status. State which observations are live and which are documented historical evidence. Continue in English unless user requests Swedish.
