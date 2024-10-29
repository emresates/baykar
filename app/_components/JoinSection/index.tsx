import Image from "next/image";
import React from "react";
import Button from "../../../components/shared/button";

const Join = () => {
  const listData = [
    "Est et in pharetra magna adipiscing ornare aliquam.",
    "Tellus arcu sed consequat ac velit ut eu blandit.",
    "Ullamcorper ornare in et egestas dolor orci.",
  ];
  return (
    <div className="relative px-20 py-40">
      <div className="flex items-center justify-between gap-20 rounded-[30px] bg-white p-20 shadow-lg">
        <div className="space-y-6">
          <h1 className="text-heading-2 font-extrabold">Why join us</h1>
          <div>
            {listData.map((item, index) => (
              <p key={index} className="flex items-center space-x-4 text-xl">
                <Image
                  src="/images/join/check.svg"
                  alt="check"
                  width={24}
                  height={24}
                />
                {item}
              </p>
            ))}
          </div>
          <Button className="w-[179px]">Sign up now</Button>
        </div>

        <Image
          src="/images/join/bg.png"
          alt="check"
          width={1000}
          height={1000}
          className="absolute bottom-1/2 right-5 z-0 h-[625px] w-[713px] translate-y-1/2 object-contain"
        />
        <div className="relative">
          <Image
            src="/images/join/video.png"
            alt="check"
            width={1000}
            height={1000}
            className="z-10 h-[350px] w-[520px]"
          />
          <div className="aspect-square w-[85px] rounded-full bg-[#15803D]/50 absolute bottom-0 left-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Join;
