import type { Metadata } from "next";
import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageCta } from "@/components/ui/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { contactPage } from "@content/09-PAGES";
import { settings } from "@content/08-SETTINGS";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontak",
  description: contactPage.intro.description,
};

export default function ContactPage() {
  const waUrl = buildWhatsAppUrl(settings.whatsapp, settings.cta.whatsappMessage);
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    settings.fullName,
  )}&z=15&output=embed`;

  const channels = [
    {
      label: "WhatsApp",
      value: settings.whatsappDisplay,
      description: "Respons tercepat pada jam kerja.",
      href: waUrl,
      icon: MessageCircle,
      external: true,
    },
    {
      label: "Email",
      value: settings.email,
      description: "Untuk surat resmi dan kolaborasi.",
      href: `mailto:${settings.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: "Instagram",
      value: settings.instagramHandle,
      description: "Informasi kegiatan dan open recruitment.",
      href: settings.instagram,
      icon: Instagram,
      external: true,
    },
    {
      label: "Alamat",
      value: settings.addressShort,
      description: "Kampus Universitas Insan Pembangunan Indonesia.",
      href: settings.mapsUrl,
      icon: MapPin,
      external: true,
    },
  ];

  return (
    <>
      <PageHero intro={contactPage.intro} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group rounded-3xl border border-navy-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-royal-200 hover:shadow-card"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-950 text-gold-300 transition group-hover:bg-royal-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      {channel.label}
                    </p>
                    <p className="mt-1 break-words text-[14px] font-semibold leading-snug text-navy-950">
                      {channel.value}
                    </p>
                    <p className="mt-2 text-[11.5px] leading-relaxed text-slate-500">
                      {channel.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={80}>
              <div className="space-y-5">
                <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-6 text-white sm:p-7">
                  <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                  <div className="relative">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-300">
                      {contactPage.channelTitle}
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                      {contactPage.channelDescription}
                    </p>

                    <div className="mt-5 space-y-4">
                      <div className="flex gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        <p className="text-[12.5px] leading-relaxed text-white/75">
                          {settings.address}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        <p className="text-[12.5px] text-white/75">
                          {settings.officeHours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft">
                  <div className="flex items-center justify-between gap-3 px-5 py-4">
                    <div>
                      <p className="text-[13px] font-bold text-navy-950">
                        {contactPage.mapTitle}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {contactPage.mapDescription}
                      </p>
                    </div>
                    <a
                      href={settings.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Buka lokasi di Google Maps"
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-950 text-white transition hover:bg-royal-700"
                    >
                      <Navigation className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="relative h-[280px] w-full border-t border-navy-100 bg-mist">
                    <iframe
                      title="Peta lokasi Universitas Insan Pembangunan Indonesia"
                      src={mapSrc}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
