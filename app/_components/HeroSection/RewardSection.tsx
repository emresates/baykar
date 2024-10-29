import Image from "next/image";
import React from "react";

const RewardSection = () => {
  const rewardsData = [
    {
      title: "Nibh viverra",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
      icon: "/images/hero/trophy.svg",
      blob: "/images/hero/trophyback.png",
    },
    {
      title: "Cursus amet",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
      icon: "/images/hero/tunnel.svg",
      blob: "/images/hero/tunnelback.png",
    },
    {
      title: "Ipsum fermentum",
      description:
        "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
      icon: "/images/hero/tv.svg",
      blob: "/images/hero/tvback.png",
    },
  ];
  return (
    <div className="flex w-full flex-col items-center justify-between gap-y-8 desktop:flex-row pb-4 desktop:pb-0 desktop:space-x-20 pt-20 px-4 ">
      {rewardsData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center space-y-4 desktop:block"
        >
          <div className="relative h-16 w-16">
            <Image src={item.icon} alt="icon" width={64} height={64} />
            <Image
              src={item.blob}
              alt="blob"
              width={40}
              height={40}
              className="absolute right-0 top-0"
            />
          </div>
          <p className="text-xl font-medium">{item.title}</p>
          <p className="text-center text-lg desktop:text-left">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RewardSection;
