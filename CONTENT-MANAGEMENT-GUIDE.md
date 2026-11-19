# Panduan Konten KSPM UNIPI (Dipindahkan)

Mulai sekarang seluruh konten website dikelola melalui folder **`CONTENT/`**. Panduan lama ini tidak lagi dipakai karena lokasi file sudah berubah.

Gunakan panduan terbaru:

- **[CONTENT-GUIDE.md](CONTENT-GUIDE.md)** — 19 langkah mengubah teks, pengurus, artikel, galeri, kegiatan, program, WhatsApp, logo, dan kontak.
- **[IMAGE-MANAGEMENT-GUIDE.md](IMAGE-MANAGEMENT-GUIDE.md)** — lokasi, penamaan, format, dan pengecekan gambar.
- **[CONTENT/README.md](CONTENT/README.md)** — ringkasan struktur folder `CONTENT/`.
- **[NETLIFY-DEPLOYMENT-GUIDE.md](NETLIFY-DEPLOYMENT-GUIDE.md)** — cara deploy dan memperbarui website di Netlify.

Ringkasan singkat:

1. Semua teks/data ada di `CONTENT/`.
2. Semua gambar ada di `public/images/`.
3. Tidak ada admin panel, login, database, atau CMS.
4. Setelah mengedit: simpan file, jalankan `npm run dev` untuk melihat hasil lokal, lalu push ke GitHub agar Netlify build ulang.
