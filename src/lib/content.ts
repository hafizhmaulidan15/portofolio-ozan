import type { Experience, Achievement, Skill } from "@/types"

export const personal = {
  name: "Ibrahim Nurfauzan",
  title: "Mahasiswa Fakultas Hukum",
  tagline: "Hukum adalah panglima. Keadilan adalah tujuan.",
  bio: `Mahasiswa Fakultas Hukum Universitas Brawijaya semester 7 dengan fokus minat pada hukum pidana. Aktif dalam organisasi kemahasiswaan dan unit kegiatan mahasiswa, saya percaya bahwa integritas dan dedikasi adalah fondasi utama dalam meniti karir di dunia hukum. Berbekal pengalaman dalam kepanitiaan, kompetisi, dan pengembangan diri di bidang taekwondo, saya terus mengasah kemampuan komunikasi, kepemimpinan, dan analisis hukum.`,
  email: "ibrahimnurfauzan000@gmail.com",
  phone: "+62 857-3882-3581",
  location: "Bogor, Jawa Barat",
  linkedin: "https://www.linkedin.com/in/ibrahim-nurfauzan/",
  university: "Universitas Brawijaya",
  faculty: "Fakultas Hukum",
  semester: "Semester 7",
  interest: "Hukum Pidana",
}

export const education = [
  {
    institution: "Universitas Brawijaya",
    degree: "Fakultas Hukum",
    year: "2023 — Sekarang",
    description: "Semester 7 · Minat Hukum Pidana",
  },
  {
    institution: "MAN 1 Kota Bogor",
    degree: "Madrasah Aliyah",
    year: "— 2023",
    description: "",
  },
  {
    institution: "SMP Daarul Quran",
    degree: "SMP",
    year: "— 2019",
    description: "Hafalan 10 Juz",
  },
]

export const experiences: Experience[] = [
  {
    id: "exp-hmi",
    role: "Ketua Pelaksana",
    organization: "Rapat Anggota Komisariat HMI Cabang (P) Kota Malang · Komisariat Hukum Brawijaya",
    duration: "2025",
    description: [
      "Memimpin dan mengkoordinasikan seluruh rangkaian Rapat Anggota Komisariat",
      "Bertanggung jawab atas kelancaran agenda organisasi",
    ],
    type: "organization",
  },
  {
    id: "exp-tae-ub",
    role: "Pengurus UKM Tae Kwon Do",
    organization: "Universitas Brawijaya · SK Rektor No. 7017/2024",
    duration: "2024",
    description: [
      "Staff Divisi Acara SPAB 112 UKM Tae Kwon Do Universitas Brawijaya",
      "Terlibat dalam seleksi penerimaan anggota baru dan kepanitiaan",
    ],
    type: "organization",
  },
  {
    id: "exp-tae-kota",
    role: "Panitia & Instruktur UKT",
    organization: "Taekwondo Indonesia Kota Malang",
    duration: "2024",
    description: [
      "Ditunjuk sebagai panitia dan instruktur Ujian Kenaikan Tingkat Periode 2",
      "Membantu pelaksanaan ujian tingkat di Yonbekang 2 Kostrad Malang",
    ],
    type: "committee",
  },
  {
    id: "exp-clf",
    role: "Sub Koordinator Perkap",
    organization: "Constitutional Law Festival 2023",
    duration: "2023",
    description: [
      "Bertanggung jawab atas koordinasi perlengkapan acara",
    ],
    type: "committee",
  },
  {
    id: "exp-irma",
    role: "Pengurus",
    organization: "Ikatan Remaja Masjid",
    duration: "2020 — Sekarang",
    description: [
      "Mengelola kegiatan masjid saat Ramadan dan Idul Fitri",
      "Menjadi panitia peringatan Maulid Nabi",
    ],
    type: "organization",
  },
  {
    id: "exp-man",
    role: "Panitia Lomba",
    organization: "MAN 1 Kota Bogor",
    duration: "2022",
    description: [
      "Panitia lomba voli dalam rangka kegiatan 17 Agustus dan Classmeet",
    ],
    type: "committee",
  },
]

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Hak Cipta Poster",
    detail: "\"Saling Suka, Tapi Aman: Belajar Menjaga Diri dari Bahaya Seks Bebas\" — Kementerian Hukum RI",
    year: "2025",
  },
  {
    id: "ach-2",
    title: "Juara 2 Taekwondo Tingkat Nasional",
    detail: "Kejuaraan Taekwondo Antar Nasional / KONI",
    year: "",
  },
  {
    id: "ach-3",
    title: "Juara 1 Taekwondo Antar Kabupaten Bogor",
    detail: "",
    year: "",
  },
  {
    id: "ach-4",
    title: "Juara 3 Taekwondo Antar Kota Bogor",
    detail: "",
    year: "",
  },
  {
    id: "ach-5",
    title: "Juara 1 Silat Antar Pondok",
    detail: "",
    year: "",
  },
  {
    id: "ach-6",
    title: "Juara 3 Basket Antar Sekolah",
    detail: "MAN 1 Kota Bogor",
    year: "2022",
  },
  {
    id: "ach-7",
    title: "Hafalan 10 Juz",
    detail: "SMP Daarul Quran",
    year: "2019",
  },
]

export const skills: Skill[] = [
  {
    category: "Hukum",
    items: ["Penalaran Hukum", "Analisis Kasus Pidana", "Legal Research"],
  },
  {
    category: "Organisasi",
    items: ["Kepemimpinan", "Koordinasi Tim", "Manajemen Acara"],
  },
  {
    category: "Komunikasi",
    items: ["Public Speaking", "Negosiasi", "Penulisan"],
  },
  {
    category: "Teknis",
    items: ["Microsoft Office", "Canva"],
  },
  {
    category: "Bahasa",
    items: ["Indonesia", "Inggris (Menengah)"],
  },
]

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/tentang" },
  { label: "Pengalaman", href: "/pengalaman" },
  { label: "Prestasi", href: "/prestasi" },
  { label: "Kontak", href: "/kontak" },
]
