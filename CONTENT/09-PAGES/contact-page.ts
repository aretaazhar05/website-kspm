import type { ContactPage } from "@content/types";

/**
 * HALAMAN KONTAK (/kontak)
 * Hanya berisi teks halaman. Nomor WhatsApp, email, dan alamat
 * diatur di CONTENT/08-SETTINGS/contact.ts.
 */
export const contactPage: ContactPage = {
  intro: {
    eyebrow: "Kontak",
    title: "Mari terhubung dengan KSPM UNIPI.",
    highlight: "terhubung",
    description:
      "Punya pertanyaan tentang program, pendaftaran, atau kolaborasi? Hubungi kami melalui kanal di bawah ini. Kami senang berdiskusi denganmu.",
  },
  formTitle: "Kirim pesan lewat WhatsApp",
  formDescription:
    "Isi formulir singkat ini, lalu lanjutkan ke WhatsApp. Pesanmu akan otomatis terisi sehingga lebih mudah kami tindak lanjuti.",
  channelTitle: "Kanal resmi kami",
  channelDescription:
    "Gunakan kanal resmi di bawah untuk memastikan komunikasi berjalan dengan aman dan tepat.",
  mapTitle: "Lokasi kami",
  mapDescription:
    "Kegiatan KSPM UNIPI berlangsung di lingkungan kampus Universitas Insan Pembangunan Indonesia.",
};
