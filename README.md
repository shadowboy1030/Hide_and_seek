# Hide and seek

**`hide-seek-web/`** — Vite + React + Tailwind + React Router (Figma Make 기반). 배포 대상은 이 폴더입니다.

## 로컬 실행

```bash
cd hide-seek-web
npm install
npm run dev
```

## Vercel로 공개 URL 만들기

1. 이 저장소를 GitHub에 푸시한 뒤 [Vercel](https://vercel.com)에 로그인합니다.
2. **Add New → Project**에서 저장소를 import합니다.
3. **Root Directory**를 `hide-seek-web`으로 설정합니다.
4. Build Command: `npm run build`, Output Directory: `dist`
5. Deploy 후 발급되는 `*.vercel.app` 주소를 공유하면 됩니다.

`hide-seek-web/vercel.json`에 SPA용 rewrite가 있어 `/about`, `/experiences/...` 등 직접 URL 접속도 동작합니다.
