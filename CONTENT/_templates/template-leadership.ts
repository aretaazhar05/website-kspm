import type { Leader } from "@content/types";

/**
 * TEMPLATE PENGURUS
 *
 * Cara pakai:
 * 1. Salin blok "contohPengurus" di bawah.
 * 2. Tempel di dalam array "leaders" pada CONTENT/02-LEADERSHIP/team.ts.
 * 3. Ganti semua isinya dengan data pengurus baru.
 * 4. Simpan foto di public/images/leadership/ dengan nama file yang sama
 *    seperti nilai "photo" (tanpa awalan public).
 * 5. Simpan file. Website akan menampilkan pengurus baru.
 *
 * "order" menentukan urutan tampil. Angka kecil tampil lebih dulu.
 * "division" boleh diisi nama divisi baru; filter dibuat otomatis.
 */
export const contohPengurus: Leader = {
  id: "nama-lengkap-pengurus",
  name: "Nama Lengkap Pengurus",
  role: "Kepala Divisi Contoh",
  division: "Divisi Contoh",
  photo: "/images/leadership/nama-lengkap-pengurus.jpg",
  period: "2025/2026",
  order: 9,
  bio: "Tuliskan satu atau dua kalimat tentang tugas dan peran pengurus ini.",
  instagram: "https://www.instagram.com/username/",
};
