import type { Locale } from "@/i18n/config";
import type { BookPrice } from "@/data/types";

export const HOTMART_BOOK_1: Record<Locale, string | null> = {
  "pt-br": "https://pay.hotmart.com/L107597226L?bid=1789590587932",
  en: "https://pay.hotmart.com/M107610021B",
  es: "https://pay.hotmart.com/E107638013T",
};

export const BOOK_1_PRICE: Record<Locale, BookPrice> = {
  "pt-br": {
    amount: 37,
    currency: "BRL",
    display: "R$ 37,00",
    compareAtAmount: 89.9,
    compareAtDisplay: "R$ 89,90",
    installmentCount: 8,
    installmentDisplay: "5,38",
    cashText: "R$ 37,00 à vista",
    installmentText: "em até 8x de R$ 5,38*",
  },
  en: {
    amount: 6.99,
    currency: "USD",
    display: "US$ 6.99",
    compareAtAmount: 19.9,
    compareAtDisplay: "US$ 19.90",
  },
  es: {
    amount: 6.99,
    currency: "USD",
    display: "US$ 6.99",
    compareAtAmount: 19.9,
    compareAtDisplay: "US$ 19.90",
  },
};

export function resolveHotmartUrl(
  locale: Locale,
  envValue: string | undefined,
): string | null {
  const fromEnv = envValue?.trim();
  if (fromEnv) return fromEnv;
  return HOTMART_BOOK_1[locale];
}
