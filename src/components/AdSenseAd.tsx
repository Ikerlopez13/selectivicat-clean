'use client';

import { useEffect, useRef } from 'react';

interface AdSenseAdProps {
  slot: string;
  style?: React.CSSProperties;
}

export default function AdSenseAd({ slot, style }: AdSenseAdProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      const adsbygoogle = (window as any).adsbygoogle;
      
      if (adsbygoogle && adRef.current) {
        adsbygoogle.push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '160px',
          height: '600px',
          ...style
        }}
        data-ad-client="ca-pub-4829722017444918"
        data-ad-slot={slot}
        data-ad-format="vertical"
        data-full-width-responsive="false"
      />
    </div>
  );
} 