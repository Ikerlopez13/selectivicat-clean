'use client';

import React from 'react';

interface ShareButtonProps {
  url: string;
  text: string;
}

export default function ShareButton({ url, text }: ShareButtonProps) {
  const handleShare = () => {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encodedText}%20${encodedUrl}`, '_blank');
  };

  return (
    <button
      onClick={handleShare}
      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
    >
      Compartir per WhatsApp
    </button>
  );
} 