import { cn } from "@/lib/cn";

interface HighlightedTextProps {
  text: string;
  highlight?: string;
  tone?: "light" | "dark";
  className?: string;
}

export function HighlightedText({
  text,
  highlight,
  tone = "light",
  className,
}: HighlightedTextProps) {
  const highlightClass = tone === "dark" ? "gold-text" : "gold-text-deep";

  if (!highlight) {
    return <span className={className}>{text}</span>;
  }

  const index = text.toLowerCase().indexOf(highlight.toLowerCase());

  if (index === -1) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {text.slice(0, index)}
      <span className={cn(highlightClass)}>
        {text.slice(index, index + highlight.length)}
      </span>
      {text.slice(index + highlight.length)}
    </span>
  );
}
