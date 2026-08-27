import React from 'react';
import { Map, TreePine } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';

export default async function TamanPage() {
  const tamanData = await prisma.taman.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="relative h-[350px] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="/wisata/sl park kraksaan.jpg" 
            alt="Hero Taman" 
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            Ruang Terbuka Hijau & Taman
          </h1>
          <p className="text-lg text-slate-200">
            Fasilitas ruang terbuka hijau untuk rekreasi santai, olahraga ringan, dan area bermain keluarga di wilayah perkotaan Kabupaten Probolinggo.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-12">
        {/* Grid Taman */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {tamanData.map((taman) => (
            <div key={taman.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col border border-slate-100">
              <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
                <Image 
                  src={taman.gambarUrl || "/wisata/sl park kraksaan.jpg"} 
                  alt={taman.nama} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-black mb-2 drop-shadow-md">
                    {taman.nama}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <a 
                  href={taman.linkMaps || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(taman.lokasi)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-green-50 hover:bg-green-600 text-green-600 hover:text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Map className="w-5 h-5" /> Lihat di Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>
        {tamanData.length === 0 && (
          <div className="py-12 text-center text-slate-500">
            Belum ada data taman.
          </div>
        )}
      </div>
    </main>
  );
}
