"use client";

import React from 'react';
import LayoutWithSidebar from '@/components/public/LayoutWithSidebar';

const sidebarItems = [
  { name: 'Visi Misi & Kegiatan Strategis', href: '/pemerintah/visi-misi' },
  { name: 'Struktur Organisasi', href: '/pemerintah/struktur-organisasi' },
  { name: 'Bupati', href: '/pemerintah/bupati' },
  { name: 'Perangkat Daerah', href: '/pemerintah/perangkat-daerah' },
  { name: 'Kecamatan', href: '/pemerintah/kecamatan' },
  { name: 'Peta dan Batas Wilayah', href: '/pemerintah/peta-batas-wilayah', isActive: true },
  { name: 'Prestasi', href: '/pemerintah/prestasi' },
];

export default function PetaBatasWilayahPage() {
  return (
    <LayoutWithSidebar
      title="Peta & Batas Wilayah"
      breadcrumb={[
        { name: 'Pemerintah Kabupaten', href: '#' },
        { name: 'Peta dan Batas Wilayah', href: '/pemerintah/peta-batas-wilayah' }
      ]}
      sidebarTitle="Pemerintah Kabupaten Probolinggo"
      sidebarItems={sidebarItems}
    >
      <div className="flex flex-col gap-10 pb-12">


        {/* Top Section: Map & Stats */}
        <div className="mt-0 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 px-4 w-full">
          {/* Peta disesuaikan dengan skala dan grid koordinat yang akurat */}
          <svg viewBox="0 80 1000 550" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[95vw] lg:w-[900px] max-h-[70vh]">
            <defs>
              {/* Reusable Pin Component */}
              <g id="map-pin">
                <path d="M 0,0 C 4,-5 12,-14 12,-22 C 12,-29 7,-34 0,-34 C -7,-34 -12,-29 -12,-22 C -12,-14 -4,-5 0,0 Z" fill="white"/>
                <circle cx="0" cy="-22" r="4.5" fill="#EB30A2"/>
              </g>
            </defs>
            
            <g id="probolinggo-map" stroke="white" strokeWidth="3" strokeLinejoin="round">
              {/* 1. Tongas */}
              <g className="group cursor-pointer">
                <path d="M140,110 L180,120 L230,130 L250,140 L260,190 L240,220 L230,260 L180,280 L140,290 L110,280 L90,260 L60,260 L50,220 L60,180 L100,130 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="140" y="210" />
                  <text x="140" y="235">Tongas</text>
                </g>
              </g>

              {/* 2. Sumberasih */}
              <g className="group cursor-pointer">
                <path d="M250,140 L280,140 L300,130 L320,150 L350,160 L360,190 L380,200 L380,260 L350,260 L330,240 L310,250 L280,240 L260,220 L260,190 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="310" y="190" />
                  <text x="310" y="215">Sumberasih</text>
                </g>
              </g>

              {/* 3. Wonomerto */}
              <g className="group cursor-pointer">
                <path d="M260,220 L280,240 L310,250 L330,240 L350,260 L380,260 L380,280 L390,320 L370,360 L330,350 L290,330 L270,300 L240,270 L230,260 L240,220 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="310" y="290" />
                  <text x="310" y="315">Wonomerto</text>
                </g>
              </g>

              {/* 4. Bantaran */}
              <g className="group cursor-pointer">
                <path d="M290,330 L330,350 L370,360 L390,410 L380,440 L350,450 L310,480 L290,460 L270,410 L270,360 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="330" y="420" />
                  <text x="330" y="445">Bantaran</text>
                </g>
              </g>

              {/* 5. Lumbang */}
              <g className="group cursor-pointer">
                <path d="M140,290 L180,280 L230,260 L240,270 L270,300 L290,330 L270,360 L270,410 L240,400 L220,440 L170,440 L130,460 L80,450 L50,470 L20,450 L30,410 L60,390 L80,330 L110,280 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="150" y="360" />
                  <text x="150" y="385">Lumbang</text>
                </g>
              </g>

              {/* 6. Sukapura */}
              <g className="group cursor-pointer">
                <path d="M50,470 L80,450 L130,460 L170,440 L180,470 L170,520 L130,530 L100,560 L60,570 L30,550 L40,510 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="100" y="500" />
                  <text x="100" y="525">Sukapura</text>
                </g>
              </g>

              {/* 7. Sumber */}
              <g className="group cursor-pointer">
                <path d="M170,440 L220,440 L210,510 L230,550 L260,580 L200,610 L160,610 L130,580 L100,560 L130,530 L170,520 L180,470 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="190" y="540" />
                  <text x="190" y="565">Sumber</text>
                </g>
              </g>

              {/* 8. Kuripan */}
              <g className="group cursor-pointer">
                <path d="M220,440 L240,400 L270,410 L290,460 L310,480 L330,510 L300,560 L260,580 L230,550 L210,510 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="270" y="510" />
                  <text x="270" y="535">Kuripan</text>
                </g>
              </g>

              {/* 9. Dringu */}
              <g className="group cursor-pointer">
                <path d="M420,200 L440,190 L460,210 L450,240 L460,260 L440,290 L420,280 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="440" y="240" />
                  <text x="440" y="265">Dringu</text>
                </g>
              </g>

              {/* 10. Leces */}
              <g className="group cursor-pointer">
                <path d="M380,280 L420,280 L440,290 L460,290 L480,310 L480,340 L450,370 L420,380 L390,410 L370,360 L390,320 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="420" y="340" />
                  <text x="420" y="365">Leces</text>
                </g>
              </g>

              {/* 11. Gending */}
              <g className="group cursor-pointer">
                <path d="M440,190 L470,190 L510,200 L530,210 L520,240 L490,250 L460,260 L450,240 L460,210 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="490" y="220" />
                  <text x="490" y="245">Gending</text>
                </g>
              </g>

              {/* 12. Banyuanyar */}
              <g className="group cursor-pointer">
                <path d="M440,290 L460,260 L490,250 L520,240 L540,260 L540,310 L510,340 L480,340 L460,290 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="500" y="290" />
                  <text x="500" y="315">Banyuanyar</text>
                </g>
              </g>

              {/* 13. Tegalsiwalan */}
              <g className="group cursor-pointer">
                <path d="M390,410 L420,380 L450,370 L480,340 L510,340 L530,360 L540,390 L510,430 L480,430 L450,450 L420,440 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="480" y="400" />
                  <text x="480" y="425">Tegalsiwalan</text>
                </g>
              </g>

              {/* 14. Pajarakan */}
              <g className="group cursor-pointer">
                <path d="M510,200 L540,190 L570,180 L590,190 L610,180 L610,210 L580,230 L550,240 L520,240 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="570" y="210" />
                  <text x="570" y="235">Pajarakan</text>
                </g>
              </g>

              {/* 15. Kraksaan */}
              <g className="group cursor-pointer">
                <path d="M610,180 L640,170 L670,170 L700,180 L720,180 L730,210 L700,230 L670,220 L640,230 L610,210 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="670" y="190" />
                  <text x="670" y="215">Kraksaan</text>
                </g>
              </g>

              {/* 16. Maron */}
              <g className="group cursor-pointer">
                <path d="M520,240 L550,240 L580,230 L610,210 L640,230 L670,220 L660,280 L630,300 L600,320 L570,310 L540,310 L540,260 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="590" y="260" />
                  <text x="590" y="285">Maron</text>
                </g>
              </g>

              {/* 17. Krejengan */}
              <g className="group cursor-pointer">
                <path d="M640,230 L670,220 L700,230 L730,250 L740,280 L710,310 L680,310 L660,280 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="690" y="270" />
                  <text x="690" y="295">Krejengan</text>
                </g>
              </g>

              {/* 18. Besuk */}
              <g className="group cursor-pointer">
                <path d="M720,180 L770,170 L800,180 L820,210 L810,250 L770,270 L740,280 L730,250 L700,230 L730,210 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="760" y="220" />
                  <text x="760" y="245">Besuk</text>
                </g>
              </g>

              {/* 19. Paiton */}
              <g className="group cursor-pointer">
                <path d="M770,170 L820,150 L870,150 L910,160 L930,170 L950,200 L900,220 L860,220 L830,240 L810,250 L820,210 L800,180 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="860" y="190" />
                  <text x="860" y="215">Paiton</text>
                </g>
              </g>

              {/* 20. Kotaanyar */}
              <g className="group cursor-pointer">
                <path d="M810,250 L830,240 L860,220 L900,220 L950,200 L960,240 L970,270 L920,290 L880,290 L860,310 L810,290 L790,270 L770,270 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="880" y="260" />
                  <text x="880" y="285">Kotaanyar</text>
                </g>
              </g>

              {/* 21. Pakuniran */}
              <g className="group cursor-pointer">
                <path d="M740,280 L770,270 L790,270 L810,290 L860,310 L880,290 L920,290 L970,270 L980,320 L960,370 L900,400 L850,440 L810,420 L770,390 L730,360 L710,310 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="840" y="350" />
                  <text x="840" y="375">Pakuniran</text>
                </g>
              </g>

              {/* 22. Gading */}
              <g className="group cursor-pointer">
                <path d="M540,310 L570,310 L600,320 L630,300 L660,280 L680,310 L710,310 L730,360 L750,400 L710,430 L670,430 L640,400 L600,400 L570,380 L540,390 L530,360 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="640" y="350" />
                  <text x="640" y="375">Gading</text>
                </g>
              </g>

              {/* 23. Tiris */}
              <g className="group cursor-pointer">
                <path d="M450,450 L480,430 L510,430 L540,390 L570,380 L600,400 L640,400 L630,450 L610,500 L560,540 L500,530 L470,490 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="550" y="480" />
                  <text x="550" y="505">Tiris</text>
                </g>
              </g>

              {/* 24. Krucil */}
              <g className="group cursor-pointer">
                <path d="M640,400 L670,430 L710,430 L750,400 L730,360 L770,390 L810,420 L850,440 L870,490 L840,540 L760,570 L670,550 L610,500 L630,450 Z" className="fill-sky-400 group-hover:fill-blue-800 transition-colors duration-300"></path>
                <g stroke="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" fontSize="16" fontWeight="700" fill="white" textAnchor="middle">
                  <use href="#map-pin" x="730" y="480" />
                  <text x="730" y="505">Krucil</text>
                </g>
              </g>
            </g>

            {/* Kota Probolinggo Label (Area Celah Kosong di Peta) */}
            <text x="400" y="240" fill="#9ca3af" fontSize="12" fontWeight="700" textAnchor="middle" letterSpacing="1">KOTA</text>
          </svg>
          
          <div className="w-full lg:w-52 rounded-xl border p-4 flex flex-row lg:flex-col justify-between gap-4 lg:gap-16 h-fit bg-white shadow-sm">
            <div className="text-center">
              <div className="text-lg lg:text-2xl font-bold">24</div>
              <div className="text-xs lg:text-xl">Kecamatan</div>
            </div>
            <div className="text-center">
              <div className="text-lg lg:text-2xl font-bold">330</div>
              <div className="text-xs lg:text-xl">Desa/Kelurahan</div>
            </div>
            <div className="text-center">
              <div className="text-lg lg:text-2xl font-bold">1.481</div>
              <div className="text-xs lg:text-xl">Rukun Warga</div>
            </div>
            <div className="text-center">
              <div className="text-lg lg:text-2xl font-bold">5.320</div>
              <div className="text-xs lg:text-xl">Rukun Tetangga</div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          
          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Letak Kabupaten Probolinggo</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-1">
              7&deg; 40&apos; - 8&deg; 10&apos; Lintang Selatan
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              112&deg; 50&apos; - 113&deg; 30&apos; Bujur Timur
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Ketinggian di Atas Permukaan Laut</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              0 - 3083 Meter
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Sebelah Selatan</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kabupaten Lumajang dan Kabupaten Malang
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Sebelah Timur</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kabupaten Situbondo
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Sebelah Barat</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kabupaten Pasuruan
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">Sebelah Utara</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Selat Madura
            </p>
          </div>

        </div>
      </div>
    </LayoutWithSidebar>
  );
}
