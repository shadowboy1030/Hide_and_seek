export const LANGUAGES = ["ko", "en", "zh", "ja"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_OPTIONS: { code: Language; label: string; short: string }[] = [
  { code: "ko", label: "한국어", short: "한" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
  { code: "ja", label: "日本語", short: "日" },
];

export function isLanguage(value: string | null): value is Language {
  return LANGUAGES.includes(value as Language);
}

export function htmlLang(code: Language): string {
  if (code === "zh") return "zh-Hans";
  return code;
}
