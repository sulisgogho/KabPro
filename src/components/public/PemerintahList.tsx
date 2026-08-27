"use client";

import React, { useState } from 'react';
import { Search, User, ChevronLeft, ChevronRight } from 'lucide-react';

interface Pemerintah {
  id: string;
  nama: string;
  jabatan: string;
  instansi: string;
}

export default function PemerintahList({ initialData }: { initialData: Pemerintah[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = initialData.filter(item => 
    item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.jabatan.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.instansi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Cari perangkat daerah atau nama pejabat..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
        />
        <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
      </div>

      <p className="text-slate-600 font-medium text-sm">
        Menampilkan {filteredData.length > 0 ? 1 : 0}-{filteredData.length} dari {filteredData.length} Data
      </p>

      {/* Grid Cards */}
      {filteredData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map((item) => (
            <div key={item.id} className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all rounded-xl p-6 flex flex-col justify-between min-h-[160px]">
              <h3 className="font-bold text-slate-800 text-sm mb-2 leading-relaxed">{item.instansi}</h3>
              <p className="text-xs text-orange-600 font-bold mb-4">{item.jabatan}</p>
              <div className="flex items-center gap-2 text-slate-500 text-sm mt-auto">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <span>{item.nama}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500 bg-slate-50 rounded-xl border border-slate-100">
          Tidak ada data yang ditemukan
        </div>
      )}
    </>
  );
}
