import { Container } from "@/professional/components/ui/Container";
import { skills } from "@/professional/data/skills";
import { technologies } from "@/professional/data/site";

export function Skills() {
  return (
    <section id="competencias" className="border-t border-line py-16 sm:py-20 lg:py-24">
      <Container>
        <p className="text-[12px] font-semibold tracking-[0.2em] text-cyan uppercase">
          Competências
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.8rem,4vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-ink">
          Competências
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="rounded-2xl border border-line bg-surface p-6 transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-accent/50"
            >
              <h3 className="font-display text-[1.15rem] font-semibold tracking-[-0.02em] text-ink">
                {skill.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {skill.description}
              </p>
            </li>
          ))}
        </ul>
        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tecnologias">
          {technologies.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line px-3 py-1.5 text-[12px] tracking-[0.04em] text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
