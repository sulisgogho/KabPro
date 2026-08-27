'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface PariwisataItem {
  id: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  gambarUrl: string | null;
  lokasi: string;
}

export default function PariwisataSlider({ items }: { items: PariwisataItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // Auto-play
  useEffect(() => {
    if (isHovered || items.length === 0) return;
    const timer = setInterval(nextSlide, 2500); // 2.5 detik
    return () => clearInterval(timer);
  }, [nextSlide, isHovered, items.length]);

  if (!items || items.length === 0) return null;

  const getVisibleItems = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      let index = (currentIndex + i) % items.length;
      if (index < 0) index += items.length;
      visible.push({ item: items[index], offset: i });
    }
    return visible;
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div 
        className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center py-10"
        onMouseDown={() => setIsHovered(true)}
        onMouseUp={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Cards Container */}
        <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center mb-8">
          {getVisibleItems().map((v, idx) => {
            let transformClass = '';
            let zIndex = 0;
            let opacity = 'opacity-0';
            let widthClass = 'w-[320px] md:w-[600px] lg:w-[700px]'; // default center width

            if (v.offset === 0) {
              transformClass = 'translate-x-0 scale-100';
              zIndex = 30;
              opacity = 'opacity-100';
            } else if (v.offset === -1) {
              widthClass = 'w-[220px] md:w-[320px] lg:w-[380px]';
              transformClass = '-translate-x-[70%] md:-translate-x-[80%] lg:-translate-x-[85%] scale-[0.9]';
              zIndex = 20;
              opacity = 'opacity-70 cursor-pointer hover:opacity-100';
            } else if (v.offset === 1) {
              widthClass = 'w-[220px] md:w-[320px] lg:w-[380px]';
              transformClass = 'translate-x-[70%] md:translate-x-[80%] lg:translate-x-[85%] scale-[0.9]';
              zIndex = 20;
              opacity = 'opacity-70 cursor-pointer hover:opacity-100';
            } else if (v.offset === -2) {
              widthClass = 'w-[220px] md:w-[320px] lg:w-[380px]';
              transformClass = '-translate-x-[110%] md:-translate-x-[125%] lg:-translate-x-[130%] scale-[0.7]';
              zIndex = 10;
              opacity = 'opacity-0 md:opacity-30 pointer-events-none';
            } else if (v.offset === 2) {
              widthClass = 'w-[220px] md:w-[320px] lg:w-[380px]';
              transformClass = 'translate-x-[110%] md:translate-x-[125%] lg:translate-x-[130%] scale-[0.7]';
              zIndex = 10;
              opacity = 'opacity-0 md:opacity-30 pointer-events-none';
            }

            return (
              <div 
                key={`${v.item.id}-${idx}`}
                onClick={() => {
                  if (v.offset === -1) prevSlide();
                  if (v.offset === 1) nextSlide();
                }}
                className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] h-[400px] md:h-[500px] ${widthClass} ${transformClass} ${opacity}`}
                style={{ zIndex }}
              >
                <div className="w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden">
                  <div className="relative h-[220px] md:h-[300px] shrink-0 w-full bg-slate-200">
                    <img 
                      src={v.item.gambarUrl || '/wisata/bromo.jpg'} 
                      alt={v.item.nama}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-8 flex-1 flex flex-col justify-center text-center">
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 line-clamp-1 mb-2 md:mb-3">
                        {v.item.nama}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 line-clamp-2 md:line-clamp-3 leading-relaxed mx-auto">
                        {v.item.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-6 z-40 relative">
          <button 
            onClick={prevSlide}
            className="bg-blue-100 hover:bg-blue-800 text-blue-600 hover:text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide}
            className="bg-blue-100 hover:bg-blue-800 text-blue-600 hover:text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
