import React from 'react';
import { ChevronLeft, Save, X } from 'lucide-react';
import Link from 'next/link';
import { createAgenda } from '@/actions/agenda';

export default function TambahAgenda() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/agenda" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tambah Agenda Baru</h1>
          <p className="text-slate-500">Jadwalkan kegiatan atau agenda Pemerintah Kabupaten Probolinggo.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl">
        <div className="p-8">
          <form action={createAgenda} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nama Agenda</label>
              <input name="judul" required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50/50" placeholder="Misal: Rapat Paripurna DPRD..." />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Tanggal Agenda</label>
                <input name="tanggal" required type="date" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Waktu (Jam)</label>
                <input name="waktu" required type="time" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50/50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Lokasi</label>
              <input name="lokasi" required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none bg-slate-50/50" placeholder="Misal: Pendopo Kabupaten Probolinggo..." />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Keterangan / Peserta</label>
              <textarea name="deskripsi" required rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none bg-slate-50/50" placeholder="Informasi tambahan terkait agenda..."></textarea>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/agenda" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Simpan Agenda
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
