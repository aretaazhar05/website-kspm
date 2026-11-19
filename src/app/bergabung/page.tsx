import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  MessageCircle,
  Network,
  Sprout,
  TrendingUp,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JoinForm } from "@/components/forms/JoinForm";
import { PageCta } from "@/components/ui/PageCta";
import { joinPage } from "@content/09-PAGES";
import { settings } from "@content/08-SETTINGS";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Bergabung",
  description: joinPage.intro.description,
};

const benefitIcons = [BookOpen, Users, TrendingUp, Network, Award, Sprout];

export default function JoinPage() {
  const waUrl = buildWhatsAppUrl(settings.whatsapp, settings.cta.whatsappMessage);

  return (
    <>
      <PageHero intro={joinPage.intro}>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/25 bg-gold-400/10 px-3.5 py-1.5 text-[11px] font-semibold text-gold-300">
            <Check className="h-3 w-3" />
            Terbuka untuk semua program studi
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold text-white/60">
            Periode {settings.period}
          </span>
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              intro={{
                eyebrow: "Manfaat",
                title: joinPage.benefitsTitle,
                highlight: "KSPM UNIPI",
                description: joinPage.benefitsDescription,
              }}
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {joinPage.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];
              return (
                <Reveal key={benefit.title} delay={index * 60}>
                  <div className="group h-full rounded-3xl border border-navy-100 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-royal-200 hover:shadow-card">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-950 text-gold-300 transition group-hover:bg-royal-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold text-navy-950">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                      {benefit.description}
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
                eyebrow: "Alur Bergabung",
                title: joinPage.stepsTitle,
                highlight: "Bergabung",
                description: joinPage.stepsDescription,
              }}
            />
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {joinPage.steps.map((step, index) => (
              <Reveal key={step.step} delay={index * 70}>
                <div className="relative h-full rounded-3xl border border-navy-100 bg-white p-6">
                  <p className="font-display text-3xl font-bold text-gold-500/80">
                    {step.step}
                  </p>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                  {index < joinPage.steps.length - 1 ? (
                    <span
                      className="absolute -right-2 top-1/2 hidden h-px w-4 bg-navy-200 lg:block"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <Reveal>
            <JoinForm />
          </Reveal>

          <Reveal delay={80}>
            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-3xl border border-navy-100 bg-mist/70 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal-700">
                  Divisi yang tersedia
                </p>
                <ul className="mt-4 space-y-2.5">
                  {joinPage.divisions
                    .filter((division) => division.value !== "Belum menentukan")
                    .map((division) => (
                      <li
                        key={division.value}
                        className="flex items-center gap-2.5 text-[12.5px] font-medium text-navy-900"
                      >
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-royal-700 shadow-sm">
                          <Check className="h-3 w-3" />
                        </span>
                        {division.label}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-6 text-white">
                <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-300">
                    Masih ragu?
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold leading-snug">
                    Tanya dulu, tidak harus langsung daftar.
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-white/55">
                    Pengurus siap menjawab pertanyaanmu seputar keanggotaan,
                    jadwal, dan kegiatan KSPM UNIPI.
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-[12.5px] font-bold text-navy-950 transition hover:bg-gold-300"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Tanya via WhatsApp
                  </a>
                  <Link
                    href="/kegiatan"
                    className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/15 px-5 py-3 text-[12px] font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    Lihat kegiatan terbuka
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-navy-100 bg-white p-6 text-[12px] leading-relaxed text-slate-500">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-navy-700">
                  Kontak
                </p>
                <p className="mt-3">{settings.email}</p>
                <p>{settings.whatsappDisplay}</p>
                <p className="mt-2 text-[11px] text-slate-400">{settings.officeHours}</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              intro={{
                eyebrow: "FAQ",
                title: joinPage.faqTitle,
                highlight: "sering",
                description: joinPage.faqDescription,
              }}
            />
          </Reveal>
          <Reveal delay={80}>
            <FaqAccordion items={joinPage.faq} />
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
