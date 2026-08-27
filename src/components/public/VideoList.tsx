"use client";

import React, { useState, useMemo } from 'react';
import { Calendar, ChevronRight, ChevronLeft, Search, Filter } from 'lucide-react';
import Link from 'next/link';

interface Video {
  id: string;
  judul: string;
  youtubeId: string;
  kategori: string;
  tanggal: Date;
}

export default function VideoList({ initialData }: { initialData: Video[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", ...Array.from(new Set(initialData.map(v => v.kategori)))];

  const filteredVideos = useMemo(() => {
    return initialData.filter((item) => {
      const matchesSearch = item.judul.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Semua" || item.kategori === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, initialData]);

  return (
    <div className="flex-1">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Cari judul video..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="relative min-w-[200px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-slate-400" />
          </div>
          <select
            className="block w-full pl-10 pr-10 py-2 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDownIcon className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredVideos.map((item) => (
          <a key={item.id} href={`https://www.youtube.com/watch?v=${item.youtubeId}`} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
            <div className="rounded-2xl overflow-hidden mb-4 aspect-video bg-slate-200 relative">
              <img 
                src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`} 
                alt={item.judul} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                }}
              />
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-orange-500 border-b-6 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{item.kategori}</div>
            <h3 className="text-xl font-bold text-slate-800 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
              {item.judul}
            </h3>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-500">
              <Calendar className="w-4 h-4" />
              {new Date(item.tanggal).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </a>
        ))}

        {filteredVideos.length === 0 && (
          <div className="col-span-2 text-center py-12 text-slate-500">
            Tidak ada video yang ditemukan.
          </div>
        )}
      </div>
    </div>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
