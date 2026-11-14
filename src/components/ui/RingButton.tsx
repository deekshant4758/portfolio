import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type RingButtonProps = {
  text: string;
  href: string;
  icon?: ReactNode;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  download?: boolean;
  className?: string;
};

const sizes = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3.5 text-sm md:text-base",
};

export function RingButton({
  text,
  href,
  icon,
  variant = "ghost",
  size = "md",
  external,
  download,
  className = "",
}: RingButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-fg text-ink border-fg hover:bg-white"
      : "border-line-strong bg-transparent text-fg hover:border-muted hover:bg-[#101012]";

  const content = (
    <>
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <span className="font-medium tracking-tight">{text}</span>
      {!icon ? (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.7}
        />
      ) : null}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-[4px] rounded-[10px] border border-line transition-colors duration-300 group-hover:border-line-strong"
      />
    </>
  );

  const classes = `group relative inline-flex items-center gap-2 rounded-md border transition-colors duration-300 ${sizes[size]} ${styles} ${className}`;

  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
