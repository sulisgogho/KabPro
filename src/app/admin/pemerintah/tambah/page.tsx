import React from 'react';
import { ChevronLeft, Save, X, Upload } from 'lucide-react';
import Link from 'next/link';
import { createPemerintah } from '@/actions/pemerintah';

export default function TambahPemerintah() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/pemerintah" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tambah Profil Pimpinan / OPD</h1>
          <p className="text-slate-500">Masukkan data pejabat atau struktur instansi baru.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl">
        <div className="p-8">
          <form action={createPemerintah} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nama Lengkap Pejabat / Kepala</label>
                <input name="nama" required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/50" placeholder="Misal: Drs. H. Fulan, M.Si..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Jabatan / Nama Instansi</label>
                <input name="jabatan" required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/50" placeholder="Misal: Kepala Dinas Pendidikan..." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Foto Profil (Opsional)</label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl h-[160px] flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-blue-400 transition-colors cursor-pointer group bg-slate-50/50">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 text-blue-500" />
                </div>
                <p className="font-bold text-slate-700 mb-1">Klik untuk upload foto resmi</p>
                <p className="text-xs text-slate-400">PNG, JPG, JPEG (Maks. 2MB)</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Tugas Pokok & Fungsi (Deskripsi Singkat)</label>
              <textarea name="kategori" rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none bg-slate-50/50" placeholder="Uraian singkat mengenai tugas dan fungsi jabatan ini..."></textarea>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/pemerintah" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Simpan Profil
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
