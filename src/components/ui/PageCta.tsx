import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { settings } from "@content/08-SETTINGS";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { HighlightedText } from "./HighlightedText";
import { buttonClass } from "./buttonStyles";
import { Reveal } from "./Reveal";

interface PageCtaProps {
  className?: string;
}

export function PageCta({ className }: PageCtaProps) {
  const waUrl = buildWhatsAppUrl(settings.whatsapp, settings.cta.whatsappMessage);

  return (
    <section className={className ?? "bg-white py-16 sm:py-20"}>
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-12 sm:px-12 sm:py-14 lg:px-16">
            <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
            <div
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-royal-600/30 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-gold-500/10 blur-[90px]"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow-light">
                  <span className="eyebrow-line" aria-hidden="true" />
                  {settings.cta.eyebrow}
                </p>
                <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl">
                  <HighlightedText
                    text={settings.cta.title}
                    highlight={settings.cta.highlight}
                    tone="dark"
                  />
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
                  {settings.cta.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link href="/bergabung" className={buttonClass("primary", "lg")}>
                  {settings.labels.joinCta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass("outline", "lg")}
                >
                  <MessageCircle className="h-4 w-4" />
                  Tanya via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
