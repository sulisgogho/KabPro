export default function TransparansiPage() {
  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 lg:px-8 py-32 w-full">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Pusat Transparansi & PPID</h1>
        <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Akses dokumen publik, laporan anggaran, dan indikator kinerja Pemerintah Kabupaten Probolinggo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { title: "APBD 2026", desc: "Ringkasan Anggaran Pendapatan dan Belanja Daerah Tahun 2026", color: "bg-green-500" },
          { title: "LAKIP 2025", desc: "Laporan Akuntabilitas Kinerja Instansi Pemerintah", color: "bg-blue-500" },
          { title: "RPJMD", desc: "Rencana Pembangunan Jangka Menengah Daerah", color: "bg-amber-500" },
          { title: "SOP Layanan", desc: "Standar Operasional Prosedur Layanan Publik", color: "bg-purple-500" },
        ].map((doc, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-xl text-white flex items-center justify-center font-bold text-xs mb-4 ${doc.color}`}>PDF</div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2">{doc.title}</h3>
            <p className="text-xs text-slate-500 font-medium flex-1 mb-4">{doc.desc}</p>
            <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider">Unduh Dokumen</button>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[2rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-black mb-2">Permintaan Informasi Publik</h3>
          <p className="text-slate-300 font-medium max-w-xl">Sesuai UU Keterbukaan Informasi Publik, Anda berhak mengajukan permohonan informasi yang tidak tersedia di halaman ini melalui Pejabat Pengelola Informasi dan Dokumentasi (PPID).</p>
        </div>
        <button className="bg-white text-slate-900 hover:bg-blue-50 font-extrabold py-3 px-8 rounded-full transition-all whitespace-nowrap">
          Ajukan Permohonan PPID
        </button>
      </div>
    </main>
  );
}
