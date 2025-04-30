'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobar si ya se ha aceptado
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 text-sm md:text-base">
            <p>
              Utilitzem cookies pròpies i de tercers per millorar els nostres serveis i mostrar publicitat relacionada amb les teves preferències mitjançant l'anàlisi dels teus hàbits de navegació.{' '}
              <Link href="/politica-cookies" className="text-selectivi-yellow hover:underline">
                Més informació
              </Link>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={acceptCookies}
              className="bg-selectivi-yellow hover:bg-selectivi-yellow/90 text-gray-900 px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Acceptar cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 