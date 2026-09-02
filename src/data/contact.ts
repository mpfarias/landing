export type SocialLink = {
  id: "linkedin" | "github";
  label: string;
  href: string | null;
  external: boolean;
};

export const contact: {
  email: string | null;
  socialLinks: SocialLink[];
} = {
  email: null,
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
      href: null,
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

export function getActiveSocialLinks(): Array<SocialLink & { href: string }> {
  return contact.socialLinks.filter(
    (link): link is SocialLink & { href: string } =>
      isActiveContactHref(link.href),
  );
}
