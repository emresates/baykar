import Image from "next/image";
import React from "react";
import Button from "../shared/button";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="z-10 h-[472px] overflow-hidden rounded-[10px] border border-primary bg-primary shadow-2xl shadow-white/25">
      <Image src={image} alt={title} width={472} height={220} />
      <div className="w-full space-y-4 p-8">
        <h2 className="text-xxl font-bold">{title}</h2>
        <p className="text-lg">{description}</p>
        <Button
          color="white"
          className="mt-4 flex w-full items-center justify-center gap-x-4 hover:shadow-white/40"
        >
          <Image
            src="/images/best/basket.svg"
            alt="basket"
            width={16}
            height={16}
          />
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default Card;
