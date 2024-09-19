import React, { useContext } from 'react'
import WishList from '../utils/WishList'
import { ProductContext } from '../Component/Context';
import { Link } from 'react-router-dom';
import { IoIosArrowDropright } from "react-icons/io";

const Wish = () => {
    const { wishListProduct } = useContext(ProductContext);
    console.log(wishListProduct)
  return (
    <div className="max-w-screen-xl min-h-screen mx-auto py-2 ">
      <div className="flex items-center gap-1">
        <Link to="/" className="text-2xl font-[NewYork]">
          Home
        </Link>
        <IoIosArrowDropright size={"1.5em"} />
        <span className="text-2xl font-[NewYork]">WishList</span>
      </div>

      <h1 className="text-2xl font-[Poppins] font-semibold py-10 px-3">
        Products
      </h1>

      {wishListProduct.map((item) => <WishList data={item} />)}

      <div className="w-full h-auto mb-10 ">
     
        <div className="flex gap-5 py-3">
         
          <Link
            className="text-xl font-[Poppins] font-semibold px-3 bg-[#838A60] rounded-md  py-2 "
            to="/"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Wish