# Folder CONTENT — Pusat Konten Website

Semua **teks dan data** website KSPM UNIPI ada di folder ini. Website tidak memakai admin panel, login, atau database. Cukup edit file, simpan, lalu perubahan tampil di website.

> Panduan langkah demi langkah: **`CONTENT-GUIDE.md`** di folder utama proyek.
> Panduan gambar: **`IMAGE-MANAGEMENT-GUIDE.md`**.
> Template siap salin: folder **`_templates/`**.

## Struktur

| Folder | File | Isi |
|---|---|---|
| `01-HOMEPAGE/` | `hero.ts` | Judul, deskripsi, gambar, dan tombol hero |
| | `about.ts` | Tentang organisasi, visi, misi, nilai, perjalanan |
| | `statistics.ts` | Angka statistik organisasi |
| | `sections.ts` | Judul tiap bagian homepage dan teks ticker |
| `02-LEADERSHIP/` | `team.ts` | Semua data pengurus dan teks halaman pengurus |
| `03-ARTICLES/` | `articles.ts` | Daftar & informasi artikel |
| | `posts/*.md` | Isi lengkap setiap artikel (satu file per artikel) |
| `04-GALLERY/` | `gallery.ts` | Album, foto, caption, dan urutan |
| `05-EVENTS/` | `events.ts` | Kegiatan dan status pendaftaran |
| `06-PROGRAMS/` | `programs.ts` | Program kerja dan keunggulannya |
| `07-TESTIMONIALS/` | `testimonials.ts` | Testimoni anggota |
| `08-SETTINGS/` | `contact.ts` | WhatsApp, email, alamat, logo, periode |
| | `social-media.ts` | Instagram dan grup WhatsApp |
| | `seo.ts` | Judul Google, deskripsi, kata kunci, gambar share |
| | `footer.ts` | Teks footer |
| | `labels.ts` | Teks tombol dan pesan umum |
| | `cta.ts` | Ajakan bergabung dan pesan WhatsApp |
| | `navigation.ts` | Menu navigasi |
| | `index.ts` | Menggabungkan semua pengaturan (jangan diedit) |
| `09-PAGES/` | `contact-page.ts`, `join-page.ts`, `not-found.ts` | Teks halaman kontak, bergabung, dan 404 |
| `_templates/` | contoh `.ts` dan `.md` | Template siap salin |
| `types.ts` | — | Bentuk data (dipakai program, jangan diubah) |

## Di mana gambar disimpan?

Next.js hanya menyajikan file gambar dari folder `public/`. Karena itu **semua gambar tetap disimpan satu kali** di:

```text
public/images/
├── articles/      -> thumbnail artikel
├── banners/       -> hero dan gambar tentang
├── events/        -> poster kegiatan
├── gallery/       -> foto khusus galeri
├── leadership/    -> foto pengurus
├── logo/          -> logo organisasi
└── programs/      -> foto program
```

Tidak ada folder gambar duplikat di dalam `CONTENT/`. Data di `CONTENT/` menyimpan **path** gambar, misalnya:

```ts
photo: "/images/leadership/raisa-aulia-nafisa.jpg";
```

Path selalu diawali `/images/...` agar bekerja di Netlify.

## Alur kerja singkat

1. Buka file kategori yang ingin diubah.
2. Salin template dari `_templates/` bila menambah data baru.
3. Simpan gambar di subfolder `public/images/` yang sesuai.
4. Simpan file dengan `Ctrl + S`.
5. Jalankan `npm run dev`, buka `http://localhost:3000`, lalu refresh.
6. Setelah puas, commit dan push ke GitHub. Netlify akan build ulang otomatis.

## Catatan penting

- **Jangan** menulis konten langsung di file komponen (`src/components` atau `src/app`).
- **Jangan** mengubah `types.ts` atau `08-SETTINGS/index.ts` kecuali diminta pengembang.
- Menghapus data dari array akan menghapusnya dari website. Hapus gambar hanya jika benar-benar tidak dipakai file lain.
- Artikel yang belum siap tayang cukup diberi `published: false`.
