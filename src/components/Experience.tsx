"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BadgeCheck, ChevronDown, GraduationCap } from "lucide-react";
import { certifications, education, experience } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";

export function ExperienceList() {
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null);
  const reduce = useReducedMotion();

  return (
    <div className="mt-8">
      <div className="border-t border-line">
        {experience.map((job, index) => {
          const isOpen = openId === job.id;
          return (
            <Reveal key={job.id} delay={index * 0.05}>
              <div className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : job.id)}
                  aria-expanded={isOpen}
                  aria-controls={`experience-panel-${job.id}`}
                  className="group flex w-full items-center gap-4 py-6 text-left transition-colors duration-300 sm:gap-6 sm:py-7"
                >
                  <span className="hidden w-6 font-mono text-[10px] tracking-[0.16em] text-dim sm:block">
                    0{index + 1}
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                    <span className="font-display text-xl font-semibold tracking-tight text-fg transition-colors duration-300 group-hover:text-white sm:text-2xl">
                      {job.company}
                    </span>
                    <span className="w-fit rounded-md border border-line-strong bg-[#111113] px-2.5 py-1 font-mono text-[9.5px] tracking-[0.08em] text-muted uppercase">
                      {job.role}
                    </span>
                  </div>

                  <div className="hidden shrink-0 flex-col items-end gap-0.5 md:flex">
                    <span className="font-mono text-[11px] text-muted">{job.period}</span>
                    <span className="font-mono text-[10px] tracking-[0.08em] text-dim uppercase">
                      {job.location}
                    </span>
                  </div>

                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-line-strong bg-[#141416] text-fg"
                        : "border-line text-dim group-hover:border-line-strong group-hover:text-fg"
                    }`}
                  >
                    <ChevronDown className="size-4" strokeWidth={1.7} />
                  </span>
                </button>

                <div className="flex items-center justify-between gap-2 pb-2 md:hidden">
                  <span className="font-mono text-[10px] text-dim">{job.period}</span>
                  <span className="font-mono text-[9px] tracking-[0.1em] text-dim uppercase">
                    {job.location}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`experience-panel-${job.id}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 sm:pl-12">
                        <ul className="space-y-2.5">
                          {job.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 text-[13.5px] leading-relaxed text-muted sm:text-sm"
                            >
                              <span
                                aria-hidden
                                className="mt-[9px] size-1 shrink-0 rounded-full bg-line-strong"
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {job.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-line px-2.5 py-1 font-mono text-[9.5px] text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="flex h-full flex-col rounded-xl border border-line bg-[#0c0c0e] p-6">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-dim uppercase">
              <GraduationCap className="size-3.5" strokeWidth={1.7} />
              Education
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-fg">
              {education.school}
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              {education.degree}
              <br />
              <span className="text-dim">{education.detail}</span>
            </p>
            <p className="mt-auto pt-6 font-mono text-[10.5px] tracking-[0.08em] text-dim">
              {education.period}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-xl border border-line bg-[#0c0c0e] p-6">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-dim uppercase">
              <BadgeCheck className="size-3.5" strokeWidth={1.7} />
              Certifications & wins
            </div>
            <ul className="mt-4 divide-y divide-line">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-start justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-sm text-fg">{cert.name}</p>
                    <p className="mt-0.5 font-mono text-[10px] tracking-[0.06em] text-dim">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] text-dim">{cert.date}</span>
                </li>
              ))}
            </ul>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-auto inline-flex items-center gap-1.5 pt-5 text-[12.5px] text-muted transition-colors hover:text-fg"
            >
              Full details in my résumé
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.7}
              />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience" note="Where I've worked">
      <ExperienceList />
    </Section>
  );
}
