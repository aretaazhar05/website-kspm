import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { LeadershipExplorer } from "@/components/leadership/LeadershipExplorer";
import { PageCta } from "@/components/ui/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { leaders, leadershipPage } from "@content/02-LEADERSHIP/team";

export const metadata: Metadata = {
  title: "Pengurus",
  description: leadershipPage.intro.description,
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero intro={leadershipPage.intro}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11.5px] font-semibold text-white/75 backdrop-blur">
            <CalendarDays className="h-3.5 w-3.5 text-gold-400" />
            {leadershipPage.periodNote}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/10 px-4 py-2 text-[11.5px] font-semibold text-gold-300">
            <Users className="h-3.5 w-3.5" />
            {leaders.length} pengurus aktif
          </span>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <LeadershipExplorer leaders={leaders} />
          </Reveal>

          <Reveal className="mt-12">
            <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-navy-100 bg-mist p-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-semibold text-navy-950">
                  Ingin menjadi bagian dari kepengurusan berikutnya?
                </p>
                <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-slate-500">
                  {leadershipPage.joinNote}
                </p>
              </div>
              <Link
                href="/kegiatan/open-recruitment-kspm-unipi-2026"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-950 px-5 py-2.5 text-[12.5px] font-semibold text-white transition hover:bg-navy-900"
              >
                Lihat open recruitment
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

        </div>
      </section>

      <PageCta />
    </>
  );
}
