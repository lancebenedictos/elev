import React from "react";
import Container from "../components/Container";
import { ComicSlider, TeamPreview } from "../features/about";
import DeconShoe from "../assets/decon-shoe.png";
function About() {
  return (
    <div className="py-2">
      <Container>
        <img src={DeconShoe} className="w-1/2 lg:w-1/3 mx-auto" />

        <div className="flex flex-col items-center w-full lg:grid lg:grid-cols-3 lg:gap-2">
          <div className="flex flex-col items-center gap-2  max-w-sm h-full">
            <div className="highlight-container">
              <h2 className=" font-semibold text-xl highlight">Quality</h2>
            </div>
            <p className=" text-gray-400">
              Our shop is dedicated to providing high-quality items that are
              durable, reliable, and perform well. We carefully select each
              product and work only with reputable suppliers who share our
              commitment to excellence. You can shop with confidence knowing
              that every item we sell meets our strict standards for quality.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2  max-w-sm  h-full">
            <div className="highlight-container">
              <h2 className=" font-semibold text-xl highlight">Speed</h2>
            </div>
            <p className=" text-gray-400">
              We understand the importance of speed when it comes to service. We
              strive to provide our customers with fast and efficient service,
              without compromising on quality. We work hard to ensure that every
              customer receives their order in a timely manner, and we are
              always looking for ways to improve our delivery times. When you
              shop with us, you can expect prompt and reliable service, every
              time.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center  max-w-sm  h-full">
            <div className="highlight-container">
              <h2 className=" font-semibold text-xl highlight">Service</h2>
            </div>
            <p className=" text-gray-400">
              At our shop, we are dedicated to providing exceptional customer
              service. Our team is committed to meeting and exceeding our
              customers' needs and expectations, and we strive to create a
              positive experience for every person who shops with us.
            </p>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 my-10">
          <ComicSlider />

          <div className="p-2 flex flex-col items-center">
            <h2 className=" text-2xl font-black">Our team</h2>
            <TeamPreview />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
