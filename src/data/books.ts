import { pequenosNegociosBooks } from "@/data/pequenos-negocios-books";
import type { Book, BookPrice, BookStatus } from "@/data/types";
import type { Locale } from "@/i18n/config";

export type { Book, BookChapter, BookPrice, BookStage, BookStatus } from "@/data/types";

export const books: Book[] = [...pequenosNegociosBooks];

export function getBooks(): Book[] {
  return [...books].sort((a, b) => a.order - b.order);
}

export function getFeaturedBook(): Book {
  return (
    getBooks().find((book) => book.status === "available") ?? getBooks()[0]
  );
}

export function getBookCover(book: Book, locale: Locale): string | null {
  const cover = book.cover[locale];
  return typeof cover === "string" && cover.trim() ? cover : null;
}

export function getPurchaseHref(book: Book, locale: Locale): string | null {
  if (book.status !== "available") return null;
  const url = book.hotmartUrl[locale];
  return url && url.trim() ? url : null;
}

export function getCoverAlt(book: Book, locale: Locale): string {
  if (getBookCover(book, locale) && book.coverAlt[locale]) {
    return book.coverAlt[locale] as string;
  }

  return `Etapa ${book.stageLabel}`;
}

export function getBookTitle(book: Book, locale: Locale): string | null {
  return book.title[locale] ?? null;
}

export function getBookSubtitle(book: Book, locale: Locale): string | null {
  return book.subtitle[locale] ?? null;
}

export function getBookPrice(book: Book, locale: Locale): BookPrice | null {
  return book.price[locale] ?? null;
}

export function getStatusLabel(
  status: BookStatus,
  labels: { available: string; development: string },
): string {
  if (status === "available") return labels.available;
  return labels.development;
}
