'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PopupCR7() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const hasVisitedPremium = localStorage.getItem('hasVisitedPremium');
    
    if (!hasVisitedPremium) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handlePremiumClick = () => {
    localStorage.setItem('hasVisitedPremium', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative w-[280px] h-[280px] mb-2">
            <Image
              src="/images/cr7.png"
              alt="CR7 Motivational"
              width={280}
              height={280}
              priority
              unoptimized
              className="object-contain"
              onError={(e) => {
                console.error('Error loading image:', e);
                e.currentTarget.style.display = 'none';
                setImageError(true);
              }}
              onLoad={() => {
                console.log('Image loaded successfully');
                setImageError(false);
              }}
            />
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 rounded-xl">
                Error cargando imagen
              </div>
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 italic leading-relaxed">
            "Todosh losh problemash tienen solusion"
          </h3>
          
          <p className="text-gray-600 text-lg">
            Accedeix a totes les preguntes i explicacions amb el pla Premium
          </p>

          <Link 
            href="/premium"
            onClick={handlePremiumClick}
            className="group relative w-full inline-flex items-center justify-center py-4 px-8 font-bold text-white bg-gradient-to-r from-selectivi-yellow to-yellow-500 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 overflow-hidden"
          >
            <div className="absolute inset-0 w-3 bg-white bg-opacity-30 skew-x-[20deg] group-hover:animate-shine" />
            <span className="mr-2 text-lg">Fes-te Premium</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}