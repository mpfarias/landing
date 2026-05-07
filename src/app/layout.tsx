import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: "Marcelo Farias | Full Stack Web Developer",
  description:
    "Full Stack Web Developer specializing in landing pages, bug fixing, and web app deployment using React, Next.js, Node.js, TypeScript, Tailwind CSS, Vercel, and Cloudflare.",
  keywords: [
    "Marcelo Farias",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Landing Page Developer",
    "Bug Fixing",
    "Web App Deployment",
    "Vercel Deployment",
    "Cloudflare DNS",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Marcelo Farias" }],
  creator: "Marcelo Farias",
  openGraph: {
    title: "Marcelo Farias | Full Stack Web Developer",
    description:
      "I build modern web solutions for businesses and developers. Landing pages, bug fixes, and web app deployment using React, Next.js, Node.js, and modern web technologies.",
    url: "https://your-domain.com",
    siteName: "Marcelo Farias",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcelo Farias | Full Stack Web Developer",
    description:
      "Landing pages, bug fixes, and web app deployment using React, Next.js, Node.js, TypeScript, Vercel, and Cloudflare.",
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}