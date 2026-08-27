import React from 'react';
import Link from 'next/link';
import { ChevronRight, Share2, Globe, Camera, Video } from 'lucide-react';
import { KecamatanSlider } from './KecamatanSlider';

export function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
          
          {/* Kiri: Identitas & Alamat */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-14 flex items-center justify-center shrink-0">
                <img src="/image/Logo-Kabpro.svg" alt="Logo Kabupaten Probolinggo" className="w-full h-full object-contain" />
              </div>
              <div className="text-lg font-extrabold text-slate-900 leading-tight">
                Pemerintah Kabupaten<br />
                <span className="text-blue-700">Probolinggo</span>
              </div>
            </div>
            <p className="text-base text-slate-500 leading-relaxed font-medium max-w-sm mb-4">
              Kantor Bupati Probolinggo<br />
              Jl. Panglima Sudirman No.134, Kraksaan<br />
              Kabupaten Probolinggo, Jawa Timur 67282
            </p>
            <a href="mailto:info@probolinggokab.go.id" className="text-blue-600 font-bold hover:underline">
              info@probolinggokab.go.id
            </a>
          </div>

          {/* Tengah: Partner Wilayah */}
          <div className="lg:col-span-6 lg:text-center flex flex-col lg:items-center">
             <div className="mb-8 flex flex-col lg:items-center">
               <h4 className="font-extrabold text-[13px] text-slate-400 uppercase tracking-widest mb-3">
                 Pemprov Jatim
               </h4>
               <a 
                 href="https://jatimprov.go.id/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
               >
                 <img src="/image/jatim.png" alt="Logo Pemprov Jatim" className="h-10 md:h-12 w-auto object-contain drop-shadow-sm" />
               </a>
             </div>

             <h4 className="font-extrabold text-[13px] text-slate-400 uppercase tracking-widest mb-6">
               24 Kecamatan Kabupaten Probolinggo
             </h4>
             <KecamatanSlider />
          </div>

          {/* Kanan: Sosial & Aksi */}
          <div className="lg:col-span-3 flex flex-col lg:items-end">
             <h4 className="font-extrabold text-[13px] text-slate-400 uppercase tracking-widest mb-6">
               Terhubung Bersama Kami
             </h4>
             <div className="flex gap-3 mb-8">
               <a href="#" className="w-10 h-10 bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-blue-600 rounded-full flex justify-center items-center shadow-sm transition-all hover:-translate-y-1">
                 <Share2 className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-sky-500 rounded-full flex justify-center items-center shadow-sm transition-all hover:-translate-y-1">
                 <Globe className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-pink-600 rounded-full flex justify-center items-center shadow-sm transition-all hover:-translate-y-1">
                 <Camera className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-red-600 rounded-full flex justify-center items-center shadow-sm transition-all hover:-translate-y-1">
                 <Video className="w-5 h-5" />
               </a>
             </div>

             <button className="bg-slate-900 hover:bg-blue-700 text-white text-base font-bold px-6 py-3 rounded-full transition-all shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
               Beri Masukan Portal <ChevronRight className="w-4 h-4" />
             </button>
          </div>

        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-[1440px] mx-auto px-4 mt-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
         <p className="text-[13px] font-bold text-slate-400">
           &copy; {new Date().getFullYear()} Dinas Komunikasi, Informatika, Statistik dan Persandian Kabupaten Probolinggo
         </p>
         <div className="flex items-center gap-4 text-[13px] font-bold text-slate-400">
           <Link href="#" className="hover:text-blue-600">Kebijakan Privasi</Link>
           <Link href="#" className="hover:text-blue-600">Syarat & Ketentuan</Link>
         </div>
      </div>
    </footer>
  );
}
