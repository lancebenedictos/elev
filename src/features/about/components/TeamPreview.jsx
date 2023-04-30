import React from "react";
import seed from "../utils/seed";
import TeamCard from "./TeamCard";

function TeamPreview() {
  return (
    <div className="lg:grid lg:grid-cols-2 flex-grow w-full gap-2">
      {seed.map((member) => {
        return <TeamCard member={member} />;
      })}
    </div>
  );
}

export default TeamPreview;
