# Quick Start — Panduan Singkat Pengurus Baru KSPM UNIPI

Halaman ini untuk kamu yang baru bergabung dan hanya ingin melakukan tiga hal:

1. [Mengganti foto](#1-mengganti-foto)
2. [Menambah artikel](#2-menambah-artikel)
3. [Memperbarui galeri](#3-memperbarui-galeri)

Tidak perlu memahami kode. Cukup ikuti langkahnya, simpan file, lalu lihat hasilnya.

> Website ini tidak punya Admin Panel. Semua teks ada di `CONTENT/`, semua gambar ada di `public/images/`.

---

## Sebelum mulai

### 1. Buka project

1. Buka folder project di **Qoder** atau **VS Code**.
2. Buka terminal: **Terminal → New Terminal**.
3. Jalankan sekali:

   ```bash
   npm install
   ```

4. Jalankan website:

   ```bash
   npm run dev
   ```

5. Buka `http://localhost:3000`.

### 2. Aturan gambar

- Simpan gambar di subfolder `public/images/` yang sesuai.
- Nama file: **huruf kecil, tanda hubung, tanpa spasi**.
  Contoh: `seminar-nasional-2027-01.jpg`.
- Di file data, path selalu diawali `/images/...`.
  Contoh: `/images/leadership/raisa-aulia-nafisa.jpg`.
- Jangan memakai `C:\Users\...` atau `http://localhost`.
- Jangan menghapus gambar yang masih dipakai di file lain.

### 3. Menyimpan dan melihat hasil

- Simpan dengan `Ctrl + S`.
- Halaman akan diperbarui otomatis.
- Jika belum berubah, tekan `Ctrl + Shift + R`.

---

## 1. Mengganti foto

### 1.1 Ganti foto pengurus

**File data:** `CONTENT/02-LEADERSHIP/team.ts`
**Folder gambar:** `public/images/leadership/`

**Cara tercepat (tanpa mengubah kode):**

1. Siapkan foto potret 4:5 (disarankan 800 × 1000 piksel).
2. Beri nama **sama** dengan file lama, misalnya `raisa-aulia-nafisa.jpg`.
3. Timpa file lama di `public/images/leadership/`.
4. Simpan, lalu buka `/pengurus` dan hard refresh.

**Jika memakai nama baru:**

1. Simpan foto baru, misalnya `raisa-aulia-nafisa-2026.jpg`.
2. Buka `CONTENT/02-LEADERSHIP/team.ts`.
3. Cari nama pengurus terkait.
4. Ubah baris `photo`.

**Sebelum:**

```ts
photo: "/images/leadership/raisa-aulia-nafisa.jpg",
```

**Sesudah:**

```ts
photo: "/images/leadership/raisa-aulia-nafisa-2026.jpg",
```

5. Simpan dan buka `/pengurus`.

### 1.2 Ganti banner homepage

**File data:** `CONTENT/01-HOMEPAGE/hero.ts`
**Folder gambar:** `public/images/banners/`

**Sebelum:**

```ts
background: "/images/banners/hero-bg.jpg",
image: "/images/banners/hero-students.jpg",
```

**Sesudah:**

```ts
background: "/images/banners/hero-bg-2026.jpg",
image: "/images/banners/hero-students-2026.jpg",
```

Simpan, lalu buka `/`.

> `background` juga dipakai sebagai banner semua halaman. `image` adalah foto utama di homepage.

### 1.3 Ganti thumbnail artikel

**File data:** `CONTENT/03-ARTICLES/articles.ts`
**Folder gambar:** `public/images/articles/`

**Sebelum:**

```ts
thumbnail: "/images/articles/ihsg.jpg",
```

**Sesudah:**

```ts
thumbnail: "/images/articles/ihsg-2027.jpg",
```

Simpan, lalu buka `/artikel`.

### 1.4 Ganti poster kegiatan

**File data:** `CONTENT/05-EVENTS/events.ts`
**Folder gambar:** `public/images/events/`

**Sebelum:**

```ts
poster: "/images/events/seminar-nasional.jpg",
```

**Sesudah:**

```ts
poster: "/images/events/seminar-nasional-2027.jpg",
```

Simpan, lalu buka `/kegiatan`.

### 1.5 Ganti logo

**File data:** `CONTENT/08-SETTINGS/contact.ts`
**Folder gambar:** `public/images/logo/`

**Sebelum:**

```ts
logo: "/images/logo/logo-kspm.svg",
```

**Sesudah:**

```ts
logo: "/images/logo/logo-kspm-2026.svg",
```

Logo ini dipakai otomatis di navbar, footer, dan favicon.

Opening intro memakai logo dari `CONTENT/01-HOMEPAGE/intro.ts` (`/images/logo/kspm-unipi.png`) dengan fallback ke logo di atas. Letakkan file logo resmi di path tersebut agar intro menampilkan logo resmi.

---

## 2. Menambah artikel

Artikel punya **dua bagian**: informasi di `articles.ts` dan isi di file `.md`.

### Langkah 1 — Tentukan slug

Contoh slug: `investasi-untuk-mahasiswa`

Slug harus huruf kecil dan memakai tanda hubung.

### Langkah 2 — Tambahkan informasi artikel

Buka `CONTENT/03-ARTICLES/articles.ts`, lalu tempel blok berikut di dalam array `articles`, sebelum `];`:

```ts
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
```

Pastikan:

- `id` belum dipakai artikel lain.
- `date` memakai format `YYYY-MM-DD`.
- `published: true` agar tampil di website.

### Langkah 3 — Buat file isi artikel

Buat file baru:

```text
CONTENT/03-ARTICLES/posts/investasi-untuk-mahasiswa.md
```

Nama file **harus sama persis** dengan `slug`.

Isi contoh:

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

> Investasi terbaik adalah investasi yang dipahami.

## Penutup

Mulailah dari langkah kecil dan konsisten.
```

Format yang didukung: paragraf, `## Judul Bagian`, daftar `-`, daftar bernomor, kutipan `>`, dan teks tebal `**seperti ini**`.

### Langkah 4 — Simpan thumbnail

Simpan gambar lanskap 16:10 di:

```text
public/images/articles/investasi-mahasiswa.jpg
```

### Langkah 5 — Simpan dan lihat

1. Simpan `articles.ts` dan file `.md`.
2. Buka `/artikel`.
3. Buka `/artikel/investasi-untuk-mahasiswa`.

### Menyembunyikan artikel tanpa menghapus

Ubah:

```ts
published: true,
```

menjadi:

```ts
published: false,
```

Artikel akan hilang dari website, tetapi datanya tetap tersimpan.

---

## 3. Memperbarui galeri

**File data:** `CONTENT/04-GALLERY/gallery.ts`
**Folder gambar:** `public/images/gallery/`

Galeri menampilkan semua foto dari semua album. Nilai `album` menjadi label filter.

### 3.1 Menambah foto ke album yang sudah ada

Buka album terkait, lalu tambahkan satu blok di dalam `images`, setelah foto terakhir:

```ts
{
  src: "/images/gallery/seminar-nasional-2027-03.jpg",
  alt: "Peserta berdiskusi dalam sesi tanya jawab",
  caption: "Sesi tanya jawab bersama peserta seminar.",
  order: 3,
},
```

Aturan:

- `src` harus cocok dengan file di `public/images/gallery/`.
- `alt` menjelaskan isi foto untuk pembaca layar.
- `caption` tampil di bawah foto.
- `order` harus berbeda dan berurutan (1, 2, 3, dst.).

Simpan, lalu buka `/galeri`.

### 3.2 Membuat album baru

Tempel blok berikut di dalam array `albumList`, sebelum `];`:

```ts
{
  id: "seminar-nasional-2027",
  title: "Seminar Nasional Investasi 2027",
  album: "Seminar",
  date: "2027-03-15",
  cover: "/images/gallery/seminar-nasional-2027-01.jpg",
  description:
    "Dokumentasi seminar nasional bersama praktisi pasar modal.",
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
      alt: "Narasumber menyampaikan materi",
      caption: "Narasumber menyampaikan materi tentang pasar modal.",
      order: 2,
    },
  ],
},
```

- `album` = label filter (contoh: `Seminar`, `Edukasi`, `Internal`).
- `title` = nama album yang tampil pada foto.
- `cover` wajib diisi dengan path gambar.
- `order` album menentukan urutan album.

### 3.3 Menghapus foto

1. Hapus satu blok `{ ... },` di dalam `images`.
2. Jangan menghapus `]` penutup array.
3. Hapus file gambar hanya jika tidak dipakai album atau halaman lain.
4. Simpan dan cek `/galeri`.

---

## 4. Jika gambar tidak muncul

Periksa urutan berikut:

1. **Path benar?** Harus diawali `/images/...`, bukan `public/images/...`.
2. **File ada?** Cek langsung di folder `public/images/...`.
3. **Nama sama?** Huruf besar/kecil dan ekstensi harus sama.
4. **Sudah simpan?** Tekan `Ctrl + S`.
5. **Cache browser?** Tekan `Ctrl + Shift + R`.
6. **Sudah di-push?** Netlify hanya menerima file yang di-commit.

Contoh benar:

```ts
src: "/images/gallery/seminar-nasional-2027-01.jpg",
```

Contoh salah:

```ts
src: "public/images/gallery/seminar-nasional-2027-01.jpg",
src: "C:\\Users\\Azhar\\Pictures\\foto.jpg",
src: "http://localhost:3000/images/foto.jpg",
```

---

## 5. Kesalahan umum

| Gejala | Penyebab | Perbaikan |
|---|---|---|
| Halaman error setelah edit | Koma atau kurung kurawal terhapus | Bandingkan dengan template di `CONTENT/_templates/` |
| Artikel baru tidak muncul | `published: false` | Ubah menjadi `published: true` |
| Build gagal "Isi artikel tidak ditemukan" | Nama `.md` tidak sama dengan `slug` | Samakan nama file dan slug |
| Foto tidak berubah | Nama file baru tetapi kode belum diubah | Ubah `photo`, `thumbnail`, atau `poster` |
| Foto hilang setelah ganti nama | File lama dihapus padahal masih dipakai | Cari pemakaian dengan `Ctrl + Shift + F` |
| Perubahan tidak ada di Netlify | Belum commit/push | Commit dan push ke GitHub |

---

## 6. Sebelum push ke GitHub

1. Cek halaman yang diubah di `http://localhost:3000`.
2. Jalankan:

   ```bash
   npm run typecheck
   npm run build
   ```

3. Commit dan push:

   ```bash
   git add .
   git commit -m "Update konten KSPM UNIPI"
   git push
   ```

4. Tunggu Netlify berstatus **Published**.

Jika tidak memakai terminal, gunakan panel **Source Control** di Qoder/VS Code: tulis pesan commit → **Commit** → **Sync Changes**.

---

## 7. Baca selengkapnya

| Kebutuhan | Dokumen |
|---|---|
| Panduan lengkap 15 topik | `CONTENT-GUIDE.md` |
| Struktur folder `CONTENT/` | `CONTENT/README.md` |
| Panduan gambar lebih detail | `IMAGE-MANAGEMENT-GUIDE.md` |
| Deploy Netlify dan domain | `NETLIFY-DEPLOYMENT-GUIDE.md` |
| Template siap salin | `CONTENT/_templates/` |

Selamat mencoba. Jika ragu, jangan menghapus banyak data sekaligus. Simpan perubahan kecil, lihat hasilnya, lalu lanjutkan.
