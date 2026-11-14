import { Intro } from "@/components/Intro";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { GithubActivity } from "@/components/GithubActivity";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Dock } from "@/components/Dock";

export default function Home() {
  return (
    <>
      <noscript>
        <style>{`#site-intro { display: none !important; }`}</style>
      </noscript>

      <Intro />
      <Navbar />

      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>

      <main>
        <Hero />

        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-10">
          <Projects />
          <Experience />
          <Skills />
          <GithubActivity />
          <About />
          <Contact />
        </div>
      </main>

      <Footer />
      <Dock />

      <div className="h-20" aria-hidden />
    </>
  );
}
