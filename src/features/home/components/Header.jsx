import React from "react";
import Container from "../../../components/Container";
import { BiChevronDownCircle } from "react-icons/bi";
function Header() {
  return (
    <header className=" text-white relative  bg-hero-image-2 h-screen w-full bg-cover pt-14 bg-center">
      <Container>
        {/* Hero text */}
        <span className="flex gap-2 flex-col mx-auto w-11/12 mt-5 lg:w-1/3 lg:absolute">
          <h1 className=" font-black text-3xl tracking-widest font-mono text-shadow-header">
            Level up your <br /> style
            <p className=" font-black inline">.</p>
          </h1>
          <p className=" font-semibold text-shadow-para bg-blue bg-opacity-90 p-2 rounded-md box-shadow">
            Step up your fashion game with our curated collection of trendy and
            comfortable shoes. Discover your perfect fit and elevate your style
            to the next level. Shop now and step into something new.
          </p>
          <button className=" header-button text-white  w-fit ">
            Shop now
          </button>
          <button className=" absolute bottom-10 right-1/2 translate-x-1/2 bg-slate-500 p-1 rounded-full">
            <BiChevronDownCircle className="w-10 h-10 " />
          </button>
        </span>
        {/* Hero text */}
      </Container>
    </header>
  );
}

export default Header;
