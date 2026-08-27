import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function LayananPage() {
  const layananData = await prisma.layanan.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-32 w-full">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Layanan Publik Satu Pintu</h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Temukan semua layanan administratif, kependudukan, pajak, dan perizinan Kabupaten Probolinggo di satu tempat.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {layananData.map((item, i) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl uppercase">
              {item.nama.charAt(0)}
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2">{item.nama}</h3>
            <p className="text-sm text-blue-600 font-bold mb-3">{item.kategori}</p>
            <p className="text-sm text-slate-500 font-medium mb-6 flex-grow">{item.deskripsi}</p>
            {item.linkLayanan && (
              <a href={item.linkLayanan} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-xl text-center transition-colors mt-auto">Akses Layanan &rarr;</a>
            )}
          </div>
        ))}
        {layananData.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500">
            Belum ada data layanan publik.
          </div>
        )}
      </div>
    </main>
  );
}
