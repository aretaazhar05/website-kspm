# Panduan Deploy Website KSPM UNIPI ke Netlify

Panduan ini menjelaskan cara mengunggah website KSPM UNIPI ke GitHub, menghubungkannya ke Netlify, melakukan deploy pertama, memperbarui konten, dan mengatasi build error.

Website menggunakan **Next.js 15 App Router** dengan **Manual Content Management** (tanpa Admin Panel, tanpa database, dan tanpa backend CRUD). Netlify mendeteksi Next.js secara otomatis dan menggunakan **OpenNext adapter** resmi Netlify. Tidak perlu memasang adapter secara manual dan tidak perlu mengubah project menjadi static export.

---

## Ringkasan konfigurasi

| Item | Nilai |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Build command | `npm run build` |
| Publish directory | `.next` (diisi otomatis oleh Netlify) |
| Node.js | 22 (diatur di `netlify.toml`) |
| Adapter | OpenNext, terpasang otomatis oleh Netlify |
| Package manager | npm (`package-lock.json` tersedia) |
| Environment wajib | Tidak ada |
| Environment opsional | `NEXT_PUBLIC_SITE_URL` |
| Image optimization | Didukung melalui Netlify Image CDN |

File `netlify.toml` pada project:

```toml
[build]
  command = "npm run build"

[build.environment]
  NODE_VERSION = "22"
```

> **Penting:** jangan menambahkan `[[plugins]] package = "@netlify/plugin-nextjs"` ke `netlify.toml`. Netlify sudah memasang dan memperbarui OpenNext adapter secara otomatis. Memasang atau mengunci adapter versi lama dapat menyebabkan build gagal.

---

## 1. Cara mengunggah project ke GitHub

### A. Buat repository GitHub

1. Masuk ke <https://github.com> dan login.
2. Klik **New repository**.
3. Isi nama repository, misalnya `website-kspm-unipi`.
4. Pilih **Public** atau **Private** sesuai kebutuhan.
5. **Jangan** centang "Add a README file", "Add .gitignore", atau "Choose a license", karena repository akan diisi dari project lokal.
6. Klik **Create repository**.

### B. Upload dari komputer

Buka terminal di folder project, lalu jalankan:

```bash
git init
git add .
git commit -m "Website KSPM UNIPI siap deploy Netlify"
git branch -M main
git remote add origin https://github.com/USERNAME/website-kspm-unipi.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub kamu.

Jika repository sudah pernah dihubungkan, cukup jalankan:

```bash
git add .
git commit -m "Update website KSPM UNIPI"
git push
```

File yang tidak perlu ikut terunggah (`node_modules`, `.next`, `.netlify`, `.env`) sudah diabaikan melalui `.gitignore`.

---

## 2. Cara menghubungkan GitHub dengan Netlify

1. Masuk ke <https://app.netlify.com> menggunakan akun GitHub.
2. Klik **Add new site** → **Import an existing project**.
3. Pilih **Deploy with GitHub**.
4. Jika diminta, izinkan Netlify mengakses repository GitHub kamu.
5. Pilih repository `website-kspm-unipi`.
6. Netlify akan menampilkan halaman pengaturan deploy.

Tidak perlu memilih template atau menambahkan adapter. Netlify akan mendeteksi Next.js dan menyiapkan OpenNext adapter secara otomatis.

---

## 3. Cara memilih branch production

Pada bagian **Branch to deploy**:

- Pilih **`main`**.
- Branch `main` adalah branch production. Setiap push ke branch ini akan otomatis membuat deploy production baru.
- Branch lain dapat dipakai untuk deploy preview, tanpa mengganggu website utama.

Jika branch default repository bernama `master`, gunakan `master` atau ubah branch tersebut menjadi `main`:

```bash
git branch -M main
git push -u origin main
```

---

## 4. Cara mengatur build settings

Pada halaman pengaturan deploy Netlify, isi:

| Pengaturan | Nilai |
| --- | --- |
| Base directory | Kosongkan |
| Build command | `npm run build` |
| Publish directory | `.next` |
| Functions directory | Kosongkan (otomatis) |

Jika Netlify sudah mengisi publish directory secara otomatis dengan `.next`, biarkan nilainya.

**Yang tidak boleh dilakukan:**

- Jangan mengubah build command menjadi `next export`.
- Jangan mengatur publish directory ke `out`.
- Jangan menambahkan `output: "export"` di `next.config.mjs`.
- Jangan menambahkan plugin adapter Next.js secara manual.

Project ini memakai `next/image` dan fitur routing Next.js. Netlify menangani keduanya melalui runtime OpenNext dan Netlify Image CDN.

---

## 5. Cara mengatur environment variables

Project ini **tidak membutuhkan environment variable wajib** dan **tidak menyimpan secret/API key** di source code.

### Variabel opsional

| Nama | Nilai | Kegunaan |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://domain-anda.com` | URL publik untuk metadata SEO, Open Graph, JSON-LD, sitemap, dan robots.txt |

