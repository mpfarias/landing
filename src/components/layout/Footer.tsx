import { getTranslations } from "next-intl/server";
import {
  getEmailHref,
  getGithubHref,
  getWhatsAppHref,
} from "@/data/contact";
import { homeNavHashes, homeNavKeys } from "@/data/home-nav";
import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations("footer");
  const tContact = await getTranslations("contact");
  const tNav = await getTranslations("navigation");
  const tCommon = await getTranslations("common");
  const year = new Date().getFullYear();
  const githubHref = getGithubHref();
  const emailHref = getEmailHref();
  const whatsappHref = getWhatsAppHref(tContact("whatsappMessage"));

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div className="min-w-0">
          <Link
            href="/"
            className="text-[13px] font-semibold tracking-[0.18em] text-foreground"
          >
            {tCommon("brand")}
          </Link>
          <p className="mt-2 text-[13px] text-foreground/85">
            {tCommon("authorName")}
          </p>
          <p className="mt-2 text-[12px] text-muted">
            {t("copyright", { year })}
          </p>
        </div>
        <nav
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
          aria-label={tNav("ariaLabel")}
        >
          {homeNavKeys.map((key) => (
            <Link
              key={key}
              href={{ pathname: "/", hash: homeNavHashes[key] }}
              className="text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
            >
              {tNav(key)}
            </Link>
          ))}
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tContact("whatsappAria")}
              className="text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
            >
              {t("whatsapp")}
            </a>
          ) : null}
          {emailHref ? (
            <a
              href={emailHref}
              aria-label={tContact("emailAria")}
              className="text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
            >
              {t("email")}
            </a>
          ) : null}
          {githubHref ? (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
            >
              {t("github")}
            </a>
          ) : null}
        </nav>
      </div>
    </footer>
  );
}
