import React from "react";
import { Link } from "react-router-dom";

function Cardnew({items , index , clickHandler2}) {


  const {img , text , price , isAdded} = items

  return (
    <Link to='/productpage:id' className="w-[45%] lg:w-[20%] flex-shrink-0 flex flex-col relative ">
      <div className="h-[20vh] lg:h-[45vh]  rounded-lg overflow-hidden border-[1px] border-[#838A60]">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt=""
        />
      </div>
      <div className="">
        <h1 className=" text-sm lg:text-md font-[poppins] font-bold leading-none tracking-tight mt-5">
          {text}
        </h1>
        <h4 className="text-md mt-2 font-bold font-[poppins]">${price}</h4>
        <button onClick={()=>clickHandler2(index)}
         className={`px-10 py-3 lg:py-3 mt-4 lg:px-[65px] rounded-xl  ${isAdded ? 'bg-[#838A60]' :'bg-[#BA9659]'}`}>
          <h3 className="text-sm text-white font-[poppins] font-bold ">
            {isAdded ? "Added" : "Add To Cart"}
          </h3>
        </button>
        <button className="absolute top-[0%] left-[-0%] p-2 rounded-br-xl bg-[#838A60]">
          <h3 className="text-xl text-white font-[poppins] tracking-tight leading-none ">
            New
          </h3>
        </button>
      </div>
    </Link >
  );
}

export default Cardnew;
