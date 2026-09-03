import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { themeInitScript } from "@/components/providers/theme-script";
import { localeHtmlLang, routing, type Locale } from "@/i18n/routing";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcelofarias.dev.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

const defaultLang = localeHtmlLang[routing.defaultLocale as Locale];

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang={defaultLang}
      className={geistSans.variable}
      suppressHydrationWarning
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        className={`${geistSans.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
