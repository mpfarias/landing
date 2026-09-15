import { getBookPrice, getBookTitle, getFeaturedBook, getPurchaseHref, books } from "@/data/books";
import { site } from "@/data/site";
import { getMessages } from "@/content";
import { htmlLang, type Locale } from "@/i18n/config";

export function JsonLd({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);
  const featured = getFeaturedBook();
  const purchaseHref = getPurchaseHref(featured, locale);
  const featuredTitle = getBookTitle(featured, locale) ?? copy.brand;
  const price = getBookPrice(featured, locale);

  const offer = price
    ? {
        "@type": "Offer",
        price: price.amount.toFixed(2),
        priceCurrency: price.currency,
        availability: "https://schema.org/InStock",
        ...(purchaseHref ? { url: purchaseHref } : {}),
      }
    : purchaseHref
      ? {
          "@type": "Offer",
          url: purchaseHref,
          availability: "https://schema.org/InStock",
        }
      : null;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: copy.brand,
        url: `${site.url}/${locale}`,
        description: copy.metadata.description,
        inLanguage: locale,
        publisher: {
          "@type": "Person",
          name: site.author,
        },
      },
      {
        "@type": "ItemList",
        name: copy.brand,
        itemListElement: books.map((book, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: getBookTitle(book, locale) ?? copy.hero.stages[book.order - 1],
        })),
      },
      {
        "@type": "Book",
        name: featuredTitle,
        inLanguage: htmlLang[locale],
        description: copy.book1.body[0],
        ...(purchaseHref ? { url: purchaseHref } : {}),
        ...(offer ? { offers: offer } : {}),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
