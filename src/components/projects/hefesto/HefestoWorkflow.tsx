"use client";

import { motion, useReducedMotion } from "motion/react";

type WorkflowStep = {
  title: string;
  text: string;
};

type HefestoWorkflowProps = {
  steps: readonly WorkflowStep[];
};

export function HefestoWorkflow({ steps }: HefestoWorkflowProps) {
  const reduceMotion = useReducedMotion();

  return (
    <ol className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-6">
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: reduceMotion ? 0 : index * 0.06,
            duration: reduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative border-t border-border py-6 pr-4 lg:border-t-0 lg:border-l lg:px-4 lg:py-0 lg:first:border-l-0 lg:first:pl-0"
        >
          <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-3 text-sm font-semibold tracking-[-0.02em] text-foreground">
            {step.title}
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">
            {step.text}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
