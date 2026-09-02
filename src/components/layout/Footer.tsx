import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getActiveSocialLinks } from "@/data/contact";
import { Link } from "@/i18n/navigation";

const footerNav = [
  { key: "about", href: "sobre" },
  { key: "projects", href: "projetos" },
  { key: "contact", href: "contato" },
] as const;

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("navigation");
  const tCommon = await getTranslations("common");
  const year = new Date().getFullYear();
  const socials = getActiveSocialLinks();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <Link
              href="/"
              className="inline-block text-[16px] font-semibold tracking-[0.2em] text-foreground transition-opacity duration-200 hover:opacity-75"
            >
              {tCommon("brand")}
            </Link>
            <p className="mt-2 text-sm font-medium text-foreground">
              {t("name")}
            </p>
          </div>

          <nav aria-label={t("ariaLabel")}>
            <ul className="flex flex-wrap gap-x-6">
              {footerNav.map((item) => (
                <li key={item.key}>
                  <Link
                    href={{ pathname: "/", hash: item.href }}
                    className="nav-link inline-flex min-h-11 items-center text-[13px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] leading-relaxed text-muted">
            {t("copyright", { year })}
          </p>
          {socials.length > 0 ? (
            <ul className="flex flex-wrap gap-x-5">
              {socials.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/nav-cta inline-flex min-h-11 items-center gap-1 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="icon-shift icon-shift-diag size-3.5 opacity-60"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
