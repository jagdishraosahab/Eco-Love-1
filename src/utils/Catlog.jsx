import React, { useContext, useState } from "react";
import MoreCrad from "../Basic/MoreCrad";
import Navbar from "../Component/Navbar";
import { ProductContext } from "../Component/Context";

function Search() {

  
 const {flatMapProduct} = useContext(ProductContext)

  


  

  return (
    <div className="w-full ">
      <Navbar />
      <div className=" flex gap-5 flex-wrap ">
        {flatMapProduct.map((items , index)=>
        <MoreCrad img={items.img} productName={items.productName} price={items.price} isCart={items.isCart} index={index}  />
        )}
        
      </div>
      <button className='text-xl px-5 py-3 hover:font-semibold  rounded-xl ml-[15vh] lg:ml-[47%] mt-10 mb-5 border-2 border-[#838A60]'>Load More</button>
    </div>
  );
}

export default Search;
