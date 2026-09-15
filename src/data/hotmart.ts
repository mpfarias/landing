import type { Locale } from "@/i18n/config";
import type { BookPrice } from "@/data/types";

export const HOTMART_BOOK_1: Record<Locale, string | null> = {
  "pt-br": "https://go.hotmart.com/L107597226L",
  en: "https://go.hotmart.com/M107610021B",
  es: null,
};

export const BOOK_1_PRICE: Record<Locale, BookPrice> = {
  "pt-br": {
    amount: 26.99,
    currency: "BRL",
    display: "R$ 26,99",
  },
  en: {
    amount: 6.99,
    currency: "USD",
    display: "US$ 6.99",
  },
  es: {
    amount: 6.99,
    currency: "USD",
    display: "US$ 6.99",
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
