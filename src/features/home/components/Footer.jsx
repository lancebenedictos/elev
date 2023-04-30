import React from "react";
import Container from "../../../components/Container";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
function Footer() {
  return (
    <div className=" bg-[#D5DD0B] p-2 py-5 mt-6 ">
      <Container>
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 ">
          <span className="flex flex-col gap-2">
            <p>Register for updates!</p>
            <span className="w-full flex">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email "
                className="bg-2 p-2 rounded-tl-md rounded-bl-md  w-full"
              />

              <button className=" w-24 bg-[#ef5952] text-white rounded-tr-md rounded-br-md">
                Send
              </button>
            </span>
          </span>

          {/* Socials */}
          <div className="flex items-center gap-2 lg:flex-col">
            <p>Follow us here</p>
            <span className="flex gap-2">
              <a href="#" target="_blank">
                <AiOutlineInstagram className="h-7 w-7" />
              </a>
              <a href="#">
                <AiOutlineFacebook className="h-7 w-7" />
              </a>
              <a href="#">
                <TfiTwitter className="h-7 w-7" />
              </a>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
