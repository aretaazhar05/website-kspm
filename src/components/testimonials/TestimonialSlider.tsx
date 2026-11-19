"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import type { Testimonial } from "@content/types";
import { getInitials } from "@/lib/format";
import { cn } from "@/lib/cn";

interface TestimonialSliderProps {
  items: Testimonial[];
}

export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = items[index];

  useEffect(() => {
    if (paused || items.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused, items.length]);

  const goTo = (next: number) => {
    setIndex((next + items.length) % items.length);
  };

  if (!active) return null;

  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur sm:p-10 lg:p-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimoni anggota KSPM UNIPI"
    >
      <Quote
        className="absolute right-8 top-8 h-16 w-16 text-white/[0.06]"
        aria-hidden="true"
      />

      <div className="relative min-h-[300px] sm:min-h-[250px]">
        <div aria-live="polite" aria-atomic="true">
          <p className="text-balance font-display text-xl font-medium leading-relaxed text-white sm:text-2xl lg:text-[26px]">
            &ldquo;{active.quote}&rdquo;
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-400 font-display text-sm font-bold text-navy-950">
              {getInitials(active.name)}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{active.name}</p>
              <p className="text-[11.5px] text-white/50">
                {active.role} · {active.year}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {items.map((item, itemIndex) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(itemIndex)}
                  aria-label={`Tampilkan testimoni ${item.name}`}
                  aria-current={itemIndex === index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    itemIndex === index
                      ? "w-6 bg-gold-400"
                      : "w-1.5 bg-white/25 hover:bg-white/50",
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Testimoni sebelumnya"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-gold-400/50 hover:text-gold-300"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Testimoni berikutnya"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-gold-400/50 hover:text-gold-300"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
