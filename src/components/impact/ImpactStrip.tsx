"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const itemKeys = [
  "experience",
  "systems",
  "operations",
  "automation",
] as const;

export function ImpactStrip() {
  const t = useTranslations("impact");
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label={t("ariaLabel")}
      className="relative border-y border-border bg-background-secondary"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28] tech-grid"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-11 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4">
          {itemKeys.map((key, index) => {
            const isAccent = index === 0;
            const isOdd = index % 2 === 1;
            const isBottomRow = index >= 2;

            return (
              <motion.li
                key={key}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.08,
                  duration: reduceMotion ? 0 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "relative flex min-w-0 flex-col",
                  "sm:px-6 sm:py-5",
                  "lg:px-8 lg:py-0 xl:px-10",
                  isOdd ? "sm:border-l sm:border-border" : "",
                  isBottomRow
                    ? "sm:border-t sm:border-border lg:border-t-0"
                    : "",
                  index > 0 ? "lg:border-l lg:border-border" : "",
                ].join(" ")}
              >
                <p className="flex min-h-[2.75em] items-end text-[clamp(1.35rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
                  {t(`items.${key}.value`)}
                </p>
                <span
                  aria-hidden
                  className={[
                    "mt-3 block h-px w-10 shrink-0",
                    isAccent
                      ? "bg-gradient-to-r from-primary to-secondary"
                      : "bg-border",
                  ].join(" ")}
                />
                <p className="mt-3 min-h-[2.75rem] max-w-[18rem] text-sm leading-relaxed text-muted">
                  {t(`items.${key}.label`)}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
