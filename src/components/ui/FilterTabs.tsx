"use client";

import { cn } from "@/lib/cn";

interface FilterTabsProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

export function FilterTabs({
  options,
  value,
  onChange,
  label = "Filter konten",
  className,
}: FilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn("no-scrollbar flex gap-2 overflow-x-auto pb-1", className)}
    >
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold transition",
              active
                ? "border-navy-950 bg-navy-950 text-white shadow-sm"
                : "border-navy-100 bg-white text-navy-700 hover:border-royal-300 hover:text-royal-700",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
