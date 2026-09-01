import React from 'react';
import { ChevronLeft, Upload, Save, X } from 'lucide-react';
import Link from 'next/link';
import { getBeritaById, updateBerita } from '@/actions/berita';
import { notFound } from 'next/navigation';
import TiptapEditor from '@/components/admin/TiptapEditor';
import ImageUploader from '@/components/admin/ImageUploader';

export default async function EditBerita({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const berita = await getBeritaById(resolvedParams.id);

  if (!berita) {
    notFound();
  }

  // Bind the id to the update action
  const updateBeritaWithId = updateBerita.bind(null, resolvedParams.id);

  // Format date to YYYY-MM-DD for the input[type=date]
  const formattedDate = new Date(berita.tanggal).toISOString().split('T')[0];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/berita" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Edit Berita</h1>
          <p className="text-slate-500">Perbarui informasi artikel berita di bawah ini.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8">
          <form action={updateBeritaWithId} className="space-y-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Judul Berita</label>
                  <input name="judul" defaultValue={berita.judul} required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/50" placeholder="Masukkan judul berita..." />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Kategori</label>
                    <select name="kategori" defaultValue={berita.kategori} required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/50 appearance-none">
                      <option value="">Pilih Kategori</option>
                      <option value="Kesejahteraan">Kesejahteraan</option>
                      <option value="Pembangunan">Pembangunan</option>
                      <option value="Perekonomian">Perekonomian</option>
                      <option value="Pemerintahan">Pemerintahan</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Tanggal Publikasi</label>
                    <input name="tanggal" defaultValue={formattedDate} required type="date" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Penulis</label>
                  <input name="penulis" defaultValue="Admin" required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-slate-50/50" placeholder="Nama penulis..." />
                </div>
              </div>

              <ImageUploader currentImageUrl={berita.gambarUrl} />
            </div>

            {/* Bottom Full Width */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Isi Berita</label>
              <TiptapEditor name="konten" initialContent={berita.konten} />
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/berita" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Simpan Perubahan
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
