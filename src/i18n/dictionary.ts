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
    work: "Portfolio",
    howIWork: "How I Work",
    faq: "FAQ",
    contact: "Contact",
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
    paragraphs: [
      "Hi, I’m Marcelo Farias, a Full Stack Web Developer with a Bachelor’s degree in Information Systems, completed in 2009.",
      "Since 2010, I have worked as a public servant, developing and supporting technology solutions focused on public safety, operational efficiency and digital transformation.",
      "Throughout my career, I have worked on real-world systems designed to improve workflows, organize data, support decision-making and make critical operations more efficient.",
      "Today, I bring this practical experience to freelance web development, helping businesses, entrepreneurs and developers build landing pages, custom web apps, dashboards, admin panels, SaaS MVPs, bug fixes and reliable deployment setups using modern technologies.",
      "My work combines technical development, problem-solving, clean interfaces, organized code and a strong focus on delivering solutions that are useful, maintainable and ready for real use.",
    ],
    cards: [
      {
        label: "Education",
        value: "B.Sc. in Information Systems",
      },
      {
        label: "Experience",
        value: "Public sector technology since 2010",
      },
      {
        label: "Focus",
        value: "Web apps, dashboards & deployment",
      },
      {
        label: "Approach",
        value: "Practical, reliable and business-oriented",
      },
    ],
  },
  tech: {
    kicker: "Tech Stack",
    title: "Technologies I Work With",
    subtitle:
      "I use modern technologies to build fast, responsive and scalable web solutions.",
  },
  work: {
    kicker: "Portfolio",
    title: "Selected work",
    subtitle:
      "Real projects and public repositories that demonstrate my work with landing pages, web applications, dashboards, APIs and frontend development.",
    viewGithub: "View on GitHub",
    hireSimilar: "Hire similar work",
    schedlyPreview: {
      brand: "SCHEDLY",
      tagline: "Business Scheduling SaaS",
      chips: "Appointments · Clients · Payments · Messages",
    },
    projectTranslations: {
      landing: {
        title: "Personal Developer Landing Page",
        category: "Landing Page",
        service: "Landing Page Development",
        description:
          "A modern personal landing page built to present freelance web development services, portfolio projects, multilingual content, dark/light mode and conversion-focused Fiverr CTAs.",
      },
      "controle-equipes": {
        title: "Public Safety Management Platform",
        category: "Full Stack Web App",
        service: "Custom Web Apps",
        description:
          "A modular operational management platform focused on workforce organization, personnel availability, administrative workflows, auditability and role-based access control for public safety environments.",
      },
      "tarifas-energia-api": {
        title: "Energy Tariff Public API",
        category: "REST API",
        service: "API Development",
        description:
          "A public API for estimating electricity consumption costs based on distributors, tariff flags and regional taxes, with endpoints for status, tariff flags, distributor search, cache and cost projection.",
      },
      "ctb-api": {
        title: "Traffic Violations Public API",
        category: "REST API",
        service: "API Development",
        description:
          "A public API that provides structured Brazilian traffic violation data, including legal basis, points, fines and administrative measures, built with Node.js, Express and Swagger documentation.",
      },
      "ta-na-lista": {
        title: "React List Management App",
        category: "Frontend App",
        service: "Frontend Development",
        description:
          "A React and Vite application focused on list-based workflows, frontend structure and component-based development.",
      },
      schedly: {
        title: "Schedly — Business Scheduling SaaS Platform",
        category: "SaaS MVP / Full Stack Web App",
        service: "Custom Web Apps",
        description:
          "A business scheduling platform designed to help companies manage clients, services, professionals, appointments, payments and customer communication through a modern web dashboard and REST API.",
      },
    },
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
  contact: {
    kicker: "Contact",
    title: "Need a custom project?",
    lead:
      "For larger or different projects, you can contact me directly to discuss the scope.",
    body:
      "If your project does not fit one of my Fiverr services, you can contact me directly to discuss custom web apps, dashboards, admin panels, SaaS MVPs, APIs or other web development needs.",
    secondary:
      "Tell me what you want to build, your current stage, main goals and any technical requirements. I will review the scope and suggest the best way to move forward.",
    emailLabel: "Email",
    emailHint:
      "Best for detailed project requests and professional contact.",
    phoneLabel: "Phone / WhatsApp",
    phoneDisplay: "+55 61 99972-9293",
    phoneHint:
      "Use this option for direct contact about larger or custom projects.",
    fiverrCta: "Or start with my Custom Web Apps service on Fiverr",
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
    work: "Portfólio",
    howIWork: "Processo",
    faq: "FAQ",
    contact: "Contato",
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
    paragraphs: [
      "Olá, sou Marcelo Farias, desenvolvedor web full stack com graduação em Sistemas de Informação, concluída em 2009.",
      "Desde 2010, atuo como servidor público, desenvolvendo e apoiando soluções de tecnologia voltadas à segurança pública, eficiência operacional e transformação digital.",
      "Ao longo da carreira, trabalhei em sistemas reais criados para melhorar fluxos de trabalho, organizar dados, apoiar a tomada de decisões e tornar operações críticas mais eficientes.",
      "Hoje levo essa experiência prática para o desenvolvimento web freelance, ajudando empresas, empreendedores e desenvolvedores a criarem landing pages, aplicações web personalizadas, dashboards, painéis administrativos, MVPs SaaS, correção de bugs e setups de deploy confiáveis com tecnologias modernas.",
      "Meu trabalho une desenvolvimento técnico, resolução de problemas, interfaces limpas, código organizado e um foco forte em entregar soluções úteis, sustentáveis e prontas para uso real.",
    ],
    cards: [
      {
        label: "Formação",
        value: "Bacharelado em Sistemas de Informação",
      },
      {
        label: "Experiência",
        value: "Tecnologia no setor público desde 2010",
      },
      {
        label: "Foco",
        value: "Apps web, dashboards e deploy",
      },
      {
        label: "Abordagem",
        value: "Prática, confiável e orientada ao negócio",
      },
    ],
  },
  tech: {
    kicker: "Stack",
    title: "Tecnologias que uso",
    subtitle:
      "Uso tecnologias modernas para construir soluções web rápidas, responsivas e escaláveis.",
  },
  work: {
    kicker: "Portfólio",
    title: "Projetos em destaque",
    subtitle:
      "Projetos reais e repositórios públicos que mostram meu trabalho com landing pages, aplicações web, painéis, APIs e desenvolvimento frontend.",
    viewGithub: "Ver no GitHub",
    hireSimilar: "Contratar trabalho semelhante",
    schedlyPreview: {
      brand: "SCHEDLY",
      tagline: "SaaS de agendamento para negócios",
      chips: "Agendamentos · Clientes · Pagamentos · Mensagens",
    },
    projectTranslations: {
      landing: {
        title: "Landing page pessoal do desenvolvedor",
        category: "Landing page",
        service: "Desenvolvimento de landing page",
        description:
          "Landing page pessoal moderna para apresentar serviços freelance de desenvolvimento web, projetos de portfólio, conteúdo multilíngue, tema claro/escuro e CTAs focados em conversão no Fiverr.",
      },
      "controle-equipes": {
        title: "Plataforma institucional de gestão operacional",
        category: "Aplicação web full stack",
        service: "Aplicações web personalizadas",
        description:
          "Plataforma modular de apoio à gestão operacional voltada à organização de equipes, disponibilidade de pessoal, fluxos administrativos, rastreabilidade e controle de acesso por perfil, em contexto de segurança pública.",
      },
      "tarifas-energia-api": {
        title: "API pública de tarifas de energia",
        category: "API REST",
        service: "Desenvolvimento de API",
        description:
          "API pública para estimativa de custo de consumo de energia com base em distribuidoras, bandeiras tarifárias e tributos regionais, com endpoints de status, bandeiras, busca de distribuidora, cache e projeção de custo.",
      },
      "ctb-api": {
        title: "API pública de infrações de trânsito",
        category: "API REST",
        service: "Desenvolvimento de API",
        description:
          "API pública com dados estruturados de infrações do CTB brasileiro, incluindo base legal, pontuação, valores e medidas administrativas, com Node.js, Express e documentação Swagger.",
      },
      "ta-na-lista": {
        title: "App React de gestão de listas",
        category: "Aplicação frontend",
        service: "Desenvolvimento frontend",
        description:
          "Aplicação React e Vite focada em fluxos baseados em listas, estrutura de frontend e desenvolvimento por componentes.",
      },
      schedly: {
        title: "Schedly — plataforma SaaS de agendamento para negócios",
        category: "MVP SaaS / aplicação web full stack",
        service: "Aplicações web personalizadas",
        description:
          "Plataforma de agendamento para empresas gerenciarem clientes, serviços, profissionais, compromissos, pagamentos e comunicação com clientes por meio de um dashboard web moderno e API REST.",
      },
    },
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
  contact: {
    kicker: "Contato",
    title: "Precisa de um projeto sob medida?",
    lead:
      "Para projetos maiores ou diferentes, você pode falar comigo diretamente para alinhar escopo.",
    body:
      "Se o seu projeto não se encaixa exatamente em um dos meus Gigs no Fiverr, entre em contato para conversarmos sobre aplicações web personalizadas, dashboards, painéis administrativos, MVPs SaaS, APIs e outras necessidades de desenvolvimento web.",
    secondary:
      "Conte o que quer construir, em que estágio está, os principais objetivos e requisitos técnicos. Avalio o escopo e indico o melhor caminho para seguir.",
    emailLabel: "E-mail",
    emailHint:
      "Melhor para pedidos detalhados e contato profissional.",
    phoneLabel: "Telefone / WhatsApp",
    phoneDisplay: "+55 61 99972-9293",
    phoneHint:
      "Use esta opção para falar diretamente sobre projetos maiores ou sob medida.",
    fiverrCta:
      "Ou comece pelo meu serviço de aplicações web personalizadas no Fiverr",
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
