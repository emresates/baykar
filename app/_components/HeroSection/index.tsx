import React from "react";
import ImageSection from "./ImageSection";
import RewardSection from "./RewardSection";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-fit pt-12 desktop:py-12 desktop:p-20">
      <Image
        src="/images/hero/herobg.webp"
        alt="hero"
        width={1000}
        height={1080}
        className="absolute bottom-0 right-0 top-20 z-[-1] h-[calc(50%-80px)] w-full desktop:h-[calc(100%-80px)]"
      />

      <ImageSection />
      <div className="bg-[#FEF3C7] desktop:bg-transparent">
        <RewardSection />
      </div>
    </div>
  );
};

export default HeroSection;
