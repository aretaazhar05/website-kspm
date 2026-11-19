import type { Article, ArticlesPage } from "@content/types";

/**
 * DAFTAR ARTIKEL
 * Setiap artikel punya dua bagian:
 * 1. Informasi artikel (judul, slug, thumbnail, penulis, dsb.) di file ini.
 * 2. Isi lengkap artikel di CONTENT/03-ARTICLES/posts/<slug>.md
 *
 * Menambah artikel:
 * - Tambahkan satu blok di array "articles" di bawah.
 * - Buat file Markdown baru di folder posts dengan nama sama seperti "slug".
 * - Simpan foto thumbnail di public/images/articles/.
 *
 * "published: false" membuat artikel tersimpan tetapi tidak tampil di website.
 */
export const articlesPage: ArticlesPage = {
  intro: {
    eyebrow: "Artikel",
    title: "Wawasan pasar modal untuk investor pemula.",
    highlight: "investor pemula",
    description:
      "Artikel edukatif dari pengurus KSPM UNIPI tentang saham, strategi investasi, dan literasi keuangan yang disajikan dengan bahasa sederhana.",
  },
  featuredLabel: "Artikel pilihan",
  emptyText: "Belum ada artikel yang dipublikasikan.",
};

export const articles: Article[] = [
  {
    id: "mengenal-ihsg",
    slug: "mengenal-ihsg-gerbang-pertama-memahami-pasar-saham",
    title: "Mengenal IHSG: Gerbang Pertama Memahami Pasar Saham Indonesia",
    category: "Edukasi",
    thumbnail: "/images/articles/ihsg.jpg",
    date: "2026-11-12",
    excerpt:
      "IHSG sering muncul di berita ekonomi, tetapi apa sebenarnya yang diukur oleh indeks ini? Simak penjelasan sederhananya untuk investor pemula.",
    author: "Raisa Aulia Nafisa",
    authorRole: "Ketua Umum KSPM UNIPI",
    readMinutes: 5,
    published: true,
    featured: true,
  },
  {
    id: "diversifikasi-portofolio",
    slug: "diversifikasi-portofolio-cara-cerdas-mengelola-risiko",
    title: "Diversifikasi Portofolio: Cara Cerdas Mengelola Risiko Investasi",
    category: "Strategi",
    thumbnail: "/images/articles/portofolio.jpg",
    date: "2026-11-05",
    excerpt:
      "Menaruh seluruh dana pada satu saham terasa menggiurkan, tetapi risikonya juga terpusat. Diversifikasi membantu menjaga portofolio tetap seimbang.",
    author: "Fajar Ramadhan",
    authorRole: "Wakil Ketua Umum KSPM UNIPI",
    readMinutes: 6,
    published: true,
  },
  {
    id: "saham-syariah",
    slug: "saham-syariah-prinsip-dan-peluang-investasi-etis",
    title: "Saham Syariah: Prinsip dan Peluang Investasi yang Etis",
    category: "Syariah",
    thumbnail: "/images/articles/syariah.jpg",
    date: "2026-10-28",
    excerpt:
      "Investasi syariah menawarkan cara berinvestasi yang selaras dengan nilai dan etika. Kenali prinsip dasarnya sebelum mulai melangkah.",
    author: "Dinda Ayu Lestari",
    authorRole: "Kepala Divisi Edukasi & Riset",
    readMinutes: 5,
    published: true,
  },
];

/** Artikel yang boleh tampil di website, diurutkan dari yang terbaru. */
export const publishedArticles = articles
  .filter((article) => article.published)
  .sort((a, b) => b.date.localeCompare(a.date));

export const getArticleBySlug = (slug: string) =>
  publishedArticles.find((article) => article.slug === slug);
