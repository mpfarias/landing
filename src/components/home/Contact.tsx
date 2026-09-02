import { getTranslations } from "next-intl/server";
import {
  contact,
  getActiveSocialLinks,
  isValidContactEmail,
} from "@/data/contact";

export async function Contact() {
  const t = await getTranslations("contact");
  const email = isValidContactEmail(contact.email) ? contact.email : null;
  const socials = getActiveSocialLinks();

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 sm:py-16">
        <h2
          id="contact-heading"
          className="max-w-lg text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-foreground"
        >
          {t("headline")}
        </h2>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
          {t("body")}
        </p>

        {email ? (
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex min-h-11 items-center text-[15px] font-medium text-foreground transition-opacity duration-200 hover:opacity-70"
          >
            {t("cta")}
          </a>
        ) : (
          <p className="mt-8 text-[15px] font-medium text-foreground">
            {t("cta")}
          </p>
        )}

        {email || socials.length > 0 ? (
          <ul className="mt-8 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {email ? (
              <li>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex min-h-10 items-center text-[14px] text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {email}
                </a>
              </li>
            ) : null}
            {socials.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center text-[14px] text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
