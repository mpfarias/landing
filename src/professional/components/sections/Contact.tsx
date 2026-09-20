import { Button } from "@/professional/components/ui/Button";
import { Container } from "@/professional/components/ui/Container";
import { links } from "@/professional/data/site";

export function Contact() {
  const actions = [
    links.email
      ? { href: `mailto:${links.email}`, label: "Enviar e-mail", external: false }
      : null,
    links.whatsappUrl
      ? { href: links.whatsappUrl, label: "WhatsApp", external: true }
      : null,
    links.linkedin
      ? { href: links.linkedin, label: "LinkedIn", external: true }
      : null,
    links.github
      ? { href: links.github, label: "GitHub", external: true }
      : null,
  ].filter((item): item is { href: string; label: string; external: boolean } =>
    Boolean(item),
  );

  return (
    <section id="contato" className="border-t border-line py-16 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-[12px] font-semibold tracking-[0.2em] text-cyan uppercase">
          Contato
        </p>
        <h2 className="font-display mt-4 text-[clamp(1.8rem,4vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-ink">
          Vamos conversar?
        </h2>
        <p className="mt-6 text-[16px] leading-relaxed text-muted sm:text-[17px]">
          Se você quiser conversar sobre tecnologia, desenvolvimento de sistemas,
          APIs, integrações ou algum dos projetos apresentados aqui, entre em
          contato.
        </p>
        {actions.length ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions.map((action, index) => (
              <Button
                key={action.href}
                href={action.href}
                variant={index === 0 ? "primary" : "secondary"}
                className="w-full sm:w-auto"
                external={action.external}
              >
                {action.label}
              </Button>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
