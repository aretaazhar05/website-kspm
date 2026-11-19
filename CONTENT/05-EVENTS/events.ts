import type { EventItem, EventsPage } from "@content/types";

/**
 * KEGIATAN KSPM UNIPI
 * Status yang tersedia: "open", "closing-soon", "closed", "completed".
 * Nomor WhatsApp pada kegiatan akan menimpa nomor di CONTENT/08-SETTINGS/contact.ts
 * bila diisi. Poster disimpan di public/images/events/.
 */
export const eventsPage: EventsPage = {
  intro: {
    eyebrow: "Kegiatan",
    title: "Ikuti kegiatan terdekat dan tumbuh bersama kami.",
    highlight: "tumbuh bersama kami",
    description:
      "Seminar, workshop, kompetisi, dan open recruitment KSPM UNIPI. Pendaftaran langsung terhubung ke WhatsApp pengurus dengan pesan otomatis yang praktis.",
  },
  upcomingTitle: "Kegiatan mendatang",
  upcomingDescription:
    "Pastikan kamu tidak melewatkan agenda belajar berikutnya. Klik tombol daftar untuk menghubungi pengurus melalui WhatsApp.",
  archiveTitle: "Kegiatan yang telah selesai",
  archiveDescription:
    "Rekam jejak kegiatan KSPM UNIPI sebagai referensi dan dokumentasi perjalanan organisasi.",
  emptyText: "Belum ada kegiatan yang tersedia saat ini.",
};

