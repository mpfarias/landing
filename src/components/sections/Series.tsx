import { Container } from "@/components/ui/Container";
import type { Messages } from "@/content/types";

export function Series({ copy }: { copy: Messages }) {
  return (
    <section
      id="serie"
      aria-labelledby="series-heading"
      className="relative bg-background pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24"
    >
      <Container>
        <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
          {copy.series.eyebrow}
        </p>
        <h2
          id="series-heading"
          className="font-display mt-4 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-foreground"
        >
          {copy.series.title}
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
          {copy.series.lead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-semibold tracking-[0.14em] text-gold uppercase sm:text-[13px]">
          {copy.hero.stages.map((stage, index) => (
            <span key={stage} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden>→</span> : null}
              {stage}
            </span>
          ))}
        </p>
      </Container>
    </section>
  );
}
