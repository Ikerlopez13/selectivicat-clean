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

  if (isPremium) return null;

  return (
    <div className="w-full bg-selectivi-yellow text-white py-3 px-4 flex flex-col md:flex-row items-center justify-center gap-2 text-center font-semibold text-base md:text-lg shadow-md z-40 mt-16">
      <span className="flex flex-col md:flex-row items-center gap-2">
        <span className="mb-1 md:mb-0">Oferta de llançament! Premium aquesta setmana.</span>
        <span className="flex items-center gap-2">
          <span className="text-xs text-gray-200 line-through">24,99 €</span>
          <span className="text-2xl md:text-3xl font-extrabold text-white" style={{letterSpacing: '0.01em'}}>9,99 €</span>
        </span>
        <span className="ml-2 font-mono bg-yellow-100 px-2 py-1 rounded text-yellow-800 text-base md:text-lg" style={{letterSpacing: '0.01em'}}>
          {timeLeft}
        </span>
      </span>
      <Link
        href="/premium"
        className="ml-0 md:ml-4 bg-white text-selectivi-yellow font-bold px-4 py-1.5 rounded-lg shadow hover:bg-yellow-100 transition-colors border border-yellow-300"
      >
        Fes-te Premium ✨
      </Link>
    </div>
  );
} 