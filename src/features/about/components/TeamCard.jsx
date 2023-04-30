import React from "react";

function TeamCard({ member }) {
  return (
    <div className="w-full h-full flex flex-col p-4 items-center">
      <img src={member.img} alt={member.name} className="rounded-full w-1/3 " />
      <p className=" text-lg font-semibold mt-4">{member.name}</p>
      <p className=" text-gray-500">{member.position}</p>
      <p className=" text-gray-500">{member.term}</p>
    </div>
  );
}

export default TeamCard;
