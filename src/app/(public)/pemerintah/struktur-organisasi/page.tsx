"use client";

import React from 'react';
import LayoutWithSidebar from '@/components/public/LayoutWithSidebar';

const sidebarItems = [
  { name: 'Visi Misi & Kegiatan Strategis', href: '/pemerintah/visi-misi' },
  { name: 'Struktur Organisasi', href: '/pemerintah/struktur-organisasi', isActive: true },
  { name: 'Bupati', href: '/pemerintah/bupati' },
  { name: 'Perangkat Daerah', href: '/pemerintah/perangkat-daerah' },
  { name: 'Kecamatan', href: '/pemerintah/kecamatan' },
  { name: 'Peta dan Batas Wilayah', href: '/pemerintah/peta-batas-wilayah' },
  { name: 'Prestasi', href: '/pemerintah/prestasi' },
];

const OrgNode = ({ title, subtitle, className = "" }: { title: string, subtitle?: string, className?: string }) => (
  <div className={`bg-white border-2 border-slate-200 rounded-lg p-3 text-center shadow-sm w-44 z-10 relative flex flex-col justify-center items-center ${className}`}>
    <h3 className="font-bold text-slate-800 text-xs leading-tight">{title}</h3>
    {subtitle && <p className="text-slate-500 text-[10px] mt-1 w-full border-t border-slate-100 pt-1">{subtitle}</p>}
  </div>
);

const VLine = ({ h = "h-8" }: { h?: string }) => <div className={`w-[2px] bg-slate-300 ${h} shrink-0`}></div>;

