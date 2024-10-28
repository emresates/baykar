"use client";
import { useState } from "react";
import { ComposableMap, Marker } from "react-simple-maps";
import "tailwindcss/tailwind.css";
import WorldMap from "./WorldMap";

const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "London", coordinates: [-0.1276, 51.5074] },
  { name: "asd", coordinates: [-50.1276, 81.5074] },
  { name: "Lonx123don", coordinates: [70.1276, 31.5074] },
  { name: "Londzxcon", coordinates: [-0.1276, 51.5074] },
  { name: "Londdfgson", coordinates: [-0.1276, 51.5074] },
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
    const tooltipYPosition = event.clientY - 290; // Tooltip'i markerın üstünde göstermek için
    setTooltipContent({
      content: `${name} collected shoes`,
      x: event.clientX,
      y: tooltipYPosition,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setTooltipContent({ content: "", x: 0, y: 0, visible: false });
  };

  return (
    <div className="relative flex h-[700px] items-center justify-center bg-[#78350F] px-[180px] py-20 text-white">
      <div className="pointer-events-none absolute z-10 text-center">
        <h1 className="text-heading-1-l font-extrabold">11,658,467</h1>
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
              r={5}
              fill="transparent"
              stroke="#fff"
              strokeWidth={2}
              className="hover:fill-white"
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

      {tooltipContent && (
        <div
          className="absolute z-10 rounded bg-white p-2 text-black shadow-lg"
          style={{
            left: tooltipContent.x,
            top: tooltipContent.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltipContent.content}
        </div>
      )}
    </div>
  );
}
