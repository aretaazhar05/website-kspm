import type { JoinPage } from "@content/types";

/**
 * HALAMAN BERGABUNG (/bergabung)
 * Berisi manfaat, alur pendaftaran, pilihan divisi, dan FAQ.
 */
export const joinPage: JoinPage = {
  intro: {
    eyebrow: "Bergabung",
    title: "Mulai perjalanan belajarmu di pasar modal.",
    highlight: "pasar modal",
    description:
      "Tidak perlu pengalaman investing sebelumnya. Yang kamu butuhkan adalah rasa ingin tahu, komitmen belajar, dan semangat berkolaborasi bersama anggota KSPM UNIPI.",
  },
  benefitsTitle: "Kenapa bergabung dengan KSPM UNIPI?",
  benefitsDescription:
    "Kami merancang pengalaman belajar yang membumi, terarah, dan penuh kesempatan untuk bertumbuh.",
  benefits: [
    {
      title: "Kelas pelan tapi terarah",
      description:
        "Materi disusun bertahap, mulai dari dasar pasar modal hingga analisis saham dan pengelolaan portofolio.",
    },
    {
      title: "Mentoring dan diskusi",
      description:
        "Belajar bersama pengurus dan anggota lain melalui forum diskusi, studi kasus, dan pendampingan rutin.",
    },
    {
      title: "Praktik simulasi trading",
      description:
        "Terapkan strategi di lingkungan yang aman melalui simulasi trading dan kompetisi internal.",
    },
    {
      title: "Jaringan dan kolaborasi",
      description:
        "Bertemu praktisi, alumni, dan komunitas pasar modal dari berbagai kampus dan latar belakang.",
    },
    {
      title: "E-sertifikat dan portofolio",
      description:
        "Dokumentasikan partisipasi dan kontribusimu untuk mendukung pengembangan karier di bidang keuangan.",
    },
    {
      title: "Ruang bertumbuh",
      description:
        "Kembangkan soft skill seperti public speaking, riset, desain, dan kerja tim melalui program organisasi.",
    },
  ],
  stepsTitle: "Alur bergabung",
  stepsDescription:
    "Prosesnya sederhana. Ikuti langkah berikut dan tim kami akan membantumu sepanjang proses.",
  steps: [
    {
      step: "01",
      title: "Bertanya & konsultasi",
      description:
        "Hubungi pengurus melalui WhatsApp atau Instagram untuk mengetahui informasi terkini seputar keanggotaan.",
    },
    {
      step: "02",
      title: "Isi pendaftaran",
      description:
        "Lengkapi data diri dan pilih divisi yang sesuai dengan minatmu melalui formulir yang diarahkan pengurus.",
    },
    {
      step: "03",
      title: "Wawancara singkat",
      description:
        "Kenalan lebih dekat dengan pengurus untuk memastikan minat dan kebutuhan belajar dapat terakomodasi.",
    },
    {
      step: "04",
      title: "Resmi bergabung",
      description:
        "Ikuti sesi penyambutan anggota baru dan mulai ikut kelas, diskusi, serta kegiatan KSPM UNIPI.",
    },
  ],
  formTitle: "Daftar minat jadi anggota",
  formDescription:
    "Isi data singkat berikut. Setelah itu kamu akan diarahkan ke WhatsApp pengurus dengan pesan yang sudah terisi otomatis.",
  faqTitle: "Pertanyaan yang sering ditanyakan",
  faqDescription:
    "Belum menemukan jawabannya? Tanya langsung melalui WhatsApp, kami siap membantu.",
  faq: [
    {
      question: "Apakah harus punya pengalaman investasi sebelumnya?",
      answer:
        "Tidak. KSPM UNIPI terbuka untuk mahasiswa yang baru memulai. Materi dirancang dari dasar agar semua anggota dapat mengikuti dengan nyaman.",
    },
    {
      question: "Apakah keanggotaan terbuka untuk semua jurusan?",
      answer:
        "Ya. KSPM UNIPI terbuka untuk mahasiswa aktif Universitas Insan Pembangunan Indonesia dari program studi apa pun yang memiliki minat pada pasar modal.",
    },
    {
      question: "Berapa biaya untuk bergabung?",
      answer:
        "Informasi mengenai biaya keanggotaan disampaikan oleh pengurus saat proses pendaftaran. Sebagian besar kegiatan edukasi dapat diikuti secara gratis.",
    },
    {
      question: "Apakah ada kewajiban mengikuti seluruh kegiatan?",
      answer:
        "Kami mendorong kehadiran di kelas inti, tetapi setiap anggota dapat mengatur prioritas sesuai jadwal perkuliahan. Komunikasi yang baik adalah kunci.",
    },
    {
      question: "Apakah KSPM UNIPI menyediakan sinyal atau rekomendasi saham?",
      answer:
        "Kami berfokus pada edukasi dan analisis, bukan memberikan rekomendasi beli atau jual. Tujuan kami adalah membangun kemampuan berpikir kritis dalam berinvestasi.",
    },
  ],
  divisions: [
    { label: "Edukasi & Riset", value: "Edukasi & Riset" },
    { label: "Pengembangan Anggota", value: "Pengembangan Anggota" },
    { label: "Media & Informasi", value: "Media & Informasi" },
    { label: "Hubungan Eksternal", value: "Hubungan Eksternal" },
    { label: "Belum menentukan", value: "Belum menentukan" },
  ],
};
