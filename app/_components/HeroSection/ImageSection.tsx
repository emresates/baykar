import React from "react";
import Button from "../../../components/shared/button";
import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="z-10 flex items-center justify-between gap-20 pb-20">
      <div className="space-y-12">
        <h1 className="text-heading-1-m font-extrabold">
          Collectible Sneakers
        </h1>
        <h1 className="text-lg">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </h1>
        <div className="flex items-center gap-4">
          <Button
            size="lg"
            className="h-[56px] w-[179px] p-0 text-xl font-medium"
          >
            Sing up now
          </Button>
          <p className="flex items-center gap-2">
            <Image
              src="/images/hero/play-circle.svg"
              alt="play-circle"
              width={24}
              height={24}
            />
            Watch Demo
          </p>
        </div>
      </div>

      <div className="flex h-[423px] min-w-[486px] items-end justify-center">
        <div className="flex h-[372px] w-[367px] items-center justify-center rounded-[50px] bg-[#FBBF24]">
          <Image
            src="/images/hero/shoe.png"
            alt="shoe"
            width={486}
            height={388}
            sizes="100vw"
            className="absolute h-[388px] w-[486px] object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
