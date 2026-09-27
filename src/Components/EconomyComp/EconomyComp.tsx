
// import AdSense from '../AdSense'
import GPTAd from '../GPTAd'
import { EconomyNewsGrid } from './EcoHelp'

export const EconomyComp = () => {
  return (
    <div>
      {/* <AdSense adSlot="3891595190" /> */}
      <GPTAd
        adUnitPath="/23379399954/ca-pub-7013164622378766-tag/inarticle2" 
        divId="div-gpt-ad-1790413901042-0" 
        sizes={[[200, 200], [300, 250], [250, 250], [336, 280], 'fluid', [300, 100]]}
        style={{ minWidth: '200px', minHeight: '100px', display: 'block' }}
      />

        <EconomyNewsGrid/>
      {/* <AdSense adSlot="3891595190" /> */}
      

    </div>
  )
}
