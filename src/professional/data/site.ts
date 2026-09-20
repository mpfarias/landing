function env(name: string) {
  const value = process.env[name];
  return value?.trim() ? value.trim() : null;
}

export const site = {
  name: "Marcelo Pires de Farias",
  shortName: "Marcelo Farias",
  tagline: "Tecnologia & Soluções",
  concept: "Tecnologia aplicada a problemas reais",
  title: "Marcelo Pires de Farias | Sistemas, APIs e Soluções com Tecnologia",
  description:
    "Desenvolvimento de sistemas, APIs, integrações, automações e soluções com Inteligência Artificial aplicadas a problemas reais.",
  openGraphTitle:
    "Marcelo Pires de Farias — Tecnologia aplicada a problemas reais",
  openGraphDescription:
    "Conheça projetos, sistemas, APIs e trabalhos desenvolvidos por Marcelo Pires de Farias.",
  url: env("NEXT_PUBLIC_SITE_URL") ?? "http://localhost:3000",
  nav: [
    { href: "#sobre", label: "Sobre" },
    { href: "#competencias", label: "Competências" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#contato", label: "Contato" },
  ],
} as const;

const whatsapp = env("NEXT_PUBLIC_WHATSAPP") ?? "+5561999729293";

export const links = {
  email: env("NEXT_PUBLIC_EMAIL") ?? "contact@marcelofarias.dev.br",
  whatsapp,
  whatsappUrl: whatsapp
    ? `https://wa.me/${whatsapp.replace(/\D/g, "")}`
    : null,
  linkedin: env("NEXT_PUBLIC_LINKEDIN_URL"),
  github: env("NEXT_PUBLIC_GITHUB_URL") ?? "https://github.com/mpfarias",
  negociosComIaUrl: env("NEXT_PUBLIC_NEGOCIOS_COM_IA_URL") ?? "/pt-br",
};

export const technologies = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "NestJS",
  "Express",
  "FastAPI",
  "React",
  "Next.js",
  "Flutter",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "Docker",
  "REST APIs",
  "IA",
] as const;
