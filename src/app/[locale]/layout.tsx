import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import {
  localeHtmlLang,
  localeOpenGraph,
  locales,
  routing,
  type Locale,
} from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcelofarias.dev.br";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F9FC" },
    { media: "(prefers-color-scheme: dark)", color: "#080B10" },
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const languages = Object.fromEntries(
    locales.map((code) => [code, `/${code}`]),
  ) as Record<string, string>;
  languages["x-default"] = `/${routing.defaultLocale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    authors: [{ name: "Marcelo Pires de Farias" }],
    creator: "Marcelo Pires de Farias",
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      siteName: "Marcelo Pires de Farias",
      type: "website",
      locale: localeOpenGraph[locale],
      alternateLocale: locales
        .filter((code) => code !== locale)
        .map((code) => localeOpenGraph[code]),
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "1024x1024" },
      ],
      shortcut: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "any" }],
      apple: [{ url: "/icon.png", type: "image/png", sizes: "1024x1024" }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={localeHtmlLang[locale as Locale]}
      className={geistSans.variable}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.className} bg-background text-foreground antialiased`}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
