import { Container } from "@/components/ui/Container";
import type { Messages } from "@/content/types";

export function Benefits({ copy }: { copy: Messages }) {
  return (
    <section
      aria-label={copy.benefits[0]?.title}
      className="border-y border-line bg-background-secondary"
    >
      <Container className="py-10 sm:py-12 lg:py-14">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {copy.benefits.map((benefit) => (
            <li key={benefit.id} className="min-w-0">
              <span className="mb-3 block h-px w-8 bg-gold" aria-hidden />
              <p className="font-display text-[13px] font-semibold tracking-[0.16em] text-foreground uppercase">
                {benefit.title}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {benefit.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
