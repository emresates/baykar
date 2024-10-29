"use client";
import Image from "next/image";
import React from "react";

const Collection = () => {
  const data = [
    {
      button: "Bibendum tellus",
      icon: "/images/collection/first.svg",
      images: [
        "/images/collection/collectionback.png",
        "/images/collection/collectionfront.png",
        "/images/collection/collectionsmall.jpeg",
      ],
    },
    {
      button: "Cras eget",
      icon: "/images/collection/second.svg",
      images: [
        "/images/collection/collectionfront.png",
        "/images/collection/collectionback.png",
        "/images/collection/collectionsmall.jpeg",
      ],
    },
    {
      button: "Dolor pharetra",
      icon: "/images/collection/third.svg",
      images: [
        "/images/collection/collectionback.png",
        "/images/collection/collectionfront.png",
        "/images/collection/collectionsmall.jpeg",
      ],
    },
    {
      button: "Amet, fringilla",
      icon: "/images/collection/fourth.svg",
      images: [
        "/images/collection/collectionfront.png",
        "/images/collection/collectionback.png",
        "/images/collection/collectionsmall.jpeg",
      ],
    },
    {
      button: "Amet nibh",
      icon: "/images/collection/fifth.svg",
      images: [
        "/images/collection/collectionback.png",
        "/images/collection/collectionfront.png",
        "/images/collection/collectionsmall.jpeg",
      ],
    },
    {
      button: "Sed velit",
      icon: "/images/collection/sixth.svg",
      images: [
        "/images/collection/collectionfront.png",
        "/images/collection/collectionback.png",
        "/images/collection/collectionsmall.jpeg",
      ],
    },
  ];

  const [active, setActive] = React.useState(0);

  return (
    <div className="relative px-4 py-12 desktop:space-y-20 desktop:p-20">
      <Image
        src={"/images/collection/collectionbg.png"}
        alt="collection"
        width={1000}
        height={1000}
        className="pointer-events-none absolute bottom-0 right-0 h-fit w-full"
      />
      <div className="space-y-8">
        <h1 className="text-center text-heading-5 font-extrabold desktop:text-left desktop:text-heading-2">
          Grow your collection
        </h1>
        <p className="text-center text-md desktop:text-left desktop:text-lg">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-start gap-x-20 desktop:mt-0 desktop:h-[550px] desktop:flex-row desktop:justify-between 2xl:pr-40">
        <div className="customScrollbar flex w-full items-center gap-x-4 overflow-auto px-4 pb-4 desktop:block desktop:w-[240px] desktop:overflow-hidden desktop:px-0 desktop:pb-0">
          {data?.map((item, index) => (
            <button
              key={index}
              className={`${active === index ? "rounded-lg shadow-lg" : ""} flex w-full min-w-fit items-center justify-between gap-4 p-4 text-lg font-medium`}
              onClick={() => setActive(index)}
            >
              <p className="flex items-center gap-2">
                <Image src={item.icon} alt="icon" width={18} height={18} />
                {item.button}
              </p>
              {active === index && (
                <Image
                  src="/images/collection/arrow.svg"
                  alt="image"
                  width={14}
                  height={14}
                />
              )}
            </button>
          ))}
        </div>
        <div className="relative">
          <Image
            src={data[active].images[0]}
            alt="image"
            width={760}
            height={450}
            className="max-h-[200px] min-h-[200px] min-w-[300px] max-w-[300px] rounded-[20px] desktop:max-h-[450px] desktop:min-h-[450px] desktop:min-w-[760px] desktop:max-w-[760px]"
          />
          <Image
            src={data[active].images[1]}
            alt="image"
            width={760}
            height={450}
            className="absolute left-8 top-8 max-h-[200px] min-h-[200px] min-w-[300px] max-w-[300px] rounded-[20px] desktop:left-24 desktop:top-24 desktop:max-h-[450px] desktop:min-h-[450px] desktop:min-w-[760px] desktop:max-w-[760px]"
          />
          <Image
            src={data[active].images[2]}
            alt="image"
            width={250}
            height={280}
            className="absolute -right-20 bottom-5 max-h-[105px] max-w-[95px] rounded-[10px] border-[5px] border-white object-fill desktop:-right-32 desktop:bottom-0 desktop:max-h-[280px] desktop:max-w-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
