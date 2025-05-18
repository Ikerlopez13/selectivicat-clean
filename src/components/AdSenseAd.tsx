'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

interface AdSenseAdProps {
  slot: string;
}

export default function AdSenseAd({ slot }: AdSenseAdProps) {
  const { data: session } = useSession();
  const isPremium = !!session?.user?.hasPremiumStatus;

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