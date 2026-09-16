import type { Locale } from "@/i18n/config";

export type BookPreviewPage = {
  src: string;
  alt: string;
};

const ptBrPages: BookPreviewPage[] = [
  {
    src: "/books/pt-br/preview/page-01.webp",
    alt: "Amostra da página 2 (Sumário) do livro Pequenos Negócios com IA",
  },
  {
    src: "/books/pt-br/preview/page-02.webp",
    alt: "Amostra da página 3 (Introdução) do livro Pequenos Negócios com IA",
  },
  {
    src: "/books/pt-br/preview/page-03.webp",
    alt: "Amostra da página 4 (Capítulo 1) do livro Pequenos Negócios com IA",
  },
  {
    src: "/books/pt-br/preview/page-04.webp",
    alt: "Amostra da página 5 do livro Pequenos Negócios com IA",
  },
  {
    src: "/books/pt-br/preview/page-05.webp",
    alt: "Amostra da página 6 do livro Pequenos Negócios com IA",
  },
  {
    src: "/books/pt-br/preview/page-06.webp",
    alt: "Amostra da página 7 do livro Pequenos Negócios com IA",
  },
];

const enPages: BookPreviewPage[] = [
  {
    src: "/books/en/preview/page-01.webp",
    alt: "Sample of page 2 (Table of Contents) from Small Businesses with AI",
  },
  {
    src: "/books/en/preview/page-02.webp",
    alt: "Sample of page 3 (Introduction) from Small Businesses with AI",
  },
  {
    src: "/books/en/preview/page-03.webp",
    alt: "Sample of page 4 (Chapter 1) from Small Businesses with AI",
  },
  {
    src: "/books/en/preview/page-04.webp",
    alt: "Sample of page 5 from Small Businesses with AI",
  },
  {
    src: "/books/en/preview/page-05.webp",
    alt: "Sample of page 6 from Small Businesses with AI",
  },
];

const esPages: BookPreviewPage[] = [
  {
    src: "/books/es/preview/page-01.webp",
    alt: "Muestra de la página 2 (Índice) del libro Pequeños Negocios con IA",
  },
  {
    src: "/books/es/preview/page-02.webp",
    alt: "Muestra de la página 3 (Introducción) del libro Pequeños Negocios con IA",
  },
  {
    src: "/books/es/preview/page-03.webp",
    alt: "Muestra de la página 4 (Capítulo 1) del libro Pequeños Negocios con IA",
  },
  {
    src: "/books/es/preview/page-04.webp",
    alt: "Muestra de la página 5 del libro Pequeños Negocios con IA",
  },
  {
    src: "/books/es/preview/page-05.webp",
    alt: "Muestra de la página 6 del libro Pequeños Negocios con IA",
  },
];

export const book1PreviewPages: Record<Locale, BookPreviewPage[]> = {
  "pt-br": ptBrPages,
  en: enPages,
  es: esPages,
};

export function getBook1PreviewPages(locale: Locale): BookPreviewPage[] {
  return book1PreviewPages[locale] ?? [];
}
