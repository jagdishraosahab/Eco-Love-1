import React from "react";

function Cardsale({items}) {

  const {img , text , price , isLiked , isCart} = items
  return (
    <div className="w-[20%] flex flex-shrink-0 flex-col relative ">
      <div className=" h-[45vh] bg-purple-600 rounded-lg overflow-hidden border-[1px] border-[#838A60]">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt=""
        />
      </div>
      <div className="">
        <h1 className="text-md font-[poppins] font-bold leading-none tracking-tight mt-5">
         {text}
        </h1>
        <h4 className="text-md mt-2 font-bold font-[poppins]">${price}</h4>
        <button className={`py-3 mt-4 px-[65px] rounded-xl  bg-[#BA9659]`}>
          <h3 className="text-sm text-white font-[poppins] font-bold ">
            Add To Cart
          </h3>
        </button>
        <button className="absolute top-[0%] left-[8%] px-1  py-5 rounded-bl-xl rounded-br-xl bg-[#a43b0f]">
          <h3 className="text-xl text-white font-[poppins] tracking-tight leading-none ">
            10%
          </h3>
        </button>
      </div>
      </div>

  );
}

export default Cardsale;
