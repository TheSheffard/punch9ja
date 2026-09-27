import GPTAd from "../GPTAd"; // Update path if necessary
import { SportsNewsGrid } from "./SportHelp";

export const Sport = () => {
  return (
    <div>
      {/* First Ad Slot */}
      <GPTAd 
        adUnitPath="/23379399954/ca-pub-7013164622378766-tag/header" 
        divId="sport-top-ad-slot" 
      />

      <SportsNewsGrid />

      {/* Second Ad Slot (Must use a different divId) */}
      <GPTAd 
        adUnitPath="/23379399954/ca-pub-7013164622378766-tag/inarticle1" 
        divId="div-gpt-ad-1790413801249-0" 
        sizes={[[300, 250], 'fluid', [336, 280], [250, 250], [300, 100], [200, 200]]}
        style={{ minWidth: '200px', minHeight: '100px', display: 'block' }}
      />
    </div>
  );
};