import React from "react";

function Container(props) {
  return (
    <div
      className={`container mx-auto max-w-screen-l lg:w-3/4 ${
        props.relative ? "relative" : ""
      }`}
    >
      {props.children}
    </div>
  );
}

export default Container;
