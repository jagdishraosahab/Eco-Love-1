import React, { useContext } from 'react'
import { ProductContext } from '../Component/Context'




export const Button = ({isCart , productName }) => {

 const {addToCart} = useContext(ProductContext)   
  return (
    <div>

<button
            onClick={() => addToCart(productName)}
            className={`lg:py-3 mt-4 lg:px-[65px] px-10 py-3 rounded-xl ${
              isCart ? "bg-[#838A60]" : "bg-[#BA9659]"
            }`}
          >
          {isCart ? <h3 className="text-sm text-white font-[Poppins] font-bold ">
              Added
          </h3>   :<h3 className="text-sm text-white font-[Poppins] font-bold ">
              Add To Cart
          </h3>  }
          </button>
    </div>
    
  )
}
