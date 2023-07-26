import React from "react";
import { NavLink } from "react-router-dom";

function NavbarLink(props) {
  const { children, path } = props;
  return (
    <div className="text-white font-black">
      <NavLink
        to={path}
        preventScrollReset={true}
        style={({ isActive, isPending }) => {
          return {
            color: "black",
          };
        }}
        className={`py-2 px-4 rounded-3xl outline-none ${props.className}`}
      >
        <span>{children}</span>
      </NavLink>
    </div>
  );
}

export default NavbarLink;
