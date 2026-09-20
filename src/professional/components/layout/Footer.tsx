import { Container } from "@/professional/components/ui/Container";
import { links, site } from "@/professional/data/site";

export function Footer() {
  const social = [
    links.email
      ? { href: `mailto:${links.email}`, label: "E-mail", external: false }
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
    <footer className="border-t border-line bg-background-secondary py-10">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-display text-[1.05rem] font-semibold text-ink">
              {site.name}
            </p>
            <p className="mt-2 max-w-sm text-[14px] text-muted">{site.concept}.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Rodapé">
            <a href="#sobre" className="text-[14px] text-muted hover:text-ink">
              Sobre
            </a>
            <a href="#portfolio" className="text-[14px] text-muted hover:text-ink">
              Portfólio
            </a>
            <a href="#contato" className="text-[14px] text-muted hover:text-ink">
              Contato
            </a>
            {links.negociosComIaUrl ? (
              <a
                href={links.negociosComIaUrl}
                className="text-[14px] text-muted hover:text-ink"
                {...(links.negociosComIaUrl.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : undefined)}
              >
                {links.negociosComIaUrl.startsWith("http")
                  ? "Pequenos Negócios com IA ↗"
                  : "Pequenos Negócios com IA"}
              </a>
            ) : null}
          </nav>
          {social.length ? (
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[14px] text-muted hover:text-ink"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : undefined)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <p className="text-[13px] text-muted">
          © 2026 {site.name}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
