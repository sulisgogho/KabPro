export interface Video {
  slug: string;
  thumbnail: string;
  title: string;
  videoUrl: string; // The youtube or actual video URL
  date: string;
  description: string;
}

export const videoData: Video[] = [
  {
    slug: "progres-pembangunan-tol-probowangi-2026",
    thumbnail: "https://images.unsplash.com/photo-1577002660505-8b38dfd50d7e?auto=format&fit=crop&q=80&w=1000",
    title: "Progres Pembangunan Tol Probowangi 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // dummy
    date: "10 Agustus 2026",
    description: "Pemantauan udara dan laporan langsung progres pembangunan jalan tol Probowangi seksi Probolinggo. Pembangunan terus dikebut untuk selesai sesuai target."
  }
];
