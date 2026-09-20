import { DocumentLang } from "@/components/i18n/DocumentLang";
import { Footer } from "@/professional/components/layout/Footer";
import { Header } from "@/professional/components/layout/Header";
import { About } from "@/professional/components/sections/About";
import { Contact } from "@/professional/components/sections/Contact";
import { Experience } from "@/professional/components/sections/Experience";
import { Hero } from "@/professional/components/sections/Hero";
import { Philosophy } from "@/professional/components/sections/Philosophy";
import { Portfolio } from "@/professional/components/sections/Portfolio";
import { Quote } from "@/professional/components/sections/Quote";
import { Skills } from "@/professional/components/sections/Skills";

export default function Home() {
  return (
    <>
      <DocumentLang lang="pt-BR" theme="professional" />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2 focus:text-ink"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Philosophy />
        <Experience />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
