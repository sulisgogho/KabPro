import React from 'react';
import Link from 'next/link';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight, ChevronLeft, Home } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import AgendaFilter from '@/components/public/AgendaFilter';

export const metadata = {
  title: 'Semua Agenda - Pemerintah Kabupaten Probolinggo',
  description: 'Daftar seluruh kegiatan dan agenda resmi Kabupaten Probolinggo',
};

export default async function AgendaPage(
  props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  }
) {
  const searchParams = await props.searchParams;
  const query = typeof searchParams?.q === 'string' ? searchParams.q : '';
  const startDateStr = typeof searchParams?.start === 'string' ? searchParams.start : '';
  const endDateStr = typeof searchParams?.end === 'string' ? searchParams.end : '';
  
  const currentPage = typeof searchParams?.page === 'string' ? Number(searchParams.page) : 1;
  const itemsPerPage = 12;

  // Build where clause
  const whereClause: Prisma.AgendaWhereInput = {};

  if (query) {
    whereClause.judul = {
      contains: query,
    };
  }

  if (startDateStr || endDateStr) {
    whereClause.tanggalPelaksanaan = {};
    if (startDateStr) {
      whereClause.tanggalPelaksanaan.gte = new Date(startDateStr);
    }
    if (endDateStr) {
      const endDate = new Date(endDateStr);
      endDate.setHours(23, 59, 59, 999);
      whereClause.tanggalPelaksanaan.lte = endDate;
    }
  }

  // Count total matching
  const totalMatching = await prisma.agenda.count({ where: whereClause });
  const totalPages = Math.ceil(totalMatching / itemsPerPage);

  // Fetch data
  const agendas = await prisma.agenda.findMany({
    where: whereClause,
    orderBy: {
      tanggalPelaksanaan: 'asc',
    },
    skip: (currentPage - 1) * itemsPerPage,
    take: itemsPerPage,
  });

  // Calculate stats
  const totalAgenda = await prisma.agenda.count();
  
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
  
  const totalBulanIni = await prisma.agenda.count({
    where: {
      tanggalPelaksanaan: {
        gte: startOfMonth,
        lte: endOfMonth
      }
    }
  });

  const totalAkanDatang = await prisma.agenda.count({
    where: {
      tanggalPelaksanaan: {
        gte: now
      }
    }
  });

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="flex text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Beranda
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-slate-700 font-medium">Agenda Kabupaten Probolinggo</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Agenda Kabupaten Probolinggo</h1>
          <p className="text-slate-600 text-lg">Jadwal kegiatan dan agenda resmi Pemerintah Kabupaten Probolinggo.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <span className="text-xs font-black tracking-wider text-slate-400 uppercase mb-2">TOTAL AGENDA</span>
            <span className="text-4xl font-extrabold text-slate-900">{totalAgenda}</span>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <span className="text-xs font-black tracking-wider text-slate-400 uppercase mb-2">BULAN INI</span>
            <span className="text-4xl font-extrabold text-slate-900">{totalBulanIni}</span>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <span className="text-xs font-black tracking-wider text-slate-400 uppercase mb-2">AKAN DATANG</span>
            <span className="text-4xl font-extrabold text-slate-900">{totalAkanDatang}</span>
          </div>
        </div>

        {/* Filter Section */}
        <AgendaFilter 
           initialQuery={query} 
           initialStart={startDateStr} 
           initialEnd={endDateStr} 
        />

        {/* Grid Agendas */}
        {agendas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {agendas.map((agenda) => {
              const dateObj = new Date(agenda.tanggalPelaksanaan);
              const dateStr = dateObj.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' });
              const timeStr = dateObj.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
              
              const now = new Date();
              const start = dateObj;
              const end = new Date(start.getTime() + 24 * 60 * 60 * 1000); // 24 jam dari pelaksanaan

              let badgeText = 'AKAN DATANG';
              let badgeColor = 'bg-amber-100 text-amber-700';

              if (now >= start && now <= end) {
                badgeText = 'SEDANG BERLANGSUNG';
                badgeColor = 'bg-blue-600 text-white';
              } else if (now > end) {
                badgeText = 'SUDAH DILAKSANAKAN';
                badgeColor = 'bg-slate-200 text-slate-600';
              }

              return (
                <div key={agenda.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex h-full">
                  {/* Left part (Image/Logo placeholder) */}
                  <div className="w-[30%] bg-slate-50 flex items-center justify-center border-r border-slate-100 p-4 shrink-0 relative overflow-hidden">
                    <img src="/image/Logo-Kabpro.svg" alt="Logo Probolinggo" className="w-20 h-24 object-contain opacity-80 hover:scale-105 transition-transform" />
                  </div>
                  
                  {/* Right part (Details) */}
                  <div className="flex-1 p-5 flex flex-col relative group">
                    <div className="flex justify-between items-start mb-3">
                      <div className={`text-[9px] font-black tracking-wider px-2 py-1 rounded-full ${badgeColor}`}>
                        {badgeText}
                      </div>
                      <div className="text-slate-300 group-hover:text-blue-600 transition-colors">
                         <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-extrabold text-[15px] leading-tight text-slate-900 mb-2 line-clamp-2">{agenda.judul}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 flex-1 leading-relaxed">{agenda.deskripsi}</p>
                    
                    <div className="space-y-1.5 text-[11px] font-medium text-slate-500 mt-auto">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-3.5 h-3.5 text-blue-500" />
                        <span>{dateStr}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        <span>{timeStr} WIB</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" />
                        <span className="line-clamp-1">{agenda.lokasi}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 mb-12">
            <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-700 mb-2">Tidak ada agenda ditemukan</h3>
            <p className="text-slate-500">Coba sesuaikan kata kunci pencarian atau rentang tanggal.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-slate-200 pt-6">
            <div className="text-sm text-slate-500">
              {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, totalMatching)} dari {totalMatching} agenda
            </div>
            <div className="flex gap-2">
              <Link 
                href={currentPage > 1 ? `?page=${currentPage - 1}${query ? `&q=${query}`:''}${startDateStr ? `&start=${startDateStr}`:''}${endDateStr ? `&end=${endDateStr}`:''}` : '#'} 
                className={`w-10 h-10 flex items-center justify-center rounded-lg border ${currentPage > 1 ? 'border-slate-300 hover:bg-slate-50 text-slate-700' : 'border-slate-100 text-slate-300 cursor-not-allowed'}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <Link 
                href={currentPage < totalPages ? `?page=${currentPage + 1}${query ? `&q=${query}`:''}${startDateStr ? `&start=${startDateStr}`:''}${endDateStr ? `&end=${endDateStr}`:''}` : '#'} 
                className={`w-10 h-10 flex items-center justify-center rounded-lg border ${currentPage < totalPages ? 'border-slate-300 hover:bg-slate-50 text-slate-700' : 'border-slate-100 text-slate-300 cursor-not-allowed'}`}
              >
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
