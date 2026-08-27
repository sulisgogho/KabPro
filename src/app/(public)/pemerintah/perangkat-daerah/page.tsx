import React from 'react';
import LayoutWithSidebar from '@/components/public/LayoutWithSidebar';
import { prisma } from '@/lib/prisma';
import PemerintahList from '@/components/public/PemerintahList';

const sidebarItems = [
  { name: 'Visi Misi & Kegiatan Strategis', href: '/pemerintah/visi-misi' },
  { name: 'Struktur Organisasi', href: '/pemerintah/struktur-organisasi' },
  { name: 'Bupati', href: '/pemerintah/bupati' },
  { name: 'Perangkat Daerah', href: '/pemerintah/perangkat-daerah', isActive: true },
  { name: 'Kecamatan', href: '/pemerintah/kecamatan' },
  { name: 'Peta dan Batas Wilayah', href: '/pemerintah/peta-batas-wilayah' },
  { name: 'Prestasi', href: '/pemerintah/prestasi' },
];

export default async function PerangkatDaerahPage() {
  const pemerintahData = await prisma.pemerintah.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <LayoutWithSidebar
      title="Unit Kerja Perangkat Daerah"
      breadcrumb={[
        { name: 'Pemerintah Kabupaten', href: '#' },
        { name: 'Unit Kerja Perangkat Daerah', href: '/pemerintah/perangkat-daerah' }
      ]}
      sidebarTitle="Pemerintah Kabupaten Probolinggo"
      sidebarItems={sidebarItems}
    >
      <div className="flex flex-col gap-6 pb-12">
        <PemerintahList initialData={pemerintahData} />
      </div>
    </LayoutWithSidebar>
  );
}
