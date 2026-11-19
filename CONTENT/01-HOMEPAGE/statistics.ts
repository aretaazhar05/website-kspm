import type { Stat } from "@content/types";

/**
 * STATISTIK ORGANISASI
 * Angka yang tampil di hero dan bagian tentang pada homepage.
 * "suffix" adalah teks setelah angka, misalnya "+".
 * Urutan di bawah = urutan tampil di website.
 */
export const statistics: Stat[] = [
  { value: 120, suffix: "+", label: "Anggota aktif" },
  { value: 24, suffix: "+", label: "Kelas & workshop" },
  { value: 15, suffix: "+", label: "Mitra kolaborasi" },
];
