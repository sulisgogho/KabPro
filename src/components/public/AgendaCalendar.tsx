'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

interface AgendaItem {
  id: string;
  judul: string;
  deskripsi: string;
  lokasi: string;
  tanggalPelaksanaan: Date;
}

interface EventItem {
  id: string;
  judul: string;
  deskripsi: string;
  lokasi: string;
  gambarUrl: string | null;
  tanggalPelaksanaan: Date;
}

export default function AgendaCalendar({ agendas, events }: { agendas: AgendaItem[], events?: EventItem[] }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState<'hari' | 'minggu' | 'bulan'>('hari');
  const [eventIndex, setEventIndex] = useState(0);

  // Helper functions for calendar
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const prevEvent = () => {
    if (!events || events.length === 0) return;
    setEventIndex(prev => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextEventBtn = () => {
    if (!events || events.length === 0) return;
    setEventIndex(prev => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const isSameDay = (d1: Date, d2: Date) => {
    return d1.getDate() === d2.getDate() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getFullYear() === d2.getFullYear();
  };

  const isToday = (d: Date) => {
    return isSameDay(d, new Date());
  };

  const isSameWeek = (d1: Date, d2: Date) => {
    const d1Date = new Date(d1);
    d1Date.setHours(0, 0, 0, 0);
    const d2Date = new Date(d2);
    d2Date.setHours(0, 0, 0, 0);
    const diff = d1Date.getDate() - d1Date.getDay();
    const startOfWeek = new Date(d1Date.setDate(diff));
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return d2Date >= startOfWeek && d2Date <= endOfWeek;
  };

  const isSameMonth = (d1: Date, d2: Date) => {
    return d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
  };

  const monthNames = [
    'JANUARI', 'FEBRUARI', 'MARET', 'APRIL', 'MEI', 'JUNI',
    'JULI', 'AGUSTUS', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'
  ];

  const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  const filteredAgendas = useMemo(() => {
    return agendas.filter(agenda => {
      const d = new Date(agenda.tanggalPelaksanaan);
      if (filter === 'hari') {
        return isSameDay(d, selectedDate);
      } else if (filter === 'minggu') {
        return isSameWeek(selectedDate, d);
      } else if (filter === 'bulan') {
        return isSameMonth(selectedDate, d);
      }
      return false;
    });
  }, [agendas, filter, selectedDate]);

  const getStatus = (agenda: AgendaItem) => {
    const now = new Date();
    const start = new Date(agenda.tanggalPelaksanaan);
    const end = new Date(start.getTime() + 24 * 60 * 60 * 1000); // 24 hours

    if (now < start) return { label: 'AKAN DATANG', color: 'bg-amber-100 text-amber-700' };
    if (now >= start && now <= end) return { label: 'SEDANG BERLANGSUNG', color: 'bg-blue-600 text-white' };
    return { label: 'SUDAH DILAKSANAKAN', color: 'bg-slate-400 text-white' };
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Agenda Kabupaten Probolinggo</h2>
          <p className="text-slate-500 font-medium text-lg mt-1">Jadwal kegiatan dan agenda resmi Pemerintah Kabupaten Probolinggo</p>
        </div>
        <Link href="/agenda" className="mt-4 md:mt-0 px-6 py-2 border-2 border-red-500 text-red-500 hover:bg-red-50 font-bold rounded-xl transition-colors inline-block text-center">
          LIHAT SEMUA
        </Link>
      </div>

      {/* Main Container - SATU KOTAK BESAR */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 flex flex-col xl:flex-row overflow-hidden">
        
        {/* KOLOM 1: Calendar */}
        <div className="w-full xl:w-[28%] p-6 md:p-8 border-b xl:border-b-0 xl:border-r border-slate-100 h-fit bg-white shrink-0">
          <div className="flex items-center justify-between mb-6">
            <button onClick={prevMonth} className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h3 className="font-bold text-slate-800 text-lg">
              {monthNames[month]} {year}
            </h3>
            <button onClick={nextMonth} className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-4 text-center mb-2">
            {dayNames.map((day, i) => (
              <div key={day} className={`font-bold text-sm ${i === 0 ? 'text-red-500' : 'text-slate-500'}`}>
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-y-2 text-center">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="w-8 h-8 md:w-10 md:h-10 mx-auto"></div>
            ))}
            
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const date = i + 1;
              const cellDate = new Date(year, month, date);
              const selected = isSameDay(cellDate, selectedDate);
              const today = isToday(cellDate);
              
              return (
                <div key={date} className="w-8 h-8 md:w-10 md:h-10 mx-auto flex items-center justify-center">
                  <button
                    onClick={() => {
                      setSelectedDate(cellDate);
                      setFilter('hari');
                    }}
                    className={`w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                      ${selected ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30' : 
                        today ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-slate-100 text-slate-700'}`}
                  >
                    {date}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* KOLOM 2: Agenda List */}
        <div className={`w-full ${events && events.length > 0 ? 'xl:w-[45%]' : 'xl:flex-1'} p-6 md:p-8 flex flex-col h-full min-h-[450px] bg-white border-b xl:border-b-0 ${events && events.length > 0 ? 'xl:border-r border-slate-100' : ''} shrink-0`}>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">Daftar Agenda</h3>
              <p className="text-slate-500 mt-1 font-medium text-sm">
                {selectedDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
            <div className="flex bg-slate-50 p-1 rounded-xl gap-1 overflow-x-auto custom-scrollbar">
              {['hari', 'minggu', 'bulan'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as 'hari' | 'minggu' | 'bulan')}
                  className={`px-3 py-1.5 whitespace-nowrap rounded-lg text-sm font-bold transition-all
                    ${filter === f ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  {f === 'hari' ? 'Hari' : f === 'minggu' ? 'Minggu' : 'Bulan'}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar max-h-[350px]">
            {filteredAgendas.length > 0 ? (
              filteredAgendas.map((agenda) => {
                const status = getStatus(agenda);
                return (
                  <div key={agenda.id} className="border border-slate-100 hover:border-blue-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 flex flex-col gap-3 group">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-extrabold text-[15px] text-slate-900 leading-snug">{agenda.judul}</h4>
                      <div className={`px-2 py-1 rounded-full text-[10px] font-black tracking-wider uppercase shrink-0 ${status.color}`}>
                        {status.label}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-slate-500 font-medium">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-3.5 h-3.5 text-blue-500" />
                        <span>{new Date(agenda.tanggalPelaksanaan).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        <span>{new Date(agenda.tanggalPelaksanaan).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" />
                        <span>{agenda.lokasi}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="h-full min-h-[150px] flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                  <CalendarIcon className="w-6 h-6 text-slate-300" />
                </div>
                <p className="text-slate-500 text-sm font-medium">Tidak ada agenda pada waktu ini.</p>
              </div>
            )}
          </div>
        </div>

        {/* KOLOM 3: Event Mendatang */}
        {events && events.length > 0 && (
          <div className="w-full xl:flex-1 p-6 md:p-8 bg-white flex flex-col group min-h-[450px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-extrabold text-slate-900">
                 Event Kabupaten
              </h3>
              <div className="flex gap-2">
                <button 
                  onClick={prevEvent}
                  className="w-8 h-8 rounded-full bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextEventBtn}
                  className="w-8 h-8 rounded-full bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="w-full flex-1 rounded-3xl overflow-hidden relative shadow-sm group bg-slate-50">
              <img 
                src={events[eventIndex].gambarUrl || "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600"} 
                alt={events[eventIndex].judul} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" 
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
