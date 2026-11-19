import type { NavLink } from "@content/types";

/**
 * MENU NAVIGASI
 * "href" harus sama dengan alamat halaman yang tersedia.
 * Contoh: "/tentang", "/pengurus", "/program-kerja".
 */
export const navLinks: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "Pengurus", href: "/pengurus" },
  { label: "Program", href: "/program-kerja" },
  { label: "Kegiatan", href: "/kegiatan" },
  { label: "Artikel", href: "/artikel" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

/** Tombol utama di kanan atas (desktop dan menu mobile). */
export const primaryNavCta: NavLink = {
  label: "Bergabung",
  href: "/bergabung",
};
