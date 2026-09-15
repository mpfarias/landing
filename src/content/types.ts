export type Messages = {
  skipToContent: string;
  brand: string;
  brandLine: string;
  nav: {
    series: string;
    books: string;
    journey: string;
    faq: string;
  };
  buyNow: string;
  languageLabel: string;
  hero: {
    eyebrow: string;
    stages: [string, string, string, string];
    lead: string;
    discover: string;
    buyHotmart: string;
  };
  benefits: Array<{ id: string; title: string; text: string }>;
  status: {
    available: string;
    development: string;
  };
  series: {
    eyebrow: string;
    title: string;
    lead: [string, string];
  };
  journey: {
    questions: {
      use: string;
      transform: string;
      manage: string;
      create: string;
    };
  };
  book1: {
    eyebrow: string;
    question: string;
    body: [string, string, string];
    buy: string;
    buySecondary: string;
    hotmartNote: string;
    learnTitle: string;
    learn: string[];
  };
  audience: {
    title: string;
    profiles: Array<{ id: string; title: string; text: string }>;
  };
  noCode: {
    title: string;
    text: string;
    note: string;
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
  metadata: {
    title: string;
    description: string;
  };
};
