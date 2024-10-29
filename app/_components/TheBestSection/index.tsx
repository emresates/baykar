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
      image: "/images/best/card-1.webp",
    },
    {
      title: "Title-2",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: "/images/best/card-2.webp",
    },
    {
      title: "Title-3",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: "/images/best/card-3.webp",
    },
  ];

  return (
    <div className="relative bg-[#0F172A] px-4 py-12 text-white desktop:p-20">
      <Image
        src="/images/best/bg.png"
        alt="hero"
        width={500}
        height={500}
        className="pointer-events-none absolute bottom-14 left-10 z-0 hidden h-auto w-[calc(100%-80px)] object-contain desktop:block"
      />
      <Image
        src="/images/best/bgmobile.png"
        alt="hero"
        width={500}
        height={500}
        className="pointer-events-none absolute left-0 top-60 z-0 h-[calc(100%-240px)] w-full object-contain desktop:hidden"
      />
      <div className="space-y-8 desktop:space-y-20">
        <div className="flex flex-col items-center justify-between gap-y-8 desktop:flex-row">
          <h1 className="text-center text-heading-5 font-extrabold desktop:text-left desktop:text-heading-2">
            The best of the best
          </h1>
          <Button
            className="h-[64px] w-[233px] p-0 text-xxl font-bold hover:shadow-white/40"
            size="custom"
            color="white"
          >
            Sing up now
          </Button>
        </div>
        <div className="flex flex-col items-center justify-between gap-12 desktop:flex-row">
          {data?.map((item, index) => <Card key={index} {...item} />)}
        </div>
      </div>
    </div>
  );
};

export default TheBest;
