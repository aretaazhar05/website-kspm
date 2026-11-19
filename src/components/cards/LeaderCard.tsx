import Image from "next/image";
import { Instagram } from "lucide-react";
import type { Leader } from "@content/types";

interface LeaderCardProps {
  leader: Leader;
}

export function LeaderCard({ leader }: LeaderCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-navy-950 shadow-[0_20px_50px_-35px_rgba(10,27,58,0.7)]">
      <div className="relative aspect-[4/5]">
        <Image
          src={leader.photo}
          alt={`${leader.name} - ${leader.role} KSPM UNIPI`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-950 to-transparent" />

        <span className="absolute left-3.5 top-3.5 rounded-full border border-white/15 bg-navy-950/50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white/80 backdrop-blur">
          {leader.division}
        </span>

        {leader.instagram ? (
          <a
            href={leader.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${leader.name}`}
            className="absolute right-3.5 top-3.5 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-navy-950/50 text-white/70 opacity-0 backdrop-blur transition hover:bg-gold-400 hover:text-navy-950 group-hover:opacity-100"
          >
            <Instagram className="h-3.5 w-3.5" />
          </a>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-gold-300">
            {leader.role}
          </p>
          <h3 className="mt-1 font-display text-[15px] font-semibold leading-snug text-white sm:text-base">
            {leader.name}
          </h3>
          <p className="mt-2 max-h-0 overflow-hidden text-[11.5px] leading-relaxed text-white/60 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
            {leader.bio}
          </p>
        </div>
      </div>
    </article>
  );
}
