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
      <p className="mt-2 break-all text-[17px] font-medium tracking-tight text-foreground sm:text-lg">
        {email}
      </p>
      <button
        type="button"
        onClick={copyEmail}
        className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
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
            className="group/nav-cta inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:text-muted"
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

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : ({ opacity: 0, y: 16 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
      delay: reduceMotion ? 0 : delay,
      duration: reduceMotion ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-x-hidden border-t border-border bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18] tech-grid"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 8%, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-16 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--glow-primary), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36 xl:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)] lg:items-end lg:gap-20">
          <div className="min-w-0">
            <motion.p
              {...reveal(0)}
              className="text-[12px] font-medium tracking-[0.2em] text-muted"
            >
              {t("label")}
            </motion.p>
            <motion.h2
              id="contact-heading"
              {...reveal(0.08)}
              className="mt-6 max-w-[16ch] text-[clamp(2.15rem,6.4vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-foreground"
            >
              <span className="block">{t("headlineLine1")}</span>
              <span className="block">{t("headlineLine2")}</span>
              <span className="mt-3 block text-accent-gradient">
                {t("headlineAccent")}
              </span>
            </motion.h2>
            <motion.p
              {...reveal(0.16)}
              className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
            >
              {t("body")}
            </motion.p>
          </div>

          <div className="min-w-0">
            <motion.div {...reveal(0.2)}>
              <ContactCta email={email} label={t("cta")} />
            </motion.div>

            {hasChannels ? (
              <motion.div
                {...reveal(0.28)}
                className="mt-10 flex flex-col gap-8"
              >
                {email ? <EmailBlock email={email} /> : null}
                <SocialLinks />
              </motion.div>
            ) : null}
          </div>
        </div>

        <motion.p
          {...reveal(0.12)}
          className="mt-20 max-w-sm text-[14px] leading-relaxed text-muted sm:mt-24"
        >
          <span className="block">{t("closingLine1")}</span>
          <span className="block">{t("closingLine2")}</span>
        </motion.p>
      </div>
    </section>
  );
}
