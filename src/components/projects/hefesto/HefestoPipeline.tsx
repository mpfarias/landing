"use client";

import { motion, useReducedMotion } from "motion/react";

type PipelineStep = {
  title: string;
  text: string;
};

type HefestoPipelineProps = {
  steps: readonly PipelineStep[];
  ariaLabel: string;
  operatorNote: string;
};

export function HefestoPipeline({
  steps,
  ariaLabel,
  operatorNote,
}: HefestoPipelineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div role="img" aria-label={ariaLabel}>
      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
        {steps.map((step, index) => {
          const isOperator = index === steps.length - 1;
          return (
            <motion.li
              key={step.title}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: reduceMotion ? 0 : index * 0.05,
                duration: reduceMotion ? 0 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-w-0"
            >
              {index > 0 ? (
                <p
                  aria-hidden
                  className="mb-2 text-center text-[12px] text-muted sm:hidden"
                >
                  ↓
                </p>
              ) : null}
              <div
                className={[
                  "h-full rounded-xl border px-4 py-4",
                  isOperator
                    ? "border-primary/30 bg-[color-mix(in_srgb,var(--primary)_8%,var(--surface))]"
                    : "border-border bg-surface/80",
                ].join(" ")}
              >
                <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {step.title}
                </p>
                <p className="mt-1 text-[12px] text-muted">{step.text}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
      <p className="mt-4 text-[13px] text-muted">{operatorNote}</p>
    </div>
  );
}
