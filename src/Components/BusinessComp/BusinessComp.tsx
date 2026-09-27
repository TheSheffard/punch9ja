// import AdSense from "../AdSense"
import GPTAd from "../GPTAd"
import { BusinessNewsGrid } from "./BusinessHelp"

export const BusinessComp = () => {
  return (
    <div>
      {/* <AdSense adSlot="3891595190" /> */}
       <GPTAd 
        adUnitPath="/23379399954/ca-pub-7013164622378766-tag/inarticle1" 
        divId="div-gpt-ad-1790413801249-0" 
        sizes={[[300, 250], 'fluid', [336, 280], [250, 250], [300, 100], [200, 200]]}
        style={{ minWidth: '200px', minHeight: '100px', display: 'block' }}
      />

      <BusinessNewsGrid />
      {/* <AdSense adSlot="3891595190" /> */}

    </div>
  )
}
