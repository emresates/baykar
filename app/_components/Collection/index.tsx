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
    <div className="space-y-20 p-20 relative">
      <Image
        src={"/images/collection/collectionbg.png"}
        alt="collection"
        width={1000}
        height={1000}
        className="h-fit w-full absolute bottom-0 right-0 pointer-events-none"
      />
      <div className="space-y-8">
        <h1 className="text-heading-2 font-extrabold">Grow your collection</h1>
        <p className="text-lg">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="flex h-[550px] items-start gap-x-20">
        <div className="w-[240px]">
          {data?.map((item, index) => (
            <button
              key={index}
              className={`${active === index ? "rounded-lg shadow-lg" : ""} flex w-full items-center justify-between gap-4 p-4 text-lg font-medium`}
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
            className="max-h-[450px] min-h-[450px] min-w-[760px] max-w-[760px] rounded-[20px]"
          />
          <Image
            src={data[active].images[1]}
            alt="image"
            width={760}
            height={450}
            className="absolute left-24 top-24 max-h-[450px] min-h-[450px] min-w-[760px] max-w-[760px] rounded-[20px]"
          />
          <Image
            src={data[active].images[2]}
            alt="image"
            width={250}
            height={280}
            className="absolute -right-32 bottom-0 max-h-[280px] max-w-[250px] rounded-[10px] border-[5px] border-white object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
