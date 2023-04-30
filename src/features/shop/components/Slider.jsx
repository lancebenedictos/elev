import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { headerImgs } from "../../../utils/seed";
function Slider() {
  return (
    <Carousel
      autoPlay={true}
      emulateTouch={true}
      interval={1000}
      showArrows={false}
      showStatus={false}
      infiniteLoop={true}
      showThumbs={false}
    >
      {headerImgs.map((img) => (
        <img src={img} id={img} />
      ))}
    </Carousel>
  );
}

export default Slider;
