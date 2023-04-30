import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
function Cart() {
  const cart = useSelector((state) => state.cart);

  const total = useMemo(() => {
    const reduced = cart.reduce((accumulator, current) => {
      return accumulator + current.qty * current.price;
    }, 0);
    return reduced;
  }, [cart]);
  return (
    <div className=" h-full">
      <Container>
        <div className="px-2 flex flex-col gap-3">
          {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div className="shadow-md p-2 flex" id={item.id}>
                  <img src={item.img} className=" w-28 aspect-square" />
                  <span>
                    <p className=" font-bold">{item.name}</p>
                    <p>${item.price}</p>
                    <span>
                      <p>{item.qty}</p>
                    </span>
                    <button>Remove</button>
                  </span>
                </div>
              );
            })
          ) : (
            <p className=" text-xl font-bold">Your cart is empty</p>
          )}
          <p>Total:${total}</p>

          {cart.length > 0 && (
            <button className=" w-full rounded-3xl bg-[#ef5952] text-white py-3">
              Checkout
            </button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Cart;
