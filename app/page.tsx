// "use client"
// import { useState, useEffect } from "react";
// import Loading from "./loading";

import HeroSection from "./_components/Hero";
import TheBest from "./_components/TheBest";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="">
      <HeroSection />
      <TheBest />
    </div>
  );
}
