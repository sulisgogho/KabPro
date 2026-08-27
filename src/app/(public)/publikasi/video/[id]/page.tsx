import React from 'react';
import { notFound } from 'next/navigation';
import { Calendar, ChevronRight } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function VideoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const video = await prisma.video.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!video) {
    notFound();
  }

  // Get other recent videos for sidebar
  const recentVideos = await prisma.video.findMany({
    where: { NOT: { id: resolvedParams.id } },
    orderBy: { tanggal: 'desc' },
    take: 4
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-28">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/publikasi/video" className="hover:text-blue-600 transition-colors">Video Edukasi</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-800 font-bold truncate max-w-[200px] sm:max-w-none">{video.judul}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column (Main Video) */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              {video.judul}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium mb-8 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-600" /> {new Date(video.tanggal).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden mb-8 shadow-lg bg-black aspect-video relative">
              <iframe 
                src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                title={video.judul}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <aside className="w-full lg:w-[350px] shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-red-600"></span> Video Lainnya
              </h3>
              
              <div className="flex flex-col gap-6">
                {recentVideos.length > 0 ? recentVideos.map((vid, idx) => (
                  <Link href={`/publikasi/video/${vid.id}`} key={idx} className="group flex flex-col gap-3">
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-100 relative bg-slate-200">
                      <img src={`https://img.youtube.com/vi/${vid.youtubeId}/maxresdefault.jpg`} alt={vid.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-[15px] leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                        {vid.judul}
                      </h4>
                      <p className="text-[12px] text-slate-500 font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {new Date(vid.tanggal).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </Link>
                )) : (
                  <div className="text-sm text-slate-500 p-4 bg-slate-100 rounded-xl text-center">
                    Belum ada video lainnya.
                  </div>
                )}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
