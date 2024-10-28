import React from "react";
import { Geographies, Geography } from "react-simple-maps";

const WorldMap = () => {
  // Ülkelerin renklerini hesaplayın ve sabit tutun
  const colorsData = ["#d64300", "#e76125", "#9a3c11", "#c14b15"];

  return (
    <Geographies geography="/path.json">
      {({ geographies }) => {
        const fillColors = geographies.map((_, idx) => {
          return colorsData[idx % colorsData.length];
        });
        return geographies.map((geo, idx) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            className="pointer-events-none fill-orange-800"
            style={{
              default: { fill: fillColors[idx] }, // Her ülke için sabit renk kullan
            }}
          />
        ));
      }}
    </Geographies>
  );
};

export default WorldMap;
