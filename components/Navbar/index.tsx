"use client";
import React from "react";
import Button from "../shared/button";

const Navbar = () => {
  const navData = [
    {
      title: "Products",
      link: "#",
    },
    {
      title: "Solutions",
      link: "#",
    },
    {
      title: "Pricing",
      link: "#",
    },
    {
      title: "Resources",
      link: "#",
    },
    {
      title: "Log in",
      link: "#",
    },
  ];
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex h-16 items-center justify-between p-4 text-secondary desktop:h-24 desktop:px-20 desktop:py-6">
      <h1 className="text-heading-5 font-bold">Collers</h1>
      <div className="flex items-center">
        <div
          className="flex flex-col items-end gap-1 desktop:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${isOpen ? "w-[18px] translate-y-2 rotate-45" : "w-[8px] rotate-0"} h-0.5 rounded-full bg-secondary transition-all`}
          ></div>
          <div
            className={`${isOpen ? "w-[0px]" : "w-[13px]"} h-0.5 rounded-full bg-secondary transition-all`}
          ></div>
          <div
            className={`${isOpen ? "-translate-y-1 -rotate-45" : "rotate-0"} h-0.5 w-[18px] rounded-full bg-secondary transition-all`}
          ></div>
        </div>

        <div className="hidden space-x-4 desktop:block">
          {navData.map((item, index) => (
            <a key={index} href={item?.link} className="text-md font-medium">
              {item?.title}
            </a>
          ))}
          <Button className="w-[149px]">Sing up now</Button>
        </div>
        <div
          className={`${isOpen ? "right-0 opacity-100" : "right-full opacity-0"} z-50 absolute top-16 divide-y flex h-[calc(100vh-64px)] w-full flex-col bg-secondary transition-all desktop:hidden rounded-t-md`}
        >
          {navData.map((item, index) => (
            <a
              key={index}
              href={item?.link}
              className="flex h-full items-center justify-center text-center text-2xl font-medium text-white"
            >
              {item?.title}
            </a>
          ))}
          <div className="flex h-full items-center justify-center">
            <Button color="white" className="w-[149px]">
              Sing up now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
