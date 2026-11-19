import { Sparkles } from "lucide-react";
import { settings } from "@content/08-SETTINGS";

export function Ticker() {
  const items = [...settings.ticker, ...settings.ticker];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-navy-900 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-900 to-transparent" />
      <div
        className="flex w-max animate-marquee items-center gap-10"
        aria-label={`Fokus KSPM UNIPI: ${settings.ticker.join(", ")}`}
      >
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.22em] text-white/45"
            aria-hidden={index >= settings.ticker.length}
          >
            {item}
            <Sparkles className="h-3.5 w-3.5 text-gold-500/80" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
