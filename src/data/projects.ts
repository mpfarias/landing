export const projects = [
  {
    title: "Personal Developer Landing Page",
    category: "Landing Page",
    description:
      "A modern personal landing page built to present freelance web development services, portfolio projects, multilingual content, dark/light mode and conversion-focused Fiverr CTAs.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "https://github.com/mpfarias/landing",
    service: "Landing Page Development",
  },
  {
    title: "Public Safety Management Platform",
    category: "Full Stack Web App",
    description:
      "A modular operational management platform focused on workforce organization, personnel availability, administrative workflows, auditability and role-based access control for public safety environments.",
    stack: ["TypeScript", "Full Stack", "RBAC", "Admin Panel"],
    href: "https://github.com/mpfarias/controle-equipes",
    service: "Custom Web Apps",
  },
  {
    title: "Energy Tariff Public API",
    category: "REST API",
    description:
      "A public API for estimating electricity consumption costs based on distributors, tariff flags and regional taxes, with endpoints for status, tariff flags, distributor search, cache and cost projection.",
    stack: ["JavaScript", "Node.js", "REST API", "Backend"],
    href: "https://github.com/mpfarias/tarifas-energia-api",
    service: "API Development",
  },
  {
    title: "Traffic Violations Public API",
    category: "REST API",
    description:
      "A public API that provides structured Brazilian traffic violation data, including legal basis, points, fines and administrative measures, built with Node.js, Express and Swagger documentation.",
    stack: ["Node.js", "Express", "Swagger", "REST API"],
    href: "https://github.com/mpfarias/ctb-api",
    service: "API Development",
  },
  {
    title: "React List Management App",
    category: "Frontend App",
    description:
      "A React and Vite application focused on list-based workflows, frontend structure and component-based development.",
    stack: ["React", "Vite", "JavaScript", "CSS"],
    href: "https://github.com/mpfarias/ta-na-lista",
    service: "Frontend Development",
  },
  {
    title: "Schedly — Business Scheduling SaaS Platform",
    category: "SaaS MVP / Full Stack Web App",
    description:
      "A business scheduling platform designed to help companies manage clients, services, professionals, appointments, payments and customer communication through a modern web dashboard and REST API.",
    stack: [
      "React",
      "Vite",
      "Next.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Playwright",
    ],
    href: "https://github.com/mpfarias/schedly",
    service: "Custom Web Apps",
  },
] as const;

export type Project = (typeof projects)[number];

export function projectSlugFromHref(href: string): string {
  return href.replace("https://github.com/mpfarias/", "");
}
