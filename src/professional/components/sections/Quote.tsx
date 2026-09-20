import { Container } from "@/professional/components/ui/Container";

export function Quote() {
  return (
    <section className="border-t border-line bg-surface py-20 sm:py-24">
      <Container className="max-w-4xl">
        <p className="font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.12] font-semibold tracking-[-0.03em] text-ink">
          Tecnologia é ferramenta.
          <span className="mt-4 block text-muted">
            O resultado está no problema que ela consegue resolver.
          </span>
        </p>
        <span className="mt-8 block h-px w-16 bg-cyan" aria-hidden />
      </Container>
    </section>
  );
}
