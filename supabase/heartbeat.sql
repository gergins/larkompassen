-- Lärkompassen: harmless Supabase activity check.
-- Execute once in Supabase SQL Editor after reviewing it.
-- Contains no child profiles, scores, reward data or personal information.
create table if not exists public.service_heartbeat (
  id text primary key check (id = 'larkompassen'),
  created_at timestamptz not null default now()
);
insert into public.service_heartbeat(id) values ('larkompassen')
on conflict (id) do nothing;
alter table public.service_heartbeat enable row level security;
revoke all on public.service_heartbeat from anon, authenticated;
grant select (id) on public.service_heartbeat to anon;
drop policy if exists "Read public health marker only" on public.service_heartbeat;
create policy "Read public health marker only"
on public.service_heartbeat for select to anon
using (id = 'larkompassen');
