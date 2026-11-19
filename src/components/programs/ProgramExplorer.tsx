"use client";

import { useState } from "react";
import type { Program } from "@content/types";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { settings } from "@content/08-SETTINGS";

interface ProgramExplorerProps {
  programs: Program[];
}

export function ProgramExplorer({ programs }: ProgramExplorerProps) {
  const [filter, setFilter] = useState("Semua");

  const available = programs.filter((program) => program.visible);
  const categories = [
    "Semua",
    ...Array.from(new Set(available.map((program) => program.category))),
  ];
  const visible = available
    .filter((program) => filter === "Semua" || program.category === filter)
    .sort((a, b) => a.order - b.order);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FilterTabs
          options={categories}
          value={filter}
          onChange={setFilter}
          label="Filter kategori program"
        />
        <p className="text-[12px] font-medium text-slate-500">
          {visible.length} program ditampilkan
        </p>
      </div>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-navy-200 bg-white p-8 text-center text-sm text-slate-500">
          {settings.labels.noResults}
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {visible.map((program) => (
            <ProgramCard key={program.id} program={program} detailed />
          ))}
        </div>
      )}
    </div>
  );
}
