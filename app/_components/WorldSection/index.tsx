"use client";
import { useRef, useState } from "react";
import { ComposableMap, Marker } from "react-simple-maps";
import "tailwindcss/tailwind.css";
import WorldMap from "./WorldMap";
import Image from "next/image";
import AnimatedNumber from "../../../components/shared/AnimatedNumber";

const markers = [
  {
    name: "Emma Simpson collected one pair of Cool Shoes",
    coordinates: [-98.006, 40.7128],
  },
  {
    name: "Johnson Primary collected ten pairs of Cool Shoes",
    coordinates: [-120.006, 56.7128],
  },
  {
    name: "Emma Jetgilles collected four pairs of Cool Shoes",
    coordinates: [-0.1276, 51.5074],
  },
  {
    name: "Johny Bravo collected one pair of Cool Shoes",
    coordinates: [-35.1276, 81.5074],
  },
  {
    name: "Peter Jackson collected six pairs of Cool Shoes",
    coordinates: [-50.1276, 65.5074],
  },
  {
    name: "Ronald Miriam collected one pair of Cool Shoes",
    coordinates: [-50.1276, -25.5074],
  },
  {
    name: "Melinda Samsung collected five pairs of Cool Shoes",
    coordinates: [-40.1276, -10.5074],
  },
  {
    name: "Tim Apple collected one pair of Cool Shoes",
    coordinates: [30.1276, -0.5074],
  },
  {
    name: "Tony Stark collected three pairs of Cool Shoes",
    coordinates: [95.1276, 31.5074],
  },
  {
    name: "Donald Trump collected two pairs of Cool Shoes",
    coordinates: [132.1276, 33.5074],
  },
  {
    name: "Austin Brown collected two pairs of Cool Shoes",
    coordinates: [142.1276, -20.5074],
  },
  {
    name: "Emre Ateş collected one pair of Cool Shoes",
    coordinates: [40.1276, 35.5074],
  },
];

export default function World() {
  const [tooltipContent, setTooltipContent] = useState({
    content: "",
    x: 0,
    y: 0,
    visible: false,
  });

  const handleMouseEnter = (
    name: string,
    event: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    // Tooltip konumunu belirle
    const tooltipYPosition = event.clientY - 340; // Tooltip'i markerın üstünde göstermek için
    setTooltipContent({
      content: name,
      x: event.clientX,
      y: tooltipYPosition,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setTooltipContent({ content: "", x: 0, y: 0, visible: false });
  };
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative flex h-[700px] items-center justify-center bg-[#78350F] px-[180px] py-20 text-white">
      <div
        ref={containerRef}
        className="pointer-events-none absolute z-10 text-center"
      >
        <h1 className="text-heading-1-l font-extrabold">
          <AnimatedNumber ref={containerRef} targetNumber={11658467} />
        </h1>

        <h2 className="text-heading-2 font-extrabold">Shoes Collected</h2>
      </div>

      <ComposableMap
        projectionConfig={{
          scale: 150,
          center: [0, 40], // Haritanın merkezini belirler. 0: enlem, 20: boylam.
        }}
        className="h-full w-full"
        projection="geoMercator"
      >
        <WorldMap />
        {markers.map(({ name, coordinates }) => (
          <Marker
            key={name}
            coordinates={coordinates as [number, number]}
            onMouseEnter={(e) => handleMouseEnter(name, e)}
            onMouseLeave={handleMouseLeave}
          >
            <circle
              r={7}
              fill="transparent"
              stroke="#A3E635"
              strokeWidth={2}
              className="hover:fill-[#A3E635]"
            />
          </Marker>
        ))}
      </ComposableMap>

      {/* {markers.map(({ name, coordinates }) => (
        <div
          className="absolute h-3 w-3 rounded-full bg-red-500"
          style={{
            left: `${((coordinates[0] + 180) * 100) / 360}%`,
            top: `${((90 - coordinates[1]) * 100) / 180}%`,
          }}
          key={name}
          onMouseEnter={(e) => handleMouseEnter(name, e)}
          onMouseLeave={handleMouseLeave}
        ></div>
      ))}

      <Image
        src="/world.png"
        alt="world"
        width={1000}
        height={1000}
        className="h-full w-auto"
      /> */}

      {tooltipContent.visible && (
        <div
          className="absolute z-10 flex flex-col items-center justify-center text-black"
          style={{
            left: tooltipContent.x,
            top: tooltipContent.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <Image
            src="/images/collection/collected.jpeg"
            alt="shoe"
            width={250}
            height={200}
            className="h-[200px] w-[250px] rounded-t-[10px] border-[5px] border-white object-cover"
          />
          <p className="max-w-[250px] rounded-b-[10px] bg-gray-100 px-4 pb-2 pt-4 text-sm">
            {tooltipContent.content}
          </p>
        </div>
      )}
    </div>
  );
}
