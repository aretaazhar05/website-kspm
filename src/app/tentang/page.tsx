import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Lightbulb,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PageCta } from "@/components/ui/PageCta";
import { HighlightedText } from "@/components/ui/HighlightedText";
import { about } from "@content/01-HOMEPAGE/about";
import { settings } from "@content/08-SETTINGS";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: about.intro.description,
};

const valueIcons = {
  integrity: ShieldCheck,
  innovation: Lightbulb,
  collaboration: Users,
  professionalism: BriefcaseBusiness,
} as const;

export default function AboutPage() {
  return (
    <>
      <PageHero intro={about.intro} />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] border border-navy-100 shadow-soft">
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300">
                    {settings.organizationName}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/85">
                    {about.imageCaption}
                  </p>
                </div>
              </div>
              <div className="absolute -right-3 bottom-16 w-40 rounded-2xl bg-gold-400 p-4 text-navy-950 shadow-2xl sm:-right-5">
                <p className="font-display text-2xl font-bold">Sejak 2025</p>
                <p className="mt-1 text-[11px] font-medium leading-snug opacity-80">
                  Tumbuh bersama mahasiswa UNIPI
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                {about.eyebrow}
              </p>
              <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-navy-950 sm:text-4xl">
                <HighlightedText
                  text={about.title}
                  highlight={about.highlight}
                  tone="light"
                />
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-6 space-y-4 text-[14.5px] leading-[1.85] text-slate-600">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/pengurus"
                  className="group inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-navy-900"
                >
                  Kenali pengurus kami
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/bergabung"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-5 py-3 text-[13px] font-semibold text-navy-900 transition hover:border-royal-300 hover:text-royal-700"
                >
                  Cara bergabung
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white sm:p-10">
                <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                <div
                  className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-royal-600/30 blur-[90px]"
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="inline-flex rounded-full border border-gold-400/25 bg-gold-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-gold-300">
                    Visi
                  </span>
                  <h2 className="mt-6 text-balance font-display text-2xl font-semibold leading-snug sm:text-[28px]">
                    Arah yang ingin kami wujudkan.
                  </h2>
                  <p className="mt-5 text-[15px] leading-relaxed text-white/65">
                    {about.vision}
                  </p>
                  <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-400 text-navy-950">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <p className="text-[12px] leading-snug text-white/50">
                      {settings.fullName}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-[2rem] border border-navy-100 bg-white p-8 shadow-soft sm:p-10">
                <span className="inline-flex rounded-full bg-royal-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-royal-700">
                  Misi
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold text-navy-950 sm:text-[28px]">
                  Langkah untuk mencapainya.
                </h2>
                <ul className="mt-6 space-y-4">
                  {about.mission.map((item, index) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-100 text-[10px] font-bold text-gold-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-slate-600">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              intro={{
                eyebrow: "Nilai Kami",
                title: "Empat nilai yang kami pegang.",
                highlight: "kami pegang",
                description:
                  "Nilai-nilai ini menjadi kompas dalam setiap program, keputusan, dan interaksi di KSPM UNIPI.",
              }}
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value, index) => {
              const Icon = valueIcons[value.icon];
              return (
                <Reveal key={value.title} delay={index * 80}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-royal-200 hover:shadow-card">
                    <span className="absolute right-5 top-4 font-display text-4xl font-bold text-navy-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-950 text-gold-300 transition group-hover:bg-royal-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              intro={{
                eyebrow: "Perjalanan",
                title: about.timelineTitle,
                description: about.timelineDescription,
              }}
            />
          </Reveal>

          <div className="mt-12 grid gap-y-8 md:grid-cols-2 md:gap-x-12">
            {about.timeline.map((item, index) => (
              <Reveal key={`${item.year}-${item.title}`} delay={index * 70}>
                <div className="relative flex gap-5 border-l border-navy-200 pl-6 md:border-l-0 md:pl-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold-500 ring-4 ring-gold-100 md:hidden" />
                  <p className="w-16 shrink-0 font-display text-2xl font-bold text-gold-600">
                    {item.year}
                  </p>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy-950">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="relative overflow-hidden rounded-[2rem] border border-navy-100 bg-white p-8 shadow-soft sm:p-10">
              <Quote className="absolute right-8 top-8 h-14 w-14 text-navy-50" />
              <p className="relative max-w-3xl text-balance font-display text-xl font-medium leading-relaxed text-navy-950 sm:text-2xl">
                &ldquo;{about.quote.text}&rdquo;
              </p>
              <div className="relative mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-950 text-[11px] font-bold text-gold-300">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-navy-950">{about.quote.name}</p>
                  <p className="text-[11px] text-slate-500">{about.quote.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
