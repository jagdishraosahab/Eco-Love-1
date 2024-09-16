import React from "react";
import { Button } from "../utils/Button";
import { Link } from "react-router-dom";

function MoreCrad({ img, index, productName, price, isCart }) {
  // const { } = items;
  return (
    <Link to={`/productpage/${productName}`} className="mx-auto w-[20vh]  lg:w-[17%]">
      <div className=" ">
        <div className="card bg-red-300 lg:w-full w-full shrink-0  lg:overflow-hidden overflow-hidden h-full lg:h-[45vh] lg:mt-10  border-[1px] border-[#838A60] rounded-md lg:rounded-lg ">
          <img
            className="lg:w-full lg:h-full w-full h-[20vh] object-cover"
            src={img}
            alt=""
          />
        </div>
        <div className="details mt-5">
          <h2 className="text-md font-[Poppins] capitalize font-bold leading-none tracking-tight">
            {productName}
          </h2>
          <h4 className="text-md mt-2 font-bold font-[Poppins]">${price}</h4>
          <Button isCart={isCart} productName={productName} />
        </div>
      </div>
    </Link >
  );
}

export default MoreCrad;
