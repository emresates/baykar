import React from "react";
import Button from "./shared/button";

const Navbar = () => {
  const navData = [
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "Solutions",
      link: "/solutions",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Resources",
      link: "/resources",
    },
    {
      title: "Log in",
      link: "/login",
    },
  ];
  return (
    <div className="text-secondary flex h-24 items-center justify-between px-20 py-6">
      <h1 className="text-heading-5 font-bold">Collers</h1>
      <div className="flex items-center space-x-4">
        {navData.map((item, index) => (
          <a key={index} href={item?.link} className="text-md font-medium">
            {item?.title}
          </a>
        ))}
        <Button className="w-[149px]">Sing up now</Button>
      </div>
    </div>
  );
};

export default Navbar;
