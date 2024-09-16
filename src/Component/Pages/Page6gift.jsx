import React, { useContext, useRef, useState } from "react";
import HeadArrow from "../../Basic/HeadArrow";


import { ProductContext } from "../Context";
import Cards from "../../Basic/Cards";

function Page6gift() {

   

    const {product} = useContext(ProductContext)
    const boxRef = useRef(null);

    function moveLeft() {
      if (boxRef.current) {
        boxRef.current.scrollTo({
          left: boxRef.current.scrollLeft - 200,
          behavior: "smooth",
        }); // scrolls left by 200px
      }
    }
    // Function to move right
    function moveRight() {
      if (boxRef.current) {
        boxRef.current.scrollTo({
          left: boxRef.current.scrollLeft + 200,
          behavior: "smooth",
        });
      }
    }
    
   

  return (
    <div className="w-full mt-16 lg:mt-28">
      <div className="max-w-screen-xl   mx-auto">
        <div>
        <HeadArrow title={"Gift Sets"} moveLeft={moveLeft} moveRight={moveRight} />
        </div>
        <div 
        ref={boxRef}
        className="giftctrl w-full overflow-hidden overflow-x-scroll flex  lg:gap-20">
        { product[2].page6.map((items, index)=> <Cards key={index} index={index} items={items}   />)}
        </div>
      </div>
    </div>
  );
}

export default Page6gift;
