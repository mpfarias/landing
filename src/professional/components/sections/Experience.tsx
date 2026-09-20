import { Container } from "@/professional/components/ui/Container";
import { experienceIntro, experienceItems } from "@/professional/data/experience";

export function Experience() {
  return (
    <section id="experiencia" className="border-t border-line bg-background-secondary py-16 sm:py-20 lg:py-24">
      <Container>
        <p className="text-[12px] font-semibold tracking-[0.2em] text-cyan uppercase">
          Experiência
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-[clamp(1.8rem,4vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-ink">
          Experiência construída na prática.
        </h2>
        <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
          {experienceIntro}
        </p>
        <ol className="mt-10 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-4">
          {experienceItems.map((item) => (
            <li
              key={item.id}
              className="relative border-l border-line py-5 pl-5 first:pt-0 last:pb-0 md:border-l-0 md:border-t md:py-0 md:pt-6 md:pl-0"
            >
              <span
                className="absolute top-7 -left-[5px] h-2.5 w-2.5 rounded-full bg-cyan md:top-[-5px] md:left-0"
                aria-hidden
              />
              <p className="text-[11px] font-semibold tracking-[0.14em] text-cyan uppercase">
                {item.label}
              </p>
              <h3 className="font-display mt-2 text-[1.05rem] leading-snug font-semibold tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
