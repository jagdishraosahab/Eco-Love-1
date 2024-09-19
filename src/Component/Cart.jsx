import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import { ProductContext } from "./Context";

import MoodyCards from "../utils/MoodyCards";


const Cart = () => {
  const [quantities, setQuantities] = useState({}); // Track individual quantities
  const { cartProduct ,removeFromCart } = useContext(ProductContext);
  // console.log(cartProduct)
// 
  // const flatedCartProduct = cartProduct.flat()
  // console.log(flatedCartProduct)

  const handleQuantityChange = (id, increment) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) + increment, 1), // Ensure quantity doesn't go below 1
    }));
  };

  const calculateTotalPrice = () => {
    return cartProduct.reduce(
      (acc, item) => acc + item.price * (quantities[item.id] || 1),
      0
    );
  };

  return (
    <div className="max-w-screen-xl min-h-screen mx-auto py-2 ">
      <div className="flex items-center gap-1">
        <Link to="/" className="text-2xl font-[NewYork]">
          Home
        </Link>
        <IoIosArrowDropright size={"1.5em"} />
        <span className="text-2xl font-[NewYork]">Cart</span>
      </div>

      <h1 className="text-2xl font-[Poppins] font-semibold py-10 px-3">
        Products
      </h1>

      {cartProduct.map((item) => <MoodyCards data={item} quantities={quantities}/>)}

      <div className="w-full h-auto mb-10 ">
        <h1 className="text-xl font-[Poppins] font-semibold px-3">
          Total Price: ${calculateTotalPrice()}
        </h1>
        <div className="flex gap-5 py-3">
          <Link
            className="text-xl font-[Poppins] font-semibold px-3 bg-[#838A60] rounded-md  py-2"
            to="/checkout"
          >
            Checkout
          </Link>
          <Link
            className="text-xl font-[Poppins] font-semibold px-3 bg-[#838A60] rounded-md  py-2 "
            to="/"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
