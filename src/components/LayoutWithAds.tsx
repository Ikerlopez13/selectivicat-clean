import AdSenseAd from './AdSenseAd';
import { useSession } from 'next-auth/react';

interface LayoutWithAdsProps {
  children: React.ReactNode;
}

export default function LayoutWithAds({ children }: LayoutWithAdsProps) {
  const { data: session } = useSession();
  const isPremium = !!session?.user?.hasPremiumStatus;

  return (
    <div className="flex justify-between min-h-screen">
      {/* Left sidebar ad */}
      {!isPremium && (
        <div className="hidden xl:block w-[160px] sticky top-24 h-[600px]">
          <AdSenseAd slot="1859826246" />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 max-w-5xl mx-auto px-4">
        {children}
      </div>

      {/* Right sidebar ad */}
      {!isPremium && (
        <div className="hidden xl:block w-[160px] sticky top-24 h-[600px]">
          <AdSenseAd slot="1859826246" />
        </div>
      )}
    </div>
  );
} 