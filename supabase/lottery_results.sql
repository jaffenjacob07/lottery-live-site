-- Run in Supabase SQL Editor to create the lottery_results table.

create table if not exists public.lottery_results (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  draw_number text not null,
  date date not null,
  first_prize text not null,
  location text not null,
  is_live boolean not null default false,
  updated_at timestamptz not null default now(),
  author text default 'Results Desk',
  author_role text default 'Editor',
  hero_image text,
  second_prize text,
  third_prize text,
  consolation_prizes text[] default '{}',
  lower_prizes text[] default '{}',
  pdf_url text,
  yesterday_slug text,
  created_at timestamptz not null default now()
);

alter table public.lottery_results enable row level security;

create policy "Public read lottery_results"
  on public.lottery_results
  for select
  to anon, authenticated
  using (true);
