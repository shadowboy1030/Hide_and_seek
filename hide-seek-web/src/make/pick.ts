import type { Language } from "../i18n";

export type Tx = Record<Language, string>;

export function pick<T extends Tx>(o: T, lang: Language): string {
  return o[lang];
}
