"use client";
import React, { useRef } from "react";
import Button from "../../../components/shared/button";
import Image from "next/image";
import SwiperContent from "./SwiperContent";

const SwiperSection = () => {
  const sliderRef = useRef<{
    slickNext: () => void;
    slickPrev: () => void;
  } | null>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      console.log("next");
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="space-y-20 p-20 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-heading-2 font-extrabold">Because they love us</h1>

        <div className="space-x-6">
          <Button className="h-12 w-12 rounded-full" onClick={previous}>
            <Image
              src="/images/feedback/left.svg"
              alt="arrow-left"
              width={24}
              height={24}
            />
          </Button>
          <Button className="h-12 w-12 rounded-full" onClick={next}>
            <Image
              src="/images/feedback/right.svg"
              alt="arrow-right"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
      <div className="absolute left-0 h-[430px] top-24 w-full bg-[#FDE68A]"></div>
      <SwiperContent ref={sliderRef} />
    </div>
  );
};

export default SwiperSection;
