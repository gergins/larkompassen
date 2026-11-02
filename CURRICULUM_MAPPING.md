# Lgr22 curriculum mapping — evidence-first foundation

This milestone introduces `curriculum-map.js` as a **small, source-linked mapping registry**, not a claim of complete curriculum coverage or official Skolverket endorsement.

## Rules

- Each mapping has a stable `goalId`, local grade, official grade band, subject, central-content section, paraphrased topic, direct source URL and review status.
- Official central content is usually grouped in grades **1–3** and **4–6**; local grade 1/5 is our instructional choice, **not** an official Skolverket year-by-year plan.
- Keep source wording paraphrased, with URLs for readers to check the original.
- `source-checked` means the cited official source and corresponding topic were checked; it **does not** mean educational content or exercise coverage has been independently approved.
- A missing mapping must display as **not yet mapped**, not as compliant.
- One topic may be addressed by several lessons, and one lesson may support several topics. Later versions can add stable IDs for official items and many-to-many links.
- The registry must not silently infer mapping from matching words or an AI guess.
- This does not change `curriculum.js` or existing lessons and does not create a new orchestration layer.

## Verified sample sources

- Mathematics: https://syllabuswebb.skolverket.se/syllabuscw/jsp/subject.htm?subjectCode=GRGRMAT01&tos=gr
- Biology: https://www.skolverket.se/undervisning/grundskolan/laroplan-lgr22-for-grundskolan-samt-for-forskoleklassen-och-fritidshemmet/curriculums/LGR22/GRGRBIO01?hasSubjects=true&schoolType=GR&tosHeading=Kursplaner

## Remaining acceptance gates

1. Link every existing `LK_CURRICULUM.grades` goal and lesson to reviewed mappings, or explicitly mark unmapped.
2. Provide source links and mapping status in the parent/learning-goals UI.
3. Add schema, duplicate-ID, link-integrity and missing-coverage checks to GitHub Actions.
4. Independent educational/content review; then browser accessibility verification.
5. Keep family progress isolation separate; mapping must not imply individual mastery or grading.

No merge or deployment without approval.
