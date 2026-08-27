"use client";

import React, { useState } from 'react';

const kependudukanData = [
  {
    id: "ktp",
    title: "Kartu Tanda Penduduk (KTP)",
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800",
    description: [
      "Kartu Tanda Penduduk Elektronik (KTP-el) adalah kartu identitas yang dilengkapi dengan cip dan merupakan identitas resmi penduduk sebagai bukti diri yang diterbitkan oleh Dinas Kependudukan dan Pencatatan Sipil.",
      "Sejak tahun 2011, KTP lebih dikenal dengan KTP Elektronik atau KTP-el yang berisikan informasi seperti nama lengkap, tempat dan tanggal lahir, alamat, foto diri, tanda tangan, hingga biometrik penduduk.",
      "Secara nasional, urusan KTP-el merupakan kewenangan Kementerian Dalam Negeri Republik Indonesia yang diatur oleh Undang-Undang Nomor 24 Tahun 2013 tentang Administrasi Kependudukan.",
      "Tiap wilayah diberikan kewenangan untuk menerbitkan KTP-el. Di Kabupaten Probolinggo, KTP diterbitkan oleh Dinas Kependudukan dan Pencatatan Sipil Kabupaten Probolinggo."
    ],
    info: {
      lokasi: "Kantor Dispendukcapil Kabupaten Probolinggo dan Kantor Kecamatan setempat.",
      syarat: "Penduduk sudah berusia 17 tahun / sudah kawin dan membawa Fotokopi Kartu Keluarga (KK).",
      tarif: "Gratis"
    }
  },
  {
    id: "kia",
    title: "Kartu Identitas Anak (KIA)",
    image: "https://images.unsplash.com/photo-1519001389025-b4ebefc037b5?auto=format&fit=crop&q=80&w=800",
    description: [
      "Kartu Identitas Anak (KIA) merupakan identitas resmi bagi anak yang usianya di bawah 17 tahun dan belum menikah. KIA diterbitkan oleh Dinas Kependudukan dan Pencatatan Sipil.",
      "KIA bertujuan untuk meningkatkan pendataan, perlindungan, dan pelayanan publik serta sebagai upaya memberikan perlindungan dan pemenuhan hak konstitusional warga negara bagi anak."
    ],
    info: {
      lokasi: "Kantor Dispendukcapil dan pelayanan keliling/desa.",
      syarat: "Fotokopi Kutipan Akta Kelahiran, Fotokopi KK orang tua/wali, KTP-el asli kedua orang tua/wali, Pas foto anak (untuk usia 5-17 tahun).",
      tarif: "Gratis"
    }
  },
  {
    id: "kk",
    title: "Kartu Keluarga (KK)",
    image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&q=80&w=800",
    description: [
      "Kartu Keluarga (KK) adalah kartu identitas keluarga yang memuat data tentang nama, susunan dan hubungan dalam keluarga, serta identitas anggota keluarga.",
      "Setiap keluarga wajib memiliki Kartu Keluarga. KK dicetak rangkap tiga yang masing-masing dipegang oleh Kepala Keluarga, Ketua RT, dan Kantor Kelurahan."
    ],
    info: {
      lokasi: "Kantor Kecamatan dan Dispendukcapil.",
      syarat: "Surat pengantar RT/RW, Buku Nikah/Kutipan Akta Perkawinan, Surat Keterangan Pindah (bagi penduduk pendatang).",
      tarif: "Gratis"
    }
  },
  {
    id: "akta-kelahiran",
    title: "Akta Kelahiran",
    image: "https://images.unsplash.com/photo-1555252117-426eb8fb10e5?auto=format&fit=crop&q=80&w=800",
    description: [
      "Akta Kelahiran adalah bukti sah mengenai status dan peristiwa kelahiran seseorang yang dikeluarkan oleh Dinas Kependudukan dan Pencatatan Sipil.",
      "Setiap kelahiran wajib dilaporkan paling lambat 60 (enam puluh) hari sejak peristiwa kelahiran."
    ],
    info: {
      lokasi: "Kantor Dispendukcapil dan RSUD (Layanan Terintegrasi).",
      syarat: "Surat Keterangan Lahir dari dokter/bidan, Fotokopi Buku Nikah/Akta Perkawinan orang tua, Fotokopi KK, Fotokopi KTP-el orang tua.",
      tarif: "Gratis"
    }
  },
  {
    id: "akta-kematian",
    title: "Akta Kematian",
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80&w=800",
    description: [
      "Akta Kematian adalah bukti sah mengenai peristiwa kematian seseorang yang dikeluarkan oleh Dinas Kependudukan dan Pencatatan Sipil.",
      "Setiap kematian wajib dilaporkan oleh ketua RT atau keluarga yang bersangkutan kepada Instansi Pelaksana paling lambat 30 hari sejak tanggal kematian."
    ],
    info: {
      lokasi: "Kantor Desa/Kelurahan untuk Surat Keterangan, berlanjut ke Dispendukcapil.",
      syarat: "Surat Keterangan Kematian dari medis/desa, KK asli jenazah, KTP asli jenazah, KTP pelapor.",
      tarif: "Gratis"
    }
  },
  {
    id: "akta-perkawinan",
    title: "Akta Perkawinan",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    description: [
      "Akta Perkawinan merupakan bukti sah terjadinya perkawinan bagi penduduk non-muslim yang dicatatkan di Dinas Kependudukan dan Pencatatan Sipil.",
      "Bagi penduduk beragama Islam, pencatatan perkawinan dilakukan di Kantor Urusan Agama (KUA)."
    ],
    info: {
      lokasi: "Kantor Dispendukcapil Kabupaten Probolinggo.",
      syarat: "Surat keterangan dari pemuka agama, Fotokopi KTP, KK, Akta Kelahiran, Pas Foto berdampingan.",
      tarif: "Gratis"
    }
  },
  {
    id: "akta-perceraian",
    title: "Akta Perceraian",
    image: "https://images.unsplash.com/photo-1626081498424-df3590dcbe23?auto=format&fit=crop&q=80&w=800",
    description: [
      "Akta Perceraian adalah bukti sah terjadinya perceraian yang dicatatkan di Dinas Kependudukan dan Pencatatan Sipil berdasarkan putusan pengadilan yang telah mempunyai kekuatan hukum tetap."
    ],
    info: {
      lokasi: "Kantor Dispendukcapil Kabupaten Probolinggo.",
      syarat: "Salinan Putusan Pengadilan yang telah berkekuatan hukum tetap, Kutipan Akta Perkawinan asli, Fotokopi KTP dan KK.",
      tarif: "Gratis"
    }
  }
];

