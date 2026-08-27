import React from 'react';
import { ChevronLeft, Save, X } from 'lucide-react';
import Link from 'next/link';
import { createVideo } from '@/actions/video';

export default function TambahVideo() {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/video" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tambah Video Baru</h1>
          <p className="text-slate-500">Sematkan video Youtube publikasi Kabupaten Probolinggo.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl">
        <div className="p-8">
          <form action={createVideo} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Judul Video</label>
              <input name="judul" required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-slate-50/50" placeholder="Misal: Peresmian Jalan..." />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Link Youtube</label>
              <input name="linkYoutube" required type="url" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none bg-slate-50/50" placeholder="https://youtube.com/watch?v=..." />
              <p className="text-xs text-slate-500 mt-1">Sematkan tautan langsung dari Youtube.</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Deskripsi Singkat (Opsional)</label>
              <textarea name="kategori" rows={3} className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none resize-none bg-slate-50/50" placeholder="Informasi singkat mengenai isi video..."></textarea>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/video" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Simpan Video
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
