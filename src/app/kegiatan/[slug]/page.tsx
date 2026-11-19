import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react";
import { PageCta } from "@/components/ui/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { RegisterButton } from "@/components/events/RegisterButton";
import { EventCard } from "@/components/cards/EventCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatDate } from "@/lib/format";
import { settings } from "@content/08-SETTINGS";
import { events, getEventBySlug } from "@content/05-EVENTS/events";
import { buildWhatsAppUrl, getEventPhone } from "@/lib/whatsapp";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return { title: "Kegiatan tidak ditemukan" };
  }

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [{ url: event.poster, alt: `Poster ${event.title}` }],
    },
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const isOpen = event.status === "open" || event.status === "closing-soon";
  const related = events
    .filter((item) => item.id !== event.id)
    .sort((a, b) => a.order - b.order)
    .slice(0, 2);
  const contactUrl = buildWhatsAppUrl(
    getEventPhone(event),
    `Halo KSPM UNIPI! Saya ingin bertanya mengenai kegiatan *${event.title}*. Terima kasih!`,
  );

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src={event.poster}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/90 to-navy-950" />
        <div className="absolute inset-0 bg-grid opacity-35" aria-hidden="true" />
        <div
          className="absolute -right-20 top-16 h-96 w-96 rounded-full bg-royal-600/20 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container-x relative">
          <Link
            href="/kegiatan"
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-white/50 transition hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Kembali ke semua kegiatan
          </Link>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">
              {event.category}
            </span>
            <span
              className={
                isOpen
                  ? "rounded-full bg-gold-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-navy-950"
                  : "rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/60"
              }
            >
              {event.statusLabel}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-balance font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-white sm:text-5xl">
            {event.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60">
            {event.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[11.5px] font-medium text-white/75">
              <CalendarDays className="h-3.5 w-3.5 text-gold-400" />
              {formatDate(event.date)}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[11.5px] font-medium text-white/75">
              <Clock className="h-3.5 w-3.5 text-gold-400" />
              {event.time}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[11.5px] font-medium text-white/75">
              <MapPin className="h-3.5 w-3.5 text-gold-400" />
              {event.location}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div>
            <Reveal>
              <p className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                Tentang kegiatan
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-navy-950 sm:text-3xl">
                Informasi lengkap kegiatan
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-[1.85] text-slate-600">
                {event.content.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <h3 className="font-display text-lg font-semibold text-navy-950">
                Susunan acara
              </h3>
              <div className="mt-5 space-y-3">
                {event.agenda.map((agendaItem) => (
                  <div
                    key={`${agendaItem.time}-${agendaItem.title}`}
                    className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-mist/60 p-4"
                  >
                    <span className="w-14 shrink-0 rounded-lg bg-white px-2 py-1.5 text-center font-display text-[12px] font-bold text-royal-700 shadow-sm">
                      {agendaItem.time}
                    </span>
                    <span className="pt-1 text-[13.5px] font-medium text-navy-900">
                      {agendaItem.title}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10">
              <div className="flex items-start gap-3 rounded-2xl border border-gold-200 bg-gold-50/70 p-5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-400 text-navy-950">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-navy-950">
                    Catatan pendaftaran
                  </p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-navy-800/80">
                    {event.registrationNote}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <aside className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft">
                <div className="relative aspect-[16/11]">
                  <Image
                    src={event.poster}
                    alt={`Poster ${event.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.12em] text-navy-900 backdrop-blur">
                    {event.category}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal-700">
                    Pendaftaran kegiatan
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy-950">
                    {event.title}
                  </h3>

                  <div className="mt-5 space-y-3 text-[12.5px] text-slate-600">
                    <p className="flex items-start gap-2.5">
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                      {formatDate(event.date)}
                    </p>
                    <p className="flex items-start gap-2.5">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                      {event.time}
                    </p>
                    <p className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                      {event.location}
                    </p>
                    <p className="flex items-start gap-2.5">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                      {event.quota}
                    </p>
                  </div>

                  <div className="mt-6">
                    {isOpen ? (
                      <RegisterButton event={event} className="w-full" />
                    ) : (
                      <div className="space-y-3">
                        <p className="rounded-xl bg-navy-50 px-4 py-3 text-center text-[12px] font-semibold text-navy-700">
                          {settings.labels.activityFinished}
                        </p>
                        <Link
                          href="/galeri"
                          className="flex w-full items-center justify-center gap-2 rounded-full bg-navy-950 px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-navy-900"
                        >
                          {settings.labels.viewGallery}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    )}
                  </div>

                  <a
                    href={contactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-navy-200 px-5 py-3 text-[12.5px] font-semibold text-navy-800 transition hover:border-royal-300 hover:text-royal-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Tanya pengurus
                  </a>

                  <p className="mt-4 text-center text-[10.5px] leading-relaxed text-slate-400">
                    Pendaftaran diproses melalui WhatsApp pengurus KSPM UNIPI.
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              intro={{
                eyebrow: "Agenda lain",
                title: "Kegiatan lain yang bisa kamu ikuti.",
                highlight: "bisa kamu ikuti",
                description:
                  "Lihat agenda KSPM UNIPI lainnya dan pilih yang paling sesuai dengan minat belajarmu.",
              }}
              action={{ label: "Semua kegiatan", href: "/kegiatan" }}
            />
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <EventCard key={item.id} event={item} />
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
