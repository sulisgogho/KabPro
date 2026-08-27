import React from 'react';
import { Map, Plus, Search, Edit, Trash2, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { getPariwisata, deletePariwisata } from '@/actions/pariwisata';

export default async function AdminPariwisata() {
  const wisataData = await getPariwisata();

  return (
    <div className="space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
            <Map className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Manajemen Pariwisata</h1>
            <p className="text-slate-500">Kelola direktori destinasi wisata di Kabupaten Probolinggo.</p>
          </div>
        </div>
        <Link 
          href="/admin/pariwisata/tambah"
          className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-semibold shadow-sm hover:shadow-md transition-all w-fit"
        >
          <Plus className="w-5 h-5" /> Tambah Wisata
        </Link>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 w-72 focus-within:ring-2 focus-within:ring-teal-500">
            <Search className="w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Cari wisata..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm font-semibold uppercase tracking-wider">
                <th className="p-4 border-b border-slate-100">Nama Wisata</th>
                <th className="p-4 border-b border-slate-100">Alamat</th>
                <th className="p-4 border-b border-slate-100 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {wisataData.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-slate-500">Belum ada data pariwisata.</td>
                </tr>
              )}
              {wisataData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center text-slate-400">
                        {item.gambarUrl ? (
                          <img src={item.gambarUrl} alt={item.nama} className="w-full h-full object-cover" />
                        ) : (
                          <ImageIcon className="w-5 h-5" />
                        )}
                      </div>
                      <span className="font-semibold text-slate-900">{item.nama}</span>
                    </div>
                  </td>
                  <td className="p-4 max-w-xs truncate">{item.lokasi}</td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <Link href={`/admin/pariwisata/edit/${item.id}`} className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></Link>
                    <form action={deletePariwisata.bind(null, item.id)}>
                      <button type="submit" className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
