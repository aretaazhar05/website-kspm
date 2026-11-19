"use client";

import { useMemo, useState } from "react";
import type { Leader } from "@content/types";
import { LeaderCard } from "@/components/cards/LeaderCard";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { settings } from "@content/08-SETTINGS";

interface LeadershipExplorerProps {
  leaders: Leader[];
}

export function LeadershipExplorer({ leaders }: LeadershipExplorerProps) {
  const options = useMemo(
    () => ["Semua", ...Array.from(new Set(leaders.map((leader) => leader.division)))],
    [leaders],
  );
  const [filter, setFilter] = useState("Semua");

  const filtered = leaders
    .filter((leader) => filter === "Semua" || leader.division === filter)
    .sort((a, b) => a.order - b.order);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <FilterTabs
          options={options}
          value={filter}
          onChange={setFilter}
          label="Filter divisi pengurus"
        />
        <p className="text-[12px] font-medium text-slate-500">
          {filtered.length} pengurus · {settings.period}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-navy-200 bg-white p-8 text-center text-sm text-slate-500">
          {settings.labels.noResults}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </div>
      )}
    </div>
  );
}
