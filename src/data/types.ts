import type { Locale } from "@/i18n/config";

export type BookStatus = "available" | "coming-soon" | "development";
export type BookStage = "use" | "transform" | "manage" | "create";
export type SeriesId = "pequenos-negocios-com-ia";

export type LocaleField<T> = Partial<Record<Locale, T>>;

export type BookPrice = {
  amount: number;
  currency: "BRL" | "USD";
  display: string;
};

export type BookChapter = {
  number: number;
  title: string;
  description: string;
};

export type Book = {
  id: string;
  slug: LocaleField<string>;
  order: number;
  series: SeriesId;
  stage: BookStage;
  stageLabel: "USAR" | "TRANSFORMAR" | "GERENCIAR" | "CRIAR";
  status: BookStatus;
  title: LocaleField<string>;
  subtitle: LocaleField<string>;
  description: LocaleField<string>;
  cover: LocaleField<string | null>;
  coverAlt: LocaleField<string>;
  hotmartUrl: Record<Locale, string | null>;
  price: Record<Locale, BookPrice | null>;
  centralQuestion: string;
  focus: string;
  expectedOutcome: string;
  scope: string[];
  outOfScope: string[];
  highlights: string[];
  audience: string[];
  chapters: BookChapter[];
};
