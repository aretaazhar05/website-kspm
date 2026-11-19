import type { HomeContent } from "@content/types";

/**
 * JUDUL SETIAP BAGIAN DI HOMEPAGE
 * Ubah eyebrow (label kecil), title (judul), dan description (deskripsi).
 * Kata di dalam "highlight" akan diberi warna emas pada judul.
 */
export const home: HomeContent = {
  tickerLabel: "Fokus kami",
  about: {
    eyebrow: "Tentang KSPM UNIPI",
    title: "Lebih dari sekadar komunitas investasi.",
    highlight: "komunitas investasi",
    description:
      "Kami percaya bahwa literasi pasar modal adalah bekal penting bagi mahasiswa. Karena itu KSPM UNIPI merancang ruang belajar yang suportif, terstruktur, dan dekat dengan praktik nyata.",
  },
  programs: {
    eyebrow: "Program Unggulan",
    title: "Belajar pasar modal dengan alur yang jelas.",
    highlight: "alur yang jelas",
    description:
      "Dari kelas dasar hingga kompetisi trading, setiap program dirancang untuk membangun pemahaman yang bertahap dan pengalaman yang membekas.",
  },
  leadership: {
    eyebrow: "Kepengurusan",
    title: "Orang-orang di balik KSPM UNIPI.",
    highlight: "KSPM UNIPI",
    description:
      "Tim yang berdedikasi untuk menghadirkan program edukasi pasar modal yang relevan, inklusif, dan berdampak bagi mahasiswa.",
  },
  events: {
    eyebrow: "Agenda Terdekat",
    title: "Kegiatan yang bisa kamu ikuti.",
    highlight: "bisa kamu ikuti",
    description:
      "Ikuti seminar, workshop, dan kompetisi pilihan. Pendaftaran kegiatan terhubung langsung ke WhatsApp pengurus.",
  },
  gallery: {
    eyebrow: "Galeri Kegiatan",
    title: "Momen yang kami lewati bersama.",
    highlight: "bersama",
    description:
      "Dokumentasi kelas, seminar, kunjungan industri, dan kebersamaan keluarga besar KSPM UNIPI.",
  },
  articles: {
    eyebrow: "Wawasan Pasar Modal",
    title: "Baca, pahami, lalu mulai berinvestasi.",
    highlight: "mulai berinvestasi",
    description:
      "Artikel edukatif yang disusun pengurus KSPM UNIPI untuk membantumu memahami pasar modal dengan bahasa yang mudah dicerna.",
  },
  testimonials: {
    eyebrow: "Kata Anggota",
    title: "Cerita mereka yang bertumbuh bersama kami.",
    highlight: "bertumbuh bersama kami",
    description:
      "Pengalaman nyata anggota KSPM UNIPI dalam membangun pemahaman dan kepercayaan diri berinvestasi.",
  },
};

/** Teks berjalan (ticker) di bawah hero homepage. */
export const ticker: string[] = [
  "Literasi Keuangan",
  "Analisis Fundamental",
  "Simulasi Trading",
  "Riset Pasar Modal",
  "Investasi Saham",
  "Diskusi Portofolio",
  "Kompetisi Investasi",
  "Jaringan Profesional",
];
