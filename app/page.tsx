// "use client"
// import { useState, useEffect } from "react";
// import Loading from "./loading";

import Collection from "./_components/Collection";
import HeroSection from "./_components/HeroSection";
import Join from "./_components/JoinSection";
import SwiperSection from "./_components/Swiper";
import TheBest from "./_components/TheBestSection";
import World from "./_components/WorldSection";

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
      <Join />
      <SwiperSection />
      <Collection />
      <World />
    </div>
  );
}
