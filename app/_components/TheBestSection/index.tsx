import React from "react";
import Button from "../../../components/shared/button";
import Card from "./Card";
import Image from "next/image";

const TheBest = () => {
  const data = [
    {
      title: "Title-1",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: "/images/best/card-1.png",
    },
    {
      title: "Title-2",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: "/images/best/card-2.png",
    },
    {
      title: "Title-3",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: "/images/best/card-3.png",
    },
  ];

  return (
    <div className="relative bg-[#0F172A] p-20 text-white">
      <Image
        src="/images/best/bg.png"
        alt="hero"
        width={500}
        height={500}
        className="absolute bottom-14 left-10 z-0 h-auto w-[calc(100%-80px)] object-contain"
      />
      <div className="space-y-20">
        <div className="flex items-center justify-between">
          <h1 className="text-heading-2 font-extrabold">
            The best of the best
          </h1>
          <Button
            className="text-xxl h-[64px] w-[233px] p-0 font-bold hover:shadow-white/40"
            size="custom"
            color="white"
          >
            Sing up now
          </Button>
        </div>
        <div className="flex items-center justify-between gap-12">
          {data?.map((item, index) => <Card key={index} {...item} />)}
        </div>
      </div>
    </div>
  );
};

export default TheBest;
