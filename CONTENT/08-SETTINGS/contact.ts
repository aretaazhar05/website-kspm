import type { SiteSettings } from "@content/types";

/**
 * IDENTITAS DAN KONTAK ORGANISASI
 *
 * Ini sumber utama untuk:
 * - nomor WhatsApp seluruh tombol pendaftaran,
 * - email,
 * - alamat dan jam operasional,
 * - logo organisasi.
 *
 * Nomor WhatsApp harus format internasional tanpa tanda "+" dan tanpa spasi.
 * Contoh: 6281234567890
 */
type ContactSettings = Pick<
  SiteSettings,
  | "organizationName"
  | "shortName"
  | "fullName"
  | "university"
  | "tagline"
  | "period"
  | "logo"
  | "email"
  | "whatsapp"
  | "whatsappDisplay"
  | "address"
  | "addressShort"
  | "mapsUrl"
  | "officeHours"
>;

export const contact: ContactSettings = {
  organizationName: "KSPM UNIPI",
  shortName: "KSPM",
  fullName:
    "Kelompok Studi Pasar Modal Universitas Insan Pembangunan Indonesia",
  university: "Universitas Insan Pembangunan Indonesia",
  tagline: "Belajar pasar modal, tumbuh bersama.",
  period: "2025/2026",
  logo: "/images/logo/logo-kspm.svg",

  email: "kspmipem@gmail.com",
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  address:
    "Universitas Insan Pembangunan Indonesia, Jl. Raya Serang KM. 10, Bitung Jaya, Cikupa, Kabupaten Tangerang, Banten 15710",
  addressShort: "Kampus UNIPI, Cikupa, Tangerang",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Universitas+Insan+Pembangunan+Indonesia",
  officeHours: "Senin - Jumat, 09.00 - 17.00 WIB",
};
