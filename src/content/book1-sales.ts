import type { Locale } from "@/i18n/config";

export type Book1SalesCopy = {
  metadata: { title: string; description: string };
  back: string;
  hero: {
    headline: string;
    lead: string;
    cta: string;
  };
  badges: [string, string, string];
  problem: {
    title: string;
    items: string[];
    close: string;
  };
  learnClose: string;
  inside: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  receive: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; text: string }>;
  };
  guarantee: {
    title: string;
    text: string;
  };
  author: {
    eyebrow: string;
    name: string;
    highlight: string;
    intro: [string, string, string];
    principleLead: string;
    principleQuote: string;
    closing: [string, string];
    quote: string;
    photoAlt: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  final: { text: string };
};

const catalog: Record<Locale, Book1SalesCopy> = {
  "pt-br": {
    metadata: {
      title: "Pequenos Negócios com IA | Como usar IA no seu negócio",
      description:
        "Aprenda a utilizar Inteligência Artificial para melhorar atendimento, conteúdo, divulgação, organização e produtividade no seu pequeno negócio.",
    },
    back: "Voltar para a série",
    hero: {
      headline:
        "Use a Inteligência Artificial no seu negócio sem precisar ser especialista em tecnologia.",
      lead: "Aprenda de forma prática como utilizar IA para melhorar o atendimento, criar conteúdos, divulgar seu negócio, organizar tarefas e ganhar tempo no dia a dia.",
      cta: "Adquira já",
    },
    badges: ["Acesso imediato", "Pagamento seguro", "Garantia de 7 dias"],
    problem: {
      title: "Você se identifica com alguma dessas situações?",
      items: [
        "você perde tempo respondendo mensagens parecidas;",
        "não sabe o que publicar para divulgar o negócio;",
        "tem dificuldade para escrever textos de atendimento ou divulgação;",
        "precisa organizar melhor tarefas e informações;",
        "quer ganhar produtividade, mas não sabe como usar IA na prática;",
        "sente que a IA parece útil, mas complicada demais.",
      ],
      close:
        "A boa notícia é que usar Inteligência Artificial no pequeno negócio pode ser muito mais simples do que parece.",
    },
    learnClose:
      "Tudo explicado de forma prática, simples e direta ao ponto.",
    inside: {
      eyebrow: "Veja por dentro",
      title: "Conheça as primeiras páginas do livro",
      lead: "Veja uma amostra real do material antes de adquirir o ebook.",
    },
    receive: {
      title: "O que você recebe",
      subtitle:
        "Um material prático para aplicar a IA no dia a dia do seu negócio.",
      items: [
        {
          title: "E-book digital em PDF",
          text: "O Livro 1 completo, para consultar quando precisar.",
        },
        {
          title: "Acesso imediato após a compra",
          text: "Assim que o pagamento for confirmado, o material é liberado.",
        },
        {
          title: "Leitura no celular, tablet ou computador",
          text: "Estude no dispositivo que fizer mais sentido para a sua rotina.",
        },
        {
          title: "Conteúdo direto e prático",
          text: "Sem rodeios: aplicação no atendimento, divulgação, organização e produtividade.",
        },
      ],
    },
    guarantee: {
      title: "Garantia de 7 dias",
      text: "Se o material não atender às suas expectativas, você poderá solicitar reembolso dentro do prazo de garantia.",
    },
    author: {
      eyebrow: "Conheça quem escreveu este material",
      name: "Marcelo Pires de Farias",
      highlight: "Tecnologia aplicada a problemas reais.",
      intro: [
        "Marcelo Pires de Farias é formado em Sistemas de Informação e atua há anos no desenvolvimento e aplicação de soluções tecnológicas voltadas à resolução de problemas reais.",
        "Ao longo de sua trajetória, desenvolveu sistemas e ferramentas para simplificar processos, organizar informações e tornar atividades do dia a dia mais eficientes.",
        "Mais recentemente, passou a explorar também o uso prático da Inteligência Artificial, especialmente como ferramenta de apoio à produtividade, comunicação, organização e tomada de decisões.",
      ],
      principleLead: "Sua relação com a tecnologia parte de um princípio simples:",
      principleQuote: "Uma boa ferramenta não precisa ser complicada para ser útil.",
      closing: [
        "Foi com essa visão que nasceu Pequenos Negócios com IA: aproximar a Inteligência Artificial de quem empreende e mostrar, com exemplos simples e aplicação prática, que não é necessário ser especialista em tecnologia para aproveitar seus benefícios.",
        "Mais do que ensinar comandos prontos, a proposta é ajudar o leitor a desenvolver autonomia para utilizar a IA de acordo com as necessidades do próprio negócio.",
      ],
      quote: "A IA ajuda. Você decide.",
      photoAlt:
        "Foto de Marcelo Pires de Farias, autor de Pequenos Negócios com IA",
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
            "Não. O Livro 1 foi feito para usar IA no dia a dia do negócio, sem programação.",
        },
        {
          question: "Para quem este livro é indicado?",
          answer:
            "Para pequenos comerciantes, prestadores de serviços, profissionais autônomos e pequenos empreendedores que querem incorporar IA à rotina.",
        },
        {
          question: "O livro é digital?",
          answer: "Sim. Trata-se de um e-book em PDF.",
        },
        {
          question: "Como recebo o ebook depois da compra?",
          answer:
            "Depois do pagamento confirmado, o acesso ao e-book em PDF é liberado na sua área de compras.",
        },
        {
          question: "Posso ler pelo celular, tablet ou computador?",
          answer:
            "Sim. Você pode ler no dispositivo que preferir, de acordo com os formatos disponibilizados após a compra.",
        },
        {
          question: "Como funciona o pagamento?",
          answer:
            "O pagamento é feito de forma online no checkout da compra, com as opções disponíveis no momento, incluindo parcelamento no cartão.",
        },
        {
          question: "Existe garantia?",
          answer:
            "Sim. Você tem 7 dias de garantia. Se o material não atender às suas expectativas, poderá solicitar o reembolso dentro desse prazo.",
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
    back: "Back to the series",
    hero: {
      headline:
        "Use Artificial Intelligence in your business without needing to be a technology expert.",
      lead: "Learn, in a practical way, how to use AI to improve customer service, create content, promote your business, organize tasks, and save time every day.",
      cta: "Get it now",
    },
    badges: ["Immediate access", "Secure payment", "7-day guarantee"],
    problem: {
      title: "Do you recognize any of these situations?",
      items: [
        "you spend time answering similar messages;",
        "you don’t know what to post to promote the business;",
        "you struggle to write customer-service or promotional texts;",
        "you need to organize tasks and information better;",
        "you want more productivity, but don’t know how to use AI in practice;",
        "AI seems useful, but too complicated.",
      ],
      close:
        "The good news is that using Artificial Intelligence in a small business can be much simpler than it seems.",
    },
    learnClose: "Everything explained in a practical, simple, and direct way.",
    inside: {
      eyebrow: "Look inside",
      title: "See the first pages of the book",
      lead: "See a real sample of the material before purchasing the e-book.",
    },
    receive: {
      title: "What you get",
      subtitle: "A practical material to apply AI in the everyday work of your business.",
      items: [
        {
          title: "Digital e-book in PDF",
          text: "The complete Book 1, ready to consult whenever you need it.",
        },
        {
          title: "Immediate access after purchase",
          text: "As soon as payment is confirmed, the material is released.",
        },
        {
          title: "Read on phone, tablet, or computer",
          text: "Study on the device that best fits your routine.",
        },
        {
          title: "Direct, practical content",
          text: "No detours: application in service, promotion, organization, and productivity.",
        },
      ],
    },
    guarantee: {
      title: "7-day guarantee",
      text: "If the material does not meet your expectations, you can request a refund within the guarantee period.",
    },
    author: {
      eyebrow: "Meet the person who wrote this material",
      name: "Marcelo Pires de Farias",
      highlight: "Technology applied to real problems.",
      intro: [
        "Marcelo Pires de Farias holds a degree in Information Systems and has spent years developing and applying technology solutions focused on real problems.",
        "Throughout his career, he has built systems and tools to simplify processes, organize information, and make everyday activities more efficient.",
        "More recently, he has also explored the practical use of Artificial Intelligence, especially as support for productivity, communication, organization, and decision-making.",
      ],
      principleLead: "His relationship with technology starts from a simple principle:",
      principleQuote: "A good tool does not need to be complicated to be useful.",
      closing: [
        "It was with this view that Small Businesses with AI was born: to bring Artificial Intelligence closer to people who run a business and show, with simple examples and practical application, that you do not need to be a technology expert to benefit from it.",
        "More than teaching ready-made prompts, the aim is to help readers develop autonomy to use AI according to the needs of their own business.",
      ],
      quote: "AI helps. You decide.",
      photoAlt: "Photo of Marcelo Pires de Farias, author of Small Businesses with AI",
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
            "No. Book 1 is for using AI in everyday business work, with no programming required.",
        },
        {
          question: "Who is this book for?",
          answer:
            "Small shop owners, service providers, independent professionals, and small entrepreneurs who want to bring AI into their routine.",
        },
        {
          question: "Is the book digital?",
          answer: "Yes. It is a PDF e-book.",
        },
        {
          question: "How do I receive the e-book after purchase?",
          answer:
            "After payment is confirmed, access to the PDF e-book is released in your purchase area.",
        },
        {
          question: "Can I read it on a phone, tablet, or computer?",
          answer:
            "Yes. You can read it on the device you prefer, according to the formats available after purchase.",
        },
        {
          question: "How does payment work?",
          answer:
            "Payment is made online at checkout, with the options available at the time of purchase.",
        },
        {
          question: "Is there a guarantee?",
          answer:
            "Yes. You have a 7-day guarantee. If the material does not meet your expectations, you can request a refund within that period.",
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
    back: "Volver a la serie",
    hero: {
      headline:
        "Usa la inteligencia artificial en tu negocio sin necesidad de ser especialista en tecnología.",
      lead: "Aprende, de forma práctica, cómo utilizar la IA para mejorar la atención, crear contenidos, difundir tu negocio, organizar tareas y ganar tiempo en el día a día.",
      cta: "Adquiérelo ya",
    },
    badges: ["Acceso inmediato", "Pago seguro", "Garantía de 7 días"],
    problem: {
      title: "¿Te identificas con alguna de estas situaciones?",
      items: [
        "pierdes tiempo respondiendo mensajes parecidos;",
        "no sabes qué publicar para difundir el negocio;",
        "te cuesta escribir textos de atención o difusión;",
        "necesitas organizar mejor las tareas y la información;",
        "quieres ganar productividad, pero no sabes cómo usar la IA en la práctica;",
        "sientes que la IA parece útil, pero demasiado complicada.",
      ],
      close:
        "La buena noticia es que usar inteligencia artificial en el pequeño negocio puede ser mucho más simple de lo que parece.",
    },
    learnClose: "Todo explicado de forma práctica, simple y directa.",
    inside: {
      eyebrow: "Mira por dentro",
      title: "Conoce las primeras páginas del libro",
      lead: "Ve una muestra real del material antes de adquirir el e-book.",
    },
    receive: {
      title: "Qué recibes",
      subtitle:
        "Un material práctico para aplicar la IA en el día a día de tu negocio.",
      items: [
        {
          title: "E-book digital en PDF",
          text: "El Libro 1 completo, para consultar cuando lo necesites.",
        },
        {
          title: "Acceso inmediato después de la compra",
          text: "Cuando se confirma el pago, el material se libera.",
        },
        {
          title: "Lectura en celular, tablet o computadora",
          text: "Estudia en el dispositivo que mejor encaje con tu rutina.",
        },
        {
          title: "Contenido directo y práctico",
          text: "Sin rodeos: aplicación en atención, difusión, organización y productividad.",
        },
      ],
    },
    guarantee: {
      title: "Garantía de 7 días",
      text: "Si el material no cumple tus expectativas, podrás solicitar el reembolso dentro del plazo de garantía.",
    },
    author: {
      eyebrow: "Conoce a quien escribió este material",
      name: "Marcelo Pires de Farias",
      highlight: "Tecnología aplicada a problemas reales.",
      intro: [
        "Marcelo Pires de Farias es formado en Sistemas de Información y actúa desde hace años en el desarrollo y la aplicación de soluciones tecnológicas orientadas a problemas reales.",
        "A lo largo de su trayectoria, desarrolló sistemas y herramientas para simplificar procesos, organizar información y hacer más eficientes las actividades del día a día.",
        "Más recientemente, también exploró el uso práctico de la inteligencia artificial, especialmente como apoyo a la productividad, la comunicación, la organización y la toma de decisiones.",
      ],
      principleLead: "Su relación con la tecnología parte de un principio simple:",
      principleQuote: "Una buena herramienta no necesita ser complicada para ser útil.",
      closing: [
        "Fue con esa visión que nació Pequeños Negocios con IA: acercar la inteligencia artificial a quien emprende y mostrar, con ejemplos simples y aplicación práctica, que no es necesario ser especialista en tecnología para aprovechar sus beneficios.",
        "Más que enseñar indicaciones listas, la propuesta es ayudar al lector a desarrollar autonomía para utilizar la IA según las necesidades de su propio negocio.",
      ],
      quote: "La IA ayuda. Tú decides.",
      photoAlt:
        "Foto de Marcelo Pires de Farias, autor de Pequeños Negocios con IA",
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
          answer: "Sí. Es un e-book en PDF.",
        },
        {
          question: "¿Cómo recibo el e-book después de la compra?",
          answer:
            "Después de confirmar el pago, el acceso al e-book en PDF se libera en tu área de compras.",
        },
        {
          question: "¿Puedo leerlo en el celular, la tablet o la computadora?",
          answer:
            "Sí. Puedes leerlo en el dispositivo que prefieras, según los formatos disponibles después de la compra.",
        },
        {
          question: "¿Cómo funciona el pago?",
          answer:
            "El pago se realiza en línea en el checkout de la compra, con las opciones disponibles en ese momento.",
        },
        {
          question: "¿Existe garantía?",
          answer:
            "Sí. Tienes 7 días de garantía. Si el material no cumple tus expectativas, puedes solicitar el reembolso dentro de ese plazo.",
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
