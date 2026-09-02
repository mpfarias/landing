"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const helpKeys = ["systems", "automation", "integration", "products"] as const;

export function AboutSection() {
  const t = useTranslations("about");
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 overflow-x-hidden bg-background"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-[12px] font-medium tracking-[0.2em] text-muted">
            {t("label")}
          </p>
          <h2
            id="about-heading"
            className="mt-4 max-w-[16.5rem] text-[clamp(1.65rem,3.2vw,2.45rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-foreground sm:max-w-[22rem] lg:max-w-[26rem]"
          >
            <span className="block">{t("headlineLine1")}</span>
            <span className="block">
              {t("headlineLine2")}{" "}
              <span className="text-accent-gradient">
                {t("headlineAccentLead")}
              </span>
            </span>
            <span className="block text-accent-gradient">
              {t("headlineAccentEnd")}
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
            {t("paragraph")}
          </p>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
              {t("helpLabel")}
            </p>
            <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-0 sm:gap-y-2">
              {helpKeys.map((key, index) => (
                <li
                  key={key}
                  className="text-[14px] font-medium tracking-[-0.01em] text-foreground sm:text-[15px]"
                >
                  {index > 0 ? (
                    <span
                      aria-hidden
                      className="mx-3 hidden text-foreground/25 sm:inline"
                    >
                      ·
                    </span>
                  ) : null}
                  {t(`help.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
