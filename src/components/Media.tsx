import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { media } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { Section } from "./SectionHeading";

export function Media() {
  return (
    <Section id="media" title="Media" note="Wins, moments, and launches">
      <div className="divide-y divide-line border-b border-line">
        {media.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.04}>
            <article className="group flex gap-5 py-6 first:pt-0 last:pb-7 sm:gap-7">
              {item.image ? (
                <div className="relative mt-0.5 h-[76px] w-[76px] shrink-0 overflow-hidden rounded-md border border-line bg-surface sm:h-[104px] sm:w-[104px]">
                  <Image
                    src={item.image}
                    alt={item.alt ?? item.title}
                    fill
                    sizes="104px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              ) : null}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="font-mono text-[10px] tracking-[0.14em] text-dim uppercase">
                    {item.label}
                  </p>
                  <p className="font-mono text-[10.5px] text-dim">{item.date}</p>
                </div>

                <h3 className="mt-1.5 font-serif text-[21px] leading-snug text-ink">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline gap-1.5 transition-colors hover:text-accent"
                    >
                      {item.title}
                      <ArrowUpRight className="size-3.5 shrink-0 text-dim" strokeWidth={1.5} />
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>

                <p className="mt-1.5 max-w-[560px] text-[13.5px] leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
