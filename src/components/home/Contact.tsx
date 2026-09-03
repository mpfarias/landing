import { getTranslations } from "next-intl/server";
import {
  contact,
  getEmail,
  getEmailHref,
  getWhatsAppHref,
} from "@/data/contact";

export async function Contact() {
  const t = await getTranslations("contact");
  const email = getEmail();
  const emailHref = getEmailHref();
  const whatsappHref = getWhatsAppHref(t("whatsappMessage"));

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <p className="text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
          {t("title")}
        </p>
        <h2
          id="contact-heading"
          className="mt-3 max-w-2xl text-[clamp(1.7rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-foreground"
        >
          <span className="block">{t("headlineLine1")}</span>
          <span className="block">{t("headlineLine2")}</span>
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
          {t("body")}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
          {whatsappHref ? (
            <div>
              <p className="text-[12px] font-medium tracking-[0.12em] text-muted uppercase">
                {t("whatsappLabel")}
              </p>
              <p className="mt-2 text-[15px] text-foreground">
                {contact.whatsapp.display}
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("whatsappAria")}
                className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-[15px] font-medium text-background transition-opacity duration-200 hover:opacity-85"
              >
                {t("whatsappCta")}
              </a>
            </div>
          ) : null}

          {email && emailHref ? (
            <div className="min-w-0">
              <p className="text-[12px] font-medium tracking-[0.12em] text-muted uppercase">
                {t("emailLabel")}
              </p>
              <a
                href={emailHref}
                aria-label={t("emailAria")}
                className="mt-2 inline-flex min-h-11 max-w-full items-center break-all text-[15px] text-foreground [overflow-wrap:anywhere] transition-colors duration-200 hover:text-primary"
              >
                {email} ↗
              </a>
              <a
                href={emailHref}
                aria-label={t("emailAria")}
                className="mt-3 inline-flex min-h-11 items-center text-[14px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {t("emailCta")}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
