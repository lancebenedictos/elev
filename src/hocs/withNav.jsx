import React, { Component } from "react";
import Navbar from "../components/Navbar";

function withNav() {
  return function (Component) {
    <div>
      <Navbar />
      <Component />
    </div>;
  };
}

export default withNav;
