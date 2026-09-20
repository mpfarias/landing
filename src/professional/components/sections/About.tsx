import { Container } from "@/professional/components/ui/Container";

export function About() {
  return (
    <section id="sobre" className="border-t border-line bg-background-secondary py-16 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-[12px] font-semibold tracking-[0.2em] text-cyan uppercase">
          Sobre mim
        </p>
        <h2 className="font-display mt-4 text-[clamp(1.8rem,4vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-ink">
          Tecnologia não precisa ser complicada para gerar resultado.
        </h2>
        <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-muted sm:text-[17px]">
          <p>
            Minha trajetória com tecnologia sempre esteve ligada à resolução de
            problemas reais. Mais do que desenvolver software por desenvolver,
            meu interesse está em entender uma necessidade, organizar o problema
            e construir uma solução que realmente possa ser utilizada.
          </p>
          <p>
            Trabalho melhor quando a tecnologia fica a serviço do processo:
            simplificar rotinas, organizar informações e criar ferramentas que
            as pessoas consigam usar no dia a dia. A Inteligência Artificial
            entra nesse conjunto quando ajuda a tornar uma solução mais útil —
            não como um fim em si mesma.
          </p>
          <p>
            Essa mesma visão orienta os sistemas, APIs e conteúdos que
            desenvolvo, sempre a partir de uma necessidade concreta.
          </p>
        </div>
        <blockquote className="mt-10 border-l-2 border-cyan pl-5 sm:pl-6">
          <p className="font-display text-[1.25rem] leading-snug font-medium tracking-[-0.02em] text-ink sm:text-[1.45rem]">
            “Uma boa ferramenta não precisa ser complicada para ser útil.”
          </p>
          <span className="mt-4 block h-1 w-8 bg-accent" aria-hidden />
        </blockquote>
      </Container>
    </section>
  );
}
