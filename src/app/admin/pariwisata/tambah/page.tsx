import React from 'react';
import { ChevronLeft, Upload, Save, X } from 'lucide-react';
import Link from 'next/link';
import { createPariwisata } from '@/actions/pariwisata';

export default function TambahPariwisata() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/pariwisata" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tambah Destinasi Wisata</h1>
          <p className="text-slate-500">Isi informasi untuk destinasi pariwisata baru.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8">
          <form action={createPariwisata} className="space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nama Wisata</label>
                  <input name="nama" required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-50/50" placeholder="Misal: Pantai Bentar..." />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Alamat Lengkap</label>
                  <textarea name="lokasi" required rows={3} className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none bg-slate-50/50" placeholder="Detail alamat lokasi wisata..."></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Link Google Maps (Opsional)</label>
                  <input name="linkMaps" type="url" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-50/50" placeholder="https://maps.app.goo.gl/..." />
                </div>
              </div>

              {/* Right Column (Image Upload) */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Foto Utama Wisata</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl h-[280px] flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-teal-400 transition-colors cursor-pointer group bg-slate-50/50">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-teal-500" />
                  </div>
                  <p className="font-bold text-slate-700 mb-1">Klik untuk upload foto</p>
                  <p className="text-sm text-slate-400">PNG, JPG, JPEG (Maks. 2MB)</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Deskripsi Wisata</label>
              <textarea name="deskripsi" required rows={8} className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none bg-slate-50/50" placeholder="Jelaskan daya tarik, fasilitas, dan info penting tentang wisata ini..."></textarea>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/pariwisata" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Simpan Destinasi
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
