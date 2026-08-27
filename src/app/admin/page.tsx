import { Users, FileText, CheckCircle, BarChart3, LayoutDashboard, Plus, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    { title: "Kunjungan (Hari Ini)", value: "1,240", icon: <Users className="w-6 h-6 text-blue-600" />, bg: "bg-blue-100/50", border: "border-blue-100" },
    { title: "Berita Diterbitkan", value: "342", icon: <FileText className="w-6 h-6 text-emerald-600" />, bg: "bg-emerald-100/50", border: "border-emerald-100" },
    { title: "Layanan Aktif", value: "15", icon: <CheckCircle className="w-6 h-6 text-amber-600" />, bg: "bg-amber-100/50", border: "border-amber-100" },
    { title: "Informasi Publik", value: "8", icon: <BarChart3 className="w-6 h-6 text-purple-600" />, bg: "bg-purple-100/50", border: "border-purple-100" },
  ];

  const quickActions = [
    { title: "Tulis Berita", href: "/admin/berita/tambah", icon: <FileText className="w-5 h-5" />, color: "text-emerald-600", bg: "bg-emerald-50 hover:bg-emerald-100" },
    { title: "Upload Dokumen", href: "/admin/dokumen/tambah", icon: <CheckCircle className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-50 hover:bg-blue-100" },
    { title: "Tambah Wisata", href: "/admin/pariwisata/tambah", icon: <Users className="w-5 h-5" />, color: "text-purple-600", bg: "bg-purple-50 hover:bg-purple-100" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-white shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
          <LayoutDashboard className="w-64 h-64 -mt-10 -mr-10" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Selamat Datang di Portal Admin</h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Kelola seluruh konten, informasi publik, dan layanan digital Pemerintah Kabupaten Probolinggo dengan mudah melalui dashboard ini.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-slate-900 hover:bg-slate-50 font-bold py-3 px-6 rounded-xl transition-colors shadow-sm flex items-center gap-2">
              <Settings className="w-5 h-5" /> Pengaturan Sistem
            </button>
            <Link href="/" target="_blank" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-sm flex items-center gap-2">
              Lihat Website <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          Aksi Cepat
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action, idx) => (
            <Link key={idx} href={action.href} className={`${action.bg} ${action.color} p-4 rounded-2xl flex items-center gap-4 font-bold transition-all border border-transparent hover:border-current/10`}>
              <div className="bg-white p-3 rounded-xl shadow-sm">
                {action.icon}
              </div>
              {action.title}
              <Plus className="w-5 h-5 ml-auto opacity-50" />
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className={`bg-white p-6 rounded-3xl shadow-sm border ${stat.border} flex flex-col gap-4 hover:shadow-md transition-all group`}>
            <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
              {stat.icon}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-400 mb-1">{stat.title}</div>
              <div className="text-3xl font-black text-slate-800">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-800">Statistik Kunjungan</h3>
            <select className="bg-slate-50 border border-slate-200 text-sm font-bold text-slate-600 rounded-lg px-3 py-2 outline-none">
              <option>7 Hari Terakhir</option>
              <option>Bulan Ini</option>
              <option>Tahun Ini</option>
            </select>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 rounded-2xl">
            <BarChart3 className="w-16 h-16 text-slate-200 mb-4" />
            <p className="text-slate-400 font-medium">Area Integrasi Grafik (Chart.js / Recharts)</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 flex flex-col">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Aktivitas Terbaru</h3>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-slate-500 font-medium">Belum ada aktivitas terbaru hari ini.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
