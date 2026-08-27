"use client";

import React, { useState } from 'react';
import { FileText, Calendar, Eye, Download, Search, ChevronRight } from 'lucide-react';
import { Dokumen } from '@prisma/client';

type FormattedDokumen = Dokumen & { dateString: string, year: string };

interface DokumenListProps {
  initialDokumen: FormattedDokumen[];
}

export default function DokumenList({ initialDokumen }: DokumenListProps) {
  const [selectedYear, setSelectedYear] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique years for the filter
  const years = ['Semua', ...Array.from(new Set(initialDokumen.map(d => d.year)))].sort((a, b) => {
    if (a === 'Semua') return -1;
    if (b === 'Semua') return 1;
    return parseInt(b) - parseInt(a);
  });

  const filteredDokumen = initialDokumen.filter(d => {
    const matchYear = selectedYear === 'Semua' || d.year === selectedYear;
    const matchSearch = d.judul.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        d.kategori.toLowerCase().includes(searchQuery.toLowerCase());
    return matchYear && matchSearch;
  });

  return (
    <>
      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative min-w-[200px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-slate-400" />
          </div>
          <select
            className="block w-full pl-10 pr-10 py-2 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronRight className="h-4 w-4 text-slate-400 rotate-90" />
          </div>
        </div>
        
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Cari judul atau kategori dokumen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grid Dokumen */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredDokumen.length > 0 ? (
          filteredDokumen.map((doc) => (
            <div key={doc.id} className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col h-full shadow-sm hover:shadow-md hover:border-blue-100 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-blue-600 font-bold text-sm leading-tight">{doc.kategori}</h3>
                  <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5"><Calendar className="w-3 h-3" /> {doc.dateString}</p>
                </div>
              </div>
              
              <h4 className="font-extrabold text-slate-800 text-[15px] leading-snug mb-8 flex-1 group-hover:text-blue-700 transition-colors">
                {doc.judul}
              </h4>
              
              <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-50">
                <a href={doc.fileUrl || '#'} className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors text-sm border border-slate-200">
                  <Eye className="w-4 h-4" /> Pratinjau
                </a>
                <a href={doc.fileUrl || '#'} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors text-sm shadow-sm hover:shadow">
                  <Download className="w-4 h-4" /> Unduh
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center bg-white rounded-2xl border border-slate-100">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">Belum ada dokumen untuk tahun yang dipilih.</p>
          </div>
        )}
      </div>
    </>
  );
}
