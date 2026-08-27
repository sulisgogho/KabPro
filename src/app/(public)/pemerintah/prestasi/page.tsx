import React from 'react';
import LayoutWithSidebar from '@/components/public/LayoutWithSidebar';
import { prisma } from '@/lib/prisma';
import PrestasiList from '@/components/public/PrestasiList';

const sidebarItems = [
  { name: 'Visi Misi & Kegiatan Strategis', href: '/pemerintah/visi-misi' },
  { name: 'Struktur Organisasi', href: '/pemerintah/struktur-organisasi' },
  { name: 'Bupati', href: '/pemerintah/bupati' },
  { name: 'Perangkat Daerah', href: '/pemerintah/perangkat-daerah' },
  { name: 'Kecamatan', href: '/pemerintah/kecamatan' },
  { name: 'Peta dan Batas Wilayah', href: '/pemerintah/peta-batas-wilayah' },
  { name: 'Prestasi', href: '/pemerintah/prestasi', isActive: true },
];

export default async function PrestasiPage() {
  const prestasiData = await prisma.prestasi.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <LayoutWithSidebar
      title="Prestasi"
      breadcrumb={[
        { name: 'Pemerintah Kabupaten', href: '#' },
        { name: 'Prestasi', href: '/pemerintah/prestasi' }
      ]}
      sidebarTitle="Pemerintah Kabupaten Probolinggo"
      sidebarItems={sidebarItems}
    >
      <div className="flex flex-col gap-6 pb-12">
        <PrestasiList initialData={prestasiData} />
      </div>
    </LayoutWithSidebar>
  );
}
