"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const areaKeys = ["software", "data", "ai", "infra"] as const;

const areaBorders = [
  "border-b border-border md:border-r",
  "border-b border-border",
  "border-b border-border md:border-b-0 md:border-r",
  "",
] as const;

function TechnologyArea({
  areaKey,
  index,
}: {
  areaKey: (typeof areaKeys)[number];
  index: number;
}) {
  const t = useTranslations("technology");
  const reduceMotion = useReducedMotion();
  const items = t.raw(`areas.${areaKey}.items`) as string[];
  const isAccent = index === 0;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: reduceMotion ? 0 : 0.05 * index,
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={["min-w-0 py-8 md:p-8 lg:p-10", areaBorders[index]].join(" ")}
    >
      <h3 className="text-[12px] font-medium tracking-[0.18em] text-muted">
        <span className={isAccent ? "text-secondary" : undefined}>
          {t(`areas.${areaKey}.index`)}
        </span>
        <span aria-hidden> / </span>
        <span className="text-foreground">{t(`areas.${areaKey}.title`)}</span>
      </h3>

      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
        {t(`areas.${areaKey}.description`)}
      </p>

      <motion.ul
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          delay: reduceMotion ? 0 : 0.12 + index * 0.04,
          duration: reduceMotion ? 0 : 0.5,
        }}
        className="mt-6 flex flex-wrap gap-x-1 gap-y-2.5"
      >
        {items.map((item) => (
          <li
            key={item}
            className="max-w-full min-w-0 border-l border-border pl-3 pr-4 text-[13px] tracking-[0.05em] text-foreground/90"
          >
            {item}
          </li>
        ))}
      </motion.ul>
    </motion.article>
  );
}

export function TechnologySection() {
  const t = useTranslations("technology");
  const reduceMotion = useReducedMotion();

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
      id="tecnologia"
      aria-labelledby="technology-heading"
      className="relative scroll-mt-24 overflow-x-hidden border-t border-border bg-background-secondary"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="min-w-0">
            <motion.p
              {...reveal(0)}
              className="text-[12px] font-medium tracking-[0.2em] text-muted"
            >
              {t("label")}
            </motion.p>
            <motion.h2
              id="technology-heading"
              {...reveal(0.08)}
              className="mt-5 max-w-[16ch] text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground"
            >
              <span className="block">{t("headlineLine1")}</span>
              <span className="block text-accent-gradient">
                {t("headlineAccent")}
              </span>
            </motion.h2>
          </div>

          <motion.div {...reveal(0.12)} className="min-w-0 max-w-xl">
            <p className="text-[15px] font-medium leading-snug tracking-[-0.02em] text-foreground sm:text-base">
              <span className="block">{t("subLine1")}</span>
              <span className="block">{t("subLine2")}</span>
              <span className="block text-muted">{t("subLine3")}</span>
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted sm:text-base">
              {t("body")}
            </p>
          </motion.div>
        </div>

        <div className="mt-14 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {areaKeys.map((key, index) => (
              <TechnologyArea key={key} areaKey={key} index={index} />
            ))}
          </div>

          <motion.div
            {...reveal(0.08)}
            className="border-t border-border pt-8 md:pt-10"
          >
            <p className="max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
              <span className="block">{t("closingLine")}</span>
              <span className="mt-3 block text-[clamp(1.15rem,2.4vw,1.4rem)] font-semibold tracking-[-0.02em] text-accent-gradient">
                {t("closingAccent")}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
