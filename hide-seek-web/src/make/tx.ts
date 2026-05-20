import type { Language } from "../i18n/config";

export type Tx = Record<Language, string>;

/** Four-language string bundle */
export function tx(ko: string, en: string, zh: string, ja: string): Tx {
  return { ko, en, zh, ja };
}
