import React from 'react';
import { ChevronLeft, Upload, Save, X } from 'lucide-react';
import Link from 'next/link';
import { getTamanById, updateTaman } from '@/actions/taman';
import { notFound } from 'next/navigation';

export default async function EditTaman({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const taman = await getTamanById(resolvedParams.id);

  if (!taman) {
    notFound();
  }

  const updateTamanWithId = updateTaman.bind(null, resolvedParams.id);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/taman" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Edit Data Taman</h1>
          <p className="text-slate-500">Perbarui informasi Ruang Terbuka Hijau (RTH).</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8">
          <form action={updateTamanWithId} className="space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nama Taman / RTH</label>
                  <input name="nama" defaultValue={taman.nama} required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-slate-50/50" placeholder="Misal: Taman Maramis..." />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Alamat Lengkap</label>
                  <textarea name="lokasi" defaultValue={taman.lokasi} required rows={3} className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none bg-slate-50/50" placeholder="Detail alamat lokasi taman..."></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Fasilitas</label>
                  <input name="fasilitas" defaultValue={taman.fasilitas} type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-slate-50/50" placeholder="Misal: Area bermain, toilet..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Link Google Maps (Opsional)</label>
                  <input name="linkMaps" defaultValue={taman.linkMaps || ''} type="url" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none bg-slate-50/50" placeholder="https://maps.app.goo.gl/..." />
                </div>
              </div>

              {/* Right Column (Image Upload) */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Foto Utama Taman</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl h-[280px] flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-green-400 transition-colors cursor-pointer group bg-slate-50/50 relative overflow-hidden">
                  {taman.gambarUrl ? (
                    <img src={taman.gambarUrl} alt={taman.nama} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <Upload className="w-8 h-8 text-green-500" />
                      </div>
                      <p className="font-bold text-slate-700 mb-1">Klik untuk upload foto baru</p>
                      <p className="text-sm text-slate-400">PNG, JPG, JPEG (Maks. 2MB)</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Deskripsi Singkat (Opsional)</label>
              <textarea name="deskripsi" defaultValue={taman.deskripsi !== 'Belum ada deskripsi' ? taman.deskripsi : ''} rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none bg-slate-50/50" placeholder="Jelaskan fasilitas atau info penting tentang taman ini..."></textarea>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/taman" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Simpan Perubahan
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
