import React from 'react';
import { ChevronRight } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import DokumenList from '@/components/public/DokumenList';

export default async function DokumenPage() {
  const dokumenData = await prisma.dokumen.findMany({
    orderBy: { tanggal: 'desc' }
  });

  const formattedDokumen = dokumenData.map(d => ({
    ...d,
    dateString: d.tanggal.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    year: d.tanggal.getFullYear().toString()
  }));

  return (
    <div className="bg-slate-50 min-h-screen pt-40 pb-20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium mb-10">
          <Link href="/" className="text-blue-600 hover:underline">Beranda</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-500">Dokumen</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-extrabold text-slate-800 mb-4">Dokumen Publik</h1>
          <p className="text-slate-600">Akses berbagai informasi, laporan, dan dokumen publik Pemerintah Kabupaten Probolinggo.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-4 inline-block">Dokumen</h2>
            
            <DokumenList initialDokumen={formattedDokumen} />
            
          </div>
        </div>
      </div>
    </div>
  );
}
