import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookSalesPage } from "@/components/book-sales/BookSalesPage";
import { getBook1SalesCopy } from "@/content/book1-sales";
import { getMessages } from "@/content";
import {
  getBook1BySlug,
  getBook1Hreflang,
  getBookCover,
  getBookPrice,
  getBookTitle,
  getFeaturedBook,
  getPurchaseHref,
} from "@/data/books";
import { site } from "@/data/site";
import { htmlLang, isLocale, locales, openGraphLocale, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  const book = getFeaturedBook();
  return locales.map((locale) => ({
    locale,
    bookSlug: book.slug[locale],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; bookSlug: string }>;
}): Promise<Metadata> {
  const { locale: raw, bookSlug } = await params;
  if (!isLocale(raw)) return {};

  const locale: Locale = raw;
  const book = getBook1BySlug(locale, bookSlug);
  if (!book) return {};

  const sales = getBook1SalesCopy(locale);
  const cover = getBookCover(book, locale) ?? getBookCover(book, locale, "mockup");
  const title = getBookTitle(book, locale) ?? sales.metadata.title;
  const canonical = `/${locale}/${book.slug[locale]}`;

  return {
    metadataBase: new URL(site.url),
    title: sales.metadata.title,
    description: sales.metadata.description,
    authors: [{ name: site.author }],
    creator: site.author,
    alternates: {
      canonical,
      languages: getBook1Hreflang(),
    },
    openGraph: {
      type: "website",
      locale: openGraphLocale[locale],
      url: canonical,
      siteName: getMessages(locale).brand,
      title: sales.metadata.title,
      description: sales.metadata.description,
      ...(cover
        ? {
            images: [
              {
                url: cover,
                alt: book.coverAlt[locale] ?? title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: sales.metadata.title,
      description: sales.metadata.description,
      ...(cover ? { images: [cover] } : {}),
    },
  };
}

export default async function Book1SalesRoute({
  params,
}: {
  params: Promise<{ locale: string; bookSlug: string }>;
}) {
  const { locale: raw, bookSlug } = await params;
  if (!isLocale(raw)) notFound();

  const book = getBook1BySlug(raw, bookSlug);
  if (!book) notFound();

  const copy = getMessages(raw);

  return (
    <>
      <BookSalesJsonLd locale={raw} />
      <BookSalesPage locale={raw} book={book} copy={copy} />
    </>
  );
}

function BookSalesJsonLd({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);
  const sales = getBook1SalesCopy(locale);
  const book = getFeaturedBook();
  const purchaseHref = getPurchaseHref(book, locale);
  const featuredTitle = getBookTitle(book, locale) ?? copy.brand;
  const price = getBookPrice(book, locale);
  const pageUrl = `${site.url}/${locale}/${book.slug[locale]}`;
  const cover = getBookCover(book, locale);

  const offer = price
    ? {
        "@type": "Offer",
        price: price.amount.toFixed(2),
        priceCurrency: price.currency,
        availability: "https://schema.org/InStock",
        url: purchaseHref ?? pageUrl,
      }
    : null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: featuredTitle,
    inLanguage: htmlLang[locale],
    description: sales.metadata.description,
    url: pageUrl,
    author: {
      "@type": "Person",
      name: site.author,
    },
    ...(cover ? { image: `${site.url}${cover}` } : {}),
    ...(offer ? { offers: offer } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
