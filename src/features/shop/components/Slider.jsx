import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { headerImgs } from "../../../utils/seed";
function Slider() {
  return (
    <div className="flex flex-center items-center">
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        interval={1000}
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
        className="w-[70%] mx-auto"
      >
        {headerImgs.map((img, index) => (
          <img src={img} id={img} key={index} />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
