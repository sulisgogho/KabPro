import React from 'react';
import { notFound } from 'next/navigation';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function BeritaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const berita = await prisma.berita.findUnique({
    where: { slug: resolvedParams.slug }
  });

  if (!berita) {
    notFound();
  }

  // Get other recent news for sidebar
  const recentNews = await prisma.berita.findMany({
    where: { NOT: { slug: resolvedParams.slug } },
    orderBy: { tanggal: 'desc' },
    take: 4
  });

  const dateString = berita.tanggal.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

  // Map Category to Colors (Optional detail)
  const categoryColors: Record<string, string> = {
    'Pemerintahan': 'bg-blue-600',
    'Pembangunan': 'bg-orange-500',
    'Kesejahteraan': 'bg-green-600',
    'Pariwisata': 'bg-purple-600'
  };
  const color = categoryColors[berita.kategori] || 'bg-blue-600';

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-28">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/publikasi/berita" className="hover:text-blue-600 transition-colors">Publikasi</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-800 font-bold">{berita.kategori}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column (Main Article) */}
          <article className="flex-1">
            <span className={`inline-block ${color} text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-md mb-4`}>
              {berita.kategori}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              {berita.judul}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium mb-8 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" /> {dateString}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" /> Admin
              </div>
            </div>

            {berita.gambarUrl && (
              <div className="rounded-3xl overflow-hidden mb-8 shadow-sm">
                <img src={berita.gambarUrl} alt={berita.judul} className="w-full h-auto object-cover max-h-[500px]" />
              </div>
            )}

            <div 
              className="prose prose-lg prose-slate max-w-none prose-p:leading-relaxed prose-p:mb-6 prose-headings:font-black prose-a:text-blue-600"
              dangerouslySetInnerHTML={{ __html: berita.konten }}
            />
          </article>

          {/* Right Column (Sidebar) */}
          <aside className="w-full lg:w-[350px] shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-red-600"></span> Berita Terbaru
              </h3>
              
              <div className="flex flex-col gap-6">
                {recentNews.map((news) => {
                  const newsDate = news.tanggal.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
                  return (
                    <Link href={`/publikasi/berita/${news.slug}`} key={news.id} className="group flex gap-4 items-start">
                      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-100 relative">
                        <img src={news.gambarUrl || ''} alt={news.judul} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-[15px] leading-snug group-hover:text-blue-600 transition-colors line-clamp-3 mb-2">
                          {news.judul}
                        </h4>
                        <p className="text-[12px] text-slate-500 font-medium flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {newsDate}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
