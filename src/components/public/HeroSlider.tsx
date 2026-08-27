"use client";

import React, { useState, useEffect } from 'react';

export default function HeroSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [
    "/slider/1.svg",
    "/slider/2.svg",
    "/slider/3.svg",
    "/slider/4.svg",
    "/slider/5.svg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[80vh] bg-slate-900 flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Gambar Slider dengan Overlay Gradien Elegan */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img 
            src={img} 
            alt="Pemandangan Alam Probolinggo" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-50/100 mix-blend-multiply"></div>
        </div>
      ))}
      
      <div className="relative z-10 mt-16 md:mt-12 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight tracking-tighter drop-shadow-lg px-2">
          JELAJAHI LAYANAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">PROBOLINGGO</span><br/> DENGAN MUDAH
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200/90 font-medium max-w-2xl mx-auto drop-shadow-md mb-8 px-4">
          Portal terintegrasi ramah pengguna untuk akses cepat layanan, transparansi data, dan informasi terkini.
        </p>
      </div>

      {/* Indikator Slider */}
      <div className="absolute bottom-28 md:bottom-24 flex gap-2 z-20">
         {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-amber-400 w-8' : 'bg-white/50 w-2.5 hover:bg-white/80'}`}
              aria-label={`Pindah ke slide ${index + 1}`}
            />
         ))}
      </div>
    </section>
  );
}
