import React from "react";
import Container from "../../../components/Container";
import HighlightedText from "./HighlightedText";
import ItemCard from "./ItemCard";
import data from "../utils/seed";

function NewDropList() {
  return (
    <Container>
      <main className="relative flex flex-col p-2 py-10 items-center min-h-screen ">
        <HighlightedText>
          <h2 className=" font-extrabold text-3xl">Popular drops</h2>
        </HighlightedText>
        <p className="py-2 text-slate-500 font-semibold underline underline-offset-4">
          Limited stocks available
        </p>
        {/* grid container */}
        <div className="h-full my-auto">
          <div className=" grid grid-cols-2 w-full gap-1 py-4 lg:grid-cols-3">
            {data.map((shoe) => (
              <ItemCard shoe={shoe} key={shoe.image} />
            ))}
          </div>
        </div>
        <button className="mt-auto">Find more here</button>
      </main>
    </Container>
  );
}

export default NewDropList;
