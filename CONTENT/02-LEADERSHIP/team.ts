import type { Leader, LeadershipPage } from "@content/types";

/**
 * KEPENGURUSAN KSPM UNIPI
 * Tambah, ubah, atau hapus pengurus di array "leaders" di bawah.
 * Foto disimpan di public/images/leadership/.
 *
 * - "order" menentukan urutan tampil (angka kecil lebih dulu).
 * - "division" bebas diisi; filter divisi dibuat otomatis oleh website.
 */
export const leadershipPage: LeadershipPage = {
  intro: {
    eyebrow: "Kepengurusan",
    title: "Tim yang bekerja di balik setiap program KSPM UNIPI.",
    highlight: "setiap program",
    description:
      "Berkenalan dengan pengurus yang menggerakkan edukasi, riset, media, dan kolaborasi KSPM UNIPI pada periode 2025/2026.",
  },
  periodNote: "Periode kepengurusan 2025/2026",
  joinNote:
    "Ingin menjadi bagian dari kepengurusan berikutnya? Pantau informasi open recruitment melalui Instagram dan halaman kegiatan kami.",
};

export const leaders: Leader[] = [
  {
    id: "raisa-aulia-nafisa",
    name: "Raisa Aulia Nafisa",
    role: "Ketua Umum",
    division: "Inti",
    photo: "/images/leadership/raisa-aulia-nafisa.jpg",
    period: "2025/2026",
    order: 1,
    bio: "Memimpin arah organisasi dan memastikan setiap program berjalan selaras dengan visi KSPM UNIPI.",
    instagram: "https://www.instagram.com/kspm.unipi/",
  },
  {
    id: "fajar-ramadhan",
    name: "Fajar Ramadhan",
    role: "Wakil Ketua Umum",
    division: "Inti",
    photo: "/images/leadership/fajar-ramadhan.jpg",
    period: "2025/2026",
    order: 2,
    bio: "Mendampingi ketua umum dan mengoordinasikan pelaksanaan program lintas divisi.",
    instagram: "https://www.instagram.com/kspm.unipi/",
  },
  {
    id: "nabila-putri-zahra",
    name: "Nabila Putri Zahra",
    role: "Sekretaris Umum",
    division: "Inti",
    photo: "/images/leadership/nabila-putri-zahra.jpg",
    period: "2025/2026",
    order: 3,
    bio: "Mengelola administrasi organisasi, arsip kegiatan, dan komunikasi internal kepengurusan.",
    instagram: "https://www.instagram.com/kspm.unipi/",
  },
  {
    id: "rizky-maulana-akbar",
    name: "Rizky Maulana Akbar",
    role: "Bendahara Umum",
    division: "Inti",
    photo: "/images/leadership/rizky-maulana-akbar.jpg",
    period: "2025/2026",
    order: 4,
    bio: "Bertanggung jawab atas perencanaan anggaran dan pengelolaan keuangan organisasi.",
    instagram: "https://www.instagram.com/kspm.unipi/",
  },
  {
    id: "dinda-ayu-lestari",
    name: "Dinda Ayu Lestari",
    role: "Kepala Divisi Edukasi & Riset",
    division: "Edukasi & Riset",
    photo: "/images/leadership/dinda-ayu-lestari.jpg",
    period: "2025/2026",
    order: 5,
    bio: "Merancang kurikulum kelas, riset pasar, dan materi edukasi untuk anggota KSPM UNIPI.",
    instagram: "https://www.instagram.com/kspm.unipi/",
  },
  {
    id: "bagas-prasetyo",
    name: "Bagas Prasetyo",
    role: "Kepala Divisi Pengembangan Anggota",
    division: "Pengembangan Anggota",
    photo: "/images/leadership/bagas-prasetyo.jpg",
    period: "2025/2026",
    order: 6,
    bio: "Mengembangkan program pendampingan anggota, mentoring, dan evaluasi pembelajaran.",
    instagram: "https://www.instagram.com/kspm.unipi/",
  },
  {
    id: "salsabila-rahma",
    name: "Salsabila Rahma",
    role: "Kepala Divisi Media & Informasi",
    division: "Media & Informasi",
    photo: "/images/leadership/salsabila-rahma.jpg",
    period: "2025/2026",
    order: 7,
    bio: "Mengelola kanal informasi, desain kampanye, dan dokumentasi seluruh kegiatan organisasi.",
    instagram: "https://www.instagram.com/kspm.unipi/",
  },
  {
    id: "aditya-nugraha",
    name: "Aditya Nugraha",
    role: "Kepala Divisi Hubungan Eksternal",
    division: "Hubungan Eksternal",
    photo: "/images/leadership/aditya-nugraha.jpg",
    period: "2025/2026",
    order: 8,
    bio: "Membangun relasi dengan komunitas pasar modal, praktisi, dan mitra kolaborasi kampus.",
    instagram: "https://www.instagram.com/kspm.unipi/",
  },
].sort((a, b) => a.order - b.order);
