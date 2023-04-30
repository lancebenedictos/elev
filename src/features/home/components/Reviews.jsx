import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Review from "./Review";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { usersSeed } from "../utils/seed";

function Reviews() {
  return (
    <div className=" flex flex-col items-center  w-full ">
      <h2 className=" font-extrabold text-3xl underline underline-offset-8">
        Reviews
      </h2>

      <div className="flex overflow-x-scroll w-full gap-1 no-scroll my-4 overflow-y-hidden">
        {usersSeed?.map((user) => {
          return <Review user={user} id={user.userId} />;
        })}
      </div>
    </div>
  );
}

export default Reviews;
