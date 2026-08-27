"use client";

import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PerizinanPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const perizinanData = [
    {
      title: "WhatsApp Pelayanan Perizinan Probolinggo",
      desc: "Layanan konsultasi dan informasi perizinan melalui WhatsApp resmi DPMPTSP Kabupaten Probolinggo. Masyarakat dapat mengirimkan pesan teks untuk menanyakan prosedur, persyaratan, hingga status permohonan izin.",
      linkText: "Hubungi via WhatsApp",
      linkUrl: "#"
    },
    {
      title: "Persyaratan Izin (Kewenangan Daerah)",
      desc: "Informasi lengkap mengenai berbagai persyaratan izin yang menjadi kewenangan Pemerintah Kabupaten Probolinggo, seperti Izin Reklame, Izin Usaha Mikro Kecil, Izin Trayek, dan perizinan daerah lainnya.",
      linkText: "Lihat Persyaratan Lengkap",
      linkUrl: "#"
    },
    {
      title: "Sistem Informasi Manajemen Bangunan Gedung (SIMBG)",
      desc: "Sistem Informasi Manajemen Bangunan Gedung (SIMBG) adalah sistem informasi pemerintah yang digunakan untuk pengelolaan administrasi dan pelayanan terkait bangunan gedung, terutama proses Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF).",
      linkText: "simbg.pu.go.id",
      linkUrl: "https://simbg.pu.go.id"
    },
    {
      title: "Sistem Perizinan Online Probolinggo",
      desc: "Platform sistem perizinan digital milik DPMPTSP Kabupaten Probolinggo. Ini merupakan kanal utama untuk pengajuan perizinan dan nonperizinan secara online khusus di wilayah Kabupaten Probolinggo.",
      linkText: "Portal Perizinan Online",
      linkUrl: "#"
    },
    {
      title: "OSS RBA",
      desc: "Online Single Submission (OSS) atau OSS adalah Sistem Perizinan Berusaha Terintegrasi Secara Elektronik yang dikelola dan diselenggarakan oleh Lembaga OSS di bawah Kementerian Investasi dan Hilirisasi/BKPM. Saat ini OSS menerapkan pendekatan Perizinan Berusaha Berbasis Risiko (OSS-RBA).",
      linkText: "oss.go.id",
      linkUrl: "https://oss.go.id"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-20">
      {/* Hero Section */}
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
            INFORMASI PELAYANAN
          </h1>
          <p className="text-lg md:text-xl text-amber-400 font-medium max-w-3xl mx-auto drop-shadow-md mb-8 px-4">
            Informasi pelayanan perizinan Kabupaten Probolinggo
          </p>
        </div>
      </section>

      {/* Main Content Area (Accordion) */}
      <main className="flex-1 max-w-[1000px] w-full mx-auto px-4 lg:px-8 -mt-16 relative z-20">
        
        <div className="bg-transparent space-y-4">
          {perizinanData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-sm border overflow-hidden transition-all duration-300 ${isOpen ? 'border-amber-300 shadow-md' : 'border-slate-200'}`}
              >
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <h2 className="text-lg md:text-xl font-bold text-blue-800 pr-4">
                    {item.title}
                  </h2>
                  <ChevronDown 
                    className={`w-6 h-6 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 mb-4 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                  <Link 
                    href={item.linkUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold transition-colors"
                  >
                    {item.linkText} <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
