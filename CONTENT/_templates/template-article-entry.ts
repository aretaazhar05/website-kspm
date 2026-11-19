import type { Article } from "@content/types";

/**
 * TEMPLATE INFORMASI ARTIKEL
 *
 * Cara pakai:
 * 1. Salin blok "contohArtikel" di bawah.
 * 2. Tempel di dalam array "articles" pada CONTENT/03-ARTICLES/articles.ts.
 * 3. Buat file isi artikel di:
 *    CONTENT/03-ARTICLES/posts/<slug>.md
 *    Nama file harus sama persis dengan nilai "slug".
 * 4. Simpan thumbnail di public/images/articles/.
 * 5. "published: true" agar tampil di website; false untuk menyembunyikan.
 *
 * Panduan menulis isi artikel ada di template-article.md.
 */
export const contohArtikel: Article = {
  id: "judul-artikel-baru",
  slug: "judul-artikel-baru",
  title: "Judul Artikel Baru",
  category: "Edukasi",
  thumbnail: "/images/articles/judul-artikel-baru.jpg",
  date: "2026-11-20",
  excerpt:
    "Ringkasan satu atau dua kalimat yang tampil di kartu artikel dan hasil pencarian.",
  author: "Nama Penulis",
  authorRole: "Jabatan Penulis",
  readMinutes: 5,
  published: true,
  featured: false,
};
