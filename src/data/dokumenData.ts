export interface Dokumen {
  id: string;
  title: string;
  category: string;
  date: string;
  year: string;
  previewUrl: string;
  downloadUrl: string;
}

export const dokumenData: Dokumen[] = [
  {
    id: "dok-1",
    title: "Rencana Pembangunan Daerah Kabupaten Probolinggo",
    category: "Dokumen Publik",
    date: "11 Agt 2026",
    year: "2026",
    previewUrl: "#",
    downloadUrl: "#"
  },
  {
    id: "dok-2",
    title: "Informasi Penetapan Perda Pertanggungjawaban Pelaksana APBD",
    category: "Dokumen Anggaran",
    date: "10 Agt 2026",
    year: "2026",
    previewUrl: "#",
    downloadUrl: "#"
  },
  {
    id: "dok-3",
    title: "Laporan Keuangan Badan Usaha Milik Daerah",
    category: "Laporan Keuangan",
    date: "23 Jun 2026",
    year: "2026",
    previewUrl: "#",
    downloadUrl: "#"
  },
  {
    id: "dok-4",
    title: "Laporan Kinerja Pemerintah Daerah Tahun 2025",
    category: "Laporan Kinerja",
    date: "17 Jun 2026",
    year: "2025",
    previewUrl: "#",
    downloadUrl: "#"
  },
  {
    id: "dok-5",
    title: "Informasi Laporan Akuntabilitas dan Kinerja Tahunan",
    category: "Dokumen Publik",
    date: "29 Mei 2026",
    year: "2025",
    previewUrl: "#",
    downloadUrl: "#"
  },
  {
    id: "dok-6",
    title: "Informasi Opini BPK RI",
    category: "Dokumen Publik",
    date: "29 Mei 2026",
    year: "2025",
    previewUrl: "#",
    downloadUrl: "#"
  },
  {
    id: "dok-7",
    title: "Rencana Tata Ruang Wilayah 2024-2034",
    category: "Dokumen Publik",
    date: "12 Mar 2024",
    year: "2024",
    previewUrl: "#",
    downloadUrl: "#"
  },
  {
    id: "dok-8",
    title: "Laporan Penyelenggaraan Pemerintahan Daerah 2024",
    category: "Laporan Kinerja",
    date: "11 Mar 2024",
    year: "2024",
    previewUrl: "#",
    downloadUrl: "#"
  }
];
