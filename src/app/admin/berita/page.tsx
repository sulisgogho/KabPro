import React from 'react';
import { Newspaper, Search, Edit, Trash2, Pencil } from 'lucide-react';
import Link from 'next/link';
import { getBerita, deleteBerita } from '@/actions/berita';
import { AdminPageHeader } from '@/components/admin/AdminPageHeader';

export default async function AdminBerita() {
  const berita = await getBerita();

  return (
    <div className="space-y-6">
      
      {/* Header Section */}
      <AdminPageHeader 
        title="Manajemen Berita"
        description="Kelola artikel dan berita Kabupaten Probolinggo."
        Icon={Newspaper}
        actionLabel="Tulis Berita"
        actionHref="/admin/berita/tambah"
      />

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 w-72 focus-within:ring-2 focus-within:ring-blue-500">
            <Search className="w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Cari berita..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm font-semibold uppercase tracking-wider">
                <th className="p-4 border-b border-slate-100">Judul Berita</th>
                <th className="p-4 border-b border-slate-100">Kategori</th>
                <th className="p-4 border-b border-slate-100">Tanggal</th>
                <th className="p-4 border-b border-slate-100">Status</th>
                <th className="p-4 border-b border-slate-100 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {berita.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">Belum ada data berita.</td>
                </tr>
              )}
              {berita.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-slate-900 max-w-[200px] truncate">{item.judul}</td>
                  <td className="p-4">{item.kategori}</td>
                  <td className="p-4">{item.tanggal.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold ${
                      item.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/berita/edit/${item.id}`} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Pencil className="w-4 h-4" />
                      </Link>
                      <form action={deleteBerita.bind(null, item.id)}>
                        <button type="submit" className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </form>
                    </div>
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
