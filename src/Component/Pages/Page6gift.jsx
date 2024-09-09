import React, { useContext, useState } from "react";
import HeadArrow from "../../Basic/HeadArrow";

import Giftcards from "../../Basic/Giftcards";
import { ProductContext } from "../Context";

function Page6gift() {

   

    const {product} = useContext(ProductContext)
    console.log(product[2].page6
    )
    
   

  return (
    <div className="w-full mt-16 lg:mt-28">
      <div className="max-w-screen-xl   mx-auto">
        <div>
          <HeadArrow title={"Gift Sets"} />
        </div>
        <div className="giftctrl w-full overflow-hidden overflow-x-scroll flex gap- lg:gap-20">
        { product[2].page6.map((items, index)=> <Giftcards key={index} index={index} giftItems={items}   />)}
        </div>
      </div>
    </div>
  );
}

export default Page6gift;
