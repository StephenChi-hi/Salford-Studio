import { Header2, Header3, Header4 } from "@/components/Text";
import React from "react";

function ElevatingBrands() {
  const pictureTypes = ["Weddings", "Portraits", "Events", "Commercial", "and More"];

  // Generate an array of 300 items cycling through the picture types
  const brands = Array.from(
    { length: 300 },
    (_, i) => pictureTypes[i % pictureTypes.length]
  );

  return (
    <div className="py-[20px] bg-bg_gray text-p_black">
      <div className="slider-container3 overflow-hidden whitespace-nowrap">
        <div className="slider-content3 flex gap-[22px] animate-slider3">
          {brands.map((brand, index) => (
            <React.Fragment key={index} >
              <Header4>{brand}</Header4>
              <img
                src="/images/cameralove.png"
                alt="camera"
                className=" sm:h-[50px] h-[30px] "
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElevatingBrands;
