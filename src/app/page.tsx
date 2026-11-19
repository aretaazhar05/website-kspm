import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PageCta } from "@/components/ui/PageCta";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { LeaderCard } from "@/components/cards/LeaderCard";
import { EventCard } from "@/components/cards/EventCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { TestimonialSlider } from "@/components/testimonials/TestimonialSlider";
import { settings } from "@content/08-SETTINGS";
import { home } from "@content/01-HOMEPAGE/sections";
import { about } from "@content/01-HOMEPAGE/about";
import { programs } from "@content/06-PROGRAMS/programs";
import { leaders } from "@content/02-LEADERSHIP/team";
import { events, getUpcomingEvents } from "@content/05-EVENTS/events";
import { galleryAlbums } from "@content/04-GALLERY/gallery";
import { publishedArticles } from "@content/03-ARTICLES/articles";
import { testimonials } from "@content/07-TESTIMONIALS/testimonials";

const valueIcons = {
  integrity: ShieldCheck,
  innovation: Lightbulb,
  collaboration: Users,
  professionalism: BriefcaseBusiness,
} as const;

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents().slice(0, 2);
  const featuredPrograms = programs
    .filter((program) => program.visible)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);
  const featuredLeaders = [...leaders].sort((a, b) => a.order - b.order).slice(0, 4);
  const latestArticles = publishedArticles.slice(0, 3);
  const pastEventCount = events.filter((event) => event.status === "completed").length;

  return (
    <>
      <Hero />
      <Ticker />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-navy-100 bg-navy-100 shadow-soft">
              <div className="relative aspect-[4/3.4]">
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />
              </div>
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-navy-900 backdrop-blur">
                {about.imageCaption}
              </span>
            </div>

            <div className="absolute -bottom-8 right-4 w-[180px] rounded-2xl bg-navy-950 p-5 text-white shadow-2xl sm:-right-6 sm:w-[200px]">
              <p className="font-display text-4xl font-semibold">
                {settings.stats[0]?.value}
                <span className="text-gold-400">{settings.stats[0]?.suffix}</span>
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                {settings.stats[0]?.label}
              </p>
              <div className="mt-4 h-px bg-white/10" />
              <p className="mt-3 text-[11px] text-white/55">
                Mahasiswa dari berbagai program studi.
              </p>
            </div>

            <div className="absolute -left-3 top-6 flex items-center gap-2 rounded-xl bg-gold-400 px-3.5 py-2.5 text-[11px] font-bold text-navy-950 shadow-xl sm:-left-5">
              <ShieldCheck className="h-4 w-4" />
              Terbuka untuk semua jurusan
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading intro={home.about} />
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-slate-600">
                <p>{about.paragraphs[0]}</p>
                <p>{about.paragraphs[1]}</p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.values.map((value) => {
                  const Icon = valueIcons[value.icon];
                  return (
                    <div
                      key={value.title}
                      className="flex items-start gap-3 rounded-2xl border border-navy-100/70 bg-mist/60 p-4"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy-950 text-gold-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-[13px] font-bold text-navy-950">{value.title}</p>
                        <p className="mt-1 text-[11.5px] leading-relaxed text-slate-500">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/tentang"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-royal-700 transition hover:text-royal-800"
              >
                Selengkapnya tentang kami
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              intro={home.programs}
              action={{ label: settings.labels.viewAll, href: "/program-kerja" }}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((program, index) => (
              <Reveal key={program.id} delay={index * 90}>
                <ProgramCard program={program} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              intro={home.leadership}
              action={{ label: settings.labels.viewAll, href: "/pengurus" }}
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {featuredLeaders.map((leader, index) => (
              <Reveal key={leader.id} delay={index * 80}>
                <LeaderCard leader={leader} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-35" aria-hidden="true" />
        <div
          className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-royal-600/20 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              intro={home.events}
              tone="dark"
              action={{ label: "Semua kegiatan", href: "/kegiatan" }}
            />
          </Reveal>

          {upcomingEvents.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {upcomingEvents.map((event, index) => (
                <Reveal key={event.id} delay={index * 100}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/60">
              {settings.labels.noResults}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-[12.5px] text-white/55">
              Sudah {pastEventCount} kegiatan terdokumentasi di galeri KSPM UNIPI.
            </p>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-gold-300 transition hover:text-gold-200"
            >
              Lihat dokumentasi
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              intro={home.gallery}
              action={{ label: "Buka galeri lengkap", href: "/galeri" }}
            />
          </Reveal>
          <Reveal className="mt-9" delay={80}>
            <GalleryExplorer
              albums={galleryAlbums}
              limit={5}
              showFilters={false}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              intro={home.articles}
              action={{ label: settings.labels.viewAll, href: "/artikel" }}
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article, index) => (
              <Reveal key={article.id} delay={index * 90}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-royal-950 py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div
          className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-gold-500/10 blur-[110px]"
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <SectionHeading intro={home.testimonials} tone="dark" />
          </Reveal>
          <Reveal delay={100}>
            <TestimonialSlider items={testimonials} />
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
