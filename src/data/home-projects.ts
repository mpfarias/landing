export const homeProjectIds = [
  "hefesto",
  "orion",
  "assedub",
  "elite-fc",
  "oraculo-dos-numeros",
  "api-tarifas-energia",
  "api-infracoes-ctb",
  "soda-bubbles",
] as const;

export type HomeProjectId = (typeof homeProjectIds)[number];
