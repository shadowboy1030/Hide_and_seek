# HIDE & SEEK 웹 — 디자인 스냅샷

이 문서는 **갈아엎기 전** 참고용으로 남겨 둔 디자인·구조 요약입니다.  
코드는 계속 바뀌므로, 확실한 백업은 **Git 커밋/브랜치** 또는 **폴더 복사**를 권장합니다.

## 브랜드 컬러 (5색)

| 이름   | HEX       | 용도 요약 |
|--------|-----------|-----------|
| base   | `#002D56` | 남색 — 레거시 `black`, 배경·헤더 등 |
| surface| `#DADAD3` | 밝은 회색빛 — 레거시 `white`/`mint` 매핑 |
| bronze | `#8D7150` | 레거시 `magenta` |
| teal   | `#146E7A` | 레거시 `blue` |
| muted  | `#7E7F82` | 보조 텍스트 |

전체 토큰 정의: `src/styles/theme.ts`

## Toss 스타일 가이드 상세 (`/guides/:id`)

- 페이지 루트: `TossPageRoot` — 배경 `tossBg` `#f2f4f6`
- 히어로: 흰 카드 `HeroCard`, 라운드 `radii.lg` (20px), 그림자 `tossShadow`
- 섹션: 흰 카드 스택, `tossShadowSm`
- CTA: `CtaCard` + 풀폭 `TossCta` (LinkButton `blue`)
- 다른 가이드: `ChipLink` 필 형태

파일: `src/pages/GuideDetailPage.tsx`

## 다국어

- `src/i18n.tsx` — `ko` / `en`, `localStorage` 키 `hide-seek-language`
- `src/main.tsx` — `I18nProvider` 래핑

## 디자인에 직접 영향 있는 주요 파일

| 경로 | 설명 |
|------|------|
| `src/styles/theme.ts` | 색·그림자·라운드 토큰 |
| `src/styles/GlobalStyle.ts` | body 배경 `base` 등 |
| `src/components/Header.tsx` | 그리드 네비 + 가운데 브랜드 + 언어 토글 |
| `src/components/Footer.tsx` | Mint 영역 + 하단 3칸 바 |
| `src/components/Button.tsx` | 버튼 variant |
| `src/components/GuideCard.tsx` | 홈 가이드 카드 |
| `src/components/PageLayout.tsx` | `PageRoot` 기본 배경 `base` |
| `src/pages/HomePage.tsx` | 히어로 이미지 + 가이드 그리드 |
| `src/pages/AboutPage.tsx` / `ClassesPage.tsx` | 이미지 풀페이지 |
| `src/data/guides.ts` | 가이드 카피 (한/영 `LocalizedText`) |

## Git으로 한 번에 백업하는 방법

저장소 루트에서 (예시):

```bash
git add hide-seek-web
git commit -m "chore: snapshot design before redesign"
git branch design/archive-2026-05-13
```

또는 태그:

```bash
git tag design-v1-before-redesign
```

## 폴더 복사로 백업

탐색기에서 `hide-seek-web` 폴더 전체를 `hide-seek-web-backup` 등으로 복사해도 됩니다. (`node_modules`는 용량이 크므로 제외해도 되고, 나중에 `npm install` 하면 됩니다.)
