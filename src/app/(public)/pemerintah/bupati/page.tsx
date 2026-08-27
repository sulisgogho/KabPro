"use client";

import React, { useState } from 'react';
import LayoutWithSidebar from '@/components/public/LayoutWithSidebar';
import { ArrowRight, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

const sidebarItems = [
  { name: 'Visi Misi & Kegiatan Strategis', href: '/pemerintah/visi-misi' },
  { name: 'Struktur Organisasi', href: '/pemerintah/struktur-organisasi' },
  { name: 'Bupati', href: '/pemerintah/bupati', isActive: true },
  { name: 'Perangkat Daerah', href: '/pemerintah/perangkat-daerah' },
  { name: 'Kecamatan', href: '/pemerintah/kecamatan' },
  { name: 'Peta dan Batas Wilayah', href: '/pemerintah/peta-batas-wilayah' },
  { name: 'Prestasi', href: '/pemerintah/prestasi' },
];

const bupatiHistory = [
  { name: "Drs. H. Hasan Aminuddin, M.Si.", period: "2003 - 2013", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&auto=format&fit=crop&q=60" },
  { name: "Hj. Puput Tantriana Sari, S.E.", period: "2013 - 2021", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=60" },
  { name: "Drs. H.A. Timbul Prihanjoko", period: "2021 - 2023", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=60" },
  { name: "Ugas Irwanto, S.Sos., M.Si.", period: "2023 - 2024", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=60" },
];

const profiles = {
  bupati: {
    title: "Bupati",
    name: "dr. H. Mohammad Haris Damanhuri Romly, M.Kes.",
    shortName: "dr. H. Mohammad Haris, M.Kes.",
    image: "/image/Bupati.png",
    shortDesc: "Beliau menjabat sebagai Bupati Probolinggo dengan visi mewujudkan Kabupaten Probolinggo yang sejahtera, berkeadilan, mandiri, dan berdaya saing.",
    biography: "dr. H. Mohammad Haris Damanhuri Romly, M.Kes., merupakan seorang tokoh masyarakat dan birokrat berpengalaman yang saat ini menjabat sebagai Bupati Probolinggo. Beliau memiliki latar belakang pendidikan kedokteran dan kesehatan masyarakat yang kuat, serta berdedikasi tinggi terhadap pembangunan dan kesejahteraan masyarakat di wilayah Kabupaten Probolinggo.",
    education: [
      "S1 Kedokteran - Universitas Terkemuka",
      "S2 Kesehatan Masyarakat - Universitas Brawijaya"
    ],
    career: [
      "Kepala Puskesmas di lingkungan Dinas Kesehatan (1995-2005)",
      "Kepala Dinas Kesehatan Kabupaten Probolinggo (2005-2015)",
      "Bupati Probolinggo (Sekarang)"
    ]
  },
  wabup: {
    title: "Wakil Bupati",
    name: "H. Fahmi Abdul Haq Zaini, S.Ag., S.Kom.",
    shortName: "H. Fahmi Abdul Haq Zaini, S.Ag.",
    image: "/image/Wabup.png",
    shortDesc: "Wakil Bupati Probolinggo yang siap mendampingi dan mewujudkan tata kelola pemerintahan yang baik serta pelayanan publik yang prima.",
    biography: "H. Fahmi Abdul Haq Zaini, S.Ag., S.Kom., merupakan tokoh pemuda dan teknokrat yang dipercaya menjabat sebagai Wakil Bupati Probolinggo. Menggabungkan latar belakang ilmu agama dan teknologi informasi, beliau berperan penting dalam mewujudkan digitalisasi pelayanan publik di lingkungan pemerintahan Kabupaten Probolinggo.",
    education: [
      "S1 Agama Islam - UIN Sunan Ampel",
      "S1 Teknik Informatika - Institut Teknologi"
    ],
    career: [
      "Anggota DPRD Kabupaten Probolinggo (2014-2019)",
      "Wakil Bupati Probolinggo (Sekarang)"
    ]
  }
};

type ProfileType = keyof typeof profiles;

export default function BupatiPage() {
  const [activeProfile, setActiveProfile] = useState<ProfileType | null>(null);

  return (
    <LayoutWithSidebar
      title={activeProfile ? profiles[activeProfile].title : "Bupati"}
      breadcrumb={[
        { name: 'Pemerintah Kabupaten', href: '#' },
        { name: 'Bupati', href: '/pemerintah/bupati' }
      ]}
      sidebarTitle="Pemerintah Kabupaten Probolinggo"
      sidebarItems={sidebarItems}
    >
      
      {activeProfile === null ? (
        <>
          {/* List View: Current Leaders Section */}
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            
            {(Object.keys(profiles) as ProfileType[]).map((key) => {
              const profile = profiles[key];
              return (
                <div key={key} className="flex items-start gap-6">
                  
                  {/* Left: Photo and Nameplate */}
                  <div className="w-[180px] shrink-0">
                    <div className="w-full aspect-[3/4] bg-slate-100 mb-2 rounded-sm overflow-hidden">
                      <img src={profile.image} alt={profile.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-[11px] text-slate-800 leading-tight mb-0.5">{profile.shortName}</div>
                      <div className="text-[9px] text-slate-500 leading-tight">{profile.title} Kab. Probolinggo</div>
                    </div>
                  </div>
                  
                  {/* Right: Info */}
                  <div className="flex-1 pt-2">
                    <div className="text-blue-500 font-medium text-sm mb-1">{profile.title}</div>
                    <h3 className="font-extrabold text-slate-800 text-xl leading-tight mb-3">{profile.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-5 text-justify">
                      {profile.shortDesc}
                    </p>
                    <button 
                      onClick={() => setActiveProfile(key)}
                      className="flex items-center gap-1.5 text-blue-500 font-bold text-sm hover:text-blue-600 transition-colors w-fit"
                    >
                      Lihat Profile <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                </div>
              );
            })}
          </div>

          {/* History Section */}
          <div className="border-t border-slate-100 pt-16 relative">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Jejak Kepemimpinan Bupati Sebelumnya</h2>
                <p className="text-slate-600">Telusuri para Bupati yang pernah memimpin Kabupaten Probolinggo</p>
              </div>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Timeline Visualization */}
            <div className="relative overflow-hidden pb-4 pt-4">
              <style>{`
                @keyframes marquee {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  display: flex;
                  width: max-content;
                  animation: marquee 40s linear infinite;
                }
                .group:hover .animate-marquee {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div className="relative h-[300px] flex items-center group cursor-pointer">
                {/* Main Horizontal Line */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1.5 bg-blue-400 z-0 rounded-full"></div>

                {/* Mask layer for smooth entry/exit at edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

                <div className="animate-marquee relative z-10 px-8">
                  {/* Duplicate the history array to create seamless loop */}
                  {[...bupatiHistory, ...bupatiHistory, ...bupatiHistory, ...bupatiHistory, ...bupatiHistory].map((history, idx) => {
                    const isTop = idx % 2 === 0;

                    return (
                      <div key={idx} className="relative flex flex-col items-end justify-center w-[300px] h-[300px]">
                        
                        {/* Node aligned to the right edge of the card */}
                        <div className="absolute top-1/2 right-[10px] translate-x-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-full bg-blue-400 ring-[4px] ring-white shadow-sm z-20" />

                        {/* History Card */}
                        <div className={`w-[260px] mr-[10px] bg-white rounded-lg p-3 flex items-center gap-4 shadow-md relative z-10 hover:-translate-y-1 transition-transform duration-300 border-r-[4px] border-blue-500 ${
                          isTop ? 'mb-auto mt-6' : 'mt-auto mb-6'
                        }`}>
                          <div className="w-[60px] h-[75px] rounded-md bg-slate-200 overflow-hidden shrink-0">
                            <img src={history.image} alt={history.name} className="w-full h-full object-cover grayscale" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center py-1">
                            <h4 className="font-bold text-slate-900 leading-tight mb-1 text-[13px]">{history.name}</h4>
                            <div className="text-[10px] text-slate-400 font-medium mb-1.5">Tahun Menjabat</div>
                            <div className="inline-block bg-blue-50 text-blue-600 font-bold text-[10px] px-2.5 py-1 rounded-full w-fit">
                              {history.period}
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Profile Detail View */
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button 
            onClick={() => setActiveProfile(null)}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali
          </button>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Left side: Photo */}
            <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center">
              <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-[3/4] w-full max-w-[280px] mb-4 border border-slate-200 shadow-sm relative">
                <img 
                  src={profiles[activeProfile].image} 
                  alt={profiles[activeProfile].title} 
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg text-slate-800">{profiles[activeProfile].shortName}</h3>
                <p className="text-sm text-slate-500">{profiles[activeProfile].title} Probolinggo</p>
              </div>
            </div>

            {/* Right side: Information */}
            <div className="w-full md:w-2/3 flex flex-col gap-8">
              
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Biografi</h2>
                <p className="text-slate-600 leading-relaxed text-justify">
                  {profiles[activeProfile].biography}
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-800 mb-3">Pendidikan Formal :</h3>
                <ol className="list-decimal list-outside ml-4 space-y-2 text-slate-600">
                  {profiles[activeProfile].education.map((edu, idx) => (
                    <li key={idx} className="pl-2">{edu}</li>
                  ))}
                </ol>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-800 mb-3">Jenjang Karir :</h3>
                <ol className="list-decimal list-outside ml-4 space-y-2 text-slate-600">
                  {profiles[activeProfile].career.map((car, idx) => (
                    <li key={idx} className="pl-2">{car}</li>
                  ))}
                </ol>
              </section>

            </div>
          </div>
        </div>
      )}

    </LayoutWithSidebar>
  );
}
