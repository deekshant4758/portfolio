import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "@/lib/data";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";
import { RingButton } from "./ui/RingButton";

export function Projects() {
  return (
    <Section id="work" index="01" title="Selected work" note="03 projects">
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-[#0c0c0e] transition-all duration-500 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]">
              <ProjectVisual variant={project.visual} index={project.index} year={project.year} />

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-fg">
                      {project.title}
                    </h3>
                  </div>
                  <span className="mt-1 font-mono text-[10px] tracking-[0.14em] text-dim">
                    /{project.index}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">{project.blurb}</p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-[12.5px] leading-relaxed text-dim">
                      <span aria-hidden className="mt-[7px] size-1 shrink-0 rounded-full bg-line-strong" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[9.5px] tracking-[0.06em] text-muted transition-colors duration-300 group-hover:border-line-strong"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 ? (
                    <span className="rounded-full border border-transparent px-1.5 py-1 font-mono text-[9.5px] text-dim">
                      +{project.stack.length - 5}
                    </span>
                  ) : null}
                </div>

                <div className="mt-auto flex items-center gap-4 border-t border-line pt-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/link inline-flex items-center gap-1.5 text-[13px] font-medium transition-colors ${
                        link.primary ? "text-fg" : "text-muted hover:text-fg"
                      }`}
                    >
                      {link.label === "Source" ? (
                        <GithubIcon className="size-3.5" />
                      ) : null}
                      <span className="relative mt-0">
                        {link.label}
                        <span
                          aria-hidden
                          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-fg transition-transform duration-300 group-hover/link:scale-x-100"
                        />
                      </span>
                      <ArrowUpRight
                        className="size-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        strokeWidth={1.7}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="max-w-md font-mono text-[11px] leading-relaxed text-dim">
            More experiments, prototypes, and half-finished ideas live on GitHub.
          </p>
          <RingButton
            href="https://github.com/deekshant4758"
            text="Browse all repositories"
            external
            icon={<GithubIcon className="size-4" />}
          />
        </div>
      </Reveal>
    </Section>
  );
}
