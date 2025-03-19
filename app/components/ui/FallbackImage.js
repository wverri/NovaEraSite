'use client';

import { useState } from 'react';

export default function FallbackImage({ src, alt, fallbackSrc, className = "" }) {
  const [imgSrc, setImgSrc] = useState(src);
  
  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className} 
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
} 