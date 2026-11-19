"use client";

import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { joinPage } from "@content/09-PAGES";
import { settings } from "@content/08-SETTINGS";
import { buildJoinMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { buttonClass } from "@/components/ui/buttonStyles";

const initialForm = {
  name: "",
  nim: "",
  studyProgram: "",
  division: joinPage.divisions[0]?.value ?? "",
  motivation: "",
};

export function JoinForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  };

  const waUrl = buildWhatsAppUrl(settings.whatsapp, buildJoinMessage(form));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.nim.trim() || !form.studyProgram.trim()) {
      setError("Nama, NIM, dan program studi wajib diisi.");
      return;
    }

    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft sm:p-8">
      <div className="mb-6">
        <p className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          Pendaftaran
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold text-navy-950">
          {joinPage.formTitle}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
          {joinPage.formDescription}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="join-name" className="field-label">
            Nama lengkap <span className="text-royal-600">*</span>
          </label>
          <input
            id="join-name"
            type="text"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Nama lengkap kamu"
            className="input-field"
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="join-nim" className="field-label">
              NIM <span className="text-royal-600">*</span>
            </label>
            <input
              id="join-nim"
              type="text"
              value={form.nim}
              onChange={(event) => update("nim", event.target.value)}
              placeholder="Nomor induk mahasiswa"
              className="input-field"
              required
            />
          </div>
          <div>
            <label htmlFor="join-program" className="field-label">
              Program studi <span className="text-royal-600">*</span>
            </label>
            <input
              id="join-program"
              type="text"
              value={form.studyProgram}
              onChange={(event) => update("studyProgram", event.target.value)}
              placeholder="Contoh: Manajemen"
              className="input-field"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="join-division" className="field-label">
            Divisi yang diminati
          </label>
          <select
            id="join-division"
            value={form.division}
            onChange={(event) => update("division", event.target.value)}
            className="input-field"
          >
            {joinPage.divisions.map((division) => (
              <option key={division.value} value={division.value}>
                {division.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="join-motivation" className="field-label">
            Motivasi bergabung{" "}
            <span className="font-normal normal-case tracking-normal text-slate-400">
              (opsional)
            </span>
          </label>
          <textarea
            id="join-motivation"
            value={form.motivation}
            onChange={(event) => update("motivation", event.target.value)}
            rows={3}
            placeholder="Ceritakan singkat alasan kamu ingin bergabung."
            className="input-field resize-none"
          />
        </div>

        {error ? (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-xs font-medium text-red-700" role="alert">
            {error}
          </p>
        ) : null}

        <button type="submit" className={buttonClass("primary", "md", "w-full")}>
          <MessageCircle className="h-4 w-4" />
          Kirim via WhatsApp
        </button>

        <p className="text-center text-[11px] leading-relaxed text-slate-400">
          Data yang kamu isi hanya digunakan untuk keperluan pendaftaran anggota.
        </p>

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
