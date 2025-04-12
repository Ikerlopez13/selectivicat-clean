'use client';

import { useState } from 'react';

export default function ButtonCheckout() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      disabled
      className="w-full bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 cursor-not-allowed"
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      ) : (
        <>
          <span>Coming Soon</span>
          <span className="text-xs opacity-75">(Disponible próximamente)</span>
        </>
      )}
    </button>
  );
} 