export default function KependudukanPage() {
  const [activeTab, setActiveTab] = useState(kependudukanData[0].id);

  const activeData = kependudukanData.find(item => item.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[450px] bg-slate-900 flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
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
            KEPENDUDUKAN
          </h1>
          <p className="text-lg md:text-xl text-amber-400 font-medium max-w-3xl mx-auto drop-shadow-md mb-8 px-4">
            Informasi lengkap terkait administrasi kependudukan
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 lg:px-8 mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden shrink-0">
            {kependudukanData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-6 py-4 border-b last:border-b-0 border-slate-100 transition-colors font-bold text-[15px] sm:text-base ${
                  activeTab === item.id 
                  ? "bg-slate-50 text-amber-600 border-l-4 border-l-amber-500" 
                  : "text-slate-700 hover:bg-slate-50 border-l-4 border-l-transparent"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Content Area */}
          {activeData && (
            <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col p-6 md:p-8">
              {/* Image */}
              <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] bg-slate-100 rounded-2xl overflow-hidden mb-8">
                <img 
                  src={activeData.image} 
                  alt={activeData.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Descriptions */}
              <div className="space-y-4 mb-10 text-slate-700 leading-relaxed font-medium">
                {activeData.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Informasi Pembuatan Box */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-sm shrink-0">ℹ️</span>
                  Informasi Pembuatan
                </h3>
                
                <ul className="space-y-4">
                  <li className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4">
                    <span className="text-slate-500 font-semibold text-sm">Lokasi Pelayanan</span>
                    <span className="text-slate-800 font-medium">
                      <span className="hidden sm:inline mr-2">:</span>{activeData.info.lokasi}
                    </span>
                  </li>
                  <li className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4">
                    <span className="text-slate-500 font-semibold text-sm">Syarat</span>
                    <span className="text-slate-800 font-medium">
                      <span className="hidden sm:inline mr-2">:</span>{activeData.info.syarat}
                    </span>
                  </li>
                  <li className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-4">
                    <span className="text-slate-500 font-semibold text-sm">Tarif Pembuatan</span>
                    <span className="text-slate-800 font-medium">
                      <span className="hidden sm:inline mr-2">:</span>{activeData.info.tarif}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
