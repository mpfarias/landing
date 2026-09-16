import type { Locale } from "@/i18n/config";

export type Book1SalesCopy = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    lead: string;
    cta: string;
  };
  problem: {
    title: string;
    items: string[];
    close: string;
  };
  proposal: {
    title: string;
    lead: string;
    points: Array<{ title: string; text: string }>;
  };
  inside: {
    eyebrow: string;
    title: string;
  };
  difference: {
    title: string;
    paragraphs: string[];
    quote: string;
  };
  offer: {
    cta: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  final: {
    text: string;
  };
};

const catalog: Record<Locale, Book1SalesCopy> = {
  "pt-br": {
    metadata: {
      title: "Pequenos Negócios com IA | Como usar IA no seu negócio",
      description:
        "Aprenda a utilizar Inteligência Artificial para melhorar atendimento, conteúdo, divulgação, organização e produtividade no seu pequeno negócio.",
    },
    hero: {
      headline:
        "Use a Inteligência Artificial no seu negócio sem precisar ser especialista em tecnologia.",
      lead: "Aprenda, de forma prática, como utilizar IA para melhorar o atendimento, criar conteúdos, divulgar seu negócio, organizar tarefas e ganhar tempo no dia a dia.",
      cta: "Adquira já",
    },
    problem: {
      title:
        "Você já percebeu quanto tempo pequenas tarefas consomem no seu negócio?",
      items: [
        "responder mensagens repetidas",
        "pensar no que publicar",
        "escrever textos para divulgação",
        "organizar informações",
        "preparar comunicações",
        "ter ideias para promoções",
        "realizar várias tarefas sozinho",
      ],
      close:
        "A Inteligência Artificial pode ajudar em muitas dessas atividades — desde que você saiba como utilizá-la.",
    },
    proposal: {
      title: "IA não precisa ser complicada para ser útil.",
      lead: "O livro foi criado para aproximar a Inteligência Artificial do pequeno empreendedor, com exemplos do dia a dia e aplicação imediata.",
      points: [
        {
          title: "Linguagem simples",
          text: "Sem jargão desnecessário.",
        },
        {
          title: "Situações reais",
          text: "Tarefas que realmente acontecem no pequeno negócio.",
        },
        {
          title: "Aplicação prática",
          text: "Conteúdo para usar, não apenas para ler.",
        },
        {
          title: "Autonomia",
          text: "Você aprende a adaptar a IA ao seu contexto.",
        },
        {
          title: "Sem programação",
          text: "Não é preciso saber código nem ser especialista.",
        },
      ],
    },
    inside: {
      eyebrow: "Veja o livro por dentro",
      title: "Conheça algumas páginas do material",
    },
    difference: {
      title: "Mais do que comandos prontos.",
      paragraphs: [
        "A proposta não é entregar uma lista de prompts para copiar e colar.",
        "O objetivo é ajudar o leitor a entender como conversar com a IA, fornecer contexto, avaliar respostas e adaptar a ferramenta às necessidades do próprio negócio.",
      ],
      quote: "A IA ajuda. Você decide.",
    },
    offer: {
      cta: "Adquira já",
    },
    faq: {
      title: "Perguntas frequentes",
      items: [
        {
          question: "Preciso entender de Inteligência Artificial?",
          answer:
            "Não. O livro começa do uso prático, com linguagem simples, para quem ainda está dando os primeiros passos.",
        },
        {
          question: "Preciso saber programar?",
          answer:
            "Não. O Livro 1 foi feito para quem quer usar IA no dia a dia do negócio, sem programação.",
        },
        {
          question: "Para quem este livro é indicado?",
          answer:
            "Para pequenos comerciantes, prestadores de serviços, profissionais autônomos e pequenos empreendedores que querem incorporar IA à rotina.",
        },
        {
          question: "O livro é digital?",
          answer: "Sim. Trata-se de um e-book.",
        },
        {
          question: "Como recebo o ebook depois da compra?",
          answer:
            "A compra é feita pela Hotmart. Depois do pagamento, o acesso ao e-book é liberado na área do comprador da plataforma.",
        },
        {
          question: "Posso ler pelo celular, tablet ou computador?",
          answer:
            "Sim. Você pode ler no dispositivo que preferir, de acordo com os formatos disponibilizados após a compra.",
        },
        {
          question: "Onde é realizado o pagamento?",
          answer: "O pagamento é realizado através da Hotmart.",
        },
      ],
    },
    final: {
      text: "Comece pelo primeiro passo da série e aprenda a utilizar Inteligência Artificial de forma prática no seu negócio.",
    },
  },
  en: {
    metadata: {
      title: "Small Businesses with AI | How to use AI in your business",
      description:
        "Learn how to use Artificial Intelligence to improve customer service, content, promotion, organization, and productivity in your small business.",
    },
    hero: {
      headline:
        "Use Artificial Intelligence in your business without needing to be a technology expert.",
      lead: "Learn, in a practical way, how to use AI to improve customer service, create content, promote your business, organize tasks, and save time every day.",
      cta: "Get it now",
    },
    problem: {
      title:
        "Have you noticed how much time small tasks take in your business?",
      items: [
        "answering repeated messages",
        "figuring out what to post",
        "writing promotional texts",
        "organizing information",
        "preparing communications",
        "coming up with promotion ideas",
        "handling many tasks on your own",
      ],
      close:
        "Artificial Intelligence can help with many of these activities — as long as you know how to use it.",
    },
    proposal: {
      title: "AI does not need to be complicated to be useful.",
      lead: "The book was created to bring Artificial Intelligence closer to small-business owners, with everyday examples and immediate application.",
      points: [
        {
          title: "Simple language",
          text: "No unnecessary jargon.",
        },
        {
          title: "Real situations",
          text: "Tasks that actually happen in a small business.",
        },
        {
          title: "Practical application",
          text: "Content to use, not just to read.",
        },
        {
          title: "Autonomy",
          text: "You learn to adapt AI to your own context.",
        },
        {
          title: "No coding",
          text: "You do not need to know how to code or be a specialist.",
        },
      ],
    },
    inside: {
      eyebrow: "Look inside the book",
      title: "See some pages from the material",
    },
    difference: {
      title: "More than ready-made prompts.",
      paragraphs: [
        "The goal is not to hand over a list of prompts to copy and paste.",
        "The aim is to help you understand how to talk with AI, provide context, evaluate answers, and adapt the tool to the needs of your own business.",
      ],
      quote: "AI helps. You decide.",
    },
    offer: {
      cta: "Get it now",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Do I need to understand Artificial Intelligence?",
          answer:
            "No. The book starts from practical use, in simple language, for people taking their first steps.",
        },
        {
          question: "Do I need to know how to code?",
          answer:
            "No. Book 1 is for people who want to use AI in everyday business work, with no programming required.",
        },
        {
          question: "Who is this book for?",
          answer:
            "Small shop owners, service providers, independent professionals, and small entrepreneurs who want to bring AI into their routine.",
        },
        {
          question: "Is the book digital?",
          answer: "Yes. It is an e-book.",
        },
        {
          question: "How do I receive the e-book after purchase?",
          answer:
            "The purchase is made through Hotmart. After payment, access to the e-book is released in your Hotmart buyer area.",
        },
        {
          question: "Can I read it on a phone, tablet, or computer?",
          answer:
            "Yes. You can read it on the device you prefer, according to the formats available after purchase.",
        },
        {
          question: "Where is payment processed?",
          answer: "Payment is processed through Hotmart.",
        },
      ],
    },
    final: {
      text: "Start with the first step of the series and learn how to use Artificial Intelligence in a practical way in your business.",
    },
  },
  es: {
    metadata: {
      title: "Pequeños Negocios con IA | Cómo usar IA en tu negocio",
      description:
        "Aprende a utilizar inteligencia artificial para mejorar la atención, el contenido, la difusión, la organización y la productividad en tu pequeño negocio.",
    },
    hero: {
      headline:
        "Usa la inteligencia artificial en tu negocio sin necesidad de ser especialista en tecnología.",
      lead: "Aprende, de forma práctica, cómo utilizar la IA para mejorar la atención, crear contenidos, difundir tu negocio, organizar tareas y ganar tiempo en el día a día.",
      cta: "Adquiérelo ya",
    },
    problem: {
      title:
        "¿Ya te diste cuenta de cuánto tiempo consumen las pequeñas tareas en tu negocio?",
      items: [
        "responder mensajes repetidos",
        "pensar qué publicar",
        "escribir textos para difusión",
        "organizar información",
        "preparar comunicaciones",
        "tener ideas para promociones",
        "hacer varias tareas en solitario",
      ],
      close:
        "La inteligencia artificial puede ayudar en muchas de estas actividades, siempre que sepas cómo utilizarla.",
    },
    proposal: {
      title: "La IA no necesita ser complicada para ser útil.",
      lead: "El libro fue creado para acercar la inteligencia artificial al pequeño emprendedor, con ejemplos del día a día y aplicación inmediata.",
      points: [
        {
          title: "Lenguaje simple",
          text: "Sin jerga innecesaria.",
        },
        {
          title: "Situaciones reales",
          text: "Tareas que realmente ocurren en el pequeño negocio.",
        },
        {
          title: "Aplicación práctica",
          text: "Contenido para usar, no solo para leer.",
        },
        {
          title: "Autonomía",
          text: "Aprendes a adaptar la IA a tu propio contexto.",
        },
        {
          title: "Sin programación",
          text: "No hace falta saber código ni ser especialista.",
        },
      ],
    },
    inside: {
      eyebrow: "Mira el libro por dentro",
      title: "Conoce algunas páginas del material",
    },
    difference: {
      title: "Más que comandos listos.",
      paragraphs: [
        "La propuesta no es entregar una lista de indicaciones para copiar y pegar.",
        "El objetivo es ayudar al lector a entender cómo conversar con la IA, dar contexto, evaluar respuestas y adaptar la herramienta a las necesidades de su propio negocio.",
      ],
      quote: "La IA ayuda. Tú decides.",
    },
    offer: {
      cta: "Adquiérelo ya",
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          question: "¿Necesito entender de inteligencia artificial?",
          answer:
            "No. El libro parte del uso práctico, con un lenguaje simple, para quien está dando los primeros pasos.",
        },
        {
          question: "¿Necesito saber programar?",
          answer:
            "No. El Libro 1 está pensado para usar IA en el día a día del negocio, sin programación.",
        },
        {
          question: "¿Para quién está indicado este libro?",
          answer:
            "Para pequeños comerciantes, prestadores de servicios, profesionales autónomos y pequeños emprendedores que quieren incorporar IA a su rutina.",
        },
        {
          question: "¿El libro es digital?",
          answer: "Sí. Es un e-book.",
        },
        {
          question: "¿Cómo recibo el e-book después de la compra?",
          answer:
            "La compra se realiza a través de Hotmart. Después del pago, el acceso al e-book se libera en el área del comprador de la plataforma.",
        },
        {
          question: "¿Puedo leerlo en el celular, la tablet o la computadora?",
          answer:
            "Sí. Puedes leerlo en el dispositivo que prefieras, según los formatos disponibles después de la compra.",
        },
        {
          question: "¿Dónde se realiza el pago?",
          answer: "El pago se realiza a través de Hotmart.",
        },
      ],
    },
    final: {
      text: "Empieza por el primer paso de la serie y aprende a utilizar inteligencia artificial de forma práctica en tu negocio.",
    },
  },
};

export function getBook1SalesCopy(locale: Locale): Book1SalesCopy {
  return catalog[locale];
}
