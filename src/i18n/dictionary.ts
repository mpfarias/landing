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
    howIWork: "How I Work",
    faq: "FAQ",
  },
  hero: {
    badge: "Available for international freelance projects",
    title: "I build modern web solutions for businesses and developers.",
    subtitle:
      "Landing pages, custom web apps, bug fixes, and deployment using React, Next.js, Node.js, and modern web technologies.",
    ctaFiverr: "View My Fiverr Services",
    ctaServices: "Explore Services",
    cardLabel: "Freelance Web Development",
    available: "Available",
    servicesHeading: "Services",
    tagLanding: "Landing Pages",
    tagWebApps: "Custom Web Apps",
    tagBug: "Bug Fixing",
    tagDeploy: "Deployment Setup",
    mainStack: "Main Stack",
    focus: "Focus",
    focusText:
      "Clean interfaces, reliable code, practical web apps and smooth deployment.",
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
      {
        title: "Custom Web Apps",
        description:
          "Custom web applications, dashboards, admin panels and SaaS MVPs built with modern full stack technologies.",
        features: [
          "Business web applications",
          "Dashboards and admin panels",
          "SaaS MVP development",
          "Frontend, backend and database integration",
        ],
        href: "https://www.fiverr.com/s/8zLqVEv",
        cta: "Hire for Web App",
      },
    ],
  },
  about: {
    kicker: "About",
    title: "About Me",
    imageAlt: "Marcelo Farias, Full Stack Web Developer",
    p1: "Hi, I’m Marcelo Farias, a Full Stack Web Developer focused on building modern, responsive and practical web solutions.",
    p2: "I help businesses, creators and developers create professional landing pages, build custom web apps, fix technical issues and deploy web applications with reliable modern tools.",
    p3: "My work is focused on clean code, clear communication and solutions that are easy to understand, maintain and publish online.",
    roleLabel: "Role",
    roleValue: "Full Stack Web Developer",
    focusLabel: "Focus",
    focusValue: "Landing pages, web apps & bug fixing",
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
      {
        title: "Custom Web App MVP",
        description:
          "A tailored web application structure for dashboards, admin panels and SaaS MVPs with frontend, backend and database integration.",
        tags: ["Full Stack", "Dashboard", "SaaS MVP"],
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
  howIWork: {
    kicker: "How I Work",
    title: "A simple and organized process",
    subtitle:
      "From the first message to final delivery, I keep the process clear, practical and focused on your project goals.",
    steps: [
      {
        title: "Understand the project",
        description:
          "I review your requirements, goals and current technical situation before starting the work.",
      },
      {
        title: "Build or fix the solution",
        description:
          "I work on your landing page, custom web app, bug fix or deployment setup using modern web technologies.",
      },
      {
        title: "Review and adjust",
        description:
          "You can review the result and request adjustments according to the service scope.",
      },
      {
        title: "Deliver and support",
        description:
          "I deliver the final result and provide clear guidance when needed.",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Quick answers to common questions before starting a project.",
    items: [
      {
        question: "Do you work with international clients?",
        answer:
          "Yes. My services are designed for international clients who need landing pages, bug fixes or web app deployment support.",
      },
      {
        question: "Can you build a landing page from scratch?",
        answer:
          "Yes. I can build a modern, responsive and business-focused landing page using React, Next.js and Tailwind CSS.",
      },
      {
        question: "Can you build custom web apps or dashboards?",
        answer:
          "Yes. I can build custom web apps, dashboards, admin panels and SaaS MVPs with frontend, backend and database integration.",
      },
      {
        question: "Can you fix bugs in an existing project?",
        answer:
          "Yes. I can help with bugs in React, Next.js, Node.js, JavaScript, TypeScript, APIs, databases, authentication flows and deployment issues.",
      },
      {
        question: "Can you deploy my website with a custom domain?",
        answer:
          "Yes. I can help deploy your web app and configure custom domain, DNS, SSL, Vercel, Netlify, Cloudflare and GitHub integration.",
      },
      {
        question: "Do I need to have a design ready?",
        answer:
          "Not necessarily. If you already have a design, I can follow it. If not, I can create a clean and professional layout based on your business goals.",
      },
      {
        question: "How do I start a project with you?",
        answer:
          "Choose the Fiverr service that best matches your need and send me a message with your project details.",
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
      {
        title: "Custom Web Apps",
        description:
          "Custom web apps, dashboards, admin panels and SaaS MVPs using modern full stack technologies.",
        href: "https://www.fiverr.com/s/8zLqVEv",
      },
    ],
  },
  final: {
    kicker: "Start Your Project",
    title: "Let's build something professional together.",
    subtitle:
      "Whether you need a landing page, a custom web app, a bug fixed or help deploying your web app, I can help you move your project forward with modern web technologies.",
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
    howIWork: "Processo",
    faq: "FAQ",
  },
  hero: {
    badge: "Disponível para projetos no Brasil e no exterior",
    title:
      "Desenvolvo soluções web modernas para empresas, profissionais e criadores brasileiros.",
    subtitle:
      "Landing pages, aplicações web personalizadas, correção de bugs e publicação de projetos para negócios que querem vender, organizar processos e crescer online.",
    ctaFiverr: "Ver serviços no Fiverr",
    ctaServices: "Explorar serviços",
    cardLabel: "Desenvolvimento web freelance",
    available: "Disponível",
    servicesHeading: "Serviços",
    tagLanding: "Landing pages",
    tagWebApps: "Apps web sob medida",
    tagBug: "Correção de bugs",
    tagDeploy: "Deploy e infra",
    mainStack: "Stack principal",
    focus: "Foco",
    focusText:
      "Interfaces claras, código confiável, aplicações práticas e publicação sem complicação.",
  },
  services: {
    kicker: "Serviços",
    title: "O que eu ofereço",
    subtitle:
      "Serviços práticos de desenvolvimento web para empresas, profissionais, criadores e desenvolvedores que querem lançar, corrigir ou melhorar sua presença online.",
    items: [
      {
        title: "Landing pages modernas",
        description:
          "Páginas responsivas e focadas em conversão para pequenas empresas, prestadores de serviço, consultores, agências, marcas pessoais e produtos digitais.",
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
          "Publicação de aplicações web com domínio próprio, DNS, SSL, Vercel, Netlify, Cloudflare e integração com GitHub.",
        features: [
          "Deploy Vercel e Netlify",
          "Domínio personalizado",
          "DNS e SSL",
          "Integração GitHub",
        ],
        href: "https://br.fiverr.com/s/R73Az0l",
        cta: "Contratar deploy",
      },
      {
        title: "Aplicações web personalizadas",
        description:
          "Aplicações web sob medida, dashboards, painéis administrativos e MVPs SaaS para negócios que precisam de uma solução além de uma página institucional.",
        features: [
          "Aplicações web para negócios",
          "Dashboards e painéis administrativos",
          "MVPs SaaS",
          "Integração entre frontend, backend e banco de dados",
        ],
        href: "https://www.fiverr.com/s/8zLqVEv",
        cta: "Contratar aplicação web",
      },
    ],
  },
  about: {
    kicker: "Sobre",
    title: "Sobre mim",
    imageAlt: "Marcelo Farias, desenvolvedor full stack",
    p1: "Olá, sou Marcelo Farias, desenvolvedor full stack focado em soluções web modernas, responsivas e práticas.",
    p2: "Ajudo empresas, profissionais autônomos, criadores e desenvolvedores no Brasil a criarem landing pages profissionais, aplicações web personalizadas, corrigirem problemas técnicos e publicarem projetos com ferramentas atuais.",
    p3: "Meu trabalho prioriza código limpo, comunicação clara em português e soluções fáceis de entender, manter e colocar no ar.",
    roleLabel: "Função",
    roleValue: "Desenvolvedor full stack",
    focusLabel: "Foco",
    focusValue: "Landing pages, apps web e correção de bugs",
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
      "Amostras e demos focadas em páginas, interfaces e fluxos comuns para negócios digitais.",
    productionReady: "Pronto para produção",
    items: [
      {
        title: "Landing page comercial",
        description:
          "Landing page moderna e responsiva para empresas brasileiras que precisam de presença profissional e chamadas claras para contato, orçamento ou compra.",
        tags: ["Next.js", "Tailwind CSS", "Design responsivo"],
      },
      {
        title: "Interface de dashboard SaaS",
        description:
          "Interface de aplicação web com estrutura de dashboard, componentes reutilizáveis e layout atual para produtos, sistemas internos e áreas administrativas.",
        tags: ["React", "TypeScript", "UI"],
      },
      {
        title: "Exemplo de pipeline de deploy",
        description:
          "Fluxo de publicação com GitHub, domínio personalizado, DNS e ativação de SSL para deixar o projeto no ar com segurança.",
        tags: ["Vercel", "Cloudflare", "DNS", "SSL"],
      },
      {
        title: "MVP de aplicação web",
        description:
          "Estrutura de aplicação sob medida para dashboards, painéis administrativos e MVPs SaaS com integração entre frontend, backend e banco de dados.",
        tags: ["Full stack", "Dashboard", "MVP SaaS"],
      },
    ],
  },
  why: {
    kicker: "Por que comigo",
    title: "Desenvolvimento web claro, prático e confiável",
    subtitle:
      "Entrego soluções objetivas para tirar ideias do papel, corrigir problemas e fazer seu projeto avançar online.",
    reasons: [
      {
        title: "Foco no negócio",
        description:
          "Construo sites e soluções com objetivo claro: ajudar seu cliente a entender, confiar e entrar em contato.",
      },
      {
        title: "Interfaces modernas e responsivas",
        description:
          "Seu projeto será pensado para funcionar bem no computador e no celular, onde muitos clientes brasileiros acessam primeiro.",
      },
      {
        title: "Comunicação transparente",
        description:
          "Busco entender o problema, explicar a solução em português claro e manter o processo simples.",
      },
      {
        title: "Base técnica sólida",
        description:
          "De problemas de frontend a publicação do site, ajudo a organizar e corrigir o lado técnico do projeto.",
      },
    ],
  },
  howIWork: {
    kicker: "Como eu trabalho",
    title: "Um processo simples e organizado",
    subtitle:
      "Da primeira mensagem até a entrega final, mantenho o processo claro, prático e focado no que seu projeto precisa para funcionar bem.",
    steps: [
      {
        title: "Entender o projeto",
        description:
          "Analiso seus objetivos, referências, público e situação técnica atual antes de iniciar o trabalho.",
      },
      {
        title: "Construir ou corrigir a solução",
        description:
          "Trabalho na sua landing page, aplicação web personalizada, correção de bug ou configuração de publicação usando tecnologias web modernas.",
      },
      {
        title: "Revisar e ajustar",
        description:
          "Você revisa o resultado e pode solicitar ajustes conforme o escopo combinado.",
      },
      {
        title: "Entregar e orientar",
        description:
          "Entrego o resultado final e forneço orientações claras para você saber como usar, publicar ou manter o projeto.",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Perguntas frequentes",
    subtitle: "Respostas rápidas para dúvidas comuns antes de iniciar um projeto.",
    items: [
      {
        question: "Você atende clientes no Brasil?",
        answer:
          "Sim. Atendo clientes no Brasil e também no exterior, com comunicação clara em português para projetos nacionais.",
      },
      {
        question: "Você consegue criar uma landing page do zero?",
        answer:
          "Sim. Posso criar uma landing page moderna, responsiva e focada em apresentar seu serviço, gerar contatos ou apoiar vendas online.",
      },
      {
        question: "Você cria aplicações web, dashboards ou painéis administrativos?",
        answer:
          "Sim. Posso criar aplicações web sob medida, dashboards, painéis administrativos e MVPs SaaS com integração entre frontend, backend e banco de dados.",
      },
      {
        question: "Você consegue corrigir bugs em um projeto existente?",
        answer:
          "Sim. Posso ajudar com bugs em React, Next.js, Node.js, JavaScript, TypeScript, APIs, bancos de dados, autenticação e problemas de publicação.",
      },
      {
        question: "Você consegue publicar meu site com domínio personalizado?",
        answer:
          "Sim. Posso ajudar a publicar seu site ou aplicação e configurar domínio personalizado, DNS, SSL, Vercel, Netlify, Cloudflare e GitHub.",
      },
      {
        question: "Preciso ter um design pronto?",
        answer:
          "Não necessariamente. Se você já tiver um design, posso segui-lo. Se não tiver, posso criar um layout limpo e profissional com base no seu negócio e no seu público.",
      },
      {
        question: "Como começo um projeto com você?",
        answer:
          "Escolha o serviço no Fiverr que melhor corresponde à sua necessidade e me envie uma mensagem com os detalhes do projeto. Se preferir, descreva seu objetivo em português mesmo.",
      },
    ],
  },
  fiverr: {
    kicker: "Serviços no Fiverr",
    title: "Contrate-me no Fiverr",
    subtitle:
      "Escolha o serviço que melhor se encaixa na sua necessidade e inicie pelo Fiverr, mesmo para projetos no Brasil.",
    viewOnFiverr: "Ver no Fiverr",
    items: [
      {
        title: "Desenvolvimento de landing page",
        description:
          "Landing pages modernas e focadas em apresentar sua marca, serviço, produto ou negócio local.",
        href: "https://br.fiverr.com/s/jjBDpbG",
      },
      {
        title: "Correção de bugs",
        description:
          "Correção de problemas em React, Next.js, Node.js, JavaScript, TypeScript, APIs, bancos de dados e publicação.",
        href: "https://br.fiverr.com/s/GzRAdX7",
      },
      {
        title: "Configuração de deploy",
        description:
          "Publicação da sua aplicação com domínio, DNS, SSL, Vercel, Netlify, Cloudflare e GitHub.",
        href: "https://br.fiverr.com/s/R73Az0l",
      },
      {
        title: "Aplicações web personalizadas",
        description:
          "Aplicações web sob medida, dashboards, painéis administrativos e MVPs SaaS usando tecnologias full stack modernas.",
        href: "https://www.fiverr.com/s/8zLqVEv",
      },
    ],
  },
  final: {
    kicker: "Comece seu projeto",
    title: "Vamos construir algo profissional juntos.",
    subtitle:
      "Se você precisa de uma landing page, aplicação web personalizada, correção de bugs ou ajuda para colocar seu site no ar, posso ajudar com tecnologias web modernas.",
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
    subtitle: "Comece seu projeto pelo Fiverr",
  },
} as const;

type WidenMessages<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly WidenMessages<Item>[]
    : T extends object
      ? { [Key in keyof T]: WidenMessages<T[Key]> }
      : T;

export type Messages = WidenMessages<typeof en>;

export const dictionaries: Record<Locale, Messages> = {
  en,
  pt,
};
