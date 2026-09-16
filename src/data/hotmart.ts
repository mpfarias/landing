import type { Locale } from "@/i18n/config";
import type { BookPrice } from "@/data/types";

export const HOTMART_BOOK_1: Record<Locale, string | null> = {
  "pt-br": "https://go.hotmart.com/L107597226L?dp=1",
  en: "https://go.hotmart.com/M107610021B",
  es: null,
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
  },
  en: {
    amount: 6.99,
    currency: "USD",
    display: "US$ 6.99",
    compareAtAmount: 19.9,
    compareAtDisplay: "US$ 19.90",
    installmentCount: 8,
    installmentDisplay: "0.87",
  },
  es: {
    amount: 6.99,
    currency: "USD",
    display: "US$ 6.99",
    compareAtAmount: 19.9,
    compareAtDisplay: "US$ 19.90",
    installmentCount: 8,
    installmentDisplay: "0.87",
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
