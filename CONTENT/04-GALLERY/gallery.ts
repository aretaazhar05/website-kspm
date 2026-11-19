import type { GalleryAlbum, GalleryPage } from "@content/types";

/**
 * GALERI KEGIATAN
 * Setiap album dapat memiliki banyak foto beserta caption masing-masing.
 * Foto disimpan di public/images/gallery/ (foto khusus album) dan
 * public/images/events/ atau public/images/programs/ bila memakai foto bersama.
 *
 * - "order" pada album menentukan urutan album.
 * - "order" pada setiap foto menentukan urutan foto di dalam album.
 */
export const galleryPage: GalleryPage = {
  intro: {
    eyebrow: "Galeri",
    title: "Jejak langkah dan kebersamaan KSPM UNIPI.",
    highlight: "kebersamaan",
    description:
      "Kumpulan momen dari kelas, seminar, kunjungan industri, kompetisi, dan kegiatan internal KSPM UNIPI. Klik foto untuk melihat versi lebih besar.",
  },
  collection: {
    eyebrow: "Album Kegiatan",
    title: "Jelajahi momen dari setiap kegiatan.",
    highlight: "setiap kegiatan",
    description:
      "Pilih album untuk melihat foto berdasarkan jenis kegiatan, atau telusuri seluruh dokumentasi KSPM UNIPI.",
  },
  albumsLabel: "Album kegiatan",
  emptyText: "Belum ada album galeri yang tersedia.",
};

const albumList: GalleryAlbum[] = [
  {
    id: "seminar-nasional-investasi-2025",
    title: "Seminar Nasional Investasi 2025",
    album: "Seminar",
    date: "2025-11-22",
    cover: "/images/events/seminar-nasional.jpg",
    description:
      "Diskusi bersama praktisi pasar modal tentang peluang investasi bagi generasi muda.",
    order: 1,
    images: [
      {
        src: "/images/events/seminar-nasional.jpg",
        alt: "Peserta seminar nasional investasi di aula kampus",
        caption: "Peserta mengikuti Seminar Nasional Investasi 2025 di aula utama kampus.",
        order: 1,
      },
      {
        src: "/images/gallery/seminar-panel.jpg",
        alt: "Sesi panel dan tanya jawab seminar investasi",
        caption: "Sesi panel bersama narasumber praktisi pasar modal.",
        order: 2,
      },
    ],
  },
  {
    id: "sekolah-pasar-modal-batch-2",
    title: "Sekolah Pasar Modal Batch 2",
    album: "Edukasi",
    date: "2026-03-08",
    cover: "/images/programs/sekolah-pasar-modal.jpg",
    description:
      "Kelas intensif anggota baru untuk memahami dasar-dasar pasar modal dan investasi.",
    order: 2,
    images: [
      {
        src: "/images/programs/sekolah-pasar-modal.jpg",
        alt: "Pemateri menjelaskan materi pasar modal di depan peserta",
        caption: "Pemaparan materi dasar pasar modal oleh Divisi Edukasi & Riset.",
        order: 1,
      },
      {
        src: "/images/gallery/workshop-practice.jpg",
        alt: "Peserta berdiskusi mengerjakan studi kasus investasi",
        caption: "Peserta berdiskusi menyelesaikan studi kasus portofolio.",
        order: 2,
      },
    ],
  },
  {
    id: "kunjungan-bursa-efek-indonesia",
    title: "Kunjungan Bursa Efek Indonesia",
    album: "Kunjungan",
    date: "2026-05-14",
    cover: "/images/programs/kunjungan-bursa.jpg",
    description:
      "Melihat langsung ekosistem pasar modal Indonesia dan berdialog dengan pelaku industri.",
    order: 3,
    images: [
      {
        src: "/images/programs/kunjungan-bursa.jpg",
        alt: "Anggota KSPM UNIPI mengunjungi Bursa Efek Indonesia",
        caption: "Anggota KSPM UNIPI mengunjungi Bursa Efek Indonesia.",
        order: 1,
      },
      {
        src: "/images/gallery/bursa-floor.jpg",
        alt: "Peserta melihat layar pergerakan indeks di bursa",
        caption: "Mengamati pergerakan indeks dan proses perdagangan secara langsung.",
        order: 2,
      },
    ],
  },
  {
    id: "internal-gathering-2026",
    title: "Internal Gathering & Farewell",
    album: "Internal",
    date: "2026-06-21",
    cover: "/images/gallery/gathering.jpg",
    description:
      "Momen kebersamaan keluarga besar KSPM UNIPI di akhir kepengurusan.",
    order: 4,
    images: [
      {
        src: "/images/gallery/gathering.jpg",
        alt: "Foto bersama anggota KSPM UNIPI dalam acara gathering",
        caption: "Kebersamaan keluarga besar KSPM UNIPI.",
        order: 1,
      },
      {
        src: "/images/gallery/gathering-2.jpg",
        alt: "Anggota KSPM UNIPI berdiskusi santai dalam gathering",
        caption: "Sesi santai dan berbagi cerita antaranggota.",
        order: 2,
      },
    ],
  },
  {
    id: "stock-trading-competition-2026",
    title: "Stock Trading Competition 2026",
    album: "Kompetisi",
    date: "2026-09-19",
    cover: "/images/programs/trading-competition.jpg",
    description:
      "Ajang simulasi trading antarperguruan tinggi yang penuh strategi dan tantangan.",
    order: 5,
    images: [
      {
        src: "/images/programs/trading-competition.jpg",
        alt: "Peserta kompetisi simulasi trading melihat pergerakan saham",
        caption: "Peserta memantau pergerakan saham selama periode kompetisi.",
        order: 1,
      },
    ],
  },
];

/** Album dan foto diurutkan otomatis berdasarkan nilai "order". */
export const galleryAlbums: GalleryAlbum[] = albumList
  .slice()
  .sort((a, b) => a.order - b.order)
  .map((album) => ({
    ...album,
    images: album.images.slice().sort((a, b) => a.order - b.order),
  }));
