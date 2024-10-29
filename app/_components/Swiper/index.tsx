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
    <div className="relative space-y-8 overflow-hidden py-12 px-4 desktop:p-20 desktop:space-y-20">
      <div className="flex items-center justify-between">
        <h1 className="text-heading-5 font-extrabold desktop:text-heading-2">
          Because they love us
        </h1>

        <div className="hidden space-x-6 desktop:block">
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
      <div className="absolute left-0 top-24 h-[277px] w-full bg-[#FDE68A] desktop:h-[430px]"></div>
      <SwiperContent ref={sliderRef} />
    </div>
  );
};

export default SwiperSection;
