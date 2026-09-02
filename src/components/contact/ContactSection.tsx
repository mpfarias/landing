"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import {
  contact,
  getActiveSocialLinks,
  isValidContactEmail,
} from "@/data/contact";

function ContactCta({
  email,
  label,
}: {
  email: string | null;
  label: string;
}) {
  const className =
    "cta-purchase group/cta-purchase inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-white sm:w-auto";

  const icon = (
    <ArrowUpRight
      className="icon-shift icon-shift-diag size-4 opacity-90"
      aria-hidden
    />
  );

  if (isValidContactEmail(email)) {
    return (
      <a href={`mailto:${email}`} className={className}>
        {label}
        {icon}
      </a>
    );
  }

  return (
    <span className={className}>
      {label}
      {icon}
    </span>
  );
}

function EmailBlock({ email }: { email: string }) {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be unavailable; keep silent instead of alert()
    }
  }

  return (
    <div className="min-w-0">
      <p className="text-[11px] font-medium tracking-[0.18em] text-muted">
        {t("emailLabel")}
      </p>
      <p className="mt-2 break-all text-[17px] font-medium tracking-tight text-foreground">
        {email}
      </p>
      <button
        type="button"
        onClick={copyEmail}
        className="mt-2 inline-flex min-h-10 items-center text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
        aria-label={copied ? t("copied") : t("copyEmail")}
      >
        {copied ? t("copied") : t("copyEmail")}
      </button>
      <p className="sr-only" aria-live="polite">
        {copied ? t("copied") : ""}
      </p>
    </div>
  );
}

function SocialLinks() {
  const links = getActiveSocialLinks();
  if (links.length === 0) return null;

  return (
    <ul className="flex flex-col gap-1">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className="group/nav-cta inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:text-muted"
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
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
  );
}

export function ContactSection() {
  const t = useTranslations("contact");
  const reduceMotion = useReducedMotion();
  const email = isValidContactEmail(contact.email) ? contact.email : null;
  const socials = getActiveSocialLinks();
  const hasChannels = Boolean(email) || socials.length > 0;

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-x-hidden border-t border-border bg-background"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)] lg:items-end lg:gap-16"
        >
          <div className="min-w-0">
            <p className="text-[12px] font-medium tracking-[0.2em] text-muted">
              {t("label")}
            </p>
            <h2
              id="contact-heading"
              className="mt-4 max-w-[16ch] text-[clamp(1.85rem,4.8vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-foreground"
            >
              <span className="block">{t("headlineLine1")}</span>
              <span className="block">{t("headlineLine2")}</span>
              <span className="mt-2 block text-accent-gradient">
                {t("headlineAccent")}
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              {t("body")}
            </p>
          </div>

          <div className="min-w-0">
            <ContactCta email={email} label={t("cta")} />
            {hasChannels ? (
              <div className="mt-8 flex flex-col gap-6">
                {email ? <EmailBlock email={email} /> : null}
                <SocialLinks />
              </div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
