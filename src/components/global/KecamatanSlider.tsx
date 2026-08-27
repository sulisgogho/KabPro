"use client";

import React from 'react';
import Image from 'next/image';

const kecamatan = [
  "Bantaran", "Banyuanyar", "Besuk", "Dringu", "Gading", "Gending", 
  "Kotaanyar", "Kraksaan", "Krejengan", "Krucil", "Kuripan", "Leces", 
  "Lumbang", "Maron", "Paiton", "Pajarakan", "Pakuniran", "Sukapura", 
  "Sumber", "Sumberasih", "Tegalsiwalan", "Tiris", "Tongas", "Wonomerto"
];

// Duplicate for seamless marquee loop
const duplicatedKecamatan = [...kecamatan, ...kecamatan];

export function KecamatanSlider() {
  return (
    // Membatasi lebar maksimal agar hanya terlihat sekitar 4 logo sekaligus
    <div className="w-full max-w-[500px] mx-auto overflow-hidden relative flex group">
      {/* Menggunakan animasi marquee pelan (45 detik) */}
      <div className="flex w-max min-w-full animate-[marquee_45s_linear_infinite] gap-x-6 items-center py-2 hover:[animation-play-state:paused]">
        {duplicatedKecamatan.map((kec, i) => (
          <a 
            key={`${kec}-${i}`} 
            href={`https://${kec.toLowerCase()}.probolinggokab.go.id/`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-8 md:h-9 w-[110px] shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0"
            title={`Kecamatan ${kec}`}
          >
            <Image 
              src={`/kecamatan/${kec}.png`} 
              alt={`Kecamatan ${kec}`} 
              width={110} 
              height={36} 
              className="h-full w-auto object-contain drop-shadow-sm" 
            />
          </a>
        ))}
      </div>
    </div>
  );
}
