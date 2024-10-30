"use client"
import Image from "next/image";
import React from "react";
import Button from "../../../components/shared/button";

const Join = () => {
  const listData = [
    "Est et in pharetra magna adipiscing ornare aliquam.",
    "Tellus arcu sed consequat ac velit ut eu blandit.",
    "Ullamcorper ornare in et egestas dolor orci.",
  ];

  const onClick = () => {
    const iframe = document.createElement("iframe");
    iframe.width = "720";
    iframe.height = "480";
    iframe.src = "https://www.youtube.com/embed/4KoueFpk1IY";
    iframe.allowFullscreen = true;
    iframe.className = "rounded-lg z-10 w-full h-full";
    const removeImage = document.querySelector(".video-container img");
    const addVideo = document.querySelector(".video");
    removeImage?.remove();
    addVideo?.appendChild(iframe);
  };

  return (
    <div className="relative px-4 pb-14 pt-4 desktop:px-20 desktop:py-40">
      <div className="flex flex-col items-center justify-between gap-8 rounded-[30px] bg-white px-4 py-8 shadow-lg desktop:flex-row desktop:gap-20 desktop:p-20">
        <div className="z-10 space-y-6">
          <h1 className="text-center text-heading-5 font-extrabold desktop:text-left desktop:text-heading-2">
            Why join us
          </h1>
          <div>
            {listData.map((item, index) => (
              <p
                key={index}
                className="flex items-start space-x-4 text-md desktop:text-xl"
              >
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
          <div className="flex items-center justify-center desktop:justify-start">
            <Button className="w-[179px] text-lg desktop:text-md">
              Sign up now
            </Button>
          </div>
        </div>

        <Image
          src="/images/join/bg.png"
          alt="check"
          width={1000}
          height={1000}
          className="absolute bottom-0 right-0 z-0 h-[410px] w-full object-contain desktop:bottom-1/2 desktop:right-5 desktop:h-[625px] desktop:w-[713px] desktop:translate-y-1/2"
        />
        <div className="video-container relative">
          <div className="relative z-10 h-[234px] w-auto desktop:h-[350px] desktop:w-[520px]">
            <button
              onClick={onClick}
              className="video inset-0 z-20 flex h-full w-full items-center justify-center"
            >
              <Image src="/images/join/video.webp" alt="Play Video" fill />
            </button>
          </div>

          <div className="absolute bottom-3 left-14 aspect-square w-12 rounded-full bg-[#15803D]/50 desktop:bottom-0 desktop:left-20 desktop:w-[85px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Join;
