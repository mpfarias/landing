export type PortfolioCategory = "system" | "api" | "ebook";

export type PortfolioFilterId = "featured" | PortfolioCategory;

export type PortfolioScreenshot = {
  src: string;
  alt: string;
};

export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: PortfolioCategory;
  description: string;
  summary?: string;
  coverImage?: string | null;
  imageAlt?: string;
  screenshots?: PortfolioScreenshot[];
  covers?: string[];
  coverTitles?: string[];
  technologies: string[];
  url: string | null;
  urlLabel?: string;
  external?: boolean;
  featured?: boolean;
};

export type ExperienceItem = {
  id: string;
  label: string;
  title: string;
  description: string;
};