Di Netlify, variabel bawaan `URL` sudah tersedia otomatis saat build. Project memakai urutan berikut:

1. `NEXT_PUBLIC_SITE_URL` jika diisi.
2. `URL` bawaan Netlify jika tersedia.
3. Fallback ke URL lama di `src/lib/site.ts`.

Cara mengisi:

1. Buka **Site configuration** → **Environment variables**.
2. Klik **Add a variable**.
3. Masukkan `NEXT_PUBLIC_SITE_URL` dan URL website, tanpa garis miring di akhir.
   Contoh: `https://kspmunipi.netlify.app`.
4. Pilih scope **Production**, lalu simpan.
5. Deploy ulang agar perubahan diterapkan.

Jika memakai domain sendiri, isi `NEXT_PUBLIC_SITE_URL` dengan domain final tersebut dan deploy ulang. Ini memastikan sitemap dan tautan canonical mengarah ke domain yang benar.

**Jangan menaruh** nomor WhatsApp, email, atau konten organisasi di environment variable. Semua konten tersebut dikelola di `CONTENT/08-SETTINGS/contact.ts`.

---

## 6. Cara deploy pertama kali

1. Setelah build settings benar, klik **Deploy site**.
2. Netlify akan menjalankan:
   - instalasi dependency,
   - `npm run build`,
   - deteksi Next.js dan pemasangan OpenNext adapter otomatis.
3. Tunggu hingga status deploy menjadi **Published**.
4. Netlify memberikan alamat sementara seperti:

   ```text
   https://nama-random.netlify.app
   ```

5. Buka alamat tersebut dan periksa:
   - Beranda
   - Tentang
   - Pengurus
   - Program Kerja
   - Kegiatan dan detail kegiatan
   - Artikel dan detail artikel
   - Galeri
   - Kontak
   - Bergabung

Untuk mengganti nama subdomain Netlify:

1. Buka **Site configuration** → **Site details**.
2. Klik **Change site name**.
3. Gunakan nama seperti `kspm-unipi`.
4. Alamat menjadi `https://kspm-unipi.netlify.app`.

### Memasang domain sendiri (opsional)

1. Buka **Site configuration** → **Domain management** → **Add a domain**.
2. Masukkan domain, misalnya `kspmunipi.com`.
3. Ikuti instruksi DNS dari Netlify.
4. Setelah domain aktif dan HTTPS terpasang, isi `NEXT_PUBLIC_SITE_URL` dengan domain tersebut.
5. Deploy ulang.

---

## 7. Cara update website setelah mengubah source code

Setelah mengubah konten di `CONTENT/` atau mengganti gambar di `public/images/`:

```bash
git add .
git commit -m "Update konten kegiatan Desember"
git push
```

Netlify akan otomatis mendeteksi push ke branch `main` dan menjalankan deploy baru. Tidak perlu upload manual.

Pantau prosesnya di tab **Deploys**. Jika status sudah **Published**, perubahan sudah online.

### Jika perubahan tidak muncul

1. Pastikan file benar-benar sudah di-commit dan di-push:

   ```bash
   git status
   git log -1
   ```

2. Buka tab **Deploys** di Netlify dan pastikan deploy terbaru berhasil.
3. Lakukan **Clear cache and deploy site** dari menu deploy.
4. Lakukan hard refresh browser (`Ctrl + Shift + R`).
5. Periksa apakah gambar yang diganti memakai nama file dan huruf besar/kecil yang sama.

### Menjalankan pengecekan lokal sebelum push

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

Buka `http://localhost:3000` untuk memeriksa hasil sebelum di-push.

---

## 8. Cara mengatasi build error

Buka log deploy di Netlify, lalu cocokkan pesan error dengan daftar berikut.

### `EBADENGINE` atau error versi Node.js

