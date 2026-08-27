import React from 'react';
import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import VideoList from '@/components/public/VideoList';

export default async function VideoPage() {
  const videoData = await prisma.video.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const beritaTerbaru = await prisma.berita.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-40 pb-20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium mb-10">
          <Link href="/" className="text-blue-600 hover:underline">Beranda</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-500">Video Informasi dan Edukasi</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-extrabold text-slate-800 mb-4">Video Informasi dan Edukasi</h1>
          <p className="text-slate-600">Temukan Informasi Penting Melalui Video untuk Tetap Terinformasi dan Teredukasi</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content (Videos) */}
          <VideoList initialData={videoData} />

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] shrink-0">
            
            {/* Berita Terbaru Widget */}
            <div className="mb-12">
              <h2 className="text-xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 inline-block">Berita Terbaru</h2>
              <div className="flex flex-col gap-6">
                {beritaTerbaru.map((berita) => (
                  <Link href={`/publikasi/berita/${berita.slug}`} key={berita.id} className="flex gap-4 group">
                    <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-slate-200">
                      <img src={berita.gambarUrl || "/wisata/bromo.jpg"} alt={berita.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors leading-snug mb-1 line-clamp-2">
                        {berita.judul}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mb-2">Pemerintah Kabupaten Probolinggo</p>
                      <div className="flex items-center gap-1.5 text-[10px] font-medium text-orange-500">
                        <Calendar className="w-3 h-3" />
                        {new Date(berita.tanggal).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
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
