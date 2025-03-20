import React, { useEffect } from 'react';

interface AdSenseProps {
  style?: React.CSSProperties;
  className?: string;
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle';
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdSense: React.FC<AdSenseProps> = ({ style, className, adSlot, adFormat = 'auto' }) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={style || { display: 'block' }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx" // Replace with your publisher ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense; 