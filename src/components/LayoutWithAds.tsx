import AdSenseAd from './AdSenseAd';

interface LayoutWithAdsProps {
  children: React.ReactNode;
}

export default function LayoutWithAds({ children }: LayoutWithAdsProps) {
  return (
    <div className="flex justify-between min-h-screen">
      {/* Left sidebar ad */}
      <div className="hidden xl:block w-[160px] sticky top-24 h-[600px]">
        <AdSenseAd
          slot="1859826246"
          style={{ 
            display: 'block',
            width: '160px',
            height: '600px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-5xl mx-auto px-4">
        {children}
      </div>

      {/* Right sidebar ad */}
      <div className="hidden xl:block w-[160px] sticky top-24 h-[600px]">
        <AdSenseAd
          slot="1859826246"
          style={{ 
            display: 'block',
            width: '160px',
            height: '600px'
          }}
        />
      </div>
    </div>
  );
} 