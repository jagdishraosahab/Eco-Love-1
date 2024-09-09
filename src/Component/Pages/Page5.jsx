import React, { useContext } from 'react'
import HeadArrow from "../../Basic/HeadArrow";
import Cardnew from '../../Basic/Cardnew';
import { ProductContext } from '../Context';

function Page5() {
 

  const {product} = useContext(ProductContext)


  
 
  return (
    <div className='w-full mt-16 lg:mt-28'>
        <div className='max-w-screen-xl  mx-auto '>
         <div className='heading&arrow   w-full'>
         <HeadArrow  title={"New Items"}/>
         </div>
         <div className='newproduct w-full lg:flex-nowrap lg:mx-0  mx-[1.3vh] flex-wrap  flex gap-5 lg:gap-20 overflow-x-scroll mt-10'>
         {product[1].page5.map((items, index)=> <Cardnew  index={index} key={index} items={items} />)}
         </div>
        </div>
        
    </div>
  )
}

export default Page5