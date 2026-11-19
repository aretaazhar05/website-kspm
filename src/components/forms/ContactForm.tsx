"use client";

import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { contactPage } from "@content/09-PAGES";
import { settings } from "@content/08-SETTINGS";
import { buildContactMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { buttonClass } from "@/components/ui/buttonStyles";

const topics = [
  "Pertanyaan umum",
  "Pendaftaran anggota",
  "Pendaftaran kegiatan",
  "Kolaborasi & kerja sama",
  "Lainnya",
];

const initialForm = {
  name: "",
  topic: topics[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  };

  const waUrl = buildWhatsAppUrl(settings.whatsapp, buildContactMessage(form));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setError("Nama dan pesan wajib diisi.");
      return;
    }

    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
      <p className="eyebrow">
        <span className="eyebrow-line" aria-hidden="true" />
        Formulir pesan
      </p>
      <h3 className="mt-3 font-display text-xl font-semibold text-navy-950">
        {contactPage.formTitle}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
        {contactPage.formDescription}
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="field-label">
              Nama <span className="text-royal-600">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Nama lengkap"
              className="input-field"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-topic" className="field-label">
              Topik
            </label>
            <select
              id="contact-topic"
              value={form.topic}
              onChange={(event) => update("topic", event.target.value)}
              className="input-field"
            >
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="field-label">
            Pesan <span className="text-royal-600">*</span>
          </label>
          <textarea
            id="contact-message"
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            rows={5}
            placeholder="Tulis pertanyaan atau kebutuhanmu di sini."
            className="input-field resize-none"
            required
          />
        </div>

        {error ? (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-xs font-medium text-red-700" role="alert">
            {error}
          </p>
        ) : null}

        <button type="submit" className={buttonClass("primary", "md", "w-full")}>
          <MessageCircle className="h-4 w-4" />
          Kirim lewat WhatsApp
        </button>

        {submitted ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-[12px] leading-relaxed text-emerald-800">
            WhatsApp seharusnya terbuka otomatis. Jika tidak,{" "}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold underline"
            >
              klik tautan ini
              <ArrowUpRight className="h-3 w-3" />
            </a>
            .
          </div>
        ) : null}
      </form>
    </div>
  );
}
