import React, { useContext } from 'react'
import { CiHeart } from "react-icons/ci";
import MoreCrad from './MoreCrad';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Component/Context';

function Giftcards({giftItems , clickHandler ,clickHandler2 , index}) {

  const {addToCartPgae6} = useContext(ProductContext)

    const {img , price , isLiked , productName , isCart } = giftItems
  return (
    <div  className="w-[40%] mx-3 lg:mx-0 lg:w-[20%] relative shrink-0">
        <div to='/productpage:id' className="card bg-red-300 w-full overflow-hidden h-[25vh] lg:h-[45vh] mt-10 border-[1px] border-[#838A60] rounded-lg ">
          <img className="w-full h-full  object-cover  " src={img} alt="" />
          <button
            onClick={() => clickHandler(index)}
            className={`hidden lg:block w-[35px] h-[35px] top-[9.5%]  rounded-full ${
                isLiked === true ? "bg-red-400" : " bg-slate-50"
            } left-[85%] absolute `}
          >
            <span className="lg:flex  items-center justify-center mt-[2.2px] ml-[1px]">
              <CiHeart color=" black" size="2em" />
            </span>
          </button>
          <MoreCrad/>
        </div>

        <div className="details mt-5">
          <h2 className="text-sm lg:text-md font-[poppins]  font-bold leading-none tracking-tight">
            {productName}
          </h2>

          <h4 className="text-xl lg:text-md mt-2 font-bold font-[poppins]">${price}</h4>
          <button
            onClick={() => addToCartPgae6(index)}
            className={`px-10 py-3 lg:py-3 mt-4 lg:px-[65px] rounded-xl ${
              isCart ? "bg-[#838A60]" : "bg-[#BA9659]"
            }`}
          >
            <h3 className="text-sm text-white font-[poppins] font-bold ">
              {isCart === true ? "Added" : " Add To Cart"}
            </h3>
          </button>
        </div>
      </div>
  )
}

export default Giftcards