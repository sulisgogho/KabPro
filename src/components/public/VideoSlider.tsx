"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';
import YouTubeThumbnail from './YouTubeThumbnail';

export default function VideoSlider({ videos }: { videos: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  if (!videos || videos.length === 0) return null;

  const mainVideo = videos[currentIndex];
  
  // Calculate prev and next indices with wrap-around if there are at least 3 videos,
  // or just handle smaller arrays gracefully.
  const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
  const nextIndex = (currentIndex + 1) % videos.length;

  const prevVideo = videos.length > 1 ? videos[prevIndex] : null;
  const nextVideo = videos.length > 1 ? videos[nextIndex] : null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Auto-play
  React.useEffect(() => {
    if (isHovered || videos.length === 0) return;
    const timer = setInterval(nextSlide, 4000); // 4 detik
    return () => clearInterval(timer);
  }, [currentIndex, isHovered, videos.length]);

  return (
    <div 
      className="relative w-full max-w-[1200px] mx-auto h-[260px] md:h-[450px] flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {videos.map((video, index) => {
        let position = "translate-x-[150%] opacity-0 scale-75 z-10 pointer-events-none";
        
        if (index === currentIndex) {
          position = "translate-x-0 opacity-100 scale-100 z-30 shadow-2xl border border-white/20";
        } else if (index === prevIndex) {
          position = "-translate-x-[60%] md:-translate-x-[75%] lg:-translate-x-[65%] opacity-50 scale-90 z-20 cursor-pointer hover:opacity-80";
        } else if (index === nextIndex) {
          position = "translate-x-[60%] md:translate-x-[75%] lg:translate-x-[65%] opacity-50 scale-90 z-20 cursor-pointer hover:opacity-80";
        } else if (index === ((currentIndex - 2 + videos.length) % videos.length)) {
          position = "-translate-x-[150%] opacity-0 scale-75 z-10 pointer-events-none";
        }

        return (
          <div
            key={video.id || index}
            className={`absolute w-[85%] md:w-[65%] lg:w-[60%] h-56 md:h-80 lg:h-96 rounded-3xl overflow-hidden transition-all duration-700 ease-in-out ${position}`}
            onClick={() => {
              if (index === prevIndex) prevSlide();
              if (index === nextIndex) nextSlide();
            }}
          >
            {index === currentIndex ? (
              <Link href={`/publikasi/video/${video.id}`} className="block w-full h-full relative group">
                <YouTubeThumbnail 
                  youtubeId={video.youtubeId}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
                  alt={video.judul} 
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-white shadow-xl pl-1 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                    </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-left">
                  <h3 className="text-white font-black text-lg md:text-xl drop-shadow-md line-clamp-2">{video.judul}</h3>
                </div>
              </Link>
            ) : (
              <div className="w-full h-full relative">
                 <YouTubeThumbnail 
                   youtubeId={video.youtubeId}
                   className="w-full h-full object-cover" 
                   alt={video.judul} 
                 />
                 <div className="absolute inset-0 bg-slate-900/50"></div>
              </div>
            )}
          </div>
        );
      })}

      {videos.length > 1 && (
        <button 
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 lg:-left-6 z-40 w-12 h-12 bg-white/10 backdrop-blur hover:bg-white/30 border border-white/30 hover:border-white/50 rounded-full items-center justify-center text-white transition-all shadow-lg hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6"/>
        </button>
      )}

      {videos.length > 1 && (
        <button 
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 lg:-right-6 z-40 w-12 h-12 bg-white/10 backdrop-blur hover:bg-white/30 border border-white/30 hover:border-white/50 rounded-full items-center justify-center text-white transition-all shadow-lg hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
