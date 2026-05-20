import type { Language } from "../i18n/config";
import type { Tx } from "./tx";

export type { Tx } from "./tx";

export function pick(o: Tx, lang: Language): string {
  return o[lang];
}
