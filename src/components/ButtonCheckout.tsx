'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ButtonCheckout() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href="/premium/checkout-info"
      className="w-full bg-selectivi-yellow text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 hover:bg-yellow-500 shadow-lg text-lg"
      style={{ pointerEvents: isLoading ? 'none' : 'auto', opacity: isLoading ? 0.7 : 1 }}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      ) : (
        <>
          <span>Fes-te Premium ara</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </>
      )}
    </Link>
  );
} 