# HIDE & SEEK — Vite + React

서울 로컬 체험 랜딩 사이트. **배포 대상은 이 폴더**입니다 (루트 README의 Vercel 안내 참고).

## Stack

- Vite 8, React 19, TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router 7 (SPA)
- Motion, Lucide React
- 한국어 / English (`src/i18n.tsx`)

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/experiences` | Experiences 목록 |
| `/experiences/:courseId` | 코스 상세 |
| `/about` | About |

직접 URL 접속은 `vercel.json`의 SPA rewrite로 처리됩니다.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

산출물: `dist/`

## Vercel

- Root Directory: `hide-seek-web`
- Build: `npm run build`
- Output: `dist`

## Assets

- 플레이스홀더 이미지 URL: `src/assets/placeholders.ts`
- 디자인 참고 스크린샷 경로: `src/assets/designSources.ts`
- 로컬 이미지로 바꿀 때는 `public/` 또는 `src/assets/`에 두고 import/URL을 교체하면 됩니다.
