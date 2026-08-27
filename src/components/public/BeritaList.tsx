"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, User, ChevronRight, ChevronLeft, Search, Filter } from 'lucide-react';
import { Berita } from '@prisma/client';

// Type extension to include dateString for frontend display
type FormattedBerita = Berita & { dateString: string };

interface BeritaListProps {
  initialBerita: FormattedBerita[];
}

export default function BeritaList({ initialBerita }: BeritaListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Pemerintahan", "Pembangunan", "Kesejahteraan", "Pariwisata"];

  const filteredBerita = useMemo(() => {
    return initialBerita.filter((item) => {
      const matchesSearch = item.judul.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.konten.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "Semua" || item.kategori === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, initialBerita]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Cari judul atau isi berita..."
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
        {filteredBerita.map((item) => (
          <Link href={`/publikasi/berita/${item.slug}`} key={item.id} className="group cursor-pointer block">
            <div className="rounded-2xl overflow-hidden mb-4 aspect-[4/3] bg-slate-200 relative">
              <img 
                src={item.gambarUrl || ''} 
                alt={item.judul} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{item.kategori}</div>
            <h3 className="text-xl font-bold text-slate-800 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
              {item.judul}
            </h3>
            <div className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4" dangerouslySetInnerHTML={{ __html: item.konten }}>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-orange-500" />
                {item.dateString}
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-orange-500" />
                Admin
              </div>
            </div>
          </Link>
        ))}

        {filteredBerita.length === 0 && (
          <div className="col-span-2 text-center py-12 text-slate-500">
            Tidak ada berita yang ditemukan.
          </div>
        )}
      </div>

      {/* Pagination (TBD for real server pagination) */}
      {filteredBerita.length > 0 && (
        <div className="flex justify-center items-center gap-2 mt-16">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100"><ChevronLeft className="w-5 h-5" /></button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white font-bold">1</button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50"><ChevronRight className="w-5 h-5" /></button>
        </div>
      )}
    </>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
