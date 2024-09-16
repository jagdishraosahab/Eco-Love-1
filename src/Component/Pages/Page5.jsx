import React, { useContext, useRef } from 'react'
import HeadArrow from "../../Basic/HeadArrow";
import { ProductContext } from '../Context';
import Cards from '../../Basic/Cards';

function Page5() {
 

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
    <div className='w-full mt-16 lg:mt-28'>
        <div className='max-w-screen-xl  mx-auto '>
         <div className='heading&arrow   w-full'>
         <HeadArrow title={"New Itmes"} moveLeft={moveLeft} moveRight={moveRight} />
         </div>
         <div 
         ref={boxRef}
         className='newproduct w-full lg:flex-nowrap lg:mx-0  mx-[1.3vh]   flex  lg:gap-20 overflow-x-scroll mt-10'>
         {product[1].page5.map((items, index)=> <Cards  index={index} key={index} items={items} />)}
         </div>
        </div>
        
    </div>
  )
}

export default Page5