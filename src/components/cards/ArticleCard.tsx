import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@content/types";
import { formatDateShort, getInitials } from "@/lib/format";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/artikel/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100/80 bg-white shadow-[0_20px_50px_-42px_rgba(10,27,58,0.5)] transition duration-500 hover:-translate-y-1.5 hover:border-royal-200 hover:shadow-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.thumbnail}
          alt={`Ilustrasi artikel ${article.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-gold-400 px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.14em] text-navy-950">
          {article.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500">
          <span>{formatDateShort(article.date)}</span>
          <span className="h-1 w-1 rounded-full bg-navy-200" />
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readMinutes} menit baca
          </span>
        </div>

        <h3 className="mt-3 text-balance font-display text-[17px] font-semibold leading-snug text-navy-950 transition-colors group-hover:text-royal-700 sm:text-lg">
          {article.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-[13.5px] leading-relaxed text-slate-600">
          {article.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-navy-100/70 pt-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-950 text-[10px] font-bold text-gold-300">
              {getInitials(article.author)}
            </span>
            <div>
              <p className="text-[12px] font-semibold text-navy-900">{article.author}</p>
              <p className="text-[10px] text-slate-500">{article.authorRole}</p>
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 text-navy-300 transition group-hover:text-royal-600" />
        </div>
      </div>
    </Link>
  );
}
