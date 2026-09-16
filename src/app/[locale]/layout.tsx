import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentLang } from "@/components/i18n/DocumentLang";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { htmlLang, isLocale, locales, openGraphLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  const locale = raw;
  const copy = getMessages(locale);
  const languages: Record<string, string> = {
    "pt-BR": "/pt-br",
    "pt-br": "/pt-br",
    en: "/en",
    es: "/es",
    "x-default": "/pt-br",
  };

  return {
    metadataBase: new URL(site.url),
    title: copy.metadata.title,
    description: copy.metadata.description,
    authors: [{ name: site.author }],
    creator: site.author,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      locale: openGraphLocale[locale],
      url: `/${locale}`,
      siteName: copy.brand,
      title: copy.metadata.title,
      description: copy.metadata.description,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metadata.title,
      description: copy.metadata.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale: Locale = raw;
  const copy = getMessages(locale);

  return (
    <>
      <DocumentLang lang={htmlLang[locale]} />
      <JsonLd locale={locale} />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-background"
      >
        {copy.skipToContent}
      </a>
      {children}
    </>
  );
}
