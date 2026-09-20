import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter, Manrope, Source_Sans_3 } from "next/font/google";
import { site as professional } from "@/professional/data/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111F",
};

export const metadata: Metadata = {
  metadataBase: new URL(professional.url),
  title: professional.title,
  description: professional.description,
  applicationName: professional.name,
  authors: [{ name: professional.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: professional.name,
    title: professional.openGraphTitle,
    description: professional.openGraphDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: professional.openGraphTitle,
    description: professional.openGraphDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-theme="professional"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${manrope.variable} ${sourceSans.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-ink">
        {children}
      </body>
    </html>
  );
}