export default function StrukturOrganisasiPage() {
  return (
    <LayoutWithSidebar
      title="Struktur Organisasi"
      breadcrumb={[
        { name: 'Pemerintah Kabupaten', href: '#' },
        { name: 'Struktur Organisasi', href: '/pemerintah/struktur-organisasi' }
      ]}
      sidebarTitle="Pemerintah Kabupaten Probolinggo"
      sidebarItems={sidebarItems}
    >
      <div className="w-full overflow-x-auto pb-10 custom-scrollbar">
        <div className="min-w-[800px] flex flex-col items-center pt-4">
          
          {/* Level 1: BUPATI */}
          <div className="flex flex-col items-center">
            <OrgNode title="BUPATI" subtitle="WAKIL BUPATI" className="border-orange-200 shadow-orange-100" />
            <VLine h="h-8" />
          </div>

          {/* Level 2: SEKRETARIAT */}
          <div className="flex flex-col items-center relative">
            {/* Long backbone line going down to Camat */}
            <div className="absolute top-0 right-[-40px] w-[2px] h-[750px] bg-slate-300 border-l border-slate-300 z-0"></div>
            {/* Connector from Sekretaris to backbone */}
            <div className="absolute top-6 right-[-40px] w-[40px] h-[2px] bg-slate-300 z-0"></div>

            <OrgNode title="Sekretariat Daerah" />
            <VLine h="h-8" />
          </div>

          {/* Level 3: ASISTEN (3 Columns) */}
          <div className="relative w-full max-w-[800px] flex flex-col items-center">
            {/* Horizontal Line connecting the 3 assistants */}
            <div className="w-[85%] h-[2px] bg-slate-300 absolute top-0"></div>
            
            <div className="w-full flex justify-between px-[5%] relative pt-6">
              {/* Connector lines going up */}
              <div className="absolute top-0 left-[7.5%] w-[2px] h-6 bg-slate-300"></div>
              <div className="absolute top-0 right-[7.5%] w-[2px] h-6 bg-slate-300"></div>

              {/* Column 1: Asisten Pemerintahan */}
              <div className="flex flex-col items-center w-1/3">
                <OrgNode title="Asisten Pemerintahan" />
                <VLine h="h-6" />
                {/* Horizontal line for Bagian */}
                <div className="relative w-full flex justify-center">
                   <div className="w-[90%] h-[2px] bg-slate-300 absolute top-0"></div>
                   <div className="w-full flex justify-between px-2 pt-4 relative">
                     <div className="absolute top-0 left-6 w-[2px] h-4 bg-slate-300"></div>
                     <div className="absolute top-0 right-6 w-[2px] h-4 bg-slate-300"></div>
                     <div className="absolute top-0 left-1/2 w-[2px] h-4 bg-slate-300 -ml-[1px]"></div>
                     
                     <div className="flex flex-col items-center w-1/3 px-1">
                        <OrgNode title="Bagian Pemerintahan" className="w-full text-[10px]" />
                     </div>
                     <div className="flex flex-col items-center w-1/3 px-1">
                        <OrgNode title="Bagian Hukum" className="w-full text-[10px]" />
                     </div>
                     <div className="flex flex-col items-center w-1/3 px-1">
                        <OrgNode title="Bagian Kesra" className="w-full text-[10px]" />
                     </div>
                   </div>
                </div>
              </div>

              {/* Column 2: Asisten Perekonomian */}
              <div className="flex flex-col items-center w-1/3">
                <OrgNode title="Asisten Perekonomian dan Pembangunan" />
                <VLine h="h-6" />
                <div className="relative w-full flex justify-center">
                   <div className="w-[90%] h-[2px] bg-slate-300 absolute top-0"></div>
                   <div className="w-full flex justify-between px-2 pt-4 relative">
                     <div className="absolute top-0 left-6 w-[2px] h-4 bg-slate-300"></div>
                     <div className="absolute top-0 right-6 w-[2px] h-4 bg-slate-300"></div>
                     <div className="absolute top-0 left-1/2 w-[2px] h-4 bg-slate-300 -ml-[1px]"></div>
                     
                     <div className="flex flex-col items-center w-1/3 px-1">
                        <OrgNode title="Bagian Perekonomian" className="w-full text-[10px]" />
                     </div>
                     <div className="flex flex-col items-center w-1/3 px-1">
                        <OrgNode title="Bagian Adm Pembangunan" className="w-full text-[10px]" />
                     </div>
                     <div className="flex flex-col items-center w-1/3 px-1">
                        <OrgNode title="Bagian SDA" className="w-full text-[10px]" />
                     </div>
                   </div>
                </div>
              </div>

              {/* Column 3: Asisten Administrasi */}
              <div className="flex flex-col items-center w-1/3">
                <OrgNode title="Asisten Administrasi Umum" />
                <VLine h="h-6" />
                <div className="relative w-full flex justify-center">
                   <div className="w-[90%] h-[2px] bg-slate-300 absolute top-0"></div>
                   <div className="w-full flex justify-between px-2 pt-4 relative">
                     <div className="absolute top-0 left-6 w-[2px] h-4 bg-slate-300"></div>
                     <div className="absolute top-0 right-6 w-[2px] h-4 bg-slate-300"></div>
                     <div className="absolute top-0 left-1/2 w-[2px] h-4 bg-slate-300 -ml-[1px]"></div>
                     
                     <div className="flex flex-col items-center w-1/3 px-1">
                        <OrgNode title="Bagian Umum" className="w-full text-[10px]" />
                     </div>
                     <div className="flex flex-col items-center w-1/3 px-1">
                        <OrgNode title="Bagian Organisasi" className="w-full text-[10px]" />
                     </div>
                     <div className="flex flex-col items-center w-1/3 px-1">
                        <OrgNode title="Bagian Protokol" className="w-full text-[10px]" />
                     </div>
                   </div>
                </div>
              </div>

            </div>
          </div>

          {/* Level 4: Camat & Lurah (connected to backbone) */}
          <div className="flex flex-col items-center relative mt-32">
            {/* Horizontal line from backbone to Camat */}
            <div className="absolute top-6 right-[-40px] w-[40px] h-[2px] bg-slate-300 z-0"></div>
            <OrgNode title="CAMAT" subtitle="WAKIL CAMAT" />
            <VLine h="h-8" />
            
            <div className="flex flex-col items-center relative w-full">
              <div className="w-[80%] h-[2px] bg-slate-300 absolute top-0"></div>
              <div className="w-full flex justify-between px-10 pt-4 relative">
                <div className="absolute top-0 left-16 w-[2px] h-4 bg-slate-300"></div>
                <div className="absolute top-0 right-16 w-[2px] h-4 bg-slate-300"></div>
                <div className="absolute top-0 left-1/2 w-[2px] h-4 bg-slate-300 -ml-[1px]"></div>
                
                <OrgNode title="Seksi Pemerintahan" className="w-28 text-[10px]" />
                <OrgNode title="Seksi Pembangunan" className="w-28 text-[10px]" />
                <OrgNode title="Seksi Kesra" className="w-28 text-[10px]" />
              </div>
            </div>

            <VLine h="h-8" />

            {/* Horizontal line from backbone to Lurah */}
            <div className="absolute top-[180px] right-[-40px] w-[40px] h-[2px] bg-slate-300 z-0"></div>
            <OrgNode title="LURAH" />
            <VLine h="h-8" />

            <div className="flex flex-col items-center relative w-full mb-8">
              <div className="w-[80%] h-[2px] bg-slate-300 absolute top-0"></div>
              <div className="w-full flex justify-between px-10 pt-4 relative">
                <div className="absolute top-0 left-16 w-[2px] h-4 bg-slate-300"></div>
                <div className="absolute top-0 right-16 w-[2px] h-4 bg-slate-300"></div>
                <div className="absolute top-0 left-1/2 w-[2px] h-4 bg-slate-300 -ml-[1px]"></div>
                
                <OrgNode title="Seksi Pemerintahan" className="w-28 text-[10px]" />
                <OrgNode title="Seksi Pembangunan" className="w-28 text-[10px]" />
                <OrgNode title="Seksi Kesra" className="w-28 text-[10px]" />
              </div>
            </div>

            <OrgNode title="Jabatan Fungsional dan Pelaksana" className="w-48 text-[10px]" />
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}} />
    </LayoutWithSidebar>
  );
}
