'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface AdSenseAdProps {
  slot: string;
  flyerUrl?: string;
  flyerImg?: string;
  className?: string;
}

export default function AdSenseAd({ slot, flyerUrl, flyerImg, className }: AdSenseAdProps) {
  const { data: session } = useSession();
  const isPremium = !!session?.user?.hasPremiumStatus;

  // Si hay flyer, mostrarlo para todos los usuarios
  if (flyerUrl && flyerImg) {
    return (
      <a
        href={flyerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full rounded-2xl overflow-hidden border-2 border-selectivi-yellow shadow-lg hover:shadow-2xl transition-all bg-white ${className || ''}`}
        style={{ maxWidth: 400, margin: '0 auto' }}
      >
        <img
          src={flyerImg}
          alt="Macro Festival Fi de Selectivitat"
          className="w-full h-auto object-cover rounded-2xl"
          style={{ display: 'block' }}
        />
      </a>
    );
  }

  useEffect(() => {
    if (isPremium) return;
    try {
      const adsbygoogle = (window as any).adsbygoogle || [];
      adsbygoogle.push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [isPremium]);

  if (isPremium) return null;

  return (
    <div className="w-full">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4829722017444918"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
} 