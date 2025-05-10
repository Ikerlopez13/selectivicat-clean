'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';

export default function PremiumPopup() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState('');
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isPremium, setIsPremium] = useState<boolean | null>(null);
  const { data: session } = useSession();

  // No mostrar en estas páginas
  const excludedPaths = [
    '/premium/checkout-info',
    '/premium/success',
    '/premium/cancel',
    '/auth/signin',
    '/auth/signup'
  ];

  useEffect(() => {
    // Comprobar si el usuario está logueado y si es premium
    const checkStatus = async () => {
      try {
        const res = await fetch('/api/premium-status');
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.hasPremiumStatus !== 'undefined') {
            setIsLoggedIn(true);
            setIsPremium(!!data.hasPremiumStatus);
          } else {
            setIsLoggedIn(false);
            setIsPremium(false);
          }
        } else if (res.status === 401) {
          setIsLoggedIn(false);
          setIsPremium(false);
        } else {
          setIsLoggedIn(false);
          setIsPremium(false);
        }
      } catch {
        setIsLoggedIn(false);
        setIsPremium(false);
      }
    };
    checkStatus();
  }, [pathname]);

  useEffect(() => {
    if (isPremium === null || isLoggedIn === null) return;
    if (!isLoggedIn || isPremium) {
      setLoading(false);
      return;
    }
    // Solo mostrar a estándar logueado y si no lo ha cerrado antes (o han pasado 10 minutos)
    let canShow = true;
    if (typeof window !== 'undefined') {
      const closedUntil = localStorage.getItem('premiumPopupClosedUntil');
      if (closedUntil) {
        const closedUntilTime = parseInt(closedUntil, 10);
        if (!isNaN(closedUntilTime) && Date.now() < closedUntilTime) {
          canShow = false;
        }
      }
    }
    if (canShow && !excludedPaths.includes(pathname)) {
      setTimeout(() => setShow(true), 5000); // Mostrar a los 5 segundos
    }
    setLoading(false);
  }, [isPremium, isLoggedIn, pathname]);

  useEffect(() => {
    // Calcular el tiempo restante hasta el domingo a las 23:59
    const calculateTimeLeft = () => {
      const now = new Date();
      const endDate = new Date();
      // Encontrar el próximo domingo
      endDate.setDate(now.getDate() + (7 - now.getDay()));
      endDate.setHours(23, 59, 0, 0);
      const difference = endDate.getTime() - now.getTime();
      if (difference <= 0) {
        setTimeLeft('Oferta finalitzada!');
        return;
      }
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    if (typeof window !== 'undefined') {
      // Guardar el tiempo hasta el que no se debe mostrar el popup (7 minutos)
      const closedUntil = Date.now() + 7 * 60 * 1000;
      localStorage.setItem('premiumPopupClosedUntil', closedUntil.toString());
    }
  };

  const handlePremiumClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const stripeUrl = "https://buy.stripe.com/28oaG31EX7Qf8DK4gj";
    if (!session) {
      signIn(undefined, { callbackUrl: stripeUrl });
    } else {
      window.location.href = stripeUrl;
    }
  };

  if (loading || !show) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-white p-6 rounded-2xl border-4 border-selectivi-yellow max-w-xs w-[340px] z-[2147483647] shadow-2xl flex flex-col items-center" style={{ pointerEvents: 'auto' }}>
      <button 
        onClick={handleClose}
        className="absolute top-2 right-2 text-black bg-white border-2 border-selectivi-yellow rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition"
        aria-label="Cerrar popup"
      >
        ✕
      </button>
      <div className="text-center w-full">
        <h2 className="text-2xl font-extrabold mb-1 text-gray-900">Estudiant un dissabte?</h2>
        <div className="text-gray-600 mb-2">Això es per a tu, un fora de serie</div>
        <div className="flex flex-col items-center mb-2">
          <span className="text-base text-gray-400 line-through">24,99€</span>
          <span className="text-4xl font-extrabold text-selectivi-yellow leading-tight">6,99€</span>
        </div>
        <a
          href="https://buy.stripe.com/28oaG31EX7Qf8DK4gj"
          onClick={handlePremiumClick}
          className="inline-block bg-selectivi-yellow text-white font-bold text-lg px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors mb-4 mt-2 w-full"
        >
          Fes-te Premium ara →
        </a>
        <div className="flex justify-center mt-2 mb-1">
          <img src="/images/regalo.png" alt="Regalo" className="w-28 h-28 object-contain mx-auto" />
        </div>
      </div>
    </div>
  );
} 