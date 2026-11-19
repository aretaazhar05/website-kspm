import type { Program, ProgramsPage } from "@content/types";

/**
 * PROGRAM KERJA KSPM UNIPI
 * Atur "visible: false" untuk menyembunyikan program dari website.
 * "category" bebas diisi dan otomatis muncul sebagai filter.
 * "order" menentukan urutan tampil. Foto: public/images/programs/.
 */
export const programsPage: ProgramsPage = {
  intro: {
    eyebrow: "Program Kerja",
    title: "Program yang membangun pemahaman investasi secara bertahap.",
    highlight: "secara bertahap",
    description:
      "Setiap program KSPM UNIPI dirancang untuk menjawab kebutuhan mahasiswa, dari yang baru mengenal pasar modal hingga yang ingin mengasah strategi investasi.",
  },
  note: "Seluruh program terbuka bagi mahasiswa UNIPI. Beberapa kegiatan bersifat selektif dan diumumkan melalui Instagram resmi KSPM UNIPI.",
};

const programList: Program[] = [
  {
    id: "sekolah-pasar-modal",
    slug: "sekolah-pasar-modal",
    title: "Sekolah Pasar Modal",
    description:
      "Kelas dasar pasar modal yang membahas saham, reksa dana, obligasi, hingga cara membaca laporan keuangan.",
    longDescription:
      "Sekolah Pasar Modal adalah program edukasi unggulan KSPM UNIPI. Dirancang untuk mahasiswa yang baru mengenal investasi, program ini membangun fondasi yang kuat sebelum anggota melangkah ke analisis yang lebih kompleks. Materi disampaikan oleh pengurus, alumni, dan praktisi dengan pendekatan diskusi yang interaktif.",
    image: "/images/programs/sekolah-pasar-modal.jpg",
    category: "Edukasi",
    visible: true,
    order: 1,
    highlights: [
      "Kelas dasar investasi dan pasar modal",
      "Praktik membaca laporan keuangan emiten",
      "Studi kasus dan diskusi kelompok",
    ],
    schedule: "4 pertemuan setiap batch",
  },
  {
    id: "stock-trading-competition",
    slug: "stock-trading-competition",
    title: "Stock Trading Competition",
    description:
      "Kompetisi simulasi trading antarperguruan tinggi untuk mengasah strategi dan pengelolaan risiko.",
    longDescription:
      "Stock Trading Competition menjadi wadah bagi mahasiswa untuk menerapkan ilmu yang telah dipelajari dalam simulasi pasar yang kompetitif. Peserta mengelola portofolio virtual, membuat laporan strategi, dan mempresentasikan keputusan investasinya di hadapan dewan juri.",
    image: "/images/programs/trading-competition.jpg",
    category: "Kompetisi",
    visible: true,
    order: 2,
    highlights: [
      "Periode simulasi trading selama satu bulan",
      "Analisis dan presentasi portofolio",
      "Hadiah serta pendampingan dari praktisi",
    ],
    schedule: "Tahunan, September - Oktober",
  },
  {
    id: "seminar-investasi",
    slug: "seminar-investasi",
    title: "Seminar & Talkshow Investasi",
    description:
      "Diskusi bersama praktisi pasar modal tentang tren investasi, karier, dan peluang di industri keuangan.",
    longDescription:
      "Seminar dan talkshow KSPM UNIPI menghadirkan praktisi pasar modal, analis, investor, serta akademisi untuk membahas isu aktual seputar investasi. Forum ini terbuka bagi seluruh mahasiswa dan menjadi ruang tanya jawab yang membumi tentang kondisi pasar terkini.",
    image: "/images/events/seminar-nasional.jpg",
    category: "Seminar",
    visible: true,
    order: 3,
    highlights: [
      "Narasumber praktisi dan analis pasar modal",
      "Diskusi tren pasar yang aktual",
      "Sesi tanya jawab dan networking",
    ],
    schedule: "Dua kali dalam satu kepengurusan",
  },
  {
    id: "kunjungan-bursa",
    slug: "kunjungan-bursa",
    title: "Kunjungan Bursa & Industri Keuangan",
    description:
      "Kunjungan lapangan ke Bursa Efek Indonesia dan lembaga keuangan untuk melihat pasar secara langsung.",
    longDescription:
      "Kunjungan bursa memberikan pengalaman langsung kepada anggota untuk memahami bagaimana pasar modal beroperasi. Peserta berkesempatan berdialog dengan pelaku industri, melihat proses perdagangan, dan memahami ekosistem investasi di Indonesia.",
    image: "/images/programs/kunjungan-bursa.jpg",
    category: "Kunjungan",
    visible: true,
    order: 4,
    highlights: [
      "Kunjungan ke Bursa Efek Indonesia",
      "Dialog dengan pelaku industri keuangan",
      "Dokumentasi dan laporan kunjungan",
    ],
    schedule: "Satu kali dalam satu kepengurusan",
  },
];

/** Program diurutkan otomatis berdasarkan nilai "order". */
export const programs: Program[] = programList
  .slice()
  .sort((a, b) => a.order - b.order);
