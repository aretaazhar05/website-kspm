import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ArticleExplorer } from "@/components/articles/ArticleExplorer";
import { PageCta } from "@/components/ui/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import {
  articlesPage,
  publishedArticles,
} from "@content/03-ARTICLES/articles";

export const metadata: Metadata = {
  title: "Artikel",
  description: articlesPage.intro.description,
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero intro={articlesPage.intro} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <ArticleExplorer articles={publishedArticles} />
          </Reveal>
        </div>
      </section>

      <PageCta />
    </>
  );
}
