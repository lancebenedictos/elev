import React from "react";
import { data } from "../../../utils/seed";
import Container from "../../../components/Container";

import ShopItem from "./ShopItem";
function ShopList() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-2 justify-center p-2 lg:grid-cols-3">
        {data.map((shoe) => (
          <ShopItem shoe={shoe} id={shoe.id} />
        ))}
      </div>
    </Container>
  );
}

export default ShopList;
