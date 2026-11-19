import type { EventItem } from "@content/types";

/**
 * TEMPLATE KEGIATAN
 *
 * Cara pakai:
 * 1. Salin blok "contohKegiatan" di bawah.
 * 2. Tempel di dalam array "events" pada CONTENT/05-EVENTS/events.ts.
 * 3. Simpan poster di public/images/events/.
 * 4. Atur status:
 *    "open"         = pendaftaran dibuka
 *    "closing-soon" = segera ditutup
 *    "closed"       = pendaftaran ditutup
 *    "completed"    = kegiatan selesai
 * 5. "whatsapp" opsional. Isi bila nomor panitia berbeda dari nomor utama.
 *    Format: 628xxxxxxxxxx (tanpa "+" dan tanpa spasi).
 */
export const contohKegiatan: EventItem = {
  id: "slug-kegiatan-baru",
  slug: "slug-kegiatan-baru",
  title: "Nama Kegiatan Baru",
  category: "Workshop",
  description: "Ringkasan kegiatan yang tampil di kartu kegiatan.",
  content: [
    "Paragraf pertama tentang kegiatan ini.",
    "Paragraf kedua tentang manfaat dan susunan acara.",
    "Paragraf ketiga tentang siapa yang boleh ikut.",
  ],
  poster: "/images/events/nama-kegiatan.jpg",
  date: "2027-02-20",
  time: "09.00 - 15.00 WIB",
  location: "Kampus UNIPI, Tangerang",
  status: "open",
  statusLabel: "Pendaftaran Dibuka",
  registrationNote: "Pendaftaran dibuka hingga 15 Februari 2027.",
  quota: "100 peserta",
  agenda: [
    { time: "09.00", title: "Registrasi peserta" },
    { time: "09.30", title: "Pembukaan dan sambutan" },
    { time: "10.00", title: "Materi utama" },
    { time: "14.30", title: "Penutupan" },
  ],
  featured: false,
  order: 6,
};
