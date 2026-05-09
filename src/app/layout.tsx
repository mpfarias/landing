import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcelofarias.dev.br";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Marcelo Farias | Full Stack Web Developer",
  description:
    "Full Stack Web Developer specializing in landing pages, custom web apps, dashboards, admin panels, SaaS MVPs, bug fixing, and web app deployment using React, Next.js, Node.js, TypeScript, Tailwind CSS, Vercel, and Cloudflare.",
  keywords: [
    "Marcelo Farias",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Landing Page Developer",
    "Custom Web Apps",
    "Dashboard Developer",
    "Admin Panel Developer",
    "SaaS MVP",
    "Bug Fixing",
    "Web App Deployment",
    "Vercel Deployment",
    "Cloudflare DNS",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Marcelo Farias" }],
  creator: "Marcelo Farias",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "1024x1024" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "any" }],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "1024x1024" }],
  },
  openGraph: {
    title: "Marcelo Farias | Full Stack Web Developer",
    description:
      "I build modern web solutions for businesses and developers. Landing pages, custom web apps, dashboards, SaaS MVPs, bug fixes, and deployment using React, Next.js, Node.js, and modern web technologies.",
    url: "/",
    siteName: "Marcelo Farias",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Marcelo Farias - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcelo Farias | Full Stack Web Developer",
    description:
      "Landing pages, custom web apps, dashboards, SaaS MVPs, bug fixes, and deployment using React, Next.js, Node.js, TypeScript, Vercel, and Cloudflare.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}