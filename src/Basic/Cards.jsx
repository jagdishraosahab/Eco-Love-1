import React from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Cards({
  giftItems,
  items = "nothing",
  clickHandler = "nothing",
  clickHandler2 = "nothing",
  index = "mothing",
}) {
  const { img, productName, Price, isAdded, isCart } = items;

  return (
    <>
      <div className="lg:w-[20%]   w-full relative shrink-0">
        <Link to="/productpage:id">
          <div className="card bg-red-300 lg:w-full w-full  lg:overflow-hidden h-full lg:h-[45vh] lg:mt-10  border-[1px] border-[#838A60] rounded-md lg:rounded-lg ">
            <img
              className="lg:w-full lg:h-full w-full h-full   object-cover  "
              src={img}
              alt=""
            />
            <button
              onClick={() => clickHandler(index)}
              className={`lg:w-[35px] lg:h-[35px] w-[30px] h-[30px]   top-[2%] lg:top-[9.5%]  rounded-full ${
                isAdded === true ? "bg-red-400" : " bg-slate-50"
              } left-[79%] absolute `}
            >
              <span className="flex items-center  lg:flex lg:items-center lg:justify-center lg:mt-[2.2px] lg:ml-[1px]">
                <CiHeart color=" black" size="2em" />
              </span>
            </button>
          </div>
        </Link>

        <div className="details   mt-5">
          <h2 className="text-md font-[poppins] font-bold leading-none tracking-tight">
            {productName}
          </h2>

          <h4 className="text-md mt-2 font-bold font-[poppins]">${Price}</h4>
          <button
            onClick={() => clickHandler2(index)}
            className={`py-3 mt-4 px-[65px] rounded-xl ${
              isCart ? "bg-[#838A60]" : "bg-[#BA9659]"
            }`}
          >
            <h3 className="text-sm text-white font-[poppins] font-bold ">
              {isCart === true ? "Added" : " Add To Cart"}
            </h3>
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;

{
}
