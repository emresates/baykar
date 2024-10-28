import React from "react";
import ImageSection from "./ImageSection";
import RewardSection from "./RewardSection";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-fit p-20">
      <Image
        src="/images/hero/herobg.png"
        alt="hero"
        width={1000}
        height={1080}
        className="absolute bottom-0 right-0 top-20 z-[-1] h-[calc(100%-80px)] w-full"
      />

      <ImageSection />
      <RewardSection />
    </div>
  );
};

export default HeroSection;
