import { links } from "@/professional/data/site";
import type { PortfolioCategory, PortfolioFilterId, PortfolioItem } from "@/professional/data/types";

export const portfolioFilters: Array<{ id: PortfolioFilterId; label: string }> = [
  { id: "featured", label: "Destaques" },
  { id: "system", label: "Sistemas" },
  { id: "api", label: "APIs" },
  { id: "ebook", label: "Ebooks" },
];

export const categoryLabels: Record<PortfolioCategory, string> = {
  system: "Sistema",
  api: "API",
  ebook: "Ebooks",
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "orion",
    slug: "orion",
    title: "Órion",
    category: "system",
    description:
      "Ecossistema integrado de gestão e apoio operacional, estruturado em módulos especializados que compartilham autenticação, usuários, dados e serviços.",
    summary:
      "Reúne soluções administrativas e operacionais em uma arquitetura centralizada e modular.",
    coverImage: null,
    imageAlt: "Prévia do sistema Órion",
    screenshots: [],
    technologies: ["NestJS", "React", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    url: null,
    featured: true,
  },
  {
    id: "hefesto",
    slug: "hefesto",
    title: "Hefesto",
    category: "system",
    description:
      "Sistema de atendimento e registro de ocorrências desenvolvido para estruturar a coleta de informações e tornar o processo de atendimento mais rápido, organizado e consistente.",
    coverImage: null,
    imageAlt: "Prévia do sistema Hefesto",
    screenshots: [],
    technologies: ["React", "JavaScript", "APIs", "Geolocalização", "Automação"],
    url: null,
    featured: true,
  },
  {
    id: "schedly",
    slug: "schedly",
    title: "Schedly",
    category: "system",
    description:
      "Plataforma SaaS de agendamento para empresas, com arquitetura multiempresa e recursos para gestão de clientes, serviços, profissionais, agenda, pagamentos e diferentes níveis de acesso.",
    summary:
      "Inclui painel administrativo, API REST, landing pública e integração com fluxos de WhatsApp.",
    coverImage: null,
    imageAlt: "Prévia do sistema Schedly",
    screenshots: [],
    technologies: ["React", "Express", "Prisma", "PostgreSQL", "Next.js", "Playwright"],
    url: null,
    featured: true,
  },
  {
    id: "gpecas",
    slug: "gpecas",
    title: "Gpecas",
    category: "system",
    description:
      "Sistema completo de gestão de estoque com controle de produtos, colaboradores, entradas e saídas, dashboards, relatórios e auditoria.",
    coverImage: null,
    imageAlt: "Prévia do sistema Gpecas",
    screenshots: [],
    technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "SQLAlchemy", "Redux"],
    url: null,
    featured: true,
  },
  {
    id: "assedub",
    slug: "assedub",
    title: "ASSEDUB",
    category: "system",
    description:
      "Plataforma institucional e administrativa para gestão de associação, reunindo comunicação, documentos, assembleias, transparência, finanças, auditoria e administração de conteúdo e usuários.",
    coverImage: null,
    imageAlt: "Prévia do sistema ASSEDUB",
    screenshots: [],
    technologies: ["Next.js", "React", "TypeScript", "Prisma"],
    url: null,
  },
  {
    id: "chales-flores-do-cerrado",
    slug: "chales-flores-do-cerrado",
    title: "Chalés Flores do Cerrado",
    category: "system",
    description:
      "Sistema de gestão de hospedagem e reservas, com controle de chalés, hóspedes, colaboradores, reservas, operação administrativa e registros de auditoria.",
    coverImage: null,
    imageAlt: "Prévia do sistema Chalés Flores do Cerrado",
    screenshots: [],
    technologies: ["NestJS", "React", "Prisma", "PostgreSQL", "Docker"],
    url: null,
  },
  {
    id: "sistema-pastoral",
    slug: "sistema-pastoral",
    title: "Sistema Pastoral",
    category: "system",
    description:
      "Plataforma de gestão administrativa e de usuários, com autenticação, grupos, perfis de acesso, cadastros e estrutura de API voltada à organização das atividades internas.",
    coverImage: null,
    imageAlt: "Prévia do sistema Pastoral",
    screenshots: [],
    technologies: ["React", "Express", "Sequelize", "MySQL", "JWT", "Swagger"],
    url: null,
  },
  {
    id: "redram-games",
    slug: "redram-games",
    title: "RedRAM Games",
    category: "system",
    description:
      "Plataforma de jogos com autenticação de jogadores, catálogo, planos, assinaturas e sincronização de progresso.",
    coverImage: null,
    imageAlt: "Prévia da plataforma RedRAM Games",
    screenshots: [],
    technologies: ["React", "Express", "Prisma", "PostgreSQL", "TypeScript"],
    url: null,
  },
  {
    id: "api-infracoes-ctb",
    slug: "api-infracoes-ctb",
    title: "API de Infrações do CTB",
    category: "api",
    description:
      "API REST para disponibilização estruturada de informações sobre infrações de trânsito, incluindo artigos, códigos RENAINF, pontuação, valores e medidas administrativas.",
    coverImage: null,
    technologies: ["Node.js", "Express", "Swagger", "Cache", "Rate Limit"],
    url: null,
  },
  {
    id: "api-tarifas-energia",
    slug: "api-tarifas-energia",
    title: "API de Tarifas de Energia",
    category: "api",
    description:
      "API para consulta de tarifas, distribuidoras e bandeiras tarifárias, com recursos voltados à projeção de custos de consumo e integração com soluções de medição.",
    coverImage: null,
    technologies: ["Node.js", "Express", "Dados ANEEL"],
    url: null,
  },
  {
    id: "pequenos-negocios-com-ia",
    slug: "pequenos-negocios-com-ia",
    title: "Pequenos Negócios com IA",
    subtitle: "Série de ebooks",
    category: "ebook",
    description:
      "Projeto editorial dedicado à aplicação prática da Inteligência Artificial em pequenos negócios, estruturado como uma série progressiva de ebooks.",
    summary: "A série acompanha uma evolução prática: USAR → TRANSFORMAR → GERENCIAR → CRIAR",
    covers: [
      "/books/pt-br/pequenos-negocios-com-ia-pt-br.jpg",
      "/books/pt-br/transforme-seu-pequeno-negocio-com-ia-pt-br.jpg",
      "/books/pt-br/gerencie-seu-pequeno-negocio-com-ia-pt-br.jpg",
      "/books/pt-br/crie-seu-pequeno-negocio-com-ia-pt-br.jpg",
    ],
    coverTitles: [
      "Pequenos Negócios com IA",
      "Transforme seu Pequeno Negócio com IA",
      "Gerencie seu Pequeno Negócio com IA",
      "Crie seu Pequeno Negócio com IA",
    ],
    technologies: ["Inteligência Artificial", "Empreendedorismo", "Ebooks"],
    url: links.negociosComIaUrl,
    urlLabel: "Conhecer a série",
    external: Boolean(links.negociosComIaUrl?.startsWith("http")),
  },
  {
    id: "desenvolvendo-sistemas-com-ia",
    slug: "desenvolvendo-sistemas-com-ia",
    title: "Desenvolvendo Sistemas com IA",
    subtitle: "Série de ebooks",
    category: "ebook",
    description:
      "Projeto editorial sobre o uso de Inteligência Artificial no desenvolvimento de sistemas.",
    covers: [
      "/portfolio/desenvolvendo-sistemas-com-ia/livro-1.png",
      "/portfolio/desenvolvendo-sistemas-com-ia/livro-2.png",
      "/portfolio/desenvolvendo-sistemas-com-ia/livro-3.png",
      "/portfolio/desenvolvendo-sistemas-com-ia/livro-4.png",
    ],
    coverTitles: [
      "Desenvolvendo Landing Page com IA",
      "Desenvolvendo E-commerce com IA",
      "Desenvolvendo Sistema de Comércio com IA",
      "Desenvolvendo Sistemas de Pagamentos com IA",
    ],
    coverImage: null,
    technologies: ["Inteligência Artificial", "Desenvolvimento", "Ebooks"],
    url: null,
    comingSoon: true,
  },
];
