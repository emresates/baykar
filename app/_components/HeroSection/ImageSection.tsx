import React from "react";
import Button from "../../../components/shared/button";
import Image from "next/image";
import Modal from "@/components/Modal";

const ImageSection = () => {
  return (
    <div className="z-10 flex flex-col items-center justify-between px-4 pb-10 desktop:flex-row desktop:gap-20 desktop:pb-20">
      <div className="space-y-12">
        <h1 className="text-center text-heading-2 font-extrabold desktop:text-left desktop:text-heading-1-m">
          Collectible Sneakers
        </h1>
        <h1 className="text-center text-lg desktop:text-left">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </h1>
        <div className="flex items-center justify-center gap-4 desktop:justify-start">
          <Button
            size="lg"
            className="h-[56px] w-[179px] p-0 text-lg font-medium desktop:text-xl"
          >
            Sing up now
          </Button>
          {/* <p className="flex items-center gap-2">
            <Image
              src="/images/hero/play-circle.svg"
              alt="play-circle"
              width={24}
              height={24}
            />
            Watch Demo
          </p> */}

          <Modal
            modalName="watchVideo"
            trigger={
              <p className="flex items-center gap-2">
                <Image
                  src="/images/hero/play-circle.svg"
                  alt="play-circle"
                  width={24}
                  height={24}
                />
                Watch Demo
              </p>
            }
          />
        </div>
      </div>

      <div className="flex h-[314px] min-w-[360px] items-end justify-center desktop:h-[423px] desktop:min-w-[486px]">
        <div className="flex h-[272px] w-[276px] items-center justify-center rounded-[50px] bg-[#FBBF24] desktop:h-[372px] desktop:w-[367px]">
          <Image
            src="/images/hero/shoe.webp"
            alt="shoe"
            width={486}
            height={388}
            sizes="100vw"
            className="absolute h-[288px] w-[361px] object-fill desktop:h-[388px] desktop:w-[486px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
