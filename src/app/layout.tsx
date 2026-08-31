import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcelofarias.dev.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
