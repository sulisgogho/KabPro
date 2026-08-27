"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, LayoutGrid, List, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

interface Prestasi {
  id: string;
  judul: string;
  tahun: string;
  kategori: string;
  deskripsi: string;
  gambarUrl: string | null;
}

export default function PrestasiList({ initialData }: { initialData: Prestasi[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [yearFilter, setYearFilter] = useState<string>('');

  const years = Array.from(new Set(initialData.map(p => p.tahun))).sort((a, b) => Number(b) - Number(a));

  const filteredData = initialData.filter(item => {
    const matchesSearch = item.judul.toLowerCase().includes(searchQuery.toLowerCase()) || item.kategori.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = yearFilter === '' || item.tahun === yearFilter;
    return matchesSearch && matchesYear;
  });

  return (
    <>
      {/* Search Bar */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input 
          type="text" 
          placeholder="Cari Nama Penghargaan atau Instansi" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
        />
      </div>

      {/* Filter and View Toggles */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2 mb-2">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-slate-700">Urutkan :</span>
          <select 
            className="flex items-center justify-between gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 transition-colors shadow-sm min-w-[120px] outline-none"
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
          >
            <option value="">Semua Tahun</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'bg-white text-slate-400 hover:text-slate-600'}`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'bg-white text-slate-400 hover:text-slate-600'}`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards Grid/List */}
      {filteredData.length > 0 ? (
        <div className={`grid ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'}`}>
          {filteredData.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex ${viewMode === 'grid' ? 'flex-col h-full' : 'flex-row items-center gap-6'}`}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 shrink-0">
                <Trophy className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-xs text-slate-500 mb-2">Tahun {item.tahun}</p>
                <h3 className={`text-sm font-bold text-slate-900 mb-3 leading-snug ${viewMode === 'grid' ? 'line-clamp-3' : ''}`}>
                  {item.judul}
                </h3>
                <p className={`text-xs text-slate-500 mt-auto ${viewMode === 'grid' ? 'line-clamp-2' : ''}`}>
                  {item.kategori}
                </p>
                {viewMode === 'list' && (
                  <p className="text-xs text-slate-400 mt-2">{item.deskripsi}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500 bg-white rounded-2xl border border-slate-100">
          Belum ada data prestasi.
        </div>
      )}
    </>
  );
}
