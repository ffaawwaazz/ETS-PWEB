LINK WEB : https://ffaawwaazz.github.io/ETS-PWEB/

# ETS-PWEB

# Open Recruitment Panitia HUT RI 80 - Surabaya

Ini adalah landing page sederhana dan responsif untuk **open recruitment panitia Hari Ulang Tahun Republik Indonesia ke-80** yang diadakan oleh **Karang Taruna RW 08, Surabaya**. Halaman ini dibuat dengan **HTML, CSS, dan JavaScript m** tanpa framework tambahan, agar ringan dan mudah dijalankan langsung dari browser.

---

## 🎯 Fitur Utama

- ✅ **Halaman responsif**: Dapat diakses dengan baik melalui HP maupun laptop.
- ✅ **Navigasi tanpa reload**: Menggunakan JavaScript untuk menampilkan halaman divisi tanpa berpindah halaman.
- ✅ **Tautan langsung** ke Google Form pendaftaran dan Google Drive guidebook.
- ✅ **Tampilan menarik** dengan tema kemerdekaan Indonesia (merah putih).
- ✅ **Dapat discroll di HP**, tidak terkunci atau terpotong.

---

## 🧩 Struktur Proyek

```bash
.
├── index.html         # Halaman utama (landing page)
├── style.css          # File CSS utama untuk styling
├── divisi.html        # Halaman penjelasan divisi yang dimuat dinamis
└── README.md          # Dokumentasi proyek ini
```

---

## 📝 Penjelasan Kode

### 📄 index.html

Halaman utama berisi:
- Judul: *OPEN RECRUITMENT PANITIA HUT-RI 80*
- Subjudul: *Bergerak Menjadi Indonesia Maju*
- List persyaratan anggota
- Tiga tombol utama:
  - **Divisi** (menampilkan informasi divisi)
  - **Daftar Sekarang** (link ke Google Form)
  - **Guidebook** (link ke Google Drive)

Struktur halaman dibungkus dalam dua `<div>` besar:
- `.main-page`: halaman utama
- `.division-page`: halaman divisi (awalnya disembunyikan)

### 🎨 style.css

Mengatur tampilan halaman:
- Warna dominan merah-putih dengan aksen `#b30000` dan `#800000`
- Elemen `spotlight` memberikan efek visual latar
- Responsif untuk ukuran layar kecil (dengan `@media`)
- `border-frame` membungkus seluruh halaman agar tampak seperti poster
- `.stamp-box` sebagai highlight "EXTENDED"
- **Scroll di HP aktif** karena `overflow-y: auto` dan `overflow-x: hidden`

### 📜 divisi.html

File HTML terpisah yang memuat informasi lima divisi:
1. **Event Management**
2. **Creative & Design**
3. **Finance**
4. **Video Documentation**
5. **Logistic**

Dimuat secara dinamis ke halaman utama menggunakan JavaScript (tanpa reload halaman).

### ⚙️ JavaScript (di dalam `<script>`)

Mengatur aksi tombol:
- **Daftar Sekarang**: membuka Google Form di tab baru
- **Guidebook**: membuka file PDF di tab baru
- **Divisi**: mengambil isi `divisi.html` menggunakan `fetch()` dan menampilkannya dalam elemen `#divisionContent`
- **Back**: kembali ke halaman utama

---

## 🔧 Cara Menjalankan

1. **Clone repo ini** atau download ZIP
2. Buka file `index.html` langsung di browser
3. Selesai! Tidak perlu instalasi atau server tambahan

## 📱 Responsif & Mobile Friendly

- Tampilan otomatis menyesuaikan ukuran layar (HP, tablet, laptop)
- Dapat discroll jika konten melebihi tinggi layar
- Semua teks dan tombol tetap terbaca dan bisa diakses

---

## 💡 Cocok untuk:

- Web event sederhana (panitia, lomba, seminar)
- Landing page untuk komunitas RT/RW
- Belajar dasar web HTML + CSS + JS

---

## 🙌 Terima Kasih

Proyek ini dibuat dengan semangat gotong royong untuk memeriahkan **Hari Kemerdekaan RI ke-80**.

> "Bergerak Menjadi Indonesia Maju 🇮🇩"

---
