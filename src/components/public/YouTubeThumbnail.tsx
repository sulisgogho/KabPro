"use client";

import React, { useState } from 'react';

export default function YouTubeThumbnail({ 
  youtubeId, 
  alt,
  className 
}: { 
  youtubeId: string;
  alt: string;
  className?: string;
}) {
  const [src, setSrc] = useState(`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`);

  return (
    <img 
      src={src} 
      onError={() => { 
        if (src.includes('maxresdefault')) {
          setSrc(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`);
        }
      }}
      className={className} 
      alt={alt} 
    />
  );
}
