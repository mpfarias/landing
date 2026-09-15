export const locales = ["pt-br", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-br";

export const localeLabels: Record<Locale, string> = {
  "pt-br": "PT",
  en: "EN",
  es: "ES",
};

export const htmlLang: Record<Locale, string> = {
  "pt-br": "pt-BR",
  en: "en",
  es: "es",
};

export const openGraphLocale: Record<Locale, string> = {
  "pt-br": "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export const SERIES_STAGES = ["USAR", "TRANSFORMAR", "GERENCIAR", "CRIAR"] as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
