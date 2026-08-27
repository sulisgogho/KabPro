import React from 'react';
import { ChevronLeft, Upload, Save, X } from 'lucide-react';
import Link from 'next/link';
import { getDokumenById, updateDokumen } from '@/actions/dokumen';
import { notFound } from 'next/navigation';

export default async function EditDokumen({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const dokumen = await getDokumenById(resolvedParams.id);

  if (!dokumen) {
    notFound();
  }

  const updateDokumenWithId = updateDokumen.bind(null, resolvedParams.id);
  const tahun = new Date(dokumen.tanggal).getFullYear().toString();

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/dokumen" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Edit Dokumen</h1>
          <p className="text-slate-500">Perbarui informasi laporan, peraturan, atau dokumen informasi publik.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl">
        <div className="p-8">
          <form action={updateDokumenWithId} className="space-y-8">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Judul Dokumen</label>
                <input name="judul" defaultValue={dokumen.judul} required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-slate-50/50" placeholder="Masukkan judul dokumen..." />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Kategori</label>
                  <select name="kategori" defaultValue={dokumen.kategori} required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-slate-50/50 appearance-none">
                    <option value="">Pilih Kategori</option>
                    <option value="Laporan Keuangan">Laporan Keuangan</option>
                    <option value="Rencana Pembangunan">Rencana Pembangunan</option>
                    <option value="Peraturan Daerah">Peraturan Daerah</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Tahun Dokumen</label>
                  <input name="tahun" defaultValue={tahun} required type="number" min="2000" max="2099" step="1" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-slate-50/50" />
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">File Dokumen</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl h-[200px] flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-indigo-400 transition-colors cursor-pointer group bg-slate-50/50">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-indigo-500" />
                  </div>
                  <p className="font-bold text-slate-700 mb-1">Klik untuk upload dokumen baru (opsional)</p>
                  <p className="text-sm text-slate-400">Biarkan kosong jika tidak ingin mengubah file</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Link Alternatif / Pratinjau (Opsional)</label>
                <input name="link" defaultValue={dokumen.fileUrl || ''} type="url" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-slate-50/50" placeholder="https://..." />
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/dokumen" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Simpan Perubahan
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
