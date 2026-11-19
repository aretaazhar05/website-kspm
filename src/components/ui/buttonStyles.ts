import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "navy" | "outline" | "outlineDark" | "white" | "soft";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-400 text-navy-950 shadow-[0_14px_34px_-14px_rgba(217,154,27,0.75)] hover:bg-gold-300 hover:shadow-[0_18px_40px_-14px_rgba(217,154,27,0.8)]",
  navy: "bg-navy-950 text-white hover:bg-navy-900 shadow-soft",
  outline:
    "border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/10",
  outlineDark:
    "border border-navy-200 bg-white text-navy-900 hover:border-royal-400 hover:text-royal-700",
  white: "bg-white text-navy-950 shadow-soft hover:bg-mist",
  soft: "bg-royal-50 text-royal-700 hover:bg-royal-100",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}
