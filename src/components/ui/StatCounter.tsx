"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  tone?: "light" | "dark";
}

export function StatCounter({ value, suffix, label, tone = "dark" }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const isDark = tone === "dark";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let started = false;

    const animate = () => {
      const start = performance.now();
      const duration = 1400;

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div ref={ref}>
      <p
        className={
          isDark
            ? "font-display text-3xl font-semibold tracking-tight text-white sm:text-[34px]"
            : "font-display text-3xl font-semibold tracking-tight text-navy-950 sm:text-[34px]"
        }
      >
        {display.toLocaleString("id-ID")}
        {suffix ? <span className="text-gold-400">{suffix}</span> : null}
      </p>
      <p
        className={
          isDark
            ? "mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45"
            : "mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500"
        }
      >
        {label}
      </p>
    </div>
  );
}