export const events: EventItem[] = [
  {
    id: "seminar-nasional-pasar-modal-2026",
    slug: "seminar-nasional-pasar-modal-2026",
    title: "Seminar Nasional Pasar Modal 2026",
    category: "Seminar",
    description:
      "Membaca peluang dan risiko pasar modal di tengah dinamika ekonomi 2026 bersama praktisi dan analis pasar.",
    content: [
      "Seminar Nasional Pasar Modal 2026 merupakan agenda tahunan KSPM UNIPI yang mempertemukan mahasiswa dengan praktisi pasar modal, analis, dan investor. Tahun ini kami mengangkat tema besar tentang cara membaca peluang dan risiko pasar di tengah dinamika ekonomi yang cepat berubah.",
      "Peserta akan mendapatkan pemaparan mengenai kondisi makroekonomi Indonesia, sektor-sektor yang berpotensi tumbuh, serta pendekatan analisis yang dapat digunakan investor pemula. Sesi talkshow akan dilanjutkan dengan tanya jawab interaktif bersama para narasumber.",
      "Kegiatan ini terbuka untuk seluruh mahasiswa UNIPI maupun mahasiswa dari kampus lain. Peserta yang mengikuti sesi penuh akan mendapatkan e-sertifikat dan materi presentasi dari narasumber.",
    ],
    poster: "/images/events/seminar-nasional.jpg",
    date: "2026-12-06",
    time: "08.30 - 12.30 WIB",
    location: "Aula Utama Kampus UNIPI, Tangerang",
    status: "open",
    statusLabel: "Pendaftaran Dibuka",
    registrationNote: "Pendaftaran dibuka hingga 3 Desember 2026 atau sampai kuota terpenuhi.",
    quota: "300 peserta",
    agenda: [
      { time: "08.30", title: "Registrasi dan pembukaan" },
      { time: "09.00", title: "Sambutan Ketua Umum KSPM UNIPI" },
      { time: "09.30", title: "Keynote: Peta Pasar Modal Indonesia 2026" },
      { time: "10.30", title: "Talkshow: Strategi Investor Muda" },
      { time: "11.45", title: "Sesi tanya jawab" },
      { time: "12.15", title: "Penutupan dan dokumentasi" },
    ],
    featured: true,
    order: 1,
  },
  {
    id: "workshop-analisis-fundamental",
    slug: "workshop-analisis-fundamental",
    title: "Workshop Analisis Fundamental",
    category: "Workshop",
    description:
      "Belajar membaca laporan keuangan, menghitung rasio, dan menentukan nilai wajar saham secara langsung.",
    content: [
      "Workshop Analisis Fundamental dirancang untuk anggota yang ingin naik ke tingkat berikutnya setelah memahami dasar-dasar pasar modal. Peserta akan mempelajari cara membaca laporan keuangan, menghitung rasio penting, dan menilai apakah harga sebuah saham masih masuk akal.",
      "Sesi berlangsung di laboratorium komputer dengan pendekatan praktik menggunakan studi kasus emiten nyata. Setiap peserta akan didampingi pengurus dan mentor untuk menyusun analisis sederhana terhadap satu emiten pilihan.",
      "Kuota workshop dibatasi agar proses pendampingan berjalan efektif. Prioritas diberikan kepada anggota aktif KSPM UNIPI, dengan sisa kuota dibuka untuk mahasiswa umum.",
    ],
    poster: "/images/events/workshop-fundamental.jpg",
    date: "2026-12-13",
    time: "13.00 - 16.00 WIB",
    location: "Lab Komputer Kampus UNIPI, Tangerang",
    status: "closing-soon",
    statusLabel: "Segera Ditutup",
    registrationNote: "Kuota terbatas. Pendaftaran ditutup 11 Desember 2026.",
    quota: "60 peserta",
    agenda: [
      { time: "12.30", title: "Registrasi peserta" },
      { time: "13.00", title: "Membaca laporan keuangan emiten" },
      { time: "14.15", title: "Praktik analisis rasio dan valuasi" },
      { time: "15.30", title: "Presentasi hasil analisis" },
      { time: "16.00", title: "Penutupan" },
    ],
    order: 2,
  },
  {
    id: "open-recruitment-kspm-unipi-2026",
    slug: "open-recruitment-kspm-unipi-2026",
    title: "Open Recruitment Anggota 2026/2027",
    category: "Rekrutmen",
    description:
      "Bergabunglah dengan keluarga besar KSPM UNIPI dan mulai perjalanan belajarmu di dunia pasar modal.",
    content: [
      "Open Recruitment KSPM UNIPI 2026/2027 membuka kesempatan bagi mahasiswa UNIPI yang ingin tumbuh bersama komunitas pasar modal. Tidak diperlukan pengalaman investasi sebelumnya. Yang dibutuhkan adalah rasa ingin tahu, komitmen untuk belajar, dan semangat berkolaborasi.",
      "Proses rekrutmen mencakup pendaftaran berkas, wawancara singkat, dan sesi penyambutan anggota baru. Seluruh rangkaian berlangsung ramah dan dirancang agar kamu mengenal budaya organisasi KSPM UNIPI sebelum memutuskan untuk bergabung.",
      "Tersedia pilihan divisi sesuai minat, mulai dari Edukasi & Riset, Pengembangan Anggota, Media & Informasi, hingga Hubungan Eksternal. Hubungi pengurus melalui WhatsApp untuk mendapatkan panduan pendaftaran.",
    ],
    poster: "/images/events/open-recruitment.jpg",
    date: "2027-01-10",
    time: "08.00 - 15.00 WIB",
    location: "Kampus UNIPI, Cikupa, Tangerang",
    status: "open",
    statusLabel: "Pendaftaran Dibuka",
    registrationNote: "Pendaftaran dibuka hingga 20 Januari 2027.",
    quota: "Terbuka untuk mahasiswa aktif UNIPI",
    agenda: [
      { time: "08.00", title: "Registrasi dan pembukaan booth" },
      { time: "09.00", title: "Sosialisasi organisasi dan divisi" },
      { time: "11.00", title: "Wawancara calon anggota" },
      { time: "14.00", title: "Pengumuman tahap awal" },
      { time: "15.00", title: "Penutupan" },
    ],
    order: 3,
  },
  {
    id: "stock-trading-competition-2026",
    slug: "stock-trading-competition-2026",
    title: "Stock Trading Competition 2026",
    category: "Kompetisi",
    description:
      "Kompetisi simulasi trading antarperguruan tinggi yang menantang strategi, disiplin, dan pengelolaan risiko.",
    content: [
      "Stock Trading Competition 2026 telah selesai dilaksanakan. Sebanyak lebih dari 150 peserta dari berbagai perguruan tinggi berkompetisi dalam simulasi perdagangan saham selama satu bulan penuh.",
      "Peserta tidak hanya dinilai dari return portofolio, tetapi juga dari kualitas laporan strategi dan kemampuan mempresentasikan keputusan investasi di hadapan dewan juri. Kegiatan ini menjadi bukti bahwa pengelolaan risiko sama pentingnya dengan mengejar keuntungan.",
      "Dokumentasi dan daftar pemenang telah dipublikasikan melalui Instagram resmi KSPM UNIPI. Terima kasih kepada seluruh peserta, juri, dan mitra yang telah mendukung kegiatan ini.",
    ],
    poster: "/images/programs/trading-competition.jpg",
    date: "2026-09-19",
    time: "09.00 - 15.00 WIB",
    location: "Kampus UNIPI dan platform simulasi online",
    status: "completed",
    statusLabel: "Kegiatan Selesai",
    registrationNote: "Kegiatan telah selesai dilaksanakan.",
    quota: "150+ peserta",
    agenda: [
      { time: "08.30", title: "Registrasi dan briefing peserta" },
      { time: "09.00", title: "Pembukaan kompetisi" },
      { time: "09.30", title: "Periode simulasi trading" },
      { time: "13.30", title: "Presentasi strategi finalis" },
      { time: "15.00", title: "Pengumuman pemenang" },
    ],
    order: 4,
  },
  {
    id: "sekolah-pasar-modal-batch-2",
    slug: "sekolah-pasar-modal-batch-2",
    title: "Sekolah Pasar Modal Batch 2",
    category: "Edukasi",
    description:
      "Program kelas intensif untuk membangun fondasi investasi bagi anggota baru KSPM UNIPI.",
    content: [
      "Sekolah Pasar Modal Batch 2 telah selesai dilaksanakan pada awal 2026. Program ini menjadi fondasi bagi anggota baru untuk memahami cara kerja pasar modal, jenis instrumen investasi, dan prinsip pengelolaan risiko.",
      "Rangkaian kelas mencakup materi saham, reksa dana, obligasi, analisis laporan keuangan, serta simulasi penyusunan portofolio sederhana. Peserta menyelesaikan studi kasus kelompok dan mempresentasikan hasilnya pada sesi terakhir.",
      "Materi dan dokumentasi kegiatan dapat diakses melalui pengurus Divisi Edukasi & Riset. Nantikan batch berikutnya melalui halaman kegiatan ini.",
    ],
    poster: "/images/programs/sekolah-pasar-modal.jpg",
    date: "2026-03-08",
    time: "09.00 - 15.00 WIB",
    location: "Ruang Kelas Kampus UNIPI, Tangerang",
    status: "completed",
    statusLabel: "Kegiatan Selesai",
    registrationNote: "Kegiatan telah selesai dilaksanakan.",
    quota: "80 peserta",
    agenda: [
      { time: "09.00", title: "Dasar pasar modal dan instrumen investasi" },
      { time: "10.30", title: "Membaca laporan keuangan" },
      { time: "13.00", title: "Simulasi portofolio kelompok" },
      { time: "14.30", title: "Presentasi dan penutupan" },
    ],
    order: 5,
  },
];

export const getEventBySlug = (slug: string) =>
  events.find((event) => event.slug === slug);

export const getUpcomingEvents = () =>
  events
    .filter((event) => event.status === "open" || event.status === "closing-soon")
    .sort((a, b) => a.order - b.order);

export const getPastEvents = () =>
  events
    .filter((event) => event.status === "completed" || event.status === "closed")
    .sort((a, b) => b.order - a.order);
