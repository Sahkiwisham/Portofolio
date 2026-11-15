/* ==========================================================================
   SAHKI PORTFOLIO — STRUCTURED DATA STORE (PHOTOS, SKILLS, SO ASSIGNMENTS)
   ========================================================================== */
const SAHKI_PORTFOLIO_DATA = {
  student: {
    name: "M Sahki Wisham Fauzan",
    nim: "2503010033",
    kelas: "Kelas B",
    prodi: "Teknik Informatika",
    university: "Universitas Perjuangan Tasikmalaya",
    email: "faujanwisam@gmail.com",
    github: "https://github.com/sahkiwisham"
  },
  tickerSlides: [
    {
      kicker: "01 / 03 • VIRTUAL PHOTOGRAPHY",
      title: "Forza Horizon 6 — Editorial Frames",
      desc: "Kurasi fotografi virtual monokrom-ke-berwarna menampilkan Ferrari 488 Pista, Porsche 911 GT3 RS, hingga aksi drift di lereng Gunung Fuji.",
      metric: "OPEN GALLERY →",
      href: "galeri.html",
      img: "assets/img/fh6-05-lexus-is300-fuji-drift.jpg"
    },
    {
      kicker: "02 / 03 • SISTEM OPERASI TUGAS 1",
      title: "Disk Scheduling Algorithms (200 Tracks)",
      desc: "Analisis komparatif 6 algoritma penjadwalan disk (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK) lengkap dengan grafik pergerakan head.",
      metric: "OPTIMAL: LOOK (264 TRACK) →",
      href: "so-tugas1.html",
      visual: "disk"
    },
    {
      kicker: "03 / 03 • SISTEM OPERASI TUGAS 2",
      title: "CPU Scheduling & Gantt Visualization",
      desc: "Perhitungan Turnaround Time & Gantt Chart eksekusi untuk FCFS, SJF, SRT, HPRN, serta Round Robin (q=3 & q=5).",
      metric: "FASTEST AVG TAT: 13.00 (SRT) →",
      href: "so-tugas2.html",
      visual: "gantt"
    }
  ],
  photos: [
    {"id": "vp-1", "title": "Pit Stop Readiness", "sub": "Ferrari 488 Pista • Forza Horizon 6", "category": "lainnya", "src": "assets/img/fh6-01-ferrari-488-pista.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-2", "title": "Touge Lineup at Dusk", "sub": "Porsche 911 GT3 RS • Forza Horizon 6", "category": "porsche", "src": "assets/img/fh6-02-porsche-911-gt3-rs-dusk.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-3", "title": "Wet Carbon Rear", "sub": "BMW • Forza Horizon 6", "category": "lainnya", "src": "assets/img/fh6-03-bmw-wet-rear.jpg", "w": 1125, "h": 1800, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-4", "title": "Garage Session", "sub": "Nissan 180SX • Forza Horizon 6", "category": "jdm", "src": "assets/img/fh6-04-nissan-180sx-garage.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-5", "title": "Driftzone Below Fuji", "sub": "Lexus IS300 • Forza Horizon 6", "category": "fuji", "src": "assets/img/fh6-05-lexus-is300-fuji-drift.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-6", "title": "Overhead Slide", "sub": "Lexus IS300 • Forza Horizon 6", "category": "drift", "src": "assets/img/fh6-06-lexus-is300-overhead-slide.jpg", "w": 1125, "h": 1800, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-7", "title": "Fuji Approach", "sub": "Lexus IS300 • Forza Horizon 6", "category": "fuji", "src": "assets/img/fh6-07-lexus-is300-fuji-approach.jpg", "w": 1125, "h": 1800, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-8", "title": "Green LFA in Motion", "sub": "Lexus LFA • Forza Horizon 6", "category": "jdm", "src": "assets/img/fh6-08-lexus-lfa-motion.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-9", "title": "Pit Lane Overhead", "sub": "Porsche 918 Spyder • Forza Horizon 6", "category": "porsche", "src": "assets/img/fh6-09-porsche-918-pitlane-overhead.jpg", "w": 1125, "h": 1800, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-10", "title": "Spyder at the Overlook", "sub": "Porsche 918 Spyder • Forza Horizon 6", "category": "porsche", "src": "assets/img/fh6-10-porsche-918-overlook.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-11", "title": "Pines and Peaks", "sub": "Porsche 918 Spyder • Forza Horizon 6", "category": "porsche", "src": "assets/img/fh6-11-porsche-918-pines.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-12", "title": "Spyder Badge", "sub": "Porsche 918 Spyder • Forza Horizon 6", "category": "porsche", "src": "assets/img/fh6-12-porsche-918-badge.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-13", "title": "Silver Spyder, Crosswalk Light", "sub": "Porsche 918 Spyder • Forza Horizon 6", "category": "porsche", "src": "assets/img/fh6-13-porsche-918-crosswalk.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-14", "title": "Rear Wheel Study", "sub": "Porsche 918 Spyder • Forza Horizon 6", "category": "porsche", "src": "assets/img/fh6-14-porsche-918-wheel.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-15", "title": "Straight-On Exhaust", "sub": "Porsche 918 Spyder • Forza Horizon 6", "category": "porsche", "src": "assets/img/fh6-15-porsche-918-rear.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-16", "title": "Headlight Detail", "sub": "Close-up • Forza Horizon 6", "category": "lainnya", "src": "assets/img/fh6-16-headlight-detail.jpg", "w": 1125, "h": 1800, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-17", "title": "Looking Up in Shibuya", "sub": "Street • Forza Horizon 6", "category": "lainnya", "src": "assets/img/fh6-17-shibuya-looking-up.jpg", "w": 1125, "h": 1800, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-18", "title": "Fire Hydrant Corner", "sub": "Street • Forza Horizon 6", "category": "lainnya", "src": "assets/img/fh6-18-fire-hydrant-corner.jpg", "w": 1125, "h": 1800, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-19", "title": "Fuji, Golden Haze", "sub": "Mount Fuji • Forza Horizon 6", "category": "fuji", "src": "assets/img/fh6-19-fuji-golden-haze.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-20", "title": "Fuji at Blue Hour", "sub": "Mount Fuji • Forza Horizon 6", "category": "fuji", "src": "assets/img/fh6-20-fuji-blue-hour.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-21", "title": "Fuji, Last Light", "sub": "Mount Fuji • Forza Horizon 6", "category": "fuji", "src": "assets/img/fh6-21-fuji-last-light.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-22", "title": "Fuji Under Broken Clouds", "sub": "Mount Fuji • Forza Horizon 6", "category": "fuji", "src": "assets/img/fh6-22-fuji-broken-clouds.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"},
    {"id": "vp-23", "title": "Fuji After Dark", "sub": "Mount Fuji • Forza Horizon 6", "category": "fuji", "src": "assets/img/fh6-23-fuji-after-dark.jpg", "w": 1800, "h": 1125, "fallback": "assets/img/fh6-01-ferrari-488-pista.jpg"}
  ],
  skills: [
    { name: "HTML5 & Semantic Web", level: "92%", cat: "web", desc: "Penyusunan struktur dokumen web semantik multi-halaman sesuai standar aksesibilitas." },
    { name: "CSS3 & Responsive Grid", level: "90%", cat: "web", desc: "Tata letak editorial Swiss/Grid, animasi transisi halus, dan adaptasi penuh mobile-first." },
    { name: "Vanilla JavaScript (ES6+)", level: "86%", cat: "web", desc: "Manipulasi DOM dinamis, Canvas 2D rendering, simulasi algoritma, dan validasi form." },
    { name: "C++ & Struktur Data", level: "88%", cat: "programming", desc: "Implementasi algoritma pengurutan, antrean (queue), linked list, dan simulasi penjadwalan." },
    { name: "Python & Machine Learning", level: "82%", cat: "programming", desc: "Pengolahan dataset, klasifikasi Naive Bayes, dan otomatisasi skrip analisis data." },
    { name: "Cisco Packet Tracer", level: "84%", cat: "network", desc: "Perancangan topologi jaringan LAN multi-ruangan, konfigurasi DHCP, dan routing dasar." }
  ],
  extraAssignments: []
};
