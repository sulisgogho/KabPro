import React from 'react';
import { AlertCircle, FileText, Users, DollarSign, ChevronRight, ChevronLeft, Heart, Sun, TreePine, Briefcase, GraduationCap, Wheat, Library, Map, Play } from 'lucide-react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import HeroSlider from '@/components/public/HeroSlider';
import AgendaCalendar from '@/components/public/AgendaCalendar';
import PariwisataSlider from '@/components/public/PariwisataSlider';
import YouTubeThumbnail from '@/components/public/YouTubeThumbnail';
import VideoSlider from '@/components/public/VideoSlider';
import FadeIn from '@/components/global/FadeIn';

const layananData = [
  { title: "Kanal Aduan", icon: <AlertCircle />, desc: "Sampaikan keluhan dan dapatkan respon yang cepat.", color: "text-red-600", bg: "bg-red-50", border: "border-red-100", hoverBg: "hover:bg-red-50", hoverBorder: "hover:border-red-200", href: "/pengaduan" },
  { title: "Perizinan Terpadu", icon: <FileText />, desc: "Informasi pelayanan dan perizinan administrasi.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100", hoverBg: "hover:bg-blue-50", hoverBorder: "hover:border-blue-200", href: "/layanan/perizinan" },
  { title: "Kependudukan", icon: <Users />, desc: "Prosedur pengurusan dokumen kependudukan.", color: "text-green-600", bg: "bg-green-50", border: "border-green-100", hoverBg: "hover:bg-green-50", hoverBorder: "hover:border-green-200", href: "/layanan/kependudukan" },
  { title: "Pajak Daerah", icon: <DollarSign />, desc: "Layanan informasi dan pembayaran pajak online.", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100", hoverBg: "hover:bg-amber-50", hoverBorder: "hover:border-amber-200", href: "https://bppkad.probolinggokab.go.id/layanan-bppkad/" },
];

const transparansiData = [
  { title: "Kesehatan", icon: <Heart />, desc: "Informasi faskes, jadwal dokter, dan program kesehatan.", hoverBg: "hover:bg-rose-100", hoverBorder: "hover:border-rose-300" }, 
  { title: "Pariwisata", icon: <Sun />, desc: "Destinasi wisata unggulan, Bromo, dan Gili Ketapang.", hoverBg: "hover:bg-amber-100", hoverBorder: "hover:border-amber-300" }, 
  { title: "Taman", icon: <TreePine />, desc: "Hutan Kota Kraksaan, Alun-Alun, SL Park.", hoverBg: "hover:bg-emerald-100", hoverBorder: "hover:border-emerald-300" },
  { title: "Ketenagakerjaan", icon: <Briefcase />, desc: "Info lowongan kerja, bursa karir, dan pelatihan.", hoverBg: "hover:bg-indigo-100", hoverBorder: "hover:border-indigo-300" }, 
  { title: "Pendidikan", icon: <GraduationCap />, desc: "Layanan pendaftaran, beasiswa, dan informasi sekolah.", hoverBg: "hover:bg-sky-100", hoverBorder: "hover:border-sky-300" }, 
  { title: "Aman Pangan", icon: <Wheat />, desc: "Informasi ketahanan pangan dan edukasi gizi.", hoverBg: "hover:bg-[#dce3ba]", hoverBorder: "hover:border-[#b8c488]" }, 
  { title: "Kebudayaan", icon: <Library />, desc: "Pelestarian seni budaya dan agenda festival lokal.", hoverBg: "hover:bg-fuchsia-100", hoverBorder: "hover:border-fuchsia-300" }, 
];

export default async function Home() {
  const beritaData = await prisma.berita.findMany({
    take: 5,
    orderBy: { tanggal: 'desc' }
  });

  const videoData = await prisma.video.findMany({
    take: 10,
    orderBy: { tanggal: 'desc' }
  });

  // Convert dates to locale strings for frontend
  const formattedBerita = beritaData.map(b => ({
    ...b,
    dateString: b.tanggal.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  }));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const agendaData = await prisma.agenda.findMany({
    orderBy: { tanggalPelaksanaan: 'asc' }
  });

  const eventData = await prisma.event.findMany({
    orderBy: { tanggalPelaksanaan: 'asc' },
    where: { tanggalPelaksanaan: { gte: today } } // From start of today
  });

  const pariwisataData = await prisma.pariwisata.findMany({
    take: 10,
  });

  return (
    <>
      <HeroSlider />

      {/* Floating Stats Bar */}
      <FadeIn direction="up" delay={0.2} className="relative z-20 max-w-[1200px] mx-auto px-4 -mt-16 md:-mt-12 mb-12 md:mb-16 w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 md:p-6 grid grid-cols-2 md:flex justify-around items-center gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="text-center px-2 md:px-6 pt-2 md:pt-0">
            <p className="text-3xl sm:text-4xl font-black text-blue-700">24</p>
            <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">Kecamatan</p>
          </div>
          <div className="text-center px-2 md:px-6 pt-2 md:pt-0">
            <p className="text-3xl sm:text-4xl font-black text-amber-500">330</p>
            <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">Desa / Kelurahan</p>
          </div>
          <div className="text-center px-2 md:px-6 pt-4 md:pt-0">
            <p className="text-3xl sm:text-4xl font-black text-green-600">1.15M+</p>
            <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">Penduduk</p>
          </div>
          <div className="text-center px-2 md:px-6 pt-4 md:pt-0">
            <p className="text-3xl sm:text-4xl font-black text-red-500">45+</p>
            <p className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">Layanan Digital</p>
          </div>
        </div>
      </FadeIn>

      <main className="max-w-[1440px] mx-auto px-4 lg:px-8 pb-20 space-y-16 md:space-y-24 w-full">
        
        {/* Pimpinan Daerah */}
        <FadeIn direction="up">
          <section className="flex flex-col items-center -mt-4 md:-mt-8 mb-4">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Bupati dan Wakil Bupati</h2>
              <p className="text-slate-500 font-medium text-lg mt-1">Kabupaten Probolinggo</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12 w-full max-w-2xl mx-auto">
              {/* Kartu Bupati */}
              <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group w-full sm:w-1/2 flex flex-col items-center text-center cursor-pointer">
                <div className="w-40 h-48 md:w-48 md:h-56 rounded-3xl overflow-hidden mb-5 relative bg-slate-100 shadow-inner">
                  <img src="/image/Bupati.png" alt="Bupati Probolinggo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-extrabold text-lg md:text-xl text-slate-900 leading-tight">dr. H. Mohammad Haris Damanhuri Romly, M.Kes.</h3>
                <p className="text-blue-700 font-black text-xs md:text-sm uppercase tracking-widest mt-2">Bupati Probolinggo</p>
              </div>

              {/* Kartu Wakil Bupati */}
              <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group w-full sm:w-1/2 flex flex-col items-center text-center cursor-pointer">
                <div className="w-40 h-48 md:w-48 md:h-56 rounded-3xl overflow-hidden mb-5 relative bg-slate-100 shadow-inner">
                  <img src="/image/Wabup.png" alt="Wakil Bupati Probolinggo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-extrabold text-lg md:text-xl text-slate-900 leading-tight">H. Fahmi Abdul Haq Zaini, S.Ag., S.Kom.</h3>
                <p className="text-blue-700 font-black text-xs md:text-sm uppercase tracking-widest mt-2">Wakil Bupati Probolinggo</p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Layanan Publik Grid Premium */}
        <FadeIn direction="up">
          <section className="mt-20">
            <div className="mb-8 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Layanan Publik Terintegrasi</h2>
                <p className="text-slate-500 font-medium text-lg mt-1">Akses cepat semua layanan Pemerintah Dalam Satu Platform</p>
              </div>
              <button className="hidden md:flex items-center gap-1 text-base font-bold text-blue-600 hover:text-blue-800 transition-colors">
                Lihat Semua Layanan <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {layananData.map((item, i) => (
                <Link href={item.href || '#'} key={i} className={`relative flex items-center p-4 border border-slate-200/60 bg-white rounded-2xl ${item.hoverBg} ${item.hoverBorder} hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mr-4 ${item.bg} ${item.color} shadow-inner relative z-10`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-h-[3rem] relative z-10">
                    <span className="font-extrabold text-slate-800 text-[17px] group-hover:text-slate-900 transition-colors">{item.title}</span>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-[13px] text-slate-600 mt-1 font-medium leading-snug pr-4">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-4 text-slate-300 group-hover:text-slate-700 transform group-hover:translate-x-1 transition-all z-10">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Transparansi Info */}
        <FadeIn direction="up">
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Transparansi Informasi</h2>
              <p className="text-slate-500 font-medium text-lg mt-1">Beragam informasi program dan direktori Kabupaten Probolinggo.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {transparansiData.map((item, i) => (
                <Link href={item.title === 'Pariwisata' ? '/informasi/pariwisata' : (item.title === 'Taman' ? '/informasi/taman' : '#')} key={i} className={`relative flex items-center p-4 border border-slate-200/60 bg-white rounded-2xl ${item.hoverBg} ${item.hoverBorder} hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden`}>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mr-4 text-slate-400 group-hover:bg-white/60 group-hover:text-slate-800 transition-colors shadow-sm relative z-10">
                    {item.icon}
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-h-[3rem] relative z-10">
                    <span className="font-extrabold text-slate-700 text-[16px] group-hover:text-slate-900 transition-colors">{item.title}</span>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-[13px] text-slate-700 mt-1 font-medium leading-snug pr-6">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-4 text-slate-300 group-hover:text-slate-700 transition-colors z-10">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Agenda & Event */}
        <FadeIn direction="up">
          <section className="mt-20">
            <AgendaCalendar agendas={agendaData} events={eventData} />
          </section>
        </FadeIn>

        {/* Galeri Berita Terkini */}
        <FadeIn direction="up">
          <section>
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-8">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Berita Terkini</h2>
              <p className="text-slate-500 font-medium text-lg mt-1">Kabar terbaru seputar program pembangunan dan kemasyarakatan</p>
              </div>
              <Link href="/publikasi/berita" className="mt-4 md:mt-0 text-blue-600 text-base font-bold flex items-center gap-1 hover:text-blue-800 hover:underline transition-all">
                Lihat Semua Berita <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {formattedBerita.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-auto lg:h-[460px]">
                {/* Berita Utama */}
                <Link href={`/publikasi/berita/${formattedBerita[0].slug}`} className="lg:col-span-7 relative rounded-3xl overflow-hidden group cursor-pointer shadow-md h-72 lg:h-full block">
                  <img src={formattedBerita[0].gambarUrl || ''} alt={formattedBerita[0].judul} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <span className={`bg-blue-600 text-white text-[12px] uppercase font-black tracking-wider px-3 py-1.5 rounded-full mb-3 inline-block shadow-sm`}>{formattedBerita[0].kategori}</span>
                    <h3 className="text-white font-black text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3 group-hover:text-blue-200 transition-colors">{formattedBerita[0].judul}</h3>
                    <p className="text-slate-300 text-sm font-bold flex items-center gap-2">
                      <Map className="w-4 h-4" /> Pemkab Probolinggo • {formattedBerita[0].dateString}
                    </p>
                  </div>
                </Link>

                {/* Grid Berita Kecil */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5 h-auto lg:h-full">
                  {formattedBerita.slice(1).map((news, i) => (
                    <Link href={`/publikasi/berita/${news.slug}`} key={i} className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm h-64 sm:h-full block">
                      <img src={news.gambarUrl || ''} alt={news.judul} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-5 w-full">
                        <span className={`bg-blue-600 text-white text-[11px] uppercase font-black px-2 py-1 rounded-md mb-2 inline-block`}>{news.kategori}</span>
                        <h3 className="text-white font-extrabold text-[15px] leading-snug mb-2 group-hover:text-blue-200 transition-colors line-clamp-3">{news.judul}</h3>
                        <p className="text-slate-400 text-[12px] font-medium">{news.dateString}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        </FadeIn>

        {/* Pariwisata Slider */}
        <FadeIn direction="up">
          <section>
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-4">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Destinasi Wisata Unggulan</h2>
                <p className="text-slate-500 font-medium text-lg mt-1">Jelajahi keindahan alam dan pesona wisata Kabupaten Probolinggo</p>
              </div>
              <Link href="/informasi/pariwisata" className="mt-4 md:mt-0 text-pink-600 text-base font-bold flex items-center gap-1 hover:text-pink-800 hover:underline transition-all">
                Lihat Semua Wisata <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <PariwisataSlider items={pariwisataData} />
          </section>
        </FadeIn>

        {/* Video Edukasi */}
        <FadeIn direction="up">
          <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 mb-10">
              <h2 className="text-4xl font-black text-white tracking-tight">Video Edukasi & Informasi</h2>
              <p className="text-slate-400 font-medium text-lg mt-2 max-w-xl mx-auto">Saksikan rangkuman program kerja dan liputan visual langsung dari lapangan.</p>
            </div>

            <VideoSlider videos={videoData} />
          </section>
        </FadeIn>

      </main>

      {/* Deretan Link Partner Terkait */}
      <FadeIn direction="up">
        <section className="border-y border-slate-200 bg-white py-8 md:py-12 overflow-hidden w-full">
           <div className="max-w-[1440px] mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16">
             {[
               { img: 'wbs.png', url: 'https://wbs.probolinggokab.go.id/' },
               { img: 'bp.jfif', url: 'https://probolinggokab.go.id/' },
               { img: 'jdih-probkab.png', url: 'https://jdih.probolinggokab.go.id/' },
               { img: 'lapor.png', url: 'https://www.lapor.go.id/' },
               { img: 'simadu.png', url: 'https://simadu.probolinggokab.go.id/' }
             ].map((partner, i) => (
               <a 
                 key={i} 
                 href={partner.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="h-10 md:h-12 lg:h-14 transition-all duration-300 hover:scale-110"
               >
                 <img src={`/image/${partner.img}`} alt={`Partner ${i}`} className="h-full w-auto object-contain" />
               </a>
             ))}
           </div>
        </section>
      </FadeIn>
    </>
  );
}
