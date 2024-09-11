import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Component/Context";

function Cardsale({items , clickHandler2 , index}) {

  const {addToCartPgae7} = useContext(ProductContext)

  const {img , productName , price , isLiked , isCart} = items
  return (
    <Link className="w-[40%] mx-3 lg:mx-0 lg:w-[20%] flex flex-shrink-0 flex-col relative ">
    <Link to='/productpage:id'>
    <div className=" h-[25vh] lg:h-[45vh] bg-purple-600 rounded-lg overflow-hidden border-[1px] border-[#838A60]">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt=""
        />
      </div>
    </Link>
      <div className="">
        <h1 className="text-sm lg:text-md font-[Poppins] font-bold leading-none tracking-tight mt-5">
         {productName}
        </h1>
        <h4 className="text-xl lg:text-md mt-2 font-bold font-[Poppins]">${price}</h4>
        <button onClick={()=>addToCartPgae7(index)}
        className={`px-10 py-3 lg:py-3 mt-4 lg:px-[65px] rounded-xl  ${isCart ? 'bg-[#838A60]' :'bg-[#BA9659]'}`}>
          <h3 className="text-sm text-white font-[Poppins] font-bold ">
            {isCart ? "Added" : "Add To Cart"}
          </h3>
        </button>
        <button className="absolute top-[0%] left-[8%] px-1  py-5 rounded-bl-xl rounded-br-xl bg-[#a43b0f]">
          <h3 className="text-xl text-white font-[Poppins] tracking-tight leading-none ">
            10%
          </h3>
        </button>
      </div>
      </Link>

  );
}

export default Cardsale;
