import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getActiveSocialLinks } from "@/data/contact";
import { Link } from "@/i18n/navigation";

const footerNav = [
  { key: "about", href: "sobre" },
  { key: "projects", href: "projetos" },
  { key: "experience", href: "experiencia" },
  { key: "technology", href: "tecnologia" },
  { key: "publications", href: "publicacoes" },
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
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="min-w-0 max-w-sm">
            <Link
              href="/"
              className="inline-block text-[16px] font-semibold tracking-[0.2em] text-foreground transition-opacity duration-200 hover:opacity-75"
            >
              {tCommon("brand")}
            </Link>
            <p className="mt-4 text-sm font-medium text-foreground">
              {t("name")}
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
              {t("tagline")}
            </p>
          </div>

          <div className="min-w-0 lg:pt-1">
            <nav aria-label={t("ariaLabel")}>
              <ul className="grid grid-cols-2 gap-x-8 sm:flex sm:flex-wrap sm:gap-x-6">
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

            {socials.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-x-5">
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

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-[12px] leading-relaxed text-muted">
            {t("copyright", { year })}
          </p>
          <p className="text-[12px] leading-relaxed text-muted">
            {t("signature")}
          </p>
        </div>
      </div>
    </footer>
  );
}
