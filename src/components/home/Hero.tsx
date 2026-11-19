import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Sparkles, TrendingUp } from "lucide-react";
import { settings } from "@content/08-SETTINGS";
import { HighlightedText } from "@/components/ui/HighlightedText";
import { StatCounter } from "@/components/ui/StatCounter";
import { buttonClass } from "@/components/ui/buttonStyles";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:min-h-[820px] lg:pt-36">
      <Image
        src={settings.hero.background}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/92 to-navy-950/75" />
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <div
        className="absolute right-[8%] top-24 h-[420px] w-[420px] rounded-full bg-royal-600/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              {settings.hero.eyebrow}
            </span>
            <span className="rounded-full border border-gold-400/25 bg-gold-400/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-gold-300">
              Periode {settings.period}
            </span>
          </div>

          <h1 className="mt-7 text-balance font-display text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[60px]">
            <HighlightedText
              text={settings.hero.title}
              highlight={settings.hero.highlight}
              tone="dark"
            />
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base">
            {settings.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={settings.hero.primaryCta.href}
              className={buttonClass("primary", "lg")}
            >
              {settings.hero.primaryCta.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={settings.hero.secondaryCta.href}
              className={buttonClass("outline", "lg")}
            >
              {settings.hero.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {settings.stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-4 rounded-[2.4rem] border border-white/[0.06]"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]">
            <div className="relative aspect-[4/4.6] sm:aspect-[4/4.2]">
              <Image
                src={settings.hero.image}
                alt={settings.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300">
                    {settings.organizationName}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">
                    {settings.tagline}
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-400 text-navy-950">
                  <TrendingUp className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -left-3 top-8 w-[210px] rounded-2xl border border-white/60 bg-white/95 p-4 shadow-2xl backdrop-blur sm:-left-8 sm:w-[230px]">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Simulasi Portofolio
              </p>
              <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            </div>
            <div className="mt-3 space-y-2.5">
              {[
                { ticker: "BBCA", value: "+2,4%" },
                { ticker: "IHSG", value: "+0,8%" },
                { ticker: "TLKM", value: "+1,3%" },
              ].map((row) => (
                <div key={row.ticker} className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-navy-900">
                    {row.ticker}
                  </span>
                  <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <svg
              viewBox="0 0 200 44"
              className="mt-3 h-10 w-full"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 38L26 30L48 33L70 22L92 26L114 16L136 20L158 9L198 3"
                stroke="#D99A1B"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 38L26 30L48 33L70 22L92 26L114 16L136 20L158 9L198 3V44H2V38Z"
                fill="url(#heroChart)"
                opacity="0.35"
              />
              <defs>
                <linearGradient id="heroChart" x1="100" y1="3" x2="100" y2="44" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EAB630" stopOpacity="0.5" />
                  <stop offset="1" stopColor="#EAB630" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute -right-2 bottom-24 flex items-center gap-3 rounded-2xl bg-gold-400 px-4 py-3 text-navy-950 shadow-2xl sm:-right-5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-950/10">
              <CalendarDays className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] opacity-70">
                Kelas & Workshop
              </p>
              <p className="font-display text-sm font-bold">Rutin tiap semester</p>
            </div>
          </div>

          <div className="absolute -right-1 top-4 hidden items-center gap-2 rounded-full border border-white/15 bg-navy-900/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 backdrop-blur sm:flex">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            Sejak 2025
          </div>
        </div>
      </div>
    </section>
  );
}
