import React from 'react';
import { ChevronLeft, Save, X, Upload } from 'lucide-react';
import Link from 'next/link';
import { getEventById, updateEvent } from '@/actions/event';
import { notFound } from 'next/navigation';

export default async function EditEvent({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const event = await getEventById(resolvedParams.id);

  if (!event) {
    notFound();
  }

  const updateEventWithId = updateEvent.bind(null, resolvedParams.id);
  
  // Format date and time
  const dateObj = new Date(event.tanggalPelaksanaan);
  const tanggal = dateObj.toISOString().split('T')[0];
  const waktu = dateObj.toTimeString().substring(0, 5);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/event" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors border border-slate-100">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Edit Event</h1>
          <p className="text-slate-500">Perbarui informasi acara publik atau festival di Kabupaten Probolinggo.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl">
        <div className="p-8">
          <form action={updateEventWithId} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nama Event</label>
              <input name="judul" defaultValue={event.judul} required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-slate-50/50" placeholder="Misal: Festival Seni..." />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Tanggal Pelaksanaan</label>
                <input name="tanggal" defaultValue={tanggal} required type="date" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-slate-50/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Waktu (Jam)</label>
                <input name="waktu" defaultValue={waktu} required type="time" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-slate-50/50" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Lokasi</label>
              <input name="lokasi" defaultValue={event.lokasi} required type="text" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-slate-50/50" placeholder="Misal: Alun-alun Kota..." />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Poster Event (Opsional)</label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl h-[180px] flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-orange-400 transition-colors cursor-pointer group bg-slate-50/50 relative overflow-hidden">
                {event.gambarUrl ? (
                  <img src={event.gambarUrl} alt={event.judul} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="font-bold text-slate-700 mb-1">Klik untuk upload poster baru</p>
                    <p className="text-xs text-slate-400">PNG, JPG, JPEG (Maks. 2MB)</p>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Deskripsi Event</label>
              <textarea name="deskripsi" defaultValue={event.deskripsi} required rows={4} className="w-full border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none bg-slate-50/50" placeholder="Informasi detail mengenai event..."></textarea>
            </div>

            <div className="flex items-center justify-end gap-4 pt-8 border-t border-slate-100">
              <Link href="/admin/event" className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <X className="w-5 h-5" /> Batal
              </Link>
              <button type="submit" className="px-8 py-3 rounded-xl font-bold text-white bg-orange-600 hover:bg-orange-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md">
                <Save className="w-5 h-5" /> Simpan Perubahan
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
