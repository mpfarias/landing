import Image from "next/image";
import { Button } from "@/professional/components/ui/Button";
import { Container } from "@/professional/components/ui/Container";
import { site } from "@/professional/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(67,139,255,0.14),transparent_42%)]"
        aria-hidden
      />
      <Container className="relative grid grid-cols-1 items-end gap-10 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:gap-12 lg:pt-20 lg:pb-0">
        <div className="pb-4 lg:pb-24">
          <p className="animate-rise text-[12px] font-semibold tracking-[0.2em] text-cyan uppercase">
            {site.concept}
          </p>
          <h1 className="animate-rise font-display mt-5 max-w-3xl text-[clamp(1.7rem,4.2vw,2.9rem)] leading-[1.12] font-semibold tracking-[-0.03em] text-ink [animation-delay:80ms]">
            Desenvolvo sistemas, APIs e soluções digitais para transformar
            problemas reais em processos mais simples e eficientes.
          </h1>
          <p className="animate-rise mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-[16px] [animation-delay:140ms]">
            Sou Marcelo Pires de Farias, profissional de tecnologia formado em
            Sistemas de Informação, com experiência no desenvolvimento de
            sistemas, APIs, integrações, automações e soluções apoiadas por
            Inteligência Artificial.
          </p>
          <p className="animate-rise mt-3 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px] [animation-delay:200ms]">
            Meu trabalho parte da necessidade antes da tecnologia: entender o
            problema, estruturar a solução e construir ferramentas que realmente
            possam ser utilizadas.
          </p>
          <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:260ms]">
            <Button href="#portfolio">Ver meu portfólio</Button>
            <Button href="#contato" variant="secondary">
              Entrar em contato
            </Button>
          </div>
          <p className="animate-rise mt-8 text-[13px] tracking-[0.04em] text-muted [animation-delay:320ms]">
            Sistemas · APIs · Automação · Inteligência Artificial
          </p>
        </div>

        <div className="animate-rise relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none [animation-delay:180ms]">
          <div
            className="pointer-events-none absolute inset-x-6 bottom-0 h-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,199,199,0.16),transparent_68%)]"
            aria-hidden
          />
          <Image
            src="/author/marcelo-farias.png"
            alt="Foto profissional de Marcelo Pires de Farias"
            width={720}
            height={900}
            priority
            sizes="(min-width: 1024px) 400px, 80vw"
            className="relative z-10 mx-auto h-auto w-full object-contain object-bottom drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]"
          />
        </div>
      </Container>
    </section>
  );
}
