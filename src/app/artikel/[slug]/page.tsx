import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { ShareButtons } from "@/components/articles/ShareButtons";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Reveal } from "@/components/ui/Reveal";
import { formatDate, getInitials } from "@/lib/format";
import {
  getArticleBySlug,
  publishedArticles,
} from "@content/03-ARTICLES/articles";
import { settings } from "@content/08-SETTINGS";
import { getArticleMarkdown } from "@/lib/article-content";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return publishedArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Artikel tidak ditemukan" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.thumbnail, alt: `Ilustrasi artikel ${article.title}` }],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const body = getArticleMarkdown(article.slug);
  const related = publishedArticles
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-white pb-8 pt-28 sm:pt-36">
          <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
            <Link
              href="/artikel"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-slate-500 transition hover:text-royal-700"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Semua artikel
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gold-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-navy-950">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-slate-500">
                <CalendarDays className="h-3.5 w-3.5" />
                {formatDate(article.date)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-slate-500">
                <Clock className="h-3.5 w-3.5" />
                {article.readMinutes} menit baca
              </span>
            </div>

            <h1 className="mt-5 text-balance font-display text-[32px] font-semibold leading-[1.12] tracking-[-0.025em] text-navy-950 sm:text-[44px]">
              {article.title}
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
              {article.excerpt}
            </p>

            <div className="mt-7 flex flex-col justify-between gap-4 border-t border-navy-100 pt-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-950 text-[11px] font-bold text-gold-300">
                  {getInitials(article.author)}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-navy-950">
                    {article.author}
                  </p>
                  <p className="text-[11px] text-slate-500">{article.authorRole}</p>
                </div>
              </div>
              <ShareButtons title={article.title} slug={article.slug} />
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] border border-navy-100 bg-navy-100 shadow-soft">
            <Image
              src={article.thumbnail}
              alt={`Ilustrasi artikel ${article.title}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="min-w-0">
              <ArticleBody content={body} />

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-navy-100 pt-6">
                <ShareButtons title={article.title} slug={article.slug} />
                <Link
                  href="/artikel"
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold text-royal-700 transition hover:text-royal-800"
                >
                  Artikel lainnya
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal-700">
                  Penulis
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-navy-950 font-display text-sm font-bold text-gold-300">
                    {getInitials(article.author)}
                  </span>
                  <div>
                    <p className="text-[13.5px] font-bold text-navy-950">
                      {article.author}
                    </p>
                    <p className="text-[11px] leading-snug text-slate-500">
                      {article.authorRole}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-slate-500">
                  Tulisan ini disusun sebagai bagian dari program edukasi pasar
                  modal {settings.organizationName}.
                </p>
              </div>

              <div className="rounded-3xl border border-navy-100 bg-mist/70 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-navy-700">
                  Baca juga
                </p>
                <div className="mt-4 space-y-4">
                  {related.slice(0, 2).map((item) => (
                    <Link
                      key={item.id}
                      href={`/artikel/${item.slug}`}
                      className="group flex gap-3"
                    >
                      <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={item.thumbnail}
                          alt=""
                          fill
                          sizes="64px"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <p className="text-[11.5px] font-semibold leading-snug text-navy-900 transition group-hover:text-royal-700">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500">
                          {formatDate(item.date)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-6 text-white">
                <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-300">
                    Bergabung
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold leading-snug">
                    Belajar pasar modal lebih terarah bersama kami.
                  </p>
                  <Link
                    href="/bergabung"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-4 py-2.5 text-[12px] font-bold text-navy-950 transition hover:bg-gold-300"
                  >
                    {settings.labels.joinCta}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-line" aria-hidden="true" />
                  Artikel lainnya
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
                  Lanjutkan membaca
                </h2>
              </div>
              <Link
                href="/artikel"
                className="inline-flex items-center gap-1.5 text-[12px] font-bold text-royal-700 transition hover:text-royal-800"
              >
                {settings.labels.viewAll}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.id} delay={index * 80}>
                <ArticleCard article={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
