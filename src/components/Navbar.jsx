import React, { useEffect, useState } from "react";
import Container from "./Container";
import logo from "../assets/logo-monster.png";
import NavbarLink from "./NavbarLink";
import { NavLink, useLocation } from "react-router-dom";
import { BiCart, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuShowing(false);
  }, [location]);

  const cart = useSelector((state) => state.cart);
  return (
    <nav className="sticky top-0 w-full z-10 block bg-white bg-opacity-90 shadow-lg">
      <Container>
        <span className="flex items-center p-2">
          <NavLink to="/">
            <span className="flex items-center gap-2">
              <img src={logo} className=" h-10  w-10" />
              <p className="text-black font-black text-xl align-middle">
                Elevate.
              </p>
            </span>
          </NavLink>

          <span className=" ml-auto flex items-center gap-2">
            <span className="hidden lg:flex">
              <NavbarLink path="/">Home</NavbarLink>
              <NavbarLink path="/shop">Shop</NavbarLink>
              <NavbarLink path="/about">About</NavbarLink>
              <NavbarLink path="/login" mobile>
                Login
              </NavbarLink>
              <NavbarLink path="/signup" mobile>
                Signup
              </NavbarLink>
            </span>
            <NavLink to="/cart">
              <span className="text-white bg-black px-4 items-center justify-center rounded-3xl py-1 gap-1 flex">
                <BiCart className="w-6 h-6" />
                {cart.length > 0 ? <p>{cart.length}</p> : null}
              </span>
            </NavLink>
            <button
              className="lg:hidden outline-none"
              onClick={() => setIsMenuShowing(true)}
            >
              <BiMenu className=" text-black w-7 h-7" />
            </button>
          </span>
        </span>

        {/* overlay for mobile */}
        {isMenuShowing ? (
          <div className="top-0 left-0 w-screen h-screen fixed  flex flex-col items-center bg-[#ffd500] gap-5 text-3xl">
            <div className="flex items-center w-full p-2">
              <span className="flex items-center gap-2">
                <img src={logo} className=" h-10  w-10" />
                <p className="text-black font-black text-xl align-middle">
                  Elevate.
                </p>
              </span>
              <button
                className="ml-auto"
                onClick={() => setIsMenuShowing(false)}
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <NavbarLink path="/" mobile className="text-2xl">
                Home
              </NavbarLink>
              <NavbarLink path="/shop" mobile className="text-2xl">
                Shop
              </NavbarLink>
              <NavbarLink path="/about" mobile className="text-2xl">
                About
              </NavbarLink>
              <NavbarLink path="/login" mobile className="text-2xl">
                Login
              </NavbarLink>
              <NavbarLink path="/signup" mobile className="text-2xl">
                Signup
              </NavbarLink>
            </div>
          </div>
        ) : null}
      </Container>
    </nav>
  );
}

export default Navbar;
