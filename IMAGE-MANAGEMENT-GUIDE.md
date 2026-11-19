# Panduan Pengelolaan Gambar KSPM UNIPI

Semua gambar website disimpan **satu kali** di folder `public/images/`. Data di `CONTENT/` hanya menyimpan alamat (path) gambarnya.

> Mengapa tidak di dalam `CONTENT/`? Next.js hanya menyajikan gambar dari folder `public/`. Menaruh salinan gambar di dua tempat akan membuat duplikasi dan memperbesar repository. Karena itu teks di `CONTENT/`, gambar di `public/images/`.

---

## 1. Lokasi gambar

| Kategori konten | Folder gambar | Contoh path di data |
|---|---|---|
| Hero & tentang (`01-HOMEPAGE`) | `public/images/banners/` | `/images/banners/hero-bg.jpg` |
| Pengurus (`02-LEADERSHIP`) | `public/images/leadership/` | `/images/leadership/raisa-aulia-nafisa.jpg` |
| Artikel (`03-ARTICLES`) | `public/images/articles/` | `/images/articles/ihsg.jpg` |
| Galeri (`04-GALLERY`) | `public/images/gallery/` | `/images/gallery/seminar-panel.jpg` |
| Kegiatan (`05-EVENTS`) | `public/images/events/` | `/images/events/seminar-nasional.jpg` |
| Program (`06-PROGRAMS`) | `public/images/programs/` | `/images/programs/sekolah-pasar-modal.jpg` |
| Logo (`08-SETTINGS`) | `public/images/logo/` | `/images/logo/logo-kspm.svg` |
| Logo intro (`01-HOMEPAGE/intro`) | `public/images/logo/` | `/images/logo/kspm-unipi.png` |

Galeri boleh memakai foto yang sama dengan kegiatan atau program. Cukup tulis path yang sama; **jangan menyalin file gambarnya**.

---

## 2. Aturan nama file

Gunakan nama yang menjelaskan isi foto:

```text
benar:
seminar-nasional-2026.jpg
raisa-aulia-nafisa.jpg
workshop-fundamental-peserta.webp

hindari:
IMG_20261112_001.jpg
foto baru.jpg
gambar1.jpg
```

Ketentuan:
- Huruf kecil semua.
- Gunakan tanda hubung `-`, bukan spasi.
- Tanpa karakter khusus (`#`, `%`, `?`, `&`).
- Sertakan nama orang/kegiatan bila perlu.
- Tambahkan tahun bila ada foto serupa dari tahun berbeda.

> Netlify berjalan di Linux yang membedakan huruf besar dan kecil. `Foto.JPG` dan `foto.jpg` dianggap dua file berbeda. Selalu samakan penulisan path dengan nama file.

---

## 3. Format dan ukuran

| Jenis gambar | Format disarankan | Ukuran maksimal |
|---|---|---|
| Foto kegiatan, pengurus, galeri | `.webp` (utama) atau `.jpg` | 300–600 KB per foto |
| Thumbnail artikel | `.webp` atau `.jpg` | 200–400 KB |
| Logo | `.svg` (utama) atau `.png` transparan | 50 KB |
| Gambar hero/banner | `.webp` atau `.jpg` | 400–800 KB |

Tips:
- Resolusi lebar 1200–1920 px sudah cukup untuk foto besar.
- Foto pengurus sebaiknya potret (rasio 4:5 atau 1:1), lebar minimal 800 px.
- Thumbnail artikel sebaiknya lanskap (16:9 atau 16:10), lebar minimal 1200 px.
- Kompres gambar di [squoosh.app](https://squoosh.app/) atau aplikasi sejenis sebelum diunggah.
- `next/image` otomatis mengubah ukuran dan format di Netlify, tetapi file asli tetap harus wajar ukurannya.

---

## 4. Menambah gambar baru

1. Simpan file ke subfolder yang sesuai di `public/images/`.
2. Catat path-nya, selalu diawali `/images/...`.
3. Buka file data terkait di `CONTENT/` dan isi field gambar:

```ts
// Foto pengurus
photo: "/images/leadership/nama-pengurus.jpg";

// Poster kegiatan
poster: "/images/events/nama-kegiatan.jpg";

// Foto galeri
src: "/images/gallery/nama-foto.jpg";

// Thumbnail artikel
thumbnail: "/images/articles/nama-artikel.jpg";

// Foto program
image: "/images/programs/nama-program.jpg";
```

4. Simpan file dan refresh website.

---

## 5. Mengganti gambar lama

Pilihan paling aman:

1. Simpan gambar baru dengan **nama file yang sama** seperti gambar lama.
2. Timpa file lama di folder yang sama.
3. Tidak perlu mengubah data di `CONTENT/`.

Jika ingin nama baru:

1. Simpan gambar baru dengan nama deskriptif.
2. Ubah path di file data (`photo`, `poster`, `src`, `thumbnail`, atau `image`).
3. Cek kembali halaman terkait.

Jangan menghapus gambar lama sebelum yakin tidak dipakai di tempat lain.

---

## 6. Menghapus gambar

Sebelum menghapus, cari path gambar tersebut di seluruh folder `CONTENT/`:

```bash
grep -r "nama-file.jpg" CONTENT
```

- Jika **tidak ada hasil**, gambar tidak dipakai dan boleh dihapus.
- Jika ada hasil, hapus dulu data yang memakainya atau ganti ke gambar lain.

Jangan menghapus folder `public/images/` secara keseluruhan.

---

## 7. Aturan path untuk Netlify

Gunakan:

```text
/images/leadership/nama.jpg
```

Jangan gunakan:

```text
C:\Users\Nama\Pictures\foto.jpg     (path komputer sendiri)
file:///C:/Users/...                (file lokal)
http://localhost:3000/images/...    (localhost)
public/images/leadership/nama.jpg   (tanpa awalan "/")
```

Path dengan awalan `/images/...` bekerja di localhost maupun Netlify karena file berada di `public/images/`.

---

## 8. Memastikan gambar ikut ter-deploy

Sebelum push ke GitHub:

```bash
git status
git ls-files public/images
```

Pastikan gambar baru muncul di daftar. Jika tidak, tambahkan:

```bash
git add public/images
```

Setelah deploy, buka website Netlify dan periksa halaman yang memakai gambar tersebut. Jika gambar rusak, periksa:
- huruf besar/kecil nama file,
- path diawali `/images/`,
- file benar-benar ada di repository,
- nama file tidak mengandung spasi.

---

## 9. Checklist cepat

- [ ] Nama file huruf kecil dan deskriptif.
- [ ] Format WebP/JPG/SVG sesuai jenis gambar.
- [ ] Ukuran file wajar (di bawah 1 MB).
- [ ] Path diawali `/images/`.
- [ ] Data di `CONTENT/` sudah diubah bila memakai nama baru.
- [ ] Gambar lama tidak dihapus jika masih dipakai.
- [ ] `git ls-files public/images` menampilkan gambar baru.
- [ ] `npm run build` berhasil sebelum push.
