"use client";
import Image from "next/image";
import React from "react";

const Collection = () => {
  const data = [
    {
      button: "Bibendum tellus",
      icon: "/images/collection/first.svg",
      images: ["/images/collection/images.webp"],
      // images: [
      //   "/images/collection/collectionback.webp",
      //   "/images/collection/collectionfront.webp",
      //   "/images/collection/collectionsmall.jpeg",
      // ],
    },
    {
      button: "Cras eget",
      icon: "/images/collection/second.svg",
      images: ["/images/collection/images.webp"],
    },
    {
      button: "Dolor pharetra",
      icon: "/images/collection/third.svg",
      images: ["/images/collection/images.webp"],
    },
    {
      button: "Amet, fringilla",
      icon: "/images/collection/fourth.svg",
      images: ["/images/collection/images.webp"],
    },
    {
      button: "Amet nibh",
      icon: "/images/collection/fifth.svg",
      images: ["/images/collection/images.webp"],
    },
    {
      button: "Sed velit",
      icon: "/images/collection/sixth.svg",
      images: ["/images/collection/images.webp"],
    },
  ];
  const [active, setActive] = React.useState(0); // active state

  return (
    <div className="relative px-4 py-12 desktop:space-y-20 desktop:p-20">
      <Image
        src={"/images/collection/collectionbg.png"}
        alt="collection"
        width={1000}
        height={1000}
        className="pointer-events-none absolute -bottom-1 right-0 z-[-1] h-fit w-full"
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
          <span className="font-semibold italic">
            Hepsinde fotoğraf değişiyor fakat hepsinde aynı fotoğraf var.
          </span>
        </p>
      </div>
      <div className="z-10 mt-8 flex flex-col items-center gap-x-20 desktop:mt-0 desktop:h-[550px] desktop:flex-row desktop:items-start desktop:justify-between">
        <div className="customScrollbar flex w-full items-center gap-x-4 overflow-auto px-4 pb-4 desktop:block desktop:w-[240px] desktop:min-w-[240px] desktop:overflow-hidden desktop:px-2 desktop:pb-4">
          {data?.map((item, index) => (
            <button
              key={index}
              className={`${active === index ? "rounded-lg bg-white shadow-lg" : ""} flex w-full min-w-fit items-center justify-between gap-4 p-4 text-lg font-medium`}
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
        {/* <Image
            src={data[active].images[0]}
            alt="image"
            width={760}
            height={450}
            className="max-h-[200px] min-h-[200px] min-w-[300px] max-w-[300px] rounded-[20px] mobile:max-h-[350px] mobile:min-h-[350px] mobile:min-w-[600px] mobile:max-w-[600px] desktop:max-h-[450px] desktop:min-h-[450px] desktop:min-w-[760px] desktop:max-w-[760px]"
          />

          <Image
            src={data[active].images[1]}
            alt="image"
            width={760}
            height={450}
            className="absolute left-8 top-8 max-h-[200px] min-h-[200px] min-w-[300px] max-w-[300px] rounded-[20px] mobile:max-h-[350px] mobile:min-h-[350px] mobile:min-w-[600px] mobile:max-w-[600px] desktop:left-24 desktop:top-24 desktop:max-h-[450px] desktop:min-h-[450px] desktop:min-w-[760px] desktop:max-w-[760px]"
          />

          <Image
            src={data[active].images[2]}
            alt="image"
            width={250}
            height={280}
            className="absolute -right-14 bottom-5 max-h-[105px] max-w-[95px] rounded-[10px] border-[5px] border-white object-fill mobile:-right-20 mobile:bottom-10 mobile:max-h-[160px] mobile:max-w-[140px] desktop:-right-32 desktop:bottom-0 desktop:max-h-[280px] desktop:max-w-[250px]"
          /> */}

        <Image
          src={data[active].images[0]}
          alt="image"
          width={760}
          height={450}
          className="h-fit w-[600px] object-contain mobile:h-[500px] xl:h-[556px] xl:w-[944px]"
        />
      </div>
    </div>
  );
};

export default Collection;
