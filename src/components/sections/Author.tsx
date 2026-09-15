import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { Messages } from "@/content/types";

const AUTHOR_PHOTO = "/author/marcelo-farias.png";

export function Author({ copy }: { copy: Messages }) {
  return (
    <section
      id="autor"
      aria-labelledby="author-heading"
      className="border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16 xl:gap-20">
          <div className="mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:mx-0 lg:max-w-[320px]">
            <div className="overflow-hidden rounded-[4px] border border-gold/15 bg-surface">
              <Image
                src={AUTHOR_PHOTO}
                alt={copy.author.photoAlt}
                width={456}
                height={547}
                loading="eager"
                sizes="(min-width: 1024px) 320px, 240px"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
              {copy.author.eyebrow}
            </p>
            <h2
              id="author-heading"
              className="font-display mt-4 text-[clamp(2rem,4.5vw,3.2rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-foreground"
            >
              {copy.author.name}
            </h2>
            <p className="mt-4 text-[17px] leading-snug font-semibold text-foreground sm:text-[18px]">
              {copy.author.highlight}
            </p>
            <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {copy.author.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {copy.author.principleLead}
            </p>
            <blockquote className="mt-4 max-w-2xl border-l border-gold pl-5 sm:pl-6">
              <p className="text-[16px] leading-relaxed font-semibold text-foreground italic sm:text-[17px]">
                “{copy.author.principleQuote}”
              </p>
            </blockquote>
            <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {copy.author.closing.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-8 max-w-2xl border-l-2 border-gold pl-5 sm:pl-6">
              <p className="font-display text-[1.35rem] leading-snug font-semibold tracking-[-0.02em] text-foreground sm:text-[1.55rem]">
                {copy.author.quote}
              </p>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
