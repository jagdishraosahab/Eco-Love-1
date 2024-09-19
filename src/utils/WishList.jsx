import React, { useContext } from 'react'
import { RiAddCircleLine } from "react-icons/ri";
import { FiMinusCircle } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


const WishList = ({data }) => {
  
  return (
    <div key={data.id} className="w-full min-h-[30vh] py-2 px-3 mx-auto">
          <div className="flex items-center w-full h-full gap-10 bg-green-200 rounded-xl">
            <div className="lg:w-[20%] h-[28vh]">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={data.img}
                alt={data.productName}
              />
            </div>
            <div className='relative'>
              <h2 className="font-[Poppins] capitalize font-bold text-xl">
                {data.productName}
              </h2>
              <p className="text-sm font-[Poppins] text-gray-600">Description</p>
              <p className="text-lg font-[Poppins] text-gray-800">
                ${data.price}
              </p>
              
            </div>
          </div>
        </div>
  )
}

export default WishList