import type { ReactNode } from "react";

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-navy-950">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

interface ArticleBodyProps {
  content: string;
}

export function ArticleBody({ content }: ArticleBodyProps) {
  const blocks = content.trim().split(/\n{2,}/);

  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="scroll-mt-28 pt-4 font-display text-[22px] font-semibold leading-snug tracking-[-0.01em] text-navy-950 sm:text-2xl"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }

        if (trimmed.startsWith("> ")) {
          return (
            <blockquote
              key={index}
              className="rounded-r-2xl border-l-4 border-gold-400 bg-gold-50/60 px-5 py-4 text-[15px] font-medium italic leading-relaxed text-navy-900"
            >
              {renderInline(trimmed.slice(2))}
            </blockquote>
          );
        }

        if (trimmed.startsWith("- ")) {
          const items = trimmed
            .split("\n")
            .map((line) => line.replace(/^-\s+/, ""))
            .filter(Boolean);

          return (
            <ul key={index} className="space-y-2.5 pl-1">
              {items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex gap-3 text-[15px] leading-relaxed text-slate-600"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-royal-600" />
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed
            .split("\n")
            .map((line) => line.replace(/^\d+\.\s+/, ""))
            .filter(Boolean);

          return (
            <ol key={index} className="space-y-2.5">
              {items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex gap-3 text-[15px] leading-relaxed text-slate-600"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy-950 text-[10px] font-bold text-gold-300">
                    {itemIndex + 1}
                  </span>
                  <span className="pt-0.5">{renderInline(item)}</span>
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p key={index} className="text-[15px] leading-[1.85] text-slate-600">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
