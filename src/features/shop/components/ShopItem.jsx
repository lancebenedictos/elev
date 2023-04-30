import React from "react";
import { NavLink } from "react-router-dom";

function ShopItem({ shoe }) {
  return (
    <NavLink
      to={`/shop/${shoe.id}`}
      className=" shadow-lg w-full rounded-lg overflow-clip "
      id={shoe.id}
    >
      <img src={shoe.img} alt="" />

      <span className="p-2 block">
        <p className=" font-semibold">{shoe.name}</p>
        <p className=" font-light">{shoe.category}</p>
        <p className="my-3">{`$${shoe.price}`}</p>
      </span>
    </NavLink>
  );
}

export default ShopItem;
