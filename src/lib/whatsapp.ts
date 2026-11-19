import type { EventItem } from "@content/types";
import { settings } from "@content/08-SETTINGS";
import { formatDate } from "./format";

export function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("0")) {
    return `62${digits.slice(1)}`;
  }

  if (digits.startsWith("8")) {
    return `62${digits}`;
  }

  return digits;
}

export function buildWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(message)}`;
}

export function getEventPhone(event: EventItem) {
  return event.whatsapp?.trim() ? event.whatsapp : settings.whatsapp;
}

export function buildEventMessage(event: EventItem, name: string, note?: string) {
  const lines = [
    "Halo KSPM UNIPI!",
    "",
    `Saya *${name}* ingin mendaftar kegiatan *${event.title}*.`,
    `Tanggal kegiatan: ${formatDate(event.date)}`,
    `Lokasi: ${event.location}`,
    "",
    "Mohon informasi mengenai pendaftaran, persyaratan, dan langkah selanjutnya.",
  ];

  if (note?.trim()) {
    lines.push("", `Catatan: ${note.trim()}`);
  }

  lines.push("", "Terima kasih!");

  return lines.join("\n");
}

export interface JoinFormData {
  name: string;
  nim: string;
  studyProgram: string;
  division: string;
  motivation: string;
}

export function buildJoinMessage(data: JoinFormData) {
  const lines = [
    "Halo KSPM UNIPI!",
    "",
    `Saya *${data.name}* ingin mendaftar sebagai anggota KSPM UNIPI.`,
    `NIM: ${data.nim}`,
    `Program studi: ${data.studyProgram}`,
    `Divisi yang diminati: ${data.division}`,
  ];

  if (data.motivation.trim()) {
    lines.push("", `Motivasi: ${data.motivation.trim()}`);
  }

  lines.push("", "Mohon informasi mengenai proses pendaftaran anggota baru. Terima kasih!");

  return lines.join("\n");
}

export interface ContactFormData {
  name: string;
  topic: string;
  message: string;
}

export function buildContactMessage(data: ContactFormData) {
  return [
    "Halo KSPM UNIPI!",
    "",
    `Nama: *${data.name}*`,
    `Topik: ${data.topic}`,
    "",
    data.message.trim(),
    "",
    "Terima kasih!",
  ].join("\n");
}
