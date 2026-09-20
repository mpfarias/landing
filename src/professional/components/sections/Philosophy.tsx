import { Container } from "@/professional/components/ui/Container";
import { principles } from "@/professional/data/principles";

export function Philosophy() {
  return (
    <section id="como-penso" className="border-t border-line py-16 sm:py-20 lg:py-24">
      <Container>
        <p className="text-[12px] font-semibold tracking-[0.2em] text-cyan uppercase">
          Como eu penso tecnologia
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-[clamp(1.8rem,4vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-ink">
          Como eu penso tecnologia
        </h2>
        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {principles.map((item, index) => (
            <li key={item.id} className="border-t border-cyan/50 pt-5">
              <p className="text-[12px] tracking-[0.16em] text-muted uppercase">
                0{index + 1}
              </p>
              <h3 className="font-display mt-3 text-[1.2rem] font-semibold tracking-[-0.02em] text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
