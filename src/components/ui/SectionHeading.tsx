import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SectionIntro } from "@content/types";
import { cn } from "@/lib/cn";
import { HighlightedText } from "./HighlightedText";

interface SectionHeadingProps {
  intro: SectionIntro;
  tone?: "light" | "dark";
  align?: "left" | "center";
  action?: { label: string; href: string };
  className?: string;
}

export function SectionHeading({
  intro,
  tone = "light",
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        action && align === "left" && "lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <p className={isDark ? "eyebrow-light" : "eyebrow"}>
          <span className="eyebrow-line" aria-hidden="true" />
          {intro.eyebrow}
        </p>
        <h2
          className={cn(
            "mt-5 text-balance font-display text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[42px]",
            isDark ? "text-white" : "text-navy-950",
          )}
        >
          <HighlightedText
            text={intro.title}
            highlight={intro.highlight}
            tone={tone}
          />
        </h2>
        <p
          className={cn(
            "mt-4 max-w-xl text-[15px] leading-relaxed",
            isDark ? "text-white/65" : "text-slate-600",
          )}
        >
          {intro.description}
        </p>
      </div>

      {action ? (
        <Link
          href={action.href}
          className={cn(
            "group inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors",
            isDark
              ? "text-gold-300 hover:text-gold-200"
              : "text-royal-700 hover:text-royal-800",
          )}
        >
          {action.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : null}
    </div>
  );
}
