import type { Program } from "@content/types";

/**
 * TEMPLATE PROGRAM KERJA
 *
 * Cara pakai:
 * 1. Salin blok "contohProgram" di bawah.
 * 2. Tempel di dalam array "programList" pada CONTENT/06-PROGRAMS/programs.ts.
 * 3. Ganti isinya dan simpan foto di public/images/programs/.
 * 4. "visible: false" menyembunyikan program tanpa menghapus datanya.
 * 5. "category" bebas; kategori baru otomatis muncul di filter.
 */
export const contohProgram: Program = {
  id: "nama-program",
  slug: "nama-program",
  title: "Nama Program Baru",
  description: "Ringkasan singkat program dalam satu atau dua kalimat.",
  longDescription:
    "Penjelasan lebih lengkap tentang tujuan, peserta, dan bentuk kegiatan program ini.",
  image: "/images/programs/nama-program.jpg",
  category: "Edukasi",
  visible: true,
  order: 5,
  highlights: [
    "Keunggulan pertama program",
    "Keunggulan kedua program",
    "Keunggulan ketiga program",
  ],
  schedule: "Contoh: Empat pertemuan setiap semester",
};
