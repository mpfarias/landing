import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  hrefForLocale?: (code: Locale) => string;
};

export function LanguageSwitcher({
  locale,
  label,
  hrefForLocale,
}: LanguageSwitcherProps) {
  return (
    <nav className="flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.08em]" aria-label={label}>
      {locales.map((code, index) => {
        const current = code === locale;
        const href = hrefForLocale ? hrefForLocale(code) : `/${code}`;

        return (
          <span key={code} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span className="text-line" aria-hidden>
                |
              </span>
            ) : null}
            <Link
              href={href}
              hrefLang={code}
              aria-current={current ? "page" : undefined}
              className={
                current
                  ? "text-gold"
                  : "text-muted transition-colors duration-200 hover:text-foreground"
              }
            >
              {localeLabels[code]}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
