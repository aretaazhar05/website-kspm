"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Instagram, Mail, Menu, MessageCircle, X } from "lucide-react";
import { navLinks, primaryNavCta, settings } from "@content/08-SETTINGS";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;
  const waUrl = buildWhatsAppUrl(
    settings.whatsapp,
    settings.cta.whatsappMessage,
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-navy-100/70 bg-white/95 shadow-[0_20px_50px_-40px_rgba(5,15,36,0.8)] backdrop-blur-xl"
          : "border-b border-white/5 bg-transparent",
      )}
    >
      <div className="container-x flex h-[76px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label={`${settings.organizationName} - Beranda`}
        >
          <span
            className={cn(
              "grid h-11 w-11 shrink-0 place-items-center rounded-xl p-1 transition-all duration-300",
              solid
                ? "bg-navy-950 ring-1 ring-navy-900/10"
                : "bg-white/10 ring-1 ring-white/20 backdrop-blur",
            )}
          >
            <Image
              src={settings.logo}
              alt={`Logo ${settings.organizationName}`}
              width={44}
              height={44}
              className="h-full w-full"
              priority
            />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-[17px] font-bold tracking-[0.02em] transition-colors",
                solid ? "text-navy-950" : "text-white",
              )}
            >
              KSPM <span className="text-gold-500">UNIPI</span>
            </span>
            <span
              className={cn(
                "hidden text-[9.5px] font-semibold uppercase tracking-[0.18em] transition-colors sm:block",
                solid ? "text-slate-500" : "text-white/55",
              )}
            >
              Kelompok Studi Pasar Modal
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigasi utama">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[13px] font-semibold transition-colors xl:px-3.5",
                  solid
                    ? active
                      ? "text-royal-700"
                      : "text-navy-800/70 hover:text-royal-700"
                    : active
                      ? "text-gold-300"
                      : "text-white/70 hover:text-white",
                )}
              >
                {link.label}
                {active ? (
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-[3px] h-[2px] rounded-full",
                      solid ? "bg-royal-600" : "bg-gold-400",
                    )}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={primaryNavCta.href}
            className="group hidden items-center gap-1.5 rounded-full bg-gold-400 px-5 py-2.5 text-[13px] font-bold text-navy-950 shadow-[0_10px_30px_-12px_rgba(217,154,27,0.8)] transition hover:bg-gold-300 sm:inline-flex"
          >
            {primaryNavCta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full border transition lg:hidden",
              solid
                ? "border-navy-100 text-navy-900 hover:bg-navy-50"
                : "border-white/20 text-white hover:bg-white/10",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-navy-100 bg-white transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[calc(100dvh-76px)] overflow-y-auto" : "max-h-0 border-t-0",
        )}
      >
        <div className="px-5 pb-8 pt-4 sm:px-8">
          <nav className="flex flex-col" aria-label="Navigasi mobile">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between border-b border-navy-50 py-3.5 text-[15px] font-semibold transition-colors",
                    active ? "text-royal-700" : "text-navy-900 hover:text-royal-700",
                  )}
                >
                  {link.label}
                  <ArrowUpRight
                    className={cn(
                      "h-4 w-4",
                      active ? "text-royal-600" : "text-navy-300",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <Link
            href={primaryNavCta.href}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-gold-300"
          >
            {primaryNavCta.label} KSPM UNIPI
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <div className="mt-6 space-y-3 rounded-2xl bg-mist p-4 text-[13px] text-navy-800">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-royal-700">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-royal-700 shadow-sm">
                <MessageCircle className="h-4 w-4" />
              </span>
              {settings.whatsappDisplay}
            </a>
            <a href={`mailto:${settings.email}`} className="flex items-center gap-3 hover:text-royal-700">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-royal-700 shadow-sm">
                <Mail className="h-4 w-4" />
              </span>
              {settings.email}
            </a>
            <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-royal-700">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-royal-700 shadow-sm">
                <Instagram className="h-4 w-4" />
              </span>
              {settings.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
