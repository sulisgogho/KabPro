import React from 'react';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import PariwisataList from '@/components/public/PariwisataList';

export default async function PariwisataPage() {
  const pariwisataData = await prisma.pariwisata.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <section className="relative h-[350px] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <Image 
            src="/wisata/bromo.jpg" 
            alt="Hero Pariwisata" 
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            Destinasi Pariwisata
          </h1>
          <p className="text-lg text-slate-200">
            Jelajahi keindahan alam, kekayaan budaya, dan pesona Kabupaten Probolinggo. Temukan destinasi liburan terbaik untuk Anda dan keluarga.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-12">
        <PariwisataList initialData={pariwisataData} />
      </div>
    </main>
  );
}
