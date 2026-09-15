import { BookCollection } from "@/components/hero/BookCollection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/content/types";

type HeroProps = {
  locale: Locale;
  copy: Messages;
};

export function Hero({ locale, copy }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(61,100,135,0.16),transparent_55%),linear-gradient(180deg,#050b11_0%,#0a1420_100%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <div className="order-1 lg:order-2">
            <div className="animate-fade-up">
              <BookCollection
                locale={locale}
                developmentLabel={copy.status.development}
              />
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <p className="animate-fade-up text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
              {copy.hero.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="font-display animate-fade-up animation-delay-1 mt-4 text-[clamp(2.4rem,8vw,4.6rem)] leading-[0.92] font-semibold tracking-[-0.02em] text-foreground"
            >
              {copy.hero.stages.map((stage) => (
                <span key={stage} className="block">
                  {stage}.
                </span>
              ))}
            </h1>
            <p className="animate-fade-up animation-delay-2 mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-semibold tracking-[0.14em] text-gold uppercase sm:text-[13px]">
              {copy.hero.stages.map((stage, index) => (
                <span key={stage} className="inline-flex items-center gap-2">
                  {index > 0 ? <span aria-hidden>→</span> : null}
                  {stage}
                </span>
              ))}
            </p>
            <p className="animate-fade-up animation-delay-3 mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {copy.hero.lead}
            </p>
            <div className="animate-fade-up animation-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#livros">
                {copy.hero.discover}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
