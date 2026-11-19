import type { SiteSettings } from "@content/types";
import { hero } from "@content/01-HOMEPAGE/hero";
import { statistics } from "@content/01-HOMEPAGE/statistics";
import { ticker } from "@content/01-HOMEPAGE/sections";
import { contact } from "./contact";
import { socialMedia } from "./social-media";
import { footer } from "./footer";
import { labels } from "./labels";
import { cta } from "./cta";

/**
 * GABUNGAN SEMUA PENGATURAN
 * File ini hanya menyatukan data dari file-file di folder ini.
 * Untuk mengubah konten, edit file sumbernya (contact.ts, seo.ts, dst.),
 * bukan file ini.
 */
export const settings: SiteSettings = {
  ...contact,
  ...socialMedia,
  hero,
  stats: statistics,
  ticker,
  footer,
  labels,
  cta,
};

export { navLinks, primaryNavCta } from "./navigation";
export { seo } from "./seo";
