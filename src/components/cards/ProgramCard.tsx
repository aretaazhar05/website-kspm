import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Check } from "lucide-react";
import type { Program } from "@content/types";
import { settings } from "@content/08-SETTINGS";
import { cn } from "@/lib/cn";

interface ProgramCardProps {
  program: Program;
  detailed?: boolean;
}

export function ProgramCard({ program, detailed = false }: ProgramCardProps) {
  return (
    <article
      id={program.slug}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-navy-100/80 bg-white shadow-[0_20px_50px_-42px_rgba(10,27,58,0.55)] transition duration-500 hover:-translate-y-1.5 hover:border-royal-200 hover:shadow-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={program.image}
          alt={`Kegiatan program ${program.title} KSPM UNIPI`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-navy-900 backdrop-blur">
          {program.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold leading-snug text-navy-950 sm:text-xl">
          {program.title}
        </h3>
        <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">
          {detailed ? program.longDescription : program.description}
        </p>

        {detailed ? (
          <ul className="mt-4 space-y-2">
            {program.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-[13px] text-navy-800">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-royal-50 text-royal-700">
                  <Check className="h-2.5 w-2.5" />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-slate-500">
            <CalendarDays className="h-3.5 w-3.5 text-royal-600" />
            {program.schedule}
          </span>
          {!detailed ? (
            <Link
              href={`/program-kerja#${program.slug}`}
              className={cn(
                "inline-flex items-center gap-1 text-[12px] font-bold text-royal-700 transition hover:text-royal-800",
              )}
            >
              {settings.labels.viewDetail}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
