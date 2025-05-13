'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';

export default function ButtonCheckout() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleCheckout = async () => {
    if (!session) {
      signIn(undefined, { callbackUrl: '/premium' });
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch('/api/billing/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          successUrl: `${window.location.origin}/premium/success`,
          cancelUrl: `${window.location.origin}/premium/checkout-info`
        })
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error iniciando el pago: ' + (data.error || ''));
      }
    } catch (e) {
      alert('Error iniciando el pago.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="w-full bg-selectivi-yellow text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center gap-2 hover:bg-yellow-500 shadow-lg text-lg"
      style={{ pointerEvents: isLoading ? 'none' : 'auto', opacity: isLoading ? 0.7 : 1 }}
      onClick={handleCheckout}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      ) : (
        <>
          <span>Fes-te Premium ara</span>
          <span className="font-bold">9,99 €</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </>
      )}
    </button>
  );
} 