import type { Metadata } from "next";
import { CalendarX2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { EventCard } from "@/components/cards/EventCard";
import { PageCta } from "@/components/ui/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  eventsPage,
  getPastEvents,
  getUpcomingEvents,
} from "@content/05-EVENTS/events";

export const metadata: Metadata = {
  title: "Kegiatan",
  description: eventsPage.intro.description,
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <PageHero intro={eventsPage.intro}>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-gold-400/25 bg-gold-400/10 px-3.5 py-1.5 text-[11px] font-semibold text-gold-300">
            {upcoming.length} kegiatan mendatang
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold text-white/60">
            {past.length} kegiatan selesai
          </span>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              intro={{
                eyebrow: "Agenda",
                title: eventsPage.upcomingTitle,
                description: eventsPage.upcomingDescription,
              }}
            />
          </Reveal>

          {upcoming.length > 0 ? (
            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {upcoming.map((event, index) => (
                <Reveal key={event.id} delay={index * 80}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-navy-200 bg-mist px-6 py-14 text-center">
              <CalendarX2 className="h-8 w-8 text-navy-300" />
              <p className="mt-3 text-sm text-slate-500">{eventsPage.emptyText}</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              intro={{
                eyebrow: "Arsip",
                title: eventsPage.archiveTitle,
                description: eventsPage.archiveDescription,
              }}
              tone="light"
            />
          </Reveal>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {past.map((event, index) => (
              <Reveal key={event.id} delay={index * 80}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
