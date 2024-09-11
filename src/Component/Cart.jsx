import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import { ProductContext } from "./Context";
import { RiAddCircleLine } from "react-icons/ri";
import { FiMinusCircle } from "react-icons/fi";

const Cart = () => {
  const [quantities, setQuantities] = useState({}); // Track individual quantities
  const { cartProduct } = useContext(ProductContext);
  console.log(cartProduct)

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
    <div className="max-w-screen-xl min-h-screen mx-auto py-2 overflow-hidden">
      <div className="flex items-center gap-1">
        <Link to="/" className="text-2xl font-[NewYork PERSONAL USE]">
          Home
        </Link>
        <IoIosArrowDropright size={"1.5em"} />
        <span className="text-2xl font-[NewYork PERSONAL USE]">Cart</span>
      </div>

      <h1 className="text-2xl font-[Poppins] font-semibold py-10 px-3">
        Products
      </h1>

      {cartProduct.map((item) => (
        <div key={item.id} className="w-full min-h-[30vh] py-2 px-3 mx-auto">
          <div className="flex items-center w-full h-full gap-10 bg-green-200 rounded-xl">
            <div className="lg:w-[20%] h-[28vh]">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={item.img}
                alt={item.productName}
              />
            </div>
            <div>
              <h2 className="font-[Poppins] capitalize font-bold text-xl">
                {item.productName}
              </h2>
              <p className="text-sm font-[Poppins] text-gray-600">Description</p>
              <p className="text-lg font-[Poppins] text-gray-800">
                ${item.price}
              </p>
              <div className="flex items-center gap-3">
                <RiAddCircleLine
                  size={"1.4em"}
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="cursor-pointer"
                />
                <span>{quantities[item.id] || 1}</span>
                <FiMinusCircle
                  size={"1.4em"}
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="w-full h-[5vh] bg-yellow-300">
        <h1 className="text-xl font-[Poppins] font-semibold px-3">
          Total Price: ${calculateTotalPrice()}
        </h1>
        <div className="flex gap-5 py-3">
          <Link
            className="text-xl font-[Poppins] font-semibold px-3 bg-teal-300  py-2"
            to="/checkout"
          >
            Checkout
          </Link>
          <Link
            className="text-xl font-[Poppins] font-semibold px-3 bg-teal-300  py-2 "
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
