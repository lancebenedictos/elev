import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import query from "../utils/query";
import { addItem } from "../store/slices/cartSlice";
function ItemInfo() {
  const { id } = useParams();
  const shoe = useMemo(() => query(id), [id]);

  const sizes = Array.from({ length: 12 }).map(
    (_, index) => `US ${5 + index * 0.5}`
  );

  const [size, setSize] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const dispatch = useDispatch();
  function onAddToCart() {
    if (!size) return setError("Select a size");
    dispatch(addItem(shoe));
    setError(null);
    setSuccess("Item successfully added");
  }
  return (
    <div className=" flex flex-col py-3">
      {shoe ? (
        <Container>
          <div className="flex gap-2 mt-3 flex-col lg:flex-row mx-3 lg:mx-0">
            <img src={shoe.img} className="w-full lg:w-1/2" />

            <div className="flex flex-col gap-2">
              <div className="px-2">
                <h1 className=" font-semibold text-xl">{shoe.name}</h1>
                <h2>{shoe.category}</h2>
                <p>${shoe.price}</p>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                vitae maxime reiciendis? Quidem, velit assumenda perspiciatis
                dolore tenetur, corporis mollitia similique quam doloribus
                impedit fugiat explicabo nulla repellendus atque quas?
              </p>
              <h3>Select size</h3>
              <span className="grid grid-cols-3 gap-1">
                {sizes.map((size, index) => (
                  <label
                    htmlFor={size}
                    id={index}
                    className="flex justify-center border-[1px]  py-2 rounded-lg size"
                  >
                    {size}
                    <input
                      type="radio"
                      id={size}
                      name="size"
                      className="hidden"
                      value={size}
                      onChange={(e) => {
                        setSize(e.target.value);
                      }}
                    />
                  </label>
                ))}
              </span>
              {error ? <p className=" text-red-600">{error}</p> : null}
              {success ? <p className=" text-red-600">{success}</p> : null}

              <button
                className=" py-3 rounded-3xl text-white bg-black mt-auto"
                onClick={onAddToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        </Container>
      ) : (
        <>404</>
      )}
    </div>
  );
}

export default ItemInfo;
