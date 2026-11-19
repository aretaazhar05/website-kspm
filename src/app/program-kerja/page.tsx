import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ProgramExplorer } from "@/components/programs/ProgramExplorer";
import { PageCta } from "@/components/ui/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { programs, programsPage } from "@content/06-PROGRAMS/programs";

export const metadata: Metadata = {
  title: "Program Kerja",
  description: programsPage.intro.description,
};

export default function ProgramsPage() {
  const categories = Array.from(
    new Set(programs.filter((program) => program.visible).map((program) => program.category)),
  );

  return (
    <>
      <PageHero intro={programsPage.intro}>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white/60"
              >
                {category}
              </span>
            ))}
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <ProgramExplorer programs={programs} />
          </Reveal>

          <Reveal className="mt-10">
            <div className="flex items-start gap-3 rounded-2xl border border-royal-100 bg-royal-50/60 p-5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-royal-700 shadow-sm">
                <Info className="h-4 w-4" />
              </span>
              <p className="text-[12.5px] leading-relaxed text-navy-800">
                {programsPage.note}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
