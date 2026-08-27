import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import BeritaList from '@/components/public/BeritaList';

export default async function BeritaPage() {
  const beritaData = await prisma.berita.findMany({
    orderBy: { tanggal: 'desc' }
  });

  const formattedBerita = beritaData.map(b => ({
    ...b,
    dateString: b.tanggal.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  }));

  const videoData = await prisma.video.findMany({
    take: 3,
    orderBy: { tanggal: 'desc' }
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-40 pb-20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium mb-10">
          <Link href="/" className="text-blue-600 hover:underline">Beranda</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-500">Berita</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-extrabold text-slate-800 mb-4">Berita Kabupaten Probolinggo Terkini</h1>
          <p className="text-slate-600">Baca Berita Terkini Program dan Kegiatan Kabupaten Probolinggo</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content (Berita) */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-4 inline-block">Berita</h2>
            <BeritaList initialBerita={formattedBerita} />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] shrink-0">
            
            {/* Video Widget */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Video Informasi dan Edukasi</h2>
              <div className="flex flex-col gap-4">
                {videoData.map((video) => (
                  <Link href={`/publikasi/video/${video.id}`} key={video.id} className="flex gap-4 group">
                    <div className="w-32 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-200 relative">
                      <img src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} alt={video.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm">
                          <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-blue-600 border-b-4 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">
                      {video.judul}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
