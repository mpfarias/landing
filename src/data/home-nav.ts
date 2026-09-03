export const homeNavKeys = [
  "about",
  "projects",
  "expertise",
  "ebooks",
  "contact",
] as const;

export type HomeNavKey = (typeof homeNavKeys)[number];

export const homeNavHashes: Record<HomeNavKey, string> = {
  about: "sobre",
  projects: "projetos",
  expertise: "atuacao",
  ebooks: "ebooks",
  contact: "contato",
};
