import type { SiteSettings } from "@content/types";

/**
 * HERO HOMEPAGE
 * Bagian paling atas website.
 *
 * Gambar:
 * - background : public/images/banners/hero-bg.jpg (latar gelap)
 * - image      : public/images/banners/hero-students.jpg (foto utama)
 *
 * Tips: "highlight" harus berupa potongan teks yang sama persis
 * dengan bagian dari "title", agar warnanya berubah menjadi emas.
 */
export const hero: SiteSettings["hero"] = {
  eyebrow: "Kelompok Studi Pasar Modal - UNIPI",
  title: "Wadah Edukasi Pasar Modal untuk Mahasiswa UNIPI.",
  highlight: "Pasar Modal",
  description:
    "KSPM UNIPI membuka ruang belajar investasi, analisis saham, dan literasi keuangan melalui kelas, riset, serta simulasi trading yang aplikatif.",
  background: "/images/banners/hero-bg.jpg",
  image: "/images/banners/hero-students.jpg",
  imageAlt:
    "Mahasiswa KSPM UNIPI berdiskusi mengenai pasar modal di ruang kelas",
  primaryCta: { label: "Gabung Sekarang", href: "/bergabung" },
  secondaryCta: { label: "Jelajahi Program", href: "/program-kerja" },
};
