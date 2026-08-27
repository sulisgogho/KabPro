import React from 'react';
import { Calendar, Plus, Search, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { getAgenda, deleteAgenda } from '@/actions/agenda';

export default async function AdminAgenda() {
  const agenda = await getAgenda();

  return (
    <div className="space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Manajemen Agenda</h1>
            <p className="text-slate-500">Kelola jadwal agenda Pemerintah Kabupaten Probolinggo.</p>
          </div>
        </div>
        <Link 
          href="/admin/agenda/tambah"
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-semibold shadow-sm hover:shadow-md transition-all w-fit"
        >
          <Plus className="w-5 h-5" /> Tambah Agenda
        </Link>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 w-72 focus-within:ring-2 focus-within:ring-amber-500">
            <Search className="w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Cari agenda..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm font-semibold uppercase tracking-wider">
                <th className="p-4 border-b border-slate-100">Nama Agenda</th>
                <th className="p-4 border-b border-slate-100">Tanggal</th>
                <th className="p-4 border-b border-slate-100">Lokasi</th>
                <th className="p-4 border-b border-slate-100 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {agenda.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">Belum ada data agenda.</td>
                </tr>
              )}
              {agenda.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900 max-w-xs truncate">{item.judul}</td>
                  <td className="p-4">{item.tanggalPelaksanaan.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                  <td className="p-4">{item.lokasi}</td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <Link href={`/admin/agenda/edit/${item.id}`} className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"><Edit className="w-4 h-4" /></Link>
                    <form action={deleteAgenda.bind(null, item.id)}>
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
