// import AdSense from "../AdSense"
import GPTAd from "../GPTAd";
import { SearchBar } from "../SearchComp/SearchComp";
import {
  EditorsChoice,
  HomeHero,
  LastSection,
  ThirdSection,
  TopNews,
} from "./HomeHelp";

export const HomeComp = () => {
  return (
    <div className="px-2 h-fit  border-red-500 max-w-[1400px] mx-auto">
      <SearchBar />

      <GPTAd
        adUnitPath="/23379399954/ca-pub-7013164622378766-tag/header"
        divId="sport-top-ad-slot"
      />

      {/* <AdSense adSlot="3891595190" /> */}
      <HomeHero />

      <GPTAd
        adUnitPath="/23379399954/ca-pub-7013164622378766-tag/inarticle1"
        divId="div-gpt-ad-1790413801249-0"
        sizes={[
          [300, 250],
          "fluid",
          [336, 280],
          [250, 250],
          [300, 100],
          [200, 200],
        ]}
        style={{ minWidth: "200px", minHeight: "100px", display: "block" }}
      />

      <TopNews />
      {/* <AdSense adSlot="3891595190" /> */}

      <ThirdSection />
      {/* <AdSense adSlot="3891595190" /> */}

      <EditorsChoice />
      <GPTAd
        adUnitPath="/23379399954/ca-pub-7013164622378766-tag/inarticle2"
        divId="div-gpt-ad-1790413901042-0"
        sizes={[
          [200, 200],
          [300, 250],
          [250, 250],
          [336, 280],
          "fluid",
          [300, 100],
        ]}
        style={{ minWidth: "200px", minHeight: "100px", display: "block" }}
      />
      <LastSection />
      {/* <AdSense adSlot="3891595190" /> */}
    </div>
  );
};
