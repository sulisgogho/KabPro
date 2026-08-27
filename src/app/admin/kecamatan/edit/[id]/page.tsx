import React from 'react';
import { ChevronLeft, Save, X, Upload } from 'lucide-react';
import Link from 'next/link';
import { getKecamatanById, updateKecamatan } from '@/actions/kecamatan';
import { notFound } from 'next/navigation';

export default async function EditKecamatan({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const kecamatan = await getKecamatanById(resolvedParams.id);

  if (!kecamatan) {
    notFound();
  }

  const updateKecamatanWithId = updateKecamatan.bind(null, resolvedParams.id);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/kecamatan" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Edit Data Kecamatan</h1>
          <p className="text-slate-500">Perbarui profil dan data kepemerintahan tingkat kecamatan.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl">
        <div className="p-8">
          <form action={updateKecamatanWithId} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nama Kecamatan</label>
                <input name="nama" defaultValue={kecamatan.nama} required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-50/50" placeholder="Misal: Kecamatan Kraksaan..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nama Camat</label>
                <input name="namaCamat" defaultValue={kecamatan.namaCamat} required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-50/50" placeholder="Misal: Bapak Fulan..." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Link Website (Opsional)</label>
              <input name="linkWebsite" defaultValue={kecamatan.linkWebsite || ''} type="url" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none bg-slate-50/50" placeholder="https://..." />
            </div>



            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Alamat / Profil Singkat</label>
              <textarea name="alamatProfil" defaultValue={kecamatan.luasWilayah !== '0' ? kecamatan.luasWilayah : ''} rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none bg-slate-50/50" placeholder="Alamat kantor, jumlah desa, atau profil singkat kecamatan..."></textarea>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/kecamatan" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Simpan Perubahan
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
