import type { SeoContent } from "@content/types";

/**
 * SEO DAN TAMPILAN SAAT DIBAGIKAN
 * - title       : judul utama browser dan Google.
 * - description : ringkasan yang muncul di hasil pencarian.
 * - keywords    : kata kunci pencarian.
 * - ogImage     : gambar saat link dibagikan. Simpan di public/images/banners/.
 * - address     : alamat terstruktur untuk Google (Schema.org).
 */
export const seo: SeoContent = {
  title: "KSPM UNIPI — Wadah Edukasi Pasar Modal Mahasiswa",
  titleTemplate: "%s — KSPM UNIPI",
  description:
    "KSPM UNIPI membuka ruang belajar investasi, analisis saham, dan literasi keuangan melalui kelas, riset, serta simulasi trading yang aplikatif.",
  keywords: [
    "KSPM UNIPI",
    "Kelompok Studi Pasar Modal",
    "pasar modal",
    "investasi saham",
    "literasi keuangan",
    "Universitas Insan Pembangunan Indonesia",
    "UNIPI",
    "organisasi mahasiswa",
  ],
  ogImage: {
    url: "/images/banners/hero-bg.jpg",
    width: 1600,
    height: 900,
    alt: "KSPM UNIPI - Kelompok Studi Pasar Modal Universitas Insan Pembangunan Indonesia",
  },
  locale: "id_ID",
  themeColor: "#050f24",
  robots: {
    index: true,
    follow: true,
  },
  address: {
    streetAddress: "Jl. Raya Serang KM. 10, Bitung Jaya, Cikupa",
    addressLocality: "Kabupaten Tangerang",
    addressRegion: "Banten",
    postalCode: "15710",
    addressCountry: "ID",
  },
};
