# Panduan Lengkap Mengelola Konten Website KSPM UNIPI

Panduan ini ditujukan untuk pengurus KSPM UNIPI yang mengelola isi website melalui **Qoder** atau **VS Code**, tanpa Admin Panel, tanpa login, dan tanpa database.

Semua **teks dan data** berada di folder `CONTENT/`. Semua **gambar** berada di `public/images/`. Cukup edit file, simpan, lalu lihat hasilnya.

> **Konsep penting:** website ini tidak memakai CMS. Tidak ada halaman admin. Perubahan dilakukan dengan mengedit file dan mengganti gambar, lalu menyimpan perubahan ke GitHub agar Netlify membangun ulang website.

---

## Daftar Isi

**Persiapan**
- [Cara menyimpan dan melihat hasil perubahan](#cara-menyimpan-dan-melihat-hasil-perubahan)
- [Aturan penting sebelum mengedit](#aturan-penting-sebelum-mengedit)

**15 Topik Utama**
1. [Struktur folder project](#1-struktur-folder-project)
2. [Mengubah judul dan deskripsi homepage](#2-mengubah-judul-dan-deskripsi-homepage)
3. [Mengganti logo dan banner](#3-mengganti-logo-dan-banner)
4. [Mengganti dan menambahkan foto Leadership Team](#4-mengganti-dan-menambahkan-foto-leadership-team)
5. [Menambahkan, mengedit, dan menghapus artikel](#5-menambahkan-mengedit-dan-menghapus-artikel)
6. [Mengganti thumbnail artikel](#6-mengganti-thumbnail-artikel)
7. [Membuat album galeri baru](#7-membuat-album-galeri-baru)
8. [Menambahkan dan menghapus foto galeri](#8-menambahkan-dan-menghapus-foto-galeri)
9. [Menambahkan kegiatan baru](#9-menambahkan-kegiatan-baru)
10. [Mengganti poster dan deskripsi kegiatan](#10-mengganti-poster-dan-deskripsi-kegiatan)
11. [Menambahkan program unggulan](#11-menambahkan-program-unggulan)
12. [Mengubah nomor WhatsApp admin](#12-mengubah-nomor-whatsapp-admin)
13. [Mengubah kontak dan media sosial](#13-mengubah-kontak-dan-media-sosial)
14. [Menjalankan website secara lokal](#14-menjalankan-website-secara-lokal)
15. [Deployment ke Netlify melalui GitHub](#15-deployment-ke-netlify-melalui-github)

**Bantuan**
- [Penamaan gambar yang disarankan](#penamaan-gambar-yang-disarankan)
- [Mengatasi gambar yang tidak muncul](#mengatasi-gambar-yang-tidak-muncul)
- [Mengatasi error build](#mengatasi-error-build)
- [Checklist sebelum push](#checklist-sebelum-push)
- [Dokumen terkait](#dokumen-terkait)

---

## Cara menyimpan dan melihat hasil perubahan

### 1. Menyimpan file

1. Buka file yang ingin diubah.
2. Lakukan perubahan.
3. Tekan `Ctrl + S` (Windows/Linux) atau `Cmd + S` (Mac).
4. Pastikan **semua** file yang diubah sudah disimpan. Perubahan artikel melibatkan dua file: `articles.ts` dan file `.md`.

### 2. Melihat hasil di komputer

Jalankan sekali di terminal folder project:

```bash
npm install
npm run dev
```

Lalu buka:

```text
http://localhost:3000
```

Setiap kali file disimpan, halaman akan diperbarui otomatis (hot reload). Jika belum berubah, tekan `Ctrl + Shift + R` untuk hard refresh.

### 3. Melihat hasil setelah online

1. Simpan perubahan.
2. Commit dan push ke GitHub (lihat [bagian 15](#15-deployment-ke-netlify-melalui-github)).
3. Netlify akan otomatis build ulang.
4. Buka URL website setelah status deploy **Published**.

### 4. Alur kerja singkat

```text
Edit file di CONTENT/
        +
Simpan gambar di public/images/
        ↓
Simpan (Ctrl + S)
        ↓
Lihat di http://localhost:3000
        ↓
Commit & push ke GitHub
        ↓
Netlify build otomatis
        ↓
Website online diperbarui
```

---

## Aturan penting sebelum mengedit

1. **Konten hanya di `CONTENT/`.** Jangan menulis teks konten di `src/app/` atau `src/components/`.
2. **Gambar hanya di `public/images/`.** Jangan membuat folder gambar di dalam `CONTENT/`.
3. **Path gambar selalu diawali `/images/...`.** Contoh: `/images/leadership/raisa-aulia-nafisa.jpg`.
4. **Jangan memakai path komputer.** Jangan menulis `C:\Users\...`, `file:///...`, atau `http://localhost`.
5. **Jangan mengubah `CONTENT/types.ts` dan `CONTENT/08-SETTINGS/index.ts`.** Keduanya hanya menghubungkan data, bukan tempat mengedit konten.
6. **Gunakan nama file huruf kecil dan tanda hubung.** Netlify berjalan di Linux yang membedakan huruf besar/kecil.
7. **Jangan menghapus gambar yang masih dipakai** di file data lain.
8. **Jangan menambah atau menghapus koma/kurung kurawal secara sembarangan** pada file `.ts`.
9. **Template siap salin** ada di `CONTENT/_templates/`. Folder ini tidak dibaca oleh website.

---

## 1. Struktur folder project

### 1.1 Gambaran folder utama

```text
website-kspm-unipi/
├── CONTENT/                        ← SEMUA TEKS DAN DATA
│   ├── 01-HOMEPAGE/
│   │   ├── hero.ts                 ← judul, deskripsi, banner, tombol hero
│   │   ├── about.ts                ← tentang, visi, misi, nilai, perjalanan
│   │   ├── statistics.ts           ← angka statistik
│   │   ├── sections.ts             ← judul tiap bagian homepage + ticker
│   │   └── intro.ts                ← teks dan pengaturan opening intro
│   ├── 02-LEADERSHIP/
│   │   └── team.ts                 ← daftar pengurus
│   ├── 03-ARTICLES/
│   │   ├── articles.ts             ← informasi artikel
│   │   └── posts/                  ← isi artikel, satu file .md per artikel
│   ├── 04-GALLERY/
│   │   └── gallery.ts              ← album, foto, caption, urutan
│   ├── 05-EVENTS/
│   │   └── events.ts               ← kegiatan dan status pendaftaran
│   ├── 06-PROGRAMS/
│   │   └── programs.ts             ← program kerja
│   ├── 07-TESTIMONIALS/
│   │   └── testimonials.ts         ← testimoni anggota
│   ├── 08-SETTINGS/
│   │   ├── contact.ts              ← WhatsApp, email, alamat, logo, periode
│   │   ├── social-media.ts         ← Instagram dan grup WhatsApp
│   │   ├── seo.ts                  ← judul Google, deskripsi, kata kunci
│   │   ├── footer.ts               ← teks footer
│   │   ├── labels.ts               ← teks tombol umum
│   │   ├── cta.ts                  ← ajakan bergabung + pesan WhatsApp
│   │   ├── navigation.ts           ← menu navigasi
│   │   └── index.ts                ← penggabung data (jangan diedit)
│   ├── 09-PAGES/
│   │   ├── contact-page.ts         ← teks halaman Kontak
│   │   ├── join-page.ts            ← teks halaman Bergabung
│   │   └── not-found.ts            ← teks halaman 404
│   ├── _templates/                 ← template siap salin (tidak dibaca website)
│   ├── README.md                   ← ringkasan folder CONTENT
│   └── types.ts                    ← bentuk data (jangan diedit)
│
├── public/
│   └── images/                     ← SEMUA GAMBAR
│       ├── articles/               ← thumbnail artikel
│       ├── banners/                ← banner hero dan halaman
│       ├── events/                 ← poster kegiatan
│       ├── gallery/                ← foto galeri
│       ├── leadership/             ← foto pengurus
│       ├── logo/                   ← logo organisasi
│       └── programs/               ← foto program
│
├── src/                            ← KODE TAMPILAN (tidak perlu diedit untuk konten)
├── CONTENT-GUIDE.md                ← panduan ini
├── QUICK-START.md                  ← panduan singkat
├── IMAGE-MANAGEMENT-GUIDE.md       ← panduan gambar lebih detail
├── NETLIFY-DEPLOYMENT-GUIDE.md     ← panduan deploy lebih detail
├── netlify.toml                    ← pengaturan build Netlify
├── next.config.mjs                 ← pengaturan Next.js
└── package.json                    ← daftar perintah npm
```

### 1.2 File mana untuk halaman mana?

| Halaman | Alamat | Sumber konten utama |
|---|---|---|
| Beranda | `/` | `01-HOMEPAGE/*`, `02-LEADERSHIP/team.ts`, `03-ARTICLES/articles.ts`, `04-GALLERY/gallery.ts`, `05-EVENTS/events.ts`, `06-PROGRAMS/programs.ts` |
| Tentang | `/tentang` | `01-HOMEPAGE/about.ts` |
| Pengurus | `/pengurus` | `02-LEADERSHIP/team.ts` |
| Program Kerja | `/program-kerja` | `06-PROGRAMS/programs.ts` |
| Kegiatan | `/kegiatan` | `05-EVENTS/events.ts` |
| Detail Kegiatan | `/kegiatan/<slug>` | `05-EVENTS/events.ts` |
| Artikel | `/artikel` | `03-ARTICLES/articles.ts` |
| Detail Artikel | `/artikel/<slug>` | `03-ARTICLES/articles.ts` + `03-ARTICLES/posts/<slug>.md` |
| Galeri | `/galeri` | `04-GALLERY/gallery.ts` |
| Kontak | `/kontak` | `08-SETTINGS/contact.ts`, `08-SETTINGS/social-media.ts`, `09-PAGES/contact-page.ts` |
| Bergabung | `/bergabung` | `08-SETTINGS/contact.ts`, `09-PAGES/join-page.ts` |

### 1.3 Mengapa gambar tidak ada di dalam CONTENT?

Next.js hanya menyajikan file gambar dari folder `public/`. Karena itu gambar disimpan **satu kali** di `public/images/`, sedangkan `CONTENT/` hanya menyimpan **path**-nya:

```ts
photo: "/images/leadership/raisa-aulia-nafisa.jpg";
```

Ini mencegah duplikasi gambar dan memastikan gambar tetap tampil di Netlify.

---

## 2. Mengubah judul dan deskripsi homepage

Ada dua jenis judul/deskripsi yang perlu dibedakan:

1. **Yang terlihat di halaman** (hero) → `CONTENT/01-HOMEPAGE/hero.ts`
2. **Yang muncul di tab browser dan Google** (SEO) → `CONTENT/08-SETTINGS/seo.ts`

### 2.1 Mengubah judul hero

**File:** `CONTENT/01-HOMEPAGE/hero.ts`

**Sebelum:**

```ts
export const hero: SiteSettings["hero"] = {
  eyebrow: "Kelompok Studi Pasar Modal - UNIPI",
  title: "Wadah Edukasi Pasar Modal untuk Mahasiswa UNIPI.",
  highlight: "Pasar Modal",
  description:
    "KSPM UNIPI membuka ruang belajar investasi, analisis saham, dan literasi keuangan melalui kelas, riset, serta simulasi trading yang aplikatif.",
  // ...
};
```

**Sesudah:**

```ts
export const hero: SiteSettings["hero"] = {
  eyebrow: "Kelompok Studi Pasar Modal - UNIPI",
  title: "Belajar Investasi Sejak Kuliah bersama KSPM UNIPI.",
  highlight: "Investasi",
  description:
    "KSPM UNIPI membantu mahasiswa UNIPI memahami saham, reksa dana, dan literasi keuangan melalui kelas, riset, serta simulasi trading yang ramah pemula.",
  // ...
};
```

Aturan `highlight`:

- `highlight` harus berupa **potongan teks yang sama persis** dengan bagian dari `title`.
- Huruf besar/kecil harus sama.
- Kata pada `highlight` akan diberi warna emas.
- Jika tidak ada kata yang cocok, judul tetap tampil tanpa warna emas.

### 2.2 Mengubah deskripsi hero

Ubah nilai `description` pada file yang sama. Tulis 1–2 kalimat karena ruang di bawah judul terbatas. Teks ini hanya tampil di hero beranda. Untuk deskripsi yang muncul di hasil pencarian Google, ubah `description` di `CONTENT/08-SETTINGS/seo.ts` (file ini juga disebut pada bagian 13.3).

**Sebelum:**

```ts
description:
  "KSPM UNIPI membuka ruang belajar investasi, analisis saham, dan literasi keuangan melalui kelas, riset, serta simulasi trading yang aplikatif.",
```

**Sesudah:**

```ts
description:
  "Komunitas mahasiswa UNIPI untuk belajar pasar modal dari dasar, berlatih analisis, dan memahami risiko investasi dengan pendampingan pengurus.",
```

### 2.3 Mengubah judul dan deskripsi untuk Google

**File:** `CONTENT/08-SETTINGS/seo.ts`

**Sebelum:**

```ts
export const seo: SeoContent = {
  title: "KSPM UNIPI — Wadah Edukasi Pasar Modal Mahasiswa",
  titleTemplate: "%s — KSPM UNIPI",
  description:
    "KSPM UNIPI membuka ruang belajar investasi, analisis saham, dan literasi keuangan melalui kelas, riset, serta simulasi trading yang aplikatif.",
  // ...
};
```

**Sesudah:**

```ts
export const seo: SeoContent = {
  title: "KSPM UNIPI — Komunitas Investasi Mahasiswa UNIPI",
  titleTemplate: "%s — KSPM UNIPI",
  description:
    "Website resmi KSPM UNIPI: informasi pengurus, program kerja, kegiatan, artikel edukasi pasar modal, dan pendaftaran anggota baru.",
  // ...
};
```

Jangan mengubah `titleTemplate` kecuali diminta pengembang. `%s` akan diganti otomatis dengan judul halaman.

### 2.4 Menyimpan dan melihat hasil

1. Tekan `Ctrl + S` pada file yang diubah.
2. Buka `http://localhost:3000`.
3. Refresh halaman.
4. Untuk SEO, buka tab browser dan lihat judulnya. Perubahan di Google memerlukan waktu (tidak instan).

---

## 3. Mengganti logo dan banner

### 3.1 Mengganti logo organisasi

Logo dipakai di navbar, footer, favicon, dan data SEO. Semua lokasi tersebut membaca nilai `logo` yang sama di `CONTENT/08-SETTINGS/contact.ts`, jadi cukup mengganti satu nilai atau satu file.

Opening intro memakai konfigurasi logonya sendiri di `CONTENT/01-HOMEPAGE/intro.ts` agar tidak mengubah tampilan navbar maupun footer.

**File pengaturan:** `CONTENT/08-SETTINGS/contact.ts`
**Folder gambar:** `public/images/logo/`

**Nilai saat ini:**

```ts
logo: "/images/logo/logo-kspm.svg",
```

**Mengganti logo navbar, footer, dan favicon:**

1. Simpan logo baru di `public/images/logo/`, misalnya `logo-kspm-2026.svg`.
2. Buka `CONTENT/08-SETTINGS/contact.ts`.
3. Ubah nilai `logo` menjadi `/images/logo/logo-kspm-2026.svg`.
4. Simpan file, lalu refresh halaman.

**Mengganti logo pada opening intro:**

Opening intro memakai logo resmi pada path berikut:

```ts
// CONTENT/01-HOMEPAGE/intro.ts
logo: "/images/logo/kspm-unipi.png",
fallbackLogo: contact.logo,
```

Selama file `public/images/logo/kspm-unipi.png` belum tersedia, intro otomatis memakai `fallbackLogo`. Cukup letakkan file logo resmi di path tersebut agar intro memakai logo resmi tanpa mengubah kode.

**Catatan penting:** jangan menggambar ulang logo atau mengubah proporsinya. Jika logo punya latar putih, biarkan latarnya tetap ada; intro menempatkan logo di dalam alas putih agar detail tetap jelas di latar gelap.

**Opening intro:** intro adalah lapisan (overlay) terpisah dari homepage. Logo tampil di tengah layar pada Scene 2 dengan glow gold dan animasi scale-up/fade-in. Total durasi sekitar 8 detik, hanya muncul sekali per sesi browser pada pembukaan pertama, dan bisa dilewati lewat tombol **Lewati Intro** atau tombol `Esc`. Pengguna dengan pengaturan *reduced motion* melihat versi tanpa animasi.

**Catatan:**

- Jika favicon belum berubah, tutup tab lalu buka kembali, atau hard refresh (`Ctrl + Shift + R`).
- Jangan menghapus logo lama sebelum yakin tidak dipakai.

### 3.2 Mengganti banner hero dan banner halaman

Ada dua gambar di hero:

| Field | Lokasi file | Fungsi |
|---|---|---|
| `background` | `public/images/banners/hero-bg.jpg` | Latar gelap hero **dan** banner semua halaman |
| `image` | `public/images/banners/hero-students.jpg` | Foto utama di sisi kanan homepage |

**File:** `CONTENT/01-HOMEPAGE/hero.ts`

**Sebelum:**

```ts
background: "/images/banners/hero-bg.jpg",
image: "/images/banners/hero-students.jpg",
imageAlt:
  "Mahasiswa KSPM UNIPI berdiskusi mengenai pasar modal di ruang kelas",
```

**Sesudah:**

```ts
background: "/images/banners/hero-bg-2026.jpg",
image: "/images/banners/hero-students-2026.jpg",
imageAlt:
  "Anggota KSPM UNIPI mengikuti kelas pasar modal di kampus UNIPI",
```

**Langkah:**

1. Simpan gambar baru di `public/images/banners/`.
2. Buka `CONTENT/01-HOMEPAGE/hero.ts`.
3. Ubah `background` dan/atau `image` sesuai nama file baru.
4. Sesuaikan `imageAlt` agar menjelaskan isi foto.
5. Simpan dan refresh homepage.

**Mengganti foto tentang:** file `CONTENT/01-HOMEPAGE/about.ts` juga memakai foto sendiri:

```ts
image: "/images/banners/hero-students.jpg",
imageAlt: "Anggota KSPM UNIPI mengikuti sesi diskusi pasar modal",
```

Jika ingin foto halaman Tentang berbeda, ubah `image` ke file lain, misalnya `/images/banners/tentang-2026.jpg`.

### 3.3 Ukuran gambar yang disarankan

| Jenis gambar | Folder | Rasio | Ukuran disarankan |
|---|---|---|---|
| Banner latar hero/halaman | `public/images/banners/` | 16:9 | 1920 × 1080 |
| Foto utama hero | `public/images/banners/` | ±4:4,6 | 1000 × 1150 |
| Logo | `public/images/logo/` | 1:1 | 512 × 512 |
| Foto pengurus | `public/images/leadership/` | 4:5 | 800 × 1000 |
| Thumbnail artikel | `public/images/articles/` | 16:10 | 1600 × 1000 |
| Poster kegiatan | `public/images/events/` | 16:10 | 1600 × 1000 |
| Foto program | `public/images/programs/` | 16:10 | 1600 × 1000 |
| Foto galeri | `public/images/gallery/` | 4:3 atau bebas | 1600 × 1200 |

Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg` (khusus logo). Utamakan `.webp` atau `.jpg` yang sudah dikompres agar website cepat.

---

## 4. Mengganti dan menambahkan foto Leadership Team

**File:** `CONTENT/02-LEADERSHIP/team.ts`
**Gambar:** `public/images/leadership/`

### 4.1 Mengganti foto pengurus

**Sebelum:**

```ts
{
  id: "raisa-aulia-nafisa",
  name: "Raisa Aulia Nafisa",
  role: "Ketua Umum",
  division: "Inti",
  photo: "/images/leadership/raisa-aulia-nafisa.jpg",
  period: "2025/2026",
  order: 1,
  // ...
},
```

**Sesudah:**

```ts
{
  id: "raisa-aulia-nafisa",
  name: "Raisa Aulia Nafisa",
  role: "Ketua Umum",
  division: "Inti",
  photo: "/images/leadership/raisa-aulia-nafisa-2026.jpg",
  period: "2025/2026",
  order: 1,
  // ...
},
```

**Langkah:**

1. Siapkan foto potret dengan rasio 4:5 (disarankan 800 × 1000 piksel).
2. Simpan di `public/images/leadership/` dengan nama huruf kecil, misalnya `raisa-aulia-nafisa-2026.jpg`.
3. Buka `CONTENT/02-LEADERSHIP/team.ts`.
4. Cari blok pengurus yang ingin diubah.
5. Ubah nilai `photo` menjadi path file baru.
6. Simpan dan buka `/pengurus`.

**Cara termudah:** timpa file lama dengan nama yang sama. Tidak perlu mengubah kode, tetapi browser mungkin menyimpan cache; lakukan hard refresh.

### 4.2 Menambahkan pengurus baru

**Sebelum (akhir array):**

```ts
  {
    id: "aditya-nugraha",
    name: "Aditya Nugraha",
    // ...
    order: 8,
  },
];
```

**Sesudah:**

```ts
  {
    id: "aditya-nugraha",
    name: "Aditya Nugraha",
    // ...
    order: 8,
  },
  {
    id: "nama-lengkap-pengurus",
    name: "Nama Lengkap Pengurus",
    role: "Kepala Divisi Contoh",
    division: "Divisi Contoh",
    photo: "/images/leadership/nama-lengkap-pengurus.jpg",
    period: "2025/2026",
    order: 9,
    bio: "Tuliskan satu atau dua kalimat tentang tugas dan peran pengurus ini.",
    instagram: "https://www.instagram.com/username/",
  },
];
```

**Langkah:**

1. Salin blok pengurus dari `CONTENT/_templates/template-leadership.ts`.
2. Tempel di dalam array `leaders`, sebelum penutup `];`.
3. Ganti `id` (harus unik), `name`, `role`, `division`, `photo`, `period`, `order`, `bio`.
4. Simpan foto di `public/images/leadership/`.
5. Simpan file dan buka `/pengurus`.

**Keterangan field:**

| Field | Arti |
|---|---|
| `id` | Penanda unik, tidak boleh sama dengan pengurus lain |
| `name` | Nama lengkap |
| `role` | Jabatan |
| `division` | Divisi; nama divisi baru otomatis muncul di filter |
| `photo` | Path foto, diawali `/images/leadership/` |
| `period` | Periode kepengurusan, misalnya `2025/2026` |
| `order` | Urutan tampil; angka kecil lebih dulu |
| `bio` | Deskripsi singkat |
| `instagram` | URL Instagram (opsional) |

Homepage menampilkan 4 pengurus pertama sesuai `order`. Halaman `/pengurus` menampilkan semua pengurus.

### 4.3 Menghapus pengurus

**Sebelum:**

```ts
  {
    id: "nama-yang-dihapus",
    name: "Nama yang Dihapus",
    role: "Anggota",
    // ...
    order: 10,
  },
];
```

**Sesudah:**

```ts
];
```

**Langkah:**

1. Hapus satu blok `{ ... },` dari array `leaders`.
2. Jangan menghapus tanda `[` dan `]` milik array.
3. Hapus foto hanya jika tidak dipakai di tempat lain.
4. Simpan dan cek `/pengurus`.

---

## 5. Menambahkan, mengedit, dan menghapus artikel

Artikel terdiri dari **dua bagian**:

1. **Informasi artikel** → `CONTENT/03-ARTICLES/articles.ts`
2. **Isi lengkap artikel** → `CONTENT/03-ARTICLES/posts/<slug>.md`

### 5.1 Menambahkan artikel baru

**Langkah:**

1. Tentukan `slug`, misalnya `investasi-untuk-mahasiswa`.
2. Buka `CONTENT/03-ARTICLES/articles.ts`.
3. Tambahkan satu blok artikel di dalam array `articles`.
4. Buat file baru `CONTENT/03-ARTICLES/posts/investasi-untuk-mahasiswa.md`.
5. Simpan thumbnail di `public/images/articles/`.
6. Simpan semua file.
7. Buka `/artikel` dan `/artikel/investasi-untuk-mahasiswa`.

**Sebelum (akhir array):**

```ts
  {
    id: "saham-syariah",
    slug: "saham-syariah-prinsip-dan-peluang-investasi-etis",
    // ...
    published: true,
  },
];
```

**Sesudah:**

```ts
  {
    id: "saham-syariah",
    slug: "saham-syariah-prinsip-dan-peluang-investasi-etis",
    // ...
    published: true,
  },
  {
    id: "investasi-untuk-mahasiswa",
    slug: "investasi-untuk-mahasiswa",
    title: "Investasi untuk Mahasiswa: Mulai dari Mana?",
    category: "Edukasi",
    thumbnail: "/images/articles/investasi-mahasiswa.jpg",
    date: "2026-12-01",
    excerpt:
      "Panduan sederhana memulai investasi bagi mahasiswa, dari menyiapkan dana darurat hingga memilih instrumen pertama.",
    author: "Nama Penulis",
    authorRole: "Divisi Edukasi & Riset",
    readMinutes: 5,
    published: true,
    featured: false,
  },
];
```

**Isi file `posts/investasi-untuk-mahasiswa.md`:**

```md
Memulai investasi tidak harus menunggu punya penghasilan besar. Yang paling penting adalah memahami tujuan dan risiko sejak awal.

## Mulai dari tujuan

Tentukan lebih dulu apa yang ingin dicapai, misalnya:

- Memahami cara kerja saham
- Menyiapkan dana darurat
- Belajar mengelola risiko

## Langkah pertama

1. Sisihkan dana darurat.
2. Pelajari instrumen yang dipilih.
3. Mulai dari nominal kecil.
4. Evaluasi secara berkala.

> Investasi terbaik adalah investasi yang dipahami, bukan yang sedang ramai dibicarakan.

## Penutup

Mulailah dari langkah kecil dan konsisten. Diskusikan rencanamu bersama pengurus atau anggota KSPM UNIPI.
```

**Keterangan field artikel:**

| Field | Arti |
|---|---|
| `id` | Penanda unik artikel |
| `slug` | Alamat URL; harus sama dengan nama file `.md` |
| `title` | Judul artikel |
| `category` | Kategori; kategori baru otomatis muncul sebagai filter |
| `thumbnail` | Path gambar, diawali `/images/articles/` |
| `date` | Tanggal format `YYYY-MM-DD`; menentukan urutan terbaru |
| `excerpt` | Ringkasan yang tampil di kartu artikel |
| `author` | Nama penulis |
| `authorRole` | Jabatan penulis |
| `readMinutes` | Perkiraan waktu baca dalam menit |
| `published` | `true` tampil, `false` disembunyikan |
| `featured` | Opsional; artikel unggulan di halaman artikel |

**Format Markdown yang didukung:**

- Paragraf dipisahkan satu baris kosong.
- Judul bagian dengan `## Judul Bagian`.
- Daftar poin dengan `- `.
- Daftar bernomor dengan `1. `, `2. `, dst.
- Kutipan dengan `> `.
- Teks tebal dengan `**dua bintang**`.

> Gambar dan tautan di dalam isi `.md` belum didukung oleh penampil artikel. Gunakan `thumbnail` untuk gambar utama artikel.

### 5.2 Mengedit artikel

**File:** `CONTENT/03-ARTICLES/articles.ts` dan `CONTENT/03-ARTICLES/posts/<slug>.md`

**Sebelum:**

```ts
title: "Investasi untuk Mahasiswa: Mulai dari Mana?",
excerpt:
  "Panduan sederhana memulai investasi bagi mahasiswa, dari menyiapkan dana darurat hingga memilih instrumen pertama.",
```

**Sesudah:**

```ts
title: "Investasi untuk Mahasiswa: Langkah Awal yang Aman",
excerpt:
  "Panduan terbaru memulai investasi bagi mahasiswa, lengkap dengan urutan langkah dan tips mengelola risiko.",
```

Lalu edit isi `.md` sesuai kebutuhan.

**Catatan penting:** jika mengubah `slug`, **ganti juga nama file `.md`** agar sama. Alamat lama akan menjadi 404, jadi hindari mengubah slug artikel yang sudah dibagikan.

### 5.3 Menghapus artikel

**Sebelum:**

```ts
  {
    id: "investasi-untuk-mahasiswa",
    slug: "investasi-untuk-mahasiswa",
    title: "Investasi untuk Mahasiswa: Mulai dari Mana?",
    // ...
    published: true,
  },
];
```

**Sesudah:**

```ts
];
```

**Langkah:**

1. Hapus blok artikel dari array `articles`.
2. Hapus file `CONTENT/03-ARTICLES/posts/investasi-untuk-mahasiswa.md`.
3. Hapus thumbnail hanya jika tidak dipakai artikel lain.
4. Simpan dan cek `/artikel`.

**Cara aman sementara:** ubah `published: true` menjadi `published: false`. Artikel langsung hilang dari website, tetapi datanya tetap tersimpan dan bisa ditayangkan lagi nanti.

---

## 6. Mengganti thumbnail artikel

**File:** `CONTENT/03-ARTICLES/articles.ts`
**Gambar:** `public/images/articles/`

**Sebelum:**

```ts
thumbnail: "/images/articles/investasi-mahasiswa.jpg",
```

**Sesudah:**

```ts
thumbnail: "/images/articles/investasi-mahasiswa-2027.jpg",
```

**Langkah:**

1. Siapkan gambar lanskap 16:10 (disarankan 1600 × 1000 piksel).
2. Simpan di `public/images/articles/` dengan nama deskriptif.
3. Buka `CONTENT/03-ARTICLES/articles.ts`.
4. Cari artikel terkait dan ubah nilai `thumbnail`.
5. Simpan dan buka `/artikel`.

**Tips:**

- Gunakan gambar yang masih jelas saat dipotong, karena kartu artikel memakai `object-cover`.
- Jika hanya mengganti isi gambar, timpa file lama dengan nama yang sama agar tidak perlu mengubah kode.
- Thumbnail yang sama juga dipakai sebagai gambar saat artikel dibagikan ke media sosial.

---

## 7. Membuat album galeri baru

**File:** `CONTENT/04-GALLERY/gallery.ts`
**Gambar:** `public/images/gallery/`

Di website, galeri menampilkan **semua foto dari semua album**. Nilai `album` menjadi label filter, sedangkan `title` menjadi nama album yang tampil pada foto.

**Langkah:**

1. Siapkan minimal satu foto untuk album baru.
2. Simpan foto di `public/images/gallery/`.
3. Buka `CONTENT/04-GALLERY/gallery.ts`.
4. Tempel blok album baru di dalam array `albumList`, sebelum `];`.
5. Isi `id`, `title`, `album`, `date`, `cover`, `description`, `order`, dan `images`.
6. Simpan dan buka `/galeri`.

**Sebelum (penutup array):**

```ts
  {
    id: "stock-trading-competition-2026",
    title: "Stock Trading Competition 2026",
    // ...
    order: 5,
  },
];
```

**Sesudah:**

```ts
  {
    id: "stock-trading-competition-2026",
    title: "Stock Trading Competition 2026",
    // ...
    order: 5,
  },
  {
    id: "seminar-nasional-2027",
    title: "Seminar Nasional Investasi 2027",
    album: "Seminar",
    date: "2027-03-15",
    cover: "/images/gallery/seminar-nasional-2027-01.jpg",
    description:
      "Dokumentasi seminar nasional bersama praktisi pasar modal dan peserta dari berbagai kampus.",
    order: 6,
    images: [
      {
        src: "/images/gallery/seminar-nasional-2027-01.jpg",
        alt: "Peserta mengikuti seminar nasional investasi 2027",
        caption: "Peserta mengikuti sesi pembukaan seminar.",
        order: 1,
      },
      {
        src: "/images/gallery/seminar-nasional-2027-02.jpg",
        alt: "Narasumber menyampaikan materi di atas panggung",
        caption: "Narasumber menyampaikan materi tentang pasar modal.",
        order: 2,
      },
    ],
  },
];
```

**Keterangan field album:**

| Field | Arti |
|---|---|
| `id` | Penanda unik album |
| `title` | Nama album yang tampil pada foto |
| `album` | Label filter, misalnya `Seminar`, `Edukasi`, `Internal` |
| `date` | Tanggal kegiatan format `YYYY-MM-DD` |
| `cover` | Path foto sampul album; wajib diisi sebagai metadata, tetapi tampilan galeri saat ini memakai foto dari `images` |
| `description` | Deskripsi singkat album |
| `order` | Urutan album; angka kecil lebih dulu |
| `images` | Daftar foto album |

Setiap foto wajib punya `src`, `alt`, `caption`, dan `order`.

---

## 8. Menambahkan dan menghapus foto galeri

**File:** `CONTENT/04-GALLERY/gallery.ts`
**Gambar:** `public/images/gallery/`

### 8.1 Menambahkan foto ke album

**Sebelum:**

```ts
    images: [
      {
        src: "/images/gallery/seminar-nasional-2027-01.jpg",
        alt: "Peserta mengikuti seminar nasional investasi 2027",
        caption: "Peserta mengikuti sesi pembukaan seminar.",
        order: 1,
      },
      {
        src: "/images/gallery/seminar-nasional-2027-02.jpg",
        alt: "Narasumber menyampaikan materi di atas panggung",
        caption: "Narasumber menyampaikan materi tentang pasar modal.",
        order: 2,
      },
    ],
```

**Sesudah:**

```ts
    images: [
      {
        src: "/images/gallery/seminar-nasional-2027-01.jpg",
        alt: "Peserta mengikuti seminar nasional investasi 2027",
        caption: "Peserta mengikuti sesi pembukaan seminar.",
        order: 1,
      },
      {
        src: "/images/gallery/seminar-nasional-2027-02.jpg",
        alt: "Narasumber menyampaikan materi di atas panggung",
        caption: "Narasumber menyampaikan materi tentang pasar modal.",
        order: 2,
      },
      {
        src: "/images/gallery/seminar-nasional-2027-03.jpg",
        alt: "Peserta berdiskusi dalam sesi tanya jawab",
        caption: "Sesi tanya jawab bersama peserta seminar.",
        order: 3,
      },
    ],
```

**Langkah:**

1. Simpan foto baru di `public/images/gallery/` dengan nama deskriptif.
2. Buka album terkait di `gallery.ts`.
3. Salin satu blok foto di dalam `images`.
4. Ganti `src`, `alt`, `caption`, dan `order`.
5. Gunakan `order` berikutnya (misalnya 3, 4, 5) agar urutan benar.
6. Simpan dan buka `/galeri`.

Foto pertama dalam hasil filter akan tampil lebih besar (2 × 2), jadi pilih foto pembuka yang paling representatif.

### 8.2 Menghapus foto dari album

**Sebelum:**

```ts
      {
        src: "/images/gallery/seminar-nasional-2027-02.jpg",
        alt: "Narasumber menyampaikan materi di atas panggung",
        caption: "Narasumber menyampaikan materi tentang pasar modal.",
        order: 2,
      },
      {
        src: "/images/gallery/seminar-nasional-2027-03.jpg",
        alt: "Peserta berdiskusi dalam sesi tanya jawab",
        caption: "Sesi tanya jawab bersama peserta seminar.",
        order: 3,
      },
    ],
```

**Sesudah:**

```ts
      {
        src: "/images/gallery/seminar-nasional-2027-03.jpg",
        alt: "Peserta berdiskusi dalam sesi tanya jawab",
        caption: "Sesi tanya jawab bersama peserta seminar.",
        order: 3,
      },
    ],
```

**Langkah:**

1. Hapus satu blok `{ ... },` di dalam `images`.
2. Pastikan koma di blok terakhir yang tersisa tetap benar.
3. Jangan menghapus `]` penutup array `images`.
4. Hapus file gambar hanya jika tidak dipakai album lain.
5. Simpan dan cek `/galeri`.

Jika semua foto di sebuah album dihapus, hapus juga blok album tersebut agar data tetap rapi.

---

## 9. Menambahkan kegiatan baru

**File:** `CONTENT/05-EVENTS/events.ts`
**Gambar:** `public/images/events/`

Setiap kegiatan otomatis mendapat halaman detail di `/kegiatan/<slug>` dan masuk sitemap website.

**Langkah:**

1. Tentukan `slug`, misalnya `workshop-analisis-teknikal-2027`.
2. Simpan poster di `public/images/events/`.
3. Buka `CONTENT/05-EVENTS/events.ts`.
4. Tempel blok kegiatan baru di dalam array `events`.
5. Isi semua field wajib.
6. Simpan dan buka `/kegiatan`, lalu klik kegiatan baru.

**Sebelum (akhir array):**

```ts
  {
    id: "sekolah-pasar-modal-batch-2",
    slug: "sekolah-pasar-modal-batch-2",
    // ...
    order: 5,
  },
];
```

**Sesudah:**

```ts
  {
    id: "sekolah-pasar-modal-batch-2",
    slug: "sekolah-pasar-modal-batch-2",
    // ...
    order: 5,
  },
  {
    id: "workshop-analisis-teknikal-2027",
    slug: "workshop-analisis-teknikal-2027",
    title: "Workshop Analisis Teknikal 2027",
    category: "Workshop",
    description:
      "Belajar membaca grafik harga, menentukan titik masuk, dan mengelola risiko secara praktis.",
    content: [
      "Workshop Analisis Teknikal 2027 dirancang untuk anggota yang ingin memahami cara membaca pergerakan harga saham.",
      "Peserta akan berlatih menggunakan studi kasus nyata dan menyusun rencana trading sederhana.",
      "Kegiatan terbuka untuk anggota aktif KSPM UNIPI dengan kuota terbatas.",
    ],
    poster: "/images/events/workshop-teknikal-2027.jpg",
    date: "2027-02-20",
    time: "09.00 - 15.00 WIB",
    location: "Lab Komputer Kampus UNIPI, Tangerang",
    status: "open",
    statusLabel: "Pendaftaran Dibuka",
    registrationNote: "Pendaftaran dibuka hingga 15 Februari 2027.",
    quota: "60 peserta",
    agenda: [
      { time: "09.00", title: "Registrasi peserta" },
      { time: "09.30", title: "Pembukaan dan sambutan" },
      { time: "10.00", title: "Materi analisis teknikal" },
      { time: "14.30", title: "Penutupan" },
    ],
    featured: false,
    order: 6,
  },
];
```

**Status kegiatan:**

| Status | Arti | Tampil di |
|---|---|---|
| `open` | Pendaftaran dibuka | Kegiatan mendatang |
| `closing-soon` | Pendaftaran segera ditutup | Kegiatan mendatang |
| `closed` | Pendaftaran ditutup | Arsip kegiatan |
| `completed` | Kegiatan sudah selesai | Arsip kegiatan |

**Catatan:**

- `whatsapp` **opsional**. Isi jika nomor panitia berbeda dari nomor utama, contoh `whatsapp: "6289876543210"`.
- `registrationNote` tampil sebagai keterangan pendaftaran.
- `agenda` menentukan susunan acara di halaman detail.
- `order` menentukan urutan tampil dalam kelompoknya.
- `featured` masih ada di tipe data, tetapi belum dipakai pada tampilan kegiatan. Cukup isi `false`; sorotan kegiatan diatur lewat `order` dan status.

---

## 10. Mengganti poster dan deskripsi kegiatan

**File:** `CONTENT/05-EVENTS/events.ts`
**Gambar:** `public/images/events/`

### 10.1 Mengganti poster

**Sebelum:**

```ts
poster: "/images/events/workshop-teknikal-2027.jpg",
```

**Sesudah:**

```ts
poster: "/images/events/workshop-teknikal-2027-revisi.jpg",
```

**Langkah:**

1. Simpan poster baru di `public/images/events/`.
2. Buka kegiatan terkait di `events.ts`.
3. Ubah nilai `poster`.
4. Simpan dan buka `/kegiatan` serta halaman detail kegiatan.

Poster juga dipakai sebagai gambar saat halaman kegiatan dibagikan ke media sosial.

### 10.2 Mengganti deskripsi singkat

`description` tampil di kartu kegiatan dan di bagian atas halaman detail.

**Sebelum:**

```ts
description:
  "Belajar membaca grafik harga, menentukan titik masuk, dan mengelola risiko secara praktis.",
```

**Sesudah:**

```ts
description:
  "Workshop praktis untuk membaca tren harga saham, menentukan titik masuk, dan menyusun rencana pengelolaan risiko.",
```

### 10.3 Mengganti isi lengkap kegiatan

`content` berisi paragraf-paragraf yang tampil di halaman detail.

**Sebelum:**

```ts
content: [
  "Workshop Analisis Teknikal 2027 dirancang untuk anggota yang ingin memahami cara membaca pergerakan harga saham.",
  "Peserta akan berlatih menggunakan studi kasus nyata dan menyusun rencana trading sederhana.",
  "Kegiatan terbuka untuk anggota aktif KSPM UNIPI dengan kuota terbatas.",
],
```

**Sesudah:**

```ts
content: [
  "Workshop Analisis Teknikal 2027 membahas cara membaca tren harga, level support dan resistance, serta penggunaan indikator sederhana.",
  "Peserta berlatih dengan studi kasus saham nyata dan menyusun rencana trading yang disiplin.",
  "Kegiatan diperuntukkan bagi anggota aktif KSPM UNIPI. Kuota dibatasi agar pendampingan berjalan efektif.",
],
```

Simpan file, lalu cek `/kegiatan/<slug>`.

---

## 11. Menambahkan program unggulan

**File:** `CONTENT/06-PROGRAMS/programs.ts`
**Gambar:** `public/images/programs/`

Program ditambahkan ke array `programList`. Halaman `/program-kerja` menampilkan semua program dengan `visible: true`, dan homepage menampilkan maksimal 3 program pertama sesuai `order`.

**Sebelum (akhir array):**

```ts
  {
    id: "kunjungan-bursa",
    slug: "kunjungan-bursa",
    // ...
    order: 4,
  },
];
```

**Sesudah:**

```ts
  {
    id: "kunjungan-bursa",
    slug: "kunjungan-bursa",
    // ...
    order: 4,
  },
  {
    id: "kelas-analisis-laporan-keuangan",
    slug: "kelas-analisis-laporan-keuangan",
    title: "Kelas Analisis Laporan Keuangan",
    description:
      "Kelas praktik membaca laporan keuangan dan menilai kesehatan perusahaan.",
    longDescription:
      "Kelas Analisis Laporan Keuangan membantu anggota memahami komponen laporan keuangan, menghitung rasio penting, dan menilai apakah sebuah perusahaan layak dipantau lebih lanjut.",
    image: "/images/programs/analisis-laporan-keuangan.jpg",
    category: "Edukasi",
    visible: true,
    order: 5,
    highlights: [
      "Membaca laba rugi, neraca, dan arus kas",
      "Menghitung rasio profitabilitas dan solvabilitas",
      "Studi kasus emiten pilihan",
    ],
    schedule: "Empat pertemuan setiap semester",
  },
];
```

**Keterangan field program:**

| Field | Arti |
|---|---|
| `id` | Penanda unik program |
| `slug` | Penanda bagian program; dipakai sebagai `id` bagian di `/program-kerja` dan target tautan `/program-kerja#<slug>` |
| `title` | Nama program |
| `description` | Ringkasan singkat |
| `longDescription` | Penjelasan lengkap di halaman program |
| `image` | Path gambar, diawali `/images/programs/` |
| `category` | Kategori; kategori baru otomatis muncul di filter |
| `visible` | `true` tampil, `false` disembunyikan |
| `order` | Urutan tampil; angka kecil lebih dulu |
| `highlights` | Daftar keunggulan program |
| `schedule` | Jadwal atau frekuensi program |

**Langkah:**

1. Salin template dari `CONTENT/_templates/template-program.ts`.
2. Tempel di dalam `programList`, sebelum `];`.
3. Isi semua field dan simpan gambar.
4. Simpan file.
5. Buka `/program-kerja` dan homepage.

---

## 12. Mengubah nomor WhatsApp admin

Nomor WhatsApp utama dipakai oleh tombol pendaftaran, halaman kontak, halaman bergabung, dan footer.

**File:** `CONTENT/08-SETTINGS/contact.ts`

**Sebelum:**

```ts
whatsapp: "6281234567890",
whatsappDisplay: "+62 812-3456-7890",
```

**Sesudah:**

```ts
whatsapp: "6289876543210",
whatsappDisplay: "+62 898-7654-3210",
```

**Aturan penulisan:**

| Field | Aturan | Contoh benar | Contoh salah |
|---|---|---|---|
| `whatsapp` | Hanya angka, diawali `62`, tanpa `+`, spasi, atau tanda hubung | `6289876543210` | `+62 898-7654-3210` |
| `whatsappDisplay` | Teks yang dilihat pengunjung | `+62 898-7654-3210` | `0898-7654-3210` |

**Langkah:**

1. Buka `CONTENT/08-SETTINGS/contact.ts`.
2. Ubah `whatsapp` dan `whatsappDisplay` agar keduanya cocok.
3. Simpan.
4. Buka `/kegiatan`, klik **Daftar via WhatsApp**.
5. Pastikan aplikasi WhatsApp terbuka dengan nomor tujuan yang benar.

**Nomor khusus satu kegiatan:** isi field `whatsapp` pada kegiatan terkait di `CONTENT/05-EVENTS/events.ts`. Jika field ini diisi, nomor tersebut mengalahkan nomor utama.

**Pesan otomatis:** teks pesan pendaftaran diatur di `CONTENT/08-SETTINGS/cta.ts` pada `whatsappMessage`, dan pesan kegiatan disusun otomatis oleh sistem berisi nama kegiatan, tanggal, lokasi, dan nama pendaftar.

---

## 13. Mengubah kontak dan media sosial

### 13.1 Email, alamat, dan jam operasional

**File:** `CONTENT/08-SETTINGS/contact.ts`

**Sebelum:**

```ts
export const contact: ContactSettings = {
  organizationName: "KSPM UNIPI",
  shortName: "KSPM",
  fullName:
    "Kelompok Studi Pasar Modal Universitas Insan Pembangunan Indonesia",
  university: "Universitas Insan Pembangunan Indonesia",
  tagline: "Belajar pasar modal, tumbuh bersama.",
  period: "2025/2026",
  logo: "/images/logo/logo-kspm.svg",
  email: "kspmipem@gmail.com",
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  address:
    "Universitas Insan Pembangunan Indonesia, Jl. Raya Serang KM. 10, Bitung Jaya, Cikupa, Kabupaten Tangerang, Banten 15710",
  addressShort: "Kampus UNIPI, Cikupa, Tangerang",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Universitas+Insan+Pembangunan+Indonesia",
  officeHours: "Senin - Jumat, 09.00 - 17.00 WIB",
};
```

**Sesudah (contoh perubahan email dan jam):**

```ts
  email: "kspm.unipi@unipi.ac.id",
  officeHours: "Senin - Jumat, 08.00 - 16.00 WIB",
```

Field lain dapat diubah dengan pola yang sama. Pastikan `mapsUrl` masih mengarah ke lokasi yang benar.

### 13.2 Instagram dan grup WhatsApp

**File:** `CONTENT/08-SETTINGS/social-media.ts`

**Sebelum:**

```ts
export const socialMedia: SocialMediaSettings = {
  instagram: "https://www.instagram.com/kspm.unipi/",
  instagramHandle: "@kspm.unipi",
  whatsappGroup: "",
};
```

**Sesudah:**

```ts
export const socialMedia: SocialMediaSettings = {
  instagram: "https://www.instagram.com/kspmunipi/",
  instagramHandle: "@kspmunipi",
  whatsappGroup: "https://chat.whatsapp.com/xxxxxxxxxxxxxxxx",
};
```

**Keterangan:**

- `instagram` harus URL lengkap.
- `instagramHandle` hanya teks tampilan.
- `whatsappGroup` opsional; kosongkan dengan `""` jika belum ada grup.

### 13.3 Menjaga data SEO tetap konsisten

Jika alamat berubah, sesuaikan juga alamat terstruktur di `CONTENT/08-SETTINGS/seo.ts`:

```ts
address: {
  streetAddress: "Jl. Raya Serang KM. 10, Bitung Jaya, Cikupa",
  addressLocality: "Kabupaten Tangerang",
  addressRegion: "Banten",
  postalCode: "15710",
  addressCountry: "ID",
},
```

Ini membantu Google menampilkan alamat yang benar.

### 13.4 Teks footer (opsional)

**File:** `CONTENT/08-SETTINGS/footer.ts`

```ts
export const footer: SiteSettings["footer"] = {
  description:
    "Kelompok Studi Pasar Modal Universitas Insan Pembangunan Indonesia. Wadah belajar, berdiskusi, dan bertumbuh bersama untuk membangun generasi investor muda yang cerdas dan berkarakter.",
  copyright: "© 2026 KSPM UNIPI. Seluruh hak cipta dilindungi.",
  credit: "Dikelola oleh Divisi Media & Informasi KSPM UNIPI.",
};
```

**Menyimpan dan melihat hasil:** simpan semua file, lalu buka `/kontak`, footer, dan `/bergabung`.

---

## 14. Menjalankan website secara lokal

### 14.1 Yang dibutuhkan

| Kebutuhan | Keterangan |
|---|---|
| Node.js | Minimal versi 20.9. Disarankan Node.js 22 LTS |
| npm | Otomatis terpasang bersama Node.js |
| Qoder atau VS Code | Untuk membuka folder dan mengedit file |
| Terminal | Terminal bawaan Qoder/VS Code sudah cukup |

Cek versi Node.js:

```bash
node -v
npm -v
```

Jika versi Node.js di bawah 20.9, pasang Node.js 22 LTS dari <https://nodejs.org>.

### 14.2 Langkah menjalankan

1. Buka folder project di Qoder atau VS Code.
2. Buka terminal: **Terminal → New Terminal**.
3. Pastikan terminal berada di folder yang berisi `package.json`.
4. Jalankan:

   ```bash
   npm install
   ```

   Perintah ini hanya perlu dijalankan sekali, atau setelah ada dependency baru.

5. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

6. Buka `http://localhost:3000` di browser.
7. Biarkan terminal tetap terbuka selama mengedit.

### 14.3 Halaman yang perlu dicek setelah mengedit

| Perubahan | Halaman pemeriksaan |
|---|---|
| Judul, deskripsi, banner | `/` |
| Logo | Navbar, footer, favicon, dan opening intro |
| Pengurus | `/pengurus` dan `/` |
| Artikel | `/artikel` dan `/artikel/<slug>` |
| Galeri | `/galeri` dan `/` |
| Kegiatan | `/kegiatan` dan `/kegiatan/<slug>` |
| Program | `/program-kerja` dan `/` |
| WhatsApp | Tombol daftar di `/kegiatan`, `/bergabung`, `/kontak`, footer |
| Kontak/media sosial | `/kontak`, footer, `/bergabung` |

### 14.4 Memeriksa sebelum push

```bash
npm run typecheck
npm run build
```

- `npm run typecheck` memeriksa kesalahan TypeScript.
- `npm run build` memastikan website bisa dibangun untuk produksi.
- Jika build berhasil, coba mode produksi:

  ```bash
  npm run start
  ```

  Lalu buka `http://localhost:3000`.

### 14.5 Menghentikan server

Tekan `Ctrl + C` di terminal tempat `npm run dev` berjalan.

### 14.6 Jika `npm` tidak dikenali

1. Pastikan Node.js sudah terpasang.
2. Tutup dan buka kembali terminal/Qoder.
3. Di Windows, jalankan ulang installer Node.js dan pastikan opsi **Add to PATH** aktif.
4. Cek lagi dengan `node -v` dan `npm -v`.

---

## 15. Deployment ke Netlify melalui GitHub

Website menggunakan **Next.js 15 App Router**. Netlify mendeteksi Next.js secara otomatis dan memakai **OpenNext adapter** resmi Netlify. Tidak perlu memasang adapter manual dan tidak boleh memakai static export.

### 15.1 Checklist sebelum deploy

- [ ] `npm install` berhasil.
- [ ] `npm run typecheck` berhasil.
- [ ] `npm run build` berhasil.
- [ ] Semua gambar ada di `public/images/`.
- [ ] Tidak ada path `C:\Users\...` atau `localhost` di file konten.
- [ ] Nomor WhatsApp dan email sudah benar.
- [ ] Perubahan sudah disimpan.

### 15.2 Mengunggah project ke GitHub

Project ini belum tentu memiliki repository Git. Jika belum ada, jalankan dari folder project:

```bash
git init
git add .
git commit -m "Website KSPM UNIPI"
git branch -M main
```

Buat repository baru di <https://github.com> bernama misalnya `website-kspm-unipi`. **Jangan** centang "Add a README file", "Add .gitignore", atau license karena project sudah memilikinya.

Hubungkan dan unggah:

```bash
git remote add origin https://github.com/USERNAME/website-kspm-unipi.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub.

Jika repository sudah terhubung sebelumnya, cukup:

```bash
git add .
git commit -m "Update konten KSPM UNIPI"
git push
```

`.gitignore` sudah mengabaikan `node_modules`, `.next`, `.env`, dan `.netlify`, jadi file besar atau rahasia tidak ikut terunggah.

### 15.3 Menggunakan panel Source Control di Qoder/VS Code

Jika tidak nyaman dengan terminal:

1. Buka ikon **Source Control** di sidebar.
2. Periksa daftar file yang berubah.
3. Tulis pesan commit, misalnya `Update konten kegiatan`.
4. Klik **Commit**.
5. Klik **Sync Changes** atau **Push** untuk mengunggah ke GitHub.

### 15.4 Menghubungkan GitHub ke Netlify

1. Masuk ke <https://app.netlify.com> dengan akun GitHub.
2. Klik **Add new site** → **Import an existing project**.
3. Pilih **Deploy with GitHub**.
4. Izinkan Netlify mengakses repository.
5. Pilih repository `website-kspm-unipi`.
6. Pilih branch **`main`**.
7. Periksa pengaturan build.

### 15.5 Pengaturan build

| Pengaturan | Nilai |
|---|---|
| Base directory | Kosongkan |
| Build command | `npm run build` |
| Publish directory | `.next` (biasanya terisi otomatis) |
| Functions directory | Kosongkan (otomatis) |
| Node.js | 22 |

Nilai ini sudah tercantum di `netlify.toml`:

```toml
[build]
  command = "npm run build"

[build.environment]
  NODE_VERSION = "22"
```

**Jangan:**

- Mengubah build command menjadi `next export`.
- Mengatur publish directory ke `out`.
- Menambahkan `output: "export"` di `next.config.mjs`.
- Menambahkan plugin `@netlify/plugin-nextjs` secara manual.

### 15.6 Environment variable (opsional)

Tidak ada environment variable wajib dan tidak ada secret/API key di project.

| Nama | Nilai | Kegunaan |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://domain-anda.com` | URL publik untuk SEO, sitemap, dan robots.txt |

Jika tidak diisi, project memakai `URL` bawaan Netlify, lalu fallback di `src/lib/site.ts`. Isi variabel ini jika memakai domain sendiri, tanpa garis miring di akhir.

Cara mengisi:

1. Buka **Site configuration** → **Environment variables**.
2. Klik **Add a variable**.
3. Isi nama dan nilai.
4. Pilih scope **Production**.
5. Simpan dan deploy ulang.

Jangan menaruh nomor WhatsApp, email, atau konten organisasi di environment variable. Semua itu ada di `CONTENT/08-SETTINGS/contact.ts`.

### 15.7 Deploy pertama

1. Klik **Deploy site**.
2. Tunggu proses instalasi dan build selesai.
3. Pastikan status menjadi **Published**.
4. Buka alamat `https://nama-random.netlify.app`.
5. Periksa semua halaman: Beranda, Tentang, Pengurus, Program Kerja, Kegiatan, Artikel, Galeri, Kontak, Bergabung.
6. Uji satu tombol WhatsApp.

Untuk mengganti nama subdomain:

1. Buka **Site configuration** → **Site details**.
2. Klik **Change site name**.
3. Isi nama seperti `kspm-unipi`.
4. Alamat menjadi `https://kspm-unipi.netlify.app`.

### 15.8 Memperbarui website setelah mengedit konten

1. Simpan perubahan.
2. Commit dan push ke GitHub.
3. Buka tab **Deploys** di Netlify.
4. Tunggu hingga deploy terbaru **Published**.
5. Hard refresh browser (`Ctrl + Shift + R`).

Setiap push ke branch `main` otomatis memicu deploy production baru.

### 15.9 Jika perubahan tidak muncul di Netlify

| Gejala | Penyebab | Perbaikan |
|---|---|---|
| Deploy tidak berjalan | File belum di-commit/push | Jalankan `git status`, lalu commit dan push |
| Deploy gagal | Error build | Baca log deploy dan lihat [bagian error build](#mengatasi-error-build) |
| Website masih versi lama | Cache | **Deploys → Trigger deploy → Clear cache and deploy site** |
| Gambar 404 | Nama file berbeda huruf besar/kecil | Samakan nama file dan path, gunakan huruf kecil |
| Halaman baru tidak ada | Belum di-push atau build gagal | Cek commit dan log deploy |

Untuk dokumentasi deploy yang lebih rinci, lihat `NETLIFY-DEPLOYMENT-GUIDE.md`.

---

## Penamaan gambar yang disarankan

Gunakan nama **huruf kecil**, **tanda hubung**, **tanpa spasi**, dan **deskriptif**. Sertakan tanggal atau tahun bila perlu.

| Jenis gambar | Folder | Contoh nama |
|---|---|---|
| Logo | `public/images/logo/` | `logo-kspm.svg` (navbar/footer) dan `kspm-unipi.png` (intro) |
| Banner hero | `public/images/banners/` | `hero-bg-2026.jpg` |
| Foto hero | `public/images/banners/` | `hero-students-2026.jpg` |
| Foto pengurus | `public/images/leadership/` | `raisa-aulia-nafisa.jpg` |
| Thumbnail artikel | `public/images/articles/` | `investasi-mahasiswa.jpg` |
| Poster kegiatan | `public/images/events/` | `seminar-nasional-2027.jpg` |
| Foto program | `public/images/programs/` | `sekolah-pasar-modal.jpg` |
| Foto galeri | `public/images/gallery/` | `seminar-nasional-2027-01.jpg` |

**Hindari:**

- `Foto Ketua.jpg` (spasi dan huruf besar)
- `IMG_20261119.jpg` (tidak deskriptif)
- `foto baru.png` (spasi)
- `C:\Users\Azhar\Pictures\foto.jpg` (path komputer)
- `http://localhost:3000/images/foto.jpg` (URL lokal)

Gunakan ekstensi huruf kecil: `.jpg`, `.webp`, `.png`, `.svg`.

---

## Mengatasi gambar yang tidak muncul

### 1. Periksa path di file data

Path harus diawali `/images/`, tanpa kata `public`.

**Benar:**

```ts
photo: "/images/leadership/raisa-aulia-nafisa.jpg";
```

**Salah:**

```ts
photo: "public/images/leadership/raisa-aulia-nafisa.jpg";
photo: "C:\\Users\\Azhar\\foto.jpg";
photo: "http://localhost:3000/images/foto.jpg";
```

### 2. Periksa keberadaan file

1. Buka folder `public/images/...` di Qoder/VS Code.
2. Pastikan file benar-benar ada.
3. Samakan nama file dengan path, termasuk huruf besar/kecil dan ekstensi.
4. Netlify berjalan di Linux yang **case-sensitive**: `Foto.jpg` berbeda dengan `foto.jpg`.

### 3. Periksa ekstensi

Jika file bernama `foto.webp`, path harus berakhiran `.webp`, bukan `.jpg`.

### 4. Segarkan browser

- Tekan `Ctrl + Shift + R`.
- Atau buka jendela Incognito.
- Jika memakai `npm run dev`, pastikan server masih berjalan.

### 5. Periksa gambar yang dipakai berulang

Satu gambar bisa dipakai di beberapa tempat. Contoh `public/images/events/seminar-nasional.jpg` dipakai untuk poster kegiatan, foto album, dan gambar program. Jangan menghapusnya hanya karena satu bagian sudah tidak memakai.

Cari pemakaian gambar di Qoder/VS Code dengan `Ctrl + Shift + F`, lalu masukkan nama file, misalnya `seminar-nasional.jpg`.

### 6. Jika gambar tampil lokal tetapi tidak di Netlify

1. Pastikan gambar ikut ter-commit:

   ```bash
   git ls-files public/images
   ```

2. Jika file tidak muncul di daftar, jalankan:

   ```bash
   git add public/images
   git commit -m "Tambah gambar"
   git push
   ```

3. Pastikan nama file tidak hanya berbeda huruf besar/kecil dari path.

### 7. Tabel cepat masalah gambar

| Gejala | Penyebab umum | Perbaikan |
|---|---|---|
| Gambar kosong/putih | Path salah | Samakan path dengan lokasi file |
| Ikon gambar rusak | File tidak ada atau ekstensi salah | Cek nama dan ekstensi file |
| Tampil lokal, 404 di Netlify | File belum di-commit | `git add public/images` lalu push |
| Hanya sebagian gambar hilang | Nama file beda huruf besar/kecil | Gunakan huruf kecil dan samakan path |
| Gambar lama masih muncul | Cache browser | Hard refresh atau timpa dengan nama baru |
| Gambar terpotong aneh | Rasio tidak sesuai | Gunakan rasio yang disarankan pada [bagian 3.3](#33-ukuran-gambar-yang-disarankan) |

---

## Mengatasi error build

Build adalah proses mengubah kode menjadi website siap online. Jalankan dari folder project:

```bash
npm run typecheck
npm run build
```

Baca pesan error dari **baris paling atas** karena biasanya itu penyebab utamanya.

### 1. Tabel error umum

| Pesan error | Penyebab | Perbaikan |
|---|---|---|
| `Isi artikel tidak ditemukan` | File `.md` tidak ada atau nama tidak sama dengan `slug` | Buat `CONTENT/03-ARTICLES/posts/<slug>.md` |
| `Module not found` | Salah ketik path import | Periksa path dan nama file; jangan mengubah import di file data |
| `Type error` / `Property ... is missing` | Field wajib belum diisi | Bandingkan blok dengan template di `_templates/` |
| `Unexpected token` / `Parsing error` | Kurung kurawal, koma, atau tanda kutip hilang | Bandingkan blok yang diedit dengan template |
| `Duplicate identifier` / key ganda | Dua data memakai `id` yang sama | Ganti `id` menjadi unik |
| `EBADENGINE` | Node.js terlalu lama | Pasang Node.js 22 LTS |
| `EADDRINUSE` | Port 3000 sedang dipakai | Hentikan server lain atau jalankan `npm run dev -- -p 3001` |
| `ENOTFOUND` / gagal unduh font | Jaringan saat build | Coba build ulang; di Netlify klik **Retry deploy** |

### 2. Langkah sistematis saat build gagal

1. Baca nama file dan nomor baris pada pesan error.
2. Buka file tersebut di Qoder/VS Code.
3. Bandingkan blok yang baru diedit dengan template di `CONTENT/_templates/`.
4. Pastikan setiap objek memiliki koma pemisah yang benar.
5. Pastikan setiap string memiliki tanda kutip pembuka dan penutup.
6. Pastikan tidak ada field wajib yang terhapus.
7. Simpan, lalu ulangi `npm run typecheck`.
8. Jika typecheck lulus, ulangi `npm run build`.

### 3. Kesalahan yang paling sering terjadi

**Koma hilang di antara objek:**

```ts
  {
    id: "program-a",
    // ...
    order: 1,
  }
  {
    id: "program-b",
    // ...
    order: 2,
  },
```

Perbaikan: tambahkan koma setelah `}` pertama.

**Kutip tidak ditutup:**

```ts
title: "Judul tanpa penutup,
```

Perbaikan: tambahkan tanda kutip penutup.

**Field wajib terhapus:** bandingkan dengan template. Jangan menghapus `images`, `content`, atau `agenda` jika masih diperlukan.

**Slug dan nama file `.md` berbeda:** keduanya harus sama persis, termasuk huruf kecil dan tanda hubung.

### 4. Jika build lokal berhasil tetapi Netlify gagal

1. Pastikan semua file sudah di-commit dan di-push:

   ```bash
   git status
   ```

2. Pastikan `package-lock.json` ikut ter-commit.
3. Pastikan Node.js Netlify 22 (lihat `netlify.toml`).
4. Hapus cache: **Deploys → Trigger deploy → Clear cache and deploy site**.
5. Bandingkan log Netlify dengan output `npm run build` di komputer.
6. Pastikan tidak ada file yang hanya ada di komputer dan belum di-push.

### 5. Jika tidak yakin harus berbuat apa

1. Jangan menghapus banyak data sekaligus.
2. Simpan salinan file yang diedit.
3. Kembalikan blok ke bentuk template.
4. Jalankan `npm run typecheck` dan `npm run build` lagi.
5. Jika masih gagal, kirim pesan error lengkap beserta nama file ke pengurus yang memahami kode.

---

## Checklist sebelum push

- [ ] Semua file sudah disimpan (`Ctrl + S`).
- [ ] `npm run typecheck` berhasil.
- [ ] `npm run build` berhasil.
- [ ] Halaman yang diubah sudah dicek di `http://localhost:3000`.
- [ ] Tidak ada gambar yang hilang.
- [ ] Tidak ada `localhost` atau `C:\Users\...` di file konten.
- [ ] Nomor WhatsApp sudah diuji.
- [ ] Perubahan sudah di-commit dengan pesan yang jelas.
- [ ] Perubahan sudah di-push ke GitHub.
- [ ] Deploy Netlify berstatus **Published**.

---

## Dokumen terkait

| Dokumen | Isi |
|---|---|
| `QUICK-START.md` | Panduan singkat untuk pengurus baru: ganti foto, tambah artikel, perbarui galeri |
| `CONTENT/README.md` | Ringkasan struktur folder `CONTENT/` |
| `IMAGE-MANAGEMENT-GUIDE.md` | Panduan gambar lebih detail: format, ukuran, penamaan, pengecekan |
| `NETLIFY-DEPLOYMENT-GUIDE.md` | Panduan deploy Netlify lebih detail, termasuk domain dan environment variable |
| `CONTENT/_templates/` | Template siap salin untuk artikel, galeri, kegiatan, pengurus, dan program |

Dengan mengikuti panduan ini, pengurus dapat memperbarui website KSPM UNIPI tanpa Admin Panel, tanpa database, dan tanpa menyentuh kode tampilan.
