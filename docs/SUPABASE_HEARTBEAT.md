# Supabase heartbeat (not yet enabled)
This is an optional, independent database availability/activity check. It does **not** send, alter or fabricate learning results and does **not** collect children's information.

## Activation – only after a Supabase project exists
1. Open the Supabase SQL Editor and review/run `supabase/heartbeat.sql`. It creates a single harmless marker with read-only anonymous access under Row Level Security (RLS).
2. In the **GitHub repository** settings, add Actions secrets `SUPABASE_URL` (for example `https://project-ref.supabase.co/`) and `SUPABASE_ANON_KEY` (the project publishable / legacy anon key that is accepted by the Data API). Never store the **service_role** key or any private administrator key in this bot.
3. Run the GitHub Actions workflow **Supabase availability heartbeat** manually, verify it says HEALTHY. Only then expect scheduled checks three times per day. Missing secrets makes it print NOT_CONFIGURED and send **no** requests.
4. Make sure the Actions workflow remains enabled. GitHub may delay or drop scheduled runs, and public-repository schedules may be disabled after 60 days without repository activity. Observe failures in the Actions tab; configure repository notifications if desired.

The check performs a **SELECT** against `public.service_heartbeat`, returns the constant `larkompassen`, and does not read or write any student tables. One marker is safe to expose to anonymous queries, but nothing personal must ever be stored in it.

Supabase may count API reads as database activity; these requests are **not a guarantee** against a Free Plan inactivity pause. They cannot revive an already-paused project; manually resume from the Supabase dashboard. Supabase Pro is the supported way to ensure no inactivity pausing.

This heartbeat is **not** a synchronization service. Cross-device learning data sync requires a separate, authenticated design with guardian-owned profiles, safe RLS, queues for offline writes, and proper tests.

References:
- https://supabase.com/docs/guides/platform/free-project-pausing
- https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows
