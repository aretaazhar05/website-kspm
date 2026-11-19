import { contact } from "@content/08-SETTINGS/contact";

/**
 * OPENING INTRO ANIMATION
 *
 * Tampilan pembuka singkat saat website pertama kali dibuka.
 * Intro hanya berupa lapisan (overlay) di atas homepage, tidak mengubah
 * tata letak, ukuran, atau posisi konten apa pun di halaman.
 *
 * Logo:
 * - Simpan logo resmi di public/images/logo/kspm-unipi.png
 * - Ukuran yang disarankan: minimal 512 x 512 px, latar transparan atau putih.
 * - Selama file tersebut belum ada, intro otomatis memakai logo bawaan
 *   (fallbackLogo) agar tidak menampilkan gambar rusak.
 */
export interface IntroConfig {
  /** false = intro tidak pernah tampil. */
  enabled: boolean;
  /** Total durasi tampil intro (milidetik). */
  duration: number;
  /** Path logo resmi KSPM UNIPI. */
  logo: string;
  /** Dipakai otomatis bila file logo resmi belum tersedia. */
  fallbackLogo: string;
  logoAlt: string;
  eyebrow: string;
  title: string;
  /** Potongan judul yang diberi warna emas. */
  highlight: string;
  tagline: string;
  signature: string;
  skipLabel: string;
  /** True = intro tampil di setiap reload halaman. */
  playOnEveryLoad: boolean;
}

export const intro: IntroConfig = {
  enabled: true,
  duration: 8000,
  logo: "/images/logo/kspm-unipi.png",
  fallbackLogo: contact.logo,
  logoAlt: "Logo resmi KSPM UNIPI",
  eyebrow: "Kelompok Studi Pasar Modal",
  title: "KSPM UNIPI",
  highlight: "UNIPI",
  tagline: "Belajar pasar modal, tumbuh bersama.",
  signature: "Universitas Insan Pembangunan Indonesia",
  skipLabel: "Lewati Intro",
  playOnEveryLoad: false,
};
