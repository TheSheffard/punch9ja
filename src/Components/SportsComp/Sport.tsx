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
        adUnitPath="/23379399954/ca-pub-7013164622378766-tag/header" 
        divId="sport-bottom-ad-slot" 
      />
    </div>
  );
};