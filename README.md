# Kerala Lottery Live

Premium mobile-first Kerala State Lottery live results portal built with Next.js 15, Tailwind CSS 4, and Framer Motion.

## Features

- **Homepage** — Breaking live ticker, hero for today's draw, countdown timer, result cards
- **Result detail** — LIVE badge, prizes, ticket checker, live timeline, PDF download, related articles
- **Admin dashboard** — Add/edit results, live updates, PDF upload, countdown & homepage settings (UI)

## Tech Stack

- Next.js App Router
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- Optimized for Vercel

## Getting Started

```bash
cd Projects/kerala-lottery-live
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

- Home: `/`
- Live result: `/results/karunya-plus-kn-598`
- Admin: `/admin`

## Deploy to Vercel

```bash
npm run build
```

Connect the repo to Vercel or run `vercel` from the project root.

## Project Structure

```
src/
├── app/              # Pages (home, results/[slug], admin)
├── components/       # UI, layout, home, result, admin
├── data/             # Dummy Kerala lottery data
├── lib/              # Utilities
└── types/            # TypeScript types
```

## Note

Admin forms are UI-only demos. Connect to a database (e.g. Supabase, MongoDB) and API routes for production use.
