import React from "react";

function Review({ user }) {
  const fullDate = `${user.date.getMonth()}-${user.date.getDate()}-${user.date.getFullYear()}`;
  console.log(user);
  return (
    <div className=" w-60 h-72 border-2 rounded-lg flex flex-col gap-1 items-start shrink-0 p-2 overflow-hidden">
      <span className="flex items-center gap-2">
        <img
          src={user.avatar}
          alt=""
          className=" rounded-full w-12 p-1 border-2 shadow-md border-orange-400"
        />
        <span>
          <p className=" font-bold">{user.name}</p>
          <p className=" text-gray-400">{fullDate}</p>
        </span>
      </span>

      <p className="">{user.message}</p>
    </div>
  );
}

export default Review;
