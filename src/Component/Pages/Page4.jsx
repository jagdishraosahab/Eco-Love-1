import React, { useContext, useState, useRef } from "react";
import HeadArrow from "../../Basic/HeadArrow";
import Cards from "../../Basic/Cards";
import { ProductContext } from "../Context";

function Page4() {
  const { product } = useContext(ProductContext);
  const [products, setProducts] = useState(product);

  function clickHandler(index) {
    setProducts((prev) => {
      return prev.map((items, itemIndex) => {
        if (itemIndex === index) return { ...items, isAdded: !items.isAdded };
        return items;
      });
    });
  }

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
    <div className='w-full mt-16 lg:mt-28'>
    <div className='max-w-screen-xl  mx-auto '>
     <div className='heading&arrow   w-full'>
     <HeadArrow title={"Popular Products"} moveLeft={moveLeft} moveRight={moveRight} />
     </div>
     <div 
     ref={boxRef}
     className='newproduct w-full lg:flex-nowrap lg:mx-0  mx-[1.3vh]   flex  lg:gap-20 overflow-x-scroll mt-10'>
     {product[0].page4.map((items, index)=> <Cards  index={index} key={index} items={items} />)}
     </div>
    </div>
    
</div>
  );
}

export default Page4;
