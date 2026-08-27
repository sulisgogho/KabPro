import React from 'react';
import { ChevronLeft, Save, X, Upload } from 'lucide-react';
import Link from 'next/link';
import { createInfografis } from '@/actions/infografis';

export default function TambahInfografis() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/infografis" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Upload Infografis</h1>
          <p className="text-slate-500">Unggah poster, pengumuman, atau gambar informasi visual.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl">
        <div className="p-8">
          <form action={createInfografis} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Judul Infografis</label>
              <input name="judul" required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none bg-slate-50/50" placeholder="Misal: Capaian Kinerja..." />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">File Gambar</label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl h-[240px] flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-pink-400 transition-colors cursor-pointer group bg-slate-50/50">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 text-pink-500" />
                </div>
                <p className="font-bold text-slate-700 mb-1">Klik untuk memilih gambar</p>
                <p className="text-xs text-slate-400">PNG, JPG, JPEG resolusi tinggi (Maks. 5MB)</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Keterangan Tambahan (Opsional)</label>
              <textarea name="kategori" rows={3} className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none resize-none bg-slate-50/50" placeholder="Catatan atau deskripsi singkat mengenai infografis..."></textarea>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/infografis" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-pink-600 hover:bg-pink-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Upload & Simpan
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
