import { links } from "@/data/links";

const footerLinks = [
  {
    label: "LinkedIn",
    href: links.social.linkedin,
  },
  {
    label: "GitHub",
    href: links.social.github,
  },
  {
    label: "Fiverr",
    href: links.fiverr.main,
  },
  {
    label: "Email",
    href: links.social.email,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 pt-10 pb-28 text-white md:pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr_1fr] md:items-start">
          <div>
            <p className="text-lg font-semibold">Marcelo Farias</p>
            <p className="mt-2 text-sm text-slate-400">
              Full Stack Web Developer
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Modern landing pages, bug fixing and web app deployment for
              international clients.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Stack
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              React · Next.js · TypeScript · JavaScript · Node.js · Tailwind CSS
              · PostgreSQL · Prisma · Vercel · Cloudflare
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Connect
            </p>

            <div className="mt-4 flex flex-wrap gap-3 md:justify-end">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-slate-500">
            © 2026 Marcelo Farias. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}