Project membutuhkan Node.js 20.9 atau lebih baru. `netlify.toml` sudah menetapkan Node 22.

Periksa:

```toml
[build.environment]
  NODE_VERSION = "22"
```

Jika pernah mengubah pengaturan Node di UI Netlify, pastikan tidak bertentangan.

### `npm ERR!` atau dependency tidak konsisten

Jalankan secara lokal:

```bash
npm install
npm run build
```

Pastikan `package-lock.json` ikut di-commit. Jangan menghapus lockfile. Di Netlify, dependency dipasang ulang dari `package.json` dan `package-lock.json`.

### `Module not found`

- Periksa penulisan path import.
- Ingat bahwa Netlify berjalan di Linux dan **case-sensitive**. `Foto.jpg` berbeda dengan `foto.jpg`.
- Pastikan semua gambar berada di `public/images/...` dan path di data diawali `/images/...`.

### Gambar tidak tampil setelah deploy

- Pastikan nama file di data sama persis dengan nama file di folder.
- Gunakan ekstensi huruf kecil: `.jpg`, `.png`, `.webp`, `.svg`.
- Jangan memakai path absolut komputer seperti `C:\Users\...`.
- Untuk gambar lokal, path harus diawali `/images/`.

### Google Fonts gagal diunduh saat build

`next/font/google` mengunduh font saat build. Gangguan jaringan sementara dapat menyebabkan kegagalan. Klik **Retry deploy**. Jika berulang, periksa status jaringan build Netlify.

### `next export` atau `output: export`

Project ini tidak boleh memakai static export karena memakai `next/image` dan fitur Next.js. Hapus konfigurasi `output: "export"` jika tidak sengaja ditambahkan.

### Adapter Next.js error

Jangan menambahkan atau mengunci `@netlify/plugin-nextjs` di `netlify.toml` maupun `package.json`. Hapus entri plugin manual, lalu deploy ulang. Netlify akan memakai OpenNext adapter terbaru secara otomatis.

### Build lokal berhasil tetapi Netlify gagal

1. Jalankan `npm run build` sekali lagi di komputer.
2. Pastikan tidak ada file yang hanya ada di komputer dan belum di-commit.
3. Periksa apakah ada environment variable lokal yang tidak ada di Netlify.
4. Hapus cache Netlify melalui **Deploys → Trigger deploy → Clear cache and deploy site**.
5. Bandingkan log Netlify dengan output build lokal.

### Website tampil tetapi gambar error 404

- Periksa path gambar di file data dalam `CONTENT/`.
- Pastikan folder `public/images/` ikut ter-commit.
- Jalankan:

  ```bash
  git ls-files public/images
  ```

  Semua gambar yang dipakai harus muncul di daftar tersebut.

---

## Checklist sebelum deploy

- [ ] `npm install` selesai tanpa error.
- [ ] `npm run build` berhasil.
- [ ] `npm run typecheck` berhasil.
- [ ] Tidak ada URL `localhost` di source code.
- [ ] Tidak ada secret atau API key di source code.
- [ ] Semua gambar berada di `public/images/`.
- [ ] Nomor WhatsApp dan email di `CONTENT/08-SETTINGS/contact.ts` sudah benar.
- [ ] `netlify.toml` berisi build command dan Node 22.
- [ ] Repository GitHub sudah berisi seluruh source code.
- [ ] Branch production di Netlify adalah `main`.
- [ ] Environment `NEXT_PUBLIC_SITE_URL` diisi bila memakai domain sendiri.

---

## Catatan teknis

- Seluruh halaman saat ini bersifat static atau statically generated (SSG). Netlify tetap menangani project melalui runtime Next.js agar `next/image`, routing, metadata, dan pengembangan fitur server di masa depan tetap kompatibel.
- Image optimization menggunakan Netlify Image CDN. Format AVIF dan WebP diatur di `next.config.mjs`.
- Sitemap dan robots.txt digenerate otomatis oleh Next.js dan mengikuti `NEXT_PUBLIC_SITE_URL` atau `URL` dari Netlify.
- Tidak ada server runtime kustom, API route, database, autentikasi, atau Admin Panel.
- Dokumentasi Netlify: <https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/>

Dengan konfigurasi ini, setiap perubahan konten cukup di-commit dan di-push ke GitHub, lalu Netlify akan membangun serta menerbitkan website secara otomatis.
