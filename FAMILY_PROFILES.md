# Family profile selector — v1

Small, reusable, client-only profile selector. The homepage loads `family.js` and shows child profiles for the **currently implemented** grade portals (1 and 5). No server, dependency, account or new orchestration.

## Acceptance scope

- Parent can add, edit, remove and select a child profile (up to 12 on one browser).
- Multiple children may share the same grade; each has its own profile record.
- Grade-only navigation remains available without a profile.
- Names use `textContent`, not HTML interpolation.
- Data is stored in `localStorage`; errors are displayed and corrupt/unknown entries are ignored.
- Accessible native controls, labels, focus outlines and status message.

## Explicit limitations / future gates

- Profile selection **does not isolate existing exercise results**, which use older local-storage keys. Do not claim independent progress until all exercise writers/readers have been migrated to child-scoped keys and verified.
- Profiles are browser/device-local; browser data deletion or private browsing can remove them. No cloud sync, parent authentication, backup or access control. The existing parent-mode lock is not a substitute for authentication.
- No additional grades are invented: only 1 and 5 exist in the current site.
- No student-identifying data should be committed to this public repository. Encourage nicknames.
- Later: progress separation, switching inside learning pages, migrations for legacy unscoped progress, shared-device privacy, and export/import only after product approval.

## Verification gates

1. Syntax-check `family.js` and validate homepage links/script loading.
2. Test add/edit/delete, duplicate grades, max profiles, malformed local storage, unavailable storage, and direct grade navigation.
3. Browser keyboard-only and mobile-width check; check with assistive technology.
4. Check exact PR-head GitHub Actions run and independent review.

Do not merge/deploy without approval.
