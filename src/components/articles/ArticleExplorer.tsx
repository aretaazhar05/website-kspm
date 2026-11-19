"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@content/types";
import { articlesPage } from "@content/03-ARTICLES/articles";
import { settings } from "@content/08-SETTINGS";
import { formatDateShort, getInitials } from "@/lib/format";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { FilterTabs } from "@/components/ui/FilterTabs";

interface ArticleExplorerProps {
  articles: Article[];
}

export function ArticleExplorer({ articles }: ArticleExplorerProps) {
  const [filter, setFilter] = useState("Semua");

  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
  const categories = [
    "Semua",
    ...Array.from(new Set(sorted.map((article) => article.category))),
  ];
  const filtered =
    filter === "Semua"
      ? sorted
      : sorted.filter((article) => article.category === filter);

  const featured =
    filter === "Semua"
      ? filtered.find((article) => article.featured) ?? filtered[0]
      : null;

  const rest = featured
    ? filtered.filter((article) => article.id !== featured.id)
    : filtered;

  return (
    <div>
      <div className="mb-8">
        <FilterTabs
          options={categories}
          value={filter}
          onChange={setFilter}
          label="Filter kategori artikel"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-navy-200 bg-white p-8 text-center text-sm text-slate-500">
          {articlesPage.emptyText}
        </p>
      ) : (
        <div className="space-y-8">
          {featured ? (
            <Link
              href={`/artikel/${featured.slug}`}
              className="group grid overflow-hidden rounded-[2rem] border border-navy-100 bg-white shadow-[0_24px_60px_-45px_rgba(10,27,58,0.6)] transition hover:border-royal-200 hover:shadow-card lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[360px]">
                <Image
                  src={featured.thumbnail}
                  alt={`Ilustrasi artikel ${featured.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-5 top-5 rounded-full bg-gold-400 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-navy-950">
                  {articlesPage.featuredLabel}
                </span>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-9">
                <div className="flex flex-wrap items-center gap-3 text-[11.5px] font-medium text-slate-500">
                  <span className="rounded-full bg-royal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-royal-700">
                    {featured.category}
                  </span>
                  <span>{formatDateShort(featured.date)}</span>
                  <span className="h-1 w-1 rounded-full bg-navy-200" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featured.readMinutes} menit baca
                  </span>
                </div>

                <h2 className="mt-4 text-balance font-display text-2xl font-semibold leading-snug text-navy-950 transition-colors group-hover:text-royal-700 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">
                  {featured.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-950 text-[10px] font-bold text-gold-300">
                      {getInitials(featured.author)}
                    </span>
                    <div>
                      <p className="text-[12.5px] font-semibold text-navy-900">
                        {featured.author}
                      </p>
                      <p className="text-[10.5px] text-slate-500">{featured.authorRole}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[12px] font-bold text-royal-700">
                    {settings.labels.readMore}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ) : null}

          {rest.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
