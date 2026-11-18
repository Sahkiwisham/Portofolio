PROJECT UTS PEMROGRAMAN WEB & SISTEM OPERASI
Nama  : M Sahki Wisham Fauzan
NIM   : 2503010033
Kelas : B — Teknik Informatika, Universitas Perjuangan Tasikmalaya

STRUKTUR FOLDER:
- index.html        : Halaman Utama (Layar intro "Hi, im Samm" + Split-Screen Hero)
- about.html        : Profil Mahasiswa & Riwayat Akademik
- skills.html       : Keahlian Teknis & Filter Interaktif
- galeri.html       : Galeri Virtual Photography (Monokrom -> Berwarna saat Hover)
- so-tugas1.html    : Sistem Operasi Tugas 1 (Disk Scheduling + Canvas Grafik)
- so-tugas2.html    : Sistem Operasi Tugas 2 (CPU Scheduling + Gantt Chart)
- contact.html      : Halaman Kontak & Formulir Validasi
- admin.html        : Portal Privat Pemilik (Tidak ditautkan di menu publik; dilindungi PIN)
- css/sahki_style.css
- js/sahki_data.js
- js/sahki_script.js
- backend/server.js : Server lokal Node.js (lihat "MENJALANKAN BACKEND")
- assets/img/       : Letakkan file foto Forza Horizon 6 lokal Anda di folder ini.

MENJALANKAN BACKEND (butuh Node.js 16+):
1. Buka terminal di folder proyek, jalankan:  node backend/server.js   (atau: npm start)
2. Buka http://localhost:3000 untuk situs, dan http://localhost:3000/admin.html untuk panel pemilik.
3. Login dengan PIN, lalu tambah foto / postingan tugas SO. Perubahan otomatis tersimpan ke js/sahki_data.js
   (cadangan 10 versi terakhir ada di backend/backups/). Foto yang diunggah masuk ke assets/img/.
4. Opsional: ganti PIN sebelum menjalankan server.
   - PowerShell (Windows):  $env:SAHKI_PIN="pin-baru"; node backend/server.js
   - CMD (Windows):         set SAHKI_PIN=pin-baru && node backend/server.js
   - macOS / Linux:         SAHKI_PIN=pin-baru node backend/server.js
Catatan: server hanya berjalan di komputer lokal. Di hosting statis (mis. GitHub Pages) pakai tombol
"Download js/sahki_data.js" di panel admin, lalu ganti file di folder js/ dan push.

CATATAN GITHUB:
- admin.html dan folder backend/ sengaja TIDAK diunggah (lihat .gitignore) agar panel pemilik tidak tampil di situs publik.
  Keduanya tetap berfungsi di komputer Anda lewat `node backend/server.js`.
- Alur pembaruan: ubah data lewat admin lokal -> commit & push js/sahki_data.js dan assets/img/ -> situs publik ikut berubah.
- Jika dosen mewajibkan admin.html ada di repositori, hapus dua baris pertama di .gitignore.
