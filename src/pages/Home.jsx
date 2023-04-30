import React, { Suspense, useEffect } from "react";
import Section from "../components/Section";
import PaintedLogo from "../assets/painted-logo.png";
// Assets

// import SecondShoeMobile from "../assets/second-shoe-m.png";

import { Footer, Header, NewDropList } from "../features/home/";
import Reviews from "../features/home/components/Reviews";
import Container from "../components/Container";
function Home() {
  useEffect(() => {
    console.log("loaded");
  }, []);

  return (
    <div>
      <Header />

      {/* Main */}
      <NewDropList />
      {/* Main end */}

      <Section className="relative flex flex-col h-screen bg-second-shoe bg-cover bg-center bg-no-repeat parallax">
        {/* Logo */}
        <span className="left-1/2 -translate-x-1/2 absolute top-3 flex items-center flex-col ">
          <img src={PaintedLogo} className="w-14" />
          <h4 className="font-black">
            Just do it <span className="font-light">, tomorrow?</span>
          </h4>
        </span>
        {/* Logo end */}
        <span className="my-auto flex flex-col gap-2 text-black absolute bottom-20 p-2 max-w-md lg:left-1/2 lg:-translate-x-1/2">
          <h2 className=" font-black text-2xl tracking-wider bg-white w-fit px-4 py-2">
            <span className=" underline underline-offset-4 "> Fake shoes</span>
            &nbsp; out now!
          </h2>
          <p className=" bg-white px-4 py-2">
            Engineered to add 10 meters to your vert. The fake shoes 2 have a
            patented technology that &nbsp;
            <span className="  bg-red-500 text-white font-bold px-1">
              adds extreme comfort and high performance to your play.
            </span>
          </p>

          <div className="flex gap-1">
            <button className=" bg-green-500 w-1/2 px-4 py-2 text-white rounded-tl-full rounded-bl-full">
              Check out
            </button>
            <button className=" bg-green-500 w-1/2 px-4 py-2 text-white rounded-br-full rounded-tr-full">
              Add to cart
            </button>
          </div>
        </span>
      </Section>

      <Container>
        <span className=" border-b-2 p-2 flex flex-col items-center gap-4">
          <h2 className=" font-extrabold text-3xl underline underline-offset-8">
            Who are we?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit
            temporibus aliquid aperiam praesentium enim veritatis, quos,
            perferendis hic voluptates eligendi, velit nostrum deleniti est
            impedit totam repellat officiis! Aut?
          </p>
          <button>Find out more!</button>
        </span>
      </Container>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Reviews />
      </Suspense>

      {/* <Section className="relative flex flex-col py-10 items-center gap-4"></Section> */}

      <Container>
        <aside className="flex flex-col items-center gap-4 flex-wrap">
          <h4 className=" font-bold text-2xl opacity-40">Not seen on</h4>
          <span className="flex justify-between px-2">
            <img
              src="https://cdn.freebiesupply.com/images/large/2x/vice-logo-transparent.png"
              alt=""
              className=" aspect w-full"
            />

            <img
              src="https://1000logos.net/wp-content/uploads/2016/10/BBC-Logo-1.png"
              alt=""
              className=" aspect w-full"
            />

            <img
              src="https://www.freepnglogos.com/uploads/cnn-logo-original-png-0.png"
              alt=""
              className=" aspect w-full"
            />

            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/nbc-logo-svg-vector.svg"
              alt=""
              className=" aspect w-full"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/CBC_logo.svg/2560px-CBC_logo.svg.png"
              alt=""
              className=" aspect w-full"
            />
          </span>
        </aside>
      </Container>
    </div>
  );
}

export default Home;
