import { FileText, Plus, Search, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { getDokumen, deleteDokumen } from '@/actions/dokumen';

export default async function AdminDokumen() {
  const dokumen = await getDokumen();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Manajemen Dokumen</h1>
            <p className="text-slate-500">Kelola dokumen publik dan arsip Pemerintah Kabupaten Probolinggo.</p>
          </div>
        </div>
        <Link 
          href="/admin/dokumen/tambah"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-semibold shadow-sm hover:shadow-md transition-all w-fit"
        >
          <Plus className="w-5 h-5" /> Upload Dokumen
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 w-72 focus-within:ring-2 focus-within:ring-indigo-500">
            <Search className="w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Cari dokumen..." className="bg-transparent border-none outline-none text-sm w-full text-slate-700" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm font-semibold uppercase tracking-wider">
                <th className="p-4 border-b border-slate-100">Judul Dokumen</th>
                <th className="p-4 border-b border-slate-100">Kategori</th>
                <th className="p-4 border-b border-slate-100">Tanggal</th>
                <th className="p-4 border-b border-slate-100 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {dokumen.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">Belum ada data dokumen.</td>
                </tr>
              )}
              {dokumen.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <p className="font-semibold text-slate-900 line-clamp-2 max-w-md">{item.judul}</p>
                    {item.fileUrl && <a href={item.fileUrl} target="_blank" className="text-xs text-blue-500 hover:underline mt-1 block">Lihat Link</a>}
                  </td>
                  <td className="p-4 font-medium">{item.kategori}</td>
                  <td className="p-4">{item.tanggal.toLocaleDateString('id-ID', { year: 'numeric' })}</td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <Link href={`/admin/dokumen/edit/${item.id}`} className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Edit"><Edit className="w-4 h-4" /></Link>
                    <form action={deleteDokumen.bind(null, item.id)}>
                      <button type="submit" className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus"><Trash2 className="w-4 h-4" /></button>
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
