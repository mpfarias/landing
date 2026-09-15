import { en } from "@/content/en";
import { es } from "@/content/es";
import { ptBr } from "@/content/pt-br";
import type { Messages } from "@/content/types";
import type { Locale } from "@/i18n/config";

export type { Messages } from "@/content/types";

const catalog: Record<Locale, Messages> = {
  "pt-br": ptBr,
  en,
  es,
};

export function getMessages(locale: Locale): Messages {
  return catalog[locale];
}
