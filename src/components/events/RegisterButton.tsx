"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, Clock, MapPin, MessageCircle, X } from "lucide-react";
import type { EventItem } from "@content/types";
import { settings } from "@content/08-SETTINGS";
import { formatDate } from "@/lib/format";
import {
  buildEventMessage,
  buildWhatsAppUrl,
  getEventPhone,
} from "@/lib/whatsapp";
import { buttonClass } from "@/components/ui/buttonStyles";
import { cn } from "@/lib/cn";

interface RegisterButtonProps {
  event: EventItem;
  className?: string;
}

export function RegisterButton({ event, className }: RegisterButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setError("");
    }
  }, [open]);

  const message = buildEventMessage(event, name.trim() || "calon peserta", note);
  const waUrl = buildWhatsAppUrl(getEventPhone(event), message);

  const handleClick = (clickEvent: React.MouseEvent<HTMLAnchorElement>) => {
    if (!name.trim()) {
      clickEvent.preventDefault();
      setError("Mohon isi nama lengkap terlebih dahulu.");
      return;
    }
    setError("");
    window.setTimeout(() => setOpen(false), 150);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(buttonClass("primary", "sm"), className)}
      >
        <MessageCircle className="h-4 w-4" />
        {settings.labels.register}
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[90] flex items-end justify-center bg-navy-950/70 p-4 backdrop-blur-sm sm:items-center"
              onClick={() => setOpen(false)}
              role="presentation"
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="register-dialog-title"
                onClick={(clickEvent) => clickEvent.stopPropagation()}
                className="relative max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
              >
                <div className="relative overflow-hidden bg-navy-950 px-6 pb-6 pt-6">
                  <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Tutup formulir pendaftaran"
                    className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                    Pendaftaran kegiatan
                  </p>
                  <h2
                    id="register-dialog-title"
                    className="relative mt-2 pr-10 font-display text-xl font-semibold leading-snug text-white"
                  >
                    {event.title}
                  </h2>
                  <div className="relative mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-white/60">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-gold-400" />
                      {formatDate(event.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold-400" />
                      {event.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold-400" />
                      {event.location}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[13px] leading-relaxed text-slate-600">
                    Isi nama lengkapmu. Pesan WhatsApp akan otomatis berisi nama
                    kegiatan, namamu, dan permintaan informasi pendaftaran.
                  </p>

                  <div className="mt-5">
                    <label htmlFor="registrant-name" className="field-label">
                      Nama lengkap <span className="text-royal-600">*</span>
                    </label>
                    <input
                      id="registrant-name"
                      type="text"
                      value={name}
                      onChange={(inputEvent) => {
                        setName(inputEvent.target.value);
                        if (error) setError("");
                      }}
                      placeholder="Contoh: Nadia Rahmadani"
                      className="input-field"
                      autoFocus
                    />
                    {error ? (
                      <p className="mt-2 text-xs font-medium text-red-600" role="alert">
                        {error}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-4">
                    <label htmlFor="registrant-note" className="field-label">
                      Catatan <span className="font-normal normal-case tracking-normal text-slate-400">(opsional)</span>
                    </label>
                    <textarea
                      id="registrant-note"
                      value={note}
                      onChange={(inputEvent) => setNote(inputEvent.target.value)}
                      rows={2}
                      placeholder="Contoh: Mahasiswa semester 3, ingin bertanya tentang kuota."
                      className="input-field resize-none"
                    />
                  </div>

                  <div className="mt-5 rounded-xl bg-mist px-4 py-3 text-[11.5px] leading-relaxed text-slate-500">
                    {event.registrationNote}
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClick}
                    className={cn(buttonClass("primary", "md"), "mt-5 w-full")}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Lanjut ke WhatsApp
                  </a>
                  <p className="mt-3 text-center text-[11px] text-slate-400">
                    Kamu akan diarahkan ke WhatsApp pengurus KSPM UNIPI.
                  </p>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
