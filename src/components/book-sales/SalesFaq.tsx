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
          {items.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="cursor-pointer list-none py-1 text-[16px] font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    className="mt-1 inline-block h-px w-4 shrink-0 bg-gold transition-transform duration-200 group-open:rotate-90"
                    aria-hidden
                  />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
