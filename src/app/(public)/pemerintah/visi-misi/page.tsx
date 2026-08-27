"use client";

import React from 'react';
import LayoutWithSidebar from '@/components/public/LayoutWithSidebar';
import { Waves, Lightbulb, Activity, Map } from 'lucide-react';

const sidebarItems = [
  { name: 'Visi Misi & Kegiatan Strategis', href: '/pemerintah/visi-misi', isActive: true },
  { name: 'Struktur Organisasi', href: '/pemerintah/struktur-organisasi' },
  { name: 'Bupati', href: '/pemerintah/bupati' },
  { name: 'Perangkat Daerah', href: '/pemerintah/perangkat-daerah' },
  { name: 'Kecamatan', href: '/pemerintah/kecamatan' },
  { name: 'Peta dan Batas Wilayah', href: '/pemerintah/peta-batas-wilayah' },
  { name: 'Prestasi', href: '/pemerintah/prestasi' },
];

const misiList = [
  "Menciptakan tata kelola pemerintahan anti korupsi, kolaboratif dan inovatif (SAE Pemerintahan)",
  "Menciptakan ketahanan ekonomi lokal yang kreatif dan inovatif di sektor pertanian, perkebunan, peternakan dan perikanan berbasis desa dan komunitas untuk menciptakan lapangan kerja dan memberantas kemiskinan (SAE Ekonomi)",
  "Membangun SDM unggul, religius, berdaya saing melalui peningkatan akses serta kualitas pelayanan pendidikan, kesehatan, dan kebutuhan dasar lainnya yang terjangkau (SAE Pendidikan dan Kesehatan)",
  "Mempercepat pembangunan infrastruktur di daerah basis produksi, daerah terluar, daerah terpencil, serta perwilayahan industri secara merata (SAE Infrastruktur)",
  "Pemberdayaan perempuan, masyarakat adat, masyarakat rentan dan disabilitas (SAE Sosial)"
];

const kegiatanStrategis = [
  { title: "Peningkatan Ekonomi Kreatif", icon: Lightbulb, color: "text-blue-500", bg: "bg-blue-50" },
  { title: "Pengendalian dan Penanganan Banjir", icon: Waves, color: "text-orange-500", bg: "bg-orange-50" },
  { title: "Penanganan Pasca Covid", icon: Activity, color: "text-blue-500", bg: "bg-blue-50" },
  { title: "Penataan Kawasan", icon: Map, color: "text-orange-500", bg: "bg-orange-50" },
];

export default function VisiMisiPage() {
  return (
    <LayoutWithSidebar
      title="Visi Misi & Kegiatan Strategis"
      breadcrumb={[
        { name: 'Pemerintah Kabupaten', href: '#' },
        { name: 'Visi Misi & Kegiatan Strategis', href: '/pemerintah/visi-misi' }
      ]}
      sidebarTitle="Pemerintah Kabupaten Probolinggo"
      sidebarItems={sidebarItems}
    >
      
      {/* Visi Section */}
      <div className="bg-blue-600 rounded-2xl overflow-hidden mb-16 relative flex flex-col md:flex-row text-white shadow-lg">
        {/* Quote watermark */}
        <div className="absolute top-4 left-6 text-[120px] leading-none font-serif text-white/10 select-none pointer-events-none">
          &quot;
        </div>
        <div className="absolute bottom-[-40px] left-[30%] text-[120px] leading-none font-serif text-white/10 select-none pointer-events-none">
          &quot;
        </div>

        <div className="flex-1 p-8 md:p-10 relative z-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-white text-center md:text-left">Visi</h2>
          <p className="text-xl font-bold leading-snug">
            &quot;Terwujudnya Kabupaten Probolinggo SAE (Sejahtera, Amanah- Religius serta Eksis Berdaya Saing)&quot;
          </p>
        </div>
        
        <div className="w-full md:w-2/5 shrink-0 p-4 relative z-10">
          <div className="w-full h-[200px] rounded-xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1541888081622-1cb2fc412db3?w=800&auto=format&fit=crop&q=60" 
              alt="Kantor Pemerintahan" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-white text-[10px] bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
              <Map className="w-3 h-3" />
              <span>Kantor Bupati Probolinggo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Misi Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-orange-500 text-center mb-10">Misi</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Illustration */}
          <div className="w-full md:w-5/12 shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60" 
              alt="Ilustrasi Tim" 
              className="w-full aspect-[4/3] object-cover rounded-2xl shadow-sm"
            />
          </div>

          {/* Right List */}
          <div className="flex-1 flex flex-col gap-5">
            {misiList.map((misi, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center shrink-0 mt-0.5 text-sm">
                  {index + 1}
                </div>
                <p className="text-slate-800 font-medium leading-relaxed">
                  {misi}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Kegiatan Strategis Section */}
      <div className="flex flex-col lg:flex-row gap-12 pt-8 border-t border-slate-100">
        
        {/* Left Title */}
        <div className="w-full lg:w-1/3 shrink-0 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Kegiatan Strategis</h2>
          <p className="text-slate-500 leading-relaxed">
            Proyek Strategis yang Mempersiapkan Kabupaten untuk Masa Depan yang Lebih Baik.
          </p>
        </div>

        {/* Right Grid Cards */}
        <div className="flex-1 grid sm:grid-cols-2 gap-4">
          
          {/* Card Column 1 (Staggered) */}
          <div className="flex flex-col gap-4 mt-8">
            {kegiatanStrategis.slice(0, 2).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white border border-slate-100 shadow-sm rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-[4/3] hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-14 h-14 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm leading-tight">{item.title}</h3>
                </div>
              );
            })}
          </div>

          {/* Card Column 2 */}
          <div className="flex flex-col gap-4">
            {kegiatanStrategis.slice(2, 4).map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white border border-slate-100 shadow-sm rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-[4/3] hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-14 h-14 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm leading-tight">{item.title}</h3>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </LayoutWithSidebar>
  );
}
