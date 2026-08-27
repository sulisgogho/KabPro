import React from 'react';
import { ChevronLeft, Save, X, Upload } from 'lucide-react';
import Link from 'next/link';
import { createPrestasi } from '@/actions/prestasi';

export default function TambahPrestasi() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/prestasi" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tambah Prestasi / Penghargaan</h1>
          <p className="text-slate-500">Rekam capaian atau penghargaan yang diraih daerah.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl">
        <div className="p-8">
          <form action={createPrestasi} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nama Penghargaan / Prestasi</label>
              <input name="judul" required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none bg-slate-50/50" placeholder="Misal: Adipura Kencana..." />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Tahun Diraih</label>
                <input name="tahun" required type="number" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none bg-slate-50/50" placeholder="Misal: 2026" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Instansi Pemberi Penghargaan</label>
                <input name="kategori" required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none bg-slate-50/50" placeholder="Misal: Kementerian LHK..." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Foto Penghargaan (Opsional)</label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl h-[160px] flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-yellow-400 transition-colors cursor-pointer group bg-slate-50/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="font-bold text-slate-700 mb-1">Klik untuk upload foto</p>
                <p className="text-xs text-slate-400">PNG, JPG, JPEG (Maks. 2MB)</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Deskripsi Singkat</label>
              <textarea name="deskripsi" rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none resize-none bg-slate-50/50" placeholder="Deskripsi mengenai penghargaan atau prestasi yang diraih..."></textarea>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/prestasi" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-yellow-600 hover:bg-yellow-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Simpan Prestasi
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
