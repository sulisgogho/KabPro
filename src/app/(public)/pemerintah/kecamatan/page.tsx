import React from 'react';
import LayoutWithSidebar from '@/components/public/LayoutWithSidebar';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';

const sidebarItems = [
  { name: 'Visi Misi & Kegiatan Strategis', href: '/pemerintah/visi-misi' },
  { name: 'Struktur Organisasi', href: '/pemerintah/struktur-organisasi' },
  { name: 'Bupati', href: '/pemerintah/bupati' },
  { name: 'Perangkat Daerah', href: '/pemerintah/perangkat-daerah' },
  { name: 'Kecamatan', href: '/pemerintah/kecamatan', isActive: true },
  { name: 'Peta dan Batas Wilayah', href: '/pemerintah/peta-batas-wilayah' },
  { name: 'Prestasi', href: '/pemerintah/prestasi' },
];

export default async function KecamatanPage() {
  const kecamatanData = await prisma.kecamatan.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <LayoutWithSidebar
      title="Kecamatan"
      breadcrumb={[
        { name: 'Pemerintah Kabupaten', href: '#' },
        { name: 'Kecamatan', href: '/pemerintah/kecamatan' }
      ]}
      sidebarTitle="Pemerintah Kabupaten Probolinggo"
      sidebarItems={sidebarItems}
    >
      <div className="flex flex-col gap-6 pb-12">
        <div className="grid md:grid-cols-2 gap-4">
          {kecamatanData.map((item) => (
            <Link 
              key={item.id} 
              href={item.linkWebsite || "#"}
              target={item.linkWebsite ? "_blank" : "_self"}
              className="group flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-orange-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100 relative bg-slate-100 flex items-center justify-center">
                  <span className="text-xl font-black text-slate-300 uppercase">{item.nama.substring(0, 2)}</span>
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">Kecamatan {item.nama}</h3>
                  <p className="text-xs text-slate-500 font-medium">Camat: {item.namaCamat}</p>
                  <p className="text-xs text-slate-400 mt-1">Luas: {item.luasWilayah} | Penduduk: {item.jumlahPenduduk}</p>
                </div>
              </div>

              {item.linkWebsite && (
                <div className="pr-2">
                  <ExternalLink className="w-5 h-5 text-orange-500 group-hover:text-orange-600 transition-colors" />
                </div>
              )}
            </Link>
          ))}
        </div>
        {kecamatanData.length === 0 && (
          <div className="text-center py-12 text-slate-500 bg-slate-50 rounded-xl border border-slate-100">
            Belum ada data kecamatan.
          </div>
        )}
      </div>
    </LayoutWithSidebar>
  );
}
