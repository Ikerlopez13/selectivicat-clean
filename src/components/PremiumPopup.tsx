'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PremiumPopup() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState('');
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isPremium, setIsPremium] = useState<boolean | null>(null);

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
      // Guardar el tiempo hasta el que no se debe mostrar el popup (10 minutos)
      const closedUntil = Date.now() + 10 * 60 * 1000;
      localStorage.setItem('premiumPopupClosedUntil', closedUntil.toString());
    }
  };

  if (loading || !show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-xl border-2 border-selectivi-yellow max-w-xs w-[320px] z-[9999]">
      <button 
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl font-bold"
      >
        ✕
      </button>
      <div className="text-center">
        <h2 className="text-2xl font-extrabold mb-1 text-selectivi-yellow">Oferta de llançament!</h2>
        <div className="flex flex-col items-center mb-1">
          <span className="text-xs text-gray-400 line-through">24,99 €</span>
          <span className="text-3xl font-extrabold text-selectivi-yellow leading-tight">9,99 €</span>
        </div>
        <div className="mb-1 text-sm text-gray-700 font-semibold">Només aquesta setmana</div>
        <div className="mb-2 text-base font-bold text-selectivi-yellow" style={{fontSize: '1.1rem', letterSpacing: '0.01em'}}>Temps restant: <span className="font-mono bg-yellow-100 px-1 py-0.5 rounded text-yellow-800" style={{fontSize: '1.1em'}}>{timeLeft}</span></div>
        <ul className="text-left mb-3 list-disc list-inside text-gray-800 text-sm font-medium space-y-1">
          <li>Preguntes quasi il·limitades</li>
          <li>Filtra per subtemes</li>
          <li>Estadístiques detallades <span className="text-xs text-gray-500">(pròximament)</span></li>
        </ul>
        <Link
          href="/premium"
          className="inline-block bg-selectivi-yellow text-white font-bold text-base px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors mt-2"
        >
          Fes-te Premium ✨
        </Link>
      </div>
    </div>
  );
} 