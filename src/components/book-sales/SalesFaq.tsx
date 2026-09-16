"use client";

import { useId, useState } from "react";
import { Container } from "@/components/ui/Container";

type SalesFaqItem = {
  question: string;
  answer: string;
};

export function SalesFaq({
  title,
  items,
}: {
  title: string;
  items: SalesFaqItem[];
}) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="sales-faq-heading"
      className="border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24"
    >
      <Container>
        <h2
          id="sales-faq-heading"
          className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-foreground"
        >
          {title}
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {items.map((item, index) => {
            const expanded = open === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div key={item.question} className="group">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : index)}
                    className="flex w-full items-start justify-between gap-4 px-2 py-5 text-left text-[16px] font-semibold text-foreground transition-[background-color,color] duration-200 hover:bg-gold/5 hover:text-gold"
                  >
                    <span>{item.question}</span>
                    <span
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center text-[22px] leading-none text-gold transition-transform duration-200"
                      aria-hidden
                    >
                      {expanded ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-panel"
                  data-open={expanded ? "true" : "false"}
                >
                  <div className="overflow-hidden">
                    <p className="faq-answer max-w-2xl px-2 pb-5 text-[15px] leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
