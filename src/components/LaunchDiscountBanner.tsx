'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LaunchDiscountBanner() {
  const [timeLeft, setTimeLeft] = useState('');
  const [isPremium, setIsPremium] = useState<boolean | null>(null);

  useEffect(() => {
    // Comprobar si el usuario es premium
    const checkPremium = async () => {
      try {
        const res = await fetch('/api/premium-status');
        if (res.ok) {
          const data = await res.json();
          setIsPremium(!!data.hasPremiumStatus);
        } else {
          setIsPremium(false);
        }
      } catch {
        setIsPremium(false);
      }
    };
    checkPremium();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // FECHA DE LA SELECTIVITAT 2025: 11 de junio de 2025 a las 9:00
      const selectivitatDate = new Date('2025-06-11T09:00:00');
      const difference = selectivitatDate.getTime() - now.getTime();
      if (difference <= 0) {
        setTimeLeft('La Selectivitat ja ha començat!');
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

  if (isPremium) return null;

  return (
    <div className="w-full bg-red-200 text-red-800 py-3 px-4 flex flex-col md:flex-row items-center justify-center gap-2 text-center font-semibold text-base md:text-lg shadow-md z-40 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
        <div className="flex items-center gap-2 text-lg md:text-xl font-bold text-red-900">
          <span role="img" aria-label="alarm">⏰</span>
          <span>Queden</span>
          <span className="bg-[#ffe5e5] text-red-700 font-bold px-4 py-1.5 rounded-lg shadow" style={{fontSize: '1.15em', letterSpacing: '0.01em'}}>
            {timeLeft}
          </span>
          <span>per la Selectivitat 2025!</span>
        </div>
        <a
          href="/premium/checkout-info"
          className="mt-2 md:mt-0 px-6 py-3 bg-white text-red-700 font-bold rounded-xl shadow hover:bg-red-100 border border-red-200 transition text-lg md:text-xl"
          style={{ minWidth: 220, textAlign: 'center' }}
        >
          Prepara't ara o serà massa tard!
        </a>
      </div>
    </div>
  );
} 