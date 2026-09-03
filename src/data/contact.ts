export type SocialLink = {
  id: "linkedin" | "github";
  label: string;
  href: string | null;
  external: boolean;
};

export const contact: {
  email: string | null;
  whatsapp: {
    display: string;
    number: string;
    url: string;
  };
  socialLinks: SocialLink[];
} = {
  email: "contact@marcelofarias.dev.br",
  whatsapp: {
    display: "+55 61 9 9972-9293",
    number: "5561999729293",
    url: "https://wa.me/5561999729293",
  },
  socialLinks: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: null,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/mpfarias",
      external: true,
    },
  ],
};

export function isValidContactEmail(
  email: string | null | undefined,
): email is string {
  if (typeof email !== "string") return false;
  const value = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isActiveContactHref(
  href: string | null | undefined,
): href is string {
  if (typeof href !== "string") return false;
  const value = href.trim();
  return value.length > 0 && value !== "#";
}

export function getEmail(): string | null {
  return isValidContactEmail(contact.email) ? contact.email : null;
}

export function getEmailHref(): string | null {
  const email = getEmail();
  return email ? `mailto:${email}` : null;
}

export function getWhatsAppHref(message?: string): string | null {
  if (!isActiveContactHref(contact.whatsapp.url)) return null;
  const text = message?.trim();
  if (!text) return contact.whatsapp.url;
  return `${contact.whatsapp.url}?text=${encodeURIComponent(text)}`;
}

export function getActiveSocialLinks(): Array<SocialLink & { href: string }> {
  return contact.socialLinks.filter(
    (link): link is SocialLink & { href: string } =>
      isActiveContactHref(link.href),
  );
}

export function getGithubHref(): string | null {
  const github = contact.socialLinks.find((link) => link.id === "github");
  if (!github || !isActiveContactHref(github.href)) return null;
  return github.href;
}
