"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const areaKeys = [
  "systems",
  "automation",
  "ai",
  "integration",
  "products",
] as const;

export function HelpSection() {
  const t = useTranslations("help");
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : ({ opacity: 0, y: 16 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      delay: reduceMotion ? 0 : delay,
      duration: reduceMotion ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="ajuda"
      aria-labelledby="help-heading"
      className="relative scroll-mt-24 overflow-x-hidden border-t border-border bg-background"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <motion.div {...reveal(0)} className="max-w-2xl">
          <p className="text-[12px] font-medium tracking-[0.2em] text-muted">
            {t("label")}
          </p>
          <h2
            id="help-heading"
            className="mt-5 text-[clamp(1.85rem,3.8vw,2.85rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground"
          >
            <span className="block">{t("headlineLine1")}</span>
            <span className="block">{t("headlineLine2")}</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {t("intro")}
          </p>
        </motion.div>

        <div className="mt-12 lg:mt-14">
          <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {areaKeys.map((key, index) => (
              <motion.li
                key={key}
                {...reveal(0.06 + index * 0.04)}
                className={[
                  "min-w-0 border-t border-border pt-5",
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2",
                ].join(" ")}
              >
                <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[15px] font-semibold tracking-[-0.02em] text-foreground sm:text-[16px]">
                  {t(`areas.${key}.title`)}
                </h3>
                <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted">
                  {t(`areas.${key}.text`)}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div {...reveal(0.28)} className="mt-14 max-w-xl lg:mt-16">
          <p className="text-[clamp(1.2rem,2.4vw,1.5rem)] font-semibold leading-snug tracking-[-0.03em] text-foreground">
            {t("ctaQuestion")}
          </p>
          <a
            href="#contato"
            className="group/cta-secondary mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            {t("cta")}
            <ArrowRight
              className="icon-shift icon-shift-right size-4 opacity-80"
              aria-hidden
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
