import { Button } from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import type { ReactNode } from "react";

type HotmartCtaProps = {
  href: string | null;
  locale: Locale;
  children: ReactNode;
  location:
    | "header"
    | "header-mobile"
    | "book-1-primary"
    | "book-1-secondary"
    | "sales-hero"
    | "sales-offer"
    | "sales-final";
  className?: string;
  onClick?: () => void;
};

export function HotmartCta({
  href,
  locale,
  children,
  location,
  className,
  onClick,
}: HotmartCtaProps) {
  if (!href) return null;

  return (
    <Button
      href={href}
      className={className}
      onClick={onClick}
      data-cta="hotmart-book-1"
      data-cta-location={location}
      data-cta-locale={locale}
    >
      {children}
    </Button>
  );
}
