import { featuredBookChapterPlaceholders } from "@/data/chapters.mock";
import { BOOK_1_PRICE, resolveHotmartUrl } from "@/data/hotmart";
import type { Book } from "@/data/types";

const emptyHotmart = {
  "pt-br": null,
  en: null,
  es: null,
} as const;

const emptyPrice = {
  "pt-br": null,
  en: null,
  es: null,
} as const;

export const pequenosNegociosBooks: Book[] = [
  {
    id: "pequenos-negocios-com-ia",
    slug: {
      "pt-br": "pequenos-negocios-com-ia",
      en: "small-businesses-with-ai",
      es: "pequenos-negocios-con-ia",
    },
    order: 1,
    series: "pequenos-negocios-com-ia",
    stage: "use",
    stageLabel: "USAR",
    status: "available",
    title: {
      "pt-br": "Pequenos Negócios com IA",
      en: "Small Businesses with AI",
      es: "Pequeños Negocios con IA",
    },
    subtitle: {
      "pt-br": "Como Vender Mais, Atender Melhor e Economizar Tempo",
      en: "How to Sell More, Serve Better and Save Time",
      es: "Cómo Vender Más, Atender Mejor y Ahorrar Tiempo",
    },
    description: {
      "pt-br":
        "Transforme a Inteligência Artificial em resultados reais para o seu negócio.",
      en: "Turn Artificial Intelligence into real results for your business.",
      es: "Transforma la Inteligencia Artificial en resultados reales para tu negocio.",
    },
    cover: {
      "pt-br": "/books/pt-br/pequenos-negocios-com-ia-pt-br.jpg",
      en: "/books/en/small-businesses-with-ai-en.jpg",
      es: "/books/es/pequenos-negocios-con-ia-es.jpg",
    },
    coverMockup: {
      "pt-br": "/books/pt-br/pequenos-negocios-com-ia-pt-br-mockup.jpg",
      en: "/books/en/small-businesses-with-ai-en-mockup.jpg",
      es: "/books/es/pequenos-negocios-con-ia-es-mockup.jpg",
    },
    coverAlt: {
      "pt-br": "Capa do livro Pequenos Negócios com IA",
      en: "Cover of Small Businesses with AI",
      es: "Portada del libro Pequeños Negocios con IA",
    },
    hotmartUrl: {
      "pt-br": resolveHotmartUrl(
        "pt-br",
        process.env.NEXT_PUBLIC_HOTMART_BOOK_1_PT_BR,
      ),
      en: resolveHotmartUrl("en", process.env.NEXT_PUBLIC_HOTMART_BOOK_1_EN),
      es: resolveHotmartUrl("es", process.env.NEXT_PUBLIC_HOTMART_BOOK_1_ES),
    },
    price: {
      "pt-br": BOOK_1_PRICE["pt-br"],
      en: BOOK_1_PRICE.en,
      es: BOOK_1_PRICE.es,
    },
    centralQuestion: "Como posso usar IA?",
    focus:
      "Uso prático da Inteligência Artificial no cotidiano do pequeno negócio.",
    expectedOutcome:
      "O leitor aprende a conversar com a IA e utilizá-la.",
    scope: [
      "ESTRATÉGIAS",
      "AUTOMAÇÃO",
      "PRODUTIVIDADE",
      "RESULTADOS",
    ],
    outOfScope: [
      "processos e automação aprofundados",
      "gestão por indicadores e dados",
      "criação de um negócio do zero",
    ],
    highlights: [
      "ESTRATÉGIAS",
      "AUTOMAÇÃO",
      "PRODUTIVIDADE",
      "RESULTADOS",
    ],
    audience: [],
    chapters: featuredBookChapterPlaceholders,
  },
  {
    id: "transforme-seu-pequeno-negocio-com-ia",
    slug: {
      "pt-br": "transforme-seu-pequeno-negocio-com-ia",
      en: "transform-your-small-business-with-ai",
      es: "transforma-tu-pequeno-negocio-con-ia",
    },
    order: 2,
    series: "pequenos-negocios-com-ia",
    stage: "transform",
    stageLabel: "TRANSFORMAR",
    status: "development",
    title: {
      "pt-br": "Transforme seu Pequeno Negócio com IA",
      en: "Transform Your Small Business with AI",
      es: "Transforma tu Pequeño Negocio con IA",
    },
    subtitle: {
      "pt-br":
        "Automatize processos, elimine tarefas repetitivas e ganhe tempo",
      en: "Automate processes, eliminate repetitive tasks and save time",
      es: "Automatiza procesos, elimina tareas repetitivas y ahorra tiempo",
    },
    description: {
      "pt-br":
        "O leitor já sabe usar IA. Aprende a observar a rotina do negócio, identificar tarefas repetitivas e transformar atividades manuais em processos organizados e, quando fizer sentido, automatizados.",
    },
    cover: {
      "pt-br": "/books/pt-br/transforme-seu-pequeno-negocio-com-ia-pt-br.jpg",
      en: "/books/en/transform-your-small-business-with-ai-en.jpg",
      es: "/books/es/transforma-tu-pequeno-negocio-con-ia-es.jpg",
    },
    coverAlt: {
      "pt-br": "Capa do livro Transforme seu Pequeno Negócio com IA",
      en: "Cover of Transform Your Small Business with AI",
      es: "Portada del libro Transforma tu Pequeño Negocio con IA",
    },
    hotmartUrl: { ...emptyHotmart },
    price: { ...emptyPrice },
    centralQuestion:
      "Como posso transformar minhas tarefas em processos melhores e automatizados?",
    focus: "Processos e automação",
    expectedOutcome:
      "O leitor deixa de utilizar IA apenas pontualmente e passa a incorporá-la aos processos cotidianos do negócio.",
    scope: [
      "tarefa, processo e automação",
      "mapeamento de processos",
      "gargalos",
      "desperdícios de tempo",
      "procedimentos",
      "checklists",
      "gatilhos",
      "condições",
      "ações",
      "automação de atendimento",
      "automação de vendas",
      "leads",
      "follow-ups",
      "tarefas administrativas",
      "formulários",
      "planilhas",
      "documentos",
      "propostas",
      "orçamentos",
      "notificações",
      "integração entre ferramentas",
      "plataformas no-code",
      "IA dentro de fluxos automatizados",
      "testes",
      "tratamento de erros",
      "supervisão humana",
    ],
    outOfScope: [
      "gestão financeira aprofundada",
      "indicadores",
      "análise estratégica",
      "planejamento empresarial",
      "tomada de decisão baseada em dados",
    ],
    highlights: [],
    audience: [],
    chapters: [],
  },
  {
    id: "gerencie-seu-pequeno-negocio-com-ia",
    slug: {
      "pt-br": "gerencie-seu-pequeno-negocio-com-ia",
      en: "manage-your-small-business-with-ai",
      es: "gestiona-tu-pequeno-negocio-con-ia",
    },
    order: 3,
    series: "pequenos-negocios-com-ia",
    stage: "manage",
    stageLabel: "GERENCIAR",
    status: "development",
    title: {
      "pt-br": "Gerencie seu Pequeno Negócio com IA",
      en: "Manage Your Small Business with AI",
      es: "Gestiona tu Pequeño Negocio con IA",
    },
    subtitle: {
      "pt-br":
        "Use dados, indicadores e Inteligência Artificial para tomar melhores decisões",
      en: "Use data, metrics, and artificial intelligence to make better decisions",
      es: "Utiliza datos, indicadores e inteligencia artificial para tomar mejores decisiones",
    },
    description: {
      "pt-br":
        "A IA analisa e ajuda. O empreendedor decide.",
    },
    cover: {
      "pt-br": "/books/pt-br/gerencie-seu-pequeno-negocio-com-ia-pt-br.jpg",
      en: "/books/en/manage-your-small-business-with-ai-en.jpg",
      es: "/books/es/gestiona-tu-pequeno-negocio-con-ia-es.jpg",
    },
    coverAlt: {
      "pt-br": "Capa do livro Gerencie seu Pequeno Negócio com IA",
      en: "Cover of Manage Your Small Business with AI",
      es: "Portada del libro Gestiona tu Pequeño Negocio con IA",
    },
    hotmartUrl: { ...emptyHotmart },
    price: { ...emptyPrice },
    centralQuestion:
      "Como posso entender o que está acontecendo no meu negócio e tomar decisões melhores?",
    focus: "Gestão, análise e tomada de decisão",
    expectedOutcome:
      "O leitor passa a utilizar informações, indicadores e análises para compreender melhor o negócio e tomar decisões mais fundamentadas.",
    scope: [
      "vendas",
      "receitas",
      "custos",
      "despesas",
      "fluxo de caixa",
      "margem",
      "rentabilidade",
      "desempenho de produtos",
      "desempenho de serviços",
      "comportamento dos clientes",
      "recorrência",
      "perda de clientes",
      "comparação de períodos",
      "metas",
      "indicadores",
      "dashboards",
      "tendências",
      "identificação de problemas",
      "planejamento",
      "cenários",
      "priorização",
      "feedbacks",
      "reclamações",
      "campanhas",
      "promoções",
      "relatórios gerenciais",
    ],
    outOfScope: ["criação de uma empresa do zero"],
    highlights: [
      "Quais produtos tiveram queda de vendas nos últimos três meses?",
      "Quais despesas mais cresceram?",
      "Qual serviço gera maior receita e qual apresenta maior margem?",
      "Existe algum padrão nos clientes que deixaram de comprar?",
    ],
    audience: [],
    chapters: [],
  },
  {
    id: "crie-seu-pequeno-negocio-com-ia",
    slug: {
      "pt-br": "crie-seu-pequeno-negocio-com-ia",
      en: "create-your-small-business-with-ai",
      es: "crea-tu-pequeno-negocio-con-ia",
    },
    order: 4,
    series: "pequenos-negocios-com-ia",
    stage: "create",
    stageLabel: "CRIAR",
    status: "development",
    title: {
      "pt-br": "Crie seu Pequeno Negócio com IA",
      en: "Create Your Small Business with AI",
      es: "Crea tu Pequeño Negocio con IA",
    },
    subtitle: {
      "pt-br":
        "Do planejamento à operação: construa um negócio do zero com Inteligência Artificial",
      en: "From planning to operations: build a business from scratch with artificial intelligence",
      es: "Del planeamiento a la operación: construye un negocio desde cero con inteligencia artificial",
    },
    description: {
      "pt-br":
        "Fechamento da série: um projeto guiado para construir um pequeno negócio do zero.",
    },
    cover: {
      "pt-br": "/books/pt-br/crie-seu-pequeno-negocio-com-ia-pt-br.jpg",
      en: "/books/en/create-your-small-business-with-ai-en.jpg",
      es: "/books/es/crea-tu-pequeno-negocio-con-ia-es.jpg",
    },
    coverAlt: {
      "pt-br": "Capa do livro Crie seu Pequeno Negócio com IA",
      en: "Cover of Create Your Small Business with AI",
      es: "Portada del libro Crea tu Pequeño Negocio con IA",
    },
    hotmartUrl: { ...emptyHotmart },
    price: { ...emptyPrice },
    centralQuestion:
      "Como aplico tudo isso para construir um negócio do zero?",
    focus: "Construção de um pequeno negócio do zero",
    expectedOutcome:
      "O leitor aplica o conhecimento acumulado nos três livros anteriores para planejar, estruturar e colocar um pequeno negócio em funcionamento com auxílio da IA.",
    scope: [
      "IDEIA",
      "VALIDAÇÃO",
      "CLIENTE",
      "PRODUTO",
      "MODELO",
      "PREÇO",
      "MARCA",
      "VENDAS",
      "PROCESSOS",
      "AUTOMAÇÃO",
      "GESTÃO",
      "LANÇAMENTO",
    ],
    outOfScope: [
      "abertura formal da empresa",
      "tributação",
      "licenças",
      "contratos",
      "regulamentações específicas",
    ],
    highlights: [
      "PLANO ESTRATÉGICO",
      "CLIENTES E PRODUTOS",
      "GESTÃO INTELIGENTE",
      "LANÇAMENTO E CRESCIMENTO",
    ],
    audience: [],
    chapters: [],
  },
];
