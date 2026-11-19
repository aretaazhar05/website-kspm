import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock, MapPin } from "lucide-react";
import type { EventItem } from "@content/types";
import { settings } from "@content/08-SETTINGS";
import { formatDate, getDayNumber, getMonthShort } from "@/lib/format";
import { cn } from "@/lib/cn";
import { RegisterButton } from "@/components/events/RegisterButton";

interface EventCardProps {
  event: EventItem;
}

const statusClasses: Record<EventItem["status"], string> = {
  open: "bg-gold-400 text-navy-950",
  "closing-soon": "bg-royal-600 text-white",
  closed: "bg-navy-800/85 text-white/80",
  completed: "bg-navy-900/80 text-white/75",
};

export function EventCard({ event }: EventCardProps) {
  const isOpen = event.status === "open" || event.status === "closing-soon";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100/80 bg-white shadow-[0_24px_60px_-45px_rgba(10,27,58,0.6)] transition duration-500 hover:-translate-y-1.5 hover:border-royal-200 hover:shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.poster}
          alt={`Poster ${event.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-navy-950/10 to-transparent" />

        <div className="absolute left-4 top-4 min-w-[58px] rounded-2xl bg-white/95 px-3 py-2 text-center shadow-lg backdrop-blur">
          <p className="font-display text-xl font-bold leading-none text-navy-950">
            {getDayNumber(event.date)}
          </p>
          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-royal-700">
            {getMonthShort(event.date)}
          </p>
        </div>

        <span
          className={cn(
            "absolute right-4 top-4 rounded-full px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.12em] backdrop-blur",
            statusClasses[event.status],
          )}
        >
          {event.statusLabel}
        </span>

        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-navy-950/50 px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-white/85 backdrop-blur">
          {event.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11.5px] font-medium text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-royal-600" />
            {formatDate(event.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-royal-600" />
            {event.time}
          </span>
        </div>

        <h3 className="mt-3 text-balance font-display text-lg font-semibold leading-snug text-navy-950 transition-colors group-hover:text-royal-700 sm:text-xl">
          <Link href={`/kegiatan/${event.slug}`} className="focus-visible:outline-none">
            {event.title}
          </Link>
        </h3>

        <p className="mt-2.5 line-clamp-3 text-[13.5px] leading-relaxed text-slate-600">
          {event.description}
        </p>

        <div className="mt-4 flex items-start gap-2 text-[11.5px] text-slate-500">
          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-royal-600" />
          <span>{event.location}</span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-navy-100/70 pt-5">
          <Link
            href={`/kegiatan/${event.slug}`}
            className="inline-flex items-center gap-1 text-[12px] font-bold text-navy-900 transition hover:text-royal-700"
          >
            Detail
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {isOpen ? (
            <RegisterButton event={event} />
          ) : (
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1 rounded-full border border-navy-200 px-4 py-2 text-[12px] font-semibold text-navy-800 transition hover:border-royal-300 hover:text-royal-700"
            >
              {settings.labels.viewGallery}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
