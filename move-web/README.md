# HIDE & SEEK — landing (Next.js)

Pixel-aligned layout based on the provided Figma exports / references. Photography uses curated Unsplash scenes (Seoul / hanok / night city); swap URLs in `src/app/page.tsx` and `src/components/hide-and-seek/` if you replace them with exported slices.

Design reference PNGs (optional QA) live in `public/brand/` (`desktop.png`, `tablet.png`, `mobile.png`).

## Run

```bash
cd move-web
npm install
npx prisma migrate dev
npm run dev
```

## Stack

- Next.js App Router, TypeScript, Tailwind v4
- **Bebas Neue** (display) + **Inter** (body)
- Brand tokens: `--hs-blue` `#2944ff`, `--hs-magenta` `#e100ff`, `--hs-mint` `#d4f7f2`
- `POST /api/booking` → SQLite `BookingInquiry` (name, email, message)

## Env

See `.env.example` — `DATABASE_URL` for Prisma.
