import type { Locale } from "./types";

const en = {
  common: {
    hireMe: "Hire Me",
    hireMeOnFiverr: "Hire Me on Fiverr",
    close: "Close",
    menu: "Menu",
    toggleNav: "Toggle navigation menu",
  },
  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  lang: {
    switchToEn: "Switch to English",
    switchToPt: "Mudar para português",
  },
  nav: {
    services: "Services",
    about: "About",
    techStack: "Tech Stack",
    work: "Work",
  },
  hero: {
    badge: "Available for international freelance projects",
    title: "I build modern web solutions for businesses and developers.",
    subtitle:
      "Landing pages, bug fixes, and web app deployment using React, Next.js, Node.js, and modern web technologies.",
    ctaFiverr: "View My Fiverr Services",
    ctaServices: "Explore Services",
    cardLabel: "Freelance Web Development",
    available: "Available",
    servicesHeading: "Services",
    tagLanding: "Landing Pages",
    tagBug: "Bug Fixing",
    tagDeploy: "Deployment Setup",
    mainStack: "Main Stack",
    focus: "Focus",
    focusText: "Clean interfaces, reliable code and smooth deployment.",
  },
  services: {
    kicker: "Services",
    title: "Services I Offer",
    subtitle:
      "Practical web development services designed to help businesses, creators, and developers launch, fix, and improve their online presence.",
    items: [
      {
        title: "Modern Landing Pages",
        description:
          "Clean, responsive and business-focused landing pages for small businesses, consultants, agencies, personal brands and SaaS products.",
        features: [
          "Responsive design",
          "Modern layout",
          "Clear call-to-action",
          "Built with React, Next.js and Tailwind CSS",
        ],
        href: "https://br.fiverr.com/s/jjBDpbG",
        cta: "Hire for Landing Page",
      },
      {
        title: "Bug Fixing",
        description:
          "Bug fixing for React, Next.js, Node.js, JavaScript, TypeScript, APIs, databases, authentication flows and deployment issues.",
        features: [
          "Frontend bugs",
          "Backend issues",
          "API and database errors",
          "Authentication and deployment problems",
        ],
        href: "https://br.fiverr.com/s/GzRAdX7",
        cta: "Hire for Bug Fixing",
      },
      {
        title: "Deployment Setup",
        description:
          "Web app deployment with custom domain, DNS, SSL, Vercel, Netlify, Cloudflare and GitHub integration.",
        features: [
          "Vercel and Netlify deployment",
          "Custom domain setup",
          "DNS and SSL configuration",
          "GitHub integration",
        ],
        href: "https://br.fiverr.com/s/R73Az0l",
        cta: "Hire for Deployment",
      },
    ],
  },
  about: {
    kicker: "About",
    title: "About Me",
    imageAlt: "Marcelo Farias, Full Stack Web Developer",
    p1: "Hi, I’m Marcelo Farias, a Full Stack Web Developer focused on building modern, responsive and practical web solutions.",
    p2: "I help businesses, creators and developers create professional landing pages, fix technical issues and deploy web applications with reliable modern tools.",
    p3: "My work is focused on clean code, clear communication and solutions that are easy to understand, maintain and publish online.",
    roleLabel: "Role",
    roleValue: "Full Stack Web Developer",
    focusLabel: "Focus",
    focusValue: "Landing pages & bug fixing",
    stackLabel: "Stack",
    stackValue: "React, Next.js, Node.js",
  },
  tech: {
    kicker: "Tech Stack",
    title: "Technologies I Work With",
    subtitle:
      "I use modern technologies to build fast, responsive and scalable web solutions.",
  },
  work: {
    kicker: "Work",
    title: "Work Examples",
    subtitle:
      "A selection of demo projects and work samples focused on commercial web development.",
    productionReady: "Production Ready",
    items: [
      {
        title: "Business Landing Page",
        description:
          "A modern and responsive landing page designed for businesses that need a professional online presence and clear conversion flow.",
        tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
      },
      {
        title: "SaaS Dashboard Interface",
        description:
          "A clean web application interface with dashboard structure, reusable components and modern layout patterns.",
        tags: ["React", "TypeScript", "UI Design"],
      },
      {
        title: "Deployment Setup Example",
        description:
          "A web app deployment workflow with GitHub integration, custom domain configuration, DNS setup and SSL activation.",
        tags: ["Vercel", "Cloudflare", "DNS", "SSL"],
      },
    ],
  },
  why: {
    kicker: "Why Work With Me",
    title: "Practical, clear and reliable web development",
    subtitle:
      "I focus on delivering clean solutions that solve real problems and help your project move forward.",
    reasons: [
      {
        title: "Business-focused development",
        description:
          "I build websites and web solutions with a clear goal: helping users understand, trust and take action.",
      },
      {
        title: "Modern and responsive interfaces",
        description:
          "Your project will be designed to work well across desktop, tablet and mobile devices.",
      },
      {
        title: "Clear communication",
        description:
          "I focus on understanding the problem, explaining the solution and keeping the process simple.",
      },
      {
        title: "Reliable technical setup",
        description:
          "From frontend issues to deployment problems, I can help organize and fix the technical side of your project.",
      },
    ],
  },
  fiverr: {
    kicker: "Fiverr Services",
    title: "Hire Me on Fiverr",
    subtitle:
      "Choose the service that best fits your current need and start your project directly through Fiverr.",
    viewOnFiverr: "View on Fiverr",
    items: [
      {
        title: "Landing Page Development",
        description:
          "Modern, responsive and business-focused landing pages for your brand, service or product.",
        href: "https://br.fiverr.com/s/jjBDpbG",
      },
      {
        title: "Bug Fixing Service",
        description:
          "Fix issues in React, Next.js, Node.js, JavaScript, TypeScript, APIs, databases and deployments.",
        href: "https://br.fiverr.com/s/GzRAdX7",
      },
      {
        title: "Deployment Setup",
        description:
          "Deploy your web app with custom domain, DNS, SSL, Vercel, Netlify, Cloudflare and GitHub integration.",
        href: "https://br.fiverr.com/s/R73Az0l",
      },
    ],
  },
  final: {
    kicker: "Start Your Project",
    title: "Let's build something professional together.",
    subtitle:
      "Whether you need a landing page, a bug fixed or help deploying your web app, I can help you move your project forward with modern web technologies.",
    startFiverr: "Start on Fiverr",
    reviewServices: "Review Services",
  },
  footer: {
    role: "Full Stack Web Developer",
    stackLine:
      "React · Next.js · TypeScript · Node.js · Tailwind CSS · PostgreSQL · Prisma · Vercel · Cloudflare",
    rights: "© 2026 Marcelo Farias. All rights reserved.",
  },
  mobileSticky: {
    title: "Ready to start?",
    subtitle: "Hire me directly on Fiverr",
  },
} as const;

