# Supabase heartbeat — configured

The public Supabase project `vogkpshnisidtzrkvjzs` has a dedicated `public.service_heartbeat` table containing the single non-personal marker `larkompassen`. RLS is enabled; anonymous access is restricted to reading the harmless id column. A read-only SQL test under the `anon` role returned the marker successfully.

GitHub Actions workflow: [Supabase availability heartbeat](../.github/workflows/supabase-heartbeat.yml). It is scheduled for 09:17 **UTC** once daily, followed by 0–10 minutes of operational jitter (09:17–09:27 UTC), and may also be dispatched manually from GitHub's Actions tab. The workflow uses the Supabase **publishable (public)** client key and public project URL. This key is not a secret; it must never be replaced with `service_role`, a secret API key, or database credentials. The bot only SELECTs the constant id, and does not interact with student results. Missing configuration fails the check; an unreachable backend fails the check.

**Verification:** The table, RLS, marker, and `anon` read passed verification in Supabase. The GitHub workflow configuration was committed. An actual successful GitHub Actions execution and REST response have **not yet been confirmed**. Check [Actions runs](https://github.com/gergins/larkompassen/actions/workflows/supabase-heartbeat.yml) and use Run workflow to perform the first end-to-end check.

**Limitations:** Supabase Free inactivity-pausing rules can change, and a heartbeat does not guarantee immunity. GitHub schedules can be delayed, skipped, or disabled after prolonged inactivity in a public repo. A paused database may need manual resumption. This is *not* student-device synchronization; that requires a separate authenticated backend design and privacy/security review.

Official references: https://supabase.com/docs/guides/platform/free-project-pausing and https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows

## Responsibility and monitoring
See [Integration Reliability Steward — issue #3](https://github.com/gergins/larkompassen/issues/3) for the end-to-end verification and evidence gate. Jitter distributes routine maintenance traffic; it is not meant to conceal requests from providers or bypass their usage policies. A successful scheduled check is not proof that the Free project will not pause.
