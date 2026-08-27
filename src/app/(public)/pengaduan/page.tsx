import React from 'react';
import { Smartphone, Globe, ShieldAlert, MessageCircle, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function PengaduanPage() {
  const aduanChannels = [
    {
      id: 1,
      title: "Kanal Halo SAE",
      desc: "Layanan pengaduan resmi Pemerintah Kabupaten Probolinggo dapat diakses melalui Halo SAE (layanan berbasis AI dan pesan singkat) di nomor 0821-3100-1001 yang dapat dilihat penanganannya di website https://halosae.probolinggokab.go.id/",
      linkText: "Hubungi via WhatsApp",
      linkUrl: "https://wa.me/6282131001001",
      isPrimaryAction: true,
      secondaryLinkText: "Kunjungi Website",
      secondaryLinkUrl: "https://halosae.probolinggokab.go.id/",
      icon: <MessageCircle className="w-5 h-5" />,
      steps: [
        "Simpan nomor WhatsApp Halo SAE: 0821-3100-1001.",
        "Kirim pesan singkat berisi keluhan atau aduan Anda.",
        "Pantau penanganan pengaduan Anda melalui website halosae.probolinggokab.go.id."
      ]
    },
    {
      id: 2,
      title: "Kanal SP4N LAPOR!",
      desc: "Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional - Layanan Aspirasi dan Pengaduan Online Rakyat (SP4N LAPOR!) merupakan platform milik Pemerintah Republik Indonesia yang terintegrasi dengan kementerian, lembaga, dan pemerintah daerah di seluruh Indonesia.",
      linkText: "Kunjungi SP4N LAPOR!",
      linkUrl: "https://www.lapor.go.id/",
      icon: <Globe className="w-5 h-5" />,
      steps: [
        "Kunjungi lapor.go.id, SMS 1708, akun X @lapor1708, atau aplikasi Android/iOS.",
        "Tuliskan keluhan atau aspirasi dengan jelas dan lengkap.",
        "Laporan akan diverifikasi dan diteruskan kepada instansi berwenang."
      ]
    },
    {
      id: 3,
      title: "Kanal Whistleblowing System (WBS)",
      desc: "Sistem pengaduan berkadar pengawasan yang meliputi penyalahgunaan jabatan/wewenang, pelanggaran administratif, korupsi, kolusi, nepotisme, dan pelanggaran disiplin pegawai Pemkab.",
      linkText: "Buka Sistem WBS",
      linkUrl: "https://wbs.probolinggokab.go.id/user/login",
      icon: <ShieldAlert className="w-5 h-5" />,
      steps: [
        "Kunjungi situs WBS Inspektorat Kabupaten Probolinggo.",
        "Lakukan pengisian laporan secara anonim (jika diinginkan).",
        "Ikuti arahan hingga laporan berhasil dikirim dan catat nomor registrasi."
      ]
    },
    {
      id: 4,
      title: "Kanal Media Sosial",
      desc: "Kanal pelaporan melalui media sosial resmi Pemerintah Kabupaten Probolinggo sehingga masyarakat dapat melapor dari mana saja dan kapan saja.",
      linkText: "Buka Instagram Pemkab",
      linkUrl: "https://www.instagram.com/pemkab_probolinggo/?hl=en",
      icon: <MessageCircle className="w-5 h-5" />,
      steps: [
        "Buka Direct Message (DM) atau Mention akun resmi Pemkab.",
        "Tuliskan deskripsi lengkap, alamat beserta patokan lokasi, dan foto pendukung.",
        "Laporan akan direspon oleh tim admin medsos Diskominfo."
      ]
    },
    {
      id: 5,
      title: "Kanal Kantor Pemerintahan",
      desc: "Disediakan bagi masyarakat yang ingin datang langsung ke kantor pemerintahan dan bertemu petugas untuk menyampaikan laporan atau aduan secara tatap muka.",
      linkText: "Lihat Lokasi Kantor",
      linkUrl: "#",
      icon: <Building2 className="w-5 h-5" />,
      steps: [
        "Siapkan KTP dan dokumen pendukung terkait permasalahan.",
        "Datang ke Mall Pelayanan Publik (MPP) atau kantor dinas terkait.",
        "Sampaikan permasalahan beserta dokumen pendukung kepada petugas Front Office."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-20">
      {/* Hero Section dengan Gambar Latar */}
      <section className="relative w-full h-[400px] md:h-[500px] bg-slate-900 flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1577002660505-8b38dfd50d7e?auto=format&fit=crop&q=80&w=2000" 
            alt="" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-slate-900/80 to-slate-900/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight tracking-tighter drop-shadow-lg px-2">
            KANAL PENGADUAN RESMI PEMKAB PROBOLINGGO
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto drop-shadow-md mb-8 px-4">
            Wadah resmi bagi masyarakat untuk melaporkan berbagai permasalahan dan pelanggaran di Kabupaten Probolinggo.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 lg:px-8 -mt-16 relative z-20">
        
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl border border-slate-100">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-blue-800 tracking-tight mb-2">Pilihan Kanal Pengaduan</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Pemerintah Kabupaten Probolinggo menyediakan berbagai kanal pengaduan resmi sebagai wadah bagi masyarakat untuk menyampaikan keluhan, aspirasi, maupun pelaporan pelanggaran secara mudah dan transparan.
            </p>
          </div>

          <div className="space-y-6">
            {aduanChannels.map((kanal) => (
              <div key={kanal.id} className="border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-amber-300 hover:shadow-md transition-all group bg-white">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="flex-1">
                    <h3 className="text-xl font-extrabold text-blue-700 mb-3 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-sm border border-amber-200">
                        {kanal.id}
                      </span>
                      {kanal.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mb-4">
                      {kanal.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-2">
                      <Link 
                        href={kanal.linkUrl} 
                        className={
                          kanal.isPrimaryAction 
                            ? "inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-sm transition-colors" 
                            : "inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold transition-colors"
                        }
                      >
                        {kanal.icon} {kanal.linkText}
                      </Link>
                      
                      {kanal.secondaryLinkUrl && kanal.secondaryLinkText && (
                        <Link 
                          href={kanal.secondaryLinkUrl} 
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm transition-colors"
                        >
                          <Globe className="w-5 h-5" /> {kanal.secondaryLinkText}
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="md:w-[400px] shrink-0 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <h4 className="text-sm font-black text-slate-800 mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span> Cara Melapor
                    </h4>
                    <ol className="list-decimal list-outside ml-4 space-y-2 text-[13px] md:text-sm text-slate-600 font-medium">
                      {kanal.steps.map((step, idx) => (
                        <li key={idx} className="pl-1 mb-1">{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </main>
    </div>
  );
}
