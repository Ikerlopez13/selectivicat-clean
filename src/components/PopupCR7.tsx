'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PopupCR7() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el popup después de un pequeño delay para mejor UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full overflow-hidden">
        {/* Botón de cerrar */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row items-center">
          {/* Imagen de CR7 */}
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <Image
              src="/images/cr7.jpg"
              alt="Cristiano Ronaldo"
              fill
              className="object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="p-6 md:p-8 w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              "Tots els problemes tenen solució"
            </h3>
            
            <p className="text-gray-600 mb-6">
              Amb SeleTest pots aconseguir problemes i solucions de selectivitat il·limitades.
            </p>

            <Link 
              href="/fes-te-premium"
              className="block w-full bg-selectivi-yellow text-black text-center py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Fes-te Premium ara
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 