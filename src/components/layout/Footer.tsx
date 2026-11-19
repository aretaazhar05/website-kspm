import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { navLinks, primaryNavCta, settings } from "@content/08-SETTINGS";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const organizationLinks = navLinks.filter((link) =>
  ["/tentang", "/pengurus", "/program-kerja", "/kegiatan"].includes(link.href),
);

const contentLinks = [
  ...navLinks.filter((link) => ["/artikel", "/galeri", "/kontak"].includes(link.href)),
  primaryNavCta,
];

export function Footer() {
  const waUrl = buildWhatsAppUrl(settings.whatsapp, settings.cta.whatsappMessage);

  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-20 text-white">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div
        className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-royal-600/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gold-500/5 blur-[100px]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="container-x relative">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 p-1 ring-1 ring-white/15">
                <Image
                  src={settings.logo}
                  alt={`Logo ${settings.organizationName}`}
                  width={48}
                  height={48}
                  className="h-full w-full"
                />
              </span>
              <span>
                <span className="block font-display text-lg font-bold">
                  KSPM <span className="text-gold-400">UNIPI</span>
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Kelompok Studi Pasar Modal
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/55">
              {settings.footer.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={settings.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${settings.organizationName}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-gold-400/50 hover:text-gold-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${settings.organizationName}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-gold-400/50 hover:text-gold-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${settings.email}`}
                aria-label={`Email ${settings.organizationName}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-gold-400/50 hover:text-gold-300"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">
              Organisasi
            </h3>
            <ul className="mt-5 space-y-3">
              {organizationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-[14px] text-white/55 transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">
              Konten
            </h3>
            <ul className="mt-5 space-y-3">
              {contentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-[14px] text-white/55 transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-300">
              Hubungi Kami
            </h3>
            <ul className="mt-5 space-y-4 text-[13.5px] text-white/55">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/80" />
                <span className="leading-relaxed">{settings.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/80" />
                <a href={`mailto:${settings.email}`} className="transition hover:text-white">
                  {settings.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/80" />
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {settings.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/80" />
                <span>{settings.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-[12px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{settings.footer.copyright}</p>
          <p>{settings.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
