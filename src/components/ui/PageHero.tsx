import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { PageIntro } from "@content/types";
import { settings } from "@content/08-SETTINGS";
import { HighlightedText } from "./HighlightedText";
import type { ReactNode } from "react";

interface PageHeroProps {
  intro: PageIntro;
  children?: ReactNode;
}

export function PageHero({ intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <Image
        src={settings.hero.background}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/85 to-navy-950" />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-royal-600/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[12px] font-medium text-white/45"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Beranda
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-white/75">{intro.eyebrow}</span>
        </nav>

        <p className="eyebrow-light mt-8">
          <span className="eyebrow-line" aria-hidden="true" />
          {intro.eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-balance font-display text-[34px] font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-[58px]">
          <HighlightedText text={intro.title} highlight={intro.highlight} tone="dark" />
        </h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-base">
          {intro.description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
