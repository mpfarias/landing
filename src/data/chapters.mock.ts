import type { BookChapter } from "@/data/types";

/**
 * MOCK — capítulos provisórios.
 * Substituir pelo sumário real do livro antes da publicação da seção
 * "O que você vai aprender". Não usar estes textos como conteúdo final.
 */
export const MOCK_CHAPTER_PREFIX = "[MOCK]";

export const featuredBookChapterPlaceholders: BookChapter[] = [
  {
    number: 1,
    title: "[MOCK] Título do capítulo 1",
    description:
      "[MOCK] Descrição curta do capítulo 1. Substituir pelo conteúdo real.",
  },
  {
    number: 2,
    title: "[MOCK] Título do capítulo 2",
    description:
      "[MOCK] Descrição curta do capítulo 2. Substituir pelo conteúdo real.",
  },
  {
    number: 3,
    title: "[MOCK] Título do capítulo 3",
    description:
      "[MOCK] Descrição curta do capítulo 3. Substituir pelo conteúdo real.",
  },
  {
    number: 4,
    title: "[MOCK] Título do capítulo 4",
    description:
      "[MOCK] Descrição curta do capítulo 4. Substituir pelo conteúdo real.",
  },
];
