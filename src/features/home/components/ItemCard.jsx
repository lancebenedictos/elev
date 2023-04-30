import React from "react";

function ItemCard({ shoe }) {
  return (
    <div className=" border-2 h-fit p-1 rounded-md shadow-md">
      <img
        src={shoe.link}
        alt=""
        className=" w-full object-cover aspect-square rounded-md"
      />
    </div>
  );
}

export default ItemCard;
