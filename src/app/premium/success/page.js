import React from 'react';
import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">Gràcies per la teva compra!</h1>
      <p className="text-lg text-gray-800 mb-8">El teu accés premium s'ha activat amb èxit.</p>
      <Link href="/dashboard" className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
        Anar al Tauler
      </Link>
    </div>
  );
};

export default SuccessPage; 