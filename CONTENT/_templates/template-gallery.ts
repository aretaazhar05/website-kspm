import type { GalleryAlbum } from "@content/types";

/**
 * TEMPLATE ALBUM GALERI
 *
 * Cara pakai:
 * 1. Salin blok "contohAlbum" di bawah.
 * 2. Tempel di dalam array "albumList" pada CONTENT/04-GALLERY/gallery.ts.
 * 3. Simpan foto di public/images/gallery/.
 * 4. "cover" adalah foto sampul album.
 * 5. Setiap foto wajib punya "order" agar urutannya jelas.
 * 6. Untuk menambah foto baru, salin satu blok di dalam "images".
 */
export const contohAlbum: GalleryAlbum = {
  id: "nama-album-baru",
  title: "Judul Kegiatan Album",
  album: "Nama Album",
  date: "2027-01-15",
  cover: "/images/gallery/nama-album-cover.jpg",
  description: "Deskripsi singkat isi album ini.",
  order: 6,
  images: [
    {
      src: "/images/gallery/nama-album-1.jpg",
      alt: "Deskripsi foto untuk pembaca layar",
      caption: "Caption yang tampil di bawah foto.",
      order: 1,
    },
    {
      src: "/images/gallery/nama-album-2.jpg",
      alt: "Deskripsi foto kedua",
      caption: "Caption foto kedua.",
      order: 2,
    },
  ],
};
