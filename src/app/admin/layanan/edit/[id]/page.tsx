import React from 'react';
import { ChevronLeft, Save, X, Upload } from 'lucide-react';
import Link from 'next/link';
import { getLayananById, updateLayanan } from '@/actions/layanan';
import { notFound } from 'next/navigation';

export default async function EditLayanan({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const layanan = await getLayananById(resolvedParams.id);

  if (!layanan) {
    notFound();
  }

  const updateLayananWithId = updateLayanan.bind(null, resolvedParams.id);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/layanan" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Edit Layanan Publik</h1>
          <p className="text-slate-500">Perbarui deskripsi dan link layanan masyarakat.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl">
        <div className="p-8">
          <form action={updateLayananWithId} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nama Layanan</label>
              <input name="namaLayanan" defaultValue={layanan.nama} required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-slate-50/50" placeholder="Misal: Layanan Kependudukan (E-KTP)..." />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Instansi / Unit Kerja</label>
                <input name="instansi" defaultValue={layanan.kategori} required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-slate-50/50" placeholder="Misal: Dinas Dukcapil..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Tautan Akses Layanan</label>
                <input name="tautan" defaultValue={layanan.linkLayanan || ''} type="url" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-slate-50/50" placeholder="https://..." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Logo / Ikon Layanan (Opsional)</label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl h-[160px] flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-indigo-400 transition-colors cursor-pointer group bg-slate-50/50 relative overflow-hidden">
                {layanan.icon ? (
                  <img src={layanan.icon} alt={layanan.nama} className="absolute inset-0 w-full h-full object-contain p-4" />
                ) : (
                  <>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6 text-indigo-500" />
                    </div>
                    <p className="font-bold text-slate-700 mb-1">Klik untuk upload ikon baru</p>
                    <p className="text-xs text-slate-400">PNG, JPG, SVG (Maks. 1MB)</p>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Deskripsi Prosedur Layanan</label>
              <textarea name="deskripsi" defaultValue={layanan.deskripsi} required rows={5} className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none bg-slate-50/50" placeholder="Jelaskan alur, syarat, dan ketentuan layanan ini..."></textarea>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/layanan" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
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
