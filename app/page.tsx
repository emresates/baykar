// "use client";
// import { useState, useEffect } from "react";
// import Loading from "./loading";

import Collection from "./_components/Collection";
import HeroSection from "./_components/HeroSection";
import Join from "./_components/JoinSection";
import SwiperSection from "./_components/Swiper";
import TheBest from "./_components/TheBestSection";
import World from "./_components/WorldSection";

export default function Home() {
  //todo If you want to show a loading screen before the page is fully loaded, uncomment the code below
  //todo if there was a fetch request, we wouldn't need this code, loading.js would be enough
  //todo This is exist for demonstration purposes only
  
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //     window.scrollTo(0, 0); // Scroll to the top of the page
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