const pt = {
  common: {
    hireMe: "Contratar",
    hireMeOnFiverr: "Contratar no Fiverr",
    close: "Fechar",
    menu: "Menu",
    toggleNav: "Abrir ou fechar menu de navegação",
  },
  theme: {
    toLight: "Ativar tema claro",
    toDark: "Ativar tema escuro",
  },
  lang: {
    switchToEn: "Switch to English",
    switchToPt: "Mudar para português",
  },
  nav: {
    services: "Serviços",
    about: "Sobre",
    techStack: "Stack",
    work: "Trabalhos",
  },
  hero: {
    badge: "Disponível para projetos freelance internacionais",
    title:
      "Desenvolvo soluções web modernas para empresas e desenvolvedores.",
    subtitle:
      "Landing pages, correção de bugs e deploy de aplicações com React, Next.js, Node.js e tecnologias web atuais.",
    ctaFiverr: "Ver serviços no Fiverr",
    ctaServices: "Explorar serviços",
    cardLabel: "Desenvolvimento freelance web",
    available: "Disponível",
    servicesHeading: "Serviços",
    tagLanding: "Landing pages",
    tagBug: "Correção de bugs",
    tagDeploy: "Deploy e infra",
    mainStack: "Stack principal",
    focus: "Foco",
    focusText:
      "Interfaces limpas, código confiável e deploy sem fricção.",
  },
  services: {
    kicker: "Serviços",
    title: "O que eu ofereço",
    subtitle:
      "Serviços práticos de desenvolvimento web para empresas, criadores e desenvolvedores lançarem, corrigirem e evoluírem sua presença online.",
    items: [
      {
        title: "Landing pages modernas",
        description:
          "Páginas responsivas e focadas em negócio para pequenas empresas, consultores, agências, marcas pessoais e produtos SaaS.",
        features: [
          "Design responsivo",
          "Layout moderno",
          "Chamada para ação clara",
          "React, Next.js e Tailwind CSS",
        ],
        href: "https://br.fiverr.com/s/jjBDpbG",
        cta: "Contratar landing page",
      },
      {
        title: "Correção de bugs",
        description:
          "Correção de bugs em React, Next.js, Node.js, JavaScript, TypeScript, APIs, bancos de dados, autenticação e deploy.",
        features: [
          "Bugs de frontend",
          "Problemas de backend",
          "Erros de API e banco",
          "Autenticação e deploy",
        ],
        href: "https://br.fiverr.com/s/GzRAdX7",
        cta: "Contratar correção de bugs",
      },
      {
        title: "Configuração de deploy",
        description:
          "Deploy de aplicações web com domínio próprio, DNS, SSL, Vercel, Netlify, Cloudflare e integração com GitHub.",
        features: [
          "Deploy Vercel e Netlify",
          "Domínio personalizado",
          "DNS e SSL",
          "Integração GitHub",
        ],
        href: "https://br.fiverr.com/s/R73Az0l",
        cta: "Contratar deploy",
      },
    ],
  },
  about: {
    kicker: "Sobre",
    title: "Sobre mim",
    imageAlt: "Marcelo Farias, desenvolvedor full stack",
    p1: "Olá, sou Marcelo Farias, desenvolvedor full stack focado em soluções web modernas, responsivas e práticas.",
    p2: "Ajudo empresas, criadores e desenvolvedores a criarem landing pages profissionais, corrigirem problemas técnicos e publicarem aplicações com ferramentas atuais.",
    p3: "Meu trabalho prioriza código limpo, comunicação clara e soluções fáceis de entender, manter e colocar no ar.",
    roleLabel: "Função",
    roleValue: "Desenvolvedor full stack",
    focusLabel: "Foco",
    focusValue: "Landing pages e correção de bugs",
    stackLabel: "Stack",
    stackValue: "React, Next.js, Node.js",
  },
  tech: {
    kicker: "Stack",
    title: "Tecnologias que uso",
    subtitle:
      "Uso tecnologias modernas para construir soluções web rápidas, responsivas e escaláveis.",
  },
  work: {
    kicker: "Trabalhos",
    title: "Exemplos de trabalho",
    subtitle:
      "Amostras e demos focadas em desenvolvimento web comercial.",
    productionReady: "Pronto para produção",
    items: [
      {
        title: "Landing page comercial",
        description:
          "Landing page moderna e responsiva para empresas que precisam de presença profissional e fluxo de conversão claro.",
        tags: ["Next.js", "Tailwind CSS", "Design responsivo"],
      },
      {
        title: "Interface de dashboard SaaS",
        description:
          "Interface de aplicação web com estrutura de dashboard, componentes reutilizáveis e layout atual.",
        tags: ["React", "TypeScript", "UI"],
      },
      {
        title: "Exemplo de pipeline de deploy",
        description:
          "Fluxo de deploy com GitHub, domínio personalizado, DNS e ativação de SSL.",
        tags: ["Vercel", "Cloudflare", "DNS", "SSL"],
      },
    ],
  },
  why: {
    kicker: "Por que comigo",
    title: "Desenvolvimento web claro, prático e confiável",
    subtitle:
      "Entrego soluções objetivas que resolvem problemas reais e fazem seu projeto avançar.",
    reasons: [
      {
        title: "Foco no negócio",
        description:
          "Construo sites e soluções com objetivo claro: ajudar o usuário a entender, confiar e agir.",
      },
      {
        title: "Interfaces modernas e responsivas",
        description:
          "Seu projeto será pensado para desktop, tablet e celular.",
      },
      {
        title: "Comunicação transparente",
        description:
          "Busco entender o problema, explicar a solução e manter o processo simples.",
      },
      {
        title: "Base técnica sólida",
        description:
          "De problemas de frontend a deploy, ajudo a organizar e corrigir o lado técnico do projeto.",
      },
    ],
  },
  fiverr: {
    kicker: "Serviços no Fiverr",
    title: "Contrate-me no Fiverr",
    subtitle:
      "Escolha o serviço que melhor encaixa na sua necessidade e inicie pelo Fiverr.",
    viewOnFiverr: "Ver no Fiverr",
    items: [
      {
        title: "Desenvolvimento de landing page",
        description:
          "Landing pages modernas e focadas em negócio para sua marca, serviço ou produto.",
        href: "https://br.fiverr.com/s/jjBDpbG",
      },
      {
        title: "Correção de bugs",
        description:
          "Correção de problemas em React, Next.js, Node.js, JavaScript, TypeScript, APIs, bancos e deploy.",
        href: "https://br.fiverr.com/s/GzRAdX7",
      },
      {
        title: "Configuração de deploy",
        description:
          "Publicação da sua aplicação com domínio, DNS, SSL, Vercel, Netlify, Cloudflare e GitHub.",
        href: "https://br.fiverr.com/s/R73Az0l",
      },
    ],
  },
  final: {
    kicker: "Comece seu projeto",
    title: "Vamos construir algo profissional juntos.",
    subtitle:
      "Se você precisa de uma landing page, correção de bugs ou ajuda para publicar sua aplicação, posso ajudar com tecnologias web modernas.",
    startFiverr: "Começar no Fiverr",
    reviewServices: "Ver serviços",
  },
  footer: {
    role: "Desenvolvedor full stack",
    stackLine:
      "React · Next.js · TypeScript · Node.js · Tailwind CSS · PostgreSQL · Prisma · Vercel · Cloudflare",
    rights: "© 2026 Marcelo Farias. Todos os direitos reservados.",
  },
  mobileSticky: {
    title: "Vamos começar?",
    subtitle: "Contrate direto pelo Fiverr",
  },
} as const;

export type Messages = typeof en;

export const dictionaries: Record<Locale, Messages> = {
  en,
  pt,
};
