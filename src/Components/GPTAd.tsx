import { useEffect } from 'react';

// Declare googletag on Window interface
declare global {
  interface Window {
    googletag: {
      cmd: any[];
      defineSlot: (syntax: string, size: any[], divId: string) => any;
      pubads: () => any;
      enableServices: () => any;
      display: (divId: string) => any;
    };
  }
}

interface GPTAdProps {
  adUnitPath: string; // e.g., '/23379399954/ca-pub-7013164622378766-tag/header'
  divId: string;      // Unique ID for the ad div, e.g., 'div-gpt-ad-1790236071016-0'
  sizes?: any[];      // Ad sizes, e.g., [[300, 250], 'fluid']
  style?: React.CSSProperties;
}

const GPTAd = ({
  adUnitPath,
  divId,
  sizes = [[300, 250], [300, 600], 'fluid'],
  style = { minWidth: '200px', minHeight: '200px', display: 'block' }
}: GPTAdProps) => {
  useEffect(() => {
    // Ensure googletag is initialized
    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(() => {
      // Define the ad slot if it hasn't been defined yet to prevent duplicate definition errors
      const slotExists = window.googletag.pubads().getSlots().some((slot: any) => slot.getSlotElementId() === divId);
      
      if (!slotExists) {
        window.googletag.defineSlot(adUnitPath, sizes, divId).addService(window.googletag.pubads());
        window.googletag.enableServices();
      }

      window.googletag.display(divId);
    });
  }, [adUnitPath, divId, sizes]);

  return (
    <div id={divId} style={style} />
  );
};

export default GPTAd;