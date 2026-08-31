import { defineRouting } from "next-intl/routing";

export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "pt",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/projects/[slug]": {
      pt: "/projetos/[slug]",
      en: "/projects/[slug]",
      es: "/proyectos/[slug]",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;

export const localeHtmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export const localeOpenGraph: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};
