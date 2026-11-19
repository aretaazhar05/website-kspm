import type { SiteSettings } from "@content/types";

/**
 * MEDIA SOSIAL
 * "instagram" berisi URL lengkap. "instagramHandle" hanya untuk teks tampilan.
 * "whatsappGroup" opsional; kosongkan ("") bila belum ada grup.
 */
type SocialMediaSettings = Pick<
  SiteSettings,
  "instagram" | "instagramHandle" | "whatsappGroup"
>;

export const socialMedia: SocialMediaSettings = {
  instagram: "https://www.instagram.com/kspm.unipi/",
  instagramHandle: "@kspm.unipi",
  whatsappGroup: "",
};
