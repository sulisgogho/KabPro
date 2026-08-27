"use client";

import React, { useState } from 'react';
import { Search, MapPin, Map } from 'lucide-react';
import Image from 'next/image';

interface Pariwisata {
  id: string;
  nama: string;
  lokasi: string;
  deskripsi: string;
  gambarUrl: string | null;
  linkMaps: string | null;
}

export default function PariwisataList({ initialData }: { initialData: Pariwisata[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWisata = initialData.filter(wisata => 
    wisata.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
    wisata.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
    wisata.lokasi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="flex justify-end mb-10">
        <div className="w-full md:w-80">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari wisata (contoh: pantai, air terjun)..." 
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-slate-700 placeholder:text-slate-400 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Grid Pariwisata */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWisata.length > 0 ? (
          filteredWisata.map((wisata) => (
            <div key={wisata.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image 
                  src={wisata.gambarUrl || "/wisata/bromo.jpg"} 
                  alt={wisata.nama} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-slate-900/0"></div>
                <h3 className="absolute bottom-4 left-6 right-6 text-white text-xl font-black leading-tight drop-shadow-md">
                  {wisata.nama}
                </h3>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex items-start gap-2.5 text-slate-500 text-sm">
                    <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{wisata.lokasi}</span>
                  </div>
                  <a 
                    href={wisata.linkMaps || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wisata.nama + ' ' + wisata.lokasi)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-center w-full bg-blue-50 text-blue-600 font-bold py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Buka di Maps
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-slate-100">
            <Map className="w-16 h-16 text-slate-200 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">Wisata tidak ditemukan</h3>
            <p className="text-slate-500">Coba gunakan kata kunci pencarian yang lain.</p>
          </div>
        )}
      </div>
    </>
  );
}
