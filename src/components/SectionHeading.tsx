import { Reveal } from "./ui/Reveal";

type SectionHeadingProps = {
  index: string;
  title: string;
  note?: string;
  id?: string;
};

export function SectionHeading({ index, title, note, id }: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="flex items-end justify-between gap-6 border-b border-line pb-4">
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="font-mono text-[11px] tracking-[0.2em] text-dim">{index}</span>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-fg sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>
        {note ? (
          <span className="hidden pb-1 font-mono text-[11px] tracking-[0.14em] text-dim uppercase sm:block">
            {note}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export function Section({
  index,
  title,
  note,
  id,
  children,
  className = "",
}: SectionHeadingProps & { children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`pt-20 sm:pt-28 ${className}`}>
      <Reveal>
        <SectionHeading index={index} title={title} note={note} />
      </Reveal>
      {children}
    </section>
  );
}
