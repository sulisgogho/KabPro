'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function AgendaFilter({ 
  initialQuery = '', 
  initialStart = '', 
  initialEnd = '' 
}: { 
  initialQuery?: string, 
  initialStart?: string, 
  initialEnd?: string 
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (start) params.set('start', start);
    if (end) params.set('end', end);
    
    router.push(`/agenda?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row gap-4 items-end">
      
      <div className="flex-1 w-full">
        <label className="block text-xs font-black text-slate-400 tracking-wider mb-2 uppercase">Cari Agenda</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 outline-none" 
            placeholder="Cari nama agenda, lokasi..." 
          />
        </div>
      </div>
      
      <div className="w-full md:w-48">
        <label className="block text-xs font-black text-slate-400 tracking-wider mb-2 uppercase">Dari Tanggal</label>
        <input 
          type="date" 
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none" 
        />
      </div>

      <div className="w-full md:w-48">
        <label className="block text-xs font-black text-slate-400 tracking-wider mb-2 uppercase">Sampai Tanggal</label>
        <input 
          type="date" 
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none" 
        />
      </div>

      <button 
        type="submit"
        className="w-full md:w-32 bg-[#001D4A] hover:bg-blue-900 text-white font-bold rounded-xl text-sm px-5 py-3 text-center transition-colors h-[42px] flex items-center justify-center gap-2 shrink-0"
      >
        <Search className="w-4 h-4" /> Cari
      </button>

    </form>
  );
